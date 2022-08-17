---
title: modules模块化
date: 2022-08-17
categories: 
- 前端难点
---
## ESM模块化原理
::: tip
1. import 变量有提升
2. 执行前按顺序解析所有import变量
3. 生成依赖关系图
4. 执行
5. 执行过程中遇到循环依赖
   1. 先赋值undefined
   2. 有一个动态引用
   3. import依赖的包执行完了得到了对应的export值
   4. 动态引用解析为正确的值
:::
## 动态引用
:::: tabs
::: tab label=ESM
* index.html
    ```html
    <body>
        <script src="./a.js" type="module"></script>
    </body>
    ```
* a.js
    ```js
    import { b, add, show } from "./b.js";

    add();
    add();
    add();
    show(); // 3

    console.log('a文件中的b：', b); // 3
    ```
* b.js
    ```js
    let b = 0;

    const add = () => b++;
    const show = () => console.log('b的值：', b);

    export { b, add, show }
    ```
>a中数值也在同步增加，说明a、b拿的是同一个值，所以说`ESM是值的引用`
:::
::: tab label=commonJS对比
* a.js
    ```js
    const { b, add, show } = require("./b.js");

    add();
    add();
    add();
    show(); // 3

    console.log('a文件中的b：', b); // 0
    ```
* b.js
    ```js
    let b = 0;

    module.exports.b = b;
    module.exports.add = () => b++;
    module.exports.show = () => console.log('b的值：', b);
    ```
>a和b的值不同，说明不是同一个值，所以`CommonJS是值的拷贝`
:::
::::
## 循环依赖
:::: tabs
::: tab label=ESM
* index.html
    ```html
    <body>
        <script src="./a.js" type="module"></script>
    </body>
    ```
* a.js
    ```js
    import b from './b.js';
    console.log(b); // b

    const a = 'a';
    export default a;
    ```
* b.js
    ```js{3,4,6}
    import a from './a.js';

    // 报错 / undefined ,根据环境不同
    // console.log(a); 

    // setTimeout(() => console.log(a)); // a

    const b = 'b';
    export default b;
    ```
>ESM执行有一个依赖关系图，`a -> b`，`b -> a`，
1. a文件执行，export`变量提升`导出a，但是**a变量并没有初始化**。执行import b
2. b文件执行，import拿到变量a，但**a文件并没有执行到初始化变量a的位置，所以变量a未初始化**
3. b文件使用a报错，因为未初始化变量a
4. b执行完了，所以导出的b变量也初始化完成了
5. a文件执行，正常使用b变量
* 如果b文件不同步使用a变量，就不会出现这个问题，因为使用的时候a文件已经执行完毕，**变量a初始化完成了**
:::
::: tab label=commonJS对比
* a.js
    ```js
    const { b } = require('./b.js');
    console.log(b); // b

    const a = 'a';
    module.exports.a = a;
    ```
* b.js
    ```js
    const { a } = require('./a.js');
    console.log(a); // undefined

    const b = 'b';
    module.exports.b = b;
    ```
>CommonJS执行记录依赖过的对象，**exports会变量提升**，依赖过一次，就用上一次的文件解析到的位置进行`eval()`执行。  
1. a执行`exports变量提升`，但是未赋值，全是undefined
2. a执行到require("b")，`中断`执行去读取b文件
3. b文件依赖a文件，CommonJS有a文件执行记录，所以返回a文件`中断前已执行的部分`，**由于a没执行完，所以拿到变量a为undefined**
4. b执行完返回执行a文件，所以a文件拿到正确的值
:::
::::
## 总结
::: tip
* EMS本质是：依赖关系图 + 值的引用
* CommonJS本质是：eval函数 + 值的拷贝
* 共同点是：export变量提升 + 挂起本文件执行、先执行被引用文件
:::