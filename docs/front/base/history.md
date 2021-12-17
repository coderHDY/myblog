# history
## 属性
### length
::: tip length
* 值：当前session的history个数，新开的页面值是1
:::
```html
<body>
    <div>
        我是页面
    </div>
    
    <script>
        console.log(history.length); // 1
    </script>
</body>
```
### state
::: tip state
* history栈顶的值
:::
::: warning 入栈
* 只有【history.pushState】和 【history.replaceState】才能推入栈
:::
```html
<body>
    <div>
        <span class='jump'>
            1
        </span>
        <span class='jump'>
            2
        </span>
    </div>

    <div id='1'>我是锚1</div>
    <div id='2'>我是锚2</div>
    
    <script>
        const jumps = document.querySelectorAll('.jump');

        Array.prototype.forEach.call(jumps, item => item.addEventListener('click', () => {

            // 点击推入历史
            history.pushState({id: item.innerText}, null)

            // 输出历史对象
            setTimeout(() => console.log(history.state), 1000)
        }))
    </script>
</body>
```
### scrollRestoration
::: tip scrollRestoration
* 作用：回退页面时是否回到上次离开的滚动位置

|值|意思|
|---|---|
|auto|回到滚动位置|
|manual|回退到顶部|
:::
```html{58-59,61-62}
<body>
    <div>
        <span class='jump'>
            顶部
        </span>
    </div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div id='my1'>我是ID1111</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <div>我很长</div>
    <hr>
    <div id='my1'>我是底部</div>

    
    <script>
        const id1 = document.querySelector('#my1');

        // 回退时【不会】回到离开时的滚动位置
        // history.scrollRestoration = 'manual';

        // 回退时会回到离开时的滚动位置
        history.scrollRestoration = 'auto';
        
        // 滚动 -> 推入历史栈 -> 滚动 -> 回退历史记录
        new Promise(resolve => {
            setTimeout(() => resolve())
        })
        .then(_ => {
            setTimeout(() => {
                console.log('滚动页面');
                id1.scrollIntoView();
            }, 1000);
        })
        .then(_ => {
            setTimeout(() => {
                console.log('入栈');
                history.pushState({}, null);
            }, 2000);
        })
        .then(_ => {
            setTimeout(() => {
                console.log('滚到顶');
                const jump = document.querySelector('.jump');
                jump.scrollIntoView();
            }, 3000);
        })
        .then(_ => {
            setTimeout(() => {
                console.log('出栈')
                history.back();
            }, 4000);
        })
    </script>
</body>
```
## 方法
### pushState
::: tip pushState
* 作用：向浏览器记录添加一个状态
* 调用：history.pushState(property, title[, url])
:::
::: warning 错误避免
* 浏览器跳转操作都需要时间，所以用setTimeout间隔开取值
* 热更新多次刷新同一个带跳转的页面会堆积history栈，需要重新打开才能测试正确
:::
```html{4,8-9,13,15,19}
<body>
    <script>
        console.log(history.length); // 1
        console.log(history.state); // null
        
        setTimeout(() => {
            console.log('推入记录,跳转');
            history.pushState({id: 0}, null, '#333');
            console.log(history.length); // 2
        }, 1000)
        
        setTimeout(() => {
            console.log(history.state); // {id: 0}
            console.log('回退');
            history.back();
        }, 2000)

        setTimeout(() => {
            console.log(history.state); // null
        }, 3000)
    </script>
</body>
```
### replaceState
::: tip replaceState
* 更新当前的history栈
:::
```html{5,9,11}
<body>
    <script>
        console.log(history.length); // 1
        console.log(history.state); // null
        history.replaceState({id: 0}, null);
        
        setTimeout(() => {

            // 说明是同一个历史记录，但是存的值变了
            console.log(history.length); // 1
            console.log(history.state); // {id: 0}
        }, 1000)        
    </script>
</body>
```
### back
::: tip back
* 作用：回到history栈的上一个位置
* 调用：history.back()
:::
* 在百度页面多搜索几个关键词，然后的控制台中执行：
```js
history.back()
```
### forward
::: tip forward
* 向前移动一页
:::
* 在百度页面多搜索几个关键词，然后回退，然后的控制台中执行：
```js
history.forward()
```
### go
::: tip go
* 向移动指定页数，-X 代表后退 X页
:::
* 在百度页面多搜索几个关键词，然后的控制台中执行：
```js
history.go(-2)
```
## 事件
### onpopstate
::: tip onpopstate
* 位置：window.onpopstate
* 触发条件：
    1. 浏览器按前进后退
    2. history.back()
    3. history.go()
    4. history.forward()
    5. a标签的锚点
