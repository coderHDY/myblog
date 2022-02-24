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
## 6.数据流清理
:::: tabs
::: tab label=题
<img src="./assets/dataflow.png" style="width:400px"/>

* node: 节点,string
```js
const node = 'NODE_1';
```
* columns: 节点排列，二维数组
```js
const columns = [
    ['NODE_2', 'NODE_3'],
    ['NODE_1', 'NODE_4', 'NODE_1'],
    ['NODE_5', 'NODE_3'],
];
```
* links: 错误的/冗余的连接数据。
```js
const rawLinks = [
    { source: 'NODE_2', target: 'NODE_1', value: 3 },
    { source: 'NODE_2', target: 'NODE_1', value: 23 },
    { source: 'NODE_3', target: 'NODE_1', value: 11 },
    { source: 'NODE_1', target: 'NODE_5', value: 53 },
    { source: 'NODE_1', target: 'NODE_5', value: 6 },
    { source: 'NODE_3', target: 'NODE_3', value: 20 },
]
```
* 要求生成正确的连接数据
```js
// 1.左侧列节点和右侧列节点必须有连接
// 2.如果原来没有这个连接，新建并且value设置成0
// 3.如果原来有多个这条路径的连接，加起来
// 4.计算出每个node的出入度
console.log(getRightLinks(rawLinks, columns));
```
:::
::: tab label=解：架构思路
```js
function getRightLinks(rawLinks, columns) {
    // 初始化所有需要的连接，值设置成 { source-target:0 }
    const initNeedLinks = () => { }
    const initLinksObj = initNeedLinks();

    // 如果原生路径的连接，重复的加起来生成一个【hasLinks】对象
    // {source-target:value，source-target:value}
    const mergeRawLinks = () => { }
    const hasLinks = mergeRawLinks();

    // 遍历hasLinks给initLinksObj赋值，替换掉原来的0
    Object.entries(hasLinks).forEach(([key, val]) => { })

    // 将initLinksObj转换成
    // links：[{source, target, value},{...}]
    const links = Object.entries(initLinksObj).map(([key, value]) => { })

    // 根据links生成新的对象，拿到所有node的出入度，
    // {'NODE_1': 10, ...}
    const getSumNodeValue = () => {}
    const nodes = getSumNodeValue();

    return {
        links,
        nodes
    }
}
```
```js
// 测试数据
const columns = [
    ['NODE_2', 'NODE_3'],
    ['NODE_1', 'NODE_4', 'NODE_1'],
    ['NODE_5', 'NODE_3'],
];

const rawLinks = [
    { source: 'NODE_2', target: 'NODE_1', value: 3 },
    { source: 'NODE_2', target: 'NODE_1', value: 23 },
    { source: 'NODE_3', target: 'NODE_1', value: 11 },
    { source: 'NODE_1', target: 'NODE_5', value: 53 },
    { source: 'NODE_1', target: 'NODE_5', value: 6 },
    { source: 'NODE_3', target: 'NODE_3', value: 20 },
]

console.log(getRightLinks(rawLinks, columns));
```
:::
::: tab label=解
```js
function getRightLinks(rawLinks, columns) {
    // 初始化所有需要的连接，值设置成 { source-target:0 }
    const initNeedLinks = () => {
        const ans = {}
        for (let i = 0; i < columns.length - 1; i++) {
            const sources = columns[i];
            sources.forEach(source => {
                for (let j = 0; j < columns[i + 1].length; j++) {
                    const target = columns[i + 1][j];
                    const key = source + '-' + target;
                    ans[key] = 0;
                }
            })
        }
        return ans;
    }
    const initLinksObj = initNeedLinks();

    // 如果原来路径的连接，加起来生成一个source-target:value的值的对象
    const mergeRawLinks = () => {
        const ans = {};
        for (let i = 0; i < rawLinks.length; i++) {
            const source = rawLinks[i].source;
            const target = rawLinks[i].target;
            const key = source + '-' + target;
            const value = rawLinks[i].value;
            ans[key] = ans.hasOwnProperty(key) ? ans[key] + value : value;
        }
        return ans;
    }
    const hasLinks = mergeRawLinks();

    // 遍历hasLinks给initLinksObj赋值
    Object.entries(hasLinks).forEach(([key, val]) => {
        if (initLinksObj.hasOwnProperty(key)) {
            initLinksObj[key] = val;
        }
    })

    // 将links转换成[{source, target, value},{...}]形式
    const links = Object.entries(initLinksObj).map(([key, value]) => {
        const [source, target] = key.split('-');
        return { source, target, value }
    })

    // 根据links生成新的对象，拿到所有node的出入度
    const getMaxNodeValue = () => {
        return links.reduce((pre, { source, target, value }) => {
            pre[source] = pre.hasOwnProperty(source) ? pre[source] + value : value;
            pre[target] = pre.hasOwnProperty(target) ? pre[target] + value : value;
            return pre;
        }, {});
    }
    const nodes = getMaxNodeValue();

    return {
        links,
        nodes
    }
}
```
:::
::: tab label=结果
```js
// 测试数据
const columns = [
    ['NODE_2', 'NODE_3'],
    ['NODE_1', 'NODE_4', 'NODE_1'],
    ['NODE_5', 'NODE_3'],
];

const rawLinks = [
    { source: 'NODE_2', target: 'NODE_1', value: 3 },
    { source: 'NODE_2', target: 'NODE_1', value: 23 },
    { source: 'NODE_3', target: 'NODE_1', value: 11 },
    { source: 'NODE_1', target: 'NODE_5', value: 53 },
    { source: 'NODE_1', target: 'NODE_5', value: 6 },
    { source: 'NODE_3', target: 'NODE_3', value: 20 },
]

console.log(getRightLinks(rawLinks, columns));

// {
//     links: [
//       { source: 'NODE_2', target: 'NODE_1', value: 26 },
//       { source: 'NODE_2', target: 'NODE_4', value: 0 },
//       { source: 'NODE_3', target: 'NODE_1', value: 11 },
//       { source: 'NODE_3', target: 'NODE_4', value: 0 },
//       { source: 'NODE_1', target: 'NODE_5', value: 59 },
//       { source: 'NODE_1', target: 'NODE_3', value: 0 },
//       { source: 'NODE_4', target: 'NODE_5', value: 0 },
//       { source: 'NODE_4', target: 'NODE_3', value: 0 }
//     ],
//     nodes: { NODE_2: 26, NODE_1: 96, NODE_4: 0, NODE_3: 11, NODE_5: 59 }
// }
```
:::
::::