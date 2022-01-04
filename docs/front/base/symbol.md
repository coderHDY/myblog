---
title: Symbol
date: 2021-12-04
---
## 介绍
::: warning Symbol
* 作用：作为对象属性的标识符
* 内置：静态属性、静态方法
* 特点：不支持new创建、**Symbol()返回的Symbol值是唯一的**
* 入参：String/其他类型会被转成字符串
:::

```js{3,4,6}
const s1 = Symbol(1);
const s2 = Symbol(1);
console.log(s1 == 1);   // false
console.log(s1 === s2); // false

console.log(typeof s1); // symbol
```
## 概念
::: warning 概念表
|名字|作用|例|
|---|---|---|
|全局注册表|全局的一个键值对表||
|描述符|Symbol()或Symbol.for()时的入参|'hdy.name'|
|键|定义时的描述符|hdy.name|
|值|Symbol.for()的返回值|Symbol(hdy.skill)|
:::

## 方法
### for
::: tip
* 作用：在全局注册表中**注册或读取**Symbol
* 调用：Symbol.for(str)
* 返回：注册好的Symbol
:::
```js{3,4}
const s1 = Symbol.for('全局标记1');
const s2 = Symbol.for('全局标记1');
console.log(s1); // Symbol(全局标记1)
console.log(s1 === s2); // true
```
* 最佳实践：再全局注册表中加上前缀，减少全局污染
```js
const hdy = Symbol.for('hdy.name');
const js = Symbol.for('hdy.skill');
console.log(Symbol.for('hdy.name')); // Symbol(hdy.name)
```
### keyFor
::: tip
* 作用：拿到全局注册表的Symbol的键
* 调用：Symbol.keyFor(syb)
* 入参：Symbol
:::
```js
const js = Symbol.for('hdy.skill');
console.log(Symbol.keyFor(js)); // hdy.skill
```

