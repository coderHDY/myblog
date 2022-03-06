---
title: react路由
date: 2022-02-18
---
## react-router5
::: tip
* [5中文官网](https://react-router.docschina.org)
* [6官网](https://reactrouter.com/docs/en/v6/getting-started/installation)
:::
### 基础API
:::: tabs
::: tab label=起步
* 安装
```shell
npm i react-router-dom@5
```
* 基本使用
    * `BrowserRouter`、`Route`、`Switch`、`Link`
```jsx
import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Test from './components/Test'
import About from './components/About'
export default function app() {
    return (
        <BrowserRouter>
            <div>
                <Link to="/test">test</Link>
                <Link to="/about">about</Link>
            </div>
            <Switch>
                <Route path="/test" component={Test}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </BrowserRouter>
    )
}
```
:::
::: tab label=路由组件
* 路由组件由`Route`匹配调用，会传入指定props
    1. **`history`：路由跳转能力对象**
        * go / goBack / goForward / push / replace / 
    2. **`location`：url解析以及跳转携带参数**
        * pathname / search / state
    3. **`match`：路径匹配、params参数**
        * params / path / url
* 一般单独分配pages文件夹存储路由组件
:::
::: tab label=NavLink
* 活动链追加类名 `active`
```jsx
<NavLink to="/about">about</NavLink>
```
* 自定义类名
```jsx
<NavLink activeClassName='haha' to="/about">about</NavLink>
<NavLink activeClassName='haha' to="/test">test</NavLink>
```
* MyNavLink封装：重复信息进行收集复用
```jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavLink(props) {
    const { children } = props;
    return (
        <NavLink activeClassName='haha' className="nav-class" {...props}>{children}</NavLink>
    )
}
```
* 使用：两种方式使用children(slots)
```jsx
<MyNavLink to="/about">关于页面</MyNavLink>
<MyNavLink to="/test" children="测试页面" />
```
:::
::: tab label=Redirect
* 路由跳转
    1. 兜底使用
```jsx
<Switch>
    <Route path="/test" component={Test} exact={true}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/err" component={Err}></Route>
    <Redirect to='/err' />
</Switch>
```
:::
::: tab label=嵌套路由
* 路由下面还可以写路由，**Link 跳转链接和 Route 匹配链接要写完全**
```jsx
import React from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'

export default function Test() {
    return (
        <>
            <div>Test</div>
            <div>
                <Link to="/test/c1">C1</Link>
                <Link to="/test/c2">C1</Link>
            </div>
            <Switch>
                <Route path="/test/c1" component={C1}></Route>
                <Route path="/test/c2" component={C2}></Route>
                <Redirect to="/test/c1" />
            </Switch>
        </>
    )
}

const C1 = () =>(<div>C1</div>)
const C2 = () =>(<div>C2</div>)
```
:::
::::
### 路由传参
:::: tabs
::: tab label=params
* params传参：`Route声明` + `Link的url传参` + `props.match.params接收`
>副作用：会拼接上 url `路径`
```jsx
<>
    <div>
        <Link to={`/test/c1/${c1.id}/${c1.name}`}>C1</Link>
        <Link to={`/test/c2/${c2.id}/${c2.name}`}>C2</Link>
    </div>
    <Switch>
        <Route path="/test/c1/:id/:name" component={C1}></Route>
        <Route path="/test/c2/:id/:name" component={C2}></Route>
    </Switch>
</>
```
```jsx
// url: http://localhost:3000/test/c1/111/%E5%BC%A0%E4%B8%89
const C1 = ({ match }) => (<div>C1:{match.params.id}-{match.params.name}</div>)
const C2 = ({ match }) => (<div>C2:{match.params.id}-{match.params.name}</div>)
```
:::
::: tab label=search
* search传参：`拼接url的query` + `props.location.search字符串解析`
>副作用：会拼接上 url `query`
```jsx
<>
    <div>
        <Link to={`/test/c1?id=${c1.id}&name=${c1.name}`}>C1</Link>
        <Link to={`/test/c2?id=${c2.id}&name=${c2.name}`}>C2</Link>
    </div>
    <Switch>
        <Route path="/test/c1/" component={C1}></Route>
        <Route path="/test/c2/" component={C2}></Route>
        <Redirect to="/test/c1" />
    </Switch>
</>
```
```js
// url：http://localhost:3000/test/c2?id=222&name=%E6%9D%8E%E5%9B%9B
import qs from 'querystring'
const C1 = ({ location }) => {
    const s = qs.parse(location.search.slice(1));
    return (<div>C1:{s.id}-{s.name}</div>)
}
```
:::
::: tab label=state
* state传参：`跳转to写对象{pathname:xx, state: {xx}}` + `props.location.state获取`
>优势：不在地址栏体现，且刷新依旧能拿到，保存在history历史记录内
```jsx
<>
    <div>
        <Link to={{ pathname: "/test/c1", state: { name: c1.name, id: c1.id } }}>C1</Link>
        <Link to={{ pathname: "/test/c2", state: { name: c2.name, id: c2.id } }}>C2</Link>
    </div>
    <Switch>
        <Route path="/test/c1" component={C1}></Route>
        <Route path="/test/c2" component={C2}></Route>
    </Switch>
</>
```
```jsx
const C1 = ({ location }) => (<div>C1:{location.state.id}-{location.state.name}</div>)
const C2 = ({ location }) => (<div>C2:{location.state.id}-{location.state.name}</div>)
```
:::
::::
### 高级
:::: tabs
::: tab label=样式丢失
* 路径下刷新可能丢失index.html引入的相对路径样式
    ```html
    <link rel="stylesheet" href="./css/index.css">
    ```
* 解决方案：
    1. 跟路径路径
        ```html
        <link rel="stylesheet" href="/css/index.css">
        ```
    2. 绝对路径
        ```html
        <link rel="stylesheet" href="%PUBLIC_URL%/css/index.css">
        ```
    3. 利用`HashRouter`替换`BrowserRouter`
:::
::: tab label=模糊匹配
* Route默认取的是模糊匹配，也就是**路径开头包含即匹配成功**
```jsx
// 匹配成功
<NavLink to="test/a/b">测试页面</NavLink>
<Route path="/test" component={Test}></Route>
```
* 精准匹配`exact`(尽量不开)
```jsx
// 匹配失败
<NavLink to="test/a/b">测试页面</NavLink>
<Route path="/test" component={Test} exact={true}></Route>

// 或
<Route path="/test" component={Test} exact></Route>
```
:::
::::
## react-router6
### 起步
:::: tabs
::: tab label=安装
* 安装
```shell
npm i react-router-dom
```
```js
// index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("root"))

```
:::
::: tab label=定义路由
```jsx
import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
export default function Test() {
    return (
        <>
            <h2>欢迎来到React</h2>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <div>
                <Link to="/home">home</Link>
                <Link to="/about">about</Link>
            </div>
        </>
    )
}

```
:::
::: tab label=活动导航
* 可以将当前正在展示的路由导航加上`active`的class
```jsx{15-16}
import React, { Component, lazy, Suspense } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

export default class App extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
                <div>
                    <NavLink to="/home">home</NavLink>
                    <NavLink to="/about">about</NavLink>
                </div>
            </>
        )
    }
}
```
:::
::::
### 懒加载
:::: tabs
::: tab label=懒加载配置
* `lazy`：定义懒加载组件
* `Suspense`：定义加载时的Loading组件【必须】
```jsx{1,5-6,12-17}
import React, { Component, lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Loading from './components/Loading';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

export default class App extends Component {
    render() {
        return (
            <>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                    </Routes>
                </Suspense>
                <div>
                    <Link to="/home">home</Link>
                    <Link to="/about">about</Link>
                </div>
            </>
        )
    }
}
```
:::
::::
### 集中配置
:::: tabs
::: tab label=config
* 将路由的配置集中起来保管，遍历生成路由器
```js
// src/config/router.js
import About from '../components/About';
import Home from '../components/Home';

const router = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
]

export default router;

```
:::
::: tab label=使用
```js{3,9-11}
import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import router from '../config/router';
export default function Test() {
    return (
        <>
            <h2>欢迎来到React</h2>
            <Routes>
                {
                    router.map(routeObj => <Route key={routeObj.path} {...routeObj} />)
                }
            </Routes>
            <div>
                <Link to="/home">home</Link>
                <Link to="/about">about</Link>
            </div>
        </>
    )
}

```
:::
::::