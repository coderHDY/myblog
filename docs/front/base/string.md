# String

## 模板字符串
::: tip 特性
1. 可换行
2. 可替换
3. [手写模板字符串](../sourcecode/template.html)
:::
:::: tabs
::: tab label=可换行
```js
console.log(`  一二
三四
五六`)
/**
 *   一二
 * 三四
 * 五六
 */
```
:::
::: tab label=可替换
```js
const obj = {
    name: '西瓜皮儿',
    age: 18,
    books: [
        'JS红宝书',
        'JS蝴蝶书'
    ]
}
console.log(`我的名字是${obj.name}, 我去年${obj.age - 1}岁，我爱读${obj.books.map(item => '《' + item + '》')}`)
// 我的名字是西瓜皮儿, 我去年17岁，我爱读《JS红宝书》,《JS蝴蝶书》
```
:::
::::
## 查找
### indexOf
::: tip indexOf
* 调用：str1.indexOf(str2[, start])
* 入参：String[, Number]
* 返回：str2在str1的下标，没有返回-1，**可选定开始位置**
:::
```js
let str1 = 'hello world！';
let str2 = 'l';
let str3 = 'z';

console.log(str1.indexOf(str2)); // 2
console.log(str1.indexOf(str3)); // -1

console.log(str1.indexOf(str2, 3)); // 3
console.log(str1.indexOf(str2, 4)); // 9
```
### lastIndexOf
::: tip lastIndexOf
* 调用：str1.lastIndexOf(str2[, fromIndex])
* 入参：String[, Number]
* 返回：str2在str1的最后一次出现的下标，没有返回-1，**可选定末端开始位置**
* tip: 如果fromIndex < 0 ，那么 fromIndex = 0
:::
```js
let str1 = 'hello world！';
let str2 = 'l';
let str3 = 'z';

console.log(str1.lastIndexOf(str2)); // 9
console.log(str1.lastIndexOf(str3)); // -1

console.log(str1.lastIndexOf(str2, 3)); // 3
console.log(str1.lastIndexOf(str2, 5)); // 3
```
### match
::: tip match
* 调用：str1.match(reg)
* 入参：RegExp
* 返回：Array | Object
* tip：入参不是RegExp会被隐式 new RegExp(reg)
* tip：返回值类型取决于有没有加 g
:::
```js
let a = 'hello world!';
let b = /l/g;
let c = /l/;

console.log(a.match(b)); // ['l', 'l', 'l']

console.log(a.match(c)); 
/**
 * {
 *  [0]: 'l',
 *  index: 2,
 *  input: 'hello world!',
 *  group: undefined
 * }
 */
```
### matchAll
::: tip matchAll
* 调用：str1.matchAll(reg)
* 入参：RegExp
* 返回：iterator，所有的捕获组的一个迭代器
* tip：入参正则**必须设置g**
:::
```js
let a = 'hello world!';
let b = /l/g;
let c = /l/;

console.log(a.matchAll(b)); // iterator
console.log(a.matchAll(c)); // Error
console.log(Array.from(a.matchAll(b)));
/**
 * [
 *    [ 'l', index: 2, input: 'hello world!', groups: undefined ],
 *    [ 'l', index: 3, input: 'hello world!', groups: undefined ],
 *    [ 'l', index: 9, input: 'hello world!', groups: undefined ]
 * ]
 */
```
### charAt
::: tip charAt
* 调用：str.charAt(index)
* 入参：Number
* 返回：String
:::
```js
console.log('hello'.charAt(3)); // l
```
### charCodeAt
::: tip charCodeAt
* 调用：str.charCodeAt(index)
* 入参：Number
* 返回：Number
:::
```js
console.log('hello'.charCodeAt(3)); // 108
```
### at
::: tip at
* 作用：支持负值下标查找元素
* 调用：str.at(index)
* tip：较新属性，支持环境要求高

