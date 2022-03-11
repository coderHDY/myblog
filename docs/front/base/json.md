---
title: JSON
date: 2021-12-18
---
## 规则
|值|规则|
|---|---|
|key|必须使用双引号|
|Array\|Object|最后一个值后面不能有逗号|
|Number|数字出现前导零会被视作小数JSON.parse('{"a": 0.1}') => { a: 0.1 }|
## parse
::: tip parse
* 作用：将json字符串解析成对象
* 调用：JSON.parse(JSON[, replacer])
* 入参：String[, Function]
* 返回：Object
:::
:::: tabs
::: tab label=使用
```js
const json = '{"a": 0.1}';
console.log(JSON.parse(json)); // { a: 0.1 }
```
:::
::: tab label=replacer
```js

```
:::
::::
## stringify
::: tip stringify
* 作用：将对象转化成json形式字符串
* 调用：JSON.stringify(obj[, replacer [, space]])
* 入参：Object, Function | Array, String
* 返回：String
:::
:::: tabs
::: tab label=使用
```js
const obj = {
    'name': 'hdy',
    age: 18,
    books: [
        '蝴蝶书',
        '红宝书',
    ],
}

 // 不符合规范的地方都会被转化成标准的json格式
console.log(JSON.stringify(obj));
// {"name":"hdy","age":18,"books":["蝴蝶书","红宝书"]}
```
:::
::: tab label=replacer
* 函数：处理入参并决定是否需要添加进JSON：(key, val) => {}
* 数组：需要包含的属性名
```js
const obj = {
    name: 'hdy',
    age: 18,
    books: [
        '红宝书',
        '你不知道的JS',
    ]
}

function replacer(key, val) {
    if (typeof val === 'number') {
        return undefined;
    }
    return val;
}

console.log(JSON.stringify(obj));            // {"name":"hdy","age":18,"books":["红宝书","你不知道的JS"]}
console.log(JSON.stringify(obj, ['books'])); // {"books":["红宝书","你不知道的JS"]}
console.log(JSON.stringify(obj, replacer));  // {"name":"hdy","books":["红宝书","你不知道的JS"]}
```
:::
::: tab label=space
* 决定与上级相比的空格。
```js
const obj = {
    name: 'hdy',
    age: 18,
    books: [
        'js高程',
        'js蝴蝶书',
    ]
}
const fs = require('fs');
fs.writeFileSync('./data.json', JSON.stringify(obj, null, '\t'));
```
>结果文件:data.json
```json
{
	"name": "hdy",
	"age": 18,
	"books": [
		"js高程",
		"js蝴蝶书"
	]
}
```
:::
::::
## toJSON
::: tip
* 作用：自定义JSON转化方式
* 调用：JSON.stringify转化时调用
:::
:::: tabs
::: tab label=使用
* 数据在定义时自己就定义了JSON格式化时的过滤方法
```js
const obj = {
    name: 'hdy',
    age: 18,
    money: '180元',
    toJSON() {
        const entries = Object.entries(this).map(([key, val]) => key === 'money' ? [key, parseInt(val)] : [key, val]);
        return Object.fromEntries(entries);
    }
}

console.log(JSON.stringify(obj));
// {"name":"hdy","age":18,"money":180}
```
:::
::::
## 深浅拷贝
* Object等是引用类型，所以存在深浅拷贝的问题，就是引用类型拷贝的时候关系没有断干净
* String是值类型，拷贝就是深拷贝
* 所以可以利用JSON的转换方法进行深拷贝
* 期望
```js{8-9}
const obj1 = {
    books: [
        '蝴蝶书',
        '红宝书',
    ]
}
const obj2 = obj1;
const obj3 = deepClone(obj1);
obj1.books[1] = '你不知道的JS';

console.log(obj2.books[1]); // '你不知道的JS'
console.log(obj3.books[1]); // '红宝书'
```
* 实现
```js
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
```
## 手写JSON.stringify
* 期望
```js
const obj1 = {
    parents: {
        father: 'zs',
        father: 'ls',
        gift:[
            '你不知道的JS'
        ]
    },
    books: [
        '蝴蝶书',
        '红宝书',
        {
            currentRead: '正则表达式必知必会'
        }
    ]
}

const ans = stringify(obj1);
const json = JSON.stringify(obj1);
console.log(ans === json); // true
```
* 主要就是要注意类型的判断，然后递归
* tip：数组转字符串时会去掉中括号，所以不用处理【第五行】
:::: tabs
::: tab label=递归实现
```js{3-5}
function stringify(obj) {
    if (typeof obj === 'object' && obj != null) {
        return Array.isArray(obj) ?
        `[${obj.map(item => stringify(item))}]`
        : `{${Object.entries(obj).map(([key, value]) => `"${key}":${stringify(value)}`)}}`;
    } else {
        return `"${obj}"`;
    }
}
```
:::
::::