:::
::: warning 注意
* 这个事件不遵守驼峰写法
* 【history.pushState】和【history.replaceState】**不会触发这个事件**
:::
* 过一秒调用回退输出id:【1】，点锚点输出事件
```html
<body>
    <div>
        <span class='top'>
            顶部
        </span>
    </div>

    <div><a href="#link1">锚点1</a></div>
    <div><a href="#link2">锚点2</a></div>
    <div><a href="#link3">锚点3</a></div>
    <div><a href="#link4">锚点4</a></div>

    <script>
        window.onpopstate = function(e) {
            console.log(e.state?.id || e);
        }

        history.pushState({id: 0}, null);
        history.pushState({id: 1}, null);
        history.pushState({id: 2}, null);

        setTimeout(() => {
            history.back();
        }, 1000)
    </script>
</body>
```
### 手写history路由
::: tip history路
* 用到知识点：
    1. pushState和replaceState本身不会发送网络请求，只会更改url并且推入历史记录
    2. 更改url后window.onpopstate事件会被触发，可以做前端路由
    3. 浏览器本身可以前进后退，也可以调用history.back/forward/go等控制前进后退
* 注意：
    1. pushState和replaceState本身不会触发onpopstate事件，go/back/forward会调用
:::
:::: tabs
::: tab label=初版
* 顶部导航栏控制前端路由，自定义后退键
```html
<body>
    <router>
        <router-link to="/">主页</router-link>
        <router-link to="/category">分类</router-link>
        <router-link to="/me">我的</router-link>
        <button class='back'>back</button>
    </router>

    <div>
        <router-view></router-view>
    </div>
    <script>
        // 路由注册器、路由控制器，利用闭包减少污染全局变量
        const [register, router] = (function() {
            const registList = new Map();
            const routerView = document.querySelector('router-view');
            return [
                function (path, content) {
                    registList.set(path, content);
                },
                function (path) {
                    if (registList.has(path)) {
                        routerView.innerHTML = registList.get(path);
                    } else if (registList.has('/')){

                        // 兜底路由
                        router('/');
                    }
                }
            ]
        })();

        // 前端路由初始化
        (function() {
            const nav = document.querySelector('router');

            // nav点击跳转控制
            nav.addEventListener('click', e => {
                const target = e.target.getAttribute('to');
                if (target && target !== location.pathname) {
                    history.pushState(null, null, target);
                    router(target);
                }
            })

            // 照顾浏览器点击前进后退。浏览器是先变换了url才发起的这个事件，所以可以直接取location地址
            window.onpopstate = function(e) {
                const target = location.pathname;
                router(target);
            }

            // 照顾自定义的后退键
            const backBtn = nav.querySelector('.back');
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    history.back();
                })
            }
        })()

        // 注册路由
        register('/', '主页');
        register('/category', '分类');
        register('/me', '我的');
    </script>
</body>
```
:::
::: tab label=封装版
* 用class将路由进行封装，注册方式按照vue-router的写法进行暴露
```html
<body>
    <router>
        <router-link to="/">主页</router-link>
        <router-link to="/category">分类</router-link>
        <router-link to="/me">我的</router-link>
        <button class='back'>back</button>
    </router>

    <div>
        <router-view></router-view>
    </div>
    <script>
        // 封装
        class Router {
            nav = document.querySelector('router');
            backBtn = document.querySelector('.back');
            view =  document.querySelector('router-view');

            constructor(registObj) {
                this.registList = new Map(Object.entries(registObj));
                this.init();
            }
        
            router(path) {
                if (this.registList.has(path)) {
                    const content = this.registList.get(path);
                    this.view.innerHTML = content;
                } else if (this.registList.has('/')) {
                    this.router('/');
                }
            }
            
            init() {
                this.nav.addEventListener('click', e => {
                    const currentPath = location.pathname;
                    const path = e.target.getAttribute('to');
                    if (path && currentPath != path) {
                        history.pushState(null, null, path);
                        this.router(path);
                    }
                })

                this.backBtn.addEventListener('click', e => {
                    history.back();
                })

                window.onpopstate = e => {
                    const path = location.pathname;
                    this.router(path);
                }
            }
        }
        
        // 使用
        const routerMap = {
            '/': '主页',
            '/category': '分类',
            '/me': '我的',
        }
        const router = new Router(routerMap);
    </script>
</body>
```
:::
::::