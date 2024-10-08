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
## input-number隐藏按钮
::: codePen height=100
```html
<body>
  <input type="number" />
  <input type="number" class="special" />

  <style>
    input[type="number"].special::-webkit-inner-spin-button,
    input[type="number"].special::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"].special {
      -moz-appearance: textfield;
    }
  </style>
</body>
```
:::
## input-search修改clear样式
```css
input[type=search]::-webkit-search-cancel-button: {
  -webkit-appearance: none,
  position: relative,
  height: 1rem,
  width: 1rem,
  borderRadius: 50%,
  backgroundSize: 100% 100%,
  backgroundImage: url("a.svg"),
},
input[type=search]::-ms-clear: {
  appearance: none,
  position: relative,
  height: 1rem,
  width: 1rem,
  borderRadius: 50%,
  backgroundSize: 100% 100%,
  backgroundImage: url("a.svg"),
},
```
## css节流按钮
::: codePen height=100
```html
<body>
  <button>节流按钮</button>

  <script>
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
      console.log("11111111");
    });
  </script>

  <style>
    button {
      animation: throttle 1s forwards step-end;
    }
    button:active {
      animation: none;
    }
    @keyframes throttle {
      from {
        color: red;
        pointer-events: none;
      }
      to {
        color: black;
        pointer-events: auto;
      }
    }
  </style>
</body>

```
:::
## IOS14滚动白屏
* bug：ios14.0某些滚动会白屏
* 可滚动框加一行属性
```css
-webkit-overflow-scrolling: touch;
```
## 手机点击元素背景色
* 关闭手机下元素被点击的黑色阴影
```css
input {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0),
}
```
## 手机search按钮
* 手机键盘的search按钮，keyCode是enter
1. 用`form`包裹，且得有`action`参数
2. `input`的`type`是`search`
```html
<form action="">
  <input type="search" placeholder="" placeholder="请输入搜索" />
</form>
```
## 事件穿透
::: codePen val=none select=[none, painted]
```html{23}
<body>
  <div class="under"></div>
  <div class="upper"></div>

  <style>
    .under {
      position: absolute;
      left: 0;
      top: 0;
      height: 100px;
      width: 100px;
      background-color: #f00;
    }
    .upper {
      position: absolute;
      left: 30px;
      top: 30px;
      height: 200px;
      width: 200px;
      opacity: 0.5;
      background-color: rgb(97, 106, 97);
      z-index: 999;
      pointer-events: {{val}};
    }
  </style>

  <script>
    const under = document.querySelector(".under");
    const upper = document.querySelector(".upper");

    under.addEventListener("click", () => {
      alert("底下的元素被点击");
    });

    upper.addEventListener("click", () => {
      alert("顶部被点击");
    });
  </script>
</body>
```
:::
## 固定屏幕宽高比
::: tip
无论屏幕大小，内容都以固定比例展现，且子内容同比缩小放大
:::
- 最外层容器不能是body
- 最外层容器定位为fixed
```js
const html = document.querySelector("html");
const body = document.querySelector("body");

// container 比例
const rateWidth = 600;
const rateHeight = 600;

body.style.padding = 0;
body.style.margin = 0;
html.style.height = `${rateHeight}px`;
html.style.width = `${rateWidth}px`;
html.style.padding = 0;
html.style.position = "fixed";
html.style.left = "50%";
html.style.top = "50%";
html.style.transform = "scale(1) translate(-50%, -50%)";
html.style.transformOrigin = "0% 0%";

const onResize = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const wRate = w / rateWidth;
  const hRate = h / rateHeight;
  const scale = wRate > hRate ? hRate : wRate;
  html.style.transform = `scale(${scale}) translate(-50%, -50%)`;
};

window.addEventListener("resize", onResize);
onResize();
```

## filter模糊兼容现代浏览器写法
```css
filter: blur(4px);
-webkit-filter: blur(4px);
-webkit-backdrop-filter:blur(4px);
backdrop-filter: blur(4px);
```