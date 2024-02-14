---
title: svgAPI
date: 2024-02-08
---
## 基础形状
### polyline
* `首尾可以不相连`的直线构成闭合形状
* 专有属性：`points`
::: codePen height=170
```html
<svg viewBox="0 0 200 100">
  <polyline points="0,100 50,25 50,75 100,0" />

  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```
:::
### polygon
* `首尾相连`的直线构成闭合形状
* * 专有属性：`points`
::: codePen height=170
```html
<svg viewBox="0 0 200 100">
  <polygon points="0,100 50,25 50,75 100,0" />

  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```
:::
### line
* 一条直线
::: codePen height=140
```html
<svg viewBox="0 0 200 200">
  <line x1="20" y1="80" x2="100" y2="30" stroke="black" />
</svg>
```
:::
### circle
* 一个圆心一个半径的圆
* 专有属性：`cx`，`cy`，`r`
::: codePen height=160
```html
<svg viewBox="0 0 200 200">
  <circle cx="50" cy="50" r="50" fill="blue" />
</svg>
```
:::
### rect
* 创建矩形
* 专有属性
  * `x`，`y`
  * `width`，`height`
  * `rx`，`ry`
::: codePen height=100
```html
<svg viewBox="0 0 400 400">
  <rect width="100" height="100" />

  <rect x="120" width="100" height="100" rx="15" />
</svg>
```
:::
### ellipse
* 创建椭圆
* 专有属性: `cx`,`cy`,`rx`,`ry`
::: codePen
```html
<svg viewBox="0 0 200 100">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```
:::
### text
* text
* 专有属性: 
  * `x`,`y`
  * `dx`,`dy`
  * `text-anchor`
  * `rotate`
  * `textLength`
  * `lengthAdjust`

::: codePen height=40
```html
<svg width="200" height="200">
  <text x="10"  y="20"
        style="font-family: Times New Roman;
               font-size  : 24;
               fill       : #0000ff;">
    SVG text styling
  </text>
</svg>
```
:::
::: codePen height=140
```html
<svg width="200" height="200">
  <text x="10"  y="20"
        transform="rotate(30 20,40)">
    SVG Text Rotation
  </text>
</svg>
```
:::
### linearGradient
* `defs`定义svg里面不表示但是可以调用的内容
* style里`<![CDATA[ css ]]>`写css
* `x1,y1,x2,y2`组合定义渐变方向默认横向
* `xlink:href="#Gradient1"`复用之前的渐变块的定义内容
* 可以用`css`定义或者`<stop>`元素来定义渐变过程
::: codePen height=250
```html
<svg width="120" height="240">
  <defs>
    <linearGradient id="Gradient1">
      <stop class="stop1" offset="0%" />
      <stop class="stop2" offset="50%" />
      <stop class="stop3" offset="100%" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <style type="text/css">
      <![CDATA[
              #rect1 { fill: url(#Gradient1); }
              .stop1 { stop-color: red; }
              .stop2 { stop-color: black; stop-opacity: 0; }
              .stop3 { stop-color: blue; }
            ]]>
    </style>
  </defs>

  <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient2)" />
</svg>
```
:::
* `xlink:href`复用
::: codePen height=140 width=300
```html
<svg width="300" height="240">
  <defs>
  <linearGradient id="Gradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="blue" />
  </linearGradient>
  <linearGradient
    id="Gradient2"
    x1="0"
    x2="0"
    y1="0"
    y2="1"
    xlink:href="#Gradient1" />
  </defs>

  <rect x="10" y="10" rx="20" ry="20" width="100" height="100" fill="url(#Gradient1)" />
  <rect x="120" y="10" rx="20" ry="20" width="100" height="100" fill="url(#Gradient2)" />
</svg>
```
:::
### radialGradient
* `defs`定义svg里面不表示但是可以调用的内容
* style里`<![CDATA[ css ]]>`写css
* `xlink:href="#Gradient1"`复用之前的渐变块的定义内容
* 可以用`css`定义或者`<stop>`元素来定义渐变过程
* `cx="0.25" cy="0.25" r="0.25"`组合定义渐变圆，默认中心
* `fx,fy`定义焦点
::: codePen height=250
```html
<svg width="120" height="240">
  <defs>
    <radialGradient id="RadialGradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient1)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient2)" />
</svg>
```
:::
* `fx,fy`定义焦点
::: codePen height=250
```html
<svg width="120" height="240">
  <defs>
    <radialGradient id="RadialGradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient id="RadialGradient2" fx="0.25" fy="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient1)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient2)" />
</svg>
```
:::
### pattern
* `<pattern>` 需要放在 SVG 文档的 `<defs>` 内部
* `defs`定义svg里面不表示但是可以调用的内容
::: codePen height=250
```html
<svg width="200" height="200">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white" />
      <stop offset="95%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red" />
      <stop offset="95%" stop-color="orange" />
    </linearGradient>

    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue" />
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="url(#Gradient1)"
        fill-opacity="0.5" />
    </pattern>
  </defs>

  <rect
    fill="url(#Pattern)"
    stroke="black"
    x="0"
    y="0"
    width="200"
    height="200" />
</svg>
```
:::

