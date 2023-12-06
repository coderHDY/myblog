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
* 与`||`操作符不同点：【||】会转化成布尔值判断，【??】就是判断有没有
    * 处理0和空字符串。
    ```ts
    // const n = 0;
    const n = '';

    const msg = n ?? '你好~';
    console.log(msg); // ''

    const msg2 = n || '你好~';
    console.log(msg2); // '你好~'
    ```
    * 处理字段不存在
    ```ts
    const config = {
        showLoading: false,
    }

    const showloading = config.showLoading || true;
    const showloading2 = config.showLoading ?? true;

    console.log(showloading); // true
    console.log(showloading2); // false
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
>原本options推理出来methods是`string`类型，但是需要强制变为字面量类型`RequestMethods`，就需要用const让他内部也推理出字面量类型
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
| 修饰符    | 访问空间                              |
| --------- | ------------------------------------- |
| public    | 公共访问(默认)                        |
| protected | 类内部及其子类中访问                  |
| private   | 只有类的内部可以访问                  |
| readonly  | 只能在constructor中赋值(**浅层管制**) |

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

| 功能                         | interface | type   |
| ---------------------------- | --------- | ------ |
| &/extends继承                | 允许      | 允许   |
| implements实现               | 可以      | 可以   |
| 基本类型别名、联合类型、元组 | 不可以    | 可以   |
| typeof关键字赋值             | 不可以    | 可以   |
| 同名合并                     | 可以      | 不可以 |

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
::: tab label=常量枚举
* 枚举加const是常量枚举，编译阶段会被删除
```ts
const enum A {
  a = "188",
  b = "288",
  c = "388",
}

// Error, const
Object.values(A)
```
:::
::: tab label=赋值限制
* 虽然值一样，但也必须用`Enum.p`的形式赋值
```ts
enum Res {
  No = "不接受",
  Yes = "接受",
  Or = "再考虑考虑",
}

type R = typeof Res;

const r: R = {
  No: "不接受", // Err: Type '"不接受"' is not assignable to type 'Res.No'.
  Yes: Res.Yes,
  Or: Res.Or,
};
```
:::
::: tab label=键集合
```ts
enum Res {
  No = "不接受",
  Yes = "接受",
  OR = "再考虑考虑",
}

