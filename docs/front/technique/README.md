# js代码技巧
## 易懂的代码
:::: tabs
::: tab label=属性
* 找常见的对应**名词性单词**
```js
const email = '986005715@qq.com';
```
:::
::: tab label=布尔值
* is/has等**谓语**开头
```js
const me = {
    isStudent: true,
    hasBook: true,
    isDrunkard: false,
    hasGirlFriend: true
}

function isGoodStudent(people) {
    return people.isStudent && people.hasBook && people.isDrunkard && !people.hasGirlFriend;
}

console.log(isGoodStudent(me)); // false
```
:::
::: tab label=功能性函数
* 每个函数尽量**只处理一件事情**，易读、易复用
* 命名用do/get等**动词开头**
```js
function getEmailCount(people) {
    return people.email?.match(/(.*?)@/)[1];
}

const me = {
    email: '986005715@qq.com'
}
console.log(getEmailCount(me)); // 986005715
```
:::
::: tab label=功能函数设计
* 如果一个函数入参有布尔值，说明它应该被优化成一个或两个函数，判断后调用
```js{2-6}
// 可优化
function addBook(reader) {
    if (reader.isStudent) {
        return reader.book = 'JS红宝书';
    }
}

const me = {
    isStudent: true
}
addBook(me);
console.log(me.book); // JS红宝书
```
* 优化
```js{1-3}
function addBook(reader) {
    return reader.book = 'JS红宝书';
}
const me = {
    isStudent: true
}

if (me.isStudent) {
    addBook(me);
}
console.log(me.book); // JS红宝书
```
:::
::: tab label=尽早return
* 多情况判断的函数，先return掉错误判断，让主要逻辑更加线性
```js
function addBoyFriend(people) {
    if (people.sex === '男') { return; }
    if (people.hasPartner) { return; }

    people.boyFriend = 'hdy';
    people.money += 100000;
    people.freeTime -= 60 * 60 * 3;
    people.mood = 'happy';
    people.hasPartner = true;
}
```
:::
::: tab label=数字
* 复杂的计算尽量在定义时写出计算过程
```js
const waitTime = 60 * 60 * 30;
setTimeout(() => console.log('暂停了30分钟'), waitTime);
```
:::
::::
## map替代switch
::: tip
* 大部分业务场景下，map都能够替换switch，写出**更优雅**的代码
:::
:::: tabs
::: tab label=switch
* 缺点：扩展多了代码很乱
```js
const netCode = '404';
function dealCallBack(code) {
    switch (+code) {
        case 200 : {
            return console.log('请求成功');
        }
        case 304 : {
            return console.log('请求重定向');
        }
        case 404 : {
            return console.log('网页不存在');
        }
        case 500 : {
            return console.log('服务器错误');
        }
    }
}

dealCallBack(netCode); // 网页不存在
```
:::
::: tab label=map
* 优势：重点处理逻辑和情况存储分开，扩展性更强
```js
const netCode = '500';
const CALLBACK_MAP = new Map([
    [200, () => console.log('请求成功')],
    [304, () => console.log('请求重定向')],
    [404, () => console.log('网页不存在')],
    [500, () => console.log('服务器错误')],
]);

function dealCallBack(code) {
    if (CALLBACK_MAP.has(+code)) {   
        CALLBACK_MAP.get(+code)();
    }
}

dealCallBack(netCode); // 服务器错误
```
:::
::::