## 特殊类型
### path
* 用点画出任意元素
* 专有属性
  * `d`
  * `pathLength`
::: codePen height=140
```html
<svg viewBox="0 0 200 200">
  <path
    d="M 10,30
        A 20,20 0,0,1 50,30
        A 20,20 0,0,1 90,30
        Q 90,60 50,90
        Q 10,60 10,30 z" />
</svg>
```
:::
* **d 作为 css 属性，safari 不支持**
::: codePen height=140
```html
<svg id="svg_css_ex1" viewBox="0 0 140 140">
  <path
    fill="none"
    stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z
       " />
</svg>

<style>
  html,
  body,
  svg {
    height: 100%;
  }

  /* This path is displayed on hover*/
  #svg_css_ex1:hover path {
    d: path(
      "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90"
    );
  }
</style>
```
:::
### g
* 把一组图像组合成一个形状
* 默认会渲染，可以用defs包裹就不会被渲染
::: codePen height=70
```html
<svg width="200" height="200">
  <g fill="red" id="doubleRect">
    <rect x="0" y="0" width="10" height="10" />
    <rect x="20" y="0" width="10" height="10" />
  </g>

  <use xlink:href="#doubleRect" y="20" />
  <use xlink:href="#doubleRect" y="40" />
</svg>
```
:::
### marker
* `orient`: auto(跟随最终点的方向做旋转)
* `markerHeight`：视口高度
* `markerWidth`：视口宽度
* `refX`/`refY`：绝对位置偏移量
* `viewBox`：marker自己的视口大小
::: codePen
```html
<svg width="200" height="200">
  <defs>
    <marker id="triangle"  viewBox="0 0 10 10" markerWidth="10" markerHeight="10" refX="1" refY="5"  orient="auto">
      <polygon points="0,0 10,5 0,10" fill="red"/>
    </marker>
  </defs>
  <polyline points="0,0 100,100" marker-end="url(#triangle)" 
    stroke="black"/>
</svg>
```
:::
## d
* [链接](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/d)
  * **`大写坐标相对起始位置，小写坐标相对当前位置`**
