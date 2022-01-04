---
title: fetch
date: 2021-12-20
---
## 对比ajax
::: tip 优势
* promise封装，更灵活简洁
* 支持service workers，应用面更广
* fetch的promise只要请求正常执行就不会reject，如果返回码不在200-299之间时ok属性为false
:::
## 服务器代码
```js{14-16,22-24}
const express = require('express');
const app = new express();
app.listen(8888, () => {
    console.log('listen 8888');
});

app.get('/', (req, res) => {
    res.cookie('name', 'hdy');
    res.send(`
<body>
    <div>首页</div>
    <script>
        setTimeout(() => {
            fetch('http://localhost:8888/data')
            .then(res => res.json())
            .then(res => console.log(res));
        }, 2000);
    </script>
</body>
`)});

app.get('/data', (req, res) => {
    res.send({name: 'fetch学习'});
})
```
## fetch()
### 入参1
::: tip
* 可以是url
* 可以是一个[Request对象](./fetch.html#request)
:::
:::: tabs
::: tab label=url
```js{1}
fetch('http://localhost:8888/data')
.then(res => res.json())
.then(res => console.log(res.data)); // '我是/data的返回数据'
```
```js
app.get('/data', (req, res) => {
    res.send({data: '我是/data的返回数据'});
})
```
:::
::: tab label=Request对象
```js{6}
const req = new Request('http://localhost:8888/data', {
    method: 'POST',
    body: JSON.stringify({name: 'hdy'}),
    headers: {'Content-Type': 'application/json'}
})
fetch(req).then(res => res.json())
.then(res => console.log(res.age)) // 18
```
```js
const bdParser = require('body-parser');
app.use(bdParser.urlencoded({extenable: false}));
app.use(bdParser.json());
app.post('/data', (req, res) =>{
    const name = req.body.name;
    const age = name === 'hdy' ? 18 : 0;
    res.send(JSON.stringify({age}));
})
```
:::
::::
### 入参2
::: tip 可选值
|key|作用|例|
|---|---|---|
|method|请求方法|GET|
|headers|请求的头信息，可以是Headers对象|{'Content-Type': 'application/json'}|
|body|请求体，可以是USVstring \| document \| FormData \| Blob \| URLSearchParams|JSON.stringify({name: 'hdy'})|
|mode|请求的模式|cors \| no-cors \| same-origin|
|credentials|在当前域名内自动发送 cookie ， 跨域必须提供这个选项|omit \| same-origin \| include|
|cache|cache模式|default \| no-store \| reload \| no-cache \| force-cache \| only-if-cached|
|redirect| redirect 模式:|follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误）, 或者 manual (手动处理重定向)|
|referrer|一个USVstring|no-referrer \| client【默认】\| URL|
|referrerPolicy|HTTP头部referer字段的值|no-referrer \| no-referrer-when-downgrade \| origin \| origin-when-cross-origin \| unsafe-url|
|integrity| 包括请求的subresource integrity|sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）|
:::
:::: tabs
::: tab label=method
* 默认是'get'，传表单用post，传文件用put
```js
fetch('http://localhost:8888/data', {
    method: 'POST'
}).then(res => res.json())
.then(res => console.log(res))
```
```js
// post被调用
app.post('/data', (req, res) =>{
    console.log('post调用');
    res.send({});
})

app.get('/data', (req, res) =>{
    console.log('get调用');
    res.send();
})
```
:::
::: tab label=headers/body
* 传表单需要改headers的 Content-Type
* 服务器解析body需要【body-parser】
```js
fetch('http://localhost:8888/data', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name:'hdy'})
})
.then(res => res.json())
.then(res => console.log(res)); // 你不是hdy，你是张三
```
```js
const bdParser = require('body-parser');
app.use(bdParser.urlencoded({extenable: false}));
app.use(bdParser.json());
app.post('/data', (req, res) => {
    const name = req.body.name;
    res.send({data: `你不是${name}，你是张三`});
})
```
:::
::: tab label=mode
* 跨域服务器1
```js{2,4-5}
fetch('http://localhost:8888/data', {
    mode: 'no-cors'
})
.then(res => res.json())
.then(res => console.log(res)); // 报错，取不到值
```
```js
// 重定向到别的服务器
app.get('/data', (req, res) => {
    res.redirect('http://localhost:8889');
})
```
* 重定向跨域服务器(完整版)
```js
const express = require('express');
const cookieParser = require("cookie-parser");

const app = new express();
app.use(cookieParser());

app.listen(8889, () => {
    console.log('listen 8889');
});

// 自定义跨域中间件
const allowCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

app.use(allowCors);//使用跨域中间件

app.get('/', function(req, res) {
    res.send({data: '跨域资源666'});
});
```
:::
::: tab label=不提供credentials
* 不提供的情况下同源默认携带cookies，不同源不携带cookies
* exoress写入res.cookie()不需要插件，读取req.cookies需要【cookie-parser】
* 不提供，跨域请求
```js{1,3}
fetch('http://localhost:8889/data')
.then(res => res.json())
.then(res => fetch('http://localhost:8889/data2'))
.then(res => res.json())
.then(res => console.log(res))
```
* 跨域接收服务器
```js{22,26-27}
const express = require('express');
const app = new express();

app.listen(8889, () => {
    console.log('listen 8889');
});

// 自定义跨域中间件
const allowCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

app.use(allowCors);//使用跨域中间件

const  cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/data', (req, res) => {
    res.cookie('name', 'zs');
    res.send({});
})
app.get('/data2', (req, res) => {
    const name = req.cookies.name;
    console.log(name); // undefined 【因为请求头根本就没有cookie】
    res.send({name});
})
```
:::
::: tab label=提供credentials
* 如果服务器端要新增cookie也必须设置这个属性
* 跨域请求
```js{1-3,5-7}
fetch('http://localhost:8889/data',{
    credentials: 'include'
})
.then(res => res.json())
.then(res => fetch('http://localhost:8889/data2',{
    credentials: 'include'
}))
.then(res => res.json())
.then(res => console.log(res)) // {name: zs}
```
* 跨域接收服务器不变
:::
::: tab label=redirect
* 不设置
```js
fetch('http://localhost:8888/data')
.then(res => res.json())
.then(res => console.log(res)) // {data: 我是重定向的数据22}
```
```js
app.get('/data', (req, res) => {
    res.redirect('/data2');
})
app.get('/data2', (req, res) => {
    res.send({data: '我是重定向的数据22'});
})
```
* 设置
```js
fetch('http://localhost:8888/data',{
    redirect: 'manual'
})
.then(res => console.log(res)) 
// {ok: false, type: "opaqueredirect" ,...}
```
```js
app.get('/data', (req, res) => {
    res.redirect('/data2');
})
app.get('/data2', (req, res) => {
    res.send({data: '我是重定向的数据22'});
})
```
:::
::::
### 上传数据
::: tip 上传多种数据
* JSON
* 表单文件
:::
:::: tabs
::: tab label=JSON上传
* 将对象转化为json -> post发到后端 -> 后端存储数据
```js{18-22}
const express = require('express');
const app = new express();
app.listen(8888,() => {
    console.log('listen 8888');
});

app.get('/', (req, res) => res.send(`
<body>
    <div>首页</div>

    <script>
        let user = {
            name: 'hdy',
            age:18
        };

        setTimeout(() => {
            fetch('http://localhost:8888/data', {
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user),
                method: 'POST'
            })
            .then(res => res.json())
            .then(res => console.log(res));
        }, 2000);
    </script>
