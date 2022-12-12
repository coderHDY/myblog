---
title: 选择器
date: 2021-12-27
---
## 状态选择
::: tip 状态
|属性|状态|
|---|---|
|link|无状态|
|hover|覆盖|
|active|鼠标按下去时|
|focus|光标聚焦|
|visited|已访问过(历史记录有这一条)|
:::
* 注意：【:link】和【:visited】应该放在最上面，因为同时多种状态且属性冲突时，取最下面一种状态设置的属性
>例：【:hover】时元素的【:link】属性依旧触发，所以【:hover】应该定义在【:link的下面】
::: codePen height=70
```html
<body>
    <a href="#a1" id="a">超链接</a>

    <div id="a1">锚点</div>
    <style>
        a:visited {
            background-color: yellow;
        }
        a:link {
            background-color: red;
        }
        a:hover {
            background-color: blue;
        }
        a:active {
            background-color:greenyellow;
        }
    </style>
    <script>a.addEventListener("click", e => e.preventDefault())</script>
</body>
```
:::
>取消【input】元素选中时的边框
::: codePen height=70
```html{6-8}
<body>
    <input type="text" id="input1">
    <input type="text" id="input2">

    <style>
        #input1:focus {
            outline: none;
        }
    </style>
</body>
```
:::
## 关联选择器
::: tip 
|选择器|选择元素|
|---|---|
|交集：【p标签】且【.left】|p.left|
|后代：【p标签】内的【.left】|p .left【空格分开】|
|并集：【p标签】和【.left】|p,.left|
|子代|p>.left|
|所有弟弟|p~.left|
|下一个弟弟|p+.left|
:::
>交集/后代/并集
::: codePen height=100
```html
<body>
    <p class="left">
        p且left
        <span class="left">p的儿子 left</span>
    </p>
    
    <span class="left">p的兄弟 left</span>

    <style>
        /* 交集选择器，p 且 left */
        p.left {
            color: red;
        }

        /* 后代选择器，p 的后代 left */
        p .left {
            color: green;
        }

        /* 并集选择器，p 和 left */
        p,.left {
            background-color: rgb(253, 224, 162);
        }
    </style>
</body>
```
:::
>子代/兄弟
::: codePen
```html{4-10}
<body>
    <div class="big-brother">哥哥</div>
    
    <div class="me">
        我
        <div class="child">
            儿子
            <div>孙子</div>
        </div>
    </div>
    
    <div class="brother">弟弟</div>

    <div class="sister">妹妹</div>


    <style>
        /* 下一个弟弟 */
        .me+div{
            background-color: red;
        }

        /* 所有弟弟 */
        .me~div {
            font-size: 25px;
        }

        /* 儿子 */
        .me>div {
            border: #333 solid 1px;
        }
    </style>
</body>
```
:::
## 属性选择器
::: tip 属性选择器
* 元素拥有某个属性时选择，【css scope原理】
```css
[property] {}
```
:::

