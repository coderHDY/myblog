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
## 171. Excel 表列序号
:::: tabs
::: tab label=题
* 上题反过来
```js
const n = 'AB';
console.log(titleToNumber(n)); // 28
```
:::
::: tab label=解1
* 逆着记录倍数
>时间：74.79%  
>空间：47.65%
```js
var titleToNumber = function (n) {
    let ans = 0;
    let power = 1;
    for (let i = n.length - 1; i >= 0; i--) {
        let code = n.charCodeAt(i) - 64;
        ans += code * power;
        power *= 26;
    }
    return ans;
};
```
:::
::: tab label=解2
* 顺着记录倍数
* 少记录了一个pwoer，并且少做了power的乘法
>时间：93.12%  
>空间：41.74%
```js
var titleToNumber = function (n) {
    let ans = 0;
    for (let i = 0; i < n.length; i++) {
        ans *= 26;
        let code = n.charCodeAt(i) - 64;
        ans += code;
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
## 205. 同构字符串
:::: tabs
::: tab label=题
* s和t字符能够一一映射，并且映射顺序不能乱
```js
const ：s = "egg"
const  t = "add"
console.log(isIsomorphic(s, t));
// 输出：true
```
:::
::: tab label=解
* 正反双map法，正反映射都没有重复映射关系，就正确
```js
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let isTrue = true;
    const handler = (a, b) => {
        Array.prototype.reduce.call(a, (pre, item, i) => {
            if (pre.has(item) && pre.get(item) !== b[i]) {
                isTrue = false;
            } else {
                pre.set(item, b[i]);
            }
            return pre;
        }, new Map());
    }
    handler(s, t);
    handler(t, s);
    return isTrue;
};
```
:::
::::
## 1624. 之间最长子字符串
:::: tabs
::: tab label=题
* 返回 两个相同字符之间的最长子字符串的长度
```js
const s = "abca"