</body>
`));

const bdParser = require('body-parser');
app.use(bdParser.urlencoded({extended: false}));
app.use(bdParser.json());
const fs = require('fs');
app.post('/data' , (req, res) => {
    const user = '\n' + JSON.stringify(req.body);
    console.log(user);
    fs.appendFileSync('./database.json', user, "utf-8");
    res.send({data: '上传成功'});
})
```
:::
::::
## Request
### 构造
::: tip Request
* 作用：创建一个新的Request请求对象
* 调用：new Request(input[, options])
* 入参：url | Request[, Object]
* **tip：入参同fetch()入参**
:::
* 禁止重定向
```js{1-3,6}
const req = new Request('http://localhost:8888/data',{
    redirect: 'error'
});
fetch(req)
.then(res => res.json())
.then(res => console.log(res)) // ERR_FAILED 302
```
```js{2}
app.get('/data', (req, res) => {
    res.redirect('/data2');
})
app.get('/data2', (req, res) => {
    res.send({data: '我是重定向的数据22'});
})
```
### 方法
* blob
::: tip blob
* 作用：解析blob文件
* tip：blob代表一个不可变、原始数据的类文件对象
* 调用：request.blob()
* 返回：promise
:::
* fromData
::: tip fromData
* 作用：当请求体是formData时进行读取解析
* 调用：request.fromData().then()
* 返回：promise
:::
* json
::: tip json
* 作用：当请求体是json数据时进行读取解析
* 调用：request.json().then()
* 返回：promise
:::
* text
::: tip text
* 作用：当请求体是String时进行读取解析
* 调用：request.text().then()
* 返回：promise
:::
## Response
### 属性
::: tip Response的属性
|属性|作用|
|---|---|
|body|响应体的流读取【readableString对象】|
|headers|headers对象|
|status|响应状态码|
|ok|布尔值，响应状态码是否在【200-299】之间|
|redirected|是否是重定向的结果|
|statusText|与状态代码相对应的状态消息|
|type|响应类型（很多浏览器未实现）|
|url|最终返回的服务器url【无论经过多少重定向】|
:::
:::: tabs
::: tab label=跨域重定向请求
```js
fetch('http://localhost:8888/data',{
    mode: 'cors'
}).then(res => {
    console.log(res.body); // ReadableStream {locked: fase}
    console.log(res.headers); // Headers对象(需要用对应的方法获取数据)
    console.log(res.status); // 200
    console.log(res.ok); // true
    console.log(res.redirected); // true
    console.log(res.statusText); // ok
    console.log(res.type); // cors
    console.log(res.url); // http://localhost:8889/
})
```
```js
app.get('/data', (req, res) => {
    res.redirect('http://localhost:8889');
})
```
:::
::: tab label=重定向服务器
```js
const express = require('express');
const app = new express();

app.listen(8889, () => {
    console.log('listen 8889');
});

// 自定义跨域中间件
const allowCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

app.use(allowCors);//使用跨域中间件

app.get('/', (req, res) => {
    res.send({data: '跨域数据'});
})
```
:::
::::
### 方法
::: tip Response的方法
* 实际上是依据不同的返回值做不同的处理

