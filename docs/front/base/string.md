# String

## 模板字符串
* 特性：
1. 可换行
2. 可替换
3. [手写模板字符串](../sourcecode/template.html)
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
## 常用方法
* 方法总结：
1. indexOf => number  || lastindexOf => number
2. includes => bool
3. concat => string   ->连接(可以直接用 + )
4. parseInt => number
5. match => [arg, index, string, gtoups]  ->匹配一个
6. matchAll =>iterator  ->匹配所有
7. padStart(maXLength, string) => formatString  ->首部格式化输出
8. padEnd  ->尾部格式化输出:
9. replace(reg, string | (findString, matchIndex, allString) => replaceString)  ->替换
    * 多重匹配正则替换：replace(/\$\{(.+?)\}/, (matchs[, ...matches], index, string) =>{})
    * 单匹配正则替换：repace(/a/g, (matchOnlyOne, index, string) =>{})

10. charAt(number) => string  ->查看指定位置char
11. trim()  ->去空格
12. 切割：
    * slice(start, end) => 不修改原字符串
    * split(splitSymbol, limit) => Array
    * substring(from, to) =>  不修改原字符串
    * substr(from, length) => 不修改原字符串

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
* 调用：str1.lastIndexOf(str2)
* 入参：String[, fromIndex]
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
* 调用：str1.replace(reg, str)
* 入参1：String | RegExp 
* 入参2：String | (matchs[, match...], input) => {}
* 返回：String，替换了**第一个匹配项**
* tip：不修改原str1
* tip：第一个参数是正则的时候，第二个参数可以是函数，函数入参取决于正则有没有分组
:::
```js
let a = 'hello world!';
let reg1 = /l/;
let reg2 = /l/g;

console.log(a.replace('l', 'L')); // heLlo world!

console.log(a.replace(reg1, (matchs, index, input) => {
    /**
     * matchs: l
     * index: 2
     * input: hello world!
     */
    return 'L'
})); // heLlo world!

// 全部替换
console.log(a.replace(reg2, (matchs, index, input) => {
    /**
     * matchs: l
     * index: 2
     * input: hello world!
     */
    return 'L'
})); // heLLo worLd!

// 有分组
// 有match项，function传参就会相应的增加
console.log(a.replace(/l(.*?)w/, (matchs, match, index, input) => {
    /**
     * matchs: llo w
     * match: 'lo '
     * index: 2
     * input: hello world!
     */

    return 'L'
})); // heLord?
```

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
### slice
::: tip slice
* 调用：str.slice(from, to)
* 入参：Number, Number
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
* 入参：String, Number
* 返回：Array，用str2分割出来的数组，可限制要几个
* tip：第二个参数是限制了数组的长度
:::
```js
let a = 'hello';

console.log(a.split('l')); // ['he', '', 'o']
console.log(a.split('l', 2)); // ['he', '']
```
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