* 移动到：`M`、`m`
* 画线：`h`、`H`(横)、`v`、`V`(纵)
* 画线至：`L`、`l`(x,y)
* 三次方贝塞尔曲线（双边弧度）：C、c、S、s
* 二次方贝塞尔曲线（单边弧度）：Q、q、T、t
* 椭圆曲线：A、a
* 封闭路径：Z、z
### 移动到点M-m
>M, m h,v
::: codePen height=80
```html
<svg viewBox="0 0 200 200">
  <path
    fill="none"
    stroke="red"
    d="M 10,10 h 40
       M 20,20 h 30
       m 10,10 v 20
       "
  />
</svg>
```
:::
### 直线L-l-H-h-V-v
>L、l、H、h、V、v
::: codePen height=150
```html
<svg viewBox="0 0 200 200">
  <path
    fill="none"
    stroke="red"
    d="M 10,10
       L 90,90
       V 10
       H 50" />

  <path
    fill="none"
    stroke="red"
    d="M 110,10
       l 80,80
       v -80
       h -40" />
</svg>
```
:::
### 三次贝塞尔 C-c-S-s
>C、c(当前位置做起点，第一个x,y作为`起始弧度控制点`，第二个x,y作为`终点弧度控制点`，第三个x,y作为`终点`)  
>S、s(当前位置做起点，第一个x,y作为`终点弧度控制点`，第二个x,y作为`终点`，`起点弧度控制点`是**前一个C或S的第二个弧度控制点根据起点的对称点**)
::: codePen height=150
```html
<svg viewBox="0 0 200 200">
  <!-- 波浪1 -->
  <path
    fill="none"
    stroke="red"
    d="M 10,90
           C 35,90 25,10 50,10
           S 70,90 90,90" />

  <!-- 波浪2 -->
  <path
    fill="none"
    stroke="red"
    d="M 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" />

  <!-- 重复的双水平线 -->
  <g id="ControlPoints">
    <line x1="10" y1="90" x2="30" y2="90" stroke="lightgrey" />
    <circle cx="30" cy="90" r="1.5" />

    <line x1="50" y1="10" x2="25" y2="10" stroke="lightgrey" />
    <circle cx="25" cy="10" r="1.5" />

    <line
      x1="50"
      y1="10"
      x2="75"
      y2="10"
      stroke="lightgrey"
      stroke-dasharray="2" />
    <circle cx="75" cy="10" r="1.5" fill="lightgrey" />

    <line x1="90" y1="90" x2="70" y2="90" stroke="lightgrey" />
    <circle cx="70" cy="90" r="1.5" />

    <circle cx="10" cy="90" r="1.5" />
    <circle cx="50" cy="10" r="1.5" />
    <circle cx="90" cy="90" r="1.5" />
  </g>

  <!-- 复用双水平线（定义了 x 起始位置） -->
  <use xlink:href="#ControlPoints" x="100" />
</svg>
```
:::
### 二次贝塞尔 Q-q-T-t
>Q、q(当前位置做起点，第一个x,y作为`弧度控制点`，第二个x,y作为`终点`)  
>T、t(每个x,y都作为`终点`，`弧度控制点`是上一个弧线在本位置的反射点)
::: codePen height=150 width=500
```html
<svg viewBox="0 0 300 100">
  <path
    class="path"
    fill="none"
    stroke="red"
    stroke-width="3"
    d="M 10,50
        Q 25,25 40,50
        t 30,0 30,0 30,0 30,0 30,0 30,0" />

  <!-- 第一条实线连线 -->
  <polyline points="10,50 25,25 40,50" stroke="rgba(0,0,0,.2)" fill="none" />

  <!-- 三个点 -->
  <circle cx="25" cy="25" r="1.5" />
  <circle cx="10" cy="50" r="1.5" />
  <circle cx="40" cy="50" r="1.5" />

  <g id="SmoothQuadraticDown">
    <polyline
      points="40,50 55,75 70,50"
      stroke="rgba(0,0,0,.2)"
      stroke-dasharray="2"
      fill="none" />
    <circle cx="55" cy="75" r="1.5" fill="lightgrey" />
    <circle cx="70" cy="50" r="1.5" />
  </g>

  <g id="SmoothQuadraticUp">
    <polyline
      points="70,50 85,25 100,50"
      stroke="rgba(0,0,0,.2)"
      stroke-dasharray="2"
      fill="none" />
    <circle cx="85" cy="25" r="1.5" fill="lightgrey" />
    <circle cx="100" cy="50" r="1.5" />
  </g>

  <!-- use 定义的的横向偏移 x 是相对位置 -->
  <use xlink:href="#SmoothQuadraticDown" x="60" />
  <use xlink:href="#SmoothQuadraticUp" x="60" />
  <use xlink:href="#SmoothQuadraticDown" x="120" />
</svg>

<style>
  .path:hover {
    stroke-width: 5;
    stroke: blue;
  }
</style>
```
:::
### 椭圆曲线 A-a
>A、a 当前为`椭圆的起点`，其他参数顺序为:  
>A `x半径` `y半径` `相对于x轴的顺时针旋转角度` `大弧线1还是小弧线0` `顺时针旋转的弧线1还是逆时针旋转的弧线0` `终点坐标x,终点坐标y`  
::: codePen height=130
```html
<svg viewBox="0 0 50 50">
  <path
    fill="none"
    stroke="red"
    d="M 6,10
           A 6 4 10 1 0 14,10" />

  <path
    fill="none"
    stroke="green"
    d="M 6,10
           A 6 4 10 1 1 14,10" />

  <path
    fill="none"
    stroke="purple"
    d="M 6,10
           A 6 4 10 0 1 14,10" />

  <path
    fill="none"
    stroke="pink"
    d="M 6,10
           A 6 4 10 0 0 14,10" />
</svg>
```
:::
### 起点终点闭环 Z-z
>Z、z 终点拉一条线回到起点，其他参数顺序为:  
>A `x半径` `y半径` `相对于x轴的顺时针旋转角度` `大弧线1还是小弧线0` `顺时针旋转的弧线1还是逆时针旋转的弧线0` `终点坐标x,终点坐标y`  
::: codePen height=100
```html
<svg viewBox="0 0 30 11">
  <path
    stroke="red"
    d="M 5,1
           l -4,8 8,0" />

  <path
    stroke="red"
    d="M 15,1
           l -4,8 8,0 -4,-8" />

  <path
    stroke="red"
    d="M 25,1
           l -4,8 8,0
           z" />
</svg>
```
:::
## 基础属性
* `stroke-width`: 线条宽度，支持css设置
* `stroke`：线条颜色
* `fill`：填充颜色/none/transparent
* `stroke-dasharray`：虚线间隔("2")
* `fill-opacity`：填充透明度("0.5")
* `stroke-opacity`：线条透明度("0.8")
* `stroke-linecap`：描边线条特征("butt" / "square" / "round")
* `opacity`定义透明度
* `mark-end`：形状最终顶点的标记图形，并且自带旋转方向为最终顶点的方向
* 组合使用
  * `<g id="xxx"></g>` `<use xlink:href="#xxx" x="60" />`
