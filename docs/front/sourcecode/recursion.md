---
title: 考察递归
date: 2021-11-21
---
## 对象 flatten扁平化
:::: tabs
::: tab label=需求
```js
const obj = {
    a: {
        b: 1,
        c: 2,
        d: {
            e: 5
        }
    },
    b: [1, 3, {
        a: 2,
        b: 3
    }],
    c: 3
}

const obj2 = flatten(obj);

console.log(obj2);

//
// obj2 = {
//     'a.b': 1,
//     'a.c': 2,
//     'a.d.e': 5,
//     'b[0]': 1,
//     'b[1]': 3,
//     'b[2].a': 2,
//     'b[2].b': 3,
//     'c': 3
// }
```
:::
::: tab label=重点思路
* 主要目的就是为了深度取出非引用类型值赋给一个对象，同时深度取值的时候要记录当前的key
* 所以大家要**共享某一个对象**，取出值赋给它，可以**利用作用域链的变量**，也可以**通过传参传入**
```js
//
// obj2 = {
//     'a.b': 1,
//     'a.c': 2,
//     'a.d.e': 5,
//     'b[0]': 1,
//     'b[1]': 3,
//     'b[2].a': 2,
//     'b[2].b': 3,
//     'c': 3
// }
```
:::
::: tab label=实现
* 通过作用域做共享变量
```js
function flatten(obj) {
    const ans = {};

    function deepFlatten(obj, cKey) {
        if (Array.isArray(obj)) {
            obj.forEach((item, index) => deepFlatten(item, `${cKey}[${index}]`));
        } else if (obj instanceof Object) {
            Object.entries(obj).forEach(([key, value]) => deepFlatten(value, `${cKey}.${key}`));
        } else {

            // 上面都只是在递归取值、拼接key，只有这里在生成结果
            ans[`${cKey}`] = obj;
        }
    }

    Object.entries(obj).forEach(([key, value]) => deepFlatten(value, key));
    return ans;
}
```
:::
::: tab label=实现二
* 通过共享传参
```js
function flatten(obj, cKey, ans = {}) {
    if (!cKey) {
        Object.entries(obj).forEach(([key, value]) => flatten(value, key, ans));
    } else {
        if (Array.isArray(obj)) {
            obj.forEach((item, index) => flatten(item, `${cKey}[${index}]`, ans));
        } else if (obj instanceof Object) {
            Object.entries(obj).forEach(([key, value]) => flatten(value, `${cKey}.${key}`, ans));
        } else {

            // 上面都只是在递归取值、拼接key，只有这里在生成结果
            ans[cKey] = obj;
        }
    }
    return ans;
}
```
:::
::::

## n变1次数
:::: tabs
::: tab label=问题
* 给正整数n：
    1. 偶数：n = n/2
    2. 奇数：n = n + 1 || n -1
* 求：n 变成1最小替换次数
```js
let n = 2;
console.log(toOneNeedsTime(n)); // 1

n = 11;
console.log(toOneNeedsTime(n)); // 5
```
:::
::: tab label=实现
* 核心思路：递归外层函数计算递归次数(可以用while递归也可以用函数递归)
```js
function toOneNeedsTime(num) {
    let times = 0;
    let cNum = num;
    while(cNum !== 1) {
        cNum = cNum % 2 === 0 ? cNum / 2 : cNum - 1;
        times++;
    }
    return cNum;
}
```
:::
::::