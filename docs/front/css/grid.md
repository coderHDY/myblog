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

|值|意思|
|---|---|
|minmax(100px, 1fr)|小的是最小值，大的是最大值。|
|[c1] 100px [c2] 100px [c3]|自定义名字，方括号是网格线的名字|
|30% 40% 30%|直接按比例|
|2fr 4fr 1fr|直接按比例|
|repeat(12, 1fr)|传统12格栅格布局|

:::
::: codePen height=80 width=400 label=grid-template-columns val=50px 200px 50px select=[50px 200px 50px, 50px 1fr 50px,1fr minmax(100px, 2fr) 1fr, 1fr minmax(100px, 1fr) 1fr, 30% 40% 30%, 2fr 4fr 1fr]
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
      grid-template-columns: {{val}};
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
::: codePen width=375 label=grid-template-columns val=50px 200px 50px select=[50px 200px 50px, 50px 100px 50px,100px 50px 100px]
```html{17}
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
|`repeat(1, 1fr 2fr 3fr)`|按123的比例分配|
|`repeat(2, 50px 80px) repeat(5, 30px 60px)`|14个单位，前四个遵循第一个repeat，后10个遵循第二个repeat|
|`repeat(2, min-content auto max-content)`|min-content是`本列最长单个单词的长度`，max-content`本列不会换行时的最长单位的长度`|
|`repeat(2, fit-content(100px) 40px)`|内容最短长度和给定值取取小值|
|`repeat(auto-fill, 150px)`|单元格大小固定150px，每行放置最多自动往下排列|
:::

::: codePen width=375 height=500 label=grid-template-columns val=repeat(1, min-content auto max-content) select=[repeat(1, min-content auto max-content), repeat(6, 1fr), repeat(3, 33.3%), repeat(1, 1fr 2fr 3fr), repeat(4, fit-content(100px)), repeat(auto-fill, 100px), repeat(auto-fill, 150px), repeat(auto-fit, 100px), repeat(auto-fit, 150px)]
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
    <div class="seven">7 7 7 7 </div>
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
## row-gap
::: tip
* 原名：grid-row-gap
* 行间距
:::
::: codePen val=3 type=number
```html{20}
<body>
  <div class="wrapper">
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, 40px);
      width: 140px;
      border: 1px solid #333;

      grid-row-gap: {{val}}px;
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      width: 40px;
      height: 40px;
    }
  </style>
</body>
```
:::
## column-gap
::: tip
* 原名：grid-column-gap
* 列间距
:::
::: codePen val=3 type=number
```html{20}
<body>
  <div class="wrapper">
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, 40px);
      width: 140px;
      border: 1px solid #333;

      grid-column-gap: {{val}}px;
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      width: 40px;
      height: 40px;
      box-sizing: border-box;
    }
  </style>
</body>
```
:::
## gap
::: tip
* 作用：合并column-gap和row-gap
* 例：gap: 10px 10px;
* 例：gap: column-gap row-gap column-gap;
:::
::: codePen val=3 type=number
```html{20}
<body>
  <div class="wrapper">
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, 40px);
      width: 140px;
      border: 1px solid #333;

      gap: 10px 3px;
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      width: 40px;
      height: 40px;
      box-sizing: border-box;
    }
  </style>
</body>
```
:::
## grid-auto-flow
::: tip
* 溢出处理
* dense: 某些项目位置指定后，其他项目放在哪里，`column dense`, `row dense`紧凑排放处理
:::
::: codePen val=column select=[column, row, column dense, row dense]
```html
<body>
  <div class="wrapper">
    <div class="first">1</div>
    <div class="end">2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      width: 140px;
      border: 1px solid #333;

      grid-template-columns: 40px 40px 40px;
      grid-template-rows: 40px 40px 40px;
      gap: 10px 10px;
      grid-auto-flow: {{val}};
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      box-sizing: border-box;
    }
    .first, .end {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  </style>
</body>

```
:::
## justify-content
::: tip
* 外盒子水平方向的布局属性
:::
::: codePen label=justify-content val=center select=[center, start, end, space-around, space-between]
```html
<body>
  <div class="wrapper">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      width: 200px;
      border: 1px solid #333;

      grid-template-columns: 40px 40px 40px;
      grid-template-rows: 40px 40px 40px;
      gap: 10px 10px;
      justify-content: {{val}};
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      box-sizing: border-box;
    }
  </style>
</body>
```
:::