## 属性
### description
::: tip
* 原型属性：Symbol.prototype.description
* 类型：String
* 值：构造时的入参，和Symbol.keyFor()返回值一样
:::
```js
const s = Symbol('hdy');
console.log(s.description === 'hdy'); // true
```
* 其他类型会被转换成String
```js
const a = Symbol(true);
console.log(typeof a.description); // string
```
* 和Symbol.keyFor()返回值一样
```js
const js = Symbol.for('hdy.skill');
console.log(js.description === Symbol.keyFor(js)); // true
```
### hasInstance
::: tip
* 作用：重写instanceof判断方式
* 调用：obj instanceof CLASS
:::
```js{4}
// 改写 instanceof 默认判断
class A {
    static [Symbol.hasInstance]() {
        return true;
    }
}

const a = '';
const b = 1;
const c = false;
console.log(a instanceof A); // true
console.log(b instanceof A); // true
console.log(c instanceof A); // true
```
### isConcatSpreadable
::: tip
* 作用：调用数组concat连接时是否展开
* 类型：Boolean
* 默认：true
:::
:::: tabs
::: tab label=使用
* Array.prototype.concat()默认展开了一层数组再进行拼接的
* 更改了[Symbol.isConcatSpreadable]后，可以自定义这个行为
```js{5,8,10}
const a = [1, 2];
const b = [3, 4, 5];

// 默认展开再做连接
console.log(a.concat(b)); // [1, 2, 3, 4, 5]

// 更改默认属性
b[Symbol.isConcatSpreadable] = false;
const c = a.concat(b);
console.log(c); // [ 1, 2, [ 3, 4, 5, [Symbol(Symbol.isConcatSpreadable)]: false ] ]

for (let i of c[2]) {
    console.log(i); // 3 4 5
}
```
:::
::: tab label=拼接类数组对象
* concat拼接一个类数组对象时默认不会展开的，需要手动设置
```js{7}
const a = ['hdy'];
const obj = {
    length: 2,
    '0': '18',
    '1': '180'
}
console.log(a.concat(obj)); // [ 'hdy', { '0': '18', '1': '180', length: 2 } ]
```
* 修改默认行为后
```js{8}
const a = ['hdy'];
const obj = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    '0': '18',
    '1': '180'
}
console.log(a.concat(obj)); // [ 'hdy', '18', '180' ]
```
:::
::: tab label=nodelist拼接
```html{15}
<body>
    <ul id='ul1'>
        <li>1</li>
        <li>2</li>
    </ul>
    <ul id='ul2'>
        <li>1</li>
        <li>2</li>
    </ul>

    <script>
        const group1 = document.getElementById('ul1').getElementsByTagName('li');
        const group2 = document.getElementById('ul2').getElementsByTagName('li');

        const lis = Array.prototype.concat.call(group1, group2); // [[li, li], [li, li]]
        console.log(lis);
    </script>
</body>
```
* 修改后
```html{15-17}
<body>
    <ul id='ul1'>
        <li>1</li>
        <li>2</li>
    </ul>
    <ul id='ul2'>
        <li>1</li>
        <li>2</li>
    </ul>

    <script>
        const group1 = document.getElementById('ul1').getElementsByTagName('li');
        const group2 = document.getElementById('ul2').getElementsByTagName('li');

        group1[Symbol.isConcatSpreadable] = true;
        group2[Symbol.isConcatSpreadable] = true;
        const lis = Array.prototype.concat.call(group1, group2); // [li, li, li, li]
        console.log(lis);
    </script>
</body>
```
:::
::::
### iterator
::: tip Symbol.iterator
* 作用：获取对象迭代器的**函数**
* 调用：for...of
* 返回：Iterator
:::
::: warning 特殊
|configurable|value|
|---|---|
|configurable|false|
|enumerable|false|
|writable|false|
:::
* 对象默认不可以被for...of 迭代
```js{6-7,10-15}
const obj = {
    name: 'hdy',
    age: 18,
}

// TypeError: obj is not iterable
// for (let value of obj) { }

// 增加迭代器
obj[Symbol.iterator] = function* () {
    const keys = Object.keys(this);
    for(let key of keys) {
        yield obj[key];
    }
}
for (let value of obj) {
    console.log(value); // hdy 18
}
```
### asyncIterator
::: tip
* 作用：异步迭代器
* 调用：**for await (...of...) {}**
* 难点：每一层await都会包装一次Promise，影响执行顺序
:::
:::: tabs
::: tab label=使用
```js{3-7}
// 定义可异步迭代对象
const obj = {};
obj[Symbol.asyncIterator] = async function*() {
    yield 'hdy';
    yield '18岁';
    yield '爱读书';
}; // 后面是立即执行函数，这里必须有分号

// 异步迭代
(async () => {
    for await (const i of obj) {
        console.log(i); // hdy 18岁 爱读书
    }
})()
```
:::
::: tab label=执行顺序
```js
const obj = {};
obj[Symbol.asyncIterator] = async function*() {
    yield 'hdy';
    yield '18岁';
    yield '爱读书';
};

console.log('开始');

setTimeout(() => console.log('异步代码1'));

(async () => {
    // 每执行完一个await，推下一个await进微任务队列
    for await (const i of obj) {
        console.log(i);
    }
})();

console.log('同步代码');
setTimeout(() => console.log('异步代码2'));
new Promise(resolve => {
    console.log('new Promise')
    resolve()
})
.then(() => console.log('微任务代码1'))
.then(() => console.log('微任务代码2'))
.then(() => console.log('微任务代码3'))
.then(() => console.log('微任务代码4'))
.then(() => console.log('微任务代码5'))

/** 同 */
// 开始
//                              (推入【1】)
// 同步代码
// new Promise                  (推入【2】)

/** 微 */
// 【1】：(await包装的Promise，无） (推入【3】)
// 【2】：微任务代码1              (推入【4】)

// 【3】：hdy                     (推入【5】)
// 【4】：微任务代码2               (推入【6】)

// 【5】：(await包装的Promise，无）  (推入【7】)
// 【6】：微任务代码3               (推入【8】)

// 【7】：18岁                     (推入【9】)
// 【8】：微任务代码4               (推入【10】)

// 【9】：(await包装的Promise，无） (推入【11】)
// 【10】：微任务代码5               (Promise链执行完毕)

// 【11】：爱读书                   (async执行完毕)

/** 宏 */
// 异步代码1
// 异步代码2
```
:::
::::

