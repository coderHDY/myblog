---
title: 常见排序
date: 2021-11-08
tags:
 - 面试题
---
## 十大基础排序
::: tip
* 选泡插：选择排序、冒泡排序、插入排序
* 快归希堆：快速排序、归并排序、希尔排序、堆排序
* 桶计基：桶排序、计数排序、基数排序
:::
## 冒泡排序
:::: tabs
::: tab label=介绍
* 主要思想是一次冒泡出来一个，一步一步排序完整
* 时间：O(n^2)
* 空间：O(1)
```js
const arr = [100, 1, 10000, 1000, 10];
console.log(sortArray(arr)); // [1, 10, 100, 1000, 10000]
```
* [力扣912](https://leetcode-cn.com/problems/sort-an-array/)
:::
::: tab label=冒泡
>时间：5.01%  
>空间：98.86%
```js
function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
```
:::
::: tab label=原生JS
* 说明原生JS使用了更快的排序，空间换时间。
>时间：95.55%  
>空间：57.41%
```js
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
```
:::
::::
### 把数组排成最小的数
:::: tabs
::: tab label=期望
* 给一个非负整数数组
* 排出最小数字，字符串形式返回
```js
const arr = [10,2]
console.log(minNumber(arr)); //"102"
```
* [剑指offer-45](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/submissions/)
:::
::: tab label=实现
>时间：65.24%  
>空间：7.58%
```js{4-6}
function minNumber(arr) {
    const handler = (index1, index2) => {

        // 两两组合，取较小的
        let group1 = +(arr[index1] + '' + arr[index2]);
        let group2 = +(arr[index2] + '' + arr[index1]);

        if (group1 > group2) {
            [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
        }
    }

    // 冒泡
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            handler(j, j + 1);
        }
    }
    return arr.join('');
}
```
:::
::::
### 移动0
:::: tabs
::: tab label=题目
* 将所有0移动到数组末尾，同时其他非0元素相对位置不变
```js
const arr = [0,1,0,3,12];
console.log(moveZeroes(arr)); // [1,3,12,0,0]
```
* [力扣283](https://leetcode-cn.com/problems/move-zeroes/)
:::
::: tab label=解
* 每次冒泡一个0
* 位运算效率更高！
>时间：5.12%  
>空间：98.26%
```js{5-7}
function moveZeroes(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] === 0 && arr[j + 1] !== 0) {
                arr[j] = arr[j] ^ arr[j + 1];
                arr[j + 1] = arr[j] ^ arr[j + 1];
                arr[j] = arr[j] ^ arr[j + 1];
            }
        }
    }
    return arr;
}
```
:::
::::
## 选择排序
:::: tabs
::: tab label=思想
* 双重循环，记录最大值下标。每次选出一个最大数，放到最后面【或最前面】
* 时间：O(n^2)
* 空间：O(1)
```js
const arr = [100, 1, 10000, 1000, 10];
console.log(sortArray(arr)); // [1, 10, 100, 1000, 10000]
```
* [力扣912](https://leetcode-cn.com/problems/sort-an-array/)
:::
::: tab label=选择排序
>时间：21.94%  
>空间：91.27%
```js{4,6-8}
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}
```
:::
::::
### 数组中第K个最大元素
:::: tabs
::: tab label=题
* 给一个数组和一个k值，求第k大的元素
```js
const arr = [3,2,1,5,6,4];
const k = 2;
console.log(findKthLargest(arr, k)); // 5
```
* [力扣215](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
:::
::: tab label=选择排序
>时间：22.37%    
>空间：95.99%
```js
function findKthLargest(arr, k) {
    const len = arr.length;
    for (let i = 0; i < k; i++) {
        let maxIndex = i;
        for (let j = i; j < len; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        [arr[maxIndex], arr[i]] = [arr[i], arr[maxIndex]];
    }
    return arr[k - 1];
}
```
:::
::::
## 插入排序
:::: tabs
::: tab label=思想
* 使用一个新数组，逐个往里面插入，逐个比较，大的往后插
* 时间：O(n^2)
* 空间：O(n)
* 不要在原数组splice，会很慢，直接用新数组会快一些
```js
const arr = [100, 1, 10000, 1000, 10];
console.log(sortArray(arr)); // [1, 10, 100, 1000, 10000]
```
* [力扣912](https://leetcode-cn.com/problems/sort-an-array/)
:::
::: tab label=插入排序
>时间：51.13%  
>空间：51.10%
```js
function sortArray(arr) {
    const ans = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length + 1; j++) {
            if (ans[j] > arr[i] || j === arr.length) {
                ans.splice(j, 0, arr[i]);
                break;
            }
        }
    }
    return ans;
}
```
:::
::::
## 快排
:::: tabs
::: tab label=思路
* 随机取一个数，大于放左边数组，小于放右边数组，再拼接。
>时间复杂度：O(Nlog2N)
>空间复杂度：O(log2N)
>空间复杂度也就是树的高度，每层数量对半减，高度就是log2N
```js
function sortArray(arr) {
    if (arr.length < 2) return arr;
    const left = [];
    const right = [];
    const c = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < c) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return sortArray(left).concat(c).concat(sortArray(right));
}
```
:::
::: tab label=指针快排
>时间：22.11%  
>空间：18.45%
```js
function sortArray(arr, left = 0, right = arr.length - 1) {
    if (arr.length < 2 || left > right) return arr;
    const key = arr[left];
    let l = left;
    let r = right;
    while (l !== r) {

        // 先动右指针，再动左指针，顺序不能乱，因为从有判断===，有可能当前 l 位置就是中间值
        while (arr[r] >= key && l < r) r--;
        while (arr[l] <= key && l < r) l++;
        if (l < r) [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    [arr[l], arr[left]] = [arr[left], arr[l]];
    sortArray(arr, left, l - 1);
    sortArray(arr, l + 1, right);
    return arr;
}
```
:::
::::
## 堆排序
:::: tabs
::: tab label=思路
* 利用堆排序的特性，每次取出最大/小值，最值在堆顶
* 每次造堆取出最值，直到遍历完成
>时间复杂度：O(Nlog2N)  
>空间复杂度：O(n)
```js
function sortArray(arr) {
    const ans = [];
    const getMin = (i = Math.floor(arr.length / 2)) => {
        if (i < 0) return;
        const c1 = i * 2 + 1;
        const c2 = i * 2 + 2;
        let min = i;
        if (c1 < arr.length && arr[min] > arr[c1]) min = c1;
        if (c2 < arr.length && arr[min] > arr[c2]) min = c2;
        [arr[min], arr[i]] = [arr[i], arr[min]];
        getMin(i - 1);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        getMin();
        ans.push(arr.shift());
    }
    return ans;
}
```
:::
::::