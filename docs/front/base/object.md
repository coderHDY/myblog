# Object

## 原型链
### 原理
1. 每个function上都有一个prototype属性，指向一个对象，叫做**原型对象**
2. 原型对象上又有一个constructor属性能够找到构造他的function
    * constructor 是用 **new 关键字调用**时才会调用，主要做四件事：
        > 1. 生成一个新的对象 {}
        > 2. 给这个对象添加一个属性 _ _ _proto_ _ _  = function的prototype;
        > 3. function 的this绑定到这个对象上去执行
        > 4. **返回新生对象（所以新对象就有一个_ _ _proto_ _ _属性指向了这个function的prototype），就能说他的原型链上能找到这个function的原型对象**
        > * 因此可以用[instanceof判断是否是new调用](./typeof.html#阻止函数式调用)
```html
<head>
    <title>Document</title>
</head>
<body>
    <script>
        function A() {
            this.name = '张三';
            this.age = 18;
        }
        let a = new A();

        // 原型链判断理论（需要递归查找）
        console.log(a.__proto__ === A.prototype); // true
        console.log(a.__proto__.constructor === A); // true
        console.log(a.__proto__.constructor.name === 'A'); // true
        console.log(a instanceof A); // true
    </script>
</body>
</html>
```

### 证明
1. new出来的对象能够通过_ _ _proto_ _ _ 属性找到function的 prototype 对象
2. prototype对象里又有一个constructor函数
3. constructor函数有一个name属性，能够拿到函数名
4. constructor还有一个prototype属性，又指回它的原型对象（循环指向）
:::: tabs
::: tab label=示意图
![](./assets/prototype.png)
:::
::: tab label=代码
```html
<head>
    <title>Document</title>
</head>
<body>
    <script>
        function A() {
            this.name = '张三';
            this.age = 18;
        }
        A.prototype.height = 180;

        let a = new A();
        console.log(a);
    </script>
</body>
```
:::
::: tab label=证明1
* new出来的对象能够通过_ _ proto _ _ 属性找到function的 prototype 对象  
---
<img src='./assets/previousprototype1.png' style="width: 300px;">
:::
::: tab label=证明2、3
* prototype对象里又有一个constructor函数  
* constructor函数有一个name属性，能够拿到函数名  
---
<img src="./assets/previousprototype2.png" style="width:400px;">
:::
::: tab label=证明4
* 循环指向  
---
<img src="./assets/previousprototype3.png" style="width: 400px">
:::
::::

### 原型链顶层
1. 每个**对象**的原型链顶层都是 obj._ _ _proto_ _ _ = Object.prototype
2. 而Object._ _ _proto_ _ _ 指向的是 Function.prototype
3. Function._ _ _proto_ _ _ 指向的也是 Function.prototype
4. 而Function.prototype是一个对象，根据原则1，它的_ _ _proto_ _ _ 指向的也是Object.prototype,所以原型链顶端就会出现循环指向的问题。
---
![原型链顶端](./assets/functionprototype.png)
:::: tabs
:::tab label=代码
```html
<body>
    <script>
        function A() {
            this.name = '张三';
            this.age = 18;
        }

        let a = new A();
        console.log(a);
    </script>
</body>
```
:::
::: tab label=①
* 任意一个function都有一个原型对象
* A的原型对象是A.prototype
:::

::: tab label=②
* 任何一个对象，都有一个 _ _ _proto_ _ _ 属性，指向**构造函数的原型对象**
* a._ _ _proto_ _ _ 就指向 A.prototype
```js
a.__proto__ === A.prototype; // true
```
:::
::: tab label=③
* 任何对象，原型链都能追溯到 Object.prototype (所以所有对象都有一些默认的原型方法)
```js
A.prototype.__proto__ === Object.prototype; // true
```
:::
::: tab label=④
* Object作为一个基础对象的构造函数，它也有一个_ _ _proto_ _ _ 属性，指向的是Function.prototype
---
![原型链顶层](./assets/prototypetop.png)
```js
Object.__proto__ === Function.prototype; // true
```
:::
::: tab label=⑤
* 在顶层，Function._ _ _proto_ _ _指向他自己的prototype (唯一一个比较特殊的地方)
```js
Function.__proto__ === Function.prototype; // true
```
:::
::: tab label=⑥
* 最后，由于Function.prototype也是对象，所以根据第③条，他的向上追溯也能找到Object.prototype
* 由此，Object.prototype 和 Function.prototype 形成了 **原型链顶端的闭环**，因此有下列结论：
```js
Function.__proto__ === Function.prototype; // true
Function instanceof Function; // true

Function.prototype.__proto__ === Object.prototype; // true
Function instanceof Object; // true

Object.__proto__.__proto__ === Object.prototype; // true
Object instanceof Object; // true

Object.__proto__ === Function.prototype;  // true
Object instanceof Function; // true
```
::: 
::::

## 其他属性
### length
* 值为1
### constructor
* 原型对象上的属性，指向构造函数
* 每个对象都能够通过[原型链](./object.html#原型链)找到构造函数的原型对象，然后原型对象上就有对应的constructor属性，所以每个对象都能拿到自己的构造函数
```js
class A {}
const a = new A();

console.log(a.constructor); // A
```
```js
function B() {}
const b = new B();

console.log(b.constructor); // B
```
## 静态方法
### assign
::: tip assign
* 作用：将多个对象的属性集成到第一个对象上,**返回第一个对象的引用**
* 使用：Object.assign(obj1, obj2[, obj3...])
* 入参：Object, Object[, Object]
* 返回：Object
* tip：浅拷贝
* tip：相同属性以后来的为准
* tip：不支持es5就没有的Symbols
:::
:::: tabs
::: tab label=使用
```js
const obj1 = {
    name: '张三',
    book: '红宝书'
}
const obj2 = {
    name: '李四',
    age: 19
}

const ans = Object.assign(obj1, obj2);
console.log(ans === obj1); // true
console.log(obj1); // { name: '李四', book: '红宝书', age: 19}
console.log(obj2); // { name: '李四', age: 19 }
```
:::
::: tab label=浅拷贝
```js
const obj1 = {
    name: 'hdy'
}
const obj2 = {
    books: ['红宝书']
}

Object.assign(obj1, obj2);
obj2.books[0] = '你不知道的JS';
console.log(obj1); // { name: 'hdy', books: ['你不知道的JS'] }
```
:::
::: tab label=手写
* 期望：
```js
const obj1 = {
    name: 'hdy'
}
const obj2 = {
    name: '李四',
    books: ['红宝书']
}

Object.myAssign(obj1, obj2);
obj2.books[0] = '你不知道的JS';
console.log(obj1); // { name: '李四', books: ['你不知道的JS'] }
```
```js
Object.prototype.myAssign = (obj1, ...objs) => {
    objs.forEach(item =>
        Object.entries(item).forEach(([key, value]) => 
            obj1[key] = value));

    return obj1;
}
```
:::
::: tab label=深拷贝实现
* 期望：
```js
const obj1 = {
    name: 'hdy'
}
const obj2 = {
    name: '李四',
    books: ['红宝书']
}

Object.myDeepAssign(obj1, obj2);
obj2.books[0] = '你不知道的JS';
console.log(obj1); // { name: '李四', books: ['红宝书'] }
```
```js
Object.prototype.myDeepAssign = (obj1, ...objs) => {
    let newObj = Object.assign({}, ...objs);

    // 断连接
    newObj = JSON.parse(JSON.stringify(newObj));

    for (let [key, value] of Object.entries(newObj)) {
        obj1[key] = value;
    }
    return obj1;
}
```
::::

### create
::: tip create
* 作用：创造一个带有指定原型链的对象
* 调用：Object.create(obj)
* 入参：Object[, definePropertiesObj]
* 返回：Object[, Object]
:::
:::: tabs
::: tab label=使用
![](./assets/objectcreate.png)
```js
class A {}
A.prototype.age = 18;

const a1 = new A();
a1.name = 'hdy';

const a2 = Object.create(a1);

console.log(a2.name); // hdy
console.log(a2.age); // 18
console.log(a2 instanceof A); // true
console.log(a2.__proto__ === a1); // true
```
:::
::: tab label=对象继承
* 普通继承是通过class B extends A {}来实现的
* 但是单个对象要继承另一个对象的属性就可以用Object.created()来实现，通过原型链的机制
```js
// 类式继承
class A {}
class B extends A {}

const b = new B();
console.log(b instanceof A); // true

// 函数式继承
function C() {}
function D() {
}
D.prototype.__proto__ = C.prototype;

const d = new D();
console.log(d instanceof C); // true

// 对象式继承
const f = Object.create(d);
console.log(f instanceof C); // true
```
:::
::: tab label=通过对象继承实现类继承
```js
class A {
    constructor() {
        this.name = 'hdy';
    }
}
function B() {}

// 通过对象的继承来实现原型链
B.prototype = Object.create(A.prototype);
// ->相当于
// B.prototype.__proto__ = A.prototype;

const b = new B();
console.log(b instanceof A); // true
```
:::
::: tab label=第二个参数
* 第二个参数类似Object.defineProperty的第二个参数
```js
const obj1 = { name: 'hdy' }
const obj2 = Object.create(obj1, {
    age: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 18
    }
})

console.log(obj2); // { age: 18 }
```
:::
::::

### defineProperty
::: tip defineProperty
* 作用：给对象定义属性，可以支持get/set劫持
* 调用：Object.defineProperty(obj, key, descriptor)
* 入参：Object, String, Object
* 返回：Object（第一个入参的引用）
:::
:::: tabs
::: tab label=使用
```js
const obj = {
    name: 'hdy'
}

Object.defineProperty(obj, '_age', {
    configurable: true,
    writable: true,

    // 内置属性可以配置不可枚举
    emuerable: false,
    value: 18
})

Object.defineProperty(obj, 'age', {
    configurable: true,

    // 有getter时，这个属性就是一个函数，配置了也不会被枚举出来
    emumerable: true,
    get() {
        return this._age + '岁';
    },
    set(value) {
        this._age = value;
    }
})

console.log(obj.age); // 18岁
obj.age = 20;         // 走的setter赋值
console.log(obj.age); // 20岁
```
:::
::: tab label=descriptor规则
1. configurable为true时，所有属性都只能配置这一遍，包括configurable，且属性不可删
2. emuerable配置是true打印对象时才会被枚举出来，（直接赋值出来的属性默认是true，defineProperty的属性默认是false）
3. value: 值
4. writable决定是否可改变value
5. get 属性的getter器
6. set 属性的setter器
:::
::: tab label=configurable
* configurable为true时，所有属性都只能配置这一遍，包括configurable(除了value和writable)，且属性不可删
---
> 不可配置不可删
```js
const obj = {};
Object.defineProperty(obj, 'age', {
    configurable: false,
    value: 18
})

console.log(obj.age); // 18
delete obj.age;       // 不起作用
console.log(obj.age); // 18
```
```js
const obj = {};
Object.defineProperty(obj, 'age', {
    configurable: true,
    value: 18
})

console.log(obj.age); // 18
delete obj.age;       // 起作用
console.log(obj.age); // undefined
```
---
> 可配置下可再改属性
```js
var obj = {};
Object.defineProperty(obj, 'age', {
    configurable: true,
    writable: false
    value: 18,
});

obj.age = 19;         // 不生效
console.log(obj.age); // 18

// 更改配置
Object.defineProperty(obj, 'age', {
    writable: true
});

obj.age = 19;         // 生效
console.log(obj.age); // 19
```
:::
::: tab label=enumerable
* enumerable配置是true打印对象时才会被枚举出来，（直接赋值出来的属性默认是true，defineProperty的属性默认是false）
```js
const obj = {};

// 默认enumerable是false
Object.defineProperty(obj, 'age', {
    value: 18
})

console.log(obj); // {}
console.log(obj.age); // 18

// 直接赋值时enuerable是true
obj.height = 180;
console.log(obj.height); // 180

// 检查属性可枚举配置
console.log(obj.propertyIsEnumerable('age')); // false
console.log(obj.propertyIsEnumerable('height')); // true
```
* 包括for...in 和Object.keys()
```js
const father = { name: 'hdy' };
const child = Object.create(father, {
    age: {
        enumerable: false,
        value: 19
    }
});

console.log(child); // {}
console.log(child.age); // 19

for (let key in child) {
    console.log(key); // name
}
```
:::
::: tab label=writable/value
* value: 值
* writable决定是否可改变value，默认false
```js
const obj = {};
Object.defineProperty(obj, 'age', {
    writable: false,
    value: 10
})

console.log(obj.age); // 10
obj.age = 11;         // 不生效（也不报错）
console.log(obj.age); // 10
```
> 引用类型只判断引用是否改变
```js
const obj = {};
Object.defineProperty(obj, 'books', {
    writable: false,
    value: ['红宝书']
})

console.log(obj.books); // ['红宝书']
obj.books.push('蝴蝶书'); // 引用不变，所以不判定为写，生效
console.log(obj.books); // ['红宝书', '蝴蝶书']

obj.books = ['你不知道的js']; // 引用改变，判定为写，失效
console.log(obj.books); // ['红宝书', '蝴蝶书']

```
:::

::: tab label=get/set
* 就是对象的getter/setter器
```js
const obj = {
    _age: 18,
    get age() { return this._age + '岁'; },
    set age(value) { this._age = value; }
}

console.log(obj.age); // 18岁
obj.age = 20;
console.log(obj.age); // 20岁
```
```js
const obj = { _age: 18 }
Object.defineProperty(obj, 'age', {
    get() { return this._age; },
    set(value) { this._age = value; }
})

console.log(obj.age); // 18岁
obj.age = 20;
console.log(obj.age); // 20岁
```
:::
::: tab label=规则
1. 同时拥有((value || writable) && (get || set))会产生异常
```js
Object.defineProperty({}, 'age', {
    value: 18,

    // 报错
    get() {},
    set(value) {}
})
```
:::
::: tab label=继承属性
```js
class A {}
A.prototype._age = 18;

Object.defineProperty(A.prototype, 'age', {
    get() {
        return A.prototype._age;
    },
    set(value) {
        A.prototype._age = value;
    }
});

const a1 = new A();
const a2 = new A();

// 赋值会先去原型链找一圈，找不到这个值再赋值？getter 和 setter 在原型链的查找中优先级最高。
a1.age = 19;

console.log(a2.age);
console.log(Object.keys(a2));
```
:::
::::