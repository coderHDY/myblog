---
title: Number
date: 2021-11-26
---

## 构造器
::: warning 注意
* 可以用Nunber()/字面量或者+的形式创造
* new Number()制作出来的是对象，在`堆内存区`，所以不属于常用的栈内存的数字类型
* 一般使用字面量
:::
* 区别
```js
const n1 = new Number('1');
console.log(n1 === 1); // false
console.log(typeof n1); // object
```
```js
const n2 = Number('2');
console.log(n2 === 2); // true
console.log(typeof n2); // number
```
```js
const n3 = Number('3');
console.log(n3 === 3); // true
console.log(typeof n3); // number
```
```js
console.log(+'1' === 1); //true
```
* 无法被转换成数字的变成NaN
```js
console.log(Number('A')); // NaN
```
## 属性
### EPSILON
::: tip
* 表示：2^-52，js可表示的最小正浮点数
* 常用作：浮点计算相等，弥补二进制0.1不能存储带来的BUG
:::
* 问题：JS不能精确表示小数计算
```js
const n1 = 0.1 + 0.2;
console.log(n1 === 0.3); // false
```
* 原因：底层存储小数是用二进制存储的，无法精确存储0.1
* 解决：两个数相减小于JS表示的最小浮点数就默认他们相等
```js
const n1 = 0.1 + 0.2
console.log(0.3 - n1 < Number.EPSILON); // true
console.log(n1 - 0.3 < Number.EPSILON); // true

// 利用绝对值
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
```
### MAX\_SAFE\_INTEGER
::: warning 双精度浮点数
* JS采用的双精度浮点数标准能表示的安全整数范围是 -(2^53 - 1) ~ (2^53 - 1) (包含边界)范围之间
* 做计算的值应在这个安全范围之内
:::
* 超过安全范围无法保证计算的准确性
```js
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true
```
::: tip MAX_SAFE_INTEGER
* 表示：最大安全整数，(2^53)-1
* 作用：保证计算准确的安全范围
* tip：不是最大数
:::
```js
console.log(Number.MAX_SAFE_INTEGER < Number.MAX_VALUE); // true
```
### MIN\_SAFE\_INTEGER
::: tip MIN_SAFE_INTEGER
* 表示：最小的安全整数，
* 作用：保证计算准确的安全范围
:::


### MAX_VALUE
::: tip
* 表示：JS能表示的最大数，接近于 1.79E+308
* 作用：做算法的时候可以用来当做最大值边界，大于这个数就是无限大'infinity'
:::
```js
console.log(Number.MAX_VALUE > Number.MAX_SAFE_INTEGER); // true
```

### MIN_VALUE
::: tip
* 表示：JS能表示**最接近0的值**，比Number.EPSILON小
:::
```js
console.log(Number.MIN_VALUE < Number.EPSILON); // true
console.log(Number.MIN_VALUE < Math.abs(0.1 + 0.2 - 0.3)); // true

```
* 总结
```js
// Number.MIN_VALUE < Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
```
### NEGATIVE_INFINITY
::: warning 无穷大
* 无穷大正负关系一样的话不比较大小，都是相等
:::
::: tip NEGATIVE_INFINITY
* 表示：负无穷大
* tip：无穷大之间就不分大小
:::
```js
console.log(Number.NEGATIVE_INFINITY === Number.NEGATIVE_INFINITY -1); // true
console.log(Number.NEGATIVE_INFINITY === -Infinity); // true
```
### POSITIVE_INFINITY
::: tip
* 表示：正无穷大，与**全局的Infinity**值相等
:::
```js
console.log(Number.POSITIVE_INFINITY === Infinity); // true
```
### NaN
::: tip
* 表示：Not a Number
* tip：也可以直接用全局的NaN
:::
```js
console.log(Object.is(NaN, Number.NaN)); // true
console.log(NaN == Number.NaN); // false
console.log(NaN === Number.NaN); // false
```