| 环境  | 版本 |
| ---  | ---  |
| node |16.6.0|
|chrome|  92  |
:::
```js
const str = 'abc';
console.log(str.at(-1)); // c
```
### search
::: tip search
* 作用：查找字符串的**第一个**匹配项
* 调用：str.search(reg)
* 传参：RegExp
* 返回：Number
* tip：如果没找到会返回-1
:::
```js
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;

console.log(str.search(re)); // 4
console.log(str.search(re2)); // -1
```

## 判断
### includes
::: tip includes
* 调用：str1.includes(str2[, start])
* 入参：String[, Number]
* 返回：bool，str1是否包含str2，**可选定开始位置**
:::
```js
let str1 = 'hello world！';
let str2 = 'l';
let str3 = 'z';

console.log(str1.includes(str2)); // true
console.log(str1.includes(str3)); // false

console.log(str1.includes(str2, 9)); // true
console.log(str1.includes(str2, 10)); // false
```
### endsWith
::: tip endsWith
* 作用：判断字符串是否以指定字符串结尾
* 调用：str1.endsWith(str2[, searchIndex])
* 入参：String[, Number]
* 返回：Boolean
* 最后一个参数是作为第一个字符末尾的index
:::
```js
const str = 'hello world!';
console.log(str.endsWith('hello')); // false
console.log(str.endsWith('hello', 5)); // true
```

