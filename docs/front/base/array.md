# Array
## 类方法
### new
* 接收的是单个数组项
```js
let arr = new Array(1, 2, 3); // [1, 2, 3]
```
::: warning 错误示范
```js
let arr = new Array([1, 2, 3]); // [[1, 2, 3]]
```
:::
### isArray
* 判断是否是数组的最常用的方法
```js
let a = [1, 2, 3];
console.log(Array.isArray(a)); // true
```
* 通常判断数组Array.isArray() 是最优的
* arr instanceof Array 不能判断iframs，Array.isArray() 可以，[详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
* [其他判断数组的方法](./typeof.html#判断数组)

### from
::: tip Array.from()
* Array.from()将**伪数组对象**或**可迭代对象iterator**转换成数组
> 伪数组对象：拥有一个length和若干个索引的对象
* 调用：Array.from(iterator[, mapFn, thisArg])
* 入参：Iterator[, 回调一次数组的map, map的绑定this]
* 返回：Array
* tip：回调mapFn只有两个参数 (item, index) => {}
* tip：使用thisArg时，mapFn就不能使用箭头函数
:::
:::: tabs
:::tab label=普通转换
* 伪数组/可迭代对象 -> 数组
```js
// 数组本身也是可迭代对象
let arr = [1, 2, 3];
console.log(Array.from(arr)); // [1, 2, 3]

let set = new Set(arr);
console.log(Array.from(arr)); // [1, 2, 3]

// nodelist是经典的伪数组对象
let divs = document.querySelectorAll('div');
console.log(Array.from(divs));

// ES5的转换方法，替代Array.from()
Array.prototype.slice.call(divs);
```
:::
::: tab label=带回调
相当于new Array().map(() => {})
```js
let set = new Set([1, 2, 3]);

let arr = Array.from(set, (item, index) => `${index}:${item}`);

console.log(arr); // [ '0:1', '1:2', '2:3' ]
```
:::
::: tab label=带thisArg
* 注：箭头函数没有this的值，所以要使用thisArg，回调函数就应该使用function
```js
let set = new Set([180, 175, 170]);
let thisArr = ['张三', '李四', '王五'];

let arr = Array.from(set, function(item, index) {
    return `${this[index]}: ${item}`;
}, thisArr);

console.log(arr); // [ '张三: 180', '李四: 175', '王五: 170' ]
```
:::
::::

### of
* Array.of()与new Array() 相似，都是创建新数组
```js
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(new Array(1, 2, 3)); // [1, 2, 3]

// 区别
console.log(Array.of(3)); // [3]
console.log(new Array(3)); // [undefined, undefined, undefined]
```

## 原型方法
### at
::: tip 支持的环境
* 新方法，支持的环境较新

| 环境     | 版本|
| -----   | ---- |
| chrom   | 92 |
| firefox | 90 |
| node    | 16.6 |
:::

:::: tabs
::: tab label=原生
* 支持负的index
```js
const arr = [1, 2, 3];

console.log(arr.at(-1));
```
:::

::: tab label=手写
* 思路：利用slice可以访问负元素的特性
> 也可以直接判断index将其转换为正的
```js
function at(arr, index) {

    // 因为slice使用限制，负数 === -1 的情况需要单独判断，还要取下标
    return index < 0 ? (index === -1 ? arr.slice(index) : arr.slice(index, index + 1))[0] : arr[index];
}

const arr = [1, 2, 3];
console.log(at(arr, 2));  // 3
console.log(at(arr, -1)); // 3
console.log(at(arr, -2)); // 2
```
:::
::::

### concat
::: tip concat
* 作用：拼接数组，**自动打平一层入参**，不改变原数组
* 调用：arr1.concat(arr2[, arr3...])
* 入参：any[, any...]
* 返回：Array
* tip：如果入参是数组，自动打平一层（flat）
:::
::::tabs
::: tab label=拼接新数组
```js
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr.concat(arr2, arr)); 
// [
//   1, 2, 3, 4, 5,
//   6, 1, 2, 3
// ]

// 简洁方法
console.log([...arr2, ...arr]);  // [ 4, 5, 6, 1, 2, 3 ]
```
:::
:::tab label=打平一层
```js
const arr = [1, 2, 3];
console.log(arr.concat(4)); // [ 1, 2, 3, 4 ]

console.log(arr.concat([5, 6, 7, [8]])); // [1, 2, 3, 5, 6, 7, [8]]
```
:::
::: tab label=手写concat
```js
function concat(arr, ...args) {
    let newArr = [...arr];

    // 判断是否是数组，是数组就打平一层
    args.forEach(item => 
        Array.isArray(item) ? newArr.push(...item) : newArr.push(item)
    );

    return newArr;
}

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(concat(arr, arr2)); // [1, 2, 3, 4, 5, 6]
console.log(concat(arr, 6, 6, 6, arr2)); // [1, 2, 3, 6, 6, 6, 4, 5, 6]
```
:::
::::
### copyWithin
::: tip copyWithin
* 作用：将原数组的目标index变为指定index区间的数，不会改变原数组长度
* 调用：arr.copyWithin(index, start, end);
* 入参：Number, Number, Number
* 返回：改变后的**原数组**
* tip：替换的长度根据
:::
```js
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

console.log(arr.copyWithin(1, 3, 5)) // [1, 4, 5, 4, 5]
console.log(arr2.copyWithin(2, 1, 3)) // [1, 2, 2, 3, 5]
```

### entries
::: tip entries
* 作用：将数组以**迭代器**的形式返回
* 调用：arr.entries()
* 返回：数组的迭代器
:::
```js
const arr = [1, 2, 3, 4];
let arrEts = arr.entries();

console.log(arrEts.next()); // { value: [ 0, 1 ], done: false }
```
* 可以用作**for..of**循环
```js
const arr = [1, 2, 3, 4];
let arrEts = arr.entries();

for( let [index, value] of arrEts) {
    console.log(value); // 1 2 3 4
}
```

### every
::: tip every
* 作用：查看数组是否**所有项**都满足条件
* 调用：arr.every((item, index, arr) => boolean, obj)
* 入参：Function[, Object]
* 返回：Boolean
* tip：要使用this就**不能使用箭头函数**
:::
::::tabs
::: tab label=不带thisArg
```js
const arr = [4, 4, 5, 6];
console.log(arr.every((item, index, arr) => {
    return item < 10;
})) // true
```
:::
::: tab label=带thisArg
```js
const arr = [14, 15, 16, 19];
const obj = {
    name: 'hdy',
    age: 18
}
console.log(arr.every(function(item, index, arr){ 
    return item < this.age
}, obj)) // false
```
:::
::::

### fill
::: tip fill
* 作用：将数组填充，**改变原数组**
* 调用：arr.fill(item[, start, end])
* 入参：any(填充值)[, Number, Number]
* 返回：Array
:::
```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.fill(6, 2, 4)); // [1, 2, 6, 6, 5]
console.log(arr.fill(6)); // [6, 6, 6, 6, 6]
console.log(arr); // [6, 6, 6, 6, 6]
```

### filter
::: tip filter
* 作用：指定条件筛选数组项，**返回新数组，不改变原数组**
* 调用：arr.filter((item, index, arr) => bool, thisArg)
* 入参：Function[, Object]
* 返回：Array
* tip：使用thisArg不能使用箭头函数
:::

:::: tabs
::: tab label=不带this
```js
const arr = [1, 10, 100, 1000];

console.log(arr.filter(item => item > 50)); // [100, 1000]
console.log(arr); // [1, 10, 100, 1000]
```
:::

::: tab label=带this
```js
const arr = [1, 10, 100 , 1000];
const obj = {
    name: 'hdy',
    age: 18
};

console.log(arr.filter(function(item) {
    return item > this.age;
}, obj)); // [100, 1000]
```
:::
::::

### find
::: tip find
* 作用：找到数组中**第一个**满足条件的项
* 调用：arr.find((item, index, arr) => bool, thisArg)
* 入参：Function[, Object]
* 返回：any(数组中满足条件的项)
* tip：使用thisArg就不能使用箭头函数
:::
:::: tabs
::: tab label=不带this
```js
const arr = [1, 10, 100, 'coderHdy'];

console.log(arr.find(item => typeof item !== 'number')); // 'coderHdy'
```
:::
::: tab label=带this
```js
const arr = [
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 19
    },
    {
        name: '小尤',
        age: 32
    }
];
const obj = {
    name: 'coderHdy',
    age: 21
}

console.log(arr.find(function(item) {
    return item.age > this.age;
}, obj)
.name); // '小尤'
```
:::
::::

### findIndex
::: tip findIndex
* 作用：找到符合条件的第一项的下标
* 调用：arr.findIndex((item, index, arr) => bool, thisArg)
* 入参：Function[, Object]
* 返回：Number
* tip：使用thisArg就不能使用箭头函数
:::
:::: tabs
::: tab label=不带thisArg
```js
const arr = [1, 2, 3, 'coderHdy'];

console.log(arr.findIndex(item => typeof item !== 'number')); // 3
```
:::

::: tab label=带thisArg
```js
const arr = [
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 19
    },
    {
        name: '小尤',
        age: 32
    }
];
const obj = {
    name: 'coderHdy',
    age: 21
}

console.log(arr.findIndex(function(item) {
    return item.age > this.age;
}, obj)); // 2
```
:::
::::

### flat
::: tip flat
* 作用：打平多维数组,**不改变原数组**
* 调用：arr.flat(deepth)
* 入参：Number(可选，默认是1)
* 返回：Array
:::
:::: tabs
::: tab label=使用
```js
const arr = [1, 2, [10, 20, [100, 200]]];

console.log(arr.flat()); // [1, 2, 10, 20, [100, 200]]
console.log(arr); // [1, 2, [10, 20, [100, 200]]]
console.log(arr.flat(2)); // [1, 2, 10, 20, 100, 200]
```
:::
::: tab label=手写原理
```js
function flat(arr, deepth = 1) {

    // reduce返回新数组，concat自带一层打平
    return arr.reduce((pre, item) => 
        pre.concat(Array.isArray(item) && deepth > 1 ? flat(item, deepth - 1) : item)
    , []);
}

const arr = [1, 2, [10, 20, [100, 200, [1000, 2000]]]];

console.log(flat(arr)); // [ 1, 2, 10, 20, [ 100, 200, [ 1000, 2000 ] ] ]
console.log(arr); // [ 1, 2, [ 10, 20, [ 100, 200, [1000, 2000] ] ] ]
console.log(flat(arr, 2)); // [ 1, 2, 10, 20, 100, 200, [ 1000, 2000 ] ]
```
:::
::: tab label=手写无限打平
```js
function deepFlat(arr) {
    return arr.reduce((pre, item) => 
        pre.concat(Array.isArray(item) ? deepFlat(item) : item)
    , [])
}

const arr = [1, 2, [10, 20, [100, 200, [1000, 2000]]]];

console.log(deepFlat(arr)); // [ 1, 2, 10, 20, 100, 200, 1000, 2000 ]

```
:::
::::