### stroke-linecap
* 线条填充方法
  * butt: 填充线条两边
  * square: 填充线条四周
  * round: 填充线条四周并且加radius
::: codePen height=130
```html
<svg width="160" height="140">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>

  <line x1="40" x2="120" y1="20" y2="20" stroke="red" stroke-width="1" />
  <line x1="40" x2="120" y1="60" y2="60" stroke="red" stroke-width="1" />
  <line x1="40" x2="120" y1="100" y2="100" stroke="red" stroke-width="1" />
</svg>
```
:::
### stroke-linecap
* 线条转角填充方法
  * butt: 填充线条两边
  * square: 填充线条四周
  * round: 填充线条四周并且加radius
::: codePen height=250
```html
<svg width="160" height="280">
  <polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>

  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
      stroke-linecap="round" fill="none" stroke-linejoin="round"/>

  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>

  <polyline points="40 60 80 20 120 60" stroke="red" stroke-width="2" fill="none" />
  <polyline points="40 140 80 100 120 140" stroke="red" stroke-width="2" fill="none" />
  <polyline points="40 220 80 180 120 220" stroke="red" stroke-width="2" fill="none" />
</svg>
```
:::
## 变形
* `transform`可用元素：`a`, `circle`, `clipPath`, `defs`, `ellipse`, `foreignObject`, `g`, `image`, `line`, `path`, `polygon`, `polyline`, `rect`, `switch`, `text`, `use`
### 平移
* `translate(<x> [<y>])`
::: codePen height=70
```html
<svg width="200" height="200">
  <rect x="0" y="0" width="10" height="10" />
  <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```
:::
### 旋转
* `rotate(<a> [<x> <y>])`：a角度，单位度。后两个数为旋转中心，默认路径起点(0,0)
::: codePen height=50
```html
<svg>
  <rect x="0" y="0" width="10" height="10" />
  <rect x="0" y="0" width="10" height="10" transform="translate(30),rotate(45)" />
  <rect x="0" y="0" width="10" height="10" transform="translate(60),rotate(45, 5, 5)" />
</svg>
```
:::
### 缩放
* `scale(<x> [<y>])`：如果不提供y，默认 y=x
::: codePen height=50
```html
<svg>
  <rect x="0" y="0" width="10" height="10" />
  <rect x="0" y="0" width="10" height="10" transform="translate(30),scale(3)" />
</svg>
```
:::
### 倾斜
* `skewX(<a>)`：**以Y轴为对称轴**，沿X轴倾斜角度，单位度
* `skewY(<a>)`：**以X轴为对称轴**，沿X轴倾斜角度，单位度
::: codePen height=150
```html
<svg viewBox="-5 -5 20 20">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red" transform="skewX(30)" />
</svg>
```
:::
::: codePen height=150
```html
<svg viewBox="-5 -5 20 20">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red" transform="skewY(30)" />
</svg>
```
:::
### 剪裁
* `clipPath`定义clipPath剪裁路径
::: codePen height=100
```html
<svg>
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="100" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
```
:::
### 遮罩
* `<mask>`定义遮罩层
* 元素中的`mask`调用遮罩层的id
::: codePen
```html
<svg>
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="white" stop-opacity="0" />
      <stop offset="1" stop-color="white" stop-opacity="1" />
    </linearGradient>

    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)" />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>
```
:::
### 透明
* fill-opacity：填充透明度
* stroke-opacity：描边透明度
* opacity：全部透明
>描边将绘制在填充的上面。因此，如果你在一个元素上设置了描边透明度，但它同时设有填充，则描边的一半应用填充色，另一半将应用背景色
::: codePen width=200 height=200
```html
<svg width="200" height="200">
  <rect x="0" y="0" width="200" height="200" fill="blue" />

  <!-- 原色 -->
  <circle
    cx="50"
    cy="50"
    r="25"
    stroke="yellow"
    stroke-width="10"
    fill="red" />

  <!-- 填充半透明 -->
  <circle
    cx="150"
    cy="50"
    r="25"
    stroke="yellow"
    stroke-width="10"
    fill-opacity="0.5"
    fill="red" />

  <!-- 全部半透明 -->
  <circle
    cx="50"
    cy="150"
    r="25"
    stroke="yellow"
    stroke-width="10"
    opacity="0.5"
    fill="red" />

  <!-- 描边半透明 -->
  <circle
    cx="150"
    cy="150"
    r="25"
    stroke="yellow"
    stroke-width="10"
    stroke-opacity="0.5"
    fill="red" />
</svg>
```
:::
