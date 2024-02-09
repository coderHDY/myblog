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
>S、s(当前位置做起点，第一个x,y作为`终点弧度控制点`，第二个x,y作为`终点`，`起点弧度控制点`是第一个x,y的映射点)
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
* `fill`：填充颜色/none
* `stroke-dasharray`：虚线间隔("2")
* 组合使用
  * `<g id="xxx"></g>` `<use xlink:href="#xxx" x="60" />`