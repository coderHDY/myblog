# 跨域
## 介绍
### 同源策略
::: tip 同源策略
* **协议 // 域名 : 端口号**
* 完全一致才叫同源，否则会产生跨域
* 这个同源策略是W3C对**浏览器的异步请求**的限制，也就是说服务器和html内嵌的资源请求没有此限制
* 跨域资源是可以发送的，但是接收的数据时候会被浏览器限制
:::
:::: tabs
::: tab label=源服务器
* 本端口号【8888】 -> 取异步【8889】的数据，报错
* 但是image拿百度的图片资源，能拿到
```js{10,14-16}
const express = require('express');
const app = new express();
app.listen(8888,() => {
    console.log('listen 8888');
});

app.get('/', (req, res) => res.send(`
<body>
    <div>首页</div>
    <image src='https:////www.baidu.com/img/flexible/logo/pc/result@2.png'/>

    <script>
        setTimeout(() => {
            fetch('http://localhost:8889')
            .then(res => res.text())
            .then(res => console.log(res)); // error
        }, 2000);
    </script>
</body>
`));
```
:::
::: tab label=跨域资源服务器
```js{12}
const express = require('express');
const app = new express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.listen(8889, () => {
    console.log('listen 8889');
});

app.get('/', function(req, res) {
    res.send('跨域内容哈哈哈，拿不到拿不到~');
});
```
:::
::: tab label=效果
<img src='./assets/kuayutupian.png' style="width:400px;">
<img src='./assets/kuayu.png' style="width:400px;">
:::
::::

## 解决方案
### JSONP
::: tip 思想
* 同源策略限制的是ajax异步请求，并没有限制内嵌的script代码，所以可以利用这一点去取对应的数据
* 前端和后端约定好回调函数名称，然后前端创建script标签向后端指定url发起get请求，后端将回调函数执行且传入希望有的数据，前端接受到数据由于是script标签，就会开始执行，拿到数据且执行出希望的结果。
* 限制：只能请求get数据，因为是script标签发起的请求
* 限制：需要约定好回调函数名，较为不方便
:::
:::: tabs
::: tab label=源服务器1
* 和 跨域数据服务器1，约定好回调函数叫【fn】
* 跨域数据服务器1，返回【fn执行代码块】，在浏览器端执行
```js{12-14,16-18}
const express = require('express');
const app = new express();
app.listen(8888,() => {
    console.log('listen 8888');
});

app.get('/', (req, res) => res.send(`
<body>
    <div>首页</div>

    <script>
        function fn(str) {
            console.log(str);
        }
        setTimeout(() => {
            const script = document.createElement('script');
            script.src = 'http://localhost:8889'
            document.body.appendChild(script); // 我们约定好的兄弟~
        }, 2000);
    </script>
</body>
`));
```
:::
::: tab label=跨域数据服务器1
```js{12}
const express = require('express');
const app = new express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.listen(8889, () => {
    console.log('listen 8889');
});

app.get('/', function(req, res) {
    res.send('fn("我们约定好的兄弟~")');
});
```
:::
::: tab label=源服务器2
* 向跨域数据服务器2，取用户数据，约定好回调函数为【getUser】
```js{12-16,18-20,23-24}
const express = require('express');
const app = new express();
app.listen(8888,() => {
    console.log('listen 8888');
});

app.get('/', (req, res) => res.send(`
<body>
    <div>首页</div>

    <script>
        const name = 'hdy'
        let user;
        function getUser(userData) {
            user = userData;
        }
        setTimeout(() => {
            const script = document.createElement('script');
            script.src = 'http://localhost:8889?name=' + name
            document.body.appendChild(script);

            // 请求回来后本地user读取正确
            setTimeout(() => console.log(user), 2000);
            // {"name":"hdy","age":18,"major":"软件工程"}
        }, 2000);
    </script>
</body>
`));
```
:::
::: tab label=跨域数据服务器2
* database对象模拟数据库数据
```js{21-25}
const express = require('express');
const app = new express();
app.listen(8889, () => {
    console.log('listen 8889');
});

const database = {
    hdy: {
        name: 'hdy',
        age: 18,
        major: '软件工程'
    },
    zs: {
        name: '张三',
        age: 20,
        major: '法律'
    }
}

app.get('/', function(req, res) {
    const name = req.query.name;
    const data = database[name] ? JSON.stringify(database[name]) : '{}';

    // 入参到前端会直接解析成对象，因为这是script标签返回内容字段
    res.send(`getUser(${data})`);
});
```
:::
::::
### CORS
::: tip CORS
* 全称：Cross-origin resource sharing
* 服务器同意跨域的资源请求，并在响应头上添加对应字段
* 响应头设置的字段：

