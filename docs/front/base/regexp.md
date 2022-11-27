---
title: RegExp
date: 2021-12-06
tags: 
 - 前端重点
---
::: tip
* js正则底层是基于perl实现的正则引擎
* 同样的字符串处理正则会比一般的字符串方法快很多
* 详细的匹配模式可以看[《正则表达式必知必会》读书笔记](../../../books/javascript/)
:::
## 构造函数
::: tip 构造函数
* 作用：构造一个正则表达式
* 调用：new RegExp(pattern[, flags])
* 入参：String|RegExp [, String]
* 返回：RegExp
* tip：flags支持的标志有：g / i / m / s / u / y
:::
::: warning 字面量和构造函数
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
## falgs语法
::: warning flags
|flag|作用|
|---|---|
|g|全局匹配|
|i|忽略大小写|
|m|多行匹配模式：开头匹配(^)/结尾匹配($)按照每行匹配。(以\n或者\r 分隔)|
|s|点匹配所有字符(包括换行字符)|
|u|unicode模式匹配|
|y|粘性匹配，从lastIndex匹配，且不会向下搜索|
:::
:::: tabs
::: tab label=查看flags
* 查看所有：[reg.flags](./regexp.html#flags)
```js
const reg = /./gimsuy
console.log(reg.flags); // gimsuy
```
* 查看g：[reg.global](./regexp.html#global)
* 查看s：[reg.dotAll](./regexp.html#dotall)
* 查看m：[reg.multiline](./regexp.html#multiline)
* 查看i：[reg.ignoreCase](./regexp.html#ignorecase)
* 查看u：[reg.unicode](./regexp.html#unicode)
* 查看y：[reg.sticky](./regexp.html#sticky)
:::
::: tab label=g
* 全局匹配，exec/test启用lastIndex
```js{5}
const reg = /1/g;
const str = '121';
console.log(reg.exec(str)); // [ '1', index: 0, input: '121', groups: undefined ]
console.log(reg.exec(str)); // [ '1', index: 2, input: '121', groups: undefined ]
console.log(reg.exec(str)); // null 同时lastIndex被重置0
```
* 对search等无效。**matchAll必须加g，否则报错**
```js
const reg = /1/g;
const str = '121';

console.log(str.search(reg)); // 0
console.log(str.search(reg)); // 0
console.log(str.search(reg)); // 0
```
:::
::: tab label=i
* 是否忽略大小写
```js{5}
const reg1 = /HELLO/i;
const reg2 = /HELLO/;
const str = 'hello world!';

console.log(reg1.test(str)); // true
console.log(reg2.test(str)); // false
```
:::
::: tab label=m
* 多行匹配模式
    1. 【^】和【$】默认是匹配全文的头尾
    2. 加m后匹配的是每一行得头尾
```js
const reg1 = /^h/m;
const reg2 = /^h/;
const str = `I am
happy
!`
console.log(reg1.test(str)); // true
console.log(reg2.test(str)); // false
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
::: tab label=u
* 用unicode匹配模式
* [中文的unicode范围](https://www.qqxiuzi.cn/zh/hanzi-unicode-bianma.php)
```js
let text = "安㑝㑞㑟㑠㑡㑢";

// 非字母、数字、下划线。等价于 '[^A-Za-z0-9_]'。
let reg1 = /[\W]+/g;

// 普通汉字unicode范围
let reg2 = /[\u4E00-\u9FA5]+/g;

// 匹配出了所有非字母数字下划线的字符
console.log(reg1.exec(text));  // [ '安㑝㑞㑟㑠㑡㑢', index: 0, input: '安㑝㑞㑟㑠㑡㑢', groups: undefined ]

// 由于简单汉子字符unicode编码集，不包括后面几个复杂汉字，所以未匹配到
console.log(reg2.exec(text));  // [ '安', index: 0, input: '安㑝㑞㑟㑠㑡㑢', groups: undefined ]

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
## pattern模式
* 详细的匹配模式可以看[《正则表达式必知必会》读书笔记](../../../books/javascript/)
### 基础语法
:::: tabs
::: tab label=数量限制1
* 【+】匹配一个到多个
* 【*】匹配零个到多个
* 【?】匹配零个到一个
```js{4,8,12,16}
const str = 'aab';

// 匹配一个
const reg1 = /a/g;
console.log(str.match(reg1)); // [ 'a', 'a' ]

// 一个以上（贪婪）
const reg2 = /a+/g;
console.log(str.match(reg2)); // [ 'aa' ]

// 0个以上（贪婪）
const reg3 = /a*/g;
console.log(str.match(reg3)); // [ 'aa', '', '' ]  每匹配一次，lastIndex +1，所以只有两个空匹配项(0个a)

// 0个/1个
const reg4 = /a?/g;
console.log(str.match(reg4)); // [ 'a', 'a', '', '' ]
```
:::
::: tab label=贪婪/非贪婪
* 【a+】匹配**最大数量**的a
* 【a+?】匹配**最少数量**(不包括0)的a
* 【a*】匹配**最大数量**的a
* 【a*?】匹配**最少数量**(包括0)的a
```js{4,8,12,16}
const str = 'aab';

// 一个以上（贪婪）
const reg1 = /a+/g;
console.log(str.match(reg1)); // [ 'aa' ]

// 一个以上（非贪婪）
const reg2 = /a+?/g;
console.log(str.match(reg2)); // [ 'a', 'a' ]

// 0个以上（贪婪）
const reg3 = /a*/g;
console.log(str.match(reg3)); // [ 'aa', '', '' ]

// 0个以上（非贪婪）
const reg4 = /a*?/g;
console.log(str.match(reg4)); // [ '', '', '', '' ]
```
:::
::: tab label=数量限制2
* **字符和中括号表达式只能取一个匹配值，要限制取值个数需要加限定符**
1. 用贪婪/非贪婪限制。例：取所有单词【[a-zA-Z]+】
    * 【+】号不能写在中括号里面，无效
2. 用【{}】限制
    * 【[a-z]{2}】 匹配**2个**小写字符
    * 【[a-z]{2,}】匹配**2个以上**小写字符
    * 【[a-z]{2,4}】匹配**2-4个**小写字符
    * 【[a-z]{1,4}】匹配**4个以下**小写字符
```js{3,6,9,12}
const str = 'aDcdEfghi';

const reg1 = /[a-z]{2}/g;
console.log(str.match(reg1)); // [ 'cd', 'fg', 'hi' ]

const reg2 = /[a-z]{2,}/g;
console.log(str.match(reg2)); // [ 'cd', 'fghi' ]

const reg3 = /[a-z]{2,4}/g;
console.log(str.match(reg3)); // [ 'cd', 'fghi' ]

const reg4 = /[a-z]{1,4}/g;
console.log(str.match(reg4)); // [ 'a', 'cd', 'fghi' ]
```
:::
::: tab label=值的范围/取反
* 【[ ]】`中括号表达式`，可以限制值的范围。例如，匹配一个小写字母：[a-z]
* 【[-]】可以取数字、小写字母、大写字母的`区间`。例如，匹配abc中的一个：[a-c]
* 【[^]】可以`取反范围`。例如，匹配一个非小写字母：[^a-z]
* 【[|]】可以`表示选择范围`。例如，匹配字母a或C：[a|C]
```js{3,6,9,12}
const str = 'abCD';

const reg1 = /[a-z]/g;
console.log(str.match(reg1)); // ['a', 'b']

const reg2 = /[^a-z]/g;
console.log(str.match(reg2)); // ['C', 'D']

const reg3 = /[a|C]/g;
console.log(str.match(reg3)); // ['a', 'C']

const reg4 = /[^a|C]/g;
console.log(str.match(reg4)); // ['b', 'D']
```
:::
::: tab label=空白/非空白
|非打印字符|含义|
|---|---|
|\f|换页|
|\n|换行|
|\r|回车|
|\t|制表符|
|\v|垂直制表符|
* 【\s】匹配空白和非打印字符。等价于 [ \f\n\r\t\v]
* 【\S】匹配非空白的字符们。等价于 [^ \f\n\r\t\v]
```js{3-4}
const reg1 = /\s/g;
const reg2 = /\S+/g;
const str = `Hello
world !`

console.log(str.match(reg1)); // [ '\n', ' ' ]
console.log(str.match(reg2)); // [ 'Hello', 'world', '!' ]
```
:::
::: tab label=字母/数字/下划线
* 【\b】**单词**间的间距。
* 【\B】**字母**间的间距。
* 【\w】匹配所有字母数字下划线。相当于：[a-zA-Z0-9_]
* 【\W】匹配所有非字母数字下划线。相当于：[^a-zA-Z0-9_]
* 【\d】匹配一个数字
* 【\D】匹配一个非数字
```js
const str = '1万_1W';
const reg1 = /\w/g;
const reg2 = /[a-zA-Z0-9_]/g;

console.log(str.match(reg1)); // [ '1', '_', '1', 'W' ]
console.log(str.match(reg2)); // [ '1', '_', '1', 'W' ]

const reg3 = /\W/g;
const reg4 = /[^a-zA-Z0-9_]/g;

console.log(str.match(reg3)); // [ '万' ]
console.log(str.match(reg4)); // [ '万' ]
```
```js
const str = '123sf';
const reg = /\d/g;
const reg2 = /\D/g;

console.log(str.match(reg)); // [ '1', '2', '3' ]
console.log(str.match(reg2)); // [ 's', 'f' ]
```
:::
::: tab label=位置限定
* **m标识符可以让每行都匹配起始结束符**
* 【^】起始位置。如整个字符串以h起始：^h
* 【$】结束位置。如整个字符串以!结束：!$
* 【[^]】控制起始字符起始。如找到以h起始的单词位置：/[^h]/g
* 【[$]】控制结束字符起始。如找到以!结束的单词位置：/[!$]/g
```js{4,8,12,16}
const str = `hello!
hdy!`

// 全文起始限定
const reg1 = /^h\S*/g;
console.log(str.match(reg1)); // ['hello!']

// 全文结尾限定。注：$在匹配字符后面
const reg2 = /\S*!$/g;
console.log(str.match(reg2)); // ['hdy!']

// 单词起始限定。注：中括号内【^】开头代表取反，所以加一个单词边界限定符【\b】
const reg3 = /[\b^h]\S+/g;
console.log(str.match(reg3)); // [ 'hello!', 'hdy!' ]

// 单词结尾限定。注：不可以全部写在中括号，一个中括号代表一个中括号表达式
const reg4 = /\S*[!$]/g;
console.log(str.match(reg4)); // [ 'hello!', 'hdy!' ]
```
:::
::: tab label=捕获组
* 使用【()】括起来的匹配项会被单独保存成一个匹配组。例：匹配abc的同时想拿到b：/a(b)c/g
```js{6,10}
const str = 'I am abc';

// 注：用match不能加g，否则返回的是整体匹配的数组
const reg1 = /a(b)c/;
console.log(str.match(reg1)); // [ 'abc', 'b', index: 5, input: 'I am abc', groups: undefined ]
console.log(str.match(reg1)[1]); // b

// 注：用exec可以加g
const reg2 = /a(b)c/g;
console.log(reg2.exec(str)[1]); // b
```
* 捕获组可以嵌套
```js
const str = 'I am abc';
const reg2 = /a((b)c)/g;
console.log(reg2.exec(str)); // [ 'abc', 'bc', 'b', index: 5, input: 'I am abc', groups: undefined ]
```
* 用【(?: )】可以不缓存捕获组
```js{3}
const str = 'I am abc';
const reg1 = /a(b)c/g;
const reg2 = /a(?:b)c/g;
console.log(reg1.exec(str)); // [ 'abc', 'b', index: 5, input: 'I am abc', groups: undefined ]
console.log(reg2.exec(str)); // [ 'abc', index: 5, input: 'I am abc', groups: undefined ]
```
:::
::::
### 高级筛选
:::: tabs
::: tab label=环视
>又名`零宽断言`，ios / mac不支持
* 【exp1(?=exp2)】：查找 exp2 前面的 exp1。
* 【exp1(?!exp2)】：查找后面不是 exp2 的 exp1。
* 【(?<=exp2)exp1】：查找前面是 exp2 的 exp1。
* 【(?<!exp2)exp1】：查找前面不是 exp2 的 exp1。
```js
const str = '986005715@qq.com';

// 取到【@】前面的账号
const reg1 = /[\w]+?(?=@)/g;
console.log(str.match(reg1)); // [ '986005715' ]

// 取到【@】后面的域名
const reg2 = /(?<=@)[\w\.]+/g;
console.log(str.match(reg2)); // [ 'qq.com' ]
```
:::
::: tab label=非捕获性匹配
> 需要用括号语法来匹配，但是不希望它存分组
* 捕获组：匹配且单独存储捕获组
```js{3,5,11}
const str = `
const zs = {name: '张三', age: 20};
const me = {name: 'hdy', age: 18};
`;
const reg = /(me\s*=\s*)\{[^\}]+\}/g;

console.log(reg.exec(str));
/**
[
  "me = {name: 'hdy', age: 18}",
  'me = ',
  index: 41,
  input: "\nconst zs = {name: '张三', age: 20};\nconst me = {name: 'hdy', age: 18};\n",
  groups: undefined
]
 */
```
* 非捕获性匹配：不存储捕获组
```js{5,8}
const str = `
const zs = {name: '张三', age: 20};
const me = {name: 'hdy', age: 18};
`;
const reg = /(?:me\s*=\s*)\{[^\}]+\}/g;

console.log(reg.exec(str));
/** 没有捕获组项
[
  "me = {name: 'hdy', age: 18}",
  index: 41,
  input: "\nconst zs = {name: '张三', age: 20};\nconst me = {name: 'hdy', age: 18};\n",
  groups: undefined
]
 */
```
* 环视：主匹配项也不要括号匹配的内容
```js{5,8}
const str = `
const zs = {name: '张三', age: 20};
const me = {name: 'hdy', age: 18};
`;
const reg = /(?<=me\s*=\s*)\{[^\}]+\}/g;

console.log(reg.exec(str));
/**括号内容完全不匹配，只是用来定位
[
  "{name: 'hdy', age: 18}",
  index: 46,
  input: "\nconst zs = {name: '张三', age: 20};\nconst me = {name: 'hdy', age: 18};\n",
  groups: undefined
]
 */
```
:::
::: tab label=反向引用
> 可以使用前面已经匹配到的项
* 字符串去重
```js
const str = 'aabbccc';
const reg = /(\w)\1+/g;
console.log(str.match(reg)); // [ 'aa', 'bb', 'ccc' ]
console.log(str.replace(reg, '$1')); // 'abc'
```
* 单词去重
```js
const str = 'Hello my my name is is hdy~';
const reg = /(\b\w+\b)\s+\1+/g;
console.log(str.replace(reg, '$1')); // Hello my name is hdy~
```
:::
::::
## 主动执行方法
::: warning 规则
* 如果一个表达式同时指定了 sticky 和 global，其将会忽略 global 标志。
* sticky不会更改lastIndex，除非匹配结束，重置lastIndex
:::
### exec
::: tip
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
```js{6}
const str = 'aaple';
const reg2 = /a/g;

console.log(reg2.exec(str)); // [ 'a', index: 0, input: 'aaple', groups: undefined ]
console.log(reg2.exec(str)); // [ 'a', index: 1, input: 'aaple', groups: undefined ]
console.log(reg2.exec(str)); // null  lastIndex重置为0
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
::: tip
* 作用：检测字符串是否由匹配项
* 调用：reg.test(str)
* 入参：String
* 返回：Boolean
:::
:::: tabs
::: tab label=使用
```js
const reg = /apple/;
const str = 'I like apple';
console.log(reg.test(str)); // true
```
:::
::: tab label=与search/indexOf比较
* search返回Number，test返回Boolean，indexOf可以指定开始下标
* test在全局或粘性匹配模式会使用lastIndex可进行遍历匹配

```js
const str = '1234';
const reg = /1/;

console.log(str.search(reg)); // 0
console.log(reg.test(str)); // true
```
:::
::: tab label=粘性y
* 粘性y每次匹配必须在lastIndex处匹配到，否则就算失败，lastIndex重置0。
```js
const str = '121111';
const reg = /1/y;

console.log(reg.test(str)); // true
console.log(reg.lastIndex); // 1

console.log(reg.test(str)); // false
console.log(reg.lastIndex); // 0

console.log(reg.test(str)); // true
console.log(reg.lastIndex); // 1
```
:::
::: tab label=全局模式g
* 全局模式也是会从lastIndex开始匹配，会向下搜索，搜索完毕为null会重置lastIndex
```js{7}
const reg = /1/g;
const str = '1211';

console.log(reg.test(str)); // true
console.log(reg.test(str)); // true
console.log(reg.test(str)); // true
console.log(reg.test(str)); // false lastIndex被重置
console.log(reg.test(str)); // true
```
:::
::::
### toString
::: tip
* 作用：以字符串形式返回正则表达式
* 调用：reg.toString()
* 返回：String
:::
```js
const reg = /abc/gmi;
console.log(reg.toString()); // '/abc/gmi'
```
### 例子
* 一些常见的正则用法
:::: tabs
::: tab label=匹配require路径
* commonjs匹配依赖文件路径的简单写法
* str文件依赖了【./a】【./b】文件
```js{8}
const str = `
console.log('main run');
const a = require('./a');
const b = require('./b');
a.run();
b.run();
`
const reg = /(?<=require\(['"])[^['"]+(?=['"]\))/g;

const requireArr = [];
while((ans = reg.exec(str)) != null) {
    requireArr.push(ans[0]);
}
console.log(requireArr); //[ './a', './b' ]
```
:::
::::
## 属性
### lastIndex
::: tip
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
### source
::: tip
* 作用：拿到正则的pattern（不包括falgs）
* 使用：reg.source
* 值：String
:::
```js
const reg = /aaa/gim;
console.log(reg.source); // aaa
```
### dotAll
::: tip
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
::: tip
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
::: tip
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
### multiline
::: tip
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
### sticky
::: tip
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
::: tip
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
### hasIndices
::: tip
* **tip：有版本限制**
* 作用：查看是否使用了标识符【d】
* 调用：reg.hasIndices
* 值：Boolean

|环境|支持版本|
|---|---|
|chrome|90|
|node|no|
:::
## Symbol方法
::: warning
* 被Symbol标识出来的方法，基本都被String.prototype.XXX **内部调用**
* 如：**RegExp.prototype[Symbol.match]被**String.prototype.match()**内部调用**
:::
### match
::: tip
* tip：该方法是被String.prototype.match()内部调用
* 调用：str1.match(reg)
* 入参：RegExp
* 返回：Array | Object
* tip：入参不是RegExp会被隐式 new RegExp(reg)
* tip：返回值类型取决于有没有加 g
:::
```js{5,8}
let a = 'hello world!';
let b = /l/g;
let c = /l/;

// 入参不是正则：String.prototype.match自身处理
console.log(a.match(b)); // ['l', 'l', 'l']

// 入参是正则：String.prototype.match调用RegExp.prototype[Symbol.match]方法
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
```js{6,7}
const reg = /1/g;
const str = '123';

console.log(str.match(reg)); // [ '1' ]

reg[Symbol.match] = (str) => ['嘿', '嘿嘿', '嘿嘿嘿']
console.log(str.match(reg)); // ['嘿', '嘿嘿', '嘿嘿嘿']
```
### matchAll
::: tip
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
::: tip
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
```js{2}
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
::: tab label=全局正则
```js{2}
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
```js{2}
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
:::
::: tab label=引用匹配项
> replace可以使用前面已经匹配到的项，用$表示
* 字符串去除连续重复字符
```js
const str = 'aabbccc';
const reg = /(\w)\1+/g;
console.log(str.match(reg)); // [ 'aa', 'bb', 'ccc' ]
console.log(str.replace(reg, '$1')); // 'abc'
```
* 单词去除连续重复
```js
const str = 'Hello my my name is is hdy~';
const reg = /(\b\w+\b)\s+\1+/g;
console.log(str.replace(reg, '$1')); // Hello my name is hdy~
```
:::
::::
### search
::: tip
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
::: tip
* tip：String.prototype.split()内部调用
* 调用：str1.split(str2|reg[, len])
* 入参：String | RegExp[, Number]
* 返回：Array，用str2/reg分割得来的数组，可限制数组长度
* tip：第二个参数是限制了数组的长度
* tip：第一个参数可以是正则
:::
* **参数1是正则时，String.prototype.split()内部调用此方法**
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