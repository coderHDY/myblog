---
title: css相关
date: 2021-11-09
tags:
 - 面试题
---
## 1.盒子居中
:::: tabs
::: tab label=flex
```html{8-10}
<body>
    <div class="father">
        <div class="child"></div>
    </div>

    <style>
        .father {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 200px;
            height: 200px;
            background-color: #333;
        }
        .child {
            width: 100px;
            height: 100px;
            background-color: #fff;
        }
    </style>
</body>
```
:::
::: tab label=transform
```html{9,16-19}

<body>
    <div class="father">
        <div class="child"></div>
    </div>

    <style>
        .father {
            position: relative;

            width: 200px;
            height: 200px;
            background-color: #333;
        }
        .child {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            width: 100px;
            height: 100px;
            background-color: #fff;
        }
    </style>
</body>
```
:::
::: tab label=margin
* margin能做出水平自动居中
* 再配合flex的交叉轴居中
```html{8-9,16}
<body>
    <div class="father">
        <div class="child"></div>
    </div>

    <style>
        .father {
            display: flex;
            align-items: center;

            width: 200px;
            height: 200px;
            background-color: #333;
        }
        .child {
            margin: 0 auto;

            width: 100px;
            height: 100px;
            background-color: #fff;
        }
    </style>
</body>
```
:::
::::
## 2.实现三角形
:::: tabs
::: tab label=实现1
<img src="./assets/triangle.png" style="width:300px;">

---
```html{13-15}
<body>
    <div class="father">
        <div class="child"></div>
    </div>

    <style>
        .father {
            width: 100px;
            height: 100px;
            background-color: #fff;
        }
        .child {
            border-bottom:  solid #333 100px;
            border-left: solid transparent 50px;
            border-right: solid transparent 50px;
        }
    </style>
</body>
```
:::
::::
## 3.循环列表色
:::: tabs
::: tab label=题目
* 要实现一个列表三种颜色循环渲染

<img src="./assets/xunhuanliebiaose.png" style="width:300px;">

:::
::: tab label=实现
```html{22-30}
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

    <style>
        li {
            width: 100px;
            height: 25px;
            margin-top: 2px;
            list-style: none;
        }
        ul>li:nth-child(3N) {
            background-color: blue;   
        }
        ul>li:nth-child(3N + 1) {
            background-color: red;   
        }
        ul>li:nth-child(3N + 2) {
            background-color: green;   
        }
    </style>
</body>
```
:::
::::
## 4.自适应盒子
:::: tabs
::: tab label=问题
* 左侧固定长度
* 右侧盒子自适应
:::
::: tab label=calc
```html{8,16}
<body>
    <div class="father">
        <div class="left"></div>
        <div class="right"></div>
    </div>
    <style>
        .father {
            display: flex;
            height: 100px;
        }
        .left {
            width: 100px;
            background-color: red;
        }
        .right {
            width: calc(100% - 100px);
            background-color: blue;
        }
    </style>
</body>
```
:::
::: tab label=flex
```html{8,16}
<body>
    <div class="father">
        <div class="left"></div>
        <div class="right"></div>
    </div>
    <style>
        .father {
            display: flex;
            height: 100px;
        }
        .left {
            width: 100px;
            background-color: red;
        }
        .right {
            flex: 1;
            background-color: blue;
        }
    </style>
</body>
```
:::
::::
## 5.长宽固定比
:::: tabs
::: tab label=问题
* 长宽固定比例的盒子
:::
::: tab label=padding/margin
```html
<body>
    <div></div>
    <style>
        div {
            background-color: red;
            padding-bottom: 50%;
        }
    </style>
</body>
```
:::
::::
## 6.左右固定，中间自适应
:::: tabs
::: tab label=解
```html
<body>
    <div class="container">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
    </div>
    <style>
        .container {
            display: flex;
            justify-content: space-between;
            height: 30px;
        }
        .one {
            background-color: rgb(161, 95, 95);
            width: 30px;
        }
        .two {
            flex: 1;
            background-color: rgb(197, 46, 46);
        }
        .three {
            background-color: rgb(21, 28, 117);
            width: 30px;
        }
    </style>
</body>

```
:::
::::
## 7.匹配列表头尾几个元素
```html{25-30}
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>
    <style>
        ul {
            width: 100px;
        }
        li {
            height: 30px;
        }
        li {
            background-color: rgb(55, 177, 86);
            margin-top: 5px;
        }
        ul>li:nth-child(-n + 3) {
            background-color: rgb(214, 78, 78);
        }
        ul>li:nth-last-child(-n + 3) {
            background-color: rgb(67, 55, 177);
        }
    </style>
</body>
```
## 8.隐藏元素
:::: tabs
::: tab label=opacity
```html
<body>
    <div class="hide"></div>
    <style>
        div{
            height: 100px;
            width: 100px;
            background-color: red;
        }
        .hide {
            opacity: 0;
        }
    </style>
</body>
```
:::
::: tab label=display
```html
<body>
    <div class="hide"></div>
    <style>
        div{
            height: 100px;
            width: 100px;
            background-color: red;
        }
        .hide {
            display: none;
        }
    </style>
</body>
```
:::
::: tab label=font-size
* 仅对父盒子依据文字撑开的场景有效
```html
<body>
    <div class="hide">asdfasdfasdf</div>
    <style>
        div{
            /* height: 100px;
            width: 100px; */
            background-color: red;
        }
        .hide {
            font-size: 0;
        }
    </style>
</body>
```
:::
::: tab label=visibility
```html
<body>
    <div class="hide">asdfasdfasdf</div>
    <style>
        div{
            height: 100px;
            width: 100px;
            background-color: red;
        }
        .hide {
            visibility: hidden;
        }
    </style>
</body>
```
:::
::: tab label=content-visibility
* 使盒子内文字和图片等内容不可见
```html
<body>
    <div class="hide">asdfasdfasdf</div>
    <style>
        div{
            height: 100px;
            width: 100px;
            background-color: red;
        }
        .hide {
            content-visibility: hidden;
        }
    </style>
</body>
```
:::
::: tab label=position
* 移出文档流
```html
<body>
    <div class="hide">asdfasdfasdf</div>
    <style>
        div{
            height: 100px;
            width: 100px;
            background-color: red;
        }
        .hide {
            position: fixed;
            top: -1000px;
        }
    </style>
</body>
```
:::
::::