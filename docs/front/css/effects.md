---
title: 动画特效
date: 2021-12-28
---
## 霓虹灯按钮
::: codePen width=600
```html{50-68}
<body>
    <button class="btn">
        <span class="span1">&nbsp;</span>
        <span class="span2">&nbsp;</span>
        <span class="span3">&nbsp;</span>
        <span class="span4">&nbsp;</span>
        我是按钮
    </button>
    <button class="btn2">
        <span class="span1">&nbsp;</span>
        <span class="span2">&nbsp;</span>
        <span class="span3">&nbsp;</span>
        <span class="span4">&nbsp;</span>
        我是按钮
    </button>
    <button class="btn3">
        <span class="span1">&nbsp;</span>
        <span class="span2">&nbsp;</span>
        <span class="span3">&nbsp;</span>
        <span class="span4">&nbsp;</span>
        我是按钮
    </button>

    <style>
        body {
            background-color: black;
            padding: 50px;
        }
        button {
            margin-right: 20px;
        }
        .btn {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: rgb(219, 245, 181);
            background-color: transparent;
            outline: none;
            border: 0;
            box-shadow: rgb(145, 165, 114) 0px 0px 1px;
            overflow: hidden;
        }
        .btn:hover {
            background-color: #00ff0d;
            color: rgb(56, 83, 15);
            box-shadow: #00ff0d 0 0 10px;
        }
        .btn>span {
            display: block;
            position: absolute;
        }
        .btn>.span1 {
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to right, transparent, #00ff0d);
            animation: move1 800ms 0s linear infinite forwards; 
        }
        @keyframes move1 {
            0% {
                left: -100%;
                top: 0;
            }
            100% {
                left: 200%;
            }
        }
        .btn>.span2 {
            top: -100%;
            right: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to bottom, transparent, #00ff0d);
            animation: move2 800ms 200ms linear infinite forwards; 
        }
        @keyframes move2 {
            0% {
                top: -100%;
                right: 0%;
            }
            100% {
                top: 200%;
            }
        }
        .btn>.span3 {
            right: -100%;
            bottom: 0%;
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to left, transparent, #00ff0d);
            animation: move3 800ms 400ms linear infinite forwards; 
        }
        @keyframes move3 {
            0% {
                right: -100%;
                bottom: 0%;
            }
            100% {
                right: 200%;
            }
        }
        .btn>.span4 {
            bottom: -100%;
            left: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to top, transparent, #00ff0d);
            animation: move4 800ms 600ms linear infinite forwards; 
        }
        @keyframes move4 {
            0% {
                bottom: -100%;
                left: 0%;
            }
            100% {
                bottom: 200%;
            }
        }

        /* 后面就是重复按钮 */
        .btn2 {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: rgb(245, 181, 234);
            background-color: transparent;
            outline: none;
            border: 0;
            box-shadow: rgb(245, 181, 234) 0px 0px 1px;
            overflow: hidden;
        }
        .btn2:hover {
            background-color: #ff00ff;
            color: rgb(83, 15, 83);
            box-shadow: #ff00ff 0 0 10px;
        }
        .btn2>span {
            display: block;
            position: absolute;
        }
        .btn2>.span1 {
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to right, transparent, #ff00ff);
            animation: move1 800ms 0s linear infinite forwards; 
        }
        .btn2>.span2 {
            top: -100%;
            right: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to bottom, transparent, #ff00ff);
            animation: move2 800ms 200ms linear infinite forwards; 
        }
        .btn2>.span3 {
            right: -100%;
            bottom: 0%;
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to left, transparent, #ff00ff);
            animation: move3 800ms 400ms linear infinite forwards; 
        }
        .btn2>.span4 {
            bottom: -100%;
            left: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to top, transparent, #ff00ff);
            animation: move4 800ms 600ms linear infinite forwards; 
        }
        /* 按钮3 */
        .btn3 {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: rgb(181, 230, 245);
            background-color: transparent;
            outline: none;
            border: 0;
            box-shadow: rgb(181, 230, 245) 0px 0px 1px;
            overflow: hidden;
        }
        .btn3:hover {
            background-color: #00ffff;
            color: rgb(15, 81, 83);
            box-shadow: #00ffff 0 0 10px;
        }
        .btn3>span {
            display: block;
            position: absolute;
        }
        .btn3>.span1 {
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to right, transparent, #00ffff);
            animation: move1 800ms 0s linear infinite forwards; 
        }
        .btn3>.span2 {
            top: -100%;
            right: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to bottom, transparent, #00ffff);
            animation: move2 800ms 200ms linear infinite forwards; 
        }
        .btn3>.span3 {
            right: -100%;
            bottom: 0%;
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to left, transparent, #00ffff);
            animation: move3 800ms 400ms linear infinite forwards; 
        }
        .btn3>.span4 {
            bottom: -100%;
            left: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to top, transparent, #00ffff);
            animation: move4 800ms 600ms linear infinite forwards; 
        }
    </style>
</body>
```
:::
## 追赶霓虹灯代码
* 实际上是通过不同的时间间隔配合渐变条产生的视觉残影制作的  
::: codePen width=600
```html{58,75,92,109}
<body>
    <button class="btn">
        <span class="span1">&nbsp;</span>
        <span class="span2">&nbsp;</span>
        <span class="span3">&nbsp;</span>
        <span class="span4">&nbsp;</span>
        我是按钮
    </button>
    <button class="btn2">
        <span class="span1">&nbsp;</span>
        <span class="span2">&nbsp;</span>
        <span class="span3">&nbsp;</span>
        <span class="span4">&nbsp;</span>
        我是按钮
    </button>
    <button class="btn3">
        <span class="span1">&nbsp;</span>
        <span class="span2">&nbsp;</span>
        <span class="span3">&nbsp;</span>
        <span class="span4">&nbsp;</span>
        我是按钮
    </button>

    <style>
        body {
            background-color: black;
            padding: 50px;
        }
        button {
            margin-right: 20px;
        }
        .btn {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: rgb(219, 245, 181);
            background-color: transparent;
            outline: none;
            border: 0;
            box-shadow: rgb(145, 165, 114) 0px 0px 1px;
            overflow: hidden;
        }
        .btn:hover {
            background-color: #00ff0d;
            color: rgb(56, 83, 15);
            box-shadow: #00ff0d 0 0 10px;
        }
        .btn>span {
            display: block;
            position: absolute;
        }
        .btn>.span1 {
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to right, transparent, #00ff0d);
            animation: move1 800ms 0s linear infinite forwards; 
        }
        @keyframes move1 {
            0% {
                left: -100%;
                top: 0;
            }
            100% {
                left: 200%;
            }
        }
        .btn>.span2 {
            top: -100%;
            right: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to bottom, transparent, #00ff0d);
            animation: move2 800ms 400ms linear infinite forwards; 
        }
        @keyframes move2 {
            0% {
                top: -100%;
                right: 0%;
            }
            100% {
                top: 200%;
            }
        }
        .btn>.span3 {
            right: -100%;
            bottom: 0%;
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to left, transparent, #00ff0d);
            animation: move3 800ms 800ms linear infinite forwards; 
        }
        @keyframes move3 {
            0% {
                right: -100%;
                bottom: 0%;
            }
            100% {
                right: 200%;
            }
        }
        .btn>.span4 {
            bottom: -100%;
            left: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to top, transparent, #00ff0d);
            animation: move4 800ms 1200ms linear infinite forwards; 
        }
        @keyframes move4 {
            0% {
                bottom: -100%;
                left: 0%;
            }
            100% {
                bottom: 200%;
            }
        }

        /* 后面就是重复按钮 */
        .btn2 {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: rgb(245, 181, 234);
            background-color: transparent;
            outline: none;
            border: 0;
            box-shadow: rgb(245, 181, 234) 0px 0px 1px;
            overflow: hidden;
        }
        .btn2:hover {
            background-color: #ff00ff;
            color: rgb(83, 15, 83);
            box-shadow: #ff00ff 0 0 10px;
        }
        .btn2>span {
            display: block;
            position: absolute;
        }
        .btn2>.span1 {
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to right, transparent, #ff00ff);
            animation: move1 800ms 0s linear infinite forwards; 
        }
        .btn2>.span2 {
            top: -100%;
            right: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to bottom, transparent, #ff00ff);
            animation: move2 800ms 400ms linear infinite forwards; 
        }
        .btn2>.span3 {
            right: -100%;
            bottom: 0%;
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to left, transparent, #ff00ff);
            animation: move3 800ms 800ms linear infinite forwards; 
        }
        .btn2>.span4 {
            bottom: -100%;
            left: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to top, transparent, #ff00ff);
            animation: move4 800ms 1200ms linear infinite forwards; 
        }
        /* 按钮3 */
        .btn3 {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: rgb(181, 230, 245);
            background-color: transparent;
            outline: none;
            border: 0;
            box-shadow: rgb(181, 230, 245) 0px 0px 1px;
            overflow: hidden;
        }
        .btn3:hover {
            background-color: #00ffff;
            color: rgb(15, 81, 83);
            box-shadow: #00ffff 0 0 10px;
        }
        .btn3>span {
            display: block;
            position: absolute;
        }
        .btn3>.span1 {
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to right, transparent, #00ffff);
            animation: move1 800ms 0s linear infinite forwards; 
        }
        .btn3>.span2 {
            top: -100%;
            right: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to bottom, transparent, #00ffff);
            animation: move2 800ms 400ms linear infinite forwards; 
        }
        .btn3>.span3 {
            right: -100%;
            bottom: 0%;
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to left, transparent, #00ffff);
            animation: move3 800ms 800ms linear infinite forwards; 
        }
        .btn3>.span4 {
            bottom: -100%;
            left: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to top, transparent, #00ffff);
            animation: move4 800ms 1200ms linear infinite forwards; 
        }
    </style>
</body>
```
:::
## 简易loading动画
* 来自【阿阳热爱前端】
* css动画技术
    1. css设置变量
    2. transform动画
    3. animation动画

