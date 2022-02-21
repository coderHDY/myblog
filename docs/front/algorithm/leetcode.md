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
## 20.括号匹配
:::: tabs
::: tab label=题
* 左右括号匹配且出现顺序正确
* s 仅由括号 '()[]{}' 组成
```js
const s = "()[]{}"
console.log(isValid(s));
// 输出：true
```
```js
const s = "([)]"
console.log(isValid(s));
// 输出：false
```
:::
::: tab label=栈解
* 利用栈存储左括号，遇到对应的右括号要出栈
>时间：99.78%  
>空间：30.14%
```js
function isValid(str) {
    const stack = [];
    const arr = str.split('');
    let left = /[\(\[\{]/;
    const map = new Map([[')', '(',], [']', '[',], ['}', '{']]);
    return arr.every(item => {
        if (left.test(item)) {
            stack.push(item);
            return true;
        } else {
            return stack.pop() === map.get(item);
        }
    }) && stack.length === 0;
}

```
:::
::: tab label=巧用括号
* 要正确匹配，那么无论怎么嵌套，中间的括号一定是配对的
>时间：
>空间：
```js
function isValid(str) {
    const time = str.length / 2;
    if (!Number.isInteger(time)) return false;
    const reg = /(\(\))|(\[\])|(\{\})/g;
    for (let i = 0; i < time; i++) {
        str = str.replace(reg, '');
    }
    return str.length === 0;
}
```
:::
::::
## 9.回文整数
:::: tabs
::: tab label=题
* 一个数字是回文
```js
const x = 121;
console.log(isPalindrome(x));
// 输出：true
```
:::
::: tab label=双指针解
>时间：94.67%  
>空间：18.38%
```js
function isPalindrome(x) {
    let left = 0;
    let right = `${x}`.length - 1;
    while (left <= right) {
        if (`${x}`[left] !== `${x}`[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```
:::
::: tab label=正则
>时间：88.60%  
>空间：5.62%
```js
function isPalindrome(x) {
    let str = `${x}`;
    let time = Math.ceil(str.length / 2);
    const reg = /^(\d)(\d*)\1$/g;
    while (time--) {
        str = str.replace(reg, '$2');
    }
    return str.length === 0 || str.length === 1;
}
```
:::
::::
## 12.整数转罗马数字
:::: tabs
::: tab label=题
* 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
```js
/*  字符          数值
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
    IV            4
    IX            9
    XL            40
    XC            90
    CD            400
    CM            900
/*
```
* 小的在大的左边代表减多少
```js
const num = 4
console.log(intToRoman(num));
// 输出: "IV"
```
:::
::: tab label=贪心解
* 做一个索引表，贪心算法倒序查
>时间：93.15%  
>空间：15.74%
```js
const map = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
])
function intToRoman(num) {
    const keys = [...map.keys()];
    return keys.reduce((pre, item) => {
        const times = Math.floor(num / item);
        num = num - times * item;
        const padStr = map.get(item)
        return pre.padEnd(pre.length + times * padStr.length, padStr);
    }, '')
}
```
:::
::::
## 13.罗马转数字
:::: tabs
::: tab label=题
* 同上，倒过来而已
```js
const s = "III";
console.log(romanToInt(s));
// 输出: 3
```
:::
::: tab label=解
* 反过来字符串由于单双号可能会重叠，引发匹配错误，所以单双号飞开匹配计算
>时间：78.76%  
>空间：5.05%
```js
const map = new Map([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
])
const dbMap = new Map([
    ['CM', 900],
    ['CD', 400],
    ['XC', 90],
    ['XL', 40],
    ['IX', 9],
    ['IV', 4],
])
function romanToInt(s) {
    let ans = 0;
    const replace = (map) => {
        const keys = [...map.keys()];
        keys.forEach(item => {
            const reg = new RegExp(`${item}`, 'g');
            let time = 0;
            s = s.replace(reg, () => {
                time++;
                return '';
            });
            ans += map.get(item) * time;
        })
    }
    replace(dbMap);
    replace(map);
    return ans;
}
```
:::
::: tab label=巧用倒序
* 左边是小于的就减，否则就加
>时间：95.11%  
>空间：31.77%
```js
const map = new Map([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
])
function romanToInt(s) {
    let len = s.length;
    let ans = 0;
    const calc = (i) => {
        if (i < len - 1) {
            const cVal = map.get(s[i]);
            const prev = map.get(s[i + 1])
            ans += cVal >= prev ? cVal : -cVal;
        } else {
            ans += map.get(s[i]);
        }
    }
    for (let i = len - 1; i >= 0; i--) {
        calc(i);
    }
    return ans;
}
```
:::
::::
## 22.括号生成
:::: tabs
::: tab label=题
* 给一个数字i，生成i个括号，并且要符合规范的所有组合方式
```js
const n = 3
console.log(generateParenthesis(n));
// 输出：["((()))","(()())","(())()","()(())","()()()"]
```
:::
::: tab label=解
* 冒泡，先做出一个左右左右的，然后右边的依次冒泡到左边
```js
// 还有问题！
function generateParenthesis(n) {
    let ans = [];
    let s = '';
    const add = (str) => s += str;
    for (let i = 0; i < n; i++) {
        add('(');
        add(')');
    }
    ans.push(s);
    let first = s.indexOf(')');
    let last = s.lastIndexOf('(') + 1;
    while (first < last) {
        const arr = s.split('');
        arr.splice(first, 1);
        const next = arr.indexOf('(', first) + 1;
        arr.splice(next, 0, ')');
        s = arr.join('');
        console.log(s);
        ans.push(s);
        first = s.indexOf(')');
        last = s.lastIndexOf('(') + 1;
    }
    return ans;
}
```
:::
::::
## 25. K 个一组翻转链表
:::: tabs
::: tab label=题
* 给一个链表，以及指定要翻转的位数。
```js
const head = [1,2,3,4,5], k = 2
console.log(reverseKGroup(head, k)); // 链表形式
// 输出：[2,1,4,3,5]
```
:::
::: tab label=解
* 思路：翻转固定长度，用一个栈，先进后出，进行翻转赋值。
    * 遍历链表的同时用一个for循环给栈赋值，满了就翻转一次
    * 由于是单向链表，所以翻转函数要注意preNode的传入
    * 由于反转后head会变，而我们需要返回新的head，所以用一个ListNode（指针）保存返回值head
