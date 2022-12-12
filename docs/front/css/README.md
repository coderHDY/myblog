---
title: flex布局
date: 2021-12-25
tags:
 - 前端重点
---
## 基本概念
::: tip flex
* 两根轴：主轴和交叉轴
    1. 主轴：flex-direction
    2. 交叉轴：垂直于主轴
* 两根线：起始线和终止线
* flexbox 的特性是沿着主轴或者交叉轴对齐之中的元素。
* 可用空间：父元素【主轴方向的长度】减去【所有子元素相加】
    1. 默认情况下可用空间有剩余会放在最后一个元素之后
    2. 可以修改flex子元素属性来修改可用空间的使用
:::
## flex容器
::: tip display
|值|效果|
|---|---|
|flex|设置默认flex盒子|
:::
:::: tabs
::: tab label=flex
<img src="./assets/flexhezi.png" style="width:400px;">

```html{12}
<body>
    <div id='container'>
        <div class='child'>1</div>
        <div class='child'>2</div>
        <div class='child'>3</div>
        <div class='child'>4</div>
        <div class='child'>5</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            height: 50px;
            width: 200px;
        }
        .child {
            background-color: rgb(98, 133, 231);
            width: 20px;
            margin-right: 1px;
        }
    </style>
</body>
```
:::
::::
## flex-direction
::: tip flex-direction
|值|效果|
|---|---|
|row|【默认】横向主轴|
|row-reverse|主轴横向，所有元素倒序排|
|column|主轴纵向|
|column-reverse|主轴纵向且倒序排|
:::
>reverse的情况下**起始线和终止线互换了**  
::: codePen label=flex-direction val=row-reverse select=[row-reverse,column,column-reverse] height=100

```html{16}
<body>
    <div id="container">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
        <div class="child">4</div>
        <div class="child">5</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 200px;
            height: 25px;
            flex-direction: {{val}};
        }
        .child {
            background-color: rgb(98, 133, 231);
            width: 20px;
            margin-right: 1px;
        }
    </style>
</body>
```
:::
## flex-wrap
::: tip flex-wrap
|值|效果|
|---|---|
|nowrap|【默认】元素被摆放到到一行，这可能导致溢出 flex 容器|
|wrap|元素超出父盒子大小会被换行处理|
|wrap-reverse|换行，**交叉轴方向逆转**|
:::
:::: tabs
::: tab label=nowrap
<img src="./assets/flexwrapnowrap.png" style="width:300px;">

* **子盒子被压缩了**，因为nowrap不换行，且父盒子只有100px，所以超过了就按比例分
```html{14,16,21}
<body>
    <div id='container'>
        <div class='child'>1</div>
        <div class='child'>2</div>
        <div class='child'>3</div>
        <div class='child'>4</div>
        <div class='child'>5</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 100px;
            height: 25px;
            flex-wrap: nowrap;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            width: 30px;
        }
    </style>
</body>
```
:::
::: tab label=wrap
<img src="./assets/flexwrapwrap.png" style="width:300px;">

```html{14,16,22}
<body>
    <div id='container'>
        <div class='child'>1</div>
        <div class='child'>2</div>
        <div class='child'>3</div>
        <div class='child'>4</div>
        <div class='child'>5</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 100px;
            height: 25px;
            flex-wrap: wrap;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
            width: 30px;
        }
    </style>
</body>
```
:::
::: tab label=wrap-reverse
<img src="./assets/flexwrapwrapreverse.png" style="width:300px;">

```html{14,16,22}
<body>
    <div id='container'>
        <div class='child'>1</div>
        <div class='child'>2</div>
        <div class='child'>3</div>
        <div class='child'>4</div>
        <div class='child'>5</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 100px;
            height: 25px;
            flex-wrap: wrap-reverse;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
            width: 30px;
        }
    </style>
</body>
```
:::
::::
## flex-flow
::: tip flex-flow
* flex-direction 和 flex-wrap 的组合简写
:::
:::: tabs
::: tab label=组合
<img src="./assets/flexflow.png" style="width:400px">

