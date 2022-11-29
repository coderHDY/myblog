---
title: canvas2d Api
date: 2022-11-26
---
## 通用API
::: tip
|变量|作用|调用|
|---|---|---|
|beginPath|重开一个路径|beginPath()|
|stroke|将本次beginPath以后的线都`描`出来|stroke()|
|fill|将本次beginPath以后的线都`填充`出来|fill()|
|clearRect|清除方块|clearRect(x, y, width, height)|
|clip|剪裁掉|clearRect(x, y, width, height)|
:::
### fill规则
![canvas](./assets/canvasfillguize.png)
### ctx.canvas
::: tip 
* ctx对象获取本canvas的反向引用
:::
```html{4,9}
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const ctx = canvas.getContext("2d");

        ctx.fillText("你好呀", 50, 50, 100);

        document.body.append(canvas);
        console.log(ctx.canvas.height); // 500
    </script>
</body>
```
### clip规则
::: codePen height=100
```html
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");

        ctx.arc(100, 100, 70, Math.PI, 0, false);
        ctx.clip(); // 将上述部分剪裁掉
        ctx.fillRect(0, 0, 100, 100); // 填充形状，被剪裁掉的无法填充
    </script>
</body>
```
:::
## 文字
### font
::: tip
* 设置字体`大小`和`类型`
* 值：与[css Font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font)可配置项相同

|值|必填|事项|例|
|---|---|---|---|
|font-size|必填||20px|
|font-family|必填|**必须最后指定**|通用字体：`serif`/`sans-serif`/`monospace`/`cursive`/`fantasy`/`system-ui`/`math`/`emoji`/`fangsong`|
|font-style|非|必须在 font-size 之前|`normal` / `italic` / `oblique 10deg` |
|font-variant|非|必须在 font-size 之前|`normal` / `none` |
|font-weight|非|必须在 font-size 之前，`1~1000`|`normal` / `bold` / `700` |
|line-height|非|必须在 font-size 之后，数字 / 长度 / 百分比 / `normal`|`normal` / `1.5` / `30px` / `150%` |

:::
```html
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.font = "oblique 30deg 20px serif";
        ctx.fillText("你好呀", 30, 30);

        document.body.append(canvas);
    </script>
</body>
```
### direction
::: tip
* 设置`文字`左右方向
* 值：`ltr` | `rtl` | `inherit`
:::
```html{11}
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const ctx = canvas.getContext("2d");

        //  默认从左往右
        ctx.font = '48px serif';
        ctx.fillText('Hi, Toney!', 250, 40);

        // 修改从右往左
        ctx.direction = 'rtl';
        ctx.fillText('Hi, Toney!', 250, 40);

        document.body.append(canvas);
    </script>
</body>
```
### textBaseLine
* 文字对齐方式
```js
ctx.textBaseLine = 'center';
```
<img src="./assets/baselineshezhi.png" style="width:300px"/>

::: codePen height=150 val=center select=[top,hanging,middle,alphabetic,ideographic,bottom]
```html
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio;
        canvas.style.width = canvas.width;
        canvas.style.height = canvas.height;
        canvas.width = canvas.width * dpr;
        canvas.height = canvas.height * dpr;
        ctx.scale(dpr, dpr);

        ctx.moveTo(10, 25);
        ctx.lineTo(100, 25);
        ctx.stroke();
        ctx.moveTo(10, 55);
        ctx.lineTo(100, 55);
        ctx.stroke();
        ctx.moveTo(10, 40);
        ctx.lineTo(100, 40);
        ctx.stroke();
        ctx.font = "30px emoji";
        ctx.textBaseline = "{{val}}";
        
        ctx.fillText("你好呀", 100, 40);
    </script>
</body>
```
:::
### textAlign
::: codePen label=textAlign val=center select=[center,left,right,start,end] height=100
```html{16}
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio;
        canvas.style.width = canvas.width;
        canvas.style.height = canvas.height;
        canvas.width = canvas.width * dpr;
        canvas.height = canvas.height * dpr;
        ctx.scale(dpr, dpr);

        ctx.moveTo(100, 0);
        ctx.lineTo(100, 100);
        ctx.stroke();
        ctx.font = "30px emoji";
        ctx.textAlign = "{{val}}";
        ctx.fillText("你好呀", 100, 30);
    </script>
</body>
```
:::
## 线
### lineCap
::: tip
* 线段末端的属性

