---
title: 力扣题
date: 2022-02-18
---
## 2.两数相加
:::: tabs
::: tab label=题
* [题](https://leetcode-cn.com/problems/add-two-numbers/)
* 两数逆序排列，链表，长度不一定，返回同形式的和
```js
function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

const l1 = new ListNode(
    2,
    new ListNode(
        4,
        new ListNode(3)
    )
)
const l2 = new ListNode(
    5,
    new ListNode(
        6,
        new ListNode(4)
    )
)
addTwoNumbers(l1, l2); // 链表：7，0，8
```
:::
::: tab label=解
* 主要思路就和竖式加法一样。主要考虑的边界情况比较多，面试最好把问题拆分的更小，一个一个解功能
>时间：92.28%  
>空间：10.71%
```js
function addTwoNumbers(l1, l2) {
    let ans = new ListNode();
    let c1 = l1;
    let c2 = l2;
    let cNode = ans;
    let addTen = false;
    // 修改c1 c2 addTen cNode
    const handler = (ll1, ll2) => {
        const v1 = ll1 ? ll1.val : 0;
        const v2 = ll2 ? ll2.val : 0;
        const val = addTen ? v1 + v2 + 1 : v1 + v2;
        c1 = c1?.next;
        c2 = c2?.next;
        addTen = (val > 9);
        cNode.val = val % 10;
    }
    handler(c1, c2);
    while (c1 || c2 || addTen){
        cNode.next = new ListNode();
        cNode = cNode.next;
        handler(c1, c2);
    }
    return ans;
}
```
:::
::::
## 4.找中位数
:::: tabs
::: tab label=题
* 给两个正序（从小到大）数组，求中位数
```js
const nums1 = [1,3], nums2 = [2]
console.log(findMedianSortedArrays(nums1, nums2))
// 2
// 合并数组 = [1,2,3] ，中位数 2
```
* 如果是两个，就要两个的和/2
:::
::: tab label=插入排序
* 两个数组都排好序了，就只需要弄一个排序算法，弄一个求值算法。面试问题拆解很重要，保证不出错
>时间：97.31%  
>空间：17.59%
```js
function findMedianSortedArrays(nums1, nums2) {
    const arr = [...nums1];
    // 改变arr
    const insertArr = (n) => {
        let len = arr.length;
        for(let i = 0; i < len; i++) {
            if (arr[i] > n) {
                arr.splice(i, 0, n);
                break;
            }
        }
        if (arr.length === len) {
            arr.push(n)
        }
    }

    // 求arr中位数
    const findMidNum = () => {
        const len = arr.length;
        const isEven = !(len % 2);
        return isEven ? (arr[len / 2 - 1] + arr[len / 2]) / 2 : arr[Math.floor(len / 2)];
    }
    nums2.forEach(item => insertArr(item))
    return findMidNum(arr);
}
```
:::
::: tab label=原生排序
>时间：94.61%  
>空间：13.90%
```js
function findMedianSortedArrays(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = arr.length;
    const isEven = !(len % 2);
    return isEven ? (arr[len / 2 - 1] + arr[len / 2]) / 2 : arr[Math.floor(len / 2)];
}
```
:::
::::
## 5.最长回文字符串
:::: tabs
::: tab label=题
* [题](https://leetcode-cn.com/problems/longest-palindromic-substring/)一个字符串，求出最长回文
```js
const s = "babad";
console.log(longestPalindrome(s))
// "bab"
// "aba" 同样是符合题意的答案。
```
:::
::: tab label=解
* 每一个字符都当做是一个中线，或者中线的左边，进行一次计算。例：a|a，bab
>时间：47.48%  
>空间：27.92%
```js
function longestPalindrome(s) {
    let ans = '';
    let maxLen = 0;
    const leftItemHandler = (idx) => {
        let left = idx;
        let right = idx + 1;
        if (s[left] != s[right]) return;
        while (s[left - 1] === s[right + 1] && s[left - 1] != null) {
            left--;
            right++;
        }
        if (maxLen < right - left + 1) {
            maxLen = right - left + 1;
            ans = s.slice(left, right + 1);
        }
    }
    const midItemHandler = (idx) => {
        let left = idx - 1;
        let right = idx + 1;
        let temp = s[idx];
        while (s[left] === s[right] && s[left] != null) {
            temp = s.slice(left, right + 1);
            left--;
            right++;
        }
        if (temp.length > maxLen) {
            maxLen = temp.length;
            ans = temp;
        }
    }
    Array.prototype.forEach.call(s, (_, idx) => {
        leftItemHandler(idx);
        midItemHandler(idx);
    })
    return ans;
}
```
:::
::::

## 10.正则匹配
:::: tabs
::: tab label=模拟正则匹配
* [题]()给定正则表达式，和一个字符串，看正则是否能匹配完整的字符串。模拟'.'和'*'
```js
const s = "aa", p = "a";
console.log(isMatch(s, p));
// false
// "a" 无法匹配 "aa" 整个字符串。
```
```js
const s = "aa", p = "a*";
console.log(isMatch(s, p));
// true
// 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```
:::
::: tab label=解
* 直接正则试一试
>时间：41.78%  
>空间：49.56%
```js
function isMatch(s, p) {
    return s.match(p)?.[0].length === s.length;
}
```
:::
::: tab label=认真解
* 直接正则试一试
>时间：  
>空间：
```js
// 还有错误
function isMatch(s, p) {
    let sIdx = 0;
    let pIdx = -1;
    const isStar = pp => pp === '*';
    const match = (ss, pp) => pp === '.' || ss === pp;
    const clearP = idx => {
        while (p[idx + 1] === '*' && p[idx] === p[idx + 2]) {
            p = p.slice(0, idx + 2) + p.slice(idx + 3);
        }
    }
    while (pIdx++ < p.length && sIdx < s.length) {
        if (isStar(p[pIdx + 1])) {
            clearP(pIdx);
            // 为空？
            while (sIdx++ < s.length && match(s[sIdx], p[pIdx])) {
                // sIdx++;
            }
            pIdx++;
            console.log(pIdx);
        } else {
            // console.log(match(s[sIdx++], p[pIdx]));
            if (!match(s[sIdx++], p[pIdx])) {
                return false;
            }
        }
    }
    return sIdx === s.length && pIdx === p.length;
}
```
:::
::::
## 11.盛最多水容器
:::: tabs
::: tab label=题
* [题](https://leetcode-cn.com/problems/container-with-most-water/)给一个数组，排列在x轴，求最大面积
```js
const arr = [1,8,6,2,5,4,8,3,7]
console.log((maxArea(arr))); // 49 
// 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

```
:::
::: tab label=解
* 暴力双层循环，时间复杂度O(n^2)
>时间：超时
>空间：
```js
function maxArea(arr) {
    const getArea = (a, b, len) => Math.min(a, b) * len;
    const diffArea = area => max = Math.max(area, max);
    let max = 0;
    arr.forEach((item, idx) => {
        for (let i = 0; i < idx; i++) {
            const len = idx - i;
            const startItem = arr[i];
            const area = getArea(startItem, item, len);
            diffArea(area);
        }
    });
    return max;
}
```
:::
::: tab label=双指针
* 目的：求两个杆子最大面积，有一个变量是len，所以要想到双指针
* 思路：双指针，头尾各一个，小的向内移动，大的不动。一个变量，存储最大值
>时间：91.57%  
>空间：6.49%
```js
function maxArea(arr) {
    let max = 0;
    let start = 0;
    let end = arr.length - 1;
    const getArea = (a, b, len) => Math.min(a, b) * len;
    while (start < end) {
        const len = end - start;
        const area = getArea(arr[start], arr[end], len);
        max = Math.max(area, max);
        if (arr[start] > arr[end]) {
            end--;
        } else {
            start++;
        }
    }
    return max;
}
```
:::
::: tab label=双指针简化
>时间：84.41%  
>空间：16.06%
```js
function maxArea(arr) {
    let max = 0;
    for (let start = 0, end = arr.length - 1; start < end; ) {
        const len = end - start;
        max = Math.max((arr[start] > arr[end] ? arr[end--] : arr[start++]) * len, max);
    }
    return max;
}
```
:::
::::
## 3.无重复最长字符串
:::: tabs
::: tab label=题目
* 力扣题号：3
* 给一个字符串，求出最长的不重复字符
```js
const str = 'pwwkew';
console.log(maxNoRepeatLen(str)); // 3
```
```js
const str = 'aaa';
console.log(maxNoRepeatLen(str)); // 1
```
:::
::: tab label=实现1
* 难点：可能前面重复了，但是连着后面的是最长的，如：'pwwkew' 中的 'w'
* 核心思路：用数组存储，如果一个数重复了，就删除重复数和之前的数，然后再维护一个变量存储最大length
> 时间：92.73%  
> 空间：68.30%
```js
function maxNoRepeatLen(str) {
    let arr = [];
    let maxLen = 0;
    for (let char of str) {
        const index = arr.indexOf(char);
        if (index !== -1) {

            // 取本次不重复长度
            maxLen = Math.max(maxLen, arr.length);
            arr.splice(0, index + 1);
        }
        arr.push(char);
    }

    // 最后判断一次，因为可能最长不重复的在最后，for循环结束需要再取一次值
    maxLen = Math.max(maxLen, arr.length);
    return maxLen;
}
```
:::
::::