# 字符串相关
## 无重复最长字符串
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