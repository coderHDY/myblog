---
title: 《深入理解TypeScript》
date: 2022-01-29
sticky: 2
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
* 字面量赋值时的规范方法
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
            const check: never = msg; // 前面都没有匹配，这是编译期间就报错的方法
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
```ts
type Age = string | number;
const age: Age = 18;
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
## 第三章 函数类型
:::: tabs
::: tab label=类型别名
* `type`就是类型的别名
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
::: tab label=断言
* 将一个更广泛的类型指定成一个更精确的类型。
```ts
// 原本取到的是HTMLElement，但是没有src属性，所以需要更精确的告诉ts这是一个img标签。
const el = document.getElementById('.img') as HTMLImageElement;
el.src = '';
```
```ts{9}
class Animal {}
class Cat extends Animal {
    eat() {
        console.log('eat');
    }
}
function fn(a: Animal) {
    if (a instanceof Cat) {
        (a as Cat).eat();
    }
}
const c = new Cat();
fn(c);
```
```ts
let msg: string | number = 'hello';
let num: number;

if (2 > 1) {
    msg = 1;
}

num = msg as number;
```
:::
::: tab label=非空断言
* 保证这个是一定有值的，编译通过。
```ts
// 处理报错：Object is possibly 'undefined'.
function fn(msg?: string) {
    console.log(msg!.length);
}

fn('aaa');
```
:::
::: tab label=【??】
* ECMA2020新特性
* 与`||`操作符不同点：处理0和空字符串的不同。
```ts
// const n = 0;
const n = '';

const msg = n ?? '你好~';
console.log(msg); // ''

const msg2 = n || '你好~';
console.log(msg2); // '你好~'

```
:::
::: tab label=字面量类型
* 字符串常量
```ts
const msg: 'Hello' = 'Hello';
```
* 配合联合类型
```ts
type Name = 'hdy' | '张三' | '李四';
const name: Name = 'hdy';
```
* 字面量推理
>原本options推理出来methods是`string`类型，但是需要强制变为字面量类型`RequestMethods`，就需要用congst让他内部也推理出字面量类型
```ts
type RequestMethods = 'GET' | 'POST';

const options = {
    url: 'www.xxx.com',
    methods: 'POST'
} as const;

function request(url: string, methods: RequestMethods) {}

request(options.url, options.methods);
```
:::
::: tab label=this推导
* 如果function内部有使用this，第一个参数需要指定`this类型`，**调用时可以忽视**
```ts{1-3}
function sayName(this: {name: string;}) {
    console.log(this.name);
}

const me = {
    name: 'hdy',
    sayName
}

me.sayName();
```
:::
::: tab label=泛型
* 泛型定义：将类型进行参数化
* 函数入参定义好某个未知类型，但执行过程中此类型不应该被改变。函数内部以及返回值也能够固定好。 
```ts
function reverse<T, F>(a: T, b: F): [F, T] {
    return [b, a];
}
const info1: [string, number] = ['hdy', 18];

const info2: [number, string] = reverse(...info1);

```
* 泛型继承
```ts
function add<T extends number>(num1: T, num2: T): T {
    return (num1 + num2) as T;
}

console.log(add(1, 2));
```
* 默认类型
```ts
interface Info<N = string, A = number> {
    name: N;
    age: A;
}
const info: Info<string, string> = {
    name: 'hdy',
    age: '18岁'
}
```
:::
::: tab label=重载
* 函数的重载：**函数的名称相同，入参和返回值不同，**
* ts规则：多个定义，一个实现，实现用宽泛类型any
* 只有匹配到重载的定义了，才会调用重载函数的实现。
```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

function add(a: any, b: any): any {
    return a + b;
}

console.log(add(1, '18')); // 118
```
>如果联合类型就能实现，尽量直接使用联合类型
:::
::::
## 第四章 类和接口
:::: tabs
::: tab label=继承
* **只能继承单个类，可以实现多接口**
* 继承如果constructor要使用this，用`super(...args)`初始化this
* 继承调用父类方法用`super.fn`
```ts{13,17}
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    say() {
        console.log('你好，我是小动物！');
    }
}
class Cat extends Animal {
    age: number;
    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }
    say() {
        super.say();
        console.log('你好，我是小猫！');
    }
}

const cat = new Cat('Katty', 18);
cat.say();
```
:::
::: tab label=修饰符
|修饰符|访问空间|
|---|---|
|public|公共访问(默认)|
|protected|类内部及其子类中访问|
|private|只有类的内部可以访问|
|readonly|只能在constructor中赋值(**浅层管制**)|

```ts{2-3,8-9}
class Animal {
    protected name: string = 'hdy';
    private age: number = 18;
}