|值|效果|
|---|---|
|butt|线段末端以方形结束|
|round|线段末端以圆形结束|
|square|线段末端以方形结束，增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域|
:::
::: codePen label=lineCap val=round select=[round,bott,square]
```html
<canvas id="canvas100" width="500" height="500" style="width:500px; height: 500px;"></canvas>
<style>
    canvas {
        background-color: rgb(180, 236, 147);
    }
</style>
<script>
    const canvas = document.getElementById("canvas100");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(100, 100);
    ctx.lineWidth = 15;
    ctx.lineCap = "{{val}}";

    ctx.stroke();
</script>
```
:::
### lineDashOffset
::: tip
* 虚线偏移量
:::

::: codePen label=lineDashOffset val=2 type=number height=151
```html
<body>
    <canvas id="dashCanvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#dashCanvas");
        const ctx = canvas.getContext("2d");

        ctx.setLineDash([4, 16]);
        ctx.lineDashOffset = {{val}};

        ctx.beginPath();
        ctx.moveTo(0, 50);
        ctx.lineTo(400, 50);
        ctx.stroke();

        ctx.setLineDash([0, 0]);
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(100, 100);
        ctx.lineWidth = 15;
        ctx.lineCap = "round";

        ctx.stroke();
    </script>
</body>
```
:::
* 蚂蚁线
::: codePen label=timer val=10 type=number height=170
```html
<body>
    <canvas id="dashCanvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#dashCanvas");
        const ctx = canvas.getContext("2d");

        ctx.setLineDash([5, 10]);
        let offset = 0;
        const stashLine = (x, y) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            offset++;
            ctx.lineDashOffset = offset;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 100, y);
            ctx.lineTo(x + 100, y + 100);
            ctx.lineTo(x, y + 100);
            ctx.lineTo(x, y);
            ctx.stroke();
            setTimeout(() => stashLine(x, y), {{val}});
        }
        stashLine(10, 10);
    </script>
</body>
```
:::
:::: tabs
::: tab label=lineDashOffset
```html{8,10}
<body>
    <canvas id="dashCanvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#dashCanvas");
        const ctx = canvas.getContext("2d");

        // 设置虚线 实线4-虚线16
        ctx.setLineDash([4, 16]);
        // 向前偏移
        ctx.lineDashOffset = 2;

        ctx.beginPath();
        ctx.moveTo(0, 50);
        ctx.lineTo(400, 50);
        ctx.stroke();

        // 重置虚线配置
        ctx.setLineDash([0, 0]);
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(100, 100);
        ctx.lineWidth = 15;
        ctx.lineCap = "round";

        ctx.stroke();
    </script>
</body>
```
:::
::: tab label=蚂蚁线
```html{11,12}
<body>
    <canvas id="dashCanvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#dashCanvas");
        const ctx = canvas.getContext("2d");

        ctx.setLineDash([5, 10]);
        let offset = 0;
        const stashLine = (x, y) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            offset++;
            ctx.lineDashOffset = offset;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 100, y);
            ctx.lineTo(x + 100, y + 100);
            ctx.lineTo(x, y + 100);
            ctx.lineTo(x, y);
            ctx.stroke();
            setTimeout(() => stashLine(x, y), 10);
        }
        stashLine(10, 10);
    </script>
</body>
```
:::
::::
### lineJoin
::: tip
* 同一条线转弯位置的连接方式
* 可选值：`bevel`,`round`,`miter`
:::
::: codePen height=130 label=lineJoin val=bevel select=[bevel,round,miter]
```html{12}
<body>
    <canvas id="dashCanvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#dashCanvas");
        const ctx = canvas.getContext("2d");

        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(50, 50);

        ctx.lineJoin = "{{val}}";

        ctx.lineTo(100, 10);
        ctx.stroke();
    </script>
</body>
```
:::
### lineWidth
::: tip
* 线宽
:::
```js
ctx.lineWidth = 7;
```
### bezierCurveTo
::: tip
* 重要：贝塞尔曲线
* ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
* 参照点两个，一个结束点
:::
::: codePen height=100
```html
<body style="overflow:hidden;">
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.bezierCurveTo(100, 0, 10, 30, 10, 90);
        ctx.stroke();
    </script>
</body>
```
:::
## 形状
### strokeStyle/fillStyle
::: tip
* strokeStyle：画笔（`边框`/`线条`）的颜色、样式
* fillStyle/描述即将渲染的图形（`内部`）的颜色和样式
* 值： `color` | `ctx.createLinearGradient`对象 | `ctx.createPattern`对象
:::
::: codePen height=100
```html
<canvas id="c1" width="500" height="500" style="width:500px; height: 500px;"></canvas>
<script>
    const canvas = document.querySelector("#c1");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#333";
    ctx.fillRect(10, 5, 30, 30);

    ctx.fillStyle = "#879900";
    ctx.fillRect(10, 40, 30, 30);

    ctx.strokeStyle = "red";
    ctx.strokeRect(10, 40, 31, 31);
</script>
```
:::
:::: tabs
::: tab label=fillStyle
```html{6,9,12,15-18}
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "red";
        ctx.fillRect(10, 10, 30, 30);

        ctx.fillStyle = "#879900";
        ctx.fillRect(10, 40, 30, 30);

        ctx.fillStyle = "rgba(255,130,130,0.3)";
        ctx.fillRect(10, 70, 30, 30);

        const gradient = ctx.createLinearGradient(10, 100, 10, 130);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "#fff");
        ctx.fillStyle = gradient;
        ctx.fillRect(10, 100, 30, 30);

        document.body.append(canvas);
    </script>
</body>
```
:::
::: tab label=strokeStyle
```html
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#333";
        ctx.fillRect(10, 5, 30, 30);

        ctx.fillStyle = "#879900";
        ctx.fillRect(10, 40, 30, 30);

        ctx.strokeStyle = "red";
        ctx.strokeRect(10, 40, 31, 31)

        document.body.append(canvas);
    </script>
</body>
```
:::
::::
### filter
::: tip
* 模糊、灰度等过滤效果
* 值：`url(<url>)` | `blur(<length>)` | `brightness(<percentage>)` | `contrast(<percentage>)` | `drop-shadow(<offset-x>, <offset-y>, <blur-radius>, <spread-radius>, <color>)`
:::
### globalAlpha
::: tip
* 全局的`形状`和`图片`的透明度
:::
```html{7}
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.globalAlpha = "0.3";

        ctx.fillStyle = "red";
        ctx.fillRect(10, 10, 100, 100);

        ctx.fillStyle = "blue";
        ctx.fillRect(60, 60, 100, 100);

        document.body.append(canvas);
    </script>
</body>
```
### globalCompositeOperation
::: tip
* 重叠图形的混合配置

