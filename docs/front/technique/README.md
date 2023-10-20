---
title: js代码技巧
date: 2021-12-04
---

## md5加密  

<md5 />

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
## JSON-server
### JSON-server 的安装和用法
```js
// install
npm install -g json-server

// db.json
{
    "songs":[
      { "id": 1, "name": "Baby"}
    ],
    "comments": [
      { "id": 1, "content": "nice" }
    ]
  }

// start server
json-server --watch db.json
```
>GET http://localhost:3000/songs/1 会返回 { "id":1,"name":"Baby"} 根据songs/1路由1进行筛选
>POST、PUT、PATCH、DELETE 操作会改变db.json文件的内容

:tomato: Routes 规则-过滤
```js
{
  "songs": [
    { "name": "吻别", "artist": "张学友" },
    { "name": "燃烧我的卡路里 ", "artist": "火箭少女 101" },
    { "name": "麻雀", "artist": "李荣浩" }
  ],
  "comments": [
      { "id": 1, "content": "nice" }
    ]
}
GET /songs?artist=张学友
GET /songs?artist=张学友&arttist=李荣浩
GET /comments?author.id=1
```
:tomato: Routes 规则-翻页与排序
```js
// 以_开头的是json-server的保留字
// 分页
GET /songs?_page=2
GET /songs?_page=1&_limit=15

// 排序
GET /songs?_sort=id&_order=asc

// 多字段排序
GET /songs/_sort=id,name&_order=desc,asc
```
:tomato: Routes 规则-查询
```js
// operators:
// _gte _lte _ne 大约小于等于
GET /users?age_gte=10&age_lte=20 
GET /users?age_ne=18

// _like 支持正则
GET /songs?name_like=爱

// q 全局搜索
GET /songs?q=喜欢
```
:tomato: 自定义 routes
- 更贴近后端接口
```js
// routes.json
// 左边是实际访问的路径，右边是资源的路径
{
  "/api/*": "/$1",
  "/:resource/:id/show": "/:resource/:id", 
  "/posts/:category": "/posts?category=:cagegory",
  "/articles\\?id=:id": "/posts/:id"
}

// 添加启动参数：json-server db.json --routes routes.json
/api/posts // -> /posts
/api/posts/1  // -> /posts/1
/posts/1/show //  -> /posts/1
/posts/javascript // -> posts?category=javascript
/articles?id=1 // -> /posts/1
```
:tomato: 添加 middleware

- 统一定制个性化请求

```js
// my-middleware.js
module.exports= (req, res ,next) => {
  res.header('X-token',"xxxxx")
  next()
}
// 启动
json-server db.json --middlewares ./my-middleware.js
```
### Mock.js生成随机数据 

当数据量过大时候，我们不能手写庞大数据量的db.json,json-server也支持js对象。

快速生成随机数据-Mock.js

```js
// index.js
const Mock = require('mock.js')
module.exports= () => {
  const data = Mock.mock({
    'user|1000': [{{
      'id|+1': 1,
      'name': '@first @last'
    }]
  })
  return data
}
// 启动
json-server index.js --middlewares ./my-middleware.js
```
### JSON-Server的基本使用

搭配Mock.js 生成随机数据接口

:tomato: 查询歌单列表

新建文件index.js
```js
const Mock = require('mockjs')

module.exports= ()=> {
    const data = Mock.mock({
        'playlists|100': [{
            'id|+1':1,
            'name': '@title',
            'cover': '@image'
        }]
    })
    return data
}
```
新建routes.json

```json
// /api/music/ 下面所有的请求转发到去掉这个前缀的下面
// $1 表示任意的字符
{
    "/api/music/*": "/$1"
}
```
启动 `json-server index.js --routes routes.json`

访问 `http://localhost:3000/api/music/playlists`可以获得100条数据

:tomato: 查询分页的歌单

修改routes.json

```json
{
    "/api/music/*": "/$1",
    "/playlists\\?limit=:limit&offset=:offset": "/playlists?_start=:offset&_limit=:limit"
}
```

启动 `json-server index.js --routes routes.json`

访问 `http://localhost:3000/api/music/playlists?limit=10&offset=20`从20开始返回10条数据

:tomato: 新增一个歌单

```js
// 用curl模拟一下请求 参数{"name":"夜曲","cover":"xxxx"}
curl localhost:3000/api/music/playlists -X POST -d '{"name":"夜曲","cover":"xxxx"}' -H 'Content-Type: application/json'
```
:tomato: 修改一个歌单

```js
curl localhost:3000/api/music/playlists/101 -X PUT -d '{"id":101,"name":"月半小夜曲","cover":"xxxx"}' -H 'Content-Type: application/json'
```
:tomato: 删除一个歌单

```js
curl localhost:3000/api/music/playlists/101 -X DELETE  -H 'Content-Type: application/json'
```
以上也可以用postman模拟请求

#### 给所有的响应头添加header

新建middleware.js

```js
json-server index.js --routes routes.json --middleware middleware.js
```