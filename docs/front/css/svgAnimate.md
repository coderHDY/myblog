---
title: svg动画
date: 2024-02-13
---
## 动画属性一览
* 时间： 
  * `begin`: 
  * `dur`: 
  * `end`: 
  * `min`: 
  * `max`:
  * `restart`:
  * `repeatCount`:
  * `repeatDur`: 
  * `fill`: 动画结束时效果`remove (默认回到初始状态)` | `freeze（停留在动画结束状态）`
* 值
  * `calcMode`:
  * `values`: 
  * `keyTimes`: 
  * `keySplines`: 
  * `form`: 
  * `to`: 
  * `by`: 
* 其他属性
  * `attributeName`: 
  * `additive`: 
  * `accumulate`: 
## 时间
### begin/end
* 开始时间/结束时间可用值
* 值1: 时间（s）
* 值2: 其他动画的时间节点的偏移量
* 值3: 事件
* 值4: 重复事件时间节点
* 值5: 键盘按钮(无效？)
* 值6: ISO8601 定义的标准时间
> 值1: 文档加载后的等待时间
::: codePen height=40
```html
<svg>
  <rect x="0" y="0" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="3s"
      begin="1s"
      fill="freeze"
    />
  </rect>
  <rect x="0" y="10" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="3s"
      begin="4s"
      fill="freeze"
    />
  </rect>
</svg>
```
:::
> 值2: 其他事件的偏移量 **id**.`begin` / `end`
::: codePen height=40
```html{18,28}
<svg>
  <rect x="0" y="0" width="10" height="3">
    <animate 
      id="a1"
      attributeName="width"
      to="200"
      dur="3s"
      begin="1s"
      repeatCount="2"
      fill="freeze"
    />
  </rect>
  <rect x="0" y="10" width="10" height="3">
    <animate 
      id="a2"
      attributeName="width"
      to="200"
      dur="3s"
      begin="a1.end"
      fill="freeze"
    />
  </rect>
  <rect x="0" y="20" width="10" height="3">
    <animate 
      id="a3"
      attributeName="width"
      to="200"
      dur="3s"
      begin="a2.begin"
      fill="freeze"
    />
  </rect>
</svg>
```
:::
> 值3: 事件 **id.event**  
> `focusin`、`focusout`、`activate`、`click`、`mousedown`、`mouseup`、`mouseover`、`mousemove`、`mouseout`、`DOMSubtreeModified`、`DOMNodeInserted`、`DOMNodeRemoved`、`DOMNodeRemovedFromDocument`、`DOMNodeInsertedIntoDocument`、`DOMAttrModified`、`DOMCharacterDataModified`、`SVGLoad`、`SVGUnload`、`SVGAbort`、`SVGError`、`SVGResize`、`SVGScroll`、`SVGZoom`、`beginEvent`、`endEvent`、`repeatEvent`。
::: codePen height=80
```html
<body>
  <button id="startBtn">start</button>
  <button id="endBtn">end</button>

  <svg>
    <rect x="0" y="10" width="10" height="3">
      <animate 
        id="a1"
        attributeName="width"
        to="200"
        dur="3s"
        repeatCount="indefinite"
        begin="startBtn.click"
        end="endBtn.click"
        fill="freeze"
      />
    </rect>
  </svg>
</body>
```
:::
### dur
* 动画周期
* 可用格式/单位：`hh:mm:ss.iii` / `mm:ss.iii`
::: codePen height=40
```html
<svg>
  <rect x="0" y="0" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="3s"
      repeatCount="indefinite"
      fill="freeze"
    />
  </rect>
  <rect x="0" y="10" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="00:15"
      repeatCount="indefinite"
      fill="freeze"
    />
  </rect>
</svg>
```
:::
### restart
* 定义动画是否可以重新开始
* `always(默认)`: 总是可以重新开始
* `whenNotActive`: 只有在结束后才可以重新开始
* `never`: 永远不可以重新开始
::: codePen height=100
```html
<button id="startBtn">start</button>
<button id="endBtn">end</button>

<svg>
  <rect x="0" y="10" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="3s"
      restart="always"
      begin="startBtn.click"
      end="endBtn.click"
      fill="freeze"
    />
  </rect>

  <rect x="0" y="20" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="3s"
      restart="whenNotActive"
      begin="startBtn.click"
      end="endBtn.click"
      fill="freeze"
    />
  </rect>

  <rect x="0" y="30" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="3s"
      restart="never"
      begin="startBtn.click"
      end="endBtn.click"
      fill="freeze"
    />
  </rect>
</svg>
```
:::
### repeatDur
* 定义动画总重复时间
* 可用格式/单位：`hh:mm:ss.iii` / `mm:ss.iii`
::: codePen height=100
```html
<button id="startBtn">start</button>
<svg>
  <rect x="0" y="10" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="3s"
      begin="startBtn.click"
      repeatDur="8s"
      fill="freeze"
    />
  </rect>
</svg>
```
:::
### fill
* 结束定格模式
* remove: 回到初始状态
* freeze: 定格结束状态
::: codePen height=60
```html{9,19}
<button id="startBtn">start</button>
<svg>
  <rect x="0" y="10" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="3s"
      begin="startBtn.click"
      fill="remove"
    />
  </rect>

  <rect x="0" y="20" width="10" height="3">
    <animate 
      attributeName="width"
      to="200"
      dur="3s"
      begin="startBtn.click"
      fill="freeze"
    />
  </rect>
</svg>
```
:::
## 动画值
### values
* 设置多个值
::: codePen
```html
<svg>
  <circle cx="10" cy="10" r="5">
    <animate attributeName="cy" attributeType="XML" values="10;130;10" dur="4s" repeatCount="indefinite"></animate>

    <animate attributeName="cx" attributeType="XML" values="10;130;10" dur="4s" repeatCount="indefinite"></animate>
  </circle>
</svg>
```
:::
### keyTimes
* 和[values](#values)一一对应
* 每一个值都是一个[0-1]的数，代表对应**总时间的比例**
::: codePen
```html
<svg>
  <circle cx="10" cy="10" r="5">
    <animate
      attributeName="cy"
      attributeType="XML"
      dur="4s"
      repeatCount="indefinite"
      values="10;130;10"
      keyTimes="0;0.4;1"
    />

    <animate
      attributeName="cx"
      attributeType="XML"
      dur="4s"
      repeatCount="indefinite"

      values="10;130;10"
      keyTimes="0;0.85;1"
    />

</circle>
</svg>
```
:::
### attributeName
* 要改变的属性值
::: codePen width=300
```html
<svg width="300" height="200">
  <path
    d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
    fill="transparent"
    stroke="black"
  >
    <animate
      attributeName="d"
      dur="3s"
      values="
        M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80;
        M10 80 C 40 150, 65 150, 95 80 S 150 10, 180 80;
        M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80
      "
      keyTimes="0;0.5;1"
      repeatCount="indefinite"
    />
  </path>
</svg>
```
:::
::: codePen width=300
```html
<body>
  <svg width="300" height="200">
    <path
      id="myPath"
      d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
      fill="transparent"
      stroke="black"
      stroke-width="2"
    >
      <animate
        id="myAnimate"
        attributeName="stroke-dashoffset"
        dur="2s"
        keyTimes="0;1"
        fill="freeze"
        begin="2s"
      />
    </path>
  </svg>

  <script>
    // 通过设置 stroke-dasharray stroke-dashoffset 配合动画，做出线条逐渐延伸效果
    document.addEventListener("DOMContentLoaded", function () {
      const path = document.getElementById("myPath");
      const animate = myPath.querySelector("animate");
      const pathLength = path.getTotalLength();
      path.setAttribute("stroke-dasharray", pathLength);
      path.setAttribute("stroke-dashoffset", pathLength);

      animate.setAttribute("values", `${pathLength};0`);
    });
  </script>
</body>
```
:::
### accumulate
* 要改变的属性值
::: codePen width=3000 height=60
```html
<button id="startBtn">start</button>

<svg width="3000" height="100">
  <rect y="5" width="0" height="20" fill="blue">
    <animate
      attributeName="width"
      begin="startBtn.click"
      dur="1s"
      values="0;60;20"
      keyTimes="0;0.5;1"
      repeatCount="indefinite"
      accumulate="sum"
    />
  </rect>
</svg>
```
:::