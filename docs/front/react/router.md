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
```jsx{13-14}
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
                <Route replace path="/about" component={About}></Route>
            </Switch>
        </BrowserRouter>
    )
}
```
>主要有`push模式`和`replace模式`，跳转路由加replace就是replace模式
:::
::: tab label=路由组件
* 路由组件由`Route`匹配调用，会传入指定props
    1. **`history`：路由跳转能力对象**
        * go / goBack / goForward / push / replace 
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
::: tab label=编程式导航
* 手动跳转模式
    * go / goBack / goForward / push / replace
    ```jsx
    const goAbout = () => props.history.push('/about')

    <button onClick={goAbout}>去about</button>
    ```
* 传参
    ```jsx
    //params
    const goAbout = (id) => () => props.history.push(`/about/${id}`)

    // query
    const goTest = (id) => () => props.history.replace(`/test/c1?id=${id}`)

    // state
    const goTest = (id, name) => () => props.history.replace({ pathname: "/test/c2", state: { name, id } })
    const goTest = (id, name) => () => props.history.replace("/test/c2", { name, id })
    ```
:::
::: tab label=withRouter
>路由组件是由Route调用创建的，所以有相关的props，一般组件没有
* 如果想要使用路由参数，就用`withRouter`将组件包裹传出
```jsx
import React from 'react'
import { withRouter } from 'react-router-dom';
function Header(props) {
    const goBack = () => props.history.goBack();
    return (
        <>
            <button onClick={goBack}>goBack</button>
        </>
    )
}

export default withRouter(Header)

```
:::
::: tab label=HashRouter对比
|属性|BrowserRouter|HashRouter|
|---|---|---|
|底层原理|html5的`historyAPI`，事件：`window.onpopstate`|锚点，哈希值。事件：`onhashchange`，属性：`location.hash`|
|表现形式|正常的url形式|带锚点【#】的url|
|刷新表现|所有正常，historyAPI作用下浏览器会存储state参数|**刷新后state参数会消失**|
|优势|美观，大多数都使用|兼容性强，部署后URL也不会出现问题|

