---
title: 类型判断
date: 2021-11-01
---
## falsy
::: tip 假值
* 假值：
    1. false
    2. undefined
    3. NaN
    4. null
    5. ''
    ```js
    console.log(!!(false || undefined || NaN || null || '')); // false
    ```
* 除了假值都是真值
    ```js
    // 对象包裹 也是真值
    const a = new Boolean(false);
    const b = new String('');
    const c = new Number(0);
    console.log(!!(a && b && c)); // true
    ```
:::
## typeof
::: tip typeof
> 只能识别出这些类型  
1. undefined
2. boolean
3. string
4. number
5. "object" 对象  **或 null**
6. "function"
7. symbol
:::
* 注：typeof 会把 null 和 object 和 Array类型都判断为 **object**，所以 [深浅拷贝](../interview/js.html#深浅拷贝)函数需要再次判断类型
## 全等===
* 原生的 '==' 符号有一些缺陷，所以引入了全等 '==='
::: tip == 和 === 区别
1. boolean、string、number **==会自动转换类型**再判断，不是精准比较

2. undefined == null; // true  
undefined === null; // false

3. NaN == NaN // false  
NaN === NaN // false  
isNaN(NaN) // true
::: 
## instanceof
* instanceof 本质上是从[原型链](./object.html#原型链)上面去找对象
* **类的继承**的本质就是在 prototype 对象加上一个__proto__属性，指向父类的prototype
* 而instanceof的本质就是查看本对象的_ _ _proto_ _ _链上有没有目标函数的prototype
:::: tabs
::: tab label=现象
```js
class Animal {}

class People extends Animal{}

const p1 = new People();

// 继承后的实例对象能通过instanceof找到祖先类
console.log(p1 instanceof People); // true
console.log(p1 instanceof Animal); // true
console.log(p1 instanceof Object); // true
```
:::
::: tab label=继承的本质
```js
class Animal {}

// class People extends Animal{}

// 继承的本质
class People {}
People.prototype.__proto__ = Animal.prototype;

const p1 = new People();

console.log(p1 instanceof People); // true
console.log(p1 instanceof Animal); // true
console.log(p1 instanceof Object); // true
```
:::
::: tab label=instanceof的本质
* 本对象递归查找__proto__属性是否有目标类的prototype
```js
function instanceOf(objA, fnB) {
    const prototype = fnB.prototype;

    let __proto__ = objA.__proto__;
    while (true) {
        if (__proto__ === prototype) {
            return true;
        }

        if (__proto__ == null) {
            return false;
        }

        __proto__ = __proto__.__proto__;
    }
}
```
* 测试
```js
class Animal {}

class People extends Animal{}

const p1 = new People();

// 原生
console.log(p1 instanceof People); // true
console.log(p1 instanceof Animal); // true
console.log(p1 instanceof Object); // true

// 实现
console.log(instanceOf(p1, People)); // true
console.log(instanceOf(p1, Animal)); // true
console.log(instanceOf(p1, Object)); // true
```
:::
::::
### 阻止函数式调用
* 根据instanceof的特性，和[new关键字的特性](./object.html#原型链)，可以推导出**阻止类的函数式调用的方法**
* 另外，也可以通过[new.target](./function.html#new-target)判断
::: tip 阻止类的函数式调用
* 一般我们定义一个class就是一个function，只是阻止了函数直接调用
```js
class A {}
function B() {}

// 类式调用
let a = new A();
let b = new B();

// 函数式调用
A(); // Error
B(); // 正确运行，但是不期望这么做，因为本身目的是让它作为一个类
```
* 那么一个function怎样只允许他new调用呢？
```js
function B() {

    // 注：! 优先级比 instanceof 高，所以要加括号
    if (!(this instanceof B)) {
        throw Error('只能用new关键字调用');
    }
}

B(); // 抛出Error
```
:::
## Object.is
### 与===/==的区别
```js
Object.is(NaN, NaN); // true
NaN === NaN; // false
NaN == NaN; // false

Object.is(+0, -0); // false
+0 == -0; // true
+0 === -0; // true

```
## in
* 判断某个属性在不在对象的原型链上
```ts{9-11}
type fish = {
    swiming: () => void;
}
type dog = {
    run: () => void;
}

function fn(a: fish | dog) {
    if ('swiming' in a) {
        a.swiming();
    }
}
```
## 可选链
* 表达式取值：左边有才继续取值，左边没有就直接返回undefined
```js
const o = {}
console.log(o.a?.name); // undefined

if (!o.a?.name) {
    console.log('没有名字'); // 没有名字
}
```
>取代写法
```js
const o = {}
const name = o.a && o.a.name;
const name2 = o.a?.name;
```
## 空值判断
:::: tabs
::: tab label=取代写法
* 赋值写法取代：左边有值就赋值，没有再用右边默认值
```js
const str = '你好';
const s = str ?? '默认值';
const s2 = str ? str : '默认值';

console.log(s); // 你好
console.log(s2); // 你好
```
:::
::: tab label=区别
* 左边有值，无论是否判断为空，都取左边
```js
const str = '';
const s = str ?? '默认值';
const s2 = str ? str : '默认值';

console.log(s); // 
console.log(s2); // 你好
```
:::
::::
## 判断数组
:::: tabs
::: tab label=Array.isArray
```js
let i = [1, 2, 4];
console.log(Array.isArray(i)); // true
```
:::
::: tab label=prototype
```js
console.log(i instanceof Array); //true
```
:::
::: tab label=__proto__
```js
console.log(i.__proto__ === Array.prototype); // true
```
:::
::: tab label=constructor
```js
console.log(i.__proto__.constructor === Array); // true

console.log(i.constructor === Array);
```
:::
::: tab label=toString
```js
console.log(Object.prototype.toString.call(i).indexOf('Array') !== -1); // true

console.log(Object.prototype.toString.call(i) === '[object Array]');// true
```
:::
::::
## 判断对象
:::: tabs
::: tab label=instanceof
* 无法判断function/array
```js
// const obj = {};                   // true
// const obj = function () { };      // true
// const obj = [];                   // true
// const obj = null;                 // false
// class A { }; const obj = new A(); // true

console.log(obj instanceof Object);
```
:::
::: tab label=typeof
* 无法判断数组、null
```js
// const obj = {};                   // true
// const obj = function () { };      // false
// const obj = [];                   // true
// const obj = null;                 // true
// class A { }; const obj = new A(); // true

console.log(typeof obj === 'object');
```
:::
::: tab label=toString
* 正确判断
```js
// const obj = {};               // true
// const obj = function () { };  // false
// const obj = [];               // false
// const obj = null;             // false
// class A { }; const obj = new A(); // true

console.log(Object.prototype.toString.call(obj) === '[object Object]');
```
:::
::: tab label=constructor
* new对象无法正确判断
```js
// const obj = {};                   // true
// const obj = function () { };      // false
// const obj = [];                   // false
// const obj = null;                 // false

// class A { }; const obj = new A(); // false

console.log(obj?.constructor === Object);
```
:::
::::