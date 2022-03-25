---
title: function
date: 2021-11-10
---

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
    console.log(this.name); // hdy
    console.log(book);      // js红宝书
    console.log(web);       // MDN
}
const book = 'js红宝书';
const web = 'MDN';

// 绑定了fn1的第一个参数
const fn2 = fn1.bind(obj, book);

// 传入了fn1的第二个参数
fn2(web);
```
:::
::: tab label=核心思想
* 期望：
1. 函数式调用
```js
const obj = {
    name: 'hdy',
}

function fn1() {
    console.log(this.name); // hdy
    return "对";
}

const fn2 = fn1.bind(obj);

// 函数调用
const ans = fn2();
console.log(ans); // 对
```
2. 类式调用不管用，因为类式调用应该走的是内部constructor方法的逻辑，this应该是被绑定到super传下来的this
```js
const obj = {
    name: 'hdy',
}

function fn1(age) {
    this.age = age;
}

const fn2 = fn1.bind(obj);

// 类式调用
const ans = new fn2();
console.log(ans); // { age: 11 }
console.log(ans.name); //undefined
```
:::
:::tab label=手写原生
* 核心思想：
    1. 通过instanceof判断是否是new调用，然后分别绑定this
    2. 绑定原型链，保证new调用继承的属性不会丢失，同时作为instanceof识别是new调用的方式
> new调用新function时，创建了新的对象，绑定了新的this，_ _ _proto_ _ _指向新function的prototype。
那么bind也要保证原function的原型链不会断
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
* 测试
```js
const obj = {
    name: 'hdy',
    age: 18
}

function fn1(age) {

    // 函数调用：hdy  类式调用：undefined
    console.log(this.name);

    // 都是 11
    console.log(age);

    // 函数调用赋值给obj 类式调用赋值给新对象
    this.book = '蝴蝶书';
    return "对";
}
const fn2 = fn1.newBind(obj);

// 函数调用
const ans = fn2(11);

// 类调用
const n1 = new fn2(11);

console.log(ans); // 对
console.log(n1); // fn1: {book: '蝴蝶书'}

console.log(obj); // { name: 'hdy', age: 18, book: '蝴蝶书' }
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
::: tip apply
* 作用：绑定函数执行的this执行
* 调用：fn.apply(thisArg[, [ ...args ]])
* 入参：Object[, Array | (类数组)]
* 返回：any
:::
> 类Array：有下标做key，有length属性，如nodelist、arguments

