---
title: 变量声明
date: 2021-11-02
---

## var
1. var有变量提升
2. var的变量提升只是提升声明，还是要等执行到对应行才赋值
3. var不会创建块级作用域
4. **var声明的全局变量会挂载到window上去**
:::: tabs
::: tab label=1
* 变量提升
```js
console.log(a); // undefined
console.log(b); // 报错

var a;
```
:::
::: tab label=2
* 提升的只是声明，有这个东西
* 执行到对应行才会赋值
```js
console.log(a); // undefined
var a = 1;
console.log(a); // 1
```
:::
::: tab label=3
* 无块级作用域
```js
console.log(a); // undefined 说明变量a的声明被提到这里来了

if (true) {
    console.log(a); // undefined
    let a = 2;
    console.log(a); // 2
}

console.log(a); // 2 说明if 的块级作用域没有包住a
```
* 经典问题
```js
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
      var name = 'Jack'; // var 无块级作用域，会提升到本函数顶部，所以本函数活动对象访问得到 name，外层if拿的是 undefined
      console.log('Goodbye ' + name);
    } else {
      console.log('Hello ' + name);
    }
})();
```
:::
::: tab label=4
* var的变量声明会挂载到window上面去
```js
const name1 = '张三';
var name2 = '李四';

// 浏览器环境
console.log(window.name1); // undefined
console.log(window.name2); // 李四
```
:::
::: tab label=经典问题
* var无块级作用域的经典问题
```js
var e = [{}, {}, {}];

for (var i = 0; i < e.length; i++) {

    // 里面没有块级作用域，所以一直都是用的同一个i
    e[i].fn = function() {
        console.log(i);
    }
}

e.forEach(_ => _.fn()) // 3 3 3
```
* 上面的代码相当于
```js
var e = [{}, {}, {}];
var i;

// for循环展开
{
    var i = 0; // var 并没有什么用，因为var不存在块级作用域
    e[i].fn = function(){ console.log(i) };
}
{
    var i = 1;
    e[i].fn = function(){ console.log(i) };
}
{
    var i = 2;
    e[i].fn = function(){ console.log(i) };
}

i = 3; // for循环结束

// 每一个都说要输出i，但一直都只有全局的一个i
e.forEach( _ => _.fn()); // 3 3 3
```
:::
::: tab label=解决方法1
* 利用函数作用域
> var的世界里，没有块级作用域，只有函数作用域和全局作用域，那么就可以借用函数作用域来充当块级作用域
```js
var e = [{}, {}, {}];
for (var i = 0; i < e.length; i++) {

    /**
     * 立即执行函数（IIFE）的函数作用域保存了当前的i值存到变量x里面
     * 返回的函数由于闭包原理，可以访问到x
     */
    e[i].fn = (function (x) {
        return function () {
            console.log(x);
        }
    })(i);
}

e.forEach(_ => _.fn()); // 0 1 2
```
:::
::: tab label=解决方法2
* var关键字有缺陷，所以引入了let和const，有块级作用域
```js
var e = [{}, {}, {}];

for (let i = 0; i< e.length; i++) {
    e[i].fn = function() {
        console.log(i);
    }
}

e.forEach(_ => _.fn()); // 0 1 2
```
:::
::::

## 缺陷解决
* 由于var关键字的缺陷，引入了let/const关键字
* 解var无决块级作用域问题，let/const 有
* 解决变量提升问题，设置了一个`变量死区`
::: tip 变量死区
* var 提升了声明，且可以访问到，只不过到对应行才进行赋值
* let 也提升了变量声明，但是不让访问，放在变量死区里面
```js
/**
 * 报错：ReferenceError: Cannot access 'a' before initialization
 * 说明知道有这个变量了，但是还不让访问
 */
console.log(a);
let a = 0;
```
:::
## let
:::: tabs
::: tab label=变量可更改
```js
let a = 1;
a = 2;
console.log(a); // 2
```
:::
::: tab label=有块级作用域
```js
let a = 1;

if (true) {
    let a = 2;
    console.log(a); // 2
}

console.log(a); // 1
```
:::
::: tab label=不可重复声明
```js
let a = 1;
let a = 2; // 报错
```
:::
::: tab label=作用域链
* 本块级作用域内找不到，就会向上级作用域链找
```js
let a = 1;
if (true) {
    
    // 本块内找不到，去作用域链找
    console.log(a); // 1
}
```
* 变量死区有就不会去作用域链找
```js
let a = 1;

if (true) {

    // 报错，本块级作用域有变量提升，且还在变量死区
    console.log(a);
    let a = 2;
}
```
:::
::::

## const
* 规则与let基本一致
* 特点：设置后不可更改
```js
const a = 1;
a = 2; // 报错
```

## 其他声明
:::: tabs
::: tab label=function
* function 也是声明了一个变量
```js
funciton a() {}
let a = 1; // 报错，说明已存在这个变量
```
:::
::: tab label=class
* class 其实就是function的一个封装，声明的也是一个变量
```js
class A {}
let A = 1; // 报错
```
:::
::: tab label=import
* import也是一个声明
```js
import { A } from './a.js'
let A = 1; // 报错
```
:::
::::