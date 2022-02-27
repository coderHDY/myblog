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
```html{7-9}
<body>
    <div></div>
    <style>
        div {
            width: 0;
            height: 0;
            border-bottom: #333 solid 100px;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
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
* padding/margin用百分比表示时，是通过width做基准的。
>不过padding有背景色，margin没有背景色
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
* 占位layout
```html
<body>
    <div></div>
    <div class="hide"></div>
    <div></div>
    <style>
        div {
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
* 不占位layout
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
* 占位layout
```html
<body>
    <div></div>
    <div class="hide">asdfasdfasdf</div>
    <div></div>
    <style>
        div {
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
## 9.制作扇形
:::: tabs
::: tab label=思路1
* 思路1：外层div，`radius`控制弧形，内层div控制两个直角边，进行移动拼接成扇形
```html
<body>
    <div class="outer">
        <div class="inner"></div>
    </div>
    <style>
        .outer {
            width: 100px;
            height: 100px;
            /* background-color: red; */
            border-radius: 50%;
            overflow: hidden;
        }
        .inner {
            width: 100px;
            height: 100px;
            background-color: rgb(94, 137, 230);
            transform: rotate(45deg) translate(50px, 50px);
        }
    </style>
</body>
```
:::
::: tab label=思路2
* 一个div盒子，
```html
<body>
    <div class="container">
    </div>
    <style>
        .container {
            width: 0px;
            border-top: 100px solid red;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-top-left-radius: 50%;
            border-top-right-radius: 50%;
        }
    </style>
</body>
```
:::
::::
## 10.transform顺序
:::: tabs
::: tab label=题
* 下面两个`transform`有什么区别
```html
<body>
    <div class="container"></div>
    <style>
        .container {
            width: 100px;
            height: 100px;
            background-color: red;
            /* transform: translateY(100px) rotate(45deg); */
            transform: rotate(45deg) translateY(100px);
        }

    </style>
</body>
```
:::
::: tab label=解
* 有区别，因为translate变换有参照点，是盒子的左边和上边。
>rotate旋转后他的**参照边也发生了旋转**，所以移动的方位会发生改变
:::
::::
## 11.transform原理
:::: tabs
::: tab label=题
* `transform`元素会不会对周围影响布局造成影响？
```html
<body>
    <div class="other"></div>
    <div class="container"></div>
    <div class="other"></div>
    <style>
        .other {
            width: 100px;
            height: 100px;
            background-color: blue;
        }

        .container {
            width: 100px;
            height: 100px;
            background-color: red;
            transform: rotate(45deg) translateY(100px);
        }

    </style>
</body>
```
:::
::: tab label=解
* 作用：CSStransform属性允许你旋转，缩放，倾斜或平移给定元素。这是通过**修改CSS视觉格式化模型的坐标空间来实现的**。
* 原理：是通过`矩阵变换`做出来的，**矩阵记录一个css盒子的几个坐标**，然后通过这个矩阵给盒子定位、定绘制大小。transform通过变换这个矩阵的值来进行计算，得到目标位置的新矩阵，进行绘制
* 计算厚的矩阵变换**不会影响原文档的绘制布局**，因为他是`新建的图层`进行的动画展示
    <img src="./assets/csslayer.png" style="width:300px">

```html
<body>
    <div class="other"></div>
    <div class="container"></div>
    <div class="other"></div>
    <style>
        .other {
            width: 100px;
            height: 100px;
            background-color: blue;
        }

        .container {
            width: 100px;
            height: 100px;
            background-color: red;
            transition: all 1s ease;
        }

        .container:hover {
            transform: rotate(-45deg) translateY(100px);
        }

    </style>
</body>

```
:::
::::
## 12.css合成层
:::: tabs
::: tab label=渲染层
>有以下属性的元素会新开一个层
1. 有明确的定位属性（relative、fixed、sticky、absolute）
2. opacity < 1
3. 有 CSS fliter 属性
4. 有 CSS mask 属性
5. 有 CSS mix-blend-mode 属性且值不为 normal
6. 有 CSS transform 属性且值不为 none（**有动画**）
7. backface-visibility 属性为 hidden
8. 有 CSS reflection 属性
9. 有 CSS column-count 属性且值不为 auto或者有 CSS column-width 属性且值不为 auto
10. 当前有对于 opacity、transform、fliter、backdrop-filter 应用动画
11. overflow 不为 visible
:::
::::
## 13.js实现sticky效果
:::: tabs
::: tab label=css实现
```html{22-23}
<body>
        <div id="app">
        <div class="other"></div>
        <div class="other">
            <div class="top">吸顶盒子</div>
        </div>
    </div>
    <style>
        #app {
            height: 10000px;
            width: 100%;
            background-color: rgb(218, 53, 53);
        }

        .other {
            height: 300px;
            width: 100px;
            background-color: rgb(140, 206, 233);
        }

        .top {
            position: sticky;
            top: 0;
        }
    </style>
</body>
```
:::
::: tab label=js实现
```html{22-25,40-41,64-72}
<body>
    <div id="app">
        <div class="other"></div>
        <div class="other">
            <div ref="sticky">吸顶盒子</div>
        </div>
    </div>
    <style>
        #app {
            height: 10000px;
            width: 100%;
            background-color: rgb(218, 53, 53);
        }

        .other {
            position: relative;
            height: 300px;
            width: 100px;
            background-color: rgb(140, 206, 233);
        }

        .sticky {
            position: fixed;
            top: 0;
        }
    </style>

    <script src="https://unpkg.com/vue@next"></script>
    <script>
        const app = Vue.createApp({
            el: '#app',
            data() {
                return {
                    offsetTop: null,
                    stickyListener: null,
                }
            },
            methods: {

                // 1. 节流实现
                // 2. 计算body滚动高度 >= 吸顶盒子.offsetTop
                stickyTopThrottle(time) {
                    let timer = null;
                    let isFirst = true;
                    const stickyDiv = this.$refs.sticky;
                    return () => {
                        if (timer && !isFirst) {
                            return;
                        }
                        isFirst = false;
                        timer = setTimeout(() => {
                            const scrollTop = document.body.scrollTop;
                            if (this.offsetTop <= scrollTop) {
                                stickyDiv.classList.add('sticky');
                            } else if (stickyDiv.classList.contains('sticky')) {
                                stickyDiv.classList.remove('sticky');
                                isFirst = true;
                            }
                            timer = null;
                        }, time)
                    }
                },

                // 获取元素到body最外层的 offsetTop 距离
                getOffsetTop(el) {
                    let ans = el.offsetTop;
                    while (el.offsetParent) {
                        el = el.offsetParent;
                        ans += el.offsetTop;
                    }
                    return ans;
                }
            },
            mounted() {
                this.offsetTop = this.getOffsetTop(this.$refs.sticky);
                this.stickyListener = this.stickyTopThrottle(200);
                document.addEventListener('scroll', this.stickyListener)
            },

            // 性能：移除监听器
            beforeUnmount() {
                document.removeEventListener('scroll', this.stickyListener);
            }
        });
        app.mount("#app")
    </script>
</body>
```
:::
::::