|值|效果|
|---|---|
|destination-atop|`当前已存在的图形只有和新的图形重叠`才可以展现，并且居上|
|source-atop|只能在`当前已存在的图形上绘制`的是可展现的部分|
|source-over|后来居上|
|destination-over|先来居上|
|source-in|透明所有图形，`新建图形与当前已存在图形重叠`才会展示|
|source-out|透明所有图形，`新建图形与当前已存在图形不重叠`才会展示|
|destination-in|`已存在图形与新建图形重叠`才会展示并居上|
|destination-out|`已存在图形与新建图形不重叠`才会展示并居上|
|lighter|高亮重叠部分|
|copy|将现有的图形全部删掉，新建图形|
|xor|重叠部分全部透明|
|multiply|重叠部分重新计算复合颜色|

:::

::: codePen label=globalCompositeOperation val=destination-atop height=300 select=[destination-atop,source-atop,source-over,destination-over,source-in,source-out,destination-in,destination-out,lighter,copy,xor,multiply,screen,overlay,darken,lighten,color-dodge,color-burn,hard-light,soft-light,difference,exclusion,hue,saturation,color,luminosity]
```html
<canvas id="canvas100" width="500" height="500" style="width:500px; height: 500px;"></canvas>
<style>
    canvas {
        background-color: rgb(180, 236, 147);
    }
</style>
<script>
    const canvas = document.getElementById("canvas100");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 100, 100);

    ctx.fillStyle = "blue";
    ctx.fillRect(120, 10, 100, 100);

    ctx.globalCompositeOperation = "{{val}}";

    ctx.fillStyle = "red";
    ctx.fillRect(50, 90, 100, 100);
</script>
```
:::

