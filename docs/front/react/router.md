---
title: react路由
date: 2022-02-18
---
## 起步
:::: tabs
::: tab label=安装
* [官网](https://reactrouter.com/docs/en/v6/getting-started/installation)
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
## 懒加载
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
## 集中配置
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