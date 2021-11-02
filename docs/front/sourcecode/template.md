# 模板字符串

## 介绍
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
## 思路
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
## 实现
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