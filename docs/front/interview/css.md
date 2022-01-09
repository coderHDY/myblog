---
title: css相关
date: 2022-01-09
tags:
 - 面试题
---
## 盒子居中
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
## 实现三角形
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
## 循环列表色
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