### strarsWith
::: tip startsWith
* 作用：判断字符串是否以指定的字符串开头
* 调用：str.startsWith(str2[, fromIndex])
* 入参：String[, Number]
* 返回：Boolean
:::
:::: tabs
::: tab label=使用
```js
const str = 'hello hdy!';
console.log(str.startsWith('hdy')); // false
console.log(str.startsWith('hdy', 6)); // true
```
:::
::: tab label=手写原生
> 期望：
```js
const str = 'hello hdy!';
console.log(str.myStartsWith('hdy', 6)); // true
```
```js
String.prototype.myStartsWith = function (str, from = 0) {
    const len = str.length;
    const startsStr = this.substr(from, len);
    console.log(startsStr);
    return str === startsStr;
}
```
:::
::::
## 更改
### concat
::: tip concat
* 调用：str1.concat(str2)
* 入参：String [, String...]
* 返回：新的字符串，**不改变原字符串**
* tip:工作中基本用 + 代替
:::
```js
let str1 = 'hello';
let str2 = ' world!';

console.log(str1.concat(str2)); // hello world!
console.log(str1.concat(str2, str2, str1)); // hello world! world!hello
console.log(str1); // hello

console.log(str1 + str2); // hello world!
```
### parseInt
::: tip parseInt
* 调用：parseInt(str)
* 入参：String
* 返回：number
* tip：如果不能转化成数字的会被变成NaN
:::
```js
let a = '1';
let b = '不是数字';

console.log(parseInt(a)); // 1
console.log(parseInt(b)); // NaN
```
### padStart
::: tip padStart
* 调用：str1.padStart(maxLength, str2)
* 入参：Number, String
* 返回：String，从首部用str2把maxLength填满
* tip：不修改原str1
* tip：长度本来就够就不做修改，**不剪裁**
* tip：str2不传默认空格 ' '
:::
```js
let a = '21';
let b = '20';
let c = '9';

console.log(a.padStart(4, b)); // 2021
console.log(c.padStart(2, '0')); // 09
console.log('2021年'.padStart(4, '20')); // 2021年  //长度超了，不做修改
console.log(a.padStart(10)); // '        21'

console.log(a); // 21
```
### padEnd
::: tip padEnd
* 调用：str1.padEnd(maxLength, str2)
* 入参：Number, String
* 返回：String，从尾部用str2把maxLength填满
* tip：不修改原str1
* tip：长度本来就够就不做修改，**不剪裁**
* tip：str2不传默认空格 ' '
:::
```js
console.log('7'.padEnd(3, '0')); // 700
console.log('2021年'.padEnd(2, '0')); // 2021年  //长度超了，不做修改
console.log('1'.padEnd(10)); // '1         '
```
### replace
::: tip replace
* 作用：替换（一个或全部）指定字符串
* 调用：str1.replace(reg, str2)
* 入参1：String | RegExp 
* 入参2：String | (matchs[, match...], input) => {}
* 返回：String
* tip：不修改原str1
* tip：第一个参数是正则的时候，第二个参数可以是函数，**函数入参取决于正则有没有分组**
:::
:::: tabs
::: tab label=字符串
```js
let a = 'hello world!';

console.log(a.replace('l', 'L')); // heLlo world!
```
:::
::: tab label=非全局正则
```js
let a = 'hello world!';
let reg1 = /l/;

console.log(a.replace(reg1, (matchs, index, input) => {
    console.log(matchs); // l
    console.log(index);  // 2
    console.log(input);  // hello world!
    return 'L'
})); // heLlo world!
```
:::
::: tab label=全局正则无分组
```js
let a = 'hello world!';
let reg2 = /l/g;

// 全部替换
console.log(a.replace(reg2, (matchs, index, input) => {

    // 匹配中了三次
    console.log(matchs); // l             // l             // l
    console.log(index);  // 2             // 3             // 9
    console.log(input);  // hello world!  // hello world!  // hello world!
    return 'L'
})); // heLLo worLd!

```
:::
::: tab label=正则有分组
* 经典算法题：[手写模板字符串](../sourcecode/template.html)
```js
let a = 'hello world!';
let reg3 = /l(.*?)w/;

// 有分组
// 有match分组项，function传参就会相应的增加
console.log(a.replace(reg3, (matchs, match, index, input) => {
    console.log(matchs); // llo w
    console.log(match); // 'lo '
    console.log(index); // 2
    console.log(input); // hello world!
    return 'L'
})); // heLord?
```
::::
### replaceAll
::: danger
* 新特性，很多环境还不支持，可在浏览器控制台实验
* 可以直接用replace，正则加 g 就可以实现全部替换
:::
::: tip replaceAll
> 与replace基本一致，只不过会全部替换
* 调用：str1.replaceAll(str2, fn)
* 入参1：String | RegExp 
* 入参2：String | (matchs[, match...], input) => {}
* 返回：String，替换了**第一个匹配项**
* tip：不修改原str1
* tip：第一个参数是正则的时候，第二个参数可以是函数，函数入参取决于正则有没有分组
:::
```js
let a = 'hello world!';

console.log(a.replaceAll('l', 'L')); // heLLo worLd!
let a = 'hello world!';

console.log(a.replace(/l(.*?)w/g, (matchs, match, index, input) => {
    /**
     * matchs: llo w
     * match: 'lo '
     * index: 2
     * input: hello world!
     */
    return 'L'
})); // heLord?
```
### repeat
::: tip repeat
* 作用：字符串重复
* 调用：str.repeat(num)
* 入参：Number
* 返回：String
:::
```js
const str1 = 'abc';
console.log(str1.repeat(2)); // abcabc
console.log(str1); // abc
```
### trim
::: tip trim
* 作用：去掉头尾空格
* 调用：str.trim()
* 返回：String
:::
```js
const str = '   A B C  '
console.log(str.trim()); // 'A B C'
```
### trimStart
::: tip trimStart
* 作用：去掉头空格
* 调用：str.trimStart()
* 返回：String
* 别名：trimLeft
:::
```js
const str = '  A B C  ';
console.log(str.trimStart()); // 'A B C  '
```
### trimEnd
::: tip trimEnd
* 作用：去掉尾空格
* 调用：str.trimEnd()
* 返回：String
* 别名：trimRight
:::
```js
const str = '  A B C  ';
console.log(str.trimEnd()); // '  A B C'
```