## 静态方法
### isFinite
::: tip
* 作用：判断有穷数
* 调用：Number.isFinite(num)
* 调用：isFinite(num)
* 入参：Number
* 返回：Boolean
:::
```js {6}
console.log(Number.isFinite(Number.MAX_VALUE)); // true
console.log(Number.isFinite(3)); // true

console.log(Number.isFinite(Infinity)); // false

console.log(isFinite(Infinity)); // false
```
### isInteger
::: tip
* 作用：判断是否是整数
* 调用：Number.isInteger(num)
* 入参：Number
* 返回：Boolean
:::
```js
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(1.1)); // false
console.log(Number.isInteger('1')); // false
```
### isNaN
::: tip
* 作用：判断是否为NaN
* 调用：Number.isNaN(num)
* 入参：any
* 返回：Boolean
:::
::: warning 和全局的isNaN比较
* 全局的isNaN会先 Numver(arg)转换成数字再比较 Number.isNaN(arg)
* Number.isNaN严格比较必须是NaN
:::
```js
const a = NaN;
console.log(Number.isNaN(a)); // true
console.log(Number.isNaN('我问')); //false
```
*  全局的isNaN()不准确
```js
console.log(isNaN('我')); // true

// 相当于
const arg = Number('我'); // NaN
const ans = Number.isNaN(arg); // true
```
### isSafeInteger
::: tip
* 作用：判断一个数是否在安全范围内(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
* 调用：Number.isSafeInteger(num)
* 入参：Number
* 返回：Boolean
:::
```js
console.log(Number.isSafeInteger(1.111111)); // true

// 边界
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true
```
### parseFloat
::: tip
* 作用：将**只有浮点数**的字符串转成数字
* 调用：parseFloat(str)/Number.parseFloat(str)
* 入参：String
* 返回：Number/NaN
* tip：**必须以数字开头，否则解析成NaN**
:::
```js
const str = '1.1'
console.log(parseFloat(str)); // 1.1
```
```js
const str = '1，一'
console.log(parseFloat(str)); // 1
```
```js
const str = '二1.1'
console.log(parseFloat(str)); // NaN
```
### parseInt
::: tip
* 作用：将字符串的整数**以指定的进制**解析出来
* 调用：parseInt(num, radix)/Number.parseInt(num, radix)
* 入参：Number[, Number]
* 返回：Number/NaN
* tip：**必须以数字开头，否则解析成NaN**
* tip：第二个数表示进制，默认10，范围(2~36)
:::
```js{6-8}
const n = '123';
console.log(parseInt(n, 10)); // 123

console.log(parseInt(n, 4)); // (4 * 4 * 1) + (4 * 2) +3 = 27

// 3进制里面3是非法数，所以不计算，当做非数字不认识处理
console.log(parseInt(n, 3)); // (3 * 1) + 2 = 5
console.log(parseInt('321', 3)); // NaN
```
```js
const n = '12三';
console.log(parseInt(n)); // 12
```
```js
const n = '二23';
console.log(parseInt(n)); // NaN
```
## 原型方法
### toExponential
::: tip
* 作用：将数字返回成指数表达形式，**以字符串返回**
* 调用：num.toExponential(bit)
* 入参：Number(指定保留几位小数，只有一位整数)
* 返回：String
:::
```js
const n = 123.3333
console.log(n.toExponential()); // 1.233333e+2
console.log(n.toExponential(2)); // 1.23e+2
console.log(n.toExponential(10)); // 1.2333330000e+2
```
### toFixed
::: tip
* 作用：将数字格式化成**有指定小数位数的字符串**
* 调用：num.fixed(num)
* 入参：Number(小数位数)
* 返回：String
:::
```js
const n = 12.22222;
console.log(n.toFixed(3)); // '12.222'
console.log(n.toFixed(7)); // '12.222200'
```
### toPrecision
::: tip
* 作用：将数字转换成指定位数的字符串（整数 + 小数）
* 调用：num.toPrecision(precision)
* 入参：Number(整数 + 小数总位数)
* 返回：String
* tip：toFixed传入小数位数，toPrecision传入整数+小数位数
:::
```js
const num = 1.11
console.log(num.toPrecision(2)); // 1.1
console.log(num.toPrecision(4)); // 1.110
console.log(num.toFixed(4));     // 1.1100
```

### toString
::: tip
* 作用：将数字转换成**指定进制的字符串**
* 调用：num.toString([radix])
* [Number]
* 返回：String
* tip：进制可传入范围（2，36）
:::
```js
// JS不能精确存储小数问题
const num = 1.3;
console.log(num.toString(4)); // 1.10303030303030303030303031
```
### toLocaleString
::: tip
* 作用：将数字转化成字符串
* 调用：num.toLocaleString(locales[, options])
* 入参：String(语言代码或编号系统)[, Object]
* 返回：String
:::
:::: tabs
::: tab label=使用
* 千分位分隔符
```js
const num = 123456789;
console.log(num.toLocaleString('en-US')); // 123,456,789
```
* 美元
```js
const num = 123456789;
console.log(num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
})); // $123,456,789.00
```
* 汉字
```js
const num = 123456789;
console.log(num.toLocaleString('zh-Hans-CN-u-nu-hanidec', {
    useGrouping: false
})); // 一二三四五六七八九
```
* 人民币
```js
const num = 123456789;
console.log(num.toLocaleString('zh-CN', {
    style: 'currency',
    currency: 'CNY'
})); // ¥123,456,789.00
```
:::
::::