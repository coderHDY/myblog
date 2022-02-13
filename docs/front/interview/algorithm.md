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

moveStart(arr);
console.log(arr); // ['*', '*', '*', '*', '1', '2', '4',  '7', '3']
```
:::
::: tab label=暴力删除
```js
function moveStart(arr) {
    let lastIndex = arr.lastIndexOf('*');
    let numOfStart = 0;
    const deleteStart = () => {
        numOfStart++;
        arr.splice(lastIndex, 1);
        lastIndex = arr.lastIndexOf('*');
    }
    const unshiftStart = () => {
        for (let i = 0; i < numOfStart; i++) {
            arr.unshift('*');
        }
    }
    while (lastIndex != -1) {
        deleteStart();
    }
    unshiftStart();
}
```
:::
::: tab label=双指针
```js
function moveStart(arr) {
    let first = -1;
    let last = arr.lastIndexOf('*');
    const helper = () => {
        arr.splice(last, 1);
        arr.unshift('*');
        last = arr.lastIndexOf('*', last);
        first++;
    }
    while (last != first) {
        helper();
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