```html{16}
<body>
    <div id='container'>
        <div class='child'>1</div>
        <div class='child'>2</div>
        <div class='child'>3</div>
        <div class='child'>4</div>
        <div class='child'>5</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 100px;
            height: 100px;
            flex-flow: column-reverse wrap-reverse;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
            width: 30px;
        }
    </style>
</body>
```
:::
::: tab label=组合2
<img src="./assets/flexflow2.png" style="width:400px">

```html{17}
<body>
    <div id='container'>
        <div class='child'>中</div>
        <div class='child'>国</div>
        <div class='child'>古</div>
        <div class='child'>代</div>
        <div class='child'>书</div>
        <div class='child'>法</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 100px;
            height: 100px;
            flex-flow: column wrap-reverse;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
            width: 30px;
        }
    </style>
</body>
```
:::
::::
## flex-grow
::: tip flex-grow
* 作用：决定父盒子分配**剩余空间**的比例，不允许负数

|值|效果|
|---|---|
|【>0正数】|剩余可用空间的分配增长系数|
|默认1|所有元素等比分配|
:::
:::: tabs
::: tab label=等比分配
<img src="./assets/flexgrow1.png" style="width:400px">

```html{20}
<body>
    <div id='container'>
        <div class='child'>中</div>
        <div class='child'>国</div>
        <div class='child'>古</div>
        <div class='child'>代</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 180px;
            height: 30px;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
            flex-grow: 1;
        }
    </style>
</body>
```
:::
::: tab label=非等比分配
<img src="./assets/flexgrow2.png" style="width:300px">

```html{21,24}
<body>
    <div id='container'>
        <div class='child child1'>中</div>
        <div class='child child1'>国</div>
        <div class='child child2'>古</div>
        <div class='child child2'>代</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 168px;
            height: 30px;
        }
        .child {
            width: 17px;
            background-color: rgb(98, 133, 231);
        }
        .child1 {
            flex-grow: 1;
        }
        .child2 {
            flex-grow: 4;
        }
    </style>
</body>
```
:::
::::
## flex-shrink
::: tip flex-shink
* 作用：指定flex盒子可用空间不足时，子元素的收缩规则，该数值越大，收缩的程度越大
:::
:::: tabs
::: tab label=等比收缩
* 只有flex盒子空间不够时才会发生收缩，此参数才会生效  
<img src="./assets/flexshrink.png" style="width:400px;">

```html{21}
<body>
    <div id='container'>
        <div class='child'>中</div>
        <div class='child'>国</div>
        <div class='child'>古</div>
        <div class='child'>代</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 100px;
            height: 30px;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
            width: 30px;
            flex-shrink: 1;
        }
    </style>
</body>
```
:::
::: tab label=非等比收缩
<img src="./assets/flexshrink2.png" style="width:400px;">

```html{23,26}
<body>
    <div id='container'>
        <div class='child child1'>中</div>
        <div class='child child1'>国</div>
        <div class='child child2'>古</div>
        <div class='child child2'>代</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 100px;
            height: 30px;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
            width: 30px;
        }
        .child1 {
            flex-shrink: 0;
        }
        .child2 {
            flex-shrink: 1;
        }
    </style>
</body>
```
:::
::::
## flex-basis
::: tip flex-basis
*  flex 子元素在主轴方向上的初始大小

|值|效果|
|---|---|
|【width值】|【默认，就是跟着width值】可以用auto 或者具体的像素大小|
|content|早期没有，可以用auto|
:::

>默认就是按照内容所占的大小分配  
::: codePen label=flex-basis val=auto select=[auto,40px] height=70
```html{20}
<body>
    <div id="container">
        <div class="child">中</div>
        <div class="child">国</div>
        <div class="child">古</div>
        <div class="child">代</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 180px;
            height: 30px;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
            flex-basis: {{val}};
        }
    </style>
</body>
```
:::
## flex
::: tip flex
* 混合属性，**按序**
* flex: xx yy zz;
    1. flex-grow
    2. flex-shrink
    3. flex-basis

