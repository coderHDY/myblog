---
title: 前端面试题整理
date: 2021-11-04
tags:
 - 面试题
---

## 连续赋值
:::: tabs
::: tab label=题目
```js
var a = {
    n: 1,
    x: 3
}
a.x = a = { n: 2};
console.log(a.x); // ?
```
:::
::: tab label=思路
* 理解：正常时从右到左赋值，但是【.】操作符比【=】操作符优先级高，所以先走a.x的赋值
```js{7}
var a = {
    n: 1,
    x: 3
}
// a.x = a = { n: 2};
a.x = {n: 2};
a = {n: 2}; // 引用赋值，所以现在 a = {n: 2}，a.x消失
console.log(a.x); // undefined
```
:::
::: tab label=证明
* 证明猜测
```js
let me = {
    name: 'hdy',
    age: 18,
    books: [
        '红宝书',
        '蝴蝶书'
    ]
}

me.name = me = me.books;
console.log(me); // ['红宝书', '蝴蝶书']

/**
 * 1. me.name = me.books; ['红宝书', '蝴蝶书']
 * 2. me = me.books;      ['红宝书', '蝴蝶书']
 */
```
:::
::::