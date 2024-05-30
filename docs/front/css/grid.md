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
### 轨道
* [grid-template-columns](#grid-template-columns)、[grid-template-rows](#grid-template-rows)可以设置轨道，并控制轨道数量，以及每个轨道内元素的大小
* [grid-auto-rows](#grid-auto-rows)设置自动扩充的高度，可以设置多个值，会默认循环设置`grid-auto-rows: 100px 200px;`
::: codePen val=2 select=[1, 2, 3] height=120
```html{16}
<body>
  <div class="wrapper">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: 20px 20px 20px;
      grid-template-rows: repeat({{val}}, 30px);
      gap: 10px;
    }
    .wrapper div {
      background: #333;
    }
  </style>
</body>
```
:::
### fr
* 比例单位
* 如果混有固定长度(如px)，会用剩下的空间按fr进行比例分配
:::codePen val=1fr 2fr 3fr select=[1fr 2fr 3fr, 1fr 1fr 1fr, 1fr 3fr 1fr, 50% 1fr 3fr] height=200
```html
<body>
  <div class="wrapper">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: {{val}};
      height: 200px;
      gap: 10px;
    }
    .wrapper div {
      background: #333;
    }
  </style>
</body>
```
:::
### repeat
* 重复单位
* `repeat(3, 1fr)`与`1fr 1fr 1fr`相同
* 也可以多值重复: `repeat(3, 1fr 2fr)`
:::codePen val=1fr 1fr 1fr select=[1fr 1fr 1fr, repeat(3, 1fr), repeat(3, 1fr 3fr)] height=200
```html
<body>
  <div class="wrapper">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: {{val}};
      height: 200px;
      gap: 10px;
    }
    .wrapper div {
      background: #333;
    }
  </style>
</body>
```
:::
### minmax
* 最小值和最大值
* `minmax(100, auto)`
:::codePen
```html{16,27,24}
<body>
  <div class="wrapper">
    <div class="min"></div>
    <div class="min"></div>
    <div class="min"></div>
    <div class="max"></div>
    <div class="max"></div>
    <div class="max"></div>
    <!-- <div></div> -->
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, minmax(30px, 50px));
      height: 50px;
      gap: 10px;
    }
    .wrapper div {
      background: #333;
    }
    .wrapper .min {
      height: 20px;
    }
    .wrapper .max {
      height: 120px;
    }
  </style>
</body>
```
:::
### 网格线
* grid-item的基线
* 从1开始数，位置为grid容器的上边和左边
* `grid-column`: `grid-column-start` / `grid-column-end`
* `grid-row`: `grid-row-start` / `grid-row-end`
* `grid-area`: `grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-row-end`
* 可以用负数实现从后往前数，注：使用负数时应该用**明确的行数或列数**
* 跨越整个网格写法：`grid-column: 1 / -1`
* 网格线可以用中括号[命名]，使用的时候就不用用数字了
:::codePen
```html
<body>
  <div class="wrapper">
    <div class="a">a</div>
    <div class="b">b</div>
    <div class="c">c</div>
    <div class="d">d</div>
    <div class="e">e</div>
    <div class="f">f</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 30px);
      /* grid-auto-rows: 30px; */
      grid-template-rows: repeat(4, 30px);
      gap: 2px;
    }
    .wrapper div {
      background: #afa4a4;
    }
    .a {
      grid-column-start: -1;
      grid-column-end: -2;
      grid-row-start: -1;
      grid-row-end: -2;
    }
    .b {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }
    .c {
      grid-column: 2 / 3;
      grid-row: 4 / 5;
    }
    .d {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }
    .e {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }
    .f {
      grid-area: 1 / 1 / 4 / 3;
    }
  </style>
</body>
```
:::
### 跨越轨道数量
* span: 跨越轨道数量
* `grid-column`: `grid-column-start` / `grid-column-end`
* `grid-row`: `grid-row-start` / `grid-row-end`
* `grid-area`: `grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-row-end`
* 可以用负数实现从后往前数，注：使用负数时应该用**明确的行数或列数**
* 跨越整个网格写法：`grid-column: 1 / -1`
:::codePen
```html
<body>
  <div class="wrapper">
    <div class="a">a</div>
    <div class="b">b</div>
    <div class="c">c</div>
    <div class="d">d</div>
    <div class="e">e</div>
    <div class="f">f</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 30px);
      /* grid-auto-rows: 30px; */
      grid-template-rows: repeat(4, 30px);
      gap: 2px;
    }
    .wrapper div {
      background: #afa4a4;
    }
    .a {
      /* grid-column-start: -1;
      grid-column-end: -2;
      grid-row-start: -1;
      grid-row-end: span -2; */
      grid-column-start: -2;
      grid-column-end: span 1;
      grid-row-start: -2;
      grid-row-end: span 1;
    }
    .b {
      /* grid-column: 3 / 4; */
      /* grid-row: 2 / 3; */
      grid-column: 3 / span 1;
      grid-row: 2 / span 1;
    }
    .c {
      /* grid-column: 2 / 3;
      grid-row: 4 / 5; */
      grid-column: 2 / span 1;
      grid-row: 4 / span 1;
    }
    .d {
      /* grid-column: 3 / 4;
      grid-row: 1 / 2; */
      grid-column: 3 / span 1;
      grid-row: 1 / span 1;
    }
    .e {
      grid-column: 1 / span 1;
      grid-row: 4 / span 1;
    }
    .f {
      /* grid-area: 1 / 1 / 4 / 3; */
      grid-area: 1 / 1 / span 3 / span 2;
    }
  </style>
</body>
```
:::
### 横向扩展
* `grid-auto-flow: column`: 设置扩展方向为横向
* `grid-template-columns`: 设置横向列item大小
* `grid-auto-columns`: 设置横向扩展item默认大小
:::codePen
```html
<body>
  <div class="wrapper">
    <div>a</div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
    <div>e</div>
    <div>f</div>
    <div>g</div>
    <div>h</div>
    <div>i</div>
    <div>j</div>
    <div>k</div>
    <div>l</div>
    <div>m</div>
    <div>n</div>
    <div>o</div>
    <div>p</div>
    <div>q</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-rows: repeat(2, 40px);
      grid-auto-flow: column;
      grid-auto-columns: 100px 40px;
      gap: 1px;
      height: 100%;
      width: 200px;
      height: 100px;
      overflow-x: auto;
    }
    .wrapper div {
      position: sticky;
      left: 0;
      background: #afa4a4;
    }
  </style>
</body>
```
:::
## 容器属性
::: tip
| 属性                                            | 作用                                            | 值                  |
| ----------------------------------------------- | ----------------------------------------------- | ------------------- |
| [grid-template-columns](#grid-template-columns) | 列宽模版                                        | 宽度单位 / repeat() |
| [grid-template-rows](#grid-template-rows)       | 行高模版                                        | 宽度单位 / repeat() |
| [row-gap](#row-gap)                             | 行间距                                          |                     |
| [column-gap](#column-gap)                       | 列间距                                          |                     |
| [gap\grid-gap](#gap)                            | row-gap 和 column-gap 简写                      |                     |
| [grid-auto-flow](#grid-auto-flow)               | 换行方向 / 排列方式                             |                     |
| [justify-items](#justify-items)                 | 主轴空白处理                                    |                     |
| [align-items](#align-items)                     | 交叉轴空白处理                                  |                     |
| [place-items](#place-items)                     | justify-items / align-items 的合并写法          |                     |
| [grid-auto-rows](#grid-auto-rows)               | 未设置的行的默认宽度                            |                     |
| [grid-auto-columns](#grid-auto-columns)         | 未设置的列的默认宽度                            |                     |
| [grid-auto-area](#grid-auto-area)               | 给各个区域命名，配合[grid-area](#grid-area)使用 |                     |
| [grid-template](#grid-template)                 | 简写                                            |                     |
| [grid](#grid)                                   | 简写                                            |                     |
:::
### display:grid
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
### grid-template-columns
::: tip
* 设置每一列的宽度
* 值：尺寸单位（百分比/长度单位）

| 值                         | 意思                             |
| -------------------------- | -------------------------------- |
| minmax(100px, 1fr)         | 小的是最小值，大的是最大值。     |
| [c1] 100px [c2] 100px [c3] | 自定义名字，方括号是网格线的名字 |
| 30% 40% 30%                | 直接按比例                       |
| 2fr 4fr 1fr                | 直接按比例                       |
| repeat(12, 1fr)            | 传统12格栅格布局                 |

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
### grid-template-rows
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
### grid-template-areas
* 设置按照子组件命名(`grid-area`)区域分布
* 字符串必须要凑满正确的矩形，否则无法解析
* 使用`.`留空白
::: codePen
```html
<body>
  <div class="wrapper">
    <div class="a">a</div>
    <div class="b">b</div>
    <div class="c">c</div>
    <div class="d">d</div>
    <div class="e">e</div>
    <div class="f">f</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 40px);
      grid-template-rows: 40px repeat(2, auto) 40px;
      grid-template-areas:
        "b a a"
        "b c c"
        "d e e"
        ". . f";
      gap: 1px;
      height: 100%;
    }
    .wrapper div {
      background: #afa4a4;
    }
    .a {
      grid-area: a;
    }
    .b {
      grid-area: b;
    }
    .c {
      grid-area: c;
    }
    .d {
      grid-area: d;
    }
    .e {
      grid-area: e;
    }
    .f {
      grid-area: f;
    }
  </style>
</body>

```
:::
### repeat()
::: tip
* 该函数可以用于 CSS Grid 属性中 `grid-template-columns` 和 `grid-template-rows`.
* 取值：length, 模式/值/flex比例

| 值                                          | 作用                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------- |
| `repeat(3, 1fr)`                            | 三个均等分                                                                         |
| `repeat(3, 33.3%)`                          | 三个均等分                                                                         |
| `repeat(1, 1fr 2fr 3fr)`                    | 按123的比例分配                                                                    |
| `repeat(2, 50px 80px) repeat(5, 30px 60px)` | 14个单位，前四个遵循第一个repeat，后10个遵循第二个repeat                           |
| `repeat(2, min-content auto max-content)`   | min-content是`本列最长单个单词的长度`，max-content`本列不会换行时的最长单位的长度` |
| `repeat(2, fit-content(100px) 40px)`        | 内容最短长度和给定值取取小值                                                       |
| `repeat(auto-fill, 150px)`                  | 单元格大小固定150px，每行放置最多自动往下排列                                      |
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
### row-gap
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
### column-gap
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
### gap
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

      gap: 10px {{val}}px;
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
### grid-auto-flow
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
### justify-items
::: tip
* 外盒子`水平方向`的布局属性
:::
::: codePen label=justify-items val=center select=[center, start, end,  stretch]
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
      justify-items: {{val}};
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
### align-items
::: tip
* **单元格内**`垂直方向`的布局属性
:::
::: codePen label=align-items val=center select=[center, start, end, stretch]
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
      height: 150px;
      border: 1px solid #333;

      grid-template-columns: 40px 40px 40px;
      grid-template-rows: 40px 40px 40px;
      gap: 10px 10px;
      align-items: {{val}};
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
### place-items
::: tip
* align-items 和 justify-items 的简写形式
* place-items: align-items justifu-content
:::
::: codePen label=place-items val=stretch select=[stretch, center, start, end, stretch center, center stretch]
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
      height: 150px;
      border: 1px solid #333;

      grid-template-columns: 40px 40px 40px;
      grid-template-rows: 40px 40px;
      gap: 10px 10px;
      place-items: {{val}};
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
### grid-auto-rows
::: tip
* 在`grid-template-rows`指定行数超出以后的默认行高
:::
::: codePen val=60 type=number
```html{19-20,24-25}
<body>
  <div class="wrapper">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      height: 150px;
      border: 1px solid #333;

      /* 只定义了三行的模式 */
      grid-template-rows: 40px 40px;
      grid-template-columns: 40px 40px 40px;
      gap: 10px 10px;

      /* 第四行以后的生效样式 */
      grid-auto-rows: {{val}}px;
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
### grid-auto-columns
::: tip
* 在`grid-template-columns`指定行数超出以后的默认行高
:::
::: codePen val=60 type=number
```html{21,24-25}
<body>
  <div class="wrapper">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      width: 150px;
      border: 1px solid #333;

      grid-auto-flow: column;
      grid-template-rows: 40px 40px 40px;
      grid-template-columns: 40px 40px;
      gap: 10px 10px;

      /* 第三列以后的生效样式 */
      grid-auto-columns: {{val}}px;
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
### grid-template
::: tip
* 简写：`grid-template-columns` `grid-template-rows` `grid-template-areas`
:::
### grid
::: tip
* 简写：`grid-template-rows` `grid-template-columns` `grid-template-areas` `grid-auto-rows` `grid-auto-columns` `grid-auto-flow`
:::
## 项目属性
| 值                | 意思                          | 值                |
| ----------------- | ----------------------------- | ----------------- |
| grid-column-start | 项目列起始网格线              | 数字或`span 格数` |
| grid-column-end   | 项目列结束网格线              | 数字或`span 格数` |
| grid-row-start    | 项目行起始网格线              | 数字或`span 格数` |
| grid-row-end      | 项目行结束网格线              | 数字或`span 格数` |
| grid-column       | 简写：`start-line` `end-line` | 数字或`span 格数` |
| grid-row          | 简写：`start-line` `end-line` | 数字或`span 格数` |
| grid-area         | 要放在哪个区域                | 区域名称          |
| justify-self      | 打破`justify-items`的定位规则 |                   |
| align-self        | 打破`align-items`的定位规则   |                   |
| place-self        | 打破`place-items`的定位规则   |                   |
::: codePen val=1 type=number
```html{25}
<body>
  <div class="wrapper">
    <div class="header">1</div>
    <div class="side-bar">2</div>
    <div class="content">4</div>
    <div class="mini-side-bar">3</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      height: 150px;
      border: 1px solid #333;

      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 40px 1fr;
      gap: 10px 10px;
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      box-sizing: border-box;
    }
    .header {
      grid-column-start: span {{val}};
    }
    .side-bar {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .content {
      grid-column-start: 3;
      grid-column-end: 10;
    }
    .mini-side-bar {
      grid-column-start: 10;
      grid-column-end: 13;
    }
  </style>
</body>
```
:::
### grid-area
::: tip
* 配合`grid-template-areas`实现自定义放置位置
* 设置需要放在哪个区域
:::
::: codePen
```html{18-20,27-35}
<body>
  <div class="wrapper">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">4</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      width: 140px;
      border: 1px solid #333;

      grid-template-columns: repeat(3, 40px);
      grid-template-rows: repeat(3, 40px);
      gap: 10px 10px;

      grid-template-areas: "a b c"
                           "d e f"
                           "g h i";
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      box-sizing: border-box;
    }
    .one {
      grid-area: a;
    }
    .two {
      grid-area: e;
    }
    .three {
      grid-area: i;
    }
  </style>
</body>
```
:::
### 圣杯布局
::: codePen
```html
<body>
  <div class="wrapper">
    <div class="header">1</div>
    <div class="side-bar">2</div>
    <div class="content">4</div>
    <div class="mini-side-bar">3</div>
    <div class="footer">5</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      height: 150px;
      border: 1px solid #333;

      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 40px 1fr 40px;
      gap: 10px 10px;
    }
    .wrapper div {
      background-color: rgba(255, 231, 169, 0.6);
      border: 2px solid rgb(226, 184, 47);
      box-sizing: border-box;
    }
    .header, .footer {
      grid-column-start: 1;
      grid-column-end: 13;
    }
    .side-bar {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .content {
      grid-column-start: 3;
      grid-column-end: 10;
    }
    .mini-side-bar {
      grid-column-start: 10;
      grid-column-end: 13;
    }
  </style>
</body>
```
:::
### 瀑布流布局
::: codePen height=500
```html
<body>
  <div class="wrapper">
    <div style="--i: 1">a</div>
    <div style="--i: 2">b</div>
    <div style="--i: 10">c</div>
    <div style="--i: 4">d</div>
    <div style="--i: 5">e</div>
    <div style="--i: 3">f</div>
    <div style="--i: 2">g</div>
    <div style="--i: 1">h</div>
    <div style="--i: 3">i</div>
    <div style="--i: 6">j</div>
    <div style="--i: 1">k</div>
    <div style="--i: 2">l</div>
  </div>

  <style>
    .wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3px;
    }
    .wrapper div {
      background-color: #ff7f50;
      height: calc(20px * var(--i));
      grid-row: span var(--i);
    }
    .wrapper div:nth-child(2n + 1) {
      background-color: #ffa94d;
    }
  </style>
  <script>
    const colors = [
      "#ff7f50",
      "#ffa94d",
      "#ffd700",
      "#adff2f",
      "#20b2aa",
      "#87ceeb",
      "#dda0dd",
      "#ff69b4",
    ];
    const divs = document.querySelectorAll(".wrapper div");
    divs.forEach((div, index) => {
      div.style.backgroundColor = colors[index % colors.length];
    });
  </script>
</body>

```
:::