## 切割
### slice
::: tip slice
* 调用：str.slice(from[, to])
* 入参：Number[, Number]
* 返回：切割掉的字符串
* tip: slice 可以传负的索引
* tip: **不修改原字符串**
:::
```js
let a = 'hello';

console.log(a.slice(2, 4)); // ll
console.log(a.slice(-2, -1)); // l
console.log(a.slice(-1)); // o

console.log(a); // hello
```
### substring
::: tip substring
* 调用：str.substring(from, to)
* 入参：Number, Number
* 返回：String
* tip：所有的负数会变成0
:::
```js
let a = 'hello';

console.log(a.substring(1, 2)); // e
console.log(a.substring(-1, 2)); // he
console.log(a.substring(2)); // llo
console.log(a); // hello
```
::: warning slice和substring区别
* slice支持负数计算，substring直接将负数转换成0
```js
let a = 'hello';

console.log(a.substring(-1, 2)); // he
console.log(a.slice(-1, 2)); // ''

console.log(a.substring(-4, -2)); // ''
console.log(a.slice(-4, -2)); // 'el'
```
:::
### split
::: tip split
* 调用：str.split(str2[, len])
* 入参：String | Iterator[, Number]
* 返回：Array，用str2分割出来的数组，可限制要几个
* tip：第二个参数是限制了数组的长度
* tip：第一个参数可以是正则
:::
::::tabs
::: tab label=常规使用
```js
let a = 'hello';

console.log(a.split('l')); // ['he', '', 'o']
console.log(a.split('l', 2)); // ['he', '']
```
:::
::: tab label=去空格
```js
const str = 'hello world !';
console.log(str.split(' ').join('')); // helloworld!
```
:::
::: tab label=用正则
```js
const str = 'hello world !';
const reg = /[\e]/;

console.log(str.split(reg)); // ['h', 'llo world !']
```
:::
::::
### substr
::: tip substr
* 调用：str.substr(from[, length])
* 入参：Number[, Number]
* 返回：String
:::
```js
let a = 'hello';

console.log(a.substr(1, 2)); // el
console.log(a.substr(2)); // llo
console.log(a); // hello
```

## 其他
### Symbol.iterator
::: tip Symbol.iterator
* 作用：用字符串转生成可迭代对象
* 调用：str[ Symbol.iterator ] ()
* 返回：Iterator
:::
```js
const str = 'abc';
console.log(str[Symbol.iterator]().next().value); // a
console.log(str); // abc
```
### fromCharCode
::: warning 静态方法
* 作用：将utf-16编码转回字符串
* 调用：String.fromCharCode(code)
* 入参：Number
* 返回：String
* tip：处理的最大编码为FFFF(16进制)，要更完善的要用**fromCodePoint**
:::
```js
const str = 'abc';
const codeArr = str.split('').map(item => {
    let code = item.charCodeAt(0);
    return code - 32;
})

console.log(codeArr); // [65, 66, 67]
console.log(String.fromCharCode(...codeArr)); // ABC
```
### fromCodePoint
::: tip fromCodePoint
* 作用：支持更大的编码转化成字符串
* 调用：String.charCodePoint(code)
* 入参：Number
* 返回：String
* tip：ES6语法
:::
```js
const str = 'abc';
const codeArr = str.split('').map(item => {
    let code = item.charCodeAt(0);
    return code - 32;
})

// 对比
console.log(String.fromCharCode(9731, 9733, 9842, 0x2F804)); // ☃★♲
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804)); // ☃★♲你
```

### toLowerCase
::: tip toLowerCase
* 作用：将字符串全部转换成小写
* 调用：str.toLowerCase()
* 返回：String
:::
```js
const str = 'AbCD';

console.log(str.toLowerCase()); // abcd
console.log(str); // AbCD
```
### toUpperCase
::: tip toUpperCase
* 作用：将字符串全部转换成大写
* 调用：str.toUpperCase()
* 返回：String
:::
```js
const str = 'AbCD';

console.log(str.toUpperCase()); // ABCD
console.log(str); // AbCD
```