---
title: Array
date: 2021-11-04
---
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
* Array.from()将`伪数组对象`或`iterator`转换成数组
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
## 增删改查
### pop
::: tip
* 作用：数组取出最后一项（改变原数组）
* 调用：arr.pop()
* 返回：删除的项
:::
```js
const arr = [1, 2, 3];
console.log(arr.pop()); // 3
console.log(arr); // [1, 2]
```
### push
::: tip
* 作用：数组末尾添加项
* 调用：arr.push(item[, item...])
* 传入：any[, any]
* 返回：any
* tip：返回的是添加后数组的最后一项
:::
```js
const arr = [1, 2, 3, 4];
console.log(arr.push(5, 6, 7)); // 7
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
```
### shift
::: tip
* 作用：删除数组第一个元素
* 调用：arr.shift()
* 返回：any
:::
```js
const arr = [1, 2, 3, 4];
console.log(arr.shift()); // 1
console.log(arr); // [2, 3, 4]
console.log([].shift()); // undefined
```
### unshift
::: tip
* 作用：向数组头添加项
* 调用：arr.unshift(item[, item...])
* 入参：any[, any...]
* 返回：Number(length)
* tip：插入的顺序就是入参顺序，返回的是插入后的长度
:::
:::: tabs
::: tab label=使用
```js
const arr = [1, 2, 3];
console.log(arr.unshift(5, 6)); // 5
console.log(arr); // [5, 6, 1, 2, 3]
```
:::
::: tab label=手写
> 期望：
```js
const arr = [1, 2, 3];
console.log(arr.myUnshift(5, 6)); // 5
console.log(arr); // [5, 6, 1, 2, 3]
```
```js
Array.prototype.myUnshift = function(...args) {
    const arr = [...args, ...this];
    for(let [index, value] of arr.entries()) {

        // 注：this不能单独作为左赋值，this = xxx; 所以只能逐个改属性
        this[index] = value;
    }
    return arr.length;
}
```
:::
::::
### splice
::: tip
* 作用：删除、插入数组
* 调用：arr.splice(from[, delNum, newItem...])
* 入参：Number[, Number, any...]
* 返回：array
* tip：返回的是**删除的数组**
* tip：支持负值索引
:::
:::: tabs
::: tab label=普通用法
```js
const arr = [1, 10, 1000];

// 插入
console.log(arr.splice(2, 0, 100)); // []
console.log(arr); // [1, 10, 100, 1000]

// 删除
console.log(arr.splice(1, 2)); // [10, 100]
console.log(arr); // [1， 1000]
```
:::
::: tab label=负值索引
```js
const arr = [1, 2, 3];

console.log(arr.splice(-2, 1, 100)); // [2]
console.log(arr); // [1, 100, 3]
```
:::
::::
### includes
::: tip
* 作用：检查数组中是否包含指定的项，**可以指定开始查找的位置**
* 调用：arr.includes(item[, start])
* 入参：any[, Number]
* 返回：boolean
:::
```js
const arr = [1, 2, 3, 4];
console.log(arr.includes(2)); // true
console.log(arr.includes(2, 2)); // false
```
* 起始长度大于数组长度，直接返回false
```js
const arr = [1, 1, 1, 1];
console.log(arr.includes(1, 4)); // false
```
### every
::: tip
* 作用：查看数组是否**所有项**都满足条件
* 调用：arr.every((item, index, arr) => boolean, thisArg)
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
### some
::: tip
* 作用：判断数组中是否有符合要求的项
* 调用：arr.some((item, index, arr) => bool, thisArg)
* 入参：Function[, obj]
* 返回：Boolean
:::
:::: tabs
::: tab label=不带thisArg
```js
const arr = [1, 10, 100, 1000];

console.log(arr.some(item => item > 1000)); // false
console.log(arr.some(item => item > 100)); // true
```
:::
::: tab label=带thisArg
```js
const me = {
    name: 'coderhdy',
    age: 18
}
const others = [
    {
        name: '小黄',
        age:15
    },
    {
        name: '小张',
        age:16
    },
    {
        name: '小李',
        age:13
    },
]

console.log(others.some(function(item) {item.age > this.age}, me));
```
:::
::::

### find
::: tip
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
::: tip
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

