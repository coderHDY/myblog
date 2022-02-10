---
title: 算法题
date: 2022-02-10
---
## 移动*
:::: tabs
::: tab label=期望
* 将数组的*号移动到最前面，不能改变数字顺序。
```js
const arr = ['*', '1', '2', '*', '4', '*', '7', '3'];

moveStart(arr);
console.log(arr); // ['*', '*', '*', '1', '2', '4',  '7', '3']
```
:::
::: tab label=解
```js
function moveStart(arr) {
    let lastIndex = arr.lastIndexOf('*');
    let temp;
    const handler = () => {
        arr.splice(lastIndex, 1);
        arr.unshift('*');
        temp = lastIndex;
        lastIndex = arr.lastIndexOf('*');
    }
    while (lastIndex != temp) {
        handler();
    }
}
```
:::
::::

## 千位分隔符
:::: tabs
::: tab label=题
```js
const num = 12335667999;

console.log(split(num)); // 12,335,667,999
```
:::
::: tab label=解1
* 反转正则替换
```js
function split(num) {
    const reg = /([0-9]{3})/g;
    return `${num}`.split('').reverse().join('').replace(reg, '$1,').split('').reverse().join('');
}
```
:::
::: tab label=解2
* toLocaleString
```js
function split(num) {
    return num.toLocaleString('en-US');
}
```
:::
::::