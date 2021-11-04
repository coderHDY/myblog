# 前端面试题整理

## 连续赋值
```js
var a = {
    n: 1,
    x: 3
}
a.x = a = { n: 2};
console.log(a.x);
```
* 理解(不一定完全正确)
```js
var a = {
    n: 1,
    x: 3
}

// 直接将等式拆成两个，中间的隔离
a.x = a;
a = { n: 2 };
console.log(a.x); // undefined
```
* 证明猜测
```js
var a = {
    n: 1,
    x: 3
}
var b = {n: 4};

// a.x = b = a = { n: 2};
// console.log(a.x); // undefined

// 解释
a.x = b; // a.x = {n: 4}
b = a; // a.x = {n: 4} // b 不指向这块内存了，a.x还指着他
a = {n: 2}; // a.x = undefined // a换了一块内存
console.log(a.x); // undefined
```