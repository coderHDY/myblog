---
title: 《js设计模式》
date: 2021-12-8
categories: 
 - 读书笔记
---
## 第一章 构造对象
:::: tabs
::: tab label=重点
* 函数链式调用：函数返回this
* 定义多个相似功能函数避免全局污染：封装到对象
* 类内的纯函数如何避免重复定义：定义到原型上
:::
::: tab label=addMethod
* 为函数添加方法的函数
* 期望
```js
function a() {}
a.addMethod('go', () => console.log('走你~'));
a.go(); // 走你~
```
* 实现
```js
Function.prototype.addMethod = function(name, fn) {
    this[name] = fn;
}
```
:::
::: tab label=链式添加
* 期望
```js{2-3}
function a() {}
a.addMethod('eat',() => console.log('吃~'))
    .addMethod('drink',() => console.log('喝~'))

a.eat();   // 吃~
a.drink(); // 喝~
```
* 实现
```js
Function.prototype.addMethod = function (name, fn) {
    this[name] = fn;
    return this;
}
```
:::
::: tab label=链式调用
* 传入的函数也返回this，可以达到链式调用
```js{3,9,12}
Function.prototype.addMethod = function(name, fn) {
    this[name] = fn;
    return this;
}

function a() {}
a.addMethod('go', function() {
    console.log('走你~');
    return this;
}).addMethod('jump', function() {
    console.log('飞起~');
    return this;
})

a.go().jump();
```
:::
::: tab label=添加原型方法
* 期望：可以为实体本身和实体原型添加方法
```js
class A {}
const a1 = new A();
const a2 = new A();
a1.addMethod('go', () => console.log('走~'), true);
a1.addMethod('eat', () => console.log('吃~'), false);

a2.go(); // 走~
// a2.eat(); // error
```
* 实现
* tip：new 出来的对象的原型链只能找到Object.prototype，不能找到function的prototype
```js
Object.prototype.addMethod = function(name, fn, isProto = false) {
    if (isProto) {
        this.__proto__[name] = fn;
    } else {
        this[name] = fn;
    }
    return this
}
```
:::
::::