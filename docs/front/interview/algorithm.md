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
    if (lastIndex === -1) {
        return;
    }
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

## 比较版本号
:::: tabs
::: tab label=题
```js

/**
 * 比较两个版本号大小：
 *  1：参数1大
 *  0：一样大
 * -1：参数2大
 */

const ver1 = '2.11.21';
const ver2 = '1.2.03';

console.log(compare(ver1, ver2)); // 1
```
:::
::: tab label=解
```js
function compare(ver1, ver2) {
    if (ver1 === ver2) {
        return 0;
    }
    const ver1Arr = ver1.split('.');
    const ver2Arr = ver2.split('.');
    let ver1Greater = true;
    for (let i = 0; i < ver1Arr.length; i++) {
        const maxLen = Math.max(ver1Arr[i].length, ver2Arr[i].length);
        const padver1 = ver1Arr[i].padEnd(maxLen, '0');
        const padver2 = ver2Arr[i].padEnd(maxLen, '0');
        if(padver1 !== padver2) {
            ver1Greater = padver1 > padver2;
            break;
        }
    }
    return ver1Greater ? 1 : -1;
}
```
:::
::::