|字段|值|
|---|---|
|Access-Control-Allow-Origin|【必须】允许请求的源域名，url \| *|
|Access-Control-Request-Method|可选，支持跨域的方法|
|Access-Control-Expose-Headers|可选，允许包含的请求头|
|Access-Control-Allow-Credentials|可选，布尔值，headers是否接收cookie字段|
|Access-Control-Max-Age|可选，本次预检请求有效期|
:::
:::: tabs
::: tab label=get
* fetch默认方式是get，直接去向资源服务器拿数据
* 请求能不能回来就看服务器的响应头【Access-Control-Allow-Origin】字段有没有我这个服务器
```js{16-22}
const express = require('express');
const app = new express();
app.listen(8888,() => {
    console.log('listen 8888');
});

app.get('/', (req, res) => res.send(`
<body>
    <div>首页</div>

    <script>
        let user;
        const name = 'hdy'

        setTimeout(() => {
            fetch('http://localhost:8889?name=' + name)
            .then(res => res.json())
            .then(res => {
                user = res;
                console.log(user);
                // {name: 'hdy', age: 18, major: '软件工程'}
            })
        }, 2000);
    </script>
</body>
`));
```
:::
::: tab label=get服务器
```js{7-15}
const express = require('express');
const app = new express();
app.listen(8889, () => {
    console.log('listen 8889');
});

// 允许跨域中间件
const allowCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCors); // 使用跨域中间件

// 模拟数据库
const database = {
    hdy: {
        name: 'hdy',
        age: 18,
        major: '软件工程'
    },
    zs: {
        name: '张三',
        age: 20,
        major: '法律'
    }
}

app.get('/', function(req, res) {
    const name = req.query.name;
    const data = database[name] ? JSON.stringify(database[name]) : '{}';
    res.send(data);
});
```
:::
::: tab label=效果1
* 数据：
<img src="./assets/corsdayin.png" style="width:400px;">
---
* 响应头

<img src="./assets/corsxiangyingtou.png" style="width:400px;">
:::
::: tab label=post
* 以post的形式向服务器发送请求

```js{15-19,23-24}
const express = require('express');
const app = new express();
app.listen(8888,() => {
    console.log('listen 8888');
});

app.get('/', (req, res) => res.send(`
<body>
    <div>首页</div>

    <script>
        let user;

        setTimeout(() => {
            fetch('http://localhost:8889', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: 'zs'})
            })
            .then(res => res.json())
            .then(res => {
                user = res;
                console.log(user);
                // {name: '张三', age: 20, major: '法律'}
            })
        }, 2000);
    </script>
</body>
`));
```
:::
::: tab label=post服务器
* express解析请求体【req.body】需要【body-parser】这个库
```js{8-15,30-32}
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
app.use(allowCors); // 使用跨域中间件

const database = {
    hdy: {
        name: 'hdy',
        age: 18,
        major: '软件工程'
    },
    zs: {
        name: '张三',
        age: 20,
        major: '法律'
    }
}

const bdParser = require('body-parser');
app.use(bdParser.urlencoded({extended: false}));
app.use(bdParser.json());

app.post('/', function(req, res) {
    const name = req.body.name;
    const data = database[name] ? JSON.stringify(database[name]) : '{}';
    res.send(data);
});
```
:::
::: tab label=效果2
<img src='./assets/corspost.png' style="width:400px;">
<img src='./assets/corspostdayin.png' style="width:400px;">
:::
::: tab label=cookie

* 请求带去同源服务器，同源服务器拿到user字段，响应头增加cookie，再重定向到跨域服务器要数据
* 首先默认允许跨域，然后还要允许【credentials】，重定向要跟随也要特殊设置【redirect】
```js{15-18,31-32}
const express = require('express');
const app = new express();
app.listen(8888,() => {
    console.log('listen 8888');
});

app.get('/', (req, res) => res.send(`
<body>
    <div>首页</div>

    <script>
        let user;

        setTimeout(() => {
            fetch('http://localhost:8888/data', {
                credentials: 'include',
                redirect: 'follow'
            })
            .then(res => res.json())
            .then(res => {
                user = res;
                console.log(user);
                // {name: '张三', age: 20, major: '法律'}
            })
        }, 2000);
    </script>
</body>
`));

app.get('/data' , (req, res) => {
    res.cookie('user', 'zs');
    res.redirect('http://localhost:8889');
})
```
:::
::: tab label=cookie服务器
* express解析cookie需要【cookie-parser】
```js{8-15,30-31,34}
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
app.use(allowCors); // 使用跨域中间件

const database = {
    hdy: {
        name: 'hdy',
        age: 18,
        major: '软件工程'
    },
    zs: {
        name: '张三',
        age: 20,
        major: '法律'
    }
}

const ckParser = require('cookie-parser');
app.use(ckParser());

app.get('/', function(req, res) {
    const user = req.cookies.user;
    const data = database[user] ? JSON.stringify(database[user]) : '{}';
    res.send(data);
});
```
:::
::: tab label=效果3
<img src='./assets/daicookiekuayu.png' style="width:400px;">

* 只有user是新增的cookie

<img src='./assets/daicookiekuayuheader.png' style="width:400px;">
:::
::::