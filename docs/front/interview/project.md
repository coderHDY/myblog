---
title: 项目相关
date: 2022-02-23
---
## 1.Vue实现一个防抖输入框
:::: tabs
::: tab label=server
```js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.listen('8888', () => console.log('listen 8888'));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const url = path.join(__dirname, './test.html');
    const code = fs.readFileSync(url);
    return res.send(code);
})

app.get('/search', (req, res) => {
    const query = req.query.s;
    console.log(query);
    setTimeout(() => res.send({data: query}), 1000);
})
```
:::
::: tab label=实现
```html{22-40}
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/vue@next"></script>
    <title>Document</title>
</head>

<body>
    <div id="app">
        <input type="text" v-model="v">
    </div>
    <script>
        const {
            createApp,
            ref,
            watchEffect,
            watch,
        } = Vue;
        const app = createApp({
            setup() {
                const v = ref('');
                changeVal = e => v.value = e.target.value;
                watchEffect((onIvalidate) => {
                    if (v.value.trim() === '') {
                        return;
                    }
                    const controler = new AbortController();
                    const {
                        signal
                    } = controler;
                    const timer = setTimeout(() => {
                        fetch(`/search?s=${v.value}`, {
                                signal,
                            })
                            .then(res => res.json())
                            .then(res => console.log(res))
                    }, 1000);
                    onIvalidate(() => {
                        controler.abort();
                        clearTimeout(timer);
                    });
                })
                return {
                    v,
                }
            }
        });
        app.mount('#app');
    </script>
</body>
```
:::
::::
## 2.性能优化
:::: tabs
::: tab label=性能
* 将下面代码放到 head 标签内，即可获取`白屏时间`
    ```html
    <script>
        console.log(Date.now() - performance.timeOrigin);
    </script>
    ```
* 下面代码获取`首屏时间`
    ```html
    <script>
        window.addEventListener('load', () => {
            console.log(Date.now() - performance.timeOrigin);
        })
    </script>
    ```
* 主要耗时点：
    1. DNS域名解析
    2. TCP连接
    3. 浏览器发送HTTP请求
    4. 服务器发送响应报文
    5. 浏览器解析响应报文
:::
::: tab label=DNS预解析
* 一次完整的DNS解析要花费 `20-120ms`
* `浏览器缓存` -> `系统缓存` -> `路由器缓存` -> `运营商缓存` -> `递归查询`
    ```html
    <meta http-equiv="x-dns-prefetch-control" content="on" />
    ```
    >`X-DNS-Prefetch-ControlHTTP` 响应头控制 DNS 预取功能通过对用户可以选择跟随，以及通过在文档，包括图片，CSS，JavaScript 和等参考项的 URL 都链接**浏览器主动进行域名解析**。
* 强制预解析某域名
    ```html
    <link rel="dns-prefetch" href="http://www.spreadfirefox.com/">
    ```
    >少用，多页面重复DNS预解析会重复DNS查询次数
:::
::: tab label=http优化
* 使用http2，有`多路复用`、`首部压缩`、`服务器推送`等能力。
* 减少请求数量：
    * svg图片嵌入
    * 小文件嵌入合并，减少TCP连接次数
* 压缩文件(webpack)：
    * js:`UglifyPlugin`
    * css:`MiniCssExtractPlugin`
    * HTML:`HtmlWebpackPlugin`
    * 图片压缩:`image-webpack-loader`
* 按需加载：
    * 路由懒加载
    * 图片懒加载:
        1. img标签动态填URL: aFarkas / lazysizes、verlok / lazyload、tuupola / lazyload
        2. 使用css的`bg-img`,通过切换类名进行懒加载
* 静态资源使用CDN加载，**CDN服务器大多数情况比一般服务器快**
:::
::: tab label=SSR
* 优点：首屏渲染快，SEO优化好
* 缺点：增加服务器计算压力，配置较繁琐
:::
::: tab label=运行时
* 减少使用table布局，一点改动就会引发大量重排重绘
* DOM读写操作分区合并进行，能减少重排次数。不要在两个写之间加入读操作
    ```js
    // bad 强制刷新 触发四次重排+重绘
    div.style.left = div.offsetLeft + 1 + 'px';
    div.style.top = div.offsetTop + 1 + 'px';
    div.style.right = div.offsetRight + 1 + 'px';
    div.style.bottom = div.offsetBottom + 1 + 'px';


    // good 缓存布局信息 相当于读写分离 触发一次重排+重绘
    var curLeft = div.offsetLeft;
    var curTop = div.offsetTop;
    var curRight = div.offsetRight;
    var curBottom = div.offsetBottom;

    div.style.left = curLeft + 1 + 'px';
    div.style.top = curTop + 1 + 'px';
    div.style.right = curRight + 1 + 'px';
    div.style.bottom = curBottom + 1 + 'px';
    ```
