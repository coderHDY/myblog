---
title: Location
date: 2021-12-17
---
## Location接口
::: tip Location
* URL相关数据操作的接口，URL相关的操作会调用映到这个接口上的方法
* document.Location 和 window.location 访问的是这个Location函数的对象
:::
```html
<body>
    <script>
        console.log(window.location === document.location); // true
        console.log(window.location === Location); // false

        console.log(Location instanceof Function); // true
        console.log(document.location instanceof Location); // true
    </script>
</body>
```
## 属性汇总
::: tip 属性汇总
|属性|作用|例|
|---|---|---|
|href|链接全地址|https://www.baidu.com:8080/s?q=刘德华#bp|
|origin|协议 + 主机 + 端口号|https://www.baidu.com:8080|
|protocol|协议|https:|
|host|主机 + 端口号|www.baidu.com:8080|
|hostname|主机|www.baidu.com|
|port|端口号|8080|
|path/pathname|路径，**window.location.pathname**|/s|
|search|查询参数|?q=刘德华|
|hash|哈希路由参数|#bp|
:::
```html
<body>
    <a id="link" href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=css&fenlei=256&rsv_pq=bb218322000182b5&rsv_t=4bfe%2F1NdrwJO4Z4gnynuI9p%2BhLRHE0hlUqKyvWFJ%2F0cyRRQirDiS%2BGI4MqM&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=5&rsv_sug7=101&rsv_sug2=0&rsv_btype=i&prefixsug=css&rsp=5&inputT=1315&rsv_sug4=1764">
        百度一下
    </a>
    
    <script>
        const a = document.getElementById('link');

        // 全href：【https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=css&fenlei=256&rsv_pq=bb218322000182b5&rsv_t=4bfe%2F1NdrwJO4Z4gnynuI9p%2BhLRHE0hlUqKyvWFJ%2F0cyRRQirDiS%2BGI4MqM&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=5&rsv_sug7=101&rsv_sug2=0&rsv_btype=i&prefixsug=css&rsp=5&inputT=1315&rsv_sug4=1764】
        console.log(link.href);

        // 协议 + 主机 + 端口号：https://www.baidu.com
        console.log(link.origin);

        // 主机名 + 端口号：【www.baidu.com】
        console.log(link.host);

        // 主机名【不带端口号】：【www.baidu.com】
        console.log(link.hostname)

        // 协议：【https:】
        console.log(link.protocol);

        // 端口号: 【''】
        console.log(link.port);

        // 查询参数：【?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=css&fenlei=256&rsv_pq=bb218322000182b5&rsv_t=4bfe%2F1NdrwJO4Z4gnynuI9p%2BhLRHE0hlUqKyvWFJ%2F0cyRRQirDiS%2BGI4MqM&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=5&rsv_sug7=101&rsv_sug2=0&rsv_btype=i&prefixsug=css&rsp=5&inputT=1315&rsv_sug4=1764】
        console.log(link.search);

        // 哈希路由参数【''】
        console.log(link.hash);

        // 路径：【'/s'】
        console.log(link.pathname)
    </script>
</body>
```
## 方法汇总
::: warning 方法汇总
|方法|作用|调用|
|---|---|---|
|assign|加载URL到当前的对象上【并且推入历史记录】|location.assign(href)|
|replace|加载给定的URL，【但是没有历史记录】|location.replace(href)|
|reload|刷新页面，参数决定是否强制重新读服务器资源|location.reload(isLoadFromServer)|
|toString|获取href属性值|location.href|
:::

## document.location
::: tip
* document.Location 和 window.location 是用Location函数获取同一个当前URL的对象，所以可以直接用【location】读取window.location
* 返回的是当前页面的[Location接口](./bom.html#location接口)属性信息
:::
:::: tabs
::: tab label=assign
* 两秒钟后跳百度，【并且推入历史记录】，可以返回
```html{7}
<body>
    <a id="link" href="https://www.qq.com">
        qq
    </a>
    
    <script>
        setTimeout(() => document.location.assign('https://www.baidu.com'), 2000)
    </script>
</body>
```
:::
::: tab label=replace
* 同assign跳转，但是**没有历史记录，不能返回**
```html
<body>
    <a id="link" href="https://www.qq.com">
        qq
    </a>
    
    <script>
        setTimeout(() => document.location.replace('https://www.baidu.com'), 2000)
    </script>
</body>
```
:::
::: tab label=reload
* 每隔十秒钟从服务器读取资源刷新一次，输入框输入的东西消失
```html
<body>
    <input type="text">
    
    <script>
        setInterval(() => document.location.reload(true), 10000)
    </script>
</body>
```
:::
::: tab label=toString
* 相当于取href属性
```html
<body>
    <a id="link" href="https://www.qq.com">
        qq
    </a>
    
    <script>
        console.log(document.location.toString() === document.location.href); // true
    </script>
</body>
```
:::
::::