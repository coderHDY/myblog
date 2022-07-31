---
title: svg
date: 2022-07-30
---
## 引入方式

::: tip
1. 直接放svg标签
2. 以img路径导入svg文件
3. 以iframe形式导入

```html
<body>
    <svg width="100%" height="100%">
        <circle id="circle" cx="50" cy="50" r="50" fill="rgb(226 112 112)" stroke="#333"HTML>
    </svg>
</body>
```
:::
## 基础形状
:::: tabs
::: tab label=circle
* circle: 中心点坐标、半径、填充颜色
    ```html
    <circle id="circle" cx="50" cy="50" r="50" fill="rgb(226 112 112)" stroke="#333">
    ```
:::
::: tab label=line
* line: 两点一条直线
    ```html
    <line x1="10" y1="10" x2="1000" y2="1000" style="stroke: #333; stroke-width: 5px;">
    ```
:::
::: tab label=polyline
* polyline: 多个点路径，默认填充，可以设置`fill:none;`不填充
    ```html
    <polyline points="0,0 100,20 50,30 100, 170" style="stroke: rgb(156, 195, 255); stroke-width: 2px; fill: aqua;">
    ```
:::
::: tab label=rect
* rect: 
    ```html
    <rect x="10" y="10" width="300" height="100" style="stroke: rgb(156, 195, 255); stroke-width: 2px;fill: aqua;">
    ```
:::
::: tab label=ellipse
* ellipse: 椭圆，中心点、x轴半径、y轴半径
    ```html
    <ellipse cx="300" cy="100" rx="300" ry="100" style="stroke: rgb(156, 195, 255); stroke-width: 2px;fill: aqua;">
    ```
:::
::: tab label=polygon
* polygon: 多边形
    ```html
    <polygon points="40,20 80,20 120,120 0,120" fill="aqua">
    ```
:::
::: tab label=text
* text: 文本
    ```html
    <svg width="100%" height="100%">
        <text x="100" y="100" font-size="30px" fill="red" stroke="#333">这是文本</text>
    </svg>
    ```
:::
::::
## 特殊类型
:::: tabs
::: tab label=path
* path: 路径，`M`移动到，`Z`闭合路径
    ```html
    <path d="
            M 40,20
            L 80,20
            L 120,120
            L 0,190
            Z
    " fill="aqua">
    ```
:::
::: tab label=defs
* defs:仅定义，不出现图像，可配合`use`做复用
    ```html
    <svg width="1000" height="1000">
        <defs>
            <g id="myShape">
                <polyline points="0,0 100,20 50,30 100, 170"
                    style="stroke: rgb(156, 195, 255); stroke-width: 2px; fill: aqua;" />
                <circle id="circle" cx="200" cy="50" r="50" fill="rgb(226 112 112)" stroke="#333" />
            </g>
        </defs>
        <use href="#myShape" x="10" y="10" />
        <use href="#myShape" x="100" y="100" />
        <use href="#myShape" x="500" y="100" />
    </svg>
    ```
:::
::: tab label=g
* g: 分组，加上`id`配合`use`可以复用，注意复用时的闭合标签
    ```html
    <body>
        <svg width="1000" height="1000">
            <g id="myShape">
                <polyline points="0,0 100,20 50,30 100, 170"
                    style="stroke: rgb(156, 195, 255); stroke-width: 2px; fill: aqua;" />
                <circle id="circle" cx="200" cy="50" r="50" fill="rgb(226 112 112)" stroke="#333" />
            </g>
            <use href="#myShape" x="350" y="0" />
            <use href="#myShape" x="0" y="300" />
        </svg>
    </body>
    ```
:::
::: tab label=pattern
* pattern:平铺：复制的形式将指定形状铺满装填的区域
    ```html
    <svg width="1000" height="1000">
        <defs>
            <pattern id="myShape" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <g>
                    <polyline points="0,0 100,20 50,30 100, 170"
                        style="stroke: rgb(156, 195, 255); stroke-width: 2px; fill: aqua;" />
                    <circle id="circle" cx="150" cy="100" r="50" fill="rgb(226 112 112)" stroke="#333" />
                </g>
            </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#myShape)">
    </svg>
    ```
:::
::: tab label=use
* use: 复制，可设置x,y，是`偏移量`
    ```html
    <svg width="1000" height="1000">
        <g id="myShape">
            <polyline points="0,0 100,20 50,30 100, 170"
                style="stroke: rgb(156, 195, 255); stroke-width: 2px; fill: aqua;" />
            <circle id="circle" cx="200" cy="50" r="50" fill="rgb(226 112 112)" stroke="#333" />
        </g>
        <use href="#myShape" x="200" y="200">
    </svg>
    ```
:::
::::
## 动画
:::: tabs
::: tab label=animate
* attributeName: 需要动画的属性
* repeatCount: 重复次数
* 注：不能作用于transform，需要变形要用`animateTransform`
```html
<body>
    <svg width="1000" height="1000">
        <defs>
            <g id="myShape">
                <polyline points="0,0 100,20 50,30 100, 170"
                    style="stroke: rgb(156, 195, 255); stroke-width: 2px; fill: aqua;" />
                <circle id="circle" cx="200" cy="50" r="50" fill="rgb(226 112 112)" stroke="#333" />
            </g>
        </defs>
        <use href="#myShape">
            <animate attributeName="x" from="0" to="1000" dur="5s" repeatCount="indefinite">
        </use>
    </svg>
</body>
```
:::
::: tab label=animateTransform
* attributeName: 需要动画的属性
* type: 类型
* begin: 起始时间
* dur: 运行周期
* from: 
* to:
    * 如果type是`rotate`：角度值 圆心X 圆心Y
* repeatCount: 重复次数
* 注：不能作用于transform，需要变形要用`animateTransform`
```html
<body>
    <svg width="1000" height="1000">
        <defs>
            <g id="myShape">
                <polyline points="0,0 100,20 50,30 100, 170"
                    style="stroke: rgb(156, 195, 255); stroke-width: 2px; fill: aqua;" />
                <circle id="circle" cx="200" cy="50" r="50" fill="rgb(226 112 112)" stroke="#333" />
            </g>
        </defs>
        <use href="#myShape">
            <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="5s"
                repeatCount="indefinite">
        </use>
    </svg>
</body>
```
:::
::: tab label=循环动画
* `values`可以设置多个值，会慢慢进行重复
```html
<use href="#zhangyu1">
    <animate attributeName="y" attributeType="XML" values="0;30;0" dur="4s" repeatCount="indefinite"></animate>
</use>
```
:::
::::
## 常用属性
:::: tabs
::: tab label=viewBox
* 调整可视界面，从哪里到哪里，要展示多少像素
* viewBox="`起始X 起始Y 宽 高`"
    * 圆形svg图总共宽高100，从中心点开始展示，且宽高都展示50像素
        ```html
        <svg width="100" height="100" viewBox="50 50 50 50">
            <circle id="circle" cx="50" cy="50" r="50" fill="rgb(226 112 112)" stroke="#333">
        </svg>
        ```
    * 让圆在正中心
        ```html
        <svg width="200" height="200">
            <circle id="circle" cx="100" cy="100" r="50" fill="rgb(226 112 112)" stroke="#333">
        </svg>
        ```
:::
::: tab label=class
* 用`class`设置
```html
<body>
    <svg width="200" height="200">
        <circle id="circle" cx="100" cy="100" r="50" class="circle">
    </svg>

    <style>
        .circle {
            fill: rgb(128, 173, 236);
            stroke: red;
            stroke-width: 3px;
        }
    </style>
</body>
```
:::
::::