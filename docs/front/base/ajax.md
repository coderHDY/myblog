---
title: ajax技术
date: 2021-12-19
---
## 服务器代码
::: tip
* 为了测试方便，自己开一个服务器，请求和响应分别放在不同的位置
:::
```js{15-21,27-29}
const express = require('express');
const app = new express();
app.listen(8888,() => {
    console.log('listen 8888');
});

app.get('/', (req, res) => res.send(`
<body>
    <div>这是</div>
    <div>首页</div>
    <div>内容</div>

    <script>
        setTimeout(() => {
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('load', function() {
                const obj = JSON.parse(this.responseText);
                console.log(obj.data);
            });
            xhr.open('get', 'http://localhost:8888/data');
            xhr.send();
        }, 2000);
    </script>
</body>
`));

app.get('/data', (req, res) => res.send({
    data: '异步请求'
}));

```
## 方法
### open
::: tip
* 作用：初始化一个请求
* 调用：xhr.open(method, url[, async, user, password])
* 入参：String, String, Boolean, String, String
* tip：参数3决定是否异步，默认true。一般不设置false，性能不好
:::
:::: tabs
::: tab label=同步
* 等待请求返回后才会输出同步代码
```js{15,17}
const express = require('express');
const app = new express();
app.listen(8888, () => {
    console.log('listen 8888');
});

app.get('/', (req, res) => {
    res.send(`
<body>
    <div>首页</div>
    <script>
        setTimeout(() => {
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('load', () => console.log('请求返回'));
            xhr.open('GET', 'http://localhost:8888/data', false);
            xhr.send();
            console.log('同步代码');
        }, 2000);
    </script>
</body>
`)});

app.get('/data', (req, res) => {
    const end = Date.now() + 2000;
    while (Date.now() < end) {}
    res.send();
})
/**
 * 请求返回
 * 同步代码
 */
```
:::
::: tab label=异步
* 默认就是异步
* send不等待返回，同步直接执行完，完后再等网络请求返回
```js{15}
const express = require('express');
const app = new express();
app.listen(8888, () => {
    console.log('listen 8888');
});

app.get('/', (req, res) => {
    res.send(`
<body>
    <div>首页</div>
    <script>
        setTimeout(() => {
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('load', () => console.log('请求返回'));
            xhr.open('GET', 'http://localhost:8888/data', true);
            xhr.send();
            console.log('同步代码');
        }, 2000);
    </script>
</body>
`)});

app.get('/data', (req, res) => {
    const end = Date.now() + 2000;
    while (Date.now() < end) {}
    res.send();
})
/**
 * 同步代码
 * 请求返回
 */
```
:::
::::
### send
::: tip
* 作用：将请求发送出去
* 调用：xhr.send(body)
* 入参：document | FormData | Blob | URLSearchParams
:::
* node解析body需要安装body-parser
```js{3-5,25-26,33,36}
const express = require('express');
const app = new express();
const bdParser = require('body-parser');
app.use(bdParser.urlencoded({extended:false}));
app.use(bdParser.json());
app.listen(8888, () => {
    console.log('listen 8888');
});

app.get('/', (req, res) => {
    res.send(`
<body>
    <div>首页</div>
    <script>
        setTimeout(() => {
            const xhr = new XMLHttpRequest();
            
            xhr.addEventListener('load', () => console.log(xhr.response));
            xhr.open('POST', 'http://localhost:8888/data');

            const params = {
                name: 'hdy',
                age: 18
            }
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(params));
        }, 2000);
    </script>
</body>
`)});

app.post('/data', (req, res) => {
    console.log(req.body);

    // express处理post请求返回必须是对象或序列化对象【JSON.stringify()】
    res.send(req.body);
})
```
### setRequestHeader
::: tip
* 作用：设置请求头
* 调用：xhr.setRequestHeader(key, value)
* 入参：String, String
:::
```js{6}
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => console.log(xhr.response));
xhr.open('GET', 'http://localhost:8888/data');

xhr.setRequestHeader('Cache-Control', 'catch');
xhr.send();
```
### abort
::: tip
* 作用：终止请求
* 调用：xhr.abort()
:::
* 服务器要执行两秒，一秒钟后会取消，所以拿不到返回值
```js{6-7}
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => console.log(xhr.response))
xhr.open('GET', 'http://localhost:8888/data');
xhr.send();

// 一秒钟后取消
setTimeout(() => xhr.abort(), 1000);
```
```js
app.get('/data', (req, res) => {
    const end = Date.now() + 2000;
    while (Date.now() < end) {}
    res.send();
})
```
### getResponseHeader
::: tip
* 作用：获取某一个响应头的值
* 调用：xhr.getResponseHeader(key)
* 入参：String
* 返回：String
:::
```js
const xhr = new XMLHttpRequest();


xhr.addEventListener('load', () => 
    console.log(xhr.getResponseHeader('X-Powered-By'))
); // Express

xhr.open('GET', 'http://localhost:8888/data');
xhr.send();
```
### getAllResponseHeaders
::: tip
* 作用：拿到所有响应头
* 调用：xhr.getAllResponseHeaders()
* 返回：string
:::
```js
const xhr = new XMLHttpRequest();

// 返回带换行符的String，展现出所有的Headers
xhr.addEventListener('load', () => console.log(xhr.getAllResponseHeaders()))
xhr.open('GET', 'http://localhost:8888/data');
xhr.send();
```
### overrideMimeType
::: tip
* 作用：强制指定返回的MIME类型
* 调用：xhr.overrideMimeType(type)
* tip：必须在send前指定
:::
## 属性
### responseType
::: tip
* 作用：用于判断响应的类型，response接受到值后做出对应的改变
* **必须要在send前修改，否则无效**

