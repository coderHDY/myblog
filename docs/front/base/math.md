---
title: Math
date: 2021-12-09
---
::: warning
* Math所有的属性和方法都是静态的
:::
## 计算操作
### abs
::: tip
* 作用：绝对值
* 调用：Math.abs(num)
* 入参：Number | any
* 返回：Number
::: 
```js
console.log(Math.abs(1));         // 1
console.log(Math.abs(-1));        // 1
console.log(Math.abs('-1'));      // 1
console.log(Math.abs('a'));       // NaN
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs(null));      // 0
```
### max
::: tip
* 作用：求入参的最大值
* 调用：Math.max(num[, num, num...])
* 入参：Number[, Number...]
* 返回：Number
:::
```js
console.log(Math.max(2, 3, 1, 20));  // 20
console.log(Math.max(8, 200, 10, 3.3));  // 200
console.log(Math.max(-16, -18, -2)); // -2
```
### min
::: tip
* 作用：求入参的最小值
* 调用：Math.min(num[, num, num...])
* 入参：Number[, Number...]
* 返回：Number
:::
```js
console.log(Math.min(2, 3, 1, 20));  // 1
console.log(Math.min(8, 200, 10, 3.3));  // 3.3
console.log(Math.min(-16, -18, -2)); // -18
```
### ceil
::: tip
* 作用：向上取整
* 调用：Math.ceil(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.ceil(0.1)); // 1
console.log(Math.ceil(1.9)); // 2
console.log(Math.ceil(-1.9)); // -1
```
### floor
::: tip
* 作用：向下取整
* 调用：Math.floor(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.floor(0.1)); // 0
console.log(Math.floor(1.9)); // 1
console.log(Math.floor(-1.9)); // -2
```
### round
::: tip
* 作用：四舍五入
* 调用：Math.round(num1)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.round(2.4));  // 2
console.log(Math.round(2.5));  // 3
```
### random
::: tip
* 作用：求 (0-1)之间的随机数
* 调用：Math.random()
* 返回：Number
* tip：**包括0不包括1**
:::
:::: tabs
::: tab label=使用
```js
console.log(Math.random());  // 0.5006440969893007
console.log(Math.random());  // 0.20767500449106313
```
:::
::: tab label=指定范围
* 接收一个范围，产生在这个范围的随机数
> 思路：拿到（0-1）的随机数，**乘以范围**，再 **加最小数**表示起点
```js
function random(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

// 0-9
for (let i = 0; i < 30; i++) {
    console.log(random(0, 10)); // 只有0-9
}
```
:::
::: tab label=需要包括最大数
* 默认Math.random()只能包括0不包括1，需要做出包括最大数的范围随机数
> 思路：最大数+1即可
```js
function random(min, max) {
    max = max + 1;
    return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < 10; i++) {
    console.log(random(5, 8));
}
```
:::
::::
### pow
::: tip
* 作用：求 num1 的 num2 次幂
* 调用：Math.pow(num1， num2)
* 入参：Number, Number
* 返回：Number
:::
```js
console.log(Math.pow(2, 3));  // 8
console.log(Math.pow(8, 2));  // 64
console.log(Math.pow(-2, 3)); // -8
console.log(Math.pow(-2, 2)); // 4
console.log(Math.pow(-2, -3)); // -0.125
```
### sqrt
::: tip
* 作用：求平方根
* 调用：Math.sqrt(num1)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(-9)); // NaN
```
### cbrt
::: tip
* 作用：立方根
* 调用：Math.cbrt(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.cbrt(0)); // 0
console.log(Math.cbrt(1)); // 1
console.log(Math.cbrt(27)); // 3
```
### exp
::: tip
* 作用：欧拉常数【e】的【x】次方
* 调用：Math.exp(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.exp(0));  // 1
console.log(Math.exp(1));  // 2.718281828459045
console.log(Math.exp(2));  // 7.38905609893065
```
### expm1
::: tip
* 作用：【e】的【x】次方【-1】
* 调用：Math.expm1(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.expm1(0));  // 0
console.log(Math.expm1(1));  // 1.718281828459045
console.log(Math.expm1(2));  // 6.38905609893065
```
### sign
::: tip
* 作用：返回数字的符号【+】【-】【0】
* 调用：Math.sign(num1)
* 入参：Number
* 返回：Number (1, -1, 0, -0, NaN)
:::
```js
console.log(Math.sign(2));    // 1
console.log(Math.sign(-2));   // -1
console.log(Math.sign(0));    // 0
console.log(Math.sign(-0));   // -0
console.log(Math.sign('3'));  // 1
console.log(Math.sign('-3')); // -1
console.log(Math.sign('a'));  // NaN
```
### hypot
::: tip
* 作用：所有参数【平方和】【的平方根】
* 调用：Math.hypot(num,[ num...])
* 入参：Number[, Number...]
* 返回：Number
:::
```js
// 勾三股四弦五
console.log(Math.hypot(3, 4)); // 5
```
### imul
::: tip
* 作用：两个整数相乘更快
* 调用：Math.imul(num, num)
* 入参：Number, Number
* 返回：Number
* tip：原理是转换成32位后做32位的乘法
:::
:::: tabs
::: tab label=使用
```js
console.log(Math.imul(1, 2)); // 
```
:::
::: tab label=更快证明
```js{5}
const start = Date.now();
for(let i = 0; i < 10000000; i++) {

    // 普通相乘
    let _ = i * i;
}
const end = Date.now();
console.log((end - start) / 1000); // 0.011
```
```js{5}
const start = Date.now();
for(let i = 0; i < 10000000; i++) {

    // 更快相乘
    let _ = Math.imul(i, i);
}
const end = Date.now();
console.log((end - start) / 1000); // 0.009
```
:::
::::
### clz32
::: tip
* 作用：数字在转换成 32 无符号整形数字的二进制形式后, 开头的 0 的个数
* 调用：Math.clz32(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.clz32(1)); // 31
console.log(Math.clz32(18)); // 27
console.log(Math.clz32(-5)); // 0
```
## 小数/对数
### trunc
::: tip
* 作用：去掉小数部分
* 调用：Math.trunc(num1)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.trunc(2.1)); // 2
console.log(Math.trunc(2.9)); // 2
```
### fround
::: tip
* 作用：64位双精度浮点数转化为32位单精度浮点数
* 调用：Math.fround(num)
* 入参：Number
* 返回：Number
* tip：64位双精度浮点数和32位单精度浮点数作比较会产生混乱，可以采用此方法转换
:::
```js
console.log(Math.fround(1));               // 1
console.log(Math.fround(1) === 1);         // true
console.log(Math.fround(1.33));            // 1.3300000429153442
console.log(Math.fround(1.33) === 1.33);   // false
console.log(Math.fround(1.337));           // 1.3370000123977661
console.log(Math.fround(1.337) === 1.337); // false
```
### log
::: tip
* 作用：求对数
* 调用：Math.log(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.log(0));  // -Infinity
console.log(Math.log(1));  // 0
console.log(Math.log(20)); // 2.995732273553991
```
* 求logxY：以x为底Y的对数
```js
function log(x, Y) {
    return Math.log(Y) / Math.log(x);
}
```
### log10
::: tip
* 作用：求以10为底的对数。求10的几次方等于该数
* 调用：Math.log10(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.log10(0));  // -Infinity
console.log(Math.log10(1));  // 0
console.log(Math.log10(20)); // 1.3010299956639813
```
### log1p
::: tip
* 作用：数字 + 1 后求log的自然对数。相当于Math.log(num + 1)
* 调用：Math.log1p(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.log(2));   // 0.6931471805599453
console.log(Math.log1p(1)); // 0.6931471805599453
```
### log2
::: tip
* 作用：求以2为底的对数。求2的几次方等于该数
* 调用：Math.log2(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.log2(2));  // 1
console.log(Math.log2(8));  // 3
console.log(Math.log2(16)); // 4
```
## 弧度计算
### sin
::: tip
* 作用：求正弦值
* 调用：Math.sin(num1)
* 入参：Number
* 返回：Number (单位：弧度)
:::
```js
console.log(Math.sin(0));    // 0
console.log(Math.sin(1));    // 0.8414709848078965
```
### cos
::: tip
* 作用：取余弦值
* 调用：Math.cos(num)
* 入参：Number
* 返回：Number
:::
```js
// 勾三股四弦五
console.log(Math.cos(3/5)); // 0.8253356149096783
console.log(Math.cos(0));   // 1
```
### tan
::: tip
* 作用：求正切
* 调用：Math.tan(num1)
* 入参：Number
* 返回：Number (单位：弧度)
:::
```js
console.log(Math.tan(2)); // -2.185039863261519
console.log(Math.tan(4)); // 1.1578212823495777
```
### asin
::: tip
* 作用：反正弦(单位为弧度)
* 调用：Math.asin(num)
* 入参：Number ( -1 ~ 1 )
* 返回：Number
:::
```js
console.log(Math.asin(-1)); // -1.5707963267948966
console.log(Math.asin(0));  // 0
console.log(Math.asin(1));  // 1.5707963267948966
```
### acos
::: tip
* 作用：求反余弦值。以 -1 到 1 的一个数为参数，返回一个 0 到 pi （弧度）的数值
* 调用：Math.acos(num)
* 入参：Number (-1 ~ 1)
* 返回：Number
:::
```js
console.log(Math.acos(-2)); // NaN
console.log(Math.acos(-1)); // 3.141592653589793
console.log(Math.acos(0));  //  1.5707963267948966
console.log(Math.acos(1));  // 0
console.log(Math.acos(2));  // NaN
```
### atan
::: tip
* 作用：反正切
* 调用：Math.atan(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.atan(0)); // 0
console.log(Math.atan(1)); // 0.7853981633974483
```
### sinh
::: tip
* 作用：求双曲正弦值
* 调用：Math.sinh(num1)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.sinh(0));   // 0
console.log(Math.sinh('1')); // 1.1752011936438014
console.log(Math.sinh('a')); // NaN
```
### cosh
::: tip
* 作用：双曲余弦值
* 调用：Math.cosh(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.cosh(-1)); // 1.5430806348152437
console.log(Math.cosh(0));  // 1
console.log(Math.cosh(1));  // 1.5430806348152437
```
### tanh
::: tip
* 作用：求双曲正切
* 调用：Math.tanh(num1)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.tanh(2)); // 0.9640275800758169
```
### asinh
::: tip
* 作用：反双曲正弦值
* 调用：Math.asinh(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.asinh(1));  // 0.881373587019543
console.log(Math.asinh(0));  // 0
```
### acosh
::: tip
* 作用：返回一个数的反双曲余弦值
* 调用：Math.acosh(num)
* 入参：Number (num >= 1)
* 返回：Number
* tip：入参小于 1 则返回 NaN
:::
```js
console.log(Math.acosh(0));  // NaN
console.log(Math.acosh(1));  // 0
console.log(Math.acosh(2));  // 1.3169578969248166
```
### atanh
::: tip
* 作用：反双曲正切
* 调用：Math.atanh(num)
* 入参：Number
* 返回：Number
:::
```js
console.log(Math.atanh(0)); // 0
console.log(Math.atanh(1)); // Infinity
console.log(Math.atanh(-1)); // -Infinity
```
### atan2
::: tip
* 作用：从原点(0,0)到(num1, num2)点的线段与x轴正方向之间的平面角度(弧度值)
* 调用：Math.atan2(num1, num2)
* 入参：Number, Number
* 返回：Number
:::
```js
console.log(Math.atan2(90, 15)); // 1.4056476493802699
console.log(Math.atan2(15, 90)); // 0.16514867741462683
```
## 属性
### E
::: tip
* 作用：自然对数底数，欧拉常数【e】
* 值：约等于 2.718
:::
```js
console.log(Math.E); // 2.718281828459045
```
### LN10
::: tip
* 作用：10的自然对数
* 值：约为 2.302
:::
```JS
console.log(Math.LN10); // 2.302585092994046
```
### LN2
::: tip
* 作用：2的自然对数
* 值：约为 0.693
:::
```JS
console.log(Math.LN2); // 0.6931471805599453
```
### LOG10E
::: tip
* 作用：以 10 为底数，e 的对数
* 值：约为 0.434
:::
```JS
console.log(Math.LOG10E); // 0.4342944819032518
```
### LOG2E
::: tip
* 作用：以2为底数，E为对数
* 值：约为  1.442
:::
```js
console.log(Math.LOG2E); // 1.4426950408889634
```
### PI
::: tip
* 作用：圆周率
* 值：约为3.14159
:::
```js
console.log(Math.PI); // 3.141592653589793
```
### SQRT1_2
::: tip
* 作用：1/2的平方根
* 值：约为 0.707
:::
```js
console.log(Math.SQRT1_2); // 0.7071067811865476
```
### SQRT2
::: tip
* 作用：2的平方根
* 值：约为 1.414
:::
```js
console.log(Math.SQRT2); // 1.4142135623730951
```
