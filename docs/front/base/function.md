# function

## bind
::: warning
bind/call/apply区别：
* bind将指定函数绑定执行的this，**返回新的函数**
* call和apply将调用函数绑定到指定this**直接执行**
* call和apply区别：传参不同，call将参数分开：fn.call(obj, ...args)
:::
::: tip bind
* 作用：将一个函数绑定this，返回新的函数
* 调用：fn2 = fn1.bind(obj[, ...args])
* 入参：Object[, any]
* 返回：Function
* tip：需要分辨是否是new式调用，因为new式调用是走的[另一套流程](./object.html#原型链)
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
Function.prototype.newBind = function (obj, ...args1) {
    const _self = this;

    const fn2 =  function (...args2) {
        if (this instanceof _self) {

            // 类调用：类调用的时候默认就创造出来了一个空对象并绑定上了this
            return _self.call(this, ...args1, ...args2);
        } else {

            // 函数式调用：函数式调用就可以用bind上传入的obj作为this
            return _self.call(obj, ...args1, ...args2);
        }
    }

    fn2.prototype = this.prototype;
    return fn2;
}
```
:::
:::tab label=测试
* 定义变量
```js
const obj = {
    name: 'hdy',
    age: 18
}

function fn1(age) {
    console.log(this.name);
    console.log(age);
    this.book = '蝴蝶书';
    return "对";
}
```
* 原生
```js
const fn2 = fn1.bind(obj);

// 函数调用
const ans = fn2(11);

// 类调用
const n1 = new fn2(11);

console.log(ans);
console.log(n1);
/**
 *  hdy
 *  11
 *  undefined
 *  11
 *  对
 *  fn1: {book: '蝴蝶书'}
 */
```
* 手写原生
```js

Function.prototype.newBind = function (obj, ...args1) {
    const _self = this;

    const fn2 =  function (...args2) {
        if (this instanceof _self) {

            // 类调用：类调用的时候默认就创造出来了一个空对象并绑定上了this
            return _self.call(this, ...args1, ...args2);
        } else {

            // 函数式调用：函数式调用就可以用bind上传入的obj作为this
            return _self.call(obj, ...args1, ...args2);
        }
    }

    fn2.prototype = this.prototype;
    return fn2;
}

const fn2 = fn1.newBind(obj);

// 函数调用
const ans = fn2(11);

// 类调用
const n1 = new fn2(11);

console.log(ans);
console.log(n1);
/**
 *  hdy
 *  11
 *  undefined
 *  11
 *  对
 *  fn1: {book: '蝴蝶书'}
 */
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

fn(); // node环境: undefined  浏览器环境：10
fn.call(obj); // 18
```
## apply