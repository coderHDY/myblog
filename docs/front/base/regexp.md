# RegExp
## 声明方式
::: warning 声明
* 有两种方式构造正则：字面量和构造器
* 区别：
    1. **字面量赋值是编译状态，效率更高。**
    2. 构造函数是运行时编译，效率会更低，但支持传入字符串进行运行时解析，所以可以有更自由的定义正则方式。
:::
```JS{2,3}
const str = 'www.music.qq.com/'
const reg1 = /qq.com/g;
const reg2 = new RegExp(/qq.com/, 'g');

console.log(reg1.test(str)); // true
console.log(reg2.test(str)); // true
```
## 构造函数
::: tip 构造函数
* 作用：构造一个正则表达式
* 调用：new RegExp(pattern[, flags])
* 入参：String|RegExp [, String]
* 返回：RegExp
* tip：flags支持的标志有：g / i / m / s / u / y
:::
::: warning flags
|flag|作用|
|---|---|
|g|全局匹配|
|i|忽略大小写|
|m|多行匹配模式：开头匹配(^)/结尾匹配($)按照每行匹配。(以\n或者\r 分隔)|
|s|点匹配所有字符(包括换行字符)|
|u|unicode模式匹配|
|y|粘性匹配，下次匹配继续本次结束的位置|
:::
:::: tabs
::: tab label=基本使用
```js{2,4}
const str = 'www.music.qq.com/'
const reg = /qq.com/;

console.log(str.match(reg)); // [ 'qq.com', index: 10, input: 'www.music.qq.com/', groups: undefined ]
```
:::
::: tab label=s
* '.'是否匹配换行符:
    1. U+000A 换行符（"\n"）
    2. U+000D 回车符（"\r"）
    3. U+2028 行分隔符（line separator）
    4. U+2029 段分隔符（paragraph separator）
```js{6,7}
const reg1 = /./g;
const reg2 = /./sg;
const str = `1
2
3`;
console.log(str.match(reg1)); // [ '1', '2', '3' ]
console.log(str.match(reg2)); // [ '1', '\n', '2', '\n', '3' ]
```
:::
::: tab label=y
* stikey：粘性，代表从lastIndex的**第一个字符开始就需要能匹配到**pattern
    1. 如果匹配到了，lastIndex = 匹配的最后一个字符下标 + 1
    2. 如果未匹配到，就将lastIndex重置为0
```js{7}
const str = 'apa';
const reg = /a/y;

console.log(reg.exec(str)); // [ 'a', index: 0, input: 'apa', groups: undefined ]
console.log(reg.lastIndex); // 1

// 现在lastIndex是1，指向的是'p' 不是'a'，所以匹配失败，lastIndex重置0
console.log(reg.exec(str)); // null
console.log(reg.lastIndex); // 0

```
* 对比非粘性：
    1. 非粘性不会动lastIndex。test、exec一直都是从0开始匹配
    2. 且不必第一个字符就匹配到，可以向下搜索匹配
```js
const str = 'pa';
const reg2 = /a/;

console.log(reg2.test(str)); // true
console.log(reg2.test(str)); // true
console.log(reg2.test(str)); // true
```
:::
::::
## 属性
### dotAll
::: tip dotAll
* 作用：查看是否使用了标识符【s】
* 调用：reg.dotAll
* 值：Boolean
:::
```js
const reg1 = /./;
const reg2 = /./s;

console.log(reg1.dotAll); // false
console.log(reg2.dotAll); // true
```
### global
::: tip global
* 作用：查看是否使用了标识符【g】
* 使用：reg.global
* 值：Boolean
:::
```js
const reg1 = /./ig;
const reg2 = /./i;

console.log(reg1.global); // true
console.log(reg2.global); // false
```
### ignoreCase
::: tip ignoreCase
* 作用：查看是否使用了标识符【i】
* 使用：reg.ignoreCase
* 值：Boolean
:::
```js
const reg1 = /i/g;
const reg2 = /i/ig;

console.log(reg1.ignoreCase); // false
console.log(reg2.ignoreCase); // true
```
### hasIndices
::: tip hasIndices
* **tip：有版本限制**
* 作用：查看是否使用了标识符【d】
* 调用：reg.hasIndices
* 值：Boolean