|responseType的值|response的值|
|---|---|
|""|DOMString对象中的文本【默认】|
|text|DOMString对象中的文本|
|document|HTTP document或XML document对象|
|json|json解析后的对象|
|ArrayBuffer|包含二进制数据的ArrayBuffer|
|blob|包含二进制对象的Blob对象|
:::
:::: tabs
::: tab label=text/空字符串
```js{3,6}
// 请求
const xhr = new XMLHttpRequest();
xhr.responseType = 'text';
xhr.addEventListener('load', function() {
    console.log(this.responseType); // 'text'
    console.log(this.response); // 我是纯文本
});
xhr.open('get', 'http://localhost:8888/data');
xhr.send();
```
```js
// ajax返回数据
app.get('/data', (req, res) => {
    res.send('我是纯文本');
});
```
:::
::: tab label=json
```js{3,6}
// 请求
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.addEventListener('load', function() {
    console.log(this.responseType); // 'json'
    console.log(this.response); // {name: 'hdy', age: 18}
});
xhr.open('get', 'http://localhost:8888/data');
xhr.send();
```
```js{3}
// ajax返回
app.get('/data', (req, res) => {
    res.json({name: 'hdy', age: 18});
})
```
:::
::: tab label=document
```js{6-8}
const xhr = new XMLHttpRequest();

// 设置返回类型为document，response实际上是一个新的document对象
xhr.responseType = 'document';
xhr.addEventListener('load', () => {
    const doc = xhr.response; // 拿到一个新的document对象
    const div = doc.querySelector('div');
    document.body.append(div);
});
xhr.open('GET', 'http://localhost:8888/data');
xhr.send();
```
```JS{3-5}
// 返回
app.get('/data', (req, res) => {
    res.send(`
        <div>我是数据盒子</div>
    `)
})
```
:::
::::
### response
::: tip
* 作用：响应结果
* 值：根据responseType的值决定
* 需要在【下载响应数据中】readyState >= 3 以后才有值
:::
### responseText
::: tip
* 作用：后端返回的文本
* 值：String
* 注：DOMString也是以String的形式返回的
:::
### onreadystatechange
::: tip
* 注：此属性没有驼峰写法
* 作用：当xhr对象readyState状态发生变化时内部调用钩子
* 调用：xhr.onreadystatechange = function () {}
:::
```js
const xhr = new XMLHttpRequest();
console.log(xhr.readyState); // 0
xhr.onreadystatechange = () => console.log(xhr.readyState);

setTimeout(() => xhr.open('get', 'http://localhost:8888/data'), 1000); // 1
setTimeout(() => xhr.send(), 2000); // 2 3 4
```
### readyState
::: tip
|值|阶段|对应XMLHttpRequest的静态属性|
|---|---|---|
|0|创建未调用 open() 方法|UNSENT|
|1|已调用open方法|OPENED|
|2|已调用send方法|HEADERS_RECEIVED|
|3|下载数据中|LOADING|
|4|数据下载完成|DONE|
:::
```html
<body>
    <script>
        const xhr = new XMLHttpRequest();

        console.log(xhr.readyState); // 0
        console.log(XMLHttpRequest.UNSENT); // 0
        console.log(XMLHttpRequest.OPENED); // 1
        console.log(XMLHttpRequest.HEADERS_RECEIVED); // 2
        console.log(XMLHttpRequest.LOADING); // 3
        console.log(XMLHttpRequest.DONE); // 4
    </script>
</body>
```
### responseXML
::: tip
* 作用：存储返回值的HTML或XML对象
:::
```js{2,5}
const xhr = new XMLHttpRequest();
xhr.responseType = 'document';
xhr.addEventListener('load', () => {
    console.log(xhr.response); // #document
    console.log(xhr.responseXML === xhr.response); // true
});
xhr.open('GET', 'http://localhost:8888/data');
xhr.send();
```
```JS
// 返回
app.get('/data', (req, res) => {
    res.send('<div>返回盒子</div>');
})
```
### timeout
::: tip
* 设置超时时间，如果响应超时，就会触发ontimeout事件
* 应该在【open之后】【send之前】设置
:::
```js{5,7-8}
const xhr = new XMLHttpRequest();
const start = Date.now();
xhr.addEventListener('load', () => console.log(xhr.response+ (Date.now() - start)));
xhr.open('GET', 'http://localhost:8888/data');
xhr.timeout = 2000;

// 输出： 2002
xhr.ontimeout = () => console.log('timeout:' + (Date.now() - start));
xhr.send();
```
```js
app.get('/data', (req, res) => {
    const end = Date.now + 3000;
    while (Date.now < end) {}
    res.send('处理了三秒');
})
```
### upload
::: tip
* 值：一个XmlHttpRequestUpload对象，给它绑定事件监听器来查看上传的进度

