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

// ES5的转换方法
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