|值|相当于|效果|
|---|---|---|
|initial|0 1 auto|不分配可用空间，等比例压缩，按照width宽度排大小|
|auto|1 1 auto|等比例分配可用空间，等比例压缩，按照width宽度排大小|
|none|0 0 auto|不分配，不压缩，原样展示，多的溢出|
|1|1 1 0|等比例分配可用空间，等比例压缩，不管原始大小|
:::
::: codePen label=flex select=[initial,auto,none,1] val=initial height=70
```html{21}
<body>
    <div id="container">
        <div class="child child1">中</div>
        <div class="child child1">国</div>
        <div class="child child2">古</div>
        <div class="child child2">代</div>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 180px;
            height: 30px;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
            width: 30px;
            flex: {{val}};
        }
    </style>
</body>
```
:::
## align-items
::: tip align-items
* 子元素交叉轴方向的对齐方式

|值|stretch|
|---|---|
|stretch|【默认】弹性子盒子被拉伸到flex盒子相同的交叉轴长度|
|flex-start|交叉轴起点对齐|
|flex-end|交叉轴终点对齐|
|center|居中|
:::

::: codePen label=align-items select=[stretch,flex-start,flex-end,center] val=stretch height=50
```html{14-15}
<body>
    <div id="container">
        <span class="child child1">中</span>
        <span class="child child1">国</span>
        <span class="child child2">古</span>
        <span class="child child2">代</span>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 150px;
            height: 30px;
            align-items: {{val}};
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
        }
    </style>
</body>
```
:::
## align-self
::: tip
* flex盒子的子元素使用，覆盖父盒子的align-items的布局属性
:::
::: codePen height=150
```html{12,17,23,29}
<body>
  <div class="father">
    <div class="child1"></div>
    <div class="child2"></div>
    <div class="child3"></div>
  </div>

  <style>
    .father {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 150px;
      background-color: rgb(241, 216, 216);
    }
    .child1 {
      align-self: start;
      height: 30px;
      width: 30px;
      background-color: #333;
    }
    .child2 {
      align-self: center;
      height: 30px;
      width: 30px;
      background-color: #333;
    }
    .child3 {
      align-self: end;
      height: 30px;
      width: 30px;
      background-color: #333;
    }
  </style>
</body>
```
:::
## justify-content
::: tip justify-content
* 作用：分配主轴元素位置与剩余可用空间的关系

|值|效果|
|---|---|
|start|每行与第一个元素对齐|
|end|向主轴尾部对齐，可用空间放起始线方向|
|center|居中，可用空间等比放两边|
|space-between|均匀分配中间元素和可用空间，两侧元素靠边|
|space-arround|均匀分配所有元素和可用空间，【1元素1 1元素1】的形式|
|space-evenly|均匀分配所有元素和可用空间，【1元素1元素1】 的形式|
:::
::: codePen label=justify-content select=[start,end,center,space-between,space-around,space-evenly] height=150 val=start
```html{23-24}
<body>
    <div id="container">
        <span class="child child1">中</span>
        <span class="child child2">国</span>
        <span class="child child3">古</span>
        <span class="child child4">代</span>
        <span class="child child1">中</span>
        <span class="child child2">国</span>
        <span class="child child3">古</span>
        <span class="child child4">代</span>
        <span class="child child1">中</span>
        <span class="child child2">国</span>
        <span class="child child3">古</span>
        <span class="child child4">代</span>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 160px;
            height: 100px;
            flex-wrap: wrap;
            justify-content: {{val}};
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-right: 1px;
            margin-bottom: 1px;
        }
        .child1 {
            width: 20px;
            height: 25px;
        }
        .child2 {
            width: 20px;
            height: 20px;
        }
        .child3 {
            width: 20px;
            height: 25px;
        }
        .child4 {
            width: 20px;
            height: 15px;
        }
    </style>
</body>
```
:::
## space-between问题
:::: tabs
::: tab label=space-between
* 使用space-between时最后一行居中不美观  
<img src="./assets/spacebetween.png" style="width:300px;">

```html{23-24}
<body>
    <div id='container'>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 160px;
            height: 100px;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-bottom: 1px;
            width: 30px;
        }
    </style>
</body>
```
:::
::: tab label=伪元素
* 父元素留伪元素解决
* 需要计算出伪元素占主轴的长度，**缺点：不够动态，css不能够预知最后一行有几个元素**

<img src="./assets/spacebetween2.png" style="width:300px;">

