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
##  1137.第 N 个泰波那契数
:::: tabs
::: tab label=题
* [题](https://leetcode-cn.com/problems/n-th-tribonacci-number/):T0 = 0, T1 = 1, T2 = 1,Tn+3 = Tn + Tn+1 + Tn+2
```js
const n = 4;
console.log(tribonacci(n));
// 输出：4
// 解释：
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
```
:::
::: tab label=动态规划
>时间：80.42%　　
>空间：11.51%
```js
function tribonacci(n) {
    const arr = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    return arr[n];
}
```
:::
::: tab label=三指针优化
* 已经用过的数组实际上用不到，只会用到最后的几个数字。注意把控好几个数字的加减关系
>时间：96.68%  
>空间：13.68%
```js
function tribonacci(n) {
    if (n < 2) return n;
    if (n === 2) return 1;
    let one = 0;
    let two = 1;
    let three = 1;
    for (let i = 4; i <= n; i++) {
        const temp = one;
        one = two;
        two = three;
        three = temp + one + two;
    }
    return one + two + three;
}
```
:::
::::
## 64.最小路径和
:::: tabs
::: tab label=题
* 给一个n*n的表格，从左上到右下的最小路径和
```js
const grid = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(grid));
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
```
:::
::: tab label=动态规划
* 动态规划：制作一个一样的表格，每个位置存储当前最短路径，返回右下数字，即为最短路径。
>时间：96.41%  
>空间：19.01%
```js
function minPathSum(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const ans = Array(row).fill(null);
    ans.forEach((item, idx) => ans[idx] = []);
    const setMinPath = (i, j) => {
        if (i > 0 && j > 0) {
            ans[i][j] = Math.min(ans[i - 1][j], ans[i][j - 1]) + grid[i][j];
        } else if (i > 0) {
            ans[i][j] = ans[i - 1][j] + grid[i][j];
        } else if (j > 0) {
            ans[i][j] = ans[i][j - 1] + grid[i][j];
        } else {
            ans[i][j] = grid[i][j];
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            setMinPath(i, j);
        }
    }
    return ans[row - 1][col - 1];
}
```
:::
::::
## 17.电话
:::: tabs
::: tab label=题
* 九宫格电话输入后有多少种排列方式
```js
const digits = "23"
console.log(letterCombinations(digits));
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```
:::
::: tab label=解
>时间：95.72%  
>空间：11.18%
* 二层遍历，做二维数组，然后再打平。
```js{14-20}
function letterCombinations(digits) {
    if (digits === '') return [];
    const deps = {
        [2]: ['a', 'b', 'c'],
        [3]: ['d', 'e', 'f'],
        [4]: ['g', 'h', 'i'],
        [5]: ['j', 'k', 'l'],
        [6]: ['m', 'n', 'o'],
        [7]: ['p', 'q', 'r', 's'],
        [8]: ['t', 'u', 'v'],
        [9]: ['w', 'x', 'y', 'z'],
    };
    const digitArr = digits.split('').map(item => +item);
    return digitArr.reduce((pre, item) => {
        let dep = deps[item];
        if (!pre) {
            return [...dep];
        }
        return dep.map(item => pre.map(i => i + item)).flat(2);
    }, null)
}
```
:::
::::
## 746.最小花费爬楼梯
:::: tabs
::: tab label=题
* 花一次钱跳1-2格，最小花费跳到结束
```js
const arr = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(arr));
```
```js
const arr = [10, 15, 20];
console.log(minCostClimbingStairs(arr));
```
:::
::: tab label=动态规划
* 思路：每一格都求出到当前格的最便宜的走法（前一格、前两格中便宜的那个 + 自己）。最后拿dp最后两个花费的小的那个值就能走出去。
>时间：95.84%  
>空间：10.26%
```js
function minCostClimbingStairs(cost) {
    if (cost.length < 3) return Math.min(...cost);
    const dp = [cost[0], cost[1]];
    const setMinPay = idx => {
        dp[idx] = Math.min(dp[idx - 1], dp[idx - 2]) + cost[idx];
    }
    for (let i = 2; i < cost.length; i++) {
        setMinPay(i);
    }
    return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
}
```
:::
::: tab label=优化
* 一样，动态规划只用到数组的最后两个值，所以可以直接用动态变量存
>时间：98.58%  
>空间：20.74%
```js
function minCostClimbingStairs(cost) {
    if (cost.length < 3) {
        return Math.min(...cost);
    }
    let first = cost[0];
    let second = cost[1];
    for (let i = 2; i < cost.length; i++) {
        const temp = first;
        first = second;
        second = Math.min(temp, first) + cost[i];
    }
    return Math.min(first, second);
}
```
:::
::::
## 198.打家劫舍
:::: tabs
::: tab label=题
* 小偷不能偷相邻的房子，求能偷得最多钱
```js
const i = [1,2,3,1];
console.log(rob(i)); // 4

const i2 = [2,7,9,3,1];
console.log(rob(i2)); // 12
```
:::
::: tab label=解
* 必须隔一家，那么最多隔两家，因为隔三家就是傻子，浪费一家没偷。
>时间：98.86%  
>空间：5.74%
```js
function rob(nums) {
    if (nums.length < 3) {
        return Math.max(...nums);
    }
    const dp = [nums[0], nums[1]];
    const setDp = idx => {
        let first = idx > 2 ? dp[idx - 3] : 0;
        let second = dp[idx - 2];
        dp[idx] = Math.max(first, second) + nums[idx];
    }
    for (let i = 2; i < nums.length; i++) {
        setDp(i);
    }
    return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
}
```
:::
::: tab label=优化
* 指针优化
>时间：98.86%  
>空间：19.51%
```js
function rob(nums) {
    if (nums.length < 3) {
        return Math.max(...nums);
    }
    let first = nums[0];
    let second = nums[1];
    let three = 0;
    const setTemp = (idx) => {
        const temp = Math.max(first, second) + nums[idx];
        first = second;
        second = three;
        three = temp;
    }
    for (let i = 2; i < nums.length; i++) {
        setTemp(i);
    }
    return Math.max(first, second);
}
```
:::
::::
## 213.打家劫舍2
:::: tabs
::: tab label=题
* 屋子围城一圈，要不偷相邻房间的情况下偷最多
```js
const nums = [2,3,2];
console.log(rob(nums)); // 3
```
:::
::: tab label=解
* 环拆成两个数组，0~n-1, 1~n，动态算两遍，取出最大的
>99.74%  
>5.47%
```js
function rob(nums) {
    if (nums.length < 4) return Math.max(...nums);
    const dynamic = (subNums) => {
        let one = 0;
        let two = subNums[0];
        let three = subNums[1];
        const setNext = idx => {
            const temp = Math.max(one, two) + subNums[idx];
            one = two;
            two = three;
            three = temp;
        }
        for (let i = 0; i < subNums; i++) {
            setNext(i);
        }
        return Math.max(two, three);
    }
    const ans1 = dynamic(nums.slice(0, -1));
    const ans2 = dynamic(nums.slice(1));
    return Math.max(ans1, ans2);
}
```
:::
::: tab label=再优化
* 思路一样，环变成两个数组，然后计算选出大的值。但是空间消耗太大了，修改动态规划方程。
>时间：100%  
>空间：5.02  
>??空间没变？
```js
function rob(nums) {
    if (nums.length < 4) return Math.max(...nums);
    const dynamic = (start, end) => {
        let one = 0;
        let two = nums[start];
        let three = nums[start + 1];
        for (let i = start + 2; i < end; i++) {
            const temp = Math.max(two, three) + nums[i];
            one = two;
            two = three;
            three = temp;
        }
        return Math.max(two, three);
    }
    const ans1 = dynamic(0, nums.length - 1);
    const ans2 = dynamic(1, nums.length);
    return Math.max(ans1, ans2);
}
```
:::
::::