```js
const obj = {
    name: 'hdy',
    age: 18
}
const fn = function(book) {
    console.log(`我的名字是${this.name}，我今年${this.age}岁啦！我喜欢读${book}。`);
}

fn.apply(obj, ['蝴蝶书']); // 我的名字是hdy，我今年18岁啦！我喜欢读蝴蝶书。
```
## length
::: tip length
* 作用：拿到function的**形参数量**
* 调用：fn.length
* 返回：Number
* tip：对形参解构无效
:::
:::: tabs
::: tab label=用法
```js
function fn1(name, age) {}
const fn2 = (name, age) => {}

console.log(fn1.length); // 2
console.log(fn2.length); // 2
```
:::
::: tab label=解构形参无效
```js
function fn1(...args) {}
function fn2(name, ...args) {}

console.log(fn1.length); // 0
console.log(fn2.length); // 1
```
:::
::: tab label=静态属性
```js
console.log(Function.length); // 1
```
:::
::::
## name
::: tip name
* 作用：查看函数名称
* 调用：fn.name
* 返回：String
:::
:::: tabs
::: tab label=使用
```js
function fn1() {}
const fn2 = () => {}

console.log(fn1.name); // fn1
console.log(fn2.name); // fn2
```
:::
::: tab label=阻止函数式调用类
* 本质还是利用原型链
```js
function People() {
    if (!(this instanceof People)) {
        console.log('禁止函数式调用类！')
    }
}
People(); // 禁止函数式调用类！

function Animal() {

    // 也可以this.constructor.name
    if (this.__proto__.constructor.name !== 'Animal') {
        console.log('禁止函数式调用类！')
    }
}
Animal(); // 禁止函数式调用类！
```
:::
::: tab label=getter/setter
```js
const obj = {
    _name: 'hdy',
    get name() {
        return this._name;
    },
    set name(newName) {
        this._name = newName;
    }
}

const fn = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(fn.set.name); // set name
console.log(fn.get.name); // get name
```
:::
::::
## toString
::: tip toString
* 作用：返回函数的定义代码
* 调用：fn.toString()
* 返回：String
:::
```js
function a() {}
const b = () => {}

console.log(a); // function a() {}
console.log(b); // () => {}
```
## arguments
::: tip arguments
* 作用：拿到函数实参
* 使用：函数内固有属性
* tip：**箭头函数没有arguments**
* tip：一般不建议直接用隐式对象，可以用...args显示调用
* tip：arguments是`类数组`，不是纯正的数组
:::
:::: tabs
::: tab label=使用
```js
function fn(a, b) {
    console.log(arguments); // [Arguments] { '0': 'name', '1': 18 }
    console.log(arguments.length); // 2
}

fn('name', 18);
```
:::
::: tab label=箭头函数
* 箭头函数没有arguments，nodejs全局环境有，所以可以读取到
```js
const fn = () => console.log(arguments); // 浏览器：error  node：全局的arguments

fn('name', 18);
```
```js
// nodejs
const a = arguments;

const fn = () => console.log(arguments === a); // true

fn('name', 18);

```
:::
::: tab label=类数组
```js
function fn(a, b) {
    console.log(arguments.length); // 2
    console.log(arguments instanceof Array); // false

    Array.prototype.forEach.call(arguments, item => {
        console.log(item); // name age
    })
}

fn('name', 'age');
```
:::
::::
## 箭头函数
::: tip 箭头函数
* 作用：es6新增定义函数方式
* 使用：(...arg) => {}
* 特性：this/arguments/super/无法当构造函数
* 技巧：绑定this/匿名函数
:::
:::: tabs
::: tab label=基本使用
* 写法
```js
const sum = (a, b) => a + b;

console.log(sum(1, 2)); // 3
```
* 简写
```js
const addOne = a => a + 1;

console.log(addOne(1)); // 2
```
* 返回对象简写
```js
const getPeople = (name, age) => ({name, age});

console.log(getPeople('hdy', 18));  // {name: 'hdy', age: 18}
```
:::
::: tab label=没有this
```js
const obj = {
    name: 'hdy',

    fn1() {
        console.log(this.name);
    },

    fn2: () => console.log(this.name)
}

obj.fn1(); // hdy
obj.fn2(); // undefined
```
:::
::: tab label=手写bind
> 期望：
```js
const obj = {
    name: 'hdy',
    age: 18
}
function fn1(book) {
    this.book = book;
    return this;
}
const fn2 = fn1.myBind(obj);

const a = fn2('红宝书');

console.log(a); // {name: 'hdy', age: 18, book: '红宝书'}

const b = new fn2('红宝书'); // { book: '红宝书' }
```
```js
// 需要使用this，不能用箭头函数
Function.prototype.myBind = function(obj, ...args1) {
    const _self = this;

    // 也需要使用this判断是否new调用，所以也不能使用箭头函数
    const fn = function (...args2) {
        if (this instanceof _self) {

            // new调用
            return _self.call(this, ...args1, ...args2);
        } else {

            // 函数调用
            return _self.call(obj, ...args1, ...args2);
        }
    }

    // 维护原型链关系，new调用能正确判断
    fn.prototype = this.prototype;
    return fn;
}
```
:::
::: tab label=解析顺序
```js
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {}; // error

callback = callback || (() => {});    // ok
```
:::

::::
## new.target
::: tip new.target
* 作用：指向构造函数的应用
* 值：本Function的引用
* tip：只有new操作符才会被赋值，否则是undefined
:::
:::: tabs
::: tab label=使用
```js{2-4,11}
function People(name) {
    if (!new.target) {
        throw Error('只能new调用此函数');
    }
    this.name = name;
}

const p1 = new People('hdy');
console.log(p1); // { name: 'hdy' }

// const p2 = People('张三'); // Error: 只能new调用此函数
```
:::
::: tab label=值
* 总是存储本Function的引用
>和this判断不同，this是拿到本function的实例对象
```js{2,6,12}
function A() {
    console.log(new.target); // undefined
    this.name = 'hdy';
}
function B() {
    console.log(new.target); // Funtion B
    A.call(this);
    this.age = 18;
}
B.prototype.__proto__ = A.prototype;

const b = new B();
console.log(b); // B { name: 'hdy', age: 18 }
```
:::
::: tab label=继承
* 继承也总是指向new最初被调用的函数的构造器
```js{3,9-10}
class A {
    constructor() {
        console.log(new.target);
    }
}
class B extends A {
    constructor() {
        super();
        console.log(new.target);
        console.log(this.constructor);
    }
}
new B();

// [class B extends A]
// [class B extends A]
// [class B extends A]
```
:::
::::