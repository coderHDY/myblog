---
title: 前端路由
date: 2022-01-12
tags:
- vue
---
## 介绍
:::: tabs
::: tab label=前端路由
* `后端渲染`：
    1. 浏览器向服务器发送URL请求
    2. 服务器从数据库拿到数据
    3. 渲染好网页HTML，返回完整网页。
    4. 浏览器拿到网页数据，执行，再点击其他跳转链接，再重新渲染
* `后端路由`：后端根据url返回对应页面的HTML文件
* `前端渲染`：
    1. 浏览器向服务器发送url请求
    2. 服务器返回html框架
    3. 浏览器执行html内的js文件，发送异步请求
    4. 服务器响应对应的数据
    5. 浏览器把数据动态的填到dom树上
* `前端路由`：浏览器根据URL向后端发送请求，拿到数据后只更新页面改变的部分。
---
* 优势：用户体验好，局部刷新，无白屏，响应实时，还可通过骨架屏等提升体验
* 劣势：首屏响应慢，SEO不友好
    * ssr/图片懒加载/路由懒加载等解决方式。
:::
::: tab label=起步
* `router-link`：跳转标签，相当于`a`标签
* `router-view`：相当于页面视图组件容器
* `route`：路由，url与视图组件的一个**对应关系**
* `router`：路由器，管理所有的路由，**根据url分配对应的路由规则**
* `$route`：拿到当前的路由对象及参数

<img src="./assets/router0.png" style="width:500px;">

```html{5-6,9,16-21,25,27}
<body>
    <div id="app">
        <h1>你好，前端路由!</h1>
        <p>
          <router-link to="/home">首页</router-link>
          <router-link to="/me">我的</router-link>
        </p>
        <hr>
        <router-view></router-view>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"></script>
    <script>
        const Home = { template: '<div>这是首页内容</div>' };
        const Me = { template: '<div>我的空间</div>' };
        const routes = [
            { path: '/', component: Home },
            { path: '/home', component: Home },
            { path: '/me', component: Me },
        ];
        const router = new VueRouter({routes});
        
        const app = new Vue({
            el: '#app',
            router,
            mounted() {
                console.log(this.$route);
            }
        })
    </script>
</body>
```
:::
::: tab label=动态路由
* 某种模式全部映射到同一个组件
* 同时，`this.$route.params`能够拿到动态路由的参数
```html{5-6,19,28}
<body>
    <div id="app">
        <h1>你好，前端路由!</h1>
        <p>
          <router-link to="/home/haha">首页</router-link>
          <router-link to="/home/heh">还是首页</router-link>
          <router-link to="/me">我的</router-link>
        </p>
        <hr>
        <router-view></router-view>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"></script>
    <script>
        const Home = { template: '<div>这是首页内容</div>' };
        const Me = { template: '<div>我的空间</div>' };
        const routes = [
            { path: '/', component: Home },
            { path: '/home/:id', component: Home },
            { path: '/me', component: Me },
        ];
        const router = new VueRouter({routes});
        
        const app = new Vue({
            el: '#app',
            router,
            mounted() {
                console.log(this.$route.params); // { id: 'haha' }
            }
        })
    </script>
</body>
```
:::
::::
## 路由守卫
:::: tabs
::: tab label=守卫
```html
<body>
    <div id="app">
        <h1>你好，前端路由!</h1>
        <p>
          <router-link to="/home/haha">首页</router-link>
          <router-link to="/home/heh">还是首页</router-link>
          <router-link to="/me">我的</router-link>
        </p>
        <hr>
        <router-view></router-view>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"></script>
    <script>
        const Home = {
            template: '<div>这是首页内容</div>',
            beforeRouteEnter(to, from, next) {
                console.log(to);
                console.log(from);
                console.log(next);
                next();
            },
            beforeRouteUpdate(to, from, next) {
                console.log('update');
                next();
            },
            beforeRouteLeave(to, from, next) {
                console.log('leave');
                next();
            }
        };
        const Me = { template: '<div>我的空间</div>' };
        const routes = [
            { path: '/', component: Home },
            { path: '/home/:id', component: Home },
            { path: '/me', component: Me },
        ];
        const router = new VueRouter({ routes });
        
        const app = new Vue({
            el: '#app',
            router,
        })
    </script>
</body>
```
:::
:::
::::