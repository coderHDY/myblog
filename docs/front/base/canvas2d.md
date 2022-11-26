---
title: canvas2d Api
date: 2022-11-26
---
## canvas
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
## direction
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
## fillStyle
::: tip
* 描述即将渲染的图形的颜色和样式
* 值： `color` | `ctx.createLinearGradient`对象 | `ctx.createPattern`对象
:::
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
## filter
::: tip
* 模糊、灰度等过滤效果
* 值：`url(<url>)` | `blur(<length>)` | `brightness(<percentage>)` | `contrast(<percentage>)` | `drop-shadow(<offset-x>, <offset-y>, <blur-radius>, <spread-radius>, <color>)`
:::
## font
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
## globalAlpha
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
## globalCompositeOperation
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

::: codePen val=destination-atop height=300 select=[destination-atop,source-atop,source-over,destination-over,source-in,source-out,destination-in,destination-out,lighter,copy,xor,multiply,screen,overlay,darken,lighten,color-dodge,color-burn,hard-light,soft-light,difference,exclusion,hue,saturation,color,luminosity]
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
## lineCap
::: tip
* 线段末端的属性

|值|效果|
|---|---|
|butt|线段末端以方形结束|
|round|线段末端以圆形结束|
|square|线段末端以方形结束，增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域|
:::

```html
<body>
    <canvas id="canvas1" width="500" height="500" style="width:500px; height: 500px;"></canvas>

    <script>
        const canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(100, 100);
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
 
        ctx.stroke()
    </script>
</body>
```

::: codePen val=round select=[round,bott,square]
```html
<canvas id="canvas11" width="500" height="500" style="width:500px; height: 500px;"></canvas>
<style>
    canvas {
        background-color: rgb(180, 236, 147);
    }
</style>
<script>
    const canvas = document.getElementById("canvas11");
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