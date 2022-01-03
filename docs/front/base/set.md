---
title: Set
date: 2021-11-26
---
## 构造器
::: tip 构造器
* 作用：构造Set
* 调用：new Set([iteranbe])
* 入参：**可迭代对象或空/null**
:::
```js
const set = new Set([1, 2]);
console.log(set1); // Set {1, 2}
```
```js
const set = new Set(undefined);
console.log(set); // Set{}
```
```js
const entries = Object.entries({name: 'hdy', age: 18});
console.log(new Set(entries)); // Set(2) { [ 'name', 'hdy' ], [ 'age', 18 ] }
```
* 必须传入可迭代对象，否则报错
```js
const set = new Set(1); // error
const set = new Set({name: 'hdy'}); // error
```
## size
::: tip size
* 作用：表述set存储元素个数
* 调用：set.size
:::
```js
const set = new Set([1, 3]);
console.log(set.size); // 2

set.add(4);
console.log(set.size); //3
```
## Symbol.iterator
::: tip Symbol.iterator
* 作用：将set以迭代器形式返回
* 调用：set[Symbol.iterator] ()
* 返回：Iterator
* tip：底层和values作用一样
:::
```js{2}
const set = new Set([1, 2, {}]);
const iterator = set[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // {}
```
## values
::: tip values
tip：作用以及底层都和[Symbol.iterator](./set.html#symbol-iterator)一样
:::
```js{2}
const set = new Set([1, 2]);
const values = set.values();
console.log(values.next().value); // 1
```
## add
::: tip add
* 作用：在set末尾添加值
* 调用：set.add(any)
* 入参：any(必须)
* 返回：set引用
* tip：添加重复值不生效
:::
```js
const set = new Set([1]);
set.add('吃').add('饭');
console.log(set.size); // 3

// 不生效
set.add('吃').add('饭');
console.log(set.size); // 3
```
## clear
::: tip clear
* 作用：清空set
* 调用：set.clear()
* 返回：undefined
:::
```js
const set = new Set([1, 2, 3]);
console.log(set.size); // 3
set.clear();
console.log(set.size); // 0
```
## delete
::: tip delete
* 作用：删除指定元素
* 调用：set.delete(element)
* 入参：any
* 返回：**Boolean(是否删除成功，可能没有该元素)**
:::
```js
const set = new Set();
const obj = {
    name: 'hdy'
}
set.add(obj);

console.log(set.delete(obj)); // true
console.log(set.delete(obj)); // false
```
## entries
::: tip entries
* 作用：以[[值， 值]]的形式返回`迭代器`
* 调用：set.entries()
* 返回：Iterator
:::
```js
const set = new Set([1, 2, 3]);
console.log(set.entries().next().value); // [1, 1]
console.log([...set.entries()]); // [[1, 1], [2, 2], [3, 3]]
```
## has
::: tip has
* 作用：判断一个set中是否包含某个值
* 调用：set.has(value)
* 入参：any
* 返回：Boolean
:::
```js
const set = new Set([1, 2]);
console.log(set.has(2)); // true
console.log(set.has(3)); // false
console.log(set.has()); // false

// 增加一个空值
set.add();
console.log(set.has()); // true
```
* 对象判断的是引用是否相同
```js
const set = new Set();
const obj = { name: 'hdy' };
const obj2 = { name: 'hdy' };

set.add(obj);
console.log(set.has(obj)); // true
console.log(set.has(obj2)); // false
```
## forEach
::: tip forEach
* 作用：遍历set
* 调用：set.forEach(function(item, index, set){}, thisArg)
* 入参：Function[, Object]
* 返回：undefined
:::
```js
const set = new Set([1, , 3]);
set.forEach((item, index, set) => console.log(item));
// 1 undefined 3
```