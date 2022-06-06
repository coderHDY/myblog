---
title: react脚手架
date: 2022-02-15
---
## 起步
:::: tabs
::: tab label=安装
```shell
npm i -g create-react-app
```
```shell
create-react-app demo
```
>项目启动如果报错，关闭dev-tools  
>`reportWebVitals`：用来分析网页性能的库  
* `React.StrictMode`：用来规范React写法的，因为React每个版本都有很多新的API不被推荐了，所以用一个严格模式进行写法限制
:::
::: tab label=noscript
* 当前浏览器环境不支持js代码会展示
```html{8}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <noscript>呵呵，垃圾浏览器，连js都不支持！</noscript>
</head>
<body>
    
</body>
</html>
```
:::
::: tab label=插件
* vscode语法提示：ES7+ React/Redux/React-Native snippets
* uuid：生成唯一序列码
:::
::::
## 使用hook
:::: tabs
::: tab label=使用hook
* 函数式组件，需要使用useState/useRef/useEffect来填补没有this/生命周期的缺陷。
* 同时，也可以利用hook将数据及操作数据的方法进行封装，暴露出对应的数据及方法，在组件内直接调用，组件代码更清晰。
```jsx
export default function TodoList() {
    const {
        jobs,
        addJob,
        deleteJob,
        toggleDone,
        clear
    } = useJobs();
    return (
        <div>
            <Add addJob={addJob} />
            <List jobs={jobs} deleteJob={deleteJob} toggleDone={toggleDone}/>
            <Footer clear={clear} jobs={jobs}/>
        </div>
    )
}
```
:::
::: tab label=useJobs
```js
import React, { useState } from 'react';
function useJobs() {
    const [jobs, setJobs] = useState([])
    const addJob = (job) => {
        const item = {
            id: uuid(),
            done: false,
            job
        }
        setJobs( [item, ...jobs] );
    }
    const deleteJob = (id) => {
        const newJobs = jobs.filter(item => item.id !== id);
        setJobs(newJobs);
    }
    const toggleDone = (id) => {
        const newJobs = jobs.map(item => {
            if (item.id === id) {
                item.done = !item.done;
            }
            return item;
        })
        setJobs(newJobs);
    }
    const clear = () => setJobs([]);
    return {
        jobs,
        addJob,
        deleteJob,
        toggleDone,
        clear
    }
}
```
:::
::::
## 跨域
:::: tabs
::: tab label=setupProxy
* [文档](https://create-react-app.dev/docs/proxying-api-requests-in-development)
* 在src同级目录下配置setupProxy.js文件
* app.use可以接收多个proxy代理
```js
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy.createProxyMiddleware('/api1', {
      target: 'http://localhost:8888',
      changeOrigin: true,
      pathRewrite: {'^/api1': ''}
    })
  )
}
```
:::
::: tab label=请求
* 开头用指定好的url开头段，就会进行node代理发送
```jsx{6}
import React, { Component } from 'react'

export default class TodoList extends Component {
  componentDidMount() {
    console.log('fetch...');
    fetch('/api1/info', {
      method: 'GET'
    }).then(res => res.json())
    .then(res => console.log(res));
  }
  render() {
    return (
      <div>TodoList</div>
    )
  }
}

```
:::
::: tab label=package.json
* 请求源服务器资源不存在时，再转发请求
* 劣势：只能配置一个跨域服务器，有多个跨域服务器就要用setupProxy
```json
"proxy": "http://localhost:8888"
```
* 对应请求
```js
fetch('/info', {
    method: 'GET'
}).then(res => res.json())
.then(res => console.log(res));
```
>react-scripts模块中从2开始改变了proxy的配置方式，只能使用字符串配置，要复杂配置就用setupProxy
:::
::::
## pubsub
:::: tabs
::: tab label=使用
```shell
npm i pubsub-js
```
* 订阅
>注：有一个多余参数，是本事件的type
```js{4}
import PubSub from "pubsub-js";

const [isLoading, setIsLoading] = useState(false);
PubSub.subscribe('setIsLoading', (_, state) => setIsLoading(state));
```
:::
::: tab label=发布
```js{3,7}
const [data, setData] = useState([]);
const searchData = (_, tip) => {
    PubSub.publish('setIsLoading', true);
    fetch(`/api/search/users?q=${tip}`)
        .then(res => res.json())
        .then(res => {
            PubSub.publish('setIsLoading', false);
            setData(res.items)
        })
        .catch(rea => PubSub.publish('setIsErr', true))
}
```
:::
::: tab label=卸载
```js
const token = PubSub.subscribe('setIsLoading', fn);
PubSub.unsubscribe(token);
```
:::
::: tab label=hooks使用
```jsx{6-9,22}
import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js';

export default function Test() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const token = PubSub.subscribe('addOne', () => setCount(n => n + 1));
        return () => PubSub.unsubscribe(token);
    }, []);
    return (
        <>
            <div>count: {count}</div>
            <B />
        </>
    )
}

function B() {
    return (<C />)
}
function C() {
    const addOne = () => PubSub.publish('addOne');
    return (
        <>
            <button onClick={addOne}>+1</button>
        </>
    )
}
```
:::
::::
## antd
:::: tabs
::: tab label=安装
* [官网](https://ant.design/components/button-cn/)
>文档不够完整可以看3.x版本的文档
```js
// app.js
import 'antd/dist/antd.css';
```
* 组件内直接引入使用
```jsx
import React from 'react'
import { Button } from 'antd';
export default function Test() {
    return (
        <>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </>
    )
}
```
:::
::: tab label=按需引入
* css原本还是全部引入，有60KB，按序引入可以减少项目大小
* [react-app-rewired](https://github.com/timarney/react-app-rewired)
* 按需引入库：[ babel-plugin-import]
```shell
npm i react-app-rewired customize-cra babel-plugin-import
```
```json
// package.json
"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test",
}
```
```js
// config-overrides.js
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
```
* 组件引入
```js
import { Button } from 'antd';
```
:::
::: tab label=自定义主题
* 自定义主题暂时不能按需加载css文件
```shell
npm i @craco/craco craco-less
```
```js
// craco.config.js
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};

```
```js
// index.js
import 'antd/dist/antd.less';
```
:::
::::
## antd mobile
:::: tabs
::: tab label=使用
```shell
npm install --save antd-mobile@next
```
```js
import React from 'react'
import { Button } from 'antd-mobile';
export default function Test() {
    return (
        <>
            <Button block color='primary' size='large'>
                Block Button
            </Button>
        </>
    )
}

```
:::
::: tab label=主体色
```css
/* index.css */
:root:root {
    --adm-color-primary: #a062d4;
}
```
```js
// index.js
import './index.css';
```
:::
::::
## 样式适配
:::: tabs
::: tab label=pm2rem
* pm2rem
```shell
npm i postcss-px2rem customize-cra react-app-rewired
```
```js
// config-overrides.js
const { override, addPostcssPlugins } = require('customize-cra');
module.exports = override(
    addPostcssPlugins([require('postcss-px2rem')({ remUnit: 375 / 10 })])
);
```
```json
// package.json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test"
},
```
:::
::: tab label=字体适配方案
* 通过计算文档宽度，得出根文件的font-size，从而控制整个文件的rem大小
```js
function adaptor() {
    const width = document.documentElement.clientWidth;
    const size = width / 10;
    document.documentElement.style.fontSize = size + 'px';
}
adaptor()
window.onresize = adaptor;
```
:::
::: tab label=样式重置
```css
/* reset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}
```
:::
::::