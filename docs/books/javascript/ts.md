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
>注：ts是JS的**超集**，不设置严格模式的情况下可以不声明类型。
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
::: tab label=数组/对象/元组
* 数组
```ts
// jsx语法中有冲突
const arr: Array<string> = [];

// 推荐
let b: string[] = [];
```
* 对象
```ts
type Info = {
    name: string | null;
    age: number;
}

const info: Info = {
    name: null,
    age: 19
}
```
* 元组：一个数组中按序存固定类型
```ts
const msg: [string, number, number] = ['hdy', 18, 170];
```
:::
::: tab label=函数
```ts
// 无返回：void或者不写
function sum(a: number, b: number): void {
    console.log(a + b);
}
```
```ts
// 永远无返回：never
function sum(): never {
    while(true) {}
}

function warn(): never {
    threw new Error();
}
```
```ts
// 规范函数类型
type myFn =  (a: number, b: number) => number;

function fn(a: number, b: number) {
    return a + b;
}

const fn2: myFn = (c, d) => c * d;

const arr: myFn[] = [ fn, fn2 ];
```
:::
::: tab label=泛型
* 函数入参定义好某个未知类型，但执行过程中此类型不应该被改变。函数内部以及返回值也能够固定好。 
```ts
function reverse<T, F>(a: T, b: F): [F, T] {
    return [b, a];
}
const info1: [string, number] = ['hdy', 18];

const info2: [number, string] = reverse(...info1);

```
:::
::: tab label=any/unknown
* unknown和any的区别：
    * unknown只能赋值给any/unknown类型
    * any可以赋值给任意类型
```ts
let a: string;
let b: unknown = 1;
let c: any = 2;

a = b; // err
a = c; // ok
```
:::
::: tab label=never
* switch穷举情况时，所有情况都没有匹配，给一个默认报错
```ts
function core(msg: string | number) {
    switch(typeof msg) {
        case 'string':
            console.log('string');
            break;
        case 'number':
            console.log('string');
            break;
        default:
            const check: never = msg;
    }   
}

const a = true;
core(a);
```
:::
::: tab label=可选/联合
```ts
function add(a: number, b?: number) {
    if (b) {
        return a + b;
    } else {
        return a
    }
}
```
:::
::: tab label=类型合集
* `number`/`string`/`boolean`/`null`/`symbol`/`any`/`unknown`

* number包括二进制、八进制、十六进制
```js
let a: number = 100;
let b: number = 0b100;
let c: number = 0o100;
let d: number = 0x100;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```
:::
::::
## 第三章 类型定义
:::: tabs
::: tab label=类型别名
```ts
type property = number | string | undefined;
function add(a: property) {
    return a;
}
```
```ts
type myObj = {
    name: string;
    age: 18;
}

function fn(myObj: myObj) {}
```
:::
::::