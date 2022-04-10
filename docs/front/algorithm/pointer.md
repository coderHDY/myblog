---
title: 双指针
date: 2022-04-05
---
## 647. 回文子串
:::: tabs
::: tab label=题
* 寻找字符串中的回文字符串个数
```js
const s = "abc";
console.log(countSubstrings(s));
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
```
:::
::: tab label=解
* 中心扩展开，遇到回文则加，不是回文则中断
* 注意判断`奇数回文`和`偶数回文`两种情况
>时间：86.26%  
>空间：72.78%
```js
var countSubstrings = function(s) {
    let ans = 0;
    const handler = (start , last) => {
        while (start > -1 && last < s.length && s[start] === s[last]) {
            ans++;
            start--;
            last++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        handler(i, i);
        handler(i, i + 1);
    }
    return ans;
};
```
:::
::::
## 704. 二分查找
:::: tabs
::: tab label=题
*给定一个 n 个元素`有序`的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
```js
const  nums = [-1,0,3,5,9,12], target = 9
console.log(search(nums, target));
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
```
:::
::: tab label=解
* 二分查找，左右中间，三个指针根据状态相互替换
* 注意边界处理，防止无限循环：
    * first = center + 1;
    * last = center - 1;
>时间：94.56%  
>空间：59.53%
```js
var search = function(nums, target) {
    let first = 0;
    let last = nums.length - 1;
    while (first <= last) {
        const center = Math.floor((last - first) / 2) + first;
        if (nums[center] === target) return center;
        if (nums[center] < target) {
            first = center + 1;
        } else {
            last = center - 1;
        }
    }
    return -1;
};
```
:::
::::