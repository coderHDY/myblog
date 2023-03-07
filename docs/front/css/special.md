---
title: 特殊样式记录
date: 2022-06-21
---
## 模糊背景
```html
<body>
    <div class="bgc"><img src="https://coderhdy.com/assets/img/bgimg.jpg" alt=""></div>
    <div class="box">你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</div>
    <style>
        .bgc {
            position: absolute;
            height: 80vh;
            width: 100%;
            background-repeat: no-repeat;
            background-position: 50% 0;
            background-color: #fff;
            -webkit-filter: blur(50px);
            /* Chrome, Safari, Opera */
            filter: blur(50px);
            background-size: cover;
            overflow: hidden;
            z-index: -1;
        }

        .box {
            position: relative;
        }

    </style>
</body>
```
## css滚动阴影
```html{24-29,31-37}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        header {
            position: sticky;
            background: rgba(255, 255, 255, 0.9);
            top: 0;
            text-align: center;
            font-size: 20px;
            padding: 10px;
            z-index: 1;
        }

        shadow::before {
            content: '';
            box-shadow: 0 0 15px 3px #333;
            position: fixed;
            width: 100%;
        }

        shadow::after {
            content: '';
            width: 100%;
            height: 15px;
            background: #fff;
            position: absolute;
        }

        ul {
            margin-top: 15px;
        }

        li {
            height: 100px;
            margin-bottom: 10px;
            background-color: rgb(255, 111, 111);
        }
    </style>

    <header>css头部滚动阴影</header>
    <shadow></shadow>
    <div>
        <ul>
            <li>1</li>
        </ul>
    </div>
</body>

</html>
```
## button关闭点击阴影
* 手机特有阴影效果
```css
button {
    -webkit-tap-highlight-color: transparent;
　　-moz-tap-highlight-color:transparent;
　　outline: 0;
}

input {
    -webkit-appearance: none;
}
```
## 五角星
:::: tabs
::: tab label=样式
```html
<head>
    <link rel="stylesheet" href="./index.css">
    <title>Document</title>
</head>

<body>
    <div class="star"></div>
</body>
```
* css
```css{14,23,28,36,41}
* {
    padding: 0;
    margin: 0;
}
body {  
    display: grid;
    place-items: center;
    height: 100vh;
}
.star {
    position: relative;
    width: 0;
    height: 0;
    border-top: 36.32px solid red;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
}
.star::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 36.32px solid red;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    transform-origin: center;
    left: -50px;
    top: -36.32px;
    transform: rotate(69deg);
}
.star::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 36.32px solid red;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    transform-origin: center;
    left: -50px;
    top: -36.32px;
    transform: rotate(-71deg);
}
```
:::
::: tab label=角度计算
* 关键是计算出几个三角形的底边和高的比例
* 已知五角星角为`36°`
* 求出底和高，三个三角形转一转就出来了
```js
const reg = Math.PI / 180 * 36;
console.log(50 * Math.tan(reg)); // 36.327
```
:::
::::
## 骨架屏
::: tip 重点
* 用某祖先节点类名控制整体的loading样式
* **background-position移动是盒子移动，背景图片不动**，背景图片可以控制大小和repeat来制作重复效果
:::
* [效果预览](https://coderhdy.github.io/h5-demo/#基础024-骨架屏)
:::: tabs
::: tab label=html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./index.css">
  <title>Document</title>
</head>
<body>
  <div class="card loading">
    <div class="title-img-wrapper">
      <img src="https://coderhdy.com/assets/img/bgimg.jpg" alt="" class="title-img">
    </div>
    <div class="user-info">
      <div class="avator-wrapper">
        <img src="https://coderhdy.com/assets/img/portrait.jpg" alt="" class="avatar">
      </div>
      <span class="name">coderHDY</span>
    </div>
    <div class="contant">
      <p class="context1">this is some useful papper!this is some useful papper!this is some useful papper!</p>
      <p class="context2">this is some useful papper!</p>
    </div>
  </div>
  <script src="./index.js"></script>
</body>
</html>
```
:::
::: tab label=css
```css
* {
  padding: 0;
  margin: 0;
}
body {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: rgb(104, 186, 236);
}
.card {
  width: 300px;
  height: auto;
  border-radius: .5rem;
  box-shadow: 0 0 30px rgb(210, 202, 202);
  background-color: #fff;
  overflow: hidden;
}
.title-img-wrapper {
  position: relative;
  height: 150px;
  width: 100%;
}
.title-img {
  height: 100%;
  width: 100%;
}
.user-info {
  position: relative;
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}
.avator-wrapper {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  vertical-align: bottom;
  overflow: hidden;
}
.avatar {
  width: 100%;
  height: 100%;
}
.name {
  position: relative;
  display: inline-block;
  margin-left: 1rem;
  height: 50px;
  line-height: 50px;
}
.contant {
  margin-top: 1rem;
  padding: 1rem;
}
.context1 {
  position: relative;
  text-indent: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
}
.context2 {
  position: relative;
  margin-top: 1rem;
  font-size: .9rem;
  color: rgb(119, 115, 115);
}

/* 骨架屏 */
.loading.card {
  background-color: rgb(200, 200, 200);
}
.loading.card .title-img-wrapper::after,
.loading.card .avator-wrapper::after,
.loading.card .name::after,
.loading.card .context1::after,
.loading.card .context2::after {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
  background-size: 200% 100%;
  background-color: rgb(255, 255, 255);
  background-position: 50% 0;
  animation: bg 1s linear infinite;
  border-radius: 1px;
  z-index: 100;
}
.loading.card .name::after {
  margin-top: 1rem;
  height: 1rem;
  width: 10rem;
}
.loading.card .name::after,
.loading.card .context1::after,
.loading.card .context2::after {
  border-radius: 7px;
}

@keyframes bg {
  to {
    background-position: -150% 0;
  }
}
```
:::
::: tab label=js
```js
const card = document.querySelector(".card");

setTimeout(() => {
  card.classList.remove("loading")
}, 4000)
```
:::
::::
## JS获取样式
```JS
const width = getComputedStyle(e.target).getPropertyValue('width');
```
## form表单禁止跳转
```html
<body>
    <form action="" onsubmit="return false">
        <input type="search">
        <input type="submit" value="submit">
    </form>
</body>
```
## 浏览器滚动条
```scss
// 滚动条
// 滚动条整体部分，其中的属性有width,height,background,border等。
body::-webkit-scrollbar {
  background: linear-gradient(to bottom, #a2d5ec 0%, #3e91b4 57.6px, #fff 57.6px, #fff 100%) !important;
}

// 滚动条里面可以拖动的滑块
body::-webkit-scrollbar-thumb {
}
// 外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
body::-webkit-scrollbar-track {
  height: calc(100vh - 57.6px);
  margin-top: 57.6px;
}
// 内层轨道，需要注意的就是它会覆盖第三个属性的样式。
body::-webkit-scrollbar-track-piece {
}
//  滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
body::-webkit-scrollbar-button {}
// 边角，两个滚动条交汇处
body::-webkit-scrollbar-corner {}
// 两个滚动条交汇处用于拖动调整元素大小的小控件（基本用不上）
body::-webkit-resizer {}
```
## 浏览器滚动条占位
* 问题：局部滚动，出现滚动条，滚动条占位，会影响页面布局
* 复现条件：
  * mac设置 -> 滚动条 -> 总是展示滚动条
```css
/* 滚动 div 盒子 */
/* overflow: overlay firefox浏览器不生效，因此设置两个属性作为降级属性 */
div {
  overflow: auto;
  overflow-y: overlay;
}
```