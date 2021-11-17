# JS原生
## 深浅拷贝
### 介绍
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
### 目标
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
### 思路一
* 所以要让对象也能实现赋值以后互不影响，就需要**深拷贝函数**
* 主要思路：
    1. typeof 判断赋值类型，是是值类型就直接赋值，不是值类型就进一步判断再赋值
    2. typeof 判断是引用类型的有 function、object，function是函数可以不处理，所以只要处理object
    2. typeof 判断 object 可能是[Function, Array, null],需要区别处理
    3. 可能会有对象嵌套或嵌套数组，所以需要递归处理

#### 实现
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

### 思路二
* 利用JSON.的两个语法，直接深层的取出值，将其完全转化成字符串，再转化回来
#### 实现
```js
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
```

## 模板字符串

### 介绍
* [模板字符串](../base/string.html#模板字符串)是ES6的新特性，增加了String类型的灵活性，减少了很多以字符串拼接的方式来实现的多样化字符串的书写难度。
* 主要特性有：
    1. 可换行
    2. 可拼接表达式
* 手写模板字符串主要是要实现它的拼接能力
```js
const obj = {
    name: '西瓜皮儿',
    age: 18,
    books: [
        'js红宝书',
        'js蝴蝶书'
    ],
    parents: {
        father: '西瓜',
        mather: '农民伯伯'
    }
}
console.log(`我叫${obj.name},我喜欢看${obj.books[1]},我爸是${obj.parents['father']}`);
// 我叫西瓜皮儿,我喜欢看js蝴蝶书,我爸是西瓜
```
### 思路
1. 需要以变量的形式传入obj对象，否则无法找到对象
2. 解析需要以 . 和 [] 分出各级变量名
3. 最后统一以[]的形式找子属性，否则无法找到数组 books.1 ，数组 books['1'] 也能完美找到 books[1]
::: tip 期望结果
```js
let str = '我叫${name},我喜欢看${books[1]},我爸是${parents.father}'
template(obj, str);
// 我叫西瓜皮儿,我喜欢看js蝴蝶书,我爸是西瓜
```
:::
### 实现
```js
function template(obj, str) {
    const reg1 = /\$\{(.+?)\}/g; // 解析模板字符串
    const reg2 = /\[(.+?)\]/g;  // 解析 books[1] 的写法

    // 用正则取出模板字符串
    return str.replace(reg1, (_, match) => {

        // 将 book[1] 的写法全部换成 book.1 的链式写法
        return match.replace(reg2, (_, match2) => {
            return '.' + match2;
        })

        // 用 . 分成属性数组链
        .split('.')

        // 用 reduce 从 obj 上获取最终要展现的值
        .reduce((cObj, item) => {
            return cObj[item];
        }, obj)
    })
}
```
* 解析过程
:::: steps
::: step 
* 取出模板字符串
```js
'我叫${name},我喜欢看${books[1]},我爸是${parents.father}'
->
'name'
'books[1]'
'parents.father'
```
:::

::: step
* 全部换成 . 式写法
```js
'name'
'books[1]'
'parents.father'
-> 
'name'
'books.1'
'parents.father'
```
:::

::: step
* split变成属性的链式数组
```js
'name'
'books.1'
'parents.father'
->
['name']
['books', '1']
['parents', 'father']
```
:::

::: step
* 用reduce拿到obj身上最终要展示的属性
```js
obj['name']
obj['books']['1']
obj['parents']['father']
->
'西瓜皮儿'
'蝴蝶书'
'西瓜'
```
:::
::: step
* replace替换掉字符串
```js
'我叫${name},我喜欢看${books[1]},我爸是${parents.father}'
->
'我叫西瓜皮儿,我喜欢看js蝴蝶书,我爸是西瓜'
```
:::
::::