### indexOf
::: tip
* 作用：找到指定元素的下标，不存在则返回 -1
* 调用：arr.indexOf(item[, start])
* 入参：any[, Number]
* 返回：Number
:::
:::: tabs
::: tab label=普通用法
``` js
const arr = ['小黄', '小张', '小李' , '小秋', '小张'];
console.log(arr.indexOf('小张')); // 1
console.log(arr.indexOf('小张', 2)); // 4
```
:::
::: tab label=收集下标
> 期望：
```js
const arr = ['小张', '小黄', '小李', '小黄'];
console.log(findAllIndex(arr, '小黄')); // [1, 3]
```
```js
function findAllIndex(arr, str) {
    const ans = [];
    let cIndex = arr.indexOf(str);
    while (cIndex > -1) {
        ans.push(cIndex);
        cIndex = arr.indexOf(str, cIndex + 1);
    }
    return ans;
}
```
:::
::::
### lastIndexOf
::: tip
* 作用：反向查找指定元素的下标，**可以指定末尾开始的下标**
* 调用：arr.lastIndexOf(item[, from])
* 入参：any[, Number]
* 返回：Number
* tip：from支持负值，可以从后数
:::
```js
const arr = ['小张', '小张', '小李', '小张'];

console.log(arr.lastIndexOf('小张')); // 3
console.log(arr.lastIndexOf('小张', 2)); // 1
console.log(arr.lastIndexOf('小张', 0)); // 0
console.log(arr.lastIndexOf('小张', -2)); // 1

```

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

console.log(arr.at(-1)); // 3
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

