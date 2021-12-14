# async/await
## 介绍
::: tip async/await
* async定义异步函数。async function 的返回值将被隐式地包装给 Promise.resolve
* await定义async异步函数内的异步代码，会包装一层promise，并且会等待到后面的Promise状态变更完
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
* await也是将返回值包装
:::
::::

## 异步详解
::: tip
* async的return值被Promise.resolve包裹，所以首先要了解Promise.resolve的机制
:::