// 输出：2
```
:::
::: tab label=解
* 遍历，正则贪婪匹配
>时间：80.63%  
>空间：5.00%
```js
var maxLengthBetweenEqualCharacters = function (s) {
    const reg = /(.).*\1/g;
    if (!reg.test(s)) {
        return -1;
    }
    return Array.prototype.reduce.call(s, (pre, item, idx) => {
        const c = s.slice(idx).match(reg);
        if (c) return Math.max(c[0].length - 2, pre);
        return pre;
    }, 0);
};
```
:::
::: tab label=解2
* 遍历双指针
>时间：80.63%  
>空间：48.13%
```js
var maxLengthBetweenEqualCharacters = function (s) {
    let max = -1;
    for (let i = 0; i < s.length; i++) {
        const last = s.lastIndexOf(s[i]);
        if (i < last) {
            max = Math.max(last - i - 1, max);
        }
    }
    return max;
};
```
:::
::::
## 293. 翻转游戏
:::: tabs
::: tab label=题
* 翻转两个 `+` --> `-`，求所有可能解
```js
const currentState = "++++"
console.log(generatePossibleNextMoves(currentState));
// 输出：["--++","+--+","++--"]
```
:::
::: tab label=解1
* 动态正则
>时间：95.24%  
>空间：14.29%
```js{5-6}
var generatePossibleNextMoves = function (currentState) {
    const ans = [];
    let idx = currentState.indexOf('++', 0);
    const handler = () => {
        const reg = new RegExp(`(.{${idx}})\\+\\+(.*)`, 'g');
        const temp = currentState.replace(reg, '$1--$2');
        ans.push(temp);
        idx = currentState.indexOf('++', idx + 1);
    }
    while (idx !== -1) {
        handler();
    }
    return ans;
};
```
:::
::: tab label=解2
* slice + '--' + slice
>时间：95.24%  
>空间：47.62%
```js
var generatePossibleNextMoves = function (currentState) {
    const ans = [];
    let idx = currentState.indexOf('++', 0);
    const handler = () => {
        const temp = currentState.slice(0, idx) + '--' + currentState.slice(idx + 2);
        ans.push(temp);
        idx = currentState.indexOf('++', idx + 1);
    }
    while (idx !== -1) {
        handler();
    }
    return ans;
};
```
:::
::::
## 345. 反转元音字母
:::: tabs
::: tab label=题
```js
const s = "hello"
console.log(reverseVowels(s));
// 输出："holle"
```
:::
::: tab label=解
* 拿到所有的元音字母及下标，字母倒序，重新插回去
>时间：5.75%  
>空间：5.14%
```js
var reverseVowels = function (s) {
    const idxs = [];
    let aeiou = [];
    const reg = /[aeiouAEIOU]/;
    for (let i = 0; i < s.length; i++) {
        if (reg.test(s[i])) {
            idxs.push(i);
            aeiou.push(s[i]);
        }
    }
    aeiou = aeiou.reverse();
    for (let i = 0; i < idxs.length; i++) {
        s = s.slice(0, idxs[i]) + aeiou[i] + s.slice(idxs[i] + 1);
    }
    return s;
};
```
:::
::: tab label=解2
* 双指针
>时间：91.79%  
>空间：24.44%
```js
var reverseVowels = function (s) {
    const arr = s.split('');
    let first = 0;
    let last = s.length - 1;
    const reg = /[aeiouAEIOU]/;
    while (first < last) {
        if (reg.test(arr[first]) && reg.test(arr[last])) {
            [arr[first], arr[last]] = [arr[last], arr[first]];
            first++;
            last--;
        }
        if (!reg.test(arr[first])) first++;
        if (!reg.test(arr[last])) last--;
    }
    return arr.join('');
};
```
:::
::::
## 383. 赎金信
:::: tabs
::: tab label=题
```js
const ransomNote = "a", magazine = "b"
console.log(canConstruct(ransomNote, magazine));
// 输出：false
```
:::
::: tab label=解
* 两个map，第二个包括且大于第一个map的所有键值 
>时间：35.03%  
>空间：32.91%
```js
var canConstruct = function (ransomNote, magazine) {
    const setMap = s => Array.prototype.reduce.call(s, (map, item) => {
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
        return map;
    }, new Map());
    const map1 = setMap(ransomNote);
    const map2 = setMap(magazine);
    const success = (m1, m2) => [...m1.entries()].every(([key, val]) => m2.get(key) >= val);
    return success(map1, map2);
};
```
:::
::: tab label=解2
* 动态删减参考字符串的值
>时间：80.52%  
>空间：5.45%
```js
var canConstruct = function (ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        const idx = magazine.indexOf(ransomNote[i]);
        if (idx === -1) return false;
        magazine = magazine.slice(0, idx) + magazine.slice(idx + 1);
    }
    return true;
};
```
:::
::::
## 179.拼接最大数
:::: tabs
::: tab label=题
* 一个数组，能拼接出来的最大数
```js
const nums = [10, 2]; // 210
// const nums = [0, 0]; // 0
// const nums = [111311, 1113]; // 1113111113
console.log(largestNumber(nums));
```
:::
::: tab label=解
* 自己定义排序算法，`${a}${b}` 和 `${b}${a}` 拼接状态谁大
* 注意排除返回0的情况
>时间：92.45%  
>空间：30.19%
```js
var largestNumber = function (nums) {
    nums.sort((a, b) => {
        const n1 = `${a}${b}`;
        const n2 = `${b}${a}`;
        return +n2 - +n1;
    })
    let numStr = nums.join('');
    const noZero = Array.prototype.findIndex.call(numStr, item => item !== '0');
    numStr = numStr.slice(noZero);
    return numStr ? numStr : '0';
};
```
:::
::::
## 520.检测大写字母
:::: tabs
::: tab label=题
* 全部字母都是大写，比如 "USA" 。
* 单词中所有字母都不是大写，比如 "leetcode" 。
* 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
:::
::: tab label=解
* 拆解判断和利用`Array.prototype.every`
>时间：100.00%  
>空间：46.98%
```js
var detectCapitalUse = function(word) {
    return word.slice(1).toLowerCase() === word.slice(1) || Array.prototype.every.call(word, item => item.charCodeAt(0) < 91);
};
```
:::
::: tab label=正则
>时间：92.28%  
>空间：38.59%
```js
var detectCapitalUse = function(word) {
    const reg = /^[A-Z]+$|^[A-Za-z][a-z]{0,}$/;
    return reg.test(word);
};
```
:::
::::
## 551. 学生出勤记录 I
:::: tabs
::: tab label=题
* 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
* 学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
:::
::: tab label=解
* 原生方法能解决的用原生，速度会更快
>时间：99.58%  
>空间：47.91%
```js
var checkRecord = function(s) {
    const reg2 = /A.*?A/g;
    return !s.includes('LLL') && !reg2.test(s);
};
```
:::
::::
## 648. 单词替换
:::: tabs
::: tab label=题
* 替换字符串的开头简写字典
```js
const dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
console.log(replaceWords(dictionary, sentence));
// 输出："the cat was rat by the bat"
```
:::
::: tab label=解
>时间：25.89%  
>空间：94.64%
```js
var replaceWords = function(dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length);
    return sentence.split(' ').map(item => {
        const match = dictionary.find(i => item.indexOf(i) === 0);
        return match ?? item;
    }).join(' ');
};
```
:::
::::
## 692. 前K个高频单词（单词按ascll排序）（列表map转换）
:::: tabs
::: tab label=题
* 给定一个单词列表 words 和一个整数 k ，返回前 k 个出现次数最多的单词。
返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率， 按字典顺序 排序。
```js
const words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
console.log(topKFrequent(words, k));
// 输出: ["i", "love"]
// 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
//     注意，按字母顺序 "i" 在 "love" 之前。
```
:::
::: tab label=解
* 重点：
    1. 单词按ascll排序
    2. 列表map转换
>时间：99.69%  
>空间：69.11%
```js{3-7,12-18}
var topKFrequent = function (words, k) {

    // array转map
    const map = words.reduce((pre, item) => {
        pre.set(item, (pre.get(item) ?? 0) + 1);
        return pre;
    }, new Map());
    return [...map].sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];

        // 单词ascll排序主要算法
        const maxLen = Math.max(b[0].length, a[0].length);
        for (let i = 0; i < maxLen; i++) {
            const n1 = a[0][i] !== undefined ? a[0].charCodeAt(i) : -1;
            const n2 = b[0][i] !== undefined ? b[0].charCodeAt(i) : -1;
            if (n1 > n2) return 1;
            if (n2 > n1) return -1;
        }
    }).slice(0, k).map(([item, _]) => item);
};
```
:::
::::
## 394. 字符串解码,解决嵌套括号
:::: tabs
::: tab label=题
```js
const s = "3[a]2[bc]";
console.log(decodeString(s))
// 输出："aaabcbc"
```
:::
::: tab label=解
* 解决嵌套匹配方式
>时间：95.19%  
>空间：75.94%
```js
var decodeString = function(s) {
    const reg = /(\d+)\[([^[]+?)\]/g;
    while (reg.test(s)) {
        s = s.replace(reg, (_, $1, $2) => $2.repeat(+$1));
    }
    return s;
};
```
:::
::::
## 1694. 重新格式化电话号码
:::: tabs
::: tab label=题
* 三个一组，剩下的四个以内：
    * 2 个数字：单个含 2 个数字的块。
    * 3 个数字：单个含 3 个数字的块。
    * 4 个数字：两个分别含 2 个数字的块。
```js
const s = '123 4-567';
console.log(reformatNumber(s)); // 123-45-67
```
:::
::: tab label=解
>时间：100.00%  
>空间：78.75%
```js
var reformatNumber = function (s) {
    s = s.split(/[\s-]/).join('');
    const reg1 = /(\d{3})/g;
    const reg2 = /(\d{3})-$|(\d{3})-(\d)$/;
    s = s.replace(reg1, '$1-');
    s = s.replace(reg2, (_, s1, s2, s3) => s3 ? `${s2.slice(0, 2)}-${s2.slice(2)}${s3}` : s1);
    return s;
};
```
:::
::::
## 859. 亲密字符串
:::: tabs
::: tab label=题
* 两个字符串:s,goal
* s对调其两个字母的位置后 === goal
```js
const s = "ab", goal = "ba"
console.log(buddyStrings(s, goal));
// 输出：true
```
:::
::: tab label=解
>时间：95.33%  
>空间：61.21%
```js
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;
        if (s === goal) return /(.).*\1/.test(s);
        let firstDiff = Array.prototype.findIndex.call(s, (item, idx) => item !== goal[idx]);
        let lastDiff = Array.prototype.findIndex.call(s, (item, idx) => item === goal[firstDiff] && goal[idx] === s[firstDiff]);
        if (firstDiff === -1 || lastDiff === -1) return false;
        return `${s.slice(0, firstDiff)}${s[lastDiff]}${s.slice(firstDiff + 1, lastDiff)}${s[firstDiff]}${s.slice(lastDiff + 1)}` === goal;
};
```
:::
::::
## 1271. 十六进制魔术数字
:::: tabs
::: tab label=题
1. 十进制转16进制
2. 转换后 1 -> I, 0 -> O
3. 只包含英文字母返回结果，否则返回ERROR
```js
const num = "257"
console.log(toHexspeak(num));
// 输出："IOI"
```
:::
::: tab label=原生解
>时间：100.00%  
>空间：100.00%
```js
var toHexspeak = function (num) {
    const str = (+num).toString(16).replace(/1/g, 'I').replace(/0/g, 'O').toUpperCase();
    return Array.prototype.every.call(str, item => 'OIABCDEF'.includes(item)) ? str : 'ERROR';
}
```
:::
::: tab label=解
* 转换的过程中出现数字就跳出错误，增加效率
>时间：75.00%  
>空间：100.00%
```js
var toHexspeak = function (num) {
    const dict = 'OI23456789ABCDEF';
    let OxNum = '';
    while (+num !== 0) {
        const s = dict[num % 16];
        if ('23456789'.includes(s)) return 'ERROR';
        OxNum = s + OxNum;
        num = Math.floor(+num / 16);
    }
    return OxNum;
};
```
:::
::::