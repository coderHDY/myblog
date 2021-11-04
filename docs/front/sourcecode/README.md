# 深浅拷贝
## 介绍
* js不同类型的变量存储方式是不一样的，分别为 **值类型** 和 **引用类型**
* 所以在赋值的时候，let a = b;根据b的不同值类型，会有不同的拷贝效果。
:::: tabs
::: tab label=值类型
* 值类型有:
    1. String
    2. Number
    3. Boolean
    4. undefined
* 变量存的就是值，拷贝完就互不影响了
```js
let b = 1;
let a = b;

// b 的改变是不会影响到 a 的
b = 2;
console.log(a); // 1
```
<img src="./assets/qiankaobei.png" style="width: 300px">
:::

::: tab label=引用类型
* 引用类型有：
    1. Object
    2. Function
    3. Array
    4. null
* 变量存的实际上是一个堆内存的内存地址，就算赋值也会互相影响的
![对象浅拷贝](./assets/qiankaobeiduixiang.png)
```js
let a = {
    name: '张三',
    age: 18
};
let b = a;

// a 和 b 改的是同一块内存，所以会互相影响
a. name = '李四';
console.log(b.name) // 李四
```
:::
::::
## 目标
::: tip 目标
```js
let a = {
    name: '张三',
    age: 18,
    books: [
        'js红宝书',
        'js蝴蝶书'
    ]
}
let b = deepClone(a);

// 深拷贝后不互相影响
a.name = '李四';
a.books[1] = '你不知道的js';
console.log(b.name); // 张三
console.log(b.books[1]) // js蝴蝶书
```
:::
## 思路一
* 所以要让对象也能实现赋值以后互不影响，就需要**深拷贝函数**
* 主要思路：
    1. typeof 判断赋值类型，是是值类型就直接赋值，不是值类型就进一步判断再赋值
    2. typeof 判断是引用类型的有 function、object，function是函数可以不处理，所以只要处理object
    2. typeof 判断 object 可能是[Function, Array, null],需要区别处理
    3. 可能会有对象嵌套或嵌套数组，所以需要递归处理

### 实现
```js
function deepClone(obj) {
    if (typeof obj === 'object' && obj !== null) {

        // 判断处理typeof不能区别object和array的问题
        let newObj = Array.isArray(obj) ? [] : {};

        for(let key in obj) {

            // 处理可能是原型链上面的属性
            if (obj.hasOwnProperty(key)){

                // 递归实现
                newObj[key] = deepClone(obj[key]);
            }
        }
        return newObj;
    }

    // 本身就是值拷贝
    return obj;
}
```

## 思路二
* 利用JSON.的两个语法，直接深层的取出值，将其完全转化成字符串，再转化回来
### 实现
```js
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
```