>时间：96.20%  
>空间：5.04%
```js
var reverseKGroup = function (head, k) {

    // 翻转函数
    const reverse = (preNode) => {
        let nextTemp = stack[stack.length - 1].next;
        preNode.next = stack.pop();
        let c = preNode.next;
        while (stack.length) {
            c.next = stack.pop();
            c = c.next;
        }
        c.next = nextTemp;
        preTemp = c;
    }
    let cNode = head;
    let stack = [];
    let headPre = new ListNode(null, head);

    // 下一次翻转的上一个节点预存
    let preTemp = headPre;
    while (cNode) {
        for (let i = 0; i < k; i++) {
            if (!cNode) break;
            stack.push(cNode);
            cNode = cNode.next;
        }
        if (stack.length < k) break;
        reverse(preTemp);
        stack = [];
    }
    return headPre.next;
};
```
:::
::::
## 27.移除元素
:::: tabs
::: tab label=题
* 不用额外的数组空间，在原数组进行删除指定元素
```js
const nums = [3,2,2,3], val = 3;
console.log(removeElement(nums, val));
// 输出：2, nums = [2,2]
```
:::
::: tab label=解
>时间：96.40%  
>空间：16.33%
```js
function removeElement(nums, val) {
    let idx = nums.indexof(val);
    while (idx !== -1) {
        nums.splice(idx, 1);
        idx = nums.indexOf(val);
    }
}
```
:::
::::

## 24.两两交换链表
:::: tabs
::: tab label=题
* 链表两两交换
```js
const head = [1,2,3,4]
console.log(swapPairs(head));
// 输出：[2,1,4,3]
```
:::
::: tab label=解
>时间：99.55%  
>空间：6.52%
```js
function swapPairs(head) {
    const headPre = new ListNode(null, head);
    let cPre = headPre;
    const reverse = () => {
        let temp = cPre.next;
        cPre.next = cPre.next.next;
        temp.next = cPre.next.next;
        cPre.next.next = temp;
        cPre = temp;
    }
    while (cPre.next?.next) {
        reverse();
    }
    return headPre.next;
}
```
:::
::::