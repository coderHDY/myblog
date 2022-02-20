---
title: 算法题
date: 2022-02-10
---
## 1.移动*
:::: tabs
::: tab label=期望
* 将数组的*号移动到最前面，不能改变数字顺序。
```js
const arr = ['*', '*', '1', '2', '*', '4', '*', '*', '7', '3'];

moveStar(arr);
console.log(arr); // ['*', '*', '*', '*', '*', '1', '2', '4',  '7', '3']
```
:::
::: tab label=遍历移动
```js
function moveStar(arr) {
    let idx = arr.findIndex(item => item !== '*');
    idx = arr.indexOf('*', idx);
    while (idx !== -1) {
        arr.splice(idx, 1);
        arr.unshift('*');
        idx = arr.indexOf('*', idx + 1);
    }
}
```
:::
::: tab label=双指针
```js
function moveStar(arr) {
    let start = arr.findIndex(item => item !== '*');
    let end = arr.lastIndexOf('*');
    const replace = () => {
        arr.splice(end, 1);
        arr.unshift('*');
        end = arr.lastIndexOf('*');
        start++;
    }
    while (end > start) {
        replace();
    }
}
```
:::
::::

## 2.千位分隔符
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

## 3.比较版本号
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
    if (ver1 === ver2) return 0;
    const arr1 = ver1.split('.').map(item => +item.padEnd(2, 0));
    const arr2 = ver2.split('.').map(item => +item.padEnd(2, 0));
    const arr1Max = () => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return arr1[i] > arr2[i];
            }
        }
        return true;
    };
    return arr1Max() ? 1 : 2;
}
```
:::
::::
## 4.手写getElementById
:::: tabs
::: tab label=题
```html
<body>
    <div>
        <div>
            <button id='btn1'>按钮</button>
        </div>
    </div>
    <div>
        <button id='btn2'>按钮</button>
    </div>

    <script>
        console.log(getElementById('btn1')); // <button id='btn1'>按钮</button>
    </script>
</body>
```
:::
::: tab label=深度优先解
```js
function getElementById(id) {
    const find = Array.prototype.find;
    let ans;
    const handler = el => {

        // 深度优先遍历
        find.call(el.children, item => {
            if (!ans && item.id === id) {
                ans = item;
                return true;
            } else {
                handler(item);
            }
        });
    }
    handler(document.body);
    return ans;
}
```
:::
::: tab label=深度优先解2
```js
function getElementById(id) {
    const handler = children => {
        for (let i  = 0; i < children.length; i++) {
            if (children[i].id === id) {
                return children[i];
            }
            ans = handler(children[i].children);
            if (ans) {
                return ans;
            }
        }
    }
    return handler(document.body.children);
}
```
:::
::: tab label=广度优先解
```js
function getElementById(id) {
    const find = Array.prototype.find;
    const forEach = Array.prototype.forEach;
    let ans;
    const isEle = (el) => el.id === id;
    const handler = el => {
        const children = el.children;

        // 广度优先遍历
        ans = find.call(children, item => isEle(item)) || ans;
        if (!ans) {
            forEach.call(children, item => handler(item));
        }
    }
    handler(document.body);
    return ans;
}
```
:::
::::
## 5.合并对象
:::: tabs
::: tab label=题
```js
const obj1 = {a: 1, b: 2, c: {d: 3}, j: 7};
const obj2 = {a: 4, b: {e: 5}, c: {f: 6}};

console.log(merge(obj1, obj2));
// { a: 4, b: {e: 5}, c: {d: 3, f: 6}, j: 7 }
```
:::
::: tab label=解
* 规则：
    1. o1 / o2 都是对象就深度合并比较
    2. o1 / o2 都是非引用对象就o2覆盖
    3. o1普通/ o2引用 用o2覆盖
```js{7-15}
const obj1 = {a: 1, b: 2, c: {d: 3}, j: 7};
const obj2 = {a: 4, b: {e: 5}, c: {f: 6}};

function merge(obj1, obj2) {
    const ans = JSON.parse(JSON.stringify(obj1));

    const mergeSamePro = (o1, o2, key) => {
        if (typeof o1[key] === 'object'  && o1[key] != null && typeof o2[key] === 'object' && o2[key] != null) {
            Object.entries(o2[key]).forEach(([k, val]) => mergeSamePro(o1[key], o2[key], k));
        } else if (typeof o2[key] === 'object') {
            o1[key] = o2[key] === null ? o1[key] : o2[key];
        } else {
            o1[key] = o2[key];
        }
    }

    Object.entries(obj2).forEach(([key, val]) => {
        mergeSamePro(ans, obj2, key);
    })
    return ans;
}

console.log(merge(obj1, obj2));
// { a: 4, b: {e: 5}, c: {d: 3, f: 6}, j: 7 }
```
:::
::::