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
:::
::::