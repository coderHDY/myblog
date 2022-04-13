---
title: 回溯
date: 2022-04-13
---
## 77. 组合
:::: tabs
::: tab label=题
* 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
* 组合不能有重复项，如：[2, 3] [3, 2] 不可以有
```js
const n = 4, k = 2;
console.log(combine(n, k))
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
```
:::
::: tab label=解
* 用同一个数组进行回溯传参，可以节省空间，直到需要存储结果再把它`解构复制`出来一份
>时间：91.12%  
>空间：55.59%
```js
var combine = function(n, k) {
    const ans = [];
    (function handler (arr = [], i = 1) {
        if (arr.length === k) return ans.push([...arr]);
        for (; i <= n; i++) {
            arr.push(i);
            handler(arr, i + 1);
            arr.pop();
        }
    })()
    return ans;
};
```
:::
::::