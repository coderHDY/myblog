---
title: 响应式布局
date: 2022-03-04
---
## 媒体查询
:::: tabs
::: tab label=宽高限定
* 媒体查询有顺序要求，范围小的写后面，因为**总是最后一个匹配的生效**
* 不同大小屏幕显示不同颜色
```html
<body>
    <div class="box"></div>
    <style>
        div {
            width: 200px;
            height: 200px;
        }


        @media screen and (min-width: 320px) {
            .box {
                background-color: red;
            }
        }

        @media screen and (min-width:990px) {
            .box {
                background-color: blue;
            }
        }

        @media screen and (min-width: 1500px) {
            .box {
                background-color: pink;
            }
        }

    </style>
</body>
```
:::
::: tab label=dpr限定
* dpr: 物理像素/设备像素
* 修改属性值用`content`
>注意顺序
```html
<body>
    <img src="https://www.baidu.com/img/flexible/logo/pc/result@2.png">
    <style>
        img {
            width: 200px;
            height: 100px;
        }


        @media screen and (-webkit-min-device-pixel-ratio: 1) {
            img {
                content: url(https://inews.gtimg.com/newsapp_bt/0/12171811596_909/0)
            }
        }

        @media screen and (-webkit-min-device-pixel-ratio: 2) {
            img {
                content: url(https://img.alicdn.com/tfs/TB1EGGoLXXXXXcLXpXXXXXXXXXX-123-38.png)
            }
        }

        @media screen and (-webkit-min-device-pixel-ratio: 3) {
            img {
                content: url(https://www.baidu.com/img/flexible/logo/pc/result@2.png)
            }
        }

    </style>
</body>

```
>越高清屏幕显示越高清的图片，让图片不失真，**每个物理像素都能对上一个位图的一个像素**。
:::
::::
## 视口常用值
::: tip
* pc浏览器可用宽度：pc端随着放大而缩小`onresize`
* 手机上是布局视口宽度
    ```js
    document.documentElement.clientWidth
    ```
* 包括滚条的可视宽度：
    ```js
    window.innerWidth
    ```
* 可视宽度+浏览器边框：
* 手机上是视觉视口
    ```js
    window.outerWidth
    ```
* 显示设备宽度：
    ```js
    screen.width
    ```