class Cat extends Animal {
    say() {
        console.log(this.name);
        // console.log(this.age); // error
    }
}
```
:::
::: tab label=访问器
* 利用私有属性`private`和`getter`、`setter`制作访问器
```ts
class Animal {
    private _name: string = 'hdy';
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
}

const ani = new Animal();
console.log(ani.name);
```
:::
::: tab label=抽象类
* 规则：
    * 抽象函数必须存在抽象类里面
    * 抽象类不能创造实例
    * 继承中：抽象方法在需要构造实例的类里面必须被实现
```ts{1-3,5,8}
abstract class Animal {
    abstract say(): any;
}
class Cat extends Animal {
    say() { console.log('猫叫了')}
};
class Dog extends Animal {
    say() { console.log('狗叫了')}
};

function say(instance: Animal[]) {
    instance.forEach(animal => animal.say());
}

say([new Cat(), new Dog()]);
```
:::
::: tab label=接口
```ts
interface Info {
    name: string;
    age: number;
    readonly height: number;
}
const p: Info = {
    name: 'hdy',
    age: 18,
    height: 171,
}
```
>索引规范
```ts
//定义数组
interface FnArr {
    [index: number] : (args: any) => any;
}

const Arr: FnArr = [
    (n: number) => console.log(n),
    (s: string) => console.log(s),
]
```
>函数规范(用type阅读性更强，不推荐)
```ts
interface Add {
    (n1: number, n2: number): number
}

const add: Add = (num1, num2)=> num1 + num2
```
:::
::: tab label=面向接口编程
>多个类需要实现的**重要方法**用接口定义出来，然后`implements`实现。  
>函数定义的时候可以要求入参实现接口，让入参必须拥有该方法
```ts{13-15}
interface Run {
    run: () => void;
}
class People implements Run{
    name = 'hdy';
    run() { console.log('人在跑') }
}
class Animal implements Run{
    say() {}
    run() { console.log('动物在跑') }
}

function fn(canRunIst: Run) {
    canRunIst.run();
}

fn(new People);
fn(new Animal);
```
:::
::: tab label=implements
```ts
interface Info {
    name: string;
    age: number;
}
class People implements Info {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```
>一个类可以实现多个接口，用【,】隔开
:::
::: tab label=interface和type
>interface和type的区别

|功能|interface|type|
|---|---|---|
|&/extends继承|允许|允许|
|implements实现|可以|可以|
|基本类型别名、联合类型、元组|不可以|可以|
|typeof关键字赋值|不可以|可以|
|同名合并|可以|不可以|

```ts
/// typeof赋值type
let p: string | number = 123;

type pType = typeof p;

let q: pType = 'asdf'; // err
```
```ts
// interface合并
interface Info {
    name: string;
}

interface Info {
    age: number;
}

const me: Info = {
    name: 'hdy',
    age: 18
}
```
:::
::::
## 第五章 枚举/promise
:::: tabs
::: tab label=枚举
* 优势：让代码可读性更强
* 优势：编译成数字，性能更好
```ts
enum Direction {
    LEFT,
    RIGHT,
    UP,
    DOWN,
}
function fn(dir: Direction) { console.log(dir)}

fn(Direction.LEFT); // 0
fn(Direction.RIGHT); // 1
fn(Direction.UP); // 2
fn(Direction.DOWN); // 3
```
:::
::: tab label=promise
* promise声明时可以传入泛型，告诉resolve该传入什么类型。
```ts
new Promise<string>((resolve, reject) => {
    resolve('111');
}).then(res => console.log(res.length));
```
:::
::::
## 第六章 类型查找
:::: tabs
::: tab label=类型查找
* ts类型声明查找范围
    1. 内置声明文件(例：HTMLElement)
    2. 外部定义类型声明
    3. 自己定义类型声明
* 所以如果引用第三方库，如果提示错误，代表第三方库没有类型声明。
:::
::: tab label=d.ts
* `.d.ts`文件，声明文件
* 第三方库如果没有类型声明，可以去[这个网址](https://www.typescriptlang.org/dt/search)查找有没有外部帮忙编写好的ts文件
    * 末尾有命令，直接安装使用就有类型提示了
* 自己声明，告诉ts检测，这个东西是一定有的。在目录下添加`.d.ts`文件就行
```ts
// types/index.d.ts
declare module 'lodash' {
    export function say(num: number): void;
    export let name: string;
}

declare let cat: string;
declare function say(): string;
```
```ts
// 文件声明
declare module '*.jpg';
declare module '*.png';
declare module '*.css';
```
```ts
// 命名空间的声明，一般在html内引用别的模块，可以在自己ts代码内部再声明
declare namespace $ {
    export function ajax(settings: any): any;
}

// 声明好的全局可以直接使用。
$.ajax(setting)
```
:::
::::