:::: tabs
::: tab label=source-atop
```html{19}
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <style>
        body {
            background-color: rgb(180, 236, 147);
        }
    </style>
    <script>
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");


        ctx.fillStyle = "blue";
        ctx.fillRect(10, 10, 100, 100);

        ctx.fillStyle = "blue";
        ctx.fillRect(130, 10, 100, 100);

        ctx.globalCompositeOperation = "source-atop";

        ctx.fillStyle = "red";
        ctx.fillRect(50, 90, 100, 100);
    </script>
</body>
```
:::
::: tab label=destination-atop
```html
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <style>
        body {
            background-color: rgb(180, 236, 147);
        }
    </style>
    <script>
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "blue";
        ctx.fillRect(10, 10, 100, 100);

        ctx.fillStyle = "blue";
        ctx.fillRect(130, 10, 100, 100);

        ctx.globalCompositeOperation = "destination-atop";

        ctx.fillStyle = "red";
        ctx.fillRect(50, 90, 100, 100);
    </script>
</body>
```
:::
::::
## shadow
::: tip
|属性|作用|值|例|
|---|---|---|---|
|shadowBlur|阴影范围|数字|10|
|shadowColor|阴影颜色|String|"#333333"|
|shadowOffsetX|阴影x轴偏移量|Number|10|
|shadowOffsetY|阴影Y轴偏移量|Number|10|

:::
```html
<body>
    <canvas id="dashCanvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#dashCanvas");
        const ctx = canvas.getContext("2d");

        ctx.shadowColor = "red";
        ctx.shadowBlur = 30;
        ctx.fillStyle = "#333"
        ctx.fillRect(50, 30, 200, 100)
    </script>
</body>
```
## 圆
### arc
::: tip
* 绘制圆弧`形状`
* ctx.arc(x, y, `radius`, `startAngle`, `endAngle`, `anticlockwise`);
* `anticlockwise`: 逆时针，默认为false
:::
::: codePen height=100
```html{13}
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio;
        canvas.style.width = canvas.width;
        canvas.style.height = canvas.height;
        canvas.width = canvas.width * dpr;
        canvas.height = canvas.height * dpr;
        ctx.scale(dpr, dpr);

        ctx.arc(100, 100, 50, Math.PI, 0, false);
        ctx.stroke();
    </script>
</body>
```
:::
### arcTo
::: tip
* ctx.arcTo(x1, y1, x2, y2, radius);
* 需要先到一个点，然后根据arcTo传的两个点做出来一个角，然后从初始点到这个角的切线
:::
::: codePen
```html
<body>
    <canvas id="canvas" width="500" height="500" style="width:500px; height: 500px;"></canvas>
    <script>
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.arcTo(100, 0, 0, 0, 100); // 直角切线，半径100
        ctx.stroke();
    </script>
</body>
```
:::