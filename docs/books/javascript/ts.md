---
title: 《深入理解TypeScript》
date: 2022-01-29
---
## 第一章 入门配置
:::: tabs
::: tab label=node运行
* node运行环境
```shell
npm i ts-node -g

# 依赖库
npm i tslib @types/node -g

# vscode可以直接运行
ts-node file.ts
```
:::
::: tab label=node编译
* 编译环境
    * tsc
    * babel
>tsc
```shell
npm i typescript -g

tsc --version

tsc file.ts
```
:::
::: tab label=webpack编译
```shell
npm i webpack webpack-cli -D
npm i ts-loader typescript -D

# 初始化ts配置文件
tsc --init

# 本地开发服务器
npm i webpack-dev-server -D
npm i html-webpack-plugin -D
```
```js
// webpack.config.js
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {},
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html"
        })
    ]
}
```
:::
::: tab label=tslint
* 生成tslint规范文件，编写代码期间会有规范提示
```shell
npm i tslint typescript -g

tslint --init
```
:::
::: tab label=技巧
* 编码期间同一个文件夹下的ts文件视为同一个作用域，同一个变量名会报错。可以用`export`让编译器认为是单独作用域
```js
export {}
```
:::
::::
## 第二章 类型检测
:::: tabs
::: tab label=变量
* 变量的类型
>注：ts是JS的超集，不设置严格模式的情况下可以不声明类型。
```ts
let num: number = 1;
num = 1000;
```
```ts
// 小写的number和Number是不一样的
let num: Number = 1;
```
>小写的是ts设置的number类型，大写的是JS包装类的类型，
* 类型推导
```ts
// 默认num就是string类型了
let num = '23';
```
:::
::::