---
title: 图片拖动
date: 2022-09-18
---
## 事件
::: tip
* 拖动元素
  * `dragstart`
  * `dragend`
* 接受元素
  * `dragenter`
  * `dragover`
  * `dragleave`
  * `drop`
:::
## 元素拖动
>拖动元素标签需要加上`dragable="true"`
::: danger 
* **`dragover`是默认阻止`drag`事件，会将drag事件重置为none**，阻止`drop`事件触发。所以要写拖动事件，需要将dragover事件`preventDefault`
:::
* [效果预览](https://coderhdy.github.io/h5-demo/#基础021-图片拖动)
:::: tabs
::: tab label=html
```html
<body>
    <link rel="stylesheet" href="./index.css">

    <div class="flex-container">
        <div class="empty">
            <div class="picture" draggable="true"></div>
        </div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
    </div>

    <script src="./index.js"></script>
</body>
```
:::
::: tab label=css
```css
* {
    margin: 0;
    padding: 0;
}
.flex-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 100vh;
    background-color: rgb(123, 153, 236);
}
.empty {
    position: relative;
    width: 100px;
    height: 100px;
    border: 3px solid #333;
    margin-right: 1rem;
}
.empty.hover {
    border-style: dashed;
}
.picture {
    width: 100%;
    height: 100%;
    background-image: url("	https://coderhdy.com/assets/img/portrait.jpg");
    background-size: cover;
}
.picture.hold {
    border: 5px solid #ccc;
    opacity: 0.3;
}

@media screen and (max-width: 650px) {
    .flex-container {
        flex-direction: column;
    }
}
```
:::
::: tab label=js
```js
const picture = document.querySelector(".picture");
const boxes = document.querySelectorAll(".empty");

Array.prototype.forEach.call(boxes, box => {
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", drop);
});

picture.addEventListener("dragstart", dragStart)
picture.addEventListener("dragend", dragEnd)

function dragStart() {
    // 元素的eventListener，拿到的this就是元素本身
    this.classList.add("hold");
}
function dragEnd() {
    this.classList.remove("hold");
}
function dragEnter() {
    this.classList.add("hover");
}
function dragOver(e) {
    /**
     * 重点：浏览器默认阻止编辑模式，不让drop事件发生
     * drop默认效果是让这个drag事件变为none
     * 所以需要在 【dragover】事件中preventDefault
     * 才可以让元素触发drop事件
     *  */
    e.preventDefault()
}
function dragLeave() {
    this.classList.remove("hover");
}
function drop() {
    this.append(picture);
    this.classList.remove("hover");
}
```
:::
::::