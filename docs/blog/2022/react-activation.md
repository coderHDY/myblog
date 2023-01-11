---
title: react-activation
date: 2023-01-11
---
::: tip
* react路由缓存方法
:::
## 使用
```shell
npm i react-activation
```
* 最外层路由下放一个`AliveScope`干预缓存路由
    ```jsx{11,13}
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";
    import {
        BrowserRouter,
    } from 'react-router-dom';
    import { AliveScope } from 'react-activation'

    ReactDOM.render(
        <BrowserRouter>
            <AliveScope>
                <App />
            </AliveScope>
        </BrowserRouter>
        , document.getElementById('root'));

    ```
* 需要缓存的文件用`KeepAlive`包裹
    ```jsx{4,8}
    const routerMap = [
        {
            path: "/home",
            element: <KeepAlive cacheKey="Home" ><Home /></KeepAlive>,
        },
        {
            path: "/about",
            element: <KeepAlive cacheKey="About" ><About /></KeepAlive>,
        },
        {
            path: "/detail",
            element: <Detail />,
        },
        {
            path: "/",
            element: <Navigate to="/home" />,
        },
        {
            path: '*',
            element: <Err />
        }
    ]
    ```
* 使用
    ```jsx
    function App() {
        const elements = useRoutes(routerMap);
        return (
            <div>
                {elements}
            </div>
        )
    }
    ```