```html{31-34}
<body>
    <div id='container'>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 160px;
            height: 100px;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .child {
            background-color: rgb(98, 133, 231);
            margin-bottom: 1px;
            width: 30px;
        }
        #container::after {
            content: '';
            width: 95px;
        }
    </style>
</body>
```
:::
::: tab label=伪元素升级
* 除了最后一个，都带上margin-right，伪元素设置`flex:auto`自动填充
```html{34-39,41-44}
<body>
    <div id='container'>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>古</span>

    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 160px;
            height: 100px;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .child {
            background-color: rgb(98, 133, 231);
            margin-bottom: 1px;
            width: 30px;
        }

        .child:nth-child(5n - 1),
        .child:nth-child(5n - 2),
        .child:nth-child(5n - 3),
        .child:nth-child(5n - 4) {
            margin-right: 2.3px;
        }

        #container::after {
            content: '';
            flex: auto;
        }

    </style>
</body>
```
:::
::: tab label=计算margin
* 不使用`justify-content`，并且除了最后一列元素，都赋予计算好的margin值
```html{20-21,33-36}
<body>
    <div id="container">
        <span class="child">中</span>
        <span class="child">国</span>
        <span class="child">古</span>
        <span class="child">代</span>
        <span class="child">中</span>
        <span class="child">国</span>
        <span class="child">古</span>
        <span class="child">代</span>
        <span class="child">中</span>
        <span class="child">国</span>
        <span class="child">古</span>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            /* 直接预留的就是间距2px */
            width: 158px;
            height: 100px;
            flex-wrap: wrap;
            /* justify-content: space-between; */
        }

        .child {
            background-color: rgb(98, 133, 231);
            margin-bottom: 1px;
            width: 30px;
        }

        /* 重点：除了最后一个，都有自己的 margin-right */
        .child:not(:nth-child(5n)) {
            margin-right: 2px;
        }

    </style>
</body>
```
:::
::: tab label=计算margin
* 还使用`justify-content`，通过选择器计算出最后一个元素是最后一行第几个，再分别赋予margin值

```html{34-36,38-40,42-44}
<body>
    <div id='container'>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>代</span>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            width: 160px;
            height: 100px;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .child {
            background-color: rgb(98, 133, 231);
            margin-bottom: 1px;
            width: 30px;
        }

        .child:last-child:nth-child(5n - 1) {
            margin-right: calc(30px + 2.3px);
        }

        .child:last-child:nth-child(5n - 2) {
            margin-right: calc(30px + 2.3px + 30px + 2.3px);
        }

        .child:last-child:nth-child(5n - 3) {
            margin-right: calc(30px + 2.3px + 30px + 2.3px + 30px + 2.3px);
        }

    </style>
</body>
```
:::
::: tab label=不固定列数
* 使用`无高度占位元素`改变了html解构，**且最后一列会有margin-right**
```html{15,33-36}
<body>
    <div id='container'>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>代</span>
        <span class='child'>中</span>
        <span class='child'>国</span>
        <span class='child'>古</span>
        <span class='child'>古</span>
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </div>

    <style>
        #container {
            display: flex;
            background-color: rgb(241, 149, 149);
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .child {
            background-color: rgb(98, 133, 231);
            margin-bottom: 1px;
            width: 30px;
            margin-right: 2.3px;
        }

        #container>i {
            width: 30px;
            margin-right: 2.3px;
        }

    </style>
</body>
```
:::
::::
## 滚动盒子/隐藏滚动条
:::: tabs
::: tab label=题
* 要求：做一个横向滚动flex盒子，且隐藏滚动条
* 类似网易云音乐的横向滚动推荐歌单
:::
::: tab label=解
```html{34-41,43-46,49}
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover, user-scalable=no">
    <title>Document</title>
</head>

<body>
    <div class="content-box">
        <div class="scroll-box">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
        </div>
    </div>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .content-box {
            width: 100vw;
            height: 120px;
        }

        /* 不换行，固定宽，子元素拒绝压缩，就会形成滚动 */
        .scroll-box {
            display: flex;
            flex-wrap: nowrap;
            width: 100%;
            height: 120px;
            overflow-x: auto;
        }

        /* 隐藏scroll-bar */
        .scroll-box::-webkit-scrollbar {
            display: none
        }

        .scroll-box>div {
            flex-shrink: 0;
            width: 100px;
            height: 100px;
            margin: 10px;
            background-color: red;
        }

    </style>

</body>
```
:::
::::