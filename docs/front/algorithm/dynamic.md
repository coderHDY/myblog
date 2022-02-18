---
title: 动态规划
date: 2021-12-28 13:00:00
categories:
 - 算法
---
## 介绍
::: tip
* 英语：Dynamic programming，简称 DP
* 定义：把问题分解成相对简单的子问题求解的方式
* 思想：问题拆分，分别求解，组合成为整体解
* 核心：找出子问题及其子问题与原问题的关系，即`状态转移方程`
:::
::: warning 状态转移方程
* 把f(n)拆分为f(1),f(2)....f(n-1)
* 如何把f(1)...f(n-1)的解转化为f(n)的解，就是状态转移方程
:::

## 70.爬楼梯
::: tip 
* 需要爬n阶楼梯
* 一次爬1阶或两阶
* 求总共有多少种爬法
```js
const n = 2;
console.log(climbStairs(n)); // 2
```
* [力扣70](https://leetcode-cn.com/problems/climbing-stairs/)
:::
:::: tabs
::: tab label=递归思想
* f(1) = 1
* f(2) = 2 【(1,1),(2)】
* f(3) = 3 【(1,2),(2,1),(1,1,1)】
* f(4) = 5【(1,1,1,1),(1,1,2),(1,2,1),(2,1,1),(2,2)】
>状态转移方程：f(n) = f(n-1) + f(n-2)
* 求解
>时间O(2^n)：【超时】树的深度是n，总共就有【2^n - 1】个节点要计算  
>空间O(n)：每个节点都要存储
```js
function climbStairs(n) {
    if (n < 3) {
        return n;
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
}
```
:::
::: tab label=收集解递归
>时间O(n)：85.95%  
>空间O(n)：81.13%
```js
function climbStairs(n, map = new Map([[1, 1],[2, 2]])) {
    if (map.has(n)) {
        return map.get(n);
    }
    ans = climbStairs(n - 1, map) + climbStairs(n - 2, map);
    map.set(n, ans);
    return ans
}
```
:::
::: tab label=动态规划
* 根据状态转移方程，存储状态解，并用方程拿到f(n)的解
>时间O(n)：95.29%  
>空间O(n)：89.28%
```js{9}
function climbStairs(n) {
    if (n < 2) {
        return n
    }
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
}
```
:::
::: tab label=动态规划优化
* 动态规划是从f(1)求到f(n)，但是每次使用的只是前面两个数的解，剩下的用不到，就可以把空间复杂度优化成O(1)
>时间O(n)：98.91%  
>空间O(1)：94.10%
```js
function climbStairs(n) {
    if (n < 3) {
        return n;
    }
    let first = 1;
    let second = 2;
    let ans;
    for (let i = 3; i <= n; i++) {
        ans = first + second;
        first = second;
        second = ans;
    }
    return ans;
}
```
:::
::::
## 53.最大子数组和
::: tip
* 给一个整数数组（可能有负数）
* 求最大子数组的和
```js
const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums)); // 6
```
* [力扣53](https://leetcode-cn.com/problems/maximum-subarray/)
:::
:::: tabs
::: tab label=动态规划思想
* (从 i=1 开始)，num[i -1] 如果大于0，num[i]就变成num[i - 1] + num[i]
* 遍历一遍求出最大值
>时间O(n)：99.83%  
>空间O(1)：64.00%
```js{4-9}
function maxSubArray(num) {
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i - 1] > 0) {
            num[i] = num[i] + num[i - 1];
        }
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}
```
:::
::: tab label=动态写法优化
* 只最后求一次最大值，减少一个变量存储，以及中间赋值过程。
```js{3,5}
function maxSubArray(num) {
    for (let i = 1; i < num.length; i++) {
        num[i] = num[i - 1] > 0 ? num[i] + num[i - 1] : num[i];
    }
    return Math.max(...num);
}
```
:::
::: tab label=贪心
* 一个指针保存当前最大和
* 一个指针保存当前连续和
* 当前连续和小于0则丢弃
* 当前连续和大于最大和则替换最大和
>时间O(n)：99.83%  
>空间O(1)：79.10%
```js{5-9}
function maxSubArray(num) {
    let max = num[0];
    let currentSum = 0;
    for (let i = 0; i < num.length; i++) {
        let newSum = currentSum + num[i];
        if (newSum > max) {
            max = newSum;
        }
        currentSum = newSum > 0 ? newSum : 0;
    }
    return max;
}

```
:::
::::
## 300.最长递增子序列
::: tip
* 给一个整数数组
* 找到最长严格递增子序列
```js
const nums = [10,9,2,5,3,7,101,18]
console.log(lengthOfLIS(nums)); // 4 【2，5，7，101】
```
:::
:::: tabs
::: tab label=动态规划
* 拿一个数组一一对应nums长度，存储每个值的严格递增的个数
* num[i]如果大于前面的某一项，就在那一项的递增数+1，求出每个i对应的递增数的最大值
>时间O(n^2)：80.83%  
>空间O(n)：65.08%
```js{5-11}
function lengthOfLIS(nums) {
    const dp = [];
    dp[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        let max = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                max = Math.max(dp[j] + 1, max);
            }
        }
        dp[i] = max;
    }
    return Math.max(...dp);
}
```
:::
::::
## 509 斐波那契数
:::: tabs
::: tab label=题
```js
// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
const n = 2;
console.log(fib(n))
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
```
:::
::: tab label=暴力解
>时间：40.88%  
>空间：14.16%
```js
function fib(n) {
    return n === 0 || n === 1 ? n : fib(n - 1) + fib(n - 2)
}
```
:::
::: tab label=动态规划
>时间：91.79%  
>空间：10.56%
```js
function fib(n) {
    if (n < 2) return n;
    let one = 0;
    let two = 1;
    for(let i = 2; i < n; i++) {
        const temp = one;
        one = two;
        two = temp + two;
    }
    return one + two;
}
```
:::
::::