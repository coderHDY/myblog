---
title: 字符串、正则
date: 2022-03-11
---
## 58. 最后一个单词的长度
:::: tabs
::: tab label=题
```js
const s = "Hello World"
console.log(lengthOfLastWord(s));
// 输出：5
```
:::
::: tab label=解
>时间：93.86%  
>空间：25.92%
```js
var lengthOfLastWord = function (s) {
    const reg = /\b(\S+)\b\s*$/;
    return s.match(reg)[1].length;
};
```
:::
::::
## 168. Excel表列名称
:::: tabs
::: tab label=题
* 1-26 和 A-Z 一一对应，求A-Z表示一个数
```js
const n = 28
console.log(convertToTitle(n));
// 输出："AB"
```
:::
::: tab label=解
* 难点：
    1. `1-A`：求余数的时候要考虑余0怎么办？没有对应的字典
    2. `0-A`：26 / 26 = 1 ··· 0 ，答案本来应该是 Z
* 思路：
    * 每次求余数前减一
    * 0-A：25 / 26 = 0 ··· 25，答案是 Z
>时间：100.00%  
>空间：15.32%
```js
var convertToTitle = function (n) {
    let ans = '';
    while (n--) {
        ans = `${String.fromCharCode(n % 26 + 65)}${ans}`;
        n = Math.floor(n / 26);
    }
    return ans;
};
```
:::
::::
## 50. 一次的字符
:::: tabs
::: tab label=题
* 求只出现一次的字符，无则返回空格，s只包含小写字母
```js
const s = "abaccdeff";
console.log(firstUniqChar(s));
// 输出：'b'
```
:::
::: tab label=解
* 动态创建正则，并利用粘性正则向下匹配（实际上indexOf也可以）
>时间：5.14%  
>空间：10.15%
```js
var firstUniqChar = function (s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        const reg = new RegExp(`.*?${s[i]}`, 'gy');
        reg.test(s);
        if (!set.has(s[i]) && !reg.test(s)) {
            return s[i];
        } else {
            set.add(s[i])
        }
    }
    return ' ';
};
```
:::
::: tab label=解2
* indexOf：不要秀正则了
>时间：96.86%  
>空间：38.18%
```js
var firstUniqChar = function (s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i]) && s.indexOf(s[i], i + 1) === -1) {
            return s[i];
        } else {
            set.add(s[i])
        }
    }
    return ' ';
};
```
:::
::: tab label=解3
* 只有小写字母，利用下标查找比map、set更快
>时间：99.36%  
>空间：54.65%
```js
var firstUniqChar = function (s) {
    let map = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s.charCodeAt(i) - 97] === 1) {
            return s[i];
        }
    }
    return ' ';
};
```
:::
::::
## 1160. 拼写单词
:::: tabs
::: tab label=题
```js
const words = ["cat","bt","hat","tree"], chars = "atach"
console.log(countCharacters(words, chars));
// 输出：6
```
:::
::: tab label=解
* 用一个临时的chars2，遍历单词一个字母删一个chars2，遍历完就说明能拼接出来
>时间：90.81%  
>空间：35.14%
```js
var countCharacters = function(words, chars) {
    const knows = words.reduce((pre, item) => {
        let temp = chars;
        for (let i = 0; i < item.length; i++) {
            const t = temp.replace(item[i], '')
            if (t.length === temp.length) {
                return pre;
            }
            temp = t;
        }
        return pre + item.length;
    }, 0)
    return knows
};
```
:::
::::
