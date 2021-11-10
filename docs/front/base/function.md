# function

## bind
::: warning
bind/call/apply区别：
* bind将指定函数绑定执行的this，**返回新的函数**
* call和apply将调用函数绑定到指定this**直接执行**
* call和apply区别：传参不同，call将参数分开：fn.call(obj, ...args)
:::
::: tip bind
* 作用：讲一个函数绑定this，返回新的函数
* 调用：fn2 = fn1.bind(obj[, ...args])
* 入参：Object[, any]
* 返回：Function
* tip：不用考虑函数内部的constructor函数，因为构造函数走的是内部的constructor方法
:::
::::tabs
::: tab label=原生绑定
```js
const obj = {
    name: 'hdy',
    age: 19
}
function fn1(book, web) {
    console.log(this.name);
    console.log(book);
    console.log(web);
}
const book = 'js红宝书';
const web = 'MDN';

const fn2 = fn1.bind(obj, book);
fn2(web); // hdy js红宝书 MDN
```
:::
::: tab label=手写原生bind
* 核心思想：箭头函数的this是外层的this，外层function的this是调用者的this，调用者就是需要被绑定的函数
```js
Function.prototype.newBind = function(obj, ...args1) {
    return (...args2) => this.call(obj, ...args1, ...args2);
}
```
:::
::: tab label=手写函数bind
```js
function bind(fn1, obj, ...args1) {
    return (...args2) => this.call(obj, ...args1, ...args2);
}
```
:::
:::tab label=测试
* 定义变量
```js
const obj = {
    name: 'hdy',
    age: 19
}
function fn1(book, web) {
    console.log(this.name);
    console.log(book);
    console.log(web);
}
```
* 原生
```js
const fn2 = fn1.bind(obj, '小张');
const p3 = fn2('小李');

console.log(p3);
/**
 *  hdy
 *  小张
 *  小李
 *  undefined
 */
```
* 手写原生
```js
Function.prototype.newBind = function(obj, ...args) {
    return (...args2) => this.call(obj, ...args, ...args2);
}

const fn2 = fn1.newBind(obj, '小张');
const p3 = fn2('小李');

console.log(p3);
/**
 *  hdy
 *  小张
 *  小李
 *  undefined
 */
```
* 手写函数形式
```js
function bind(fn1, obj, ...args1) {
    return (...args2) => fn1.call(obj, ...args1, ...args2);
}

const fn2 = bind(fn1, obj, '小张');
const p3 = fn2('小李');

console.log(p3);
```
:::
::::
## call
::: tip call
* 作用：将函数绑定this执行
* 调用：fn.call(obj[, ...args])
* 入参：Object[, any]
* 返回：any
:::
```js
const obj = {
    name: '张三',
    age: 18
}
function fn() {
    console.log(this);
    console.log(this.age);
}

var age = 10

fn(); // node环境: undefined  10
fn.call(obj); // 18
```
## apply