## 操作数组
### concat
::: tip
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
* 巧用flat
```js
function concat(...arrs) {
    return arrs.flat();
}
```
:::
::::
### copyWithin
::: tip
* 作用：将原数组的目标index变为指定index区间的数，不会改变原数组长度
* 调用：arr.copyWithin(index, start, end);
* 入参：Number, Number, Number
* 返回：改变后的**原数组**
* tip：替换的长度根据(end - start)决定
:::
```js
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

console.log(arr.copyWithin(1, 3, 5)) // [1, 4, 5, 4, 5]
console.log(arr2.copyWithin(2, 1, 3)) // [1, 2, 2, 3, 5]
```
### fill
::: tip
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
### join
::: tip
* 作用：将数组加入指定的分隔符转化成字符串
* 调用：arr.join(str)
* 入参：String
* 返回：String
* tip：入参不传默认是逗号
:::
```js
const arr = [1, '本书', true];
console.log(arr.join()); // 1,本书,true
console.log(arr.join('')); // 1本书true
```
::: warning split
* 作用：将字符串反向转回数组
[详情](./string.html#split)
:::
```js
const str = '1,本书,true';
console.log(str.split(',')); // ['1', '本书', 'true']
```

### reverse
::: tip
* 作用：反转数组，**改变原数组**
* 调用：arr.reverse()
* 返回：原数组引用
:::
```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // [5, 4, 3, 2, 1]
console.log(arr); // [5, 4, 3, 2, 1]
```
### sort
::: tip
* 作用：排列数组，**改变原数组**
* 调用：arr.sort((a, b) => Number)
* 入参：conpareFn
* 返回：原数组引用
:::
::: warning conpareFn
* 形式：(a, b) => Number
* **返回值 > 0：a在后面**
* 返回值 < 0：a在前面
:::
:::: tabs
::: tab label=使用
```js
const arr = [1000, 10, 100, 1];
console.log(arr.sort((a, b) => {
    if (a > b) {
        return 1; // a大的时候希望他在后面
    } else {
        return -1;
    }
})); // [1, 10, 100, 1000]
console.log(arr); // // [1, 10, 100, 1000]

// 精简版

console.log(arr.sort((a, b) => a - b)); // [1, 10, 100, 1000]
```
:::
::: tab label=名称牌序
* 字符的比较会比较ascll码值
```js
console.log('a' > 'b'); // false
console.log('ba' > 'bb'); // false
```
> 期望：
```js
const names = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
console.log(sortIt(names)); // [ 'alpha', 'bravo', 'CHARLIE', 'Delta' ]
```
```js
function sortIt(names) {
    const lower = names.map((item, index) => ({idx: index, name: item.toLowerCase()}));
    lower.sort((a, b) => {
        return +(a.name > b.name) || +(a.name === b.name) - 1;

        // if (a.name > b.name) {
        //     return 1;
        // } else if(a.name === b.name) {
        //     return 0;
        // } else {
        //     return -1;
        // }
    });
    const ans = lower.map(({ idx }) => names[idx]);
    return ans;
}
```
::::
### flat
::: tip
* 作用：打平多维数组,**不改变原数组**
* 调用：arr.flat(deepth)
* 入参：Number(可选，默认是1)
* 返回：Array
* tip：可入参infinity直接**无限打平**成一维数组
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
::: tab label=infinity
```js
const arr = [1, 2, [10, 20, [100, 200, [1000, 2000]]]];

console.log(arr.flat(Infinity)); // [ 1, 2, 10, 20, 100, 200, 1000, 2000 ]
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

### toString
::: tip
* 作用：将数组转化成字符串，以逗号分隔，不改变原数组
* 调用：arr.toString()
* 返回：String
:::
```js
const arr = [1, 2, true, '黄']
console.log(arr.toString()); // 1,2,true,黄
console.log(arr); // [1, 2, true, '黄']
```

## 高级方法

### filter
::: tip
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

::: tab label=手写filter
```js
function filter(arr, fn, thisArg) {
    return arr.reduce((pre, item, index, a) => {
        return fn.call(thisArg, item, index, a) ? [...pre, item] : pre;
    }, [])
}

const arr = [1, 10, 100];
const arr2 = filter(arr, function(item, index, arr){
    return item > 9;
});
console.log(arr2);  // [10, 100]
```
:::
::: tab label=低阶函数手写
```js
function filter(arr, fn, thisArg) {
    let ans = [];
    for (let [index, item] of Object.entries(arr)) {
        if (fn.call(thisArg, item, index, arr)) {
            ans.push(item);
        }
    }
    return ans;
}

const arr = [1, 10, 100];
const arr2 = filter(arr, function(item, index, arr){
    return item > 9;
});
console.log(arr2);  // [10, 100]
```
:::
::::

### forEach
::: tip
* 作用：**以迭代器的形式**遍历数组
* 调用：arr.forEach((item, index, arr) => {}, thisArg)
* 入参：function[, obj]
* 返回：undefined
* tip：forEach无法中断，且遍历项不会中途改变遍历的项
:::
:::: tabs
::: tab label=普通使用
```js
const arr = ['name', 'age', 'book', 'work'];
const obj = {
    name: 'hdy',
    age: 18,
    book: '红宝书',
    work: '前端工程师'
}

arr.forEach(function(item) {
    console.log(this[item])
}, obj);
// hdy 18 红宝书 前端工程师
```
:::
::: tab label=无法中断
```js
const arr = [1, 10, 100, 1000];
arr.forEach(item => {
    console.log(item);
    // if (item > 9) break;  // 报错
    if (item > 99) return;   // 无法中断
});  // 1 10 100 1000
```
* 可以中断的方法
```js
// for...of for...in  for...  every   some  find findIndex 
const arr = [1, 10, 100, 1000];
arr.some(item => {
    console.log(item);
    return item > 9;
}); // 1 10
```
:::
::: tab label=遍历次数固定
```js
const arr = [1, 10, 100, 1000];
arr.forEach((item, index, arr) => {
    console.log(item);
    if (item > 9) {
        arr.splice(index, 0, 99);
    }
}) // 1 99 99 99  还是只遍历四次
console.log(arr); // [1, 99, 99, 99, 10, 100, 1000]
```
:::
::::
### map
::: tip
* 作用：将数组执行一个处理函数，**返回新的数组**
* 调用：arr.map((item, index, arr) => newItem, thisArg)
* 入参：function[, obj]
* 返回：Array
:::
:::: tabs
::: tab label=常规调用
```js
const arr1 = [1, 2, 3, 4];
const arr2 = arr1.map((item, index) => item * index);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [0, 2, 6, 12]
```
::: 
::: tab label=带thisArg
```js
const obj = {
    name: 'hdy'
}
const arr1 = [18, 19, 20];
const arr2 = arr1.map(function (item) {
    const obj = JSON.parse(JSON.stringify(this));
    obj.age = item;
    return obj;
}, obj);

console.log(arr2); // [{name: 'hdy', age: 18}, {name: 'hdy', age: 19}, {name: 'hdy', age: 20}]
```
:::
::: tab label=作用字符串
```js
const map = Array.prototype.map;
const str = '我是coderHdy';
const arr = map.call(str, item => item.charCodeAt(0));

console.log(arr); // [25105, 26159,  99, 111,   100, 101, 114, 72, 100, 121]
```
:::
::: tab label=经典问题
```js
const arr = ['1', '2', '2', '2'];
console.log(arr.map(parseInt)); // [1, NaN, NaN, 2]
```
> parseInt其实接收两个参数：parseInt(str, type);
> 来决定是几进制
> 而map给回调函数传三个参数，第二个是index，index变成了进制，所以导致转换错误
> 二进制里面2就是非法的。
:::
::::
### reduce
:::tip reduce
* 作用：遍历数组，获得一个迭代出来的结果
* 调用：arr.reduce((pre, item, index, arr) => {}, pre)
* 入参：function, any
* 返回：any
:::

:::: tabs
::: tab label=常规用法
```js
let arr = [1, 10, 100, 1000];
const sum = arr.reduce((pre, item, index, arr) => {
    return item + pre;
}, 0)

console.log(sum); // 1111
```
:::
::: tab label=手写模板字符串
> 期望：
```js
const obj = {
    name: '张三',
    age: 18,
    books: [
        '蝴蝶书',
        '红宝书'
    ]
}
const str = "我是${name}，我今年${age}，我喜欢读${books[1]}。";

console.log(template(obj, str)); // 我是张三，我今年18，我喜欢读红宝书。
```
```js
function template(obj, str) {
    const reg1 = /\$\{(.+?)\}/g;
    const reg2 = /\[(.+?)\]/g;
    return str.replace(reg1, (_, match) => {
        let attrs = match.replace(reg2, (_, match2) => {
            return "." + match2;
        })

        // 利用reduce深度递归找出对象属性
        return attrs.split('.').reduce((pre, item) => pre[item], obj);
    })
}
```
:::
::: tab label=深度打平多维数组
> 期望：
```js
let arr1 = [[0, 1], [2, [3]], [4, 5]]
console.log(deepFlat(arr1)); // [0, 1, 2, 3, 4, 5]
```
```js
function deepFlat(arr) {
    return arr.reduce((pre, item) => pre.concat(Array.isArray(item) ? deepFlat(item) : item), [])
}
```
:::
::: tab label=计数器
> 期望：
```js
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
console.log(getShowTimes(names)); // { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
```
```js
function getShowTimes(arr) {
    return arr.reduce((pre, item) => {
        if (pre[item]) {
            pre[item]++;
        } else {
            pre[item] = 1;
        }
        return pre;
    }, {})
}
```
:::
::: tab label=按属性分类
> 期望：
```js
const arr = [
    {
        name: '小黄',
        age: 18
    },
    {
        name: '小张',
        age: 15
    },
    {
        name: '小李',
        age: 18
    },
    {
        name: '小秋',
        age: 15
    },
    {
        name: '小冬',
        age: 16
    },
]

console.log(classify(arr)); // {18:['小黄', '小李'], 15: ['小张', '小秋'], 16: ['小冬']}
```
```js
function classify(arr) {
    return arr.reduce((pre, item) => {
        if (pre[item.age]) {
            pre[item.age].push(item.name);
        } else {
            pre[item.age] = [item.name];
        }
        return pre;
    }, {});
}
```
:::
::: tab label=数组去重
> 期望：
```js
let arr = [1, 2, 3, 1, 4, 1];
console.log(noRepeat(arr)); // [1, 2, 3, 4]
```
```js
function noRepeat(arr) {
    return arr.reduce((pre, item, index) => {
        if (!pre.includes(item)) {
            pre.push(item);
        }
        return pre;
    }, [])
}
```
* 简易版
```js
function noRepeat(arr) {
    return Array.from(new Set(arr));
}
```
:::
::: tab label=连环promise
> 期望：
```js

const fn1 = (i) => new Promise((resolve) => setTimeout(() => resolve(i + 1), 1000));
const fn2 = (i) => new Promise((resolve) => setTimeout(() => resolve(i + 1), 1000));
const fn3 = (i) => new Promise((resolve) => setTimeout(() => resolve(i + 1), 2000));
const fn4 = (i) => new Promise((resolve) => setTimeout(() => resolve(i + 1), 1000));
goPromise([fn1, fn2, fn3, fn4]); // 14

```
```js
function goPromise(arr) {
    arr.reduce((pre, item) => pre.then(item), Promise.resolve(11))
}
```
:::
::: tab label=连环log
> 期望
```js
const chain = new Chain();
chain.log(1) // 打印1
.wait(2000)  // 暂停2秒
.log(2)      // 打印2
.wait(3000)  // 暂停3秒
.log(3)      // 打印3

console.log('同步代码'); // 先走
```
* 同步实现法
```js
// 同步代码是最后走
class Chain {
    log(i) {
        console.log(i);
        return this;
    }
    wait(time) {
        let end = +new Date() + time;
        while (+new Date() < end) {}
        return this;
    }
}
```
* 异步代码(有bug)
```js
class Chain {
    fns = [];
    constructor() {
        setTimeout(() => {
            this.fns.reduce((pre, item) => pre.then(item), Promise.resolve());
        });
    }

    log(i) {
        const fn = () => new Promise(resolve => {
                console.log(i);
                resolve();
            });
        this.fns.push(fn);
        return this;
    }
    wait(time) {
        const fn = () => new Promise(resolve => setTimeout(() => resolve(), time));
        this.fns.push(fn);
        return this;
    }
}
```
:::
::: tab label=连环log改良版
> 原BUG：事件轮询只能查一轮
```js
const chain = new Chain();
chain.log(1) // 打印1
    .wait(2) // 暂停2秒
    .log(2)  // 打印2
    .wait(3) // 暂停3秒
    .log(3)  // 打印3

// 第二轮事件轮询加进去的任务就不生效
setTimeout(() => chain.wait(3).log(3), 1000);

console.log('同步代码'); // 先走
```
```js
class Chain {
    cThen = Promise.resolve();

    log(i) {
        const fn = () => new Promise(resolve => {
            console.log(i);
            resolve();
        });

        this.cThen = this.cThen.then(fn);
        return this;
    }

    wait(time) {
        const fn = () => new Promise(resolve => setTimeout(() => resolve(), time * 1000));

        this.cThen = this.cThen.then(fn);
        return this;
    }
}
```
:::
::::
### reduceRight
::: tip
* 作用：从右往左迭代数组，得出迭代结果
* 调用：arr.reduceRight((pre, item, index, arr) => pre, pre)
* 入参：Function, any
* 返回：any
:::
```js
const arr = [1, 2, 3, 4];

console.log(arr.reduce((pre, item, index, arr) => pre + item, '')); // 1234
console.log(arr.reduceRight((pre, item, index, arr) => pre + item, '')); // 4321
```

## 迭代器
### keys
::: tip
* 作用：拿到所有项的键值（迭代器的形式）
* 调用：arr.keys()
* 返回：Iterator
* tip：**和Object.keys(arr) 有区别**
:::
```js
const arr = [1, 2, ,4];
console.log(arr.keys().next().value); // 0
console.log([...arr.keys()]); // [0, 1, 2, 3]

// Object.keys(arr)会忽略掉没有值的keys
console.log(Object.keys(arr)); // ['0', '1', '3']
```
### entries
::: tip
* 作用：将数组以`迭代器`的形式返回
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
### values
::: tip
* 作用：拿到所有的值，**以迭代器方式返回**
* 调用：arr.values()
* 返回：Iterator
:::
```js
const arr = [1, 10, 100, 1000];
console.log(arr.values().next().value); // 1
```
### Symbol.iterator
::: tip
* 作用：将数组返回成一个迭代器
* 调用：arr[ Symbol.iterator ] ()
* 返回：Iterator
* tip：默认情况下，实际效果和values() 一样
:::
```js
const arr = [1, 10, 100];
const arrItt = arr[Symbol.iterator]();
const values = arr.values();

console.log(arrItt.next().value); // 1
console.log(values.next().value); // 1
```