### match
::: tip
* 作用：以正则的规则去匹配调用者
* 调用：str.match(RegExp)
* 值：**Function(String.prototype.match调用的方法)/Boolean (判断是否用正则匹配，false就转换字符串匹配)**
:::
::: warning 特殊
|configurable|value|
|---|---|
|configurable|false|
|enumerable|false|
|writable|false|
:::
:::: tabs
::: tab label=Boolean作用
* 原生
* String.prototype的startsWith/endsWith/includes不允许用正则，会检测是否有此方法
```js{3}
const str = '123';
const reg = /1/;
console.log(str.startsWith(reg)); // error
```
* 修改
```js{3,4}
const str = '123';
const reg = /1/;
reg[Symbol.match] = false;  // 检测Symbol.match变为false，就用字符串匹配
console.log(str.startsWith(reg)); // false  开头匹配不到'/1/'这个字段
```
:::
::: tab label=Function作用
* 原生
```js{3}
const str = '123';
const reg = /1/;
console.log(str.match(reg)); // [ '1', index: 0, input: '123', groups: undefined ]
```
* 修改
```js{3,4}
const str = '123';
const reg = /1/;
reg[Symbol.match] = (str) => str + '45';  // String.prototype.match调用时发现是正则就调用此方法
console.log(str.match(reg)); // 12345
```
:::
::::
### matchAll
::: tip
* 作用：同[match](./symbol.html#match)
* 调用：String.prototype.matchAll()
:::
### replace
::: tip
* 作用：同[match](./symbol.html#match)
* 调用：String.prototype.replace()
:::
### search
::: tip
* 作用：同[match](./symbol.html#match)
* 调用：String.prototype.search()
:::
### split
::: tip
* 作用：同[match](./symbol.html#match)
* 调用：String.prototype.split(reg)
:::
```js
const s = '1$2$3';

const reg = /\$/;
console.log(s.split(reg)); // [ '1', '2', '3' ]

// 修改默认做法
reg[Symbol.split] = (str) => ['嘿', '嘿嘿', '嘿嘿嘿'];
console.log(s.split(reg)); // [ '嘿', '嘿嘿', '嘿嘿嘿' ]
```
### species
::: tip
* 作用：决定此对象衍生出来的对象的构造类
:::
* 原生构造类
```js{4,5}
class MyArray extends Array {}
const a = new MyArray(1, 2, 3);

const mapped = a.map(x => x);
console.log(mapped instanceof MyArray); // true
console.log(mapped instanceof Array);  // true
```
* 修改后：**本类的实例 => 的衍生对象 => 的构造类，做出了修改**
```js{2-4,8,9}
class MyArray extends Array {
    static get[Symbol.species]() {
        return Array; // 衍生对象的构造函数就是Array构造，和MyArray没有关系
    }
}
const a = new MyArray(1, 2, 3);

const mapped = a.map(x => x);
console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);  // true
```
### toPrimitive
::: tip
* 作用：默认转化类型时使用
* 调用：+str/`${obj.str}`/!str/等
* 入参hint:'number'|'string'| 'default'
:::
```js{2,4,5}
const obj = {};
console.log(+str + 3); // NaN

obj[Symbol.toPrimitive] = (hint) => 1000;
console.log(+str + 3); // 1003
```
### toStringTag
::: tip
* 作用：Object.prototype.toString()会拿到此方法返回值做拼接
:::
```js{4,12}
class A {}
const a = new A();

console.log(a.toString()); // [Object object]

Object.defineProperty(A.prototype, Symbol.toStringTag, {
    get() {
        return 'A';
    }
})

console.log(a.toString()); // [Object A]
```
### unscopables
::: tip
* 作用：使用with更换作用域时时排除的属性名称
* tip：《红宝书》不建议使用with，代码不易读不易维护
:::
