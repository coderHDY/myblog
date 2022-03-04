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
<meta name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover, user-scalable=no">
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