:::
::::
### 集中配置
:::: tabs
::: tab label=config
* 将路由的配置集中起来保管，遍历生成路由器
* **react-router6直接用路由表**
```js
// src/config/router.js
import About from '../components/About';
import Home from '../components/Home';

const router = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
]

export default router;

```
:::
::: tab label=使用
```js{3,9-11}
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import router from '../config/router';
export default function Test() {
    return (
        <>
            <h2>欢迎来到React</h2>
            <Switch>
                {
                    router.map(routeObj => <Route key={routeObj.path} {...routeObj} />)
                }
            </Switch>
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
## react-router6
### 起步
:::: tabs
::: tab label=改变预览
|5|6|
|---|---|
|移除`Switch`、`withRouter`、`Redirect`|增加`Routes`、`Navigate`|
|component={`About`}|`element`={`<About />`}|
|路由组件props传参|新增hooks`useParams`、`useNavigate`，`useMatch`等|
||嵌套路由写法改变|
:::
::: tab label=安装
* 安装
```shell
npm i react-router-dom
```
```jsx
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
```jsx{9-12}
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
::: tab label=重定向
* 删除了5的`Redirect`，新增了`Navigate`
```jsx{16}
import React from 'react'
import { Routes, Link, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
export default function App() {
    return (
        <>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}
```
>**Navigate组件一渲染就会引发页面的跳转**，to为必传参数，想要替换模式就加上replace属性
:::
::: tab label=活动导航
* `NavLink`可以将当前正在展示的路由导航加上`active`的class
* 5 -> 6改变：**自定义类名用className函数返回值表示**
    ```jsx
    <NavLink className={({ isActive }) => isActive ? 'haha' : ''} to="/home">Home</NavLink>
    <NavLink className={({ isActive }) => isActive ? 'haha' : ''} to="/about">About</NavLink>
    ```
* 抽取
    ```jsx
    export default function App() {
        const computedClassName = ({ isActive }) => isActive ? 'haha' : '';
        return (
            <>
                <NavLink className={computedClassName} to="/home">Home</NavLink>
                <NavLink className={computedClassName} to="/about">About</NavLink>
            </>
        )
    }
    ```
:::
::: tab label=嵌套路由
* 相对于5写法有改变（类似Vue）：
    1. 路由表**定义的时候就写好子路径的匹配及渲染组件**
        ```js{6-15}
        // router/index.js  路由表
        const routerMap = [
            {
                path: "/home",
                element: <Home />,
                children: [
                    {
                        path: 'c1',
                        element: <C1 />
                    },
                    {
                        path: 'c2',
                        element: <C2 />
                    },
                ]
            },
        ]

        export default routerMap;
        ```
    2. 组件内部引入`Outlet`进行**子路由渲染占位**
        ```jsx{1-2,9-10,12}
        // Home组件，多一个占位符，类似Vue的 <router-view>
        // 子链的跳转链接可以写相对路径了
        import React from 'react'
        import { Link, Outlet } from 'react-router-dom'
        export default function Home() {
            return (
                <>
                    <div>
                        <Link to="c1">子链1</Link>
                        <Link to="c2">子链2</Link>
                    </div>
                    <Outlet />
                </>
            )
        }
        ```
* 如果嵌套路由的子路由也是NavLink，那么**子路由匹配时父路由的NavLink也会被触发activeClass**
    * 可以在父路由加上`end`代表子路由匹配父路由不触发activeClass
    ```jsx
    <NavLink className={computedClassName} end to="/home">Home</NavLink>
    ```
:::
::::
### hooks
:::: tabs
::: tab label=useRoutes
* 使用`路由表`，由hook生成路由
    >一般将**数组移到router/index.js里面**，进行单独导出  

    ```jsx
    // router/index.js
    import Home from "../components/Home"
    import About from "../components/About"
    import { Navigate } from "react-router-dom";
    import Err from "../components/Err";
    const routerMap = [
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
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

    export default routerMap;
    ```
    ```jsx{4,8,15}
    // App.js
    import React from 'react';
    import { NavLink, Navigate, useRoutes } from 'react-router-dom';
    import routerMap from './router';
    import Header from './components/Header';
    export default function App() {
        const computedClassName = ({ isActive }) => isActive ? 'haha' : ''
        const elements = useRoutes(routerMap)
        return (
            <>
                <div>
                    <NavLink className={computedClassName} to="/home">Home</NavLink>
                    <NavLink className={computedClassName} to="/about">About</NavLink>
                </div>
                {elements}
            </>
        )
    }
    ```
:::
::: tab label=useParams
* 使用`params传参`，只有接收的时候有变化，需要用`useParams`hook
    ```jsx
    // 定义占位符
    {
        path: "/about/:id/:name",
        element: <About />,
    }

    // 跳转传参
    <Link to="/about/111/张三">About</Link>
    ```
    ```jsx{6}
    // 接收
    import React from 'react'
    import { useParams } from 'react-router-dom'

    export default function About() {
        const { id, name } = useParams();
        return (
            <>
                <div>About</div>
                <div>姓名：{name}</div>
                <div>id：{id}</div>
            </>
        )
    }
    ```
>`useMatch`也可以使用达到功能，但是更繁琐
```js
const { id, name } = useMatch('/about/:id/:name').params;
```
:::
::: tab label=useSearchParams
* 使用`search传参`（query）
    ```jsx
    // 传参
    <Link to="/about?id=001&name=张三">About</Link>
    ```
    ```jsx{5,7,12-13}
    import React, { useEffect } from 'react'
    import { useSearchParams } from 'react-router-dom'

    export default function About() {
        const [search, setSearch] = useSearchParams();
        useEffect(() => {
            setTimeout(() => setSearch('id=002&name=赵四'), 2000)
        }, []);
        return (
            <>
                <div>About</div>
                <div>姓名：{search.get('name')}</div>
                <div>id：{search.get('id')}</div>
            </>
        )
    }
    ```
>`useLocation`能实现一样的效果
```jsx
const search = useLocation().search;
const { id, name } = qs.parse(search.slice(1));
```
:::
::: tab label=useLocation
* 使用`state传参`
    ```jsx
    // 传参
    <Link to="/about" state={{ name: '溜溜', id: 3 }}>About</Link>
    ```
    ```jsx{5}
    // 接收
    import React from 'react';
    import { useLocation } from 'react-router-dom';
    export default function About() {
        const { name, id } = useLocation().state;
        return (
            <>
                <div>About</div>
                <div>姓名：{name}</div>
                <div>id：{id}</div>
            </>
        )
    }
    ```
:::
::: tab label=useNavigate
* 使用`编程式跳转`
    ```jsx{4-15}
    import React from 'react';
    import { useNavigate } from 'react-router-dom';
    export default function About() {
        const navigate = useNavigate();
        const goHome = () => {
            navigate('/home',
                {
                    replace: false,
                    state: {
                        id: 1,
                        name: '李四'
                    }
                }
            )
        }
        return (
            <>
                <div>About</div>
                <button onClick={goHome}>点我去主页</button>
            </>
        )
    }
    ```
* 其他跳转
```jsx
// go(-1)  goBack()
navigate(-1)

// goForward()
navigate(1)
```
:::
::::
### 组件外跳转
:::: tabs
::: tab label=history库
* react-router6不支持组件外跳转的API，需要借助`history`库
```shell
npm i history
```
* 创建单例history对象`utils/history/history.ts`
```ts
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export default history;
```
:::
::: tab label=路由包装
```jsx
import React, {useLayoutEffect, useState, memo} from "react";
import type { History } from "history";
import type { BrowserRouterProps as NativeBrowserRouterProps } from "react-router-dom";
import { Router } from "react-router-dom";

export interface BrowserRouterProps
  extends Omit<NativeBrowserRouterProps, "window"> {
  history: History;
}

const BrowserRouter: React.FC<BrowserRouterProps> = (props) => {
  const { history, ...restProps } = props;
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  // 监听路由变化，然后调用 setState 手动变换当前 Router 指定路径
  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...restProps}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default memo(BrowserRouter);
```
:::
::: tab label=定义路由
```jsx{7,8,28,30}
import React, { Suspense, useContext, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import Error from "pages/Error";

// 用自定义的包装路由 而不是react-router6的路由
import BrowserRouter from "./utils/History/HistoryRouter";
import history from "./utils/History/history";

const router = [
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "error",
    element: <Error />,
  },
];

const Elements = () => {
  return useRoutes(router);
};

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter history={history}>
        <Elements />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
```
:::
::: tab label=路由外跳转
* `utils/fetch.js`
```js{25-26,29-30}
import fetch from "axios";
import history from "./History/history";
import { getBaseUrl } from "./urlPathTool";

const baseUrl = `${getBaseUrl()}/dev/`; // http://localhost:8080/dev

const commonRequest = async (
  method: string,
  path: string,
  arr: { params?: any; data?: any }
) => {
  const options = {
    method,
    url: `${baseUrl}${path}`,
    ...arr,
  };

  try {
    const response = await fetch(options);
    return response.data.data;
  } catch (err: any) {
    if (err && err.response) {
      if (err.response.data.code === 401) {

        // 路由外跳转
        history.replace("/login");
      } else if (err.response.data.code === 500) {

        // 路由外跳转
        history.replace("/error");
      }
      throw err;
    }
  }
};

export function get(url: string, params = {}) {
  return commonRequest("get", url, { params });
}

export function post(url: string, data = {}) {
  return commonRequest("post", url, { data: { ...data } });
}

export function put(url: string, data = {}) {
  return commonRequest("put", url, { data: { ...data } });
}

export function del(url: string, data = {}) {
  return commonRequest("delete", url, { data: { ...data } });
}
```
:::
::::
### 其他
:::: tabs
::: tab label=懒加载
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
::: tab label=错误兜底
* 路由表`*`匹配所有，**放在最下面**
    ```jsx
    {
        path: '*',
        element: <Err />
    }
    ```
:::
::: tab label=useInRouterContext
* 查看是否在路由包裹的上下文中
    ```js
    console.log(useInRouterContext()); // true / false
    ```
>作用：如果封装第三方组件库，或封装功能性插件，可以用此方法查看是否被`BrowserRouter`/`HashRouter`包裹
:::
::: tab label=useNavigationType
* 可以查看当前页面的进入方式，如果是`POP`则是从浏览器直接打开的页面(刷新)
```jsx
console.log(useNavigationType()); // POP REPLACE PUSH
```
:::
::: tab label=useResolvedPath
* url解析器，解析出一串url的 path / search / hash
```jsx
console.log(useResolvedPath('/about?id=asdf&i=aa'));
/* { 
    hash: ""
    pathname: "/about"
    search: "?id=asdf&i=aa"
  }
*/
```
:::
::: tab label=useOutlet
* 展示嵌套路由中**子路由渲染对象**，没有则显示null
```jsx
console.log(useOutlet());
```
:::
::::
