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