|环境|支持版本|
|---|---|
|chrome|90|
|node|no|
:::
### lastIndex
::: tip lastIndex
* 作用：记录全局匹配模式下，上一次匹配的下标 + 1
* 使用：reg.lastIndex
* 值：Number
:::
* 注：全局匹配模式(g)/粘性模式(y) 会启用此属性
```js{4-6,8-10}
const str = 'hello';
const reg = /o/g;

// 匹配的下标 4 ，lastIndex存 5
console.log(reg.exec(str)); // [ 'o', index: 4, input: 'hello', groups: undefined ]
console.log(reg.lastIndex); // 5

// 没匹配到，lastIndex重置0
console.log(reg.exec(str)); // null
console.log(reg.lastIndex); // 0

console.log(reg.exec(str)); // [ 'o', index: 4, input: 'hello', groups: undefined ]
console.log(reg.lastIndex); // 5
```
### multiline
::: tip multiline
* 作用：查看是否使用了标识符【m】
* 使用：reg.multiline
* 值：Boolean
:::
```js
const reg1 = /m/m;
const reg2 = /m/;

console.log(reg1.multiline); // true
console.log(reg2.multiline); // false
```
### source
::: source
* 作用：拿到正则的pattern（不包括falgs）
* 使用：reg.source
* 值：String
:::
```js
const reg = /aaa/gim;
console.log(reg.source); // aaa
```
### sticky
::: tip sticky
* 作用：查看是否使用了标识符【y】
* 使用：reg.sticky
* 值：Boolean
:::
```js
const reg1 = /aa/y;
const reg2 = /aa/;

console.log(reg1.sticky); // true
console.log(reg2.sticky); // false
```
### unicode
::: tip unicode
* 作用：查看是否使用了标识符【u】
* 调用：reg.unicode
* 值：Boolean
:::
```js
const reg1 = /a/u;
const reg2 = /a/;

console.log(reg1.unicode); // true
console.log(reg2.unicode); // false
```
### flags
::: tip falgs
* 作用：拿到所有的标识符
* 调用：reg.flags
* 值：String
* tip：(g/i/s/m/u/y)且会**自动按字母顺序排序**
:::
:::: tabs
::: tab label=使用
```JS
const reg = /./igsumy;
console.log(reg.flags); // 'gismuy'
```
:::
::: tab label=实现
* 期望：
```js
const reg = /i/igsumy;

// 注意，是属性，不是方法
console.log(reg.myFlags); // gimsuy
```
* 实现
```js
Object.defineProperty(RegExp.prototype, 'myFlags', {
    get() {
        return this.toString().match(/[gsiumy]*$/)[0];
    }
})
```
:::
::::
## 主动执行方法
::: warning 规则
* 如果一个表达式同时指定了 sticky 和 global，其将会忽略 global 标志。
* sticky不会更改lastIndex，除非匹配结束，重置lastIndex
:::
### exec
::: tip exec
* 作用：**逐条**遍历匹配项（在加g/y的情况下）
* 调用：reg.exec(str)
* 入参：String
* 返回：Array | null
:::
::: warning exec对比match
* exec和match都可以拿到所有匹配项
* exec可以逐条遍历，match只是返回匹配数组
:::
:::: tabs
::: tab label=使用
* 返回的是数组
```js
const str = 'aaple';
const reg2 = /a/g;

console.log(reg2.exec(str)); // [ 'a', index: 0, input: 'aaple', groups: undefined ]
console.log(Array.isArray(reg2.exec(str))); // true
```
* 逐条遍历(加g/y)
```js
const str = 'aaple';
const reg2 = /a/g;

console.log(reg2.exec(str)); // [ 'a', index: 0, input: 'aaple', groups: undefined ]
console.log(reg2.exec(str)); // [ 'a', index: 1, input: 'aaple', groups: undefined ]
console.log(reg2.exec(str)); // null
console.log(reg2.exec(str)); // [ 'a', index: 0, input: 'aaple', groups: undefined ]
```
:::
::: tab label=匹配组
* 有匹配组的情况下会在返回数组的**第二项开始插入**
```js{5}
const str = 'aaple';
const reg = /a(p?)/g;

console.log(reg.exec(str)); // [ 'a', '', index: 0, input: 'aaple', groups: undefined ]
console.log(reg.exec(str)); // [ 'ap', 'p', index: 1, input: 'aaple', groups: undefined ]
console.log(reg.exec(str)); // null
```
:::
::: tab label=和match对比
```js
const str = 'hello world!';
const reg = /l/g;

// match直接返回所有匹配项
console.log(str.match(reg)); // ['l', 'l', 'l']

// exec需要逐个执行，遍历结果项
console.log(reg.exec(str)); // [ 'l', index: 2, input: 'hello world!', groups: undefined ]
console.log(reg.exec(str)); // [ 'l', index: 3, input: 'hello world!', groups: undefined ]
console.log(reg.exec(str)); // [ 'l', index: 9, input: 'hello world!', groups: undefined ]
console.log(reg.exec(str)); // null
```
:::
::: tab label=不加g/y会怎么样
* 不加g/y它就不会更改lastIndex，lastIndex一直是0，那么就一直从0开始查找
```js
const str = 'hello world!';
const reg = /l/;

console.log(reg.exec(str)); // [ 'l', index: 2, input: 'hello world!', groups: undefined ]
console.log(reg.exec(str)); // [ 'l', index: 2, input: 'hello world!', groups: undefined ]
```
:::
::::
### test
### toString
::: tip toString
* 作用：以字符串形式返回正则表达式
* 调用：reg.toString()
* 返回：String
:::
```js
const reg = /abc/gmi;
console.log(reg.toString()); // '/abc/gmi'
```
## Symbol方法
::: warning
* 被Symbol标识出来的方法，基本都被String.prototype.XXX **内部调用**
* 如：**RegExp.prototype[Symbol.match]被**String.prototype.match()**内部调用**
:::
### match
::: tip match
* tip：该方法是被String.prototype.match()内部调用
* 调用：str1.match(reg)
* 入参：RegExp
* 返回：Array | Object
* tip：入参不是RegExp会被隐式 new RegExp(reg)
* tip：返回值类型取决于有没有加 g
:::
```js{5,7}
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
* String.prototype.match()内部调用证明
```js{5,6}
const reg = /1/g;
const str = '123';
console.log(str.match(reg)); // [ '1' ]

