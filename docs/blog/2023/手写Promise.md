---
title: 手写Promise
date: 2023-10-19
---
```js
class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  static resolve = (val) => {
    if (val instanceof MyPromise) {
      return val;
    } else {
      return new MyPromise((resolve) => resolve(val));
    }
  };
  static reject = (err) => {
    if (err instanceof MyPromise) {
      return err;
    } else {
      return new MyPromise((resolve, reject) => reject(val));
    }
  };
  status = MyPromise.PENDING;
  // 存成功或者失败的值
  state = undefined;
  callbackQueues = [];
  constructor(fn) {
    try {
      fn(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }

  resolve = (ans) => {
    // 单向状态流
    if (this.status !== MyPromise.PENDING) {
      return;
    }
    this.status = MyPromise.FULFILLED;
    this.state = ans;
    this.callbackQueues.map((cb) => {
      // 为什么 cb 会有 then
      setTimeout(() => cb.onResolved(ans));
    });
  };

  reject = (err) => {
    // 单向状态流
    if (this.status !== MyPromise.PENDING) {
      return;
    }
    this.status = MyPromise.REJECTED;
    this.state = err;
    this.callbackQueues.map((item) => {
      setTimeout(() => item.onRejected(err));
    });
  };

  then = (onResolved, onRejected) => {
    // 格式化 onResolved onRejected
    onResolved = this.isFn(onResolved) ? onResolved : (v) => v;
    onRejected = this.isFn(onRejected) ?
      onRejected :
      (v) => {
        throw v;
      };
    return new MyPromise((resolve, reject) => {
      // 代码优化部分，把下面部分额加catch
      const handle = (cb) => {
        try {
          const result = cb(this.state);
          if (result instanceof MyPromise) {
            /*
             * Rejected：需判断返回值是不是 Promise3
             * 难点：Promise 的状态只会影响第一个then/reject 执不执行，reject 错误不往下传递，因此后续的 Promise 可以继续自己的 then
             */
            result.then((res) => resolve(res));
          } else {
            // 返回值非 Promise，直接 resolve 出去
            resolve(result);
          }
        } catch (e) {
          reject(e);
        }
      };

      /**
       * 重点：无论调用 onResolve / onReject 哪一个，都要改变本 Promise 的状态
       * 同时在 try / catch 中执行
       * 取到 then /catch 的结果
       * 结果是 Promise，则返回值的 Promise 结束，这个 return 的 Promise 才结束
       * 结果不是 Promise，则直接结束这个返回的 Promise 并 resolve 出去返回值
       *  */
      const nextItem = {
        onResolved: (val) => {
          this.state = val;
          handle(onResolved);
        },
        onRejected: (err) => {
          this.state = err;
          handle(onRejected);
        },
      };

      // 开始外层 Promise1 状态判断，决定内层 Promise2 行为
      if (this.status === MyPromise.PENDING) {
        // Pending：then推到等待状态列表
        this.callbackQueues.push(nextItem);
      } else if (this.status === MyPromise.FULFILLED) {
        setTimeout(() => handle(onResolved));
      } else if (this.status === MyPromise.REJECTED) {
        setTimeout(() => handle(onRejected));
      }
    });
  };

  catch = (cb) => {
    return this.then(undefined, cb);
  };
  finally = (cb) => {
    return this.then(
      (v) => MyPromise.resolve(cb()).then(() => v),
      (err) => MyPromise.resolve(cb())
    ).then(() => {
      throw err;
    });
  };

  // tools
  isFn = (fn) => typeof fn === "function";
}

new MyPromise((resolve, reject) => {
    // reject(1);
    resolve(1);
  })
  .then((res) => console.log(res))
  .catch((err) => console.log("err", err))
  .finally(() => console.log("finally"))
```