|addEventListener|触发|
|---|---|
|onloadstart|开始获取|
|onprogress|正在传输|
|onabort|操作终止|
|onerror|失败|
|onload|成功|
|ontimeout|上传超时|
|onload|获取完成（不论成功与否）|
:::
### withCredentials
::: tip
* 作用：**跨域访问**时是否可以携带cookies
* 值：Boolean
:::
:::: tabs
::: tab label=跨域服务器1
* 【跨域服务器1】 -> 【跨域服务器2】
```js{14,18-20}
const express = require('express');
const app = new express();
app.listen(8888, () => {
    console.log('listen 8888');
});

app.get('/', (req, res) => res.send(`
<body>
    <div>这是</div>
    <div>首页</div>
    <div>内容</div>
    <script>

        // 两秒后去找跨域端口 8889
        setTimeout(() => {
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('load', () => console.log(xhr.response));
            console.log('我去拿跨域内容了，跨域的服务器需要给我加cors响应头');
            xhr.open('GET', 'http://localhost:8889');
            xhr.send();
        }, 2000);
    </script>
</body>
`));
```
:::
::: tab label=跨域服务器2
```js{7-13,15}
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
    res.send('跨域内容哈哈哈');
});
```
:::
::: tab label=带cookie跨域服务器1
* 【带cookie跨域服务器1】 -> 【带cookie跨域服务器2】
* 写入res.cookie不需要插件，读取req.cookies需要【cookie-parser】
> res.cookie(key, vlaue)在响应头增加Set-Cookie字段
```js{8,17,27}
const express = require('express');
const app = new express();
app.listen(8888, () => {
    console.log('listen 8888');
});

app.get('/', (req, res) => {
    res.cookie('name', 'hdy');
    res.send(`
<body>
    <div>这是</div>
    <div>首页</div>
    <div>内容</div>
    <script>
        setTimeout(() => {
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener('load', () => console.log(xhr.response));
            xhr.open('GET', 'http://localhost:8888/otherOrigin');
            xhr.send();
        }, 2000);
    </script>
</body>
`)});

app.get('/otherOrigin', (req, res) => {
    res.cookie('friend', '张三');
    res.redirect('http://localhost:8889')
})
```
> 重定向用redirect，转发用request库
:::
::: tab label=带cookie跨域服务器2
```js{2,5,23-25}
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
    res.cookie('age', 18);
    const name = req.cookies.name;
    res.send(`跨域内容哈哈哈:${name}`);
});
```
* 最后可以在network控制台看到cookies都有设置进去
:::
::::
### status
::: tip
* 作用：请求响应状态码
* 值：Number
* [全部状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

|值|含义|
|---|---|
|200|成功|
|301|永久重定向|
|302|临时重定向成功|
|304|协商缓存命中【Not Modified】|
|401|请求需身份验证|
|403|服务器拒绝执行|
|404|页面未找到|
|500|服务器错误|
|501|此请求方法不被服务器支持【get/post/...】|
:::
```js{3-4}
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    console.log(xhr.status); // error... 500
    console.log(xhr.response); // 错误信息
});
xhr.open('GET', 'http://localhost:8888/data');
xhr.send();
```
```JS{3}
// 返回
app.get('/data', (req, res) => {
    res.status('500').send('错误信息');
})
```
### responseURL
::: tip
* 作用：拿到最终返回的后端URL
* tip：无论中间经历过多少重定向，都会返回最后的一个URL，且去掉锚点【#】
:::
```js{3}
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    console.log(xhr.responseURL); // http://localhost:8888/error
    console.log(xhr.response); // 错误
});
xhr.open('GET', 'http://localhost:8888/data');
xhr.send();
```
```JS{3}
// 返回重定向
app.get('/data', (req, res) => {
    res.redirect('http://localhost:8888/error');
})

app.get('/error', (req, res) => {
    res.send('错误');
})
```
### statusText
::: tip
* 作用：当前相应的状态值，只有readyState > 3 才有值
* 成功响应且服务器没有给具体的状态文本信息时，值为【OK】
:::
```js{3-4}
const xhr = new XMLHttpRequest();

// 0:'' 200:OK
xhr.onreadystatechange = () => console.log(xhr.status + ":" + xhr.statusText);
xhr.open('GET', 'http://localhost:8888/data');
xhr.send();
```
## 事件
::: tip events
|事件|触发|
|---|---|
|load|【请求完成】时触发|
|onreadystatechange|readyState变化时触发|
|timeout|超时触发|
|abort|请求被终止时触发|
|error|请求过程遇到错误时触发|
|loadstart|下载开始触发|
|loadend|加载进度停止之后被触发【在error/abord/load等事件触发之后触发】|
|progress|在接受到数据时周期性触发【适合返回数据较大时查看进度使用】|
:::
