---
title: grid布局
date: 2023-01-09 10:00:00
---
## 基本概念
::: tip
* 容器：最外层盒子
* 项目：子盒子
* Grid 布局只对`项目`生效。
* `n`行有`n + 1`根水平网格线，`m`列有`m + 1`根垂直网格线
:::
```html
<div class="wrapper">
  <div class="one">1</div>
  <div class="two">2</div>
  <div class="three">3</div>
</div>
```
::: warning
* 设为网格布局以后，容器子元素（项目）的`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-*`等设置都将失效。
:::
## grid
::: tip
* 设置父盒子为 grid 布局
:::
::: codePen
```html
<body>
  <div class="wrapper">
    <div class="one">One</div>
    <div class="two">Two</div>
    <div class="three">Three</div>
    <div class="four">Four</div>
    <div class="five">Five</div>
    <div class="six">Six</div>
    <div class="seven">seven</div>
    <div class="eight">eight</div>
    <div class="night">night</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: 50px 50px 50px;
      grid-template-rows: 50px 50px 50px;
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      margin: 2px;
    }
  </style>
</body>
```
:::
## grid-template-columns
::: tip
* 设置每一列的宽度
* 值：尺寸单位（百分比/长度单位）
:::
::: codePen height=80 width=400
```html{11}
<body>
  <div class="wrapper">
    <div class="one">One</div>
    <div class="two">Two</div>
    <div class="three">Three</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: 50px 200px 50px;
      grid-template-rows: 50px;
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      margin: 2px;
    }
  </style>
</body>
```
:::
## grid-template-rows
::: tip
* 设置每一行`行高`
* 值：尺寸单位（百分比/长度单位）
:::
::: codePen width=375 val=50px 200px 50px select=[50px 200px 50px, 50px 100px 50px,100px 50px 100px]
```html
<body>
  <div class="wrapper">
    <div class="one">One</div>
    <div class="two">Two</div>
    <div class="three">Three</div>
    <div class="four">Four</div>
    <div class="five">Five</div>
    <div class="six">Six</div>
    <div class="seven">Four</div>
    <div class="eight">Five</div>
    <div class="night">Six</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: {{val}};
      grid-template-rows: 30px 100px 30px;
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      margin: 2px;
    }
  </style>
</body>
```
:::
## repeat()
::: tip
* 该函数可以用于 CSS Grid 属性中 `grid-template-columns` 和 `grid-template-rows`.
* 取值：length, 模式/值/flex比例

|值|作用|
|---|---|
|`repeat(3, 1fr)`|三个均等分|
|`repeat(3, 33.3%)`|三个均等分|
|`repeat(2, 50px 80px) repeat(5, 30px 60px)`|14个单位，前四个遵循第一个repeat，后10个遵循第二个repeat|
|`repeat(2, min-content auto max-content)`|min-content是`本列最长单个单词的长度`，max-content`本列不会换行时的最长单位的长度`|
:::

::: codePen width=375 height=400 val=repeat(1, min-content auto max-content) select=[repeat(1, min-content auto max-content), repeat(6, 1fr), repeat(3, 33.3%)]
```html{38}
<body>
  <div class="wrapper">
    <div class="one">
      One One One One One
    </div>
    <div class="two">
      Two Two TwoTwo Two 
    </div>
    <div class="three">
      Three Three Three Three  Three !
    </div>
    <div class="four">
      Four Fourrrr Four Four
    </div>
    <div class="five">
      Five Five Five Five
    </div>
    <div class="six">
      Six Six Six Six Six
    </div>
    <div class="seven">7 7 7 7 7 7 </div>
    <div class="eight">8 8 8 8 8 8 </div>
    <div class="night">9 9 9 9 9 9 </div>
    <div class="ten">
      10 10 10 10 10
    </div>
    <div class="evelen">
      11 11 11
    </div>
    <div class="twelf">
      12 12 12
    </div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: {{val}};
      grid-template-rows: repeat(4, 1fr);
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      margin: 2px;
    }
  </style>
</body>
```
:::