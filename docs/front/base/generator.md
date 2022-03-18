---
title: generator
date: 2021-12-15
---
## 可迭代协议
::: tip 可迭代协议
* 可迭代协议规定了【for...of】迭代的条件是自身或原型链上有[Symbol.iterator]方法
:::
```js
const arr = [1, 2, 3];
console.log(arr[Symbol.iterator]); // [Function: values]
console.log(arr[Symbol.iterator]()); // Object [Array Iterator] {}

const obj = {};
console.log(obj[Symbol.iterator]); // undefined
```
## 迭代器协议
::: tip 迭代器协议
* 迭代器协议规定迭代器函数必须返回一个[生成器对象](./generator.html#生成器)：包含【function next()】的【对象】
* next() 返回一个指定属性的对象： {done: bool, value: any} 
:::
::: warning
* **首次执行next()的时候才开始进入执行函数，因此首次next入参无效**
* 后续的next会作为yield表达式的值传入
:::
```js
const arr = [1, 2, 3];

console.log(arr[Symbol.iterator]().next()); // { value: 1, done: false }
```

* Object不是可迭代对象，改写成可迭代对象(按照可迭代协议给对象增加迭代器)
>遍历自身所有可枚举属性
```js{4,13-15}
const obj = {
    name: 'hdy',
    age: 18,
    [Symbol.iterator]() {
        let vals = Object.values(this);
        let idx = 0;
        return {
            next:() => idx < vals.length ? {value: vals[idx++], done: false} : {value: undefined, done: true}
        }
    }
};

for (let value of obj) {
    console.log(value); // hdy 18
}


for (let value of obj) {
    console.log(value); // hdy 18
}
```
>利用`生成器`函数
```js{4-9}
const obj = {
    name: 'hdy',
    age: 18,
    *[Symbol.iterator]() {
        const vals = Object.values(this);
        for (let val of vals) {
            yield val;
        }
    }
}
for (let value of obj) {
    console.log(value);
}
```
## function*
::: tip function*
* 作用：声明一个生成器函数，
* 返回：返回可迭代对象【generator】【生成器】
:::
:::: tabs
::: tab label=使用
```js
function* getGenerator() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}

const gen = getGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```
:::
::: tab label=循环生成
```js
function* getGenerator() {
    for (let i = 0; i < 4; i++) {
        yield i;
    }
}

const gen = getGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```
:::
::: tab label=执行顺序
* 通过暂停代码可以看出：
    1. function* 只是返回了生成器，并没有执行内部代码
    2. generator.next()只执行到yield后面的表达式。本例中：【1】
```js{2,8,13,16-17,22,25}
function* getGen() {
    console.log('函数开始');

    // 等待两秒再 yield
    let end = Date.now() + 2000;
    while (Date.now() < end) {}
    
    yield 1;
    
    // 等待两秒再执行完
    end += 2000;
    while (Date.now() < end) {}
    console.log('函数完毕');
}

console.log('生成生成器');
const gen = getGen();

// 等待两秒再执行next，没有打印【函数开始】，说明 getGen 并没有执行内部代码
let end = Date.now() + 2000;
while (Date.now() < end) {}
console.log(gen.next().value);

// 函数内部又等了两秒，说明next只执行到 yield 后面的表达式【1】
console.log(gen.next().value);
```
:::
::::
## 生成器
::: tip 生成器
* 生成器对象由generator 【function*】返回，符合可迭代协议和迭代协议。
* 有以下原型方法：
    1. next
    2. return
    3. throw
:::
* 时间生成器：每次执行都生成当前的时间
```js
function* generator() {
    while(true) {
        yield new Date().toLocaleString()
    }
}
// generator返回的 生成器gen
const gen = generator();
console.log(gen.next().value);
```
### next
::: tip
* 作用：调用生成器的下一个值，并且可以传值
* 调用：generator.next(any)
* 入参：any
* 返回：{done: bool, value: any}
:::
::: warning 入参
* 第一次调用next的入参无效
:::
:::: tabs
::: tab label=使用
```js
const arr = [1, 2, 3];

console.log(arr[Symbol.iterator]().next()); // { value: 1, done: false }
```
:::
::: tab label=传值
* 第一次调用next的入参无效
```js{4-5,14}
function* generator(num1) {
    
    // 第一次next只执行到num1，并没有执行【=】号。第二次next执行了【=】号，所以num2拿的是第二次next的入参
    const num2 = yield num1;
    const num3 = yield num2;
    console.log(num3);
}

const gen = generator(1);

// 入参无效
console.log(gen.next(2).value); // 1

console.log(gen.next(3).value); // 3
```
:::
::::

### return
:::tip return
* 作用：返回给定值并结束生成器
* 调用：generator.return(value)
* 入参：any
* 返回：{done: true, value: any}
:::
:::: tabs
::: tab label=使用
```js{12-13}
function* generator() {
    while(true) {
        let now = new Date();
        yield now;
    }
}

const nowGen = generator();

console.log(nowGen.next()); // { value: 2021-12-15T04:52:08.520Z, done: false }
console.log(nowGen.next()); // { value: 2021-12-15T04:52:08.523Z, done: false }
console.log(nowGen.return()); // { value: undefined, done: true }
console.log(nowGen.next()); // { value: undefined, done: true }
```
:::
::: tab label=入参
* 同next规则
```js{10-13}
function* generator(value) {
    while(true) {
        value = yield value;
    }
}

const gen = generator(0);
console.log(gen.next(1).value); // 0

console.log(gen.next(2).value); // 2
console.log(gen.next(3).value); // 3
console.log(gen.return(4).value); // 4
console.log(gen.next(5).value); // undefined
```
:::
::::
### throw
::: tip
* 作用：向生成器抛出异常
* 调用：generator.throw(new Error(tip))
* 入参：Error
* 返回：{value: any, done: bool}
:::
```js
function* generator() {
    let value = 1;
    while(true) {
        try {
            value = yield value;
        } catch(e) {
            console.log(e); // Error: 自定义错误
        }
    }
}

const gen = generator();

console.log(gen.next().value); // 1
console.log(gen.throw(new Error('自定义错误'))); // { value: 1, done: false }

console.log(gen.next()); // { value: undefined, done: false }
```