|方法|作用|
|---|---|
|clone|将响应对象克隆|
|error|返回包含网络错误信息的新Response对象|
|json|读取response的数据流并resolve一个JSON.parse的对象|
|text|读取返回流并resolve文本|
|redirect|返回重定向的response【service worker使用】|
|formData|读取的数据流并resolve一个FormData对象【service worker使用】|
|arrayBuffer|返回一个Promise.resolve(ArrayBuffer对象)|
|blob|返回一个Promise.resolve(Blob对象)|
:::
::::tabs
::: tab label=json/text
```js{14-16,18-20,26-28,30-32}
const express = require('express');
const app = new express();
app.listen(8888, () => {
    console.log('listen 8888');
});

app.get('/', (req, res) => {
    res.cookie('name', 'hdy');
    res.send(`
<body>
    <div>首页</div>
    <script>
        setTimeout(() => {
            fetch('http://localhost:8888/json')
            .then(res => res.json())
            .then(res => console.log(res)); // 我是hdy

            fetch('http://localhost:8888/text')
            .then(res => res.text())
            .then(res => console.log(res)); // {name: 'hdy', age: 18}
        }, 2000);
    </script>
</body>
`)});

app.get('/text', (req, res) => {
    res.send('我是hdy');
})

app.get('/json', (req, res) => {
    res.send({name: 'hdy', age: 18});
})
```
:::
::::
## Headers
::: tip Headers
* 设置请求头/响应头的封装对象

|方法|作用|
|---|---|
|append|追加键值对|
|delete|删除键值对|
|entries|返回键值对的iterator|
|get|查找值|
|set|设置值|
|has|是否含有值|
|keys|键iterator|
|values|值iterator|
:::
::: warning set 和 append 的区别
对于已经存在的属性，append会追加，set会修改
:::
```js{14-17}
const express = require('express');
const app = new express();
app.listen(8888, () => {
    console.log('listen 8888');
});

app.get('/', (req, res) => {
    res.cookie('name', 'hdy');
    res.send(`
<body>
    <div>首页</div>
    <script>
        setTimeout(() => {
            const headers = new Headers({
                "Content-Type": "application/json"
            });
            headers.set('name', 'hdy');

            fetch('http://localhost:8888/text', {headers})
            .then(res => res.text())
            .then(res => console.log(res)); // 我是hdy

        }, 2000);
    </script>
</body>
`)});

app.get('/text', (req, res) => {
    console.log(req.header('name'));
    res.send('我是hdy'); // hdy
})
```