:::
::: tab label=长列表优化
* 虚拟列表:只渲染正在展示的列表周边的一定量元素
    1. 确定父元素高
    2. 确定子元素相对父元素位置
    3. 在滚动时，根据父元素的滚动的offset重新计算应该在可视区内的子列表元素。这样保证了无论如何滚动，真实渲染出的dom节点只有可视区内的列表元素及周边元素。
    4. 这种情况下，父元素一般使用position：relative，子元素的定位一般使用：position：`absolute`或`sticky`
    5. 虚拟列表开源库：
        * 基于React的 `react-virtualized`
        * 基于Vue 的 `vue-virtual-scroll-list`
        * 基于Angular的 `ngx-virtual-scroller`
:::
::: tab label=大量级算
* web workers
    * 重量级计算放到worker另一个线程去计算，不影响页面主线程，不容易卡死
    * 计算完再将返回值返回给JS主线程
:::
::: tab label=其他
* 事件委托
* 滚动事件：防抖、节流
:::
::::
## 3.打点
:::: tabs
::: tab label=打点
* 某个元素`展示`、`点击`等情况时时需要触发`数据统计`的**网络请求**
* 需要记载：
    * 类型：点击打点、展示打点、跳转打点、调起小程序打点、调起app打点
    * 负载数据：承载的主要数据的id、主要标识
    * 展示位置：同一个组件也许会在多个位置、以不同的功能进行展示，需要记录该位置
:::
::: tab label=img
* 旧方法，使用`new Image`进行日志打点，动态生成src的`query`，进行打点日志制作
* 特点：
    * `get`请求
    * 有可能发送不出去，因为有可能页面直接卸载了，所以一般还会加上`延迟卸载`100ms以保证打点基本能成功
```js{15,18}
// 服务器
const express = require('express');
const app = express();
app.listen('8888', () => console.log('listen 8888'));
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const url = path.join(__dirname, './test.html');
    const code = fs.readFileSync(url);
    return res.send(code);
})

app.get('/log', (req, res) => {
    const end = Date.now() + 2000;
    while (Date.now() < end) { }
    console.log('接收到打点' + req.query.idx);
    res.send();
})
```
```html{20-24}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="ul">
        <li data-log="1">1</li>
        <li data-log="2">2</li>
        <li data-log="3">3</li>
        <li data-log="4">4</li>
        <li data-log="5">5</li>
    </ul>
    <script>
        ul.addEventListener('click', e => {
            const idx = e.target.getAttribute('data-log');
            const img = new Image();
            img.src = `/log?idx=${idx}`;
        })
    </script>
</body>

</html>
```
:::
::: tab label=sendBeacon
* 利用新出的API`navigator.sendBeacon`进行异步请求发送
* 特点：
    * 不用创建元素、专门为打点设计的api，性能有优化
    * `post`请求
* 优势：使用 sendBeacon() 方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能，这意味着：
    * 数据发送是可靠的。
    * 数据异步传输。
    * 不影响下一导航的载入。
```js{15}
// 服务器
const express = require('express');
const app = express();
app.listen('8888', () => console.log('listen 8888'));
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const url = path.join(__dirname, './test.html');
    const code = fs.readFileSync(url);
    return res.send(code);
})

app.post('/log', (req, res) => {
    const end = Date.now() + 2000;
    while (Date.now() < end) { }
    console.log('接收到打点' + req.query.idx);
    res.send();
})
```
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="jump">
        <a href="https://www.baidu.com">1</a>
        <a href="https://www.qq.com">2</a>
        <a href="https://www.bytedance.com">3</a>
        <a href="https://www.meituan.com">4</a>
        <a href="https://github.com/coderHDY">5</a>
    </div>
    <script>
        jump.addEventListener('click', e => {
            const idx = e.target.getAttribute('href');
            navigator.sendBeacon(`/log?idx=${idx}`);
        })
    </script>
</body>

</html>
```
:::
::::