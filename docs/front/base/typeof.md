# 类型判断

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
* 注：typeof 会把 null 和 object 和 Array类型都判断为 **object**，所以 [深浅拷贝](../sourcecode/#深浅拷贝)函数需要再次判断类型
## ===
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

console.log(p1 instanceof People); // true
console.log(p1 instanceof Animal); // true
console.log(p1 instanceof Object); // true
```
:::
::: tab label=继承的本质
```js
class Animal {}

class People {}

// 继承的本质
People.prototype.__proto__ = Animal.prototype;

const p1 = new People();

console.log(p1 instanceof People); // true
console.log(p1 instanceof Animal); // true
console.log(p1 instanceof Object); // true
```
:::
::: tab label=instanceof的本质
```js
function instanceOf(objA, fnB) {
    const prototype = fnB.prototype; // 另一个对象的__proto__递归能找到他就算是true

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