:::
## 移动端视口
:::: tabs
:::tab label=像素
* `css像素`对标`设备独立像素`，iphone6横向为375px，所以横向css只能写375像素才不会溢出
* 物理像素是手机有多少个物理像素点，iphone6为750个
* `dpr`（物理像素和设备独立像素的比值）：iphone6：2
>注：是在不压缩的情况下，css和设备独立像素对标，但是由于**布局视口会压缩**，所以不是1:1
:::
::: tab label=布局视口
* `布局视口`：移动端接收网页的容器一般是`980px`，再将容器**等比例压缩**到手机浏览器大小
* `视觉视口`，也就是能看到的视口，默认是和布局视口一样宽，一般`980px`
```js
// 移动端布局视口宽度获取
document.documentElement.clientWidth

// 移动端视觉视口
window.innerWidth
```
* 例：[淘宝网页](https://www.taobao.com/)
>所以手机要占满屏幕，宽度要写`980px`

* 大部分手机都显示980
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        console.log(document.documentElement.clientWidth);
        document.querySelector("#box").innerText = `当前布局视口：${document.documentElement.clientWidth}`
    </script>
</body>
</html>
```
:::
::: tab label=理想视口
* `理想视口`：`布局视口 === 设备独立像素`，称为理想视口。
    * 有这一行代码，编写移动端就可以**按照独立像素的宽度进行布局排版**，(iphone6:375px)
```html{6}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        console.log(document.documentElement.clientWidth);
        document.querySelector("#box").innerText = `
        当前布局视口：${document.documentElement.clientWidth}
        当前视觉视口：${window.innerWidth}
        `
    </script>
</body>

</html>

```
:::
::: tab label=缩放
* pc端缩放，可用宽高缩小，造成每个css点所占的屏幕比例变大，视觉上变大。
    * 但也有可能造成页面重排，因为可用宽度减小，元素的css大小不变
* 手机缩放，**视觉视口宽高变小，布局容器视口值不变**，让页面展示的css一个px占的像素点变多，布局容器也随之放大（注：px值不变），就不会造成页面的重排
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover, user-scalable=no">
    ```

* `viewport`：专门为手机伸缩放以及视口适配的h5标签

|属性|作用|值|
|---|---|---|
|width|布局视口的宽度|`device-width`或具体的值(300)|
|initial-scale|【系统】初始缩放比例|1【完美适配,一般和 width 同时使用】|
|maximum-scale|允许用户缩放的最大比例,苹果系列不认识|1|
|minimum-scale|允许用户缩放的最小比利|1|
|user-scalable|是否允许缩放,苹果系列不认识|yes / no|
|viewport-fit|针对刘海屏的网页适配，一般都加|cover|
:::
::::
## 移动端适配
:::: tabs
::: tab label=需求
* 做一个：
    * iphone6标准：375*667
    * 盒子：345*150
    * 居中，上左右边距15px
    * 背景蓝
* **无论采用什么方式做移动端适配，中心原则是`等比`**
:::
::: tab label=viewport
* **直接将布局容器宽度变成设计稿的宽度**，不禁止伸缩放，那么会视觉视口自动伸缩至布局视口大小，展示对应的宽高。
* 问题：
    1. 某些安卓机不支持，兼容性不好
    2. 不希望进行伸缩适配的值，例如边框或阴影，也参与了伸缩适配，ipad横向字体会很大
```html{6,20-22}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=375">
    <title>Document</title>
</head>

<body>
    <div></div>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            margin: 0 auto;
            margin-top: 15px;
            width: 345px;
            height: 150px;
            background-color: blue;
        }
    </style>
</body>

</html>
```
:::
::: tab label=rem【1】
>rem适配核心：**元素rem值与根元素font-size比例固定，动态设置根元素font-size**
* **当前主流方式，百度，淘宝都是这种方式**
    1. 设：iphone6:375px的设备独立像素，根元素font-size设置为100px;
    2. 得：每个元素与100px的比值
    3. 公式求：其他设备根元素font-size加载后重新设置：`??? / dpi = 100 / 375`(??? 为新设备根元素的font-size)
* `dpi`为设备`独立像素宽度`，**设备独立像素在meta标签内设置为等于布局视口宽度，所以直接拿`布局视口宽度`**
>思想：375下根元素是100，其他px转rem值也好算，就是除以100。  
已知标准iphone6的font-size和设备独立像素比例，拿到新的设备独立像素，就能计算出新的根元素font-size
```html{22-24,29-37}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover, user-scalable=no">
    <title>Document</title>
</head>

<body>
    <div></div>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            margin: 0 auto;
            margin-top: 0.15rem;
            width: 3.45rem;
            height: 1.5rem;
            background-color: blue;
        }
    </style>
    <script>
        (function () {
            const setRootFontSize = () => {
                const dpi = document.documentElement.clientWidth;
                const fontSize = dpi * 100 / 375; // iphone6上是 100
                document.documentElement.style.fontSize = fontSize + 'px';
            }
            setRootFontSize();
            window.addEventListener('resize', setRootFontSize);
        })()
    </script>
</body>

</html>
```
* em
    * 子元素字体大小的em是相对于父元素字体大小
    * 元素的 width / height / padding / margin 用em的话是相对于该元素的font-size
* rem：根据根元素`font-size`设置比例:
:::
::: tab label=rem【2】
* 搜狐、唯品会使用方式
* rem配合less计算：
    1. 设：less按照iphone6设计稿设置一个变量`@font:375/10rem;`
    2. 得：**所有响应式数据直接根据`设计稿px/@font`计算得出rem值**
    3. 求：动态设置根元素字体设置为`设备独立像素/10`
>思想：这样每个响应式数据存的只是响应式数据对应根元素大小的比例，实时变换根元素为设备独立像素的0.1倍，则不用计算就可以做适配。
```less{1,10-12}
@font: 375/10rem;

* {
    margin: 0;
    padding: 0;
}

div {
    margin: 0 auto;
    margin-top: (15/@font);
    width: (345/@font);
    height: (150/@font);
    background-color: blue;
}
```
```html{18}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover, user-scalable=no">
    <link rel="stylesheet" href="./index.css">
    <title>Document</title>
</head>

<body>
    <div></div>
    <script>
        (function () {
            const setRootFontSize = () => {
                const dpi = document.documentElement.clientWidth;
                const fontSize = dpi / 10;
                document.documentElement.style.fontSize = fontSize + 'px';
            }
            setRootFontSize();
            window.addEventListener('resize', setRootFontSize);
        })()
    </script>
</body>

</html>
```
:::
::: tab label=vw百分比
* 未来主流方式。当前兼容性不好。
* 想响应式的数据就除以375(设计稿的宽度)做vw的百分比，因为**vw变化是视口要做响应式的直接原因**。
```html{20-22}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div></div>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            margin: 0 auto;
            margin-top: 4vw;
            width: 92vw;
            height: 40vw;
            background-color: blue;
        }

    </style>
</body>
</html>
```
:::
::::

## 是否触摸屏
```js
const canHover = matchMedia("(hover: hover)").matches;
```
## 是否IE
```js
export function isIE() {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return true;
  }
  return false;
}
```