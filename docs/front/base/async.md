# async/await
## 介绍
::: tip async/await
* async定义异步函数。async函数本身被包装成了一个new Promise
* async function 的返回值将被隐式地包装给 Promise.resolve
* await定义async异步函数内的异步代码，会包装一层promise，并且会等待到这个promise状态变更完，再执行后面的代码
:::
:::: tabs
::: tab label=使用
* 等两秒输出0，等两秒输出1，等两秒输出2和3
```js{11-15}
function promise(i) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(i);
            resolve();
        }, 2000)
    });
}

async function repeat() {
    for (let i = 0; i < 3; i++) {

        // 会 await 后面的 promise 状态变更完
        await promise(i);
    }
    return 3;
}

repeat().then(res => console.log(res));
```
:::
::: tab label=async包装
* async的**return值是被包装到Promise.resolve(value)里面**，所以无论有没有异步操作，都会被扔到微任务队列去
```js{3,6}
async function fn() {
    console.log('async代码')
    return 'async返回';
}

fn().then(res => console.log(res));
console.log('同步')
setTimeout(() => console.log('宏任务'));
/**
 * async代码
 * 同步
 * async返回
 * 宏任务
 */
```
:::
::: tab label=await包装
* await是将同行代码包装成Promise，后面代码包装成.then，然后包装的promise状态发生改变，后面代码推入微任务队列
> async函数和下面的promise执行一一对应，执行完一个then推入下一个then
```js{3-5,14-16,24-25,28-29,31-32}
// 一个await后面是一层.then，与下面的new Promise交叉进行推入微任务队列，证明。
async function sum() {
    await console.log(1);
    await console.log(2);
    await console.log(3);

    return 4;
}

console.log(0);

sum().then(res => console.log(res));

new Promise(resolve => { console.log(5); resolve(); })
.then(() => console.log(6))
.then(() => console.log(7))

.then(() => console.log(8))

console.log(9);

/**
 * 0
 * 1
 * 5
 * 9
 * 
 * 2
 * 6
 * 
 * 3
 * 7
 * 
 * async返回包装：[Promise.resolve(4)]
 * 8
 * 4
 */
```
:::
::: tab label=多个async优化
* 多个async时，下一个async总是要等到上一个async的promise状态发生改变才会执行，如果**下一个async依赖于上一个async的结果**还可以理解。例：
```js
const fn1 = res => new Promise(resolve => setTimeout(() => resolve(res + 1), 1000));
const fn2 = res => new Promise(resolve => setTimeout(() => resolve(res + 1), 1000));
const fn3 = res => new Promise(resolve => setTimeout(() => resolve(res + 1), 1000));

async function sum() {
    const ans1 = await fn1(1);
    const ans2 = await fn2(ans1);
    const ans3 = await fn3(ans2);
    return ans3;
}

sum().then(res => console.log(res)); // (...3s后) 4
```
* 但如果不依赖上一个async的结果，那么我们只是要他们都执行完再返回async函数，那么我们可以**用变量存储此promise让他直接执行。然后也用await等结果**：
```js
const networkData1 = () => new Promise(resolve => setTimeout(() => resolve(2), 1000));
const networkData2 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const networkData3 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));

async function sum() {

    // 直接都开始
    const getData1 = networkData1();
    const getData2 = networkData2();
    const getData3 = networkData3();

    // 等待返回，然后取resolve值
    ans1 = await getData1;
    ans2 = await getData2;
    ans3 = await getData3;

    return ans1 + ans2 + ans3;
}

sum().then(res => console.log(res)); // (...1s后) 4
```
:::
::::

## 异步详解
::: tip async
* async的return值被Promise.resolve包裹，所以首先要了解[Promise.resolve](./promise.html#resolve)的机制
:::
:::: tabs
::: tab label=返回非promise
* 返回非Promise相当于Promise.resolve(value)，会直接将他的then推入微任务队列
```js{2,15,18}
async function getData() {
    return 0;
}

getData().then(res => console.log(res));

new Promise(resolve => resolve())
.then(_ => console.log(1))
.then(_ => console.log(2))
.then(_ => console.log(3))

console.log('同步');

/**
 * 【new Promise(resolve => resolve(0))】
 * 同步
 * 
 * 0
 * 1
 * 
 * 2
 * 
 * 3
 */
```
:::
::: tab label=返回promise
* async返回promise相当于Promise.resolve(promise)，会返回此promise，然后依据此promise状态推入后续then
```js{2,15,19,22}
async function getData() {
    return new Promise(resolve => resolve(0));
}

getData().then(res => console.log(res));

new Promise(resolve => resolve())
.then(_ => console.log(1))
.then(_ => console.log(2))
.then(_ => console.log(3))

console.log('同步');

/**
 * 【new Promise(resolve => resolve(new Promise(resolve => resolve(0))))】
 * 同步
 * 
 * 【return的Promise.then】
 * 1
 * 
 * 【外层Promise.resolve()】
 * 2
 * 
 * 0
 * 3
 */
```
:::
::::
## 面试题
* 求打印顺序，对比
:::: tabs
::: tab label=async返回同步
```js{7-10}
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2 start');
  return console.log('async2 promise');
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
}).then(function () {
  console.log('promise3');
});
console.log('script end');
```
:::
::: tab label=async返回异步
```js{7-14}
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2 start');
    return new Promise((resolve, reject) => {
        console.log('---');
        resolve();
        console.log('async2 promise');
    }).then(() => console.log('then'));
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
}).then(function () {
    console.log('promise3');
});
console.log('script end');
```
:::
::::
* 结果分析
::::tabs
::: tab label=返回同步
```js{5}
/**     同步      */
// script start
// async1 start
// async2 start
// async2 promise 【Promise.resolve(非promise)，直接将后续then推入微任务队列，也就是await后面的代码】
// promise1
// script end

/**     微任务队列      */
// async1 end
// promise2

// promise3

/**     宏任务队列      */
// setTimeout
```
:::
::: tab label=返回异步
```js{14}
/**     同步      */
// script start
// async1 start
// async2 start
// ---
// async2 promise

// promise1
// script end

/**     微任务队列      */
// then
// promise2
// 【.then() 返回了一个隐式的 new Promise(resolve => waicengResolve(undefined))】调用外层await包装的promise的resolve

// promise3
// async1 end

/**     宏任务队列      */
// setTimeout
```
:::
::::