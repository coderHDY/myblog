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
## 22. 括号生成
:::: tabs
::: tab label=题
* 生成**有效的**n个括号组
```js
const n = 3
console.log(generateParenthesis(n));
// 输出：["((()))","(()())","(())()","()(())","()()()"]
```
:::
::: tab label=解
* 长度等于需要string的长度回溯结束
* 长度不等于左括号永远先进
* 左括号大于右括号的情况下进右括号
>时间：92.41%  
>空间：74.77%
```js
var generateParenthesis = function(n) {
    const ans = [];
    (function handler(str = '', left = 0, right = 0) {
        if (left === right && left === n) return ans.push(str);
        if (left < n) handler(`${str}(`, left + 1, right);
        if (left > right) handler(`${str})`, left, right + 1);
    })()
    return ans;
};
```
:::
::::
## 39. 组合总和
:::: tabs
::: tab label=题
* 给一个数组和一个和，数组元素可重复使用，求所有能达到和的解
```js
const candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates, target));
// 输出：[[2,2,3],[7]]
```
:::
::: tab label=解
* 排序，尽早退出回溯
* 元素可重复使用，但不能有重复的解，所以回溯带上当前使用的下标值，作为 for 循环的 i
>时间：90.56%  
>空间：60.22%
```js
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const ans = [];
    (function handler(arr = [], sum = 0, i = 0) {
        if (sum === target) return ans.push([...arr]);
        for (; i < candidates.length; i++) {
            if (sum + candidates[i] > target) break;
            arr.push(candidates[i]);
            handler(arr, sum + candidates[i], i);
            arr.pop();
        }
    })()
    return ans;
};
```
:::
::::
## 40. 组合总和 II
:::: tabs
::: tab label=题
* candidates自身可能有重复数字
* candidates 中的每个数字在每个组合中只能使用 一次 。
```js
candidates = [10,1,2,7,6,1,5], target = 8;
console.log(combinationSum2(candidates, target));
// 输出:
// [
//     [1,1,6],
//     [1,2,5],
//     [1,7],
//     [2,6]
// ]
```
:::
::: tab label=解
* 剪枝就是早点 return / break，能够优化速度
* 不重复使用，就排序，遇到重复的数字本轮回溯就跳过
>时间：98.96%  
>空间：68.47%
```js
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const ans = [];
    (function handler(arr = [], sum = 0, i = 0) {
        if (sum === target) return ans.push([...arr])
        for (; i < candidates.length; i++) {
            const newSum = sum + candidates[i];
            if (newSum > target) return;
            arr.push(candidates[i]);
            handler(arr, newSum, i + 1);
            arr.pop();
            while (candidates[i + 1] === candidates[i]) { i++; }
        }
    })()
    return ans;
};
```
:::
::::
## 79. 单词搜索
:::: tabs
::: tab label=题
```js
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
console.log(exist(board, word));
// 输出：true
```
:::
::: tab label=解
* 从头遍历，双层遍历，深度回溯
>时间：87.96%  
>空间：83.23%
```js
var exist = function (board, word) {
    let ans = false;
    const handler = (need, x, y, i) => {
        if (board[x][y] !== need[i]) return;
        i++;
        board[x][y] = null;
        if (i === need.length) return ans = true;
        if (x + 1 < board.length) handler(need, x + 1, y, i);
        if (x > 0) handler(need, x - 1, y, i);
        if (y + 1 < board[0].length) handler(need, x, y + 1, i);
        if (y > 0) handler(need, x, y - 1, i);
        board[x][y] = need[--i];
    }
    const wordArr = word.split('');
    board.forEach((row, i) => row.forEach((_, j) => handler(wordArr, i, j, 0)));
    return ans;
};
```
:::
::::
## 93. 复原 IP 地址
:::: tabs
::: tab label=题
* 给定一串整数字符串，制作出所有的有效ip地址
* ip地址 每个整数位于 0 到 255 之间组成，且不能含有前导 0
```js
const s = "25525511135"
console.log(restoreIpAddresses(s));
// 输出：["255.255.11.135","255.255.111.35"]
```
:::
::: tab label=解
>时间：99.08%  
>空间：38.18%
```js
function restoreIpAddresses(s) {
    const ans = [];
    let path = [];
    (function handler(i = 0) {
        if (i === s.length && path.length === 4) return ans.push(path.join('.'));
        for (let j = i; j < s.length; j++) {
            const str = s.slice(i, j + 1);
            if ((str.length > 3 || +str > 255) || (str.length > 1 && str[0] === '0')) return;
            path.push(str);
            handler(j + 1);
            path.pop();
        }
    })()
    return ans;
}
```
:::
::::
## 38. 字符串的排列
:::: tabs
::: tab label=题
```js
const s = "abc"
console.log(permutation(s));
// 输出：["abc","acb","bac","bca","cab","cba"]
```
:::
::: tab label=解
>时间：51.16%  
>空间：50.34%
```js
var permutation = function(s) {
    const set = new Set();
    const handler = (str, usedArr) => {
        if (str.length === s.length) return set.add(str);
        for (let i = 0; i < s.length; i++) {
            if (usedArr.includes(i)) continue;
            usedArr.push(i);
            handler(`${str}${s[i]}`, usedArr);
            usedArr.pop();
        }
    };
    handler('', []);
    return [...set]
};
```
:::
::::