::: codePen width=600 height=300
```html{94-97,143}
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML+CSS 简易Loading动画</title>
    <link rel="stylesheet" href="./index.css" />
</head>

<body>
    <div class="container">
        <div class="sun">
            <div class="sun-body">
                <div class="line" style="--i: 1"></div>
                <div class="line" style="--i: 2"></div>
                <div class="line" style="--i: 3"></div>
                <div class="line" style="--i: 4"></div>
                <div class="line" style="--i: 5"></div>
                <div class="line" style="--i: 6"></div>
                <div class="line" style="--i: 7"></div>
                <div class="line" style="--i: 8"></div>
            </div>
            <div class="eye"></div>
        </div>
        <div class="horizon"></div>
    </div>
    <style>
        /* 定义全局的变量 */
        :root {
            --light-color: #f4c042;
            --dark-color: #7a5600;
        }

        /* 将所有元素以及它的伪元素的内外边距清除,并且改变盒子模型的计算方法 */
        *,
        *::before,
        *::after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            /* 弹性布局 让页面元素垂直+水平居中 */
            display: flex;
            justify-content: center;
            align-items: center;
            /* 让页面占浏览器可视区域的高度 */
            height: 100vh;
            background-color: var(--light-color);
        }

        .container {
            /* 相对定位 */
            position: relative;
            width: 300px;
            height: 300px;
        }

        /* 太阳 start */
        .container .sun {
            /* 绝对定位 */
            position: absolute;
            top: 135px;
            /* 这里是自动计算 也可以自己手动计算出82px */
            left: calc(50% - 136px / 2);
            width: 136px;
            height: 136px;
            animation: sun 2.7s linear infinite;
        }
        /* 圆圈 start */
        .container .sun .sun-body {
            position: absolute;
            top: 18px;
            left: 18px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 6px solid var(--dark-color);
            animation: sun-body 2.7s linear infinite;
        }
        /* 圆圈 end */
        /* 外层光线 start */
        .container .sun .sun-body .line {
            position: absolute;
            top: -24px;
            left: calc(50% - 3px);
            width: 6px;
            height: 12px;
            border-radius: 6px;
            background-color: var(--dark-color);
            /* 我们写了8个类名为line的元素 并设置变量--i 可以通过自定计算旋转角度 */
            transform: rotate(calc(var(--i) * 45deg));
            /* 在设置旋转角度为圆圈中心 */
            transform-origin: center 68px;
        }
        /* 外层光线 end */
        /* 眼睛 start */
        .container .sun .eye {
            position: absolute;
            top: 60px;
            left: 40px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: var(--dark-color);
            /* 用阴影复制一对眼睛 */
            box-shadow: 16px 0 var(--dark-color);
            animation: eye 2.7s linear infinite;
        }
        /* 眼睛 end */
        /* 太阳 end */

        /* 地平线 start */
        .container .horizon {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 115px;
            background-color: var(--light-color);
        }
        .container .horizon::before {
            content: "";
            position: absolute;
            left: 5%;
            width: 90%;
            height: 6px;
            border-radius: 6px;
            background-color: var(--dark-color);
        }
        /* 地平线 end */
        /* loading 字样 start */
        .container .horizon::after {
            content: "Loading...";
            position: absolute;
            top: 30px;
            width: 100%;
            text-align: center;
            font-size: 25px;
            color: var(--dark-color);
            animation: loading 2.7s linear infinite;
        }
        /* loading 字样 end*/

        @keyframes sun {
            10% {
                transform: translate(0);
            }
            40%,
            70% {
                transform: translateY(-40px);
            }
        }

        @keyframes sun-body {
            40% {
                transform: rotate(0);
            }
            50%,
            100% {
                transform: rotate(45deg);
            }
        }

        @keyframes eye {
            50%,
            60% {
                transform: scale(1);
            }
            55% {
                transform: scaleY(0.1);
            }
            70%,
            100% {
                transform: translateX(34px);
            }
        }

        @keyframes loading {
            40% {
                opacity: 1;
            }
            60% {
                opacity: 0;
            }
        }
    </style>
</body>

</html>
```
:::
## 手写轮播图
::: codePen width=600 height=300
```html
<body>
    <div class="swiper-container">
        <div class="swiper">
            <div class="swiper-item">
                <img src="http://p1.music.126.net/Hw0XfBDOKAq6zky6-FfNmQ==/109951167524024227.jpg?imageView&quality=89" class="swiper-img">
            </div>
            <div class="swiper-item">
                <img src="http://p1.music.126.net/GlneKk-0iSdP7Ug9tHtA1w==/109951167524304592.jpg?imageView&quality=89" class="swiper-img">
            </div>
            <div class="swiper-item">
                <img src="http://p1.music.126.net/9HzGGuuftmIPYeSe0IEBcA==/109951167524071252.jpg?imageView&quality=89" class="swiper-img">
            </div>
            <div class="swiper-item">
                <img src="http://p1.music.126.net/wKGNJ7gaazIfkfI3uYPiIA==/109951167524045404.jpg?imageView&quality=89" class="swiper-img">
            </div>
            <div class="swiper-item">
                <img src="http://p1.music.126.net/iFc1gO43OsSk2njkHWZYbA==/109951167524364228.jpg?imageView&quality=89" class="swiper-img">
            </div>
        </div>
        <span class="prev">《GO</span>
        <span class="next">GO》</span>
    </div>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        /* 隐藏scroll-bar */
        .swiper-container::-webkit-scrollbar {
            display: none;
        }

        .swiper-container {
            position: relative;
            width: 100%;
            overflow: hidden;
        }
        .swiper {
            display: flex;
            position: relative;
            transition: all .5s 0s ease-in-out;
        }
        .swiper-item {
            flex-shrink: 0;
            width: 100%;
            text-align: center;
            justify-content: space-between;
            overflow: hidden;
        }
        .swiper-img {
            width: 100vw;
            height: auto;
        }
        .prev,.next {
            position: absolute;
            background-color: rgba(232, 232, 232, 0.3);
            box-shadow: 0 0 3px #333;
            width: 3em;
            height: 1.2em;
            line-height: 1.2em;
            border-radius: .75em;
            top: 50%;
            transform: translate(0, -50%);
            user-select: none;
        }
        .prev {
            left: 3%;
            text-align: left;
        }
        .next {
            position: absolute;
            right: 3%;
            text-align: right;
        }
    </style>
    <script>
        const prev = document.querySelector(".prev");
        const next = document.querySelector(".next");
        const swiperItem = document.querySelector(".swiper-item");
        let swiper = document.querySelector(".swiper");
        let itemNum = swiper.querySelectorAll(".swiper-item").length;
        let swiperRect = swiper.getClientRects()[0];
        let swiperItemRect = swiperItem.getClientRects()[0];
        let itemWidth = parseInt(swiperItemRect.width);
        let moving = false;

        // 设计模式：代理模式
        // 利用proxy管理当前展示的 index，劫持后做DOM操作
        let showIdxProxy = new Proxy({ i: 0 }, {
            set(target, p, val) {
                if (val < 0) {
                    val = itemNum - 1;
                    swiper.style.left = `-${(itemNum - 1) * itemWidth}px`;
                } else if (val >= itemNum) {
                    val = 0;
                    swiper.style.left = "0px";
                } else {
                    swiper.style.left = `-${Math.abs(val * itemWidth)}px`;
                }
                Reflect.set(target, p, val);
                return true;
            }
        });

        window.addEventListener("resize", (() => {
            let timer;
            return () => {
                if (timer) return;
                timer = setTimeout(() => {
                    swiper = document.querySelector(".swiper");
                    itemNum = swiper.querySelectorAll(".swiper-item").length;
                    swiperItemRect = swiperItem.getClientRects()[0];
                    itemWidth = parseInt(swiperItemRect.width);
                }, 20)
            }
        })())

        prev.addEventListener("click", () => {
            if (moving) return;
            moving = true;
            setTimeout(() => moving = false, 500);
            showIdxProxy.i = showIdxProxy.i <= 0 ? itemNum - 1 : showIdxProxy.i - 1;

        })
        next.addEventListener("click", () => {
            if (moving) return;
            moving = true;
            setTimeout(() => moving = false, 500);
            showIdxProxy.i = showIdxProxy.i >= itemNum - 1 ? 0 : showIdxProxy.i + 1;
        });
    </script>
</body>
```
:::