reg[Symbol.match] = (str) => ['嘿', '嘿嘿', '嘿嘿嘿']
console.log(str.match(reg)); // ['嘿', '嘿嘿', '嘿嘿嘿']
```
### matchAll
::: tip matchAll
* tip：是被String.prototype.matchAll()内部调用
* 调用：str1.matchAll(reg)
* 入参：RegExp
* 返回：**iterator，所有的捕获组的一个迭代器**
* tip：入参正则**必须设置g**
:::
```js{5}
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
### replace
::: tip replace
* tip：由String.prototype.replace()内部调用
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
* 经典算法题：[手写模板字符串](../sourcecode/#模板字符串)
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
### search
::: tip search
* tip：由String.prototype.search()内部调用
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

::: warning search和indexof的区别
* search支持正则，但也只能返回第一个匹配项
* indexOf支持变换起始下标，但不支持正则
```js
const str = '1231';
console.log(str.search(/1/, 1)); // 0
console.log(str.indexOf('1', 1)); // 3
```
:::
### split
::: tip split
* tip：String.prototype.split()内部调用
* 调用：str.split(str2[, len])
* 入参：String | RegExp[, Number]
* 返回：Array，用str2分割出来的数组，可限制要几个
* tip：第二个参数是限制了数组的长度
* tip：第一个参数可以是正则
:::
* String.prototype.split()内部调用
::::tabs
::: tab label=调用证明
```js{5,6}
const reg = /1/g;
const str = '123';
console.log(str.split(reg)); // [ '', '23' ]

reg[Symbol.split] = (str) => ['嘿', '嘿嘿', '嘿嘿嘿']
console.log(str.split(reg)); // ['嘿', '嘿嘿', '嘿嘿嘿']
```
:::
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

### species
::: tip
* 同[Symbol.species](./symbol.html#species)
:::
```js
class MyRegExp extends RegExp {
  // 将 MyRegExp species 覆盖为 RegExp 父类构造器
  static get [Symbol.species]() { return RegExp; }
}
```