type R =  typeof Res;
// type R = "No" | "Yes" | "OR"
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
## 第七章 特殊关键字
### const
* 将一个值的集合变成`readonly`
```ts
const a = ["1", 2] as const;

a[1] = 3; // error
```
### Extract
* 从属性集里面摘出几个属性
```ts
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
     
// type T0 = "a"
```
```ts
function getAttr<T, K extends Extract<keyof T, string>>(o: T, p: K) {
  // 对象属性键值原本是 symbol | string | number
  const s: string = p;
  return o[p];
}

getAttr({ name: "1" }, "name");
```
### ReturnType
* 函数的返回类型
```ts
const a = () => {
  return "hello world!"
}

type b = ReturnType<typeof a>
// type b = string
```
### Enum
* 枚举类型
```ts
enum Res {
  No,
  Yes,
  OR,
}

/* 同 */
// enum Res {
//   No = 0,
//   Yes = 1,
//   OR = 2,
// }

// 直接获取
const no: Res = Res.No;

// 间接获取
const key = "Yes";
const yes = Res[key];

console.log(no);

```
### typeof 
* 获取已知变量的对应的类型
```ts
enum UserResponse {
  No,
  Yes,
  OR,
}

type all = keyof typeof UserResponse;
// type all = "No" | "Yes" | "OR"
```
### 索引访问类型
* 通过索引关系两个类型
```ts
type Person = {
  name: string;
  age: number;
  friends: Person[];
}

type Name = Person["name"];
// type Name = "string"

type AgeName = Person["name" | "age"];
// type Name =  string | number

type allPersonKeys = Person[keyof Person];
// type allPersonKeys = string | number | Person[]
```
* 索引`number`访问所有类型生成新类型
```ts
const arr = [
  {name: "黄", friends: ["a"]},
  {name: "黄", age: 18},
];

type P = typeof arr[number]
/*
  type P = {
    name: string;
    age?: undefined;
  } | {
    name: string;
    age: number;
  }
*/
```
* 结合`const`固定类型，将`数组类型`生成`联合类型`
```ts
const app = ["淘宝", "天猫", "支付宝"] as const;

type App = typeof app[number];
// type App = "淘宝" | "天猫" | "支付宝"
```
* `枚举索引`获取对象所有值类型
```ts
const person = {
  name: "黄",
  age: 18,
  books: ["JS", "python"]
} as const;

type P = typeof person[keyof typeof person];
// type P = "黄" | 18 | readonly ["JS", "python"]
```
### 三元表达式
```ts
type A = {
  id: number;
}
type B = {
  name: string;
}
 
// 三元表达式根据入参数判断返回值类型
function createLabel<T>(id: T): T extends number ? A : B;

function createLabel(id): A | B {
  throw "unimplemented";
}

const a = createLabel(1);
// type a = A
```
### Exclude
```ts
interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = {
  [P in keyof Circle as Exclude<P, "kind">]: Circle[P];
}

// type KindlessCircle = {
//   radius: number;
// }
```
* 配合泛型制造返回值
* 返回值比入参少属性
```ts
interface Circle {
  kind: "circle";
  radius: number;
}
function a<T, K extends keyof T>(
  o: T,
  p: K
): {
  [P in keyof T as Exclude<P, K>]: T[P];
} {
  delete o[p];
  return o;
}

const c: Circle = {
  kind: "circle",
  radius: 10,
};

const x = a(c, "kind");
// const x: {
//   radius: number;
// }
```
### 映射类型
```ts
type isTypeHasFoot<T> = {
[P in keyof T]: T[P] extends number ?  T[P] : never;
}

interface Animal {
  foot: number;
  hand: number;
  head: string;
}

type B = isTypeHasFoot<Animal>;
// type B = {
//   foot: number;
//   hand: number;
//   head: never;
// }
```
### 模板字符串
```ts
enum Actions {
  a = "click",
  b = "touchstart",
  c = "touchmove",
}

type enumIds = `on${Capitalize<Actions>}`;
// type enumIds = "onClick" | "onTouchstart" | "onTouchmove"
```
### 字符串内置操作符
```ts
enum Actions {
  a = "click",
  b = "touchstart",
  c = "touchmove",
}

// 首字母大写
type A = `on${Capitalize<Actions>}`;
// type A = "onClick" | "onTouchstart" | "onTouchmove"

// 首字母小写
type D = `on${Uncapitalize<Actions>}`;
// type D = "onclick" | "ontouchstart" | "ontouchmove"


// 大写
type B = `on${Uppercase<Actions>}`;
// type B = "onCLICK" | "onTOUCHSTART" | "onTOUCHMOVE"

// 小写
type C = `on${Lowercase<Actions>}`;
// type C = "onclick" | "ontouchstart" | "ontouchmove"

```
## 第八章 工具类型
### Partial
* 将一个属性集全部变成**可选类型**
```ts
interface People {
  name: string;
  age: number;
  friends: People[];
}

type PeopleParams = Partial<People>
// type PeopleParams = {
//   name?: string | undefined;
//   age?: number | undefined;
//   friends?: People[] | undefined;
// }
```
### Required
* 将一个属性集全部变成**必填类型**，与`Partial`相反
```ts
interface People {
  name?: string;
  age?: number;
  friends?: People[];
}

type PeopleParams = Required<People>
// type PeopleParams = {
//   name: string;
//   age: number;
//   friends: People[];
// }
```
### Readonly
* 将一个属性集全部变成**只读**
```ts
interface People {
  name: string;
  age: number;
  friends?: People[];
}

type PeopleParams = Readonly<People>
// type PeopleParams = {
//   readonly name: string;
//   readonly age: number;
//   readonly friends?: People[] | undefined;
// }
```
### Record
* 将一个键集合**映射**为一个值的集合，生成一个新类型
```ts
interface People {
  name: string;
  age: number;
  friends?: People[];
}

interface Company {
  boss: string;
  marketing: string;
  programer: string;
}

type CompanyPeoples = Record<keyof Company, People>
// type CompanyPeoples = {
//   boss: People;
//   marketing: People;
//   programer: People;
// }
```
### Pick
* 将一个类型**筛选**出一部分类型出来做成一个新类型
```ts
interface People {
  name: string;
  age: number;
  friends?: People[];
}

type CompanyPeoples = Pick<People, "name" | "age">;
// type CompanyPeoples = {
//   name: string;
//   age: number;
// }
```
### Omit
* 将一个类型**剔除掉**一部分做出一个新的类型，和`Pick`相反
```ts
interface People {
  name: string;
  age: number;
  friends?: People[];
}

type SchoolPeoples = Omit<People, "name" | "age">;
// type SchoolPeoples = {
//   friends?: People[] | undefined;
// }
```
### Exclude
* 将一个`联合类型`**剔除掉**一部分做出一个新类型
```ts
type People = "boss" | "marketing" | "programer";

type SchoolPeoples = Exclude<People, "boss">;
// type SchoolPeoples = "marketing" | "programer"
```
### Extract
* 将一个`联合类型`**提取出**一部分做出一个新类型
```ts
type People = "boss" | "marketing" | "programer";

type SchoolPeoples = Extract<People, "boss">;
// type SchoolPeoples = "boss"
```
### NonNullable
* 把一个类型剔除掉`null`和`undefined`
```ts
type People = "boss" | null;

type SchoolPeoples = NonNullable<People>;
// type SchoolPeoples = "boss"
```
### Parameters
* 合并所有**函数的参数类型**
```ts
type Fn1 = (s: string) => string;
type Fn2 = (n: number) => void;

type SchoolPeoples = Parameters<Fn1 | Fn2>;
// type SchoolPeoples = [s: string] | [n: number]
```
### ConstructorParameters
* 一个`类`的**构造函数**的入参类型
```ts
type SchoolPeoples = ConstructorParameters<ErrorConstructor>;
// type SchoolPeoples = [message?: string | undefined, options?: ErrorOptions | undefined]
```
### ReturnType
* 一个函数的返回类型
```ts
type Fn1 = (s: string) => string;

type SchoolPeoples = ReturnType<Fn1>;
// type SchoolPeoples = string
```
### InstanceType
* 获取`class`的实例类型
>直接拿`class`做类型是一样的，可能调用第三方库的时候有用
```ts
class A {
  constructor() {}
}

type B = InstanceType<typeof A>;

const a: B = new A();
```
## 装饰器
*  将多个`class`内共有的方法抽出来
```ts
@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter("world"));

function classDecorator(
  constructor: typeof Greeter,
  context: ClassDecoratorContext<typeof Greeter>
): void | typeof Greeter {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}
```
## 命名空间
### 追加声明
* 在一个已有的对象/类/模块内添加声明
```ts
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
  export let suffix = "";
  export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));

console.dir(buildLabel);
// [Function: buildLabel] { suffix: '', prefix: 'Hello, ' }
```
### 做类型合并
* 给枚举添加函数类型
>直接给枚举添加函数类型是不被通过的，可以通过命名空间追加导出的形式追加其他属性
```ts
enum Color {
  red = 1,
  green = 2,
  blue = 4,
}

namespace Color {
  export function mixColor(colorName: string) {
    if (colorName == "yellow") {
      return Color.red + Color.green;
    } else if (colorName == "white") {
      return Color.red + Color.green + Color.blue;
    } else if (colorName == "magenta") {
      return Color.red + Color.blue;
    } else if (colorName == "cyan") {
      return Color.green + Color.blue;
    }
  }
}

console.log(Color);
// {
//   red: 1,
//   green: 2,
//   blue: 4,
//   mixColor: [Function: mixColor]
//   '1': 'red',
//   '2': 'green',
//   '4': 'blue',
// }
```
## 模块声明文件
* `xxx.d.ts`文件追加已有的声明
::: tip
* 只在本目录及子目录生效
:::
### 声明扩展
* 扩展已有说明
```ts
declare module "react/jsx-runtime" {
  declare global {
    interface Window {
      ActiveXObject: any;
      isCloseHint: boolean;
    }

    namespace NodeJS {
      interface Global {
        globalBaseUrl: string;
      }
    }
  }
}

// 全局可访问
window.isCloseHint
```
### JSX
* 可以做jsx文件内的类型声明
* 声明一个标签元素
```tsx
declare namespace JSX {
  interface IntrinsicElements {
    foo: { bar?: boolean }
  }
}

// `foo`的元素属性类型为`{bar?: boolean}`
<foo bar />;
```