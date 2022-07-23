---
title: bubble源码分析
date: 2022-07-23
description: bubble effects,鼠标特效,canvas特效,canvas鼠标特效
meta:
    - name: keywords
    - content: bubble effects,鼠标特效,canvas特效,canvas鼠标特效
---
## 源码分析
::: tip
* 局部变量
```js
/**
 * @options: { element }
 */
let hasWrapperEl = options && options.element;
let element = hasWrapperEl || document.body;

let width = window.innerWidth;
let height = window.innerHeight;
let cursor = {
    x: width / 2,
    y: width / 2
};

// 气泡数组？
let particles = [];
let canvas, context;

let canvImages = [];
```
:::
:::: tabs
::: tab label=init
* 初始化canvas画布为`fixed全屏`
```js
function init(wrapperEl) {
    canvas = document.createElement("canvas");
    canvas.style.zIndex = 999;
    context = canvas.getContext("2d");

    canvas.style.top = "0px";
    canvas.style.left = "0px";

    // 元素永远不会成为鼠标事件的target。但是，当其后代元素的pointer-events属性指定其他值时
    // 鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在捕获或冒泡阶段触发父元素的事件侦听器???
    canvas.style.pointerEvents = "none";

    if (hasWrapperEl) {
        canvas.style.position = "absolute";
        element.appendChild(canvas);
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
    } else {
        canvas.style.position = "fixed";
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
    }

    bindEvents();
    loop();
}
```
:::
::: tab label=bindEvents
* 绑定特效事件，遇到代码不触发（手机无效）
```js
// Bind events that are needed
function bindEvents() {
    // 代码不触发，影响阅读
    element.addEventListener("click", preventCode);
    element.addEventListener("mousemove", preventCode);
    element.addEventListener("touchmove", preventCode);
    element.addEventListener("touchstart", preventCode);
    window.addEventListener("resize", preventCode);

    element.addEventListener("click", onMouseMove);
    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("touchmove", onTouchMove);
    element.addEventListener("touchstart", onTouchMove);
    window.addEventListener("resize", onWindowResize);
}
```
:::
::: tab label=loop
* `requestAnimationFrame`循环气泡上升
```js
function loop() {
    updateParticles();
    requestAnimationFrame(loop);
}

function updateParticles() {

    // 清屏
    context.clearRect(0, 0, width, height);

    // Update
    for (let i = 0; i < particles.length; i++) {
        particles[i].update(context);
    }

    // Remove dead particles
    for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].lifeSpan < 0) {
            particles.splice(i, 1);
        }
    }
}
```
:::
::: tab label=Particle
* 气泡工厂
```js{10-13,24-26,29-31}
/**
 *  传入当前的鼠标位置，和canvas实例，生成随机大小和随机运动轨迹的气泡实例 
 * */
function Particle(x, y, canvasItem) {
    const lifeSpan = Math.floor(Math.random() * 60 + 60);
    this.initialLifeSpan = lifeSpan; // 气泡寿命 60~120 个 requestAnimationFrame
    this.lifeSpan = lifeSpan;

    // x、y轴速度(每次跳动距离)
    this.velocity = {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10), // -0.1 ~ 0.1
        y: -0.4 + Math.random() * -1, // -0.40 ~ -0.49
    }
    this.position = {
        x: x,
        y: y
    };
    this.canv = canvasItem;

    // 半径
    this.baseDimension = 4;

    this.update = function (context) {
        // 每个 Animation用 velocity 更新位置
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // 同时更新下个 velocity
        this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75; // -1/75 ~ 2/75
        this.velocity.y -= Math.random() / 600; // // 0.00001 ~ 0.0015
        this.lifeSpan--;

        const scale = 0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan; // 0.2 ~ 1.2 (变大)

        context.fillStyle = "#e6f1f7";
        context.strokeStyle = "#3a92c5";

        // 开始一个新路径(不和原画线相连)，画一个新圆
        context.beginPath();
        context.arc(
            this.position.x - (this.baseDimension / 2) * scale,
            this.position.y - this.baseDimension / 2,
            this.baseDimension * scale,
            0,
            2 * Math.PI
        );

        context.stroke();
        context.fill();

        context.closePath();
    }
}
```
:::
::::