---
title: 动画特效
date: 2021-12-28
---
## 霓虹灯按钮
:::: tabs
::: tab label=特效按钮
<video src="./assets/texiao0.mp4" style="width:400px;" controls />
:::
::: tab label=代码
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
::: tab label=思路
<img src="./assets/texiaoanniu1.png" style="width:700px" >
:::
::: tab label=追赶霓虹灯
<video src="./assets/zhuigannihongdeng.mp4" style="width:400px;" controls />

* 实际上是通过不同的时间间隔配合渐变条产生的视觉残影制作的  

<video src="./assets/duogenihongdeng.mp4" style="width:400px;" controls />

:::
::: tab label=追赶霓虹灯代码
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
::::
## 简易loading动画
:::: tabs
::: tab label=介绍
* 来自【阿阳热爱前端】
* css动画技术
    1. css设置变量
    2. transform动画
    3. animation动画
:::
::: tab label=index.html
```html
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
</body>

</html>
```
:::
::: tab label=index.css
```css{65-68,114}
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
```
:::
::::