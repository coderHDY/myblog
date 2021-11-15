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
* tip：arguments是**类数组**，不是纯正的数组
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