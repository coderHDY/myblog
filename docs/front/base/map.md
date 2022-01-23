---
title: map
date: 2021-11-29
---
## Map和Object比较
::: warning Map和Object
|          |   Map                           |                     Object                         |
|    ---   |  ---                            |                        ---                         |   
|  原型链   |   Map原型链上默认是没有额外的属性的  |   Object可能会从原型上继承属性                         |
|  键的类型 |   Map键可以是任意类型              |  Object的键只能是String或Symbol                      |
|  size    |  直接取 map.size                 | Object.getOwnPropertyNames().length或keys().length |
|  迭代   |  iterator，直接for循环或forEach  |  Object.getOwnPropertyNames()或keys()，然后再循环迭代   |
|  性能   | 频繁增删性能更高  |  无优化     |
:::
:::: tabs
::: tab label=原型链
* Object可能有原型链属性
```js
const obj1 = { name: 'hdy' };
const obj = Object.create(obj1);

for (let i in obj) {
    console.log(i); // name
}
```

* Map无原型链属性
```js
const map = new Map();
for (let i in map) {
    console.log(i); // 无
}
```
:::
::: tab label=键的类型
* Object只有String或Symbol
```js {7-11}
const obj = {
    '1': 'hdy',
    '2': '张三',
    '3': '赵四',
    '4': '王五',
    index: 0,
    [Symbol.iterator]: function() {
        return {
            next: () => this.index++ > 3 ? { value: 'none', done: true } : { value: this[this.index], done: false }
        }
    }
}

for(let val of obj) {
    console.log(val); // hdy 张三 赵四 王五
}
```
* Map任意类型都可以
```js {2,3}
const fn = function() {};
const map = new Map([[fn, '1']]);
map.set(undefined, '我是空');
console.log(map);         // Map(2) { [Function: fn] => '1', undefined => '我是空' }
console.log(map.get(fn)); // 1
console.log(map.get()); // 我是空
```
:::
::: tab label=size/迭代
* Object需要迭代手动查size
    1. 所有自身属性：Object.getOwnPropertyNames(obj)
    2. 所有自身可迭代属性：Object.keys(obj)
    3. 所有包括原型链可迭代属性：for...in
```js{13-14,16-17,19-22}
const father = { name: 'father' };
const child = Object.create(father, {
    age: {
        value: 18,
        enumerable: true
    },
    height: {
        value: 180,
        enumerable: false
    }
})

// 所有自身属性
console.log(Object.getOwnPropertyNames(child)); // [age, height]

// 所有自身可迭代属性
console.log(Object.keys(child)); // [age]

// 所有包括原型链可迭代属性
for (let key in child) {
    console.log(key); // name age
}
```
* Map直接拿size
```js{2}
const map = new Map([['name', 'hdy'],['age', 18]]);
console.log(map.size); // 2

// Map本身就是可迭代对象（有Symbol.iterator属性）
for (let [key, value] of map) {
    console.log(key); // name age
}
```
:::
::: tab label=性能
* Map底层哈希表，直接通过键值计算内存地址，直接取
* Object通过属性名相同对比得到值，频繁增删性能不好
:::
::::

## 增删改查
### size
::: tip
* 作用：显示数组长度
* 使用：map.size
* 返回：Number
:::
```js
const map = new Map([['name', 'hdy'], ['age', 18]]);
console.log(map.size); // 2
```
### set
::: tip
* 作用：map对象**添加一个键值对**
* 调用：map.set(key, value)
* 入参：any, any
* 返回：Map(本对象)
* tip：因为返回的是本对象，所以可以链式调用
:::
* 使用
```js
const map = new Map([['name', 'hdy']]);

console.log(map.set('age', 18));      // Map(2) { 'name' => 'hdy', 'age' => 18 }
console.log(map.set('name', '张三')); // Map(2) { 'name' => '张三', 'age' => 18 }
```
* 链式调用
```js
const map = new Map();

map.set('name', 'hdy').set(undefined, '不知道是什么属性');
console.log(map); // Map(2) { 'name' => 'hdy', undefined => '不知道是什么属性' }
```
### get 
::: tip get
* 作用：用键取值
* 调用：map.get(key)
* 入参：any
* 返回：any
:::
```js{3}
const fn = () => {};
const map = new Map([[fn, ]]);
console.log(map.get(fn)); // undefined
```
### has
::: tip
* 作用：用键判断是否存在该项
* 调用：map.has(key)
* 入参：any
* 返回：any
:::
```js
const map = new Map([['name', 'hdy']]);
console.log(map.has('name')); // true
console.log(map.has('age')); // false
```
### delete
::: tip
* 作用：通过键删除项
* 调用：map.delete(key)
* 入参：any
* 返回：Boolean(是否删除成功)
:::
```js
const map = new Map([['name', 'hdy']]);
console.log(map.delete('name')); // true
console.log(map.delete('name')); // false
```
### clear
::: tip
* 作用：清空map
* 调用：map.clear()
* 返回：undefined
:::
```js
const map = new Map([['name','hdy'],['age',18]]);
console.log(map.size); // 2
map.clear();
console.log(map.size); // 0
```
## 迭代器
### keys
::: tip
* 作用：拿到所有的键的迭代器
* 调用：map.keys()
* 返回：Iterator
:::
```js
const map = new Map([['name', 'hdy'], ['age', 18]]);
console.log(map.keys().next().value); // 'name'
```
### values
::: tip
* 作用：拿到所有的值的迭代器
* 调用：map.values()
* 返回：Iterator
:::
```js
const map = new Map([['name', 'hdy'], ['age', 18]]);
console.log(map.values().next().value); // 'hdy'
```
### entries
::: tip
* 作用：拿到所有键值对的迭代器
* 调用：map.entries()
* 返回：Iterator
:::
```js
const map = new Map([['name', 'hdy'], ['age', 18]]);
const entries = map.entries();
console.log(entries.next().value); // ['name', 'hdy']
```
### forEach
::: tip
* 作用：按顺序遍历map所有元素，执行对应函数
* 调用：map.forEach(function(value, key, map) {}[, thisArg])
* 入参：Function[, Object]
* 返回：undefined
:::
```js{2}
const map = new Map([['name', 'hdy'], ['age', 18]]);
map.forEach((value, key, map) => console.log(`${key}:${value}`)); // name:hdy age:18
```
### Symbol.iterator
::: tip
* 作用：拿到Map的迭代器对象
* 调用：map[Symbol.iterator] ()
* 返回：Iterator
* tip：默认是entries函数
* tip：for...of调用的是Symbol.iterator，所以也是拿的entries函数返回类型
:::
:::: tabs
::: tab label=使用
```js
const map = new Map([['name', 'hdy'], ['age', 18]]);
const iterator = map[Symbol.iterator]();
console.log(iterator.next().value); // ['name', 'hdy']
```
:::
::: tab label=与entries作用相同
```js
const map = new Map([['name', 'hdy'], ['age', 18]]);
console.log(map.entries());           // [Map Entries] { [ 'name', 'hdy' ], [ 'age', 18 ] }
console.log(map[Symbol.iterator]());  // [Map Entries] { [ 'name', 'hdy' ], [ 'age', 18 ] }
```
:::
::: tab label=for...of
```js
const map = new Map([['name', 'hdy'], ['age', 18]]);
for (let [key, value] of map) {
    console.log(`${key}:${value}`); // name:hdy age:18
}
```
:::
::::
## WeakMap
::: tip 
* WeakMap出现是为了解决内存泄露问题
>键为对象的时候，存入Map就相当于使用了一次这个对象的引用。假如这个对象已经被删除了（：外部已经赋值null了，或者dom元素删除了），而这个Map里面还是拿着这个对象的引用，那么这个对象就永远也不会被垃圾回收机制删除掉。除非手动清除Map
* **WeakMap键必须是对象**，因为就是为了解决这个问题的：WeakMap拿着这个对象的弱引用，假如这个对象被删除了，这个弱引用的key不算一次引用，计数器将正确执行垃圾回收机制，清除对象，并且key将失效。**所以WeakMap不能枚举**
* 拥有方法：get、set、has、delete
:::