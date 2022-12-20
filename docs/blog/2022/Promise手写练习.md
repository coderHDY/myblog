---
title: Promise手写练习
date: 2022-12-20
---
## Promise手写练习
```js
class MyPromise {
    static PENDDING = "pendding";
    static FULLFILLING = "fullfilling";
    static REJECTED = "rejected";
    thenCallback = null;
    catchCallback = null;
    state = MyPromise.PENDDING;
    constructor(fn) {
        fn.call(null, this.resolve, this.reject);
        return this;
    }
    resolve = (res) => {
        if (this.state !== MyPromise.PENDDING) return;
        this.state = MyPromise.FULLFILLING;
        process.nextTick(() => this.thenCallback?.call(null, res));
    }
    reject = (reason) => {
        if (this.state !== MyPromise.PENDDING) return;
        this.state = MyPromise.REJECTED;
        process.nextTick(() => this.catchCallback?.call(null, reason));
    }
    then = (callback1, callback2) => {
        this.thenCallback = callback1;
        if (callback2) this.catchCallback = callback2;
        if (this.state === MyPromise.FULLFILLING) {
            process.nextTick(() => this.thenCallback?.call(null, res));
        }
        if (this.state === MyPromise.REJECTED) {
            process.nextTick(() => this.catchCallback?.call(null, reason));
        }
    }
    catch = () => {
        this.catchCallback = callback2;
        if (this.state === MyPromise.REJECTED) {
            process.nextTick(() => this.catchCallback?.call(null, reason));
        }
    }
}


new MyPromise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
    setTimeout(() => reject(1), 2000);
}).then(res => {
    console.log(res);
}, (reason) => {
    console.log(reason);
})
```