::: codePen height=100
```html
<body>
    <div>tag选择器</div>
    <div class="box">普通class选择器</div>
    <div class="box" data-hash123>class配属性选择器</div>


    <style>
        div {
            background-color: red;
        }
        .box {
            background-color: yellow;
        }
        .box[data-hash123] {
            background-color: green;
        }
    </style>
</body>
```
:::
## 正则属性选择器
::: tip 正则匹配属性
|选择器|含义|
|---|---|
|[id^=my]|id以my开头|
|[data$=box]|data以box结尾|
|[id*=container]|id包含container|
:::
::: codePen
```html
<body>
    <div id="my-box">1</div>
    <div id="his-box">2</div>
    <div id="our-container">3</div>
    <div id="my-container">4</div>


    <style>
        div[id^=my] {
            background-color: red;
        }

        div[id$=container] {
            font-size: 40px;
        }

        div[id*=our] {
            color: pink;
        }
    </style>
</body>
```
:::
## 结构化伪类选择器
::: tip 伪类
|选择元素|选择器|
|---|---|
|非选择器|li:not(.me)|
|独子|container:only-child|
|大儿子|:first-child|
|小儿子|:last-child|
|按序选择|:nth-child(3) / :nth-child(2N)|
|奇偶选择器|:nth-of-type(even) / :nth-of-type(odd)|
|空选择器|:empty|
|跳转目标选择器|:target|
:::
::: codePen label=选择器 val=li:only-child select=[li:only-child,li:not(.me),li:first-child,li:last-child]
```html{14}
<body>
    <ul class="father">
        <li class="big-brother">哥哥</li>
        <li class="me">我</li>
        <li class="brother">弟弟</li>
        <li class="sister">妹妹</li>
    </ul>

    <ul class="father">
        <li>独子</li>
    </ul>

    <style>
        {{val}} {
            background-color: pink;
        }
    </style>
</body>
```
:::
>本选择器且【没有内容和子标签】
::: codePen label=选择器 val=li:empty select=[li:empty,li:nth-child(3N),li:nth-child(3N+1),li:nth-child(3N+2),li:nth-of-type(odd),li:nth-of-type(even)] height=300
```html{11-12}
<body>
    <ul class="father">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li><span></span></li>
        <li></li>
    </ul>

    <style>
        {{val}} {
            background-color: pink;
        }
    </style>
</body>
```
:::
:::: tabs
::: tab label=跳转目标选择器
* 本选择器且【作为超链接的跳转目标被触发时】  
<video src="./assets/targetxuanzeqi.mp4" style="width:300px;" controls/>

```html{18-20}
<body>
    <a href="#a1">超链接1</a>
    <a href="#a2">超链接2</a>
    
    <ul class="father">
        <li id="a1">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li><span></span></li>
        <li></li>
    </ul>
    <style>
        li:target {
            background-color: pink;
        }
    </style>
</body>
```
:::
::::
## 伪元素
::: tip 伪元素
* 伪元素：是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。
* 与伪类的区别：CSS 伪类 是添加到选择器的关键字，指定要选择的元素的【特殊状态】。

|伪元素|效果|
|---|---|
|after|选择器内末尾添加一个伪元素|
|before|选择器内开头添加一个伪元素|
|first-letter|块级元素的第一行的第一个字母|
|first-line|所选块级元素的第一行|
|marker|结构化标识符|
|placeholder|占位文本|
|selection|选中文本的样式自定义|
:::
>after/before
::: codePen height=70 width=370
```html
<body>
    <p class="content">我是一段文章文章。。。</p>

    <style>
        .content::before {
            content: "hello~,";
            background-color: pink;
        }
        .content::after {
            content: "that is all~";
            background-color: yellow;
        }
    </style>
</body>
```
:::
::: codePen val=first-letter select=[.content::first-letter,.content::first-line] height=100
```html{13-15}
<body>
    <p class="content">
        我是一段文章文章。。。
        <br>
        我是第二行
    </p>

    <div class="content">
        我是一段文章文章。。。
    </div>

    <style>
        {{val}} {
            background-color: pink;
        }
    </style>
</body>
```
:::
>marker: HTML默认的结构化标记增加自定义样式  
::: codePen height=250
```html{15-17}
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li class="me">4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>
    <style>
        .me::marker {
            color: red;
        }
    </style>
</body>
```
:::
>placeholder:HTML默认的结构化标记增加自定义样式  
::: codePen height=70
```html{5-8}
<body>
    <input type="text" placeholder="默认占位符样式">
    <input type="text" class="mybox"placeholder="自定义占位符样式">
    <style>
        .mybox::placeholder {
            color: red;
            font-size: .7rem;
        }
    </style>
</body>
```
:::
>selection:自定义选中样式
::: codePen height=100
```html
<body>
    <p>我是文字我是文字我是文字</p>
    <div>我是文字我是文字我是文字</div>
    <style>
        p::selection {
            color: hotpink;
        }
    </style>
</body>
```
:::