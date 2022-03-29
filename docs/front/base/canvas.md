---
title: canvas
date: 2022-03-29
---
## 起步
:::: tabs
::: tab label=起步
* canvas是一块`画布`，可以用js进行绘图
* 画布要用`属性设置宽高`
```html
<canvas width="600" height="600"></canvas>
```
* 操作画图用`context`上下文
```js
// 2d
context = canvas.getContext("2d");

// 3d
context = canvas.getContext("webgl");
```
* canvas坐标系：与css盒子坐标系相同，**左上为起点**
:::
::: tab label=基础使用
```html
<body>
    <canvas id="canvas" height="1000" width="1000"></canvas>
    <script>
        const ctx = canvas.getContext('2d');

        // 定义初始位置
        ctx.moveTo(100, 100);

        // 描述绘图路径
        ctx.lineTo(200, 100);
        ctx.lineTo(100, 200);

        // 自动闭合路径
        ctx.closePath();

        // 线宽，单位:px
        // 从中间向两边平均扩散，和css盒子《不一样》
        ctx.lineWidth = 10;

        // 绘制颜色描述:css所有颜色描述都支持
        ctx.strokeStyle = 'rgba(100, 100, 100, .5)';

        // 画上页面
        ctx.stroke();

        // 设置填充颜色，填充
        ctx.fillStyle = '#3eaf7c';
        ctx.fill();
    </script>
</body>
```
:::
::: tab label=绘制表格
```html
<body>
    <canvas id="canvas" height="1000" width="1000"></canvas>
    <script>
        const ctx = canvas.getContext('2d');
        canvas.style.border = '2px solid #333';
        const rowNum = 100;
        const colNum = 100;

        // 绘制横线
        for (let i = 0; i < rowNum; i++) {
            ctx.moveTo(0, canvas.height / rowNum * i);
            ctx.lineTo(canvas.width, canvas.height / rowNum * i);
        }

        // 绘制竖线
        for (let i = 0; i < colNum; i++) {
            ctx.moveTo(canvas.width / colNum * i, 0);
            ctx.lineTo(canvas.width / colNum * i, canvas.height);
        }

        // 画上页面
        ctx.stroke();
    </script>
</body>
```
:::
::: tab label=直角坐标系
```html{30-31}
<body>
    <canvas id="canvas" height="1000" width="1000"></canvas>
    <script>
        (function () {
            const ctx = canvas.getContext('2d');
            canvas.style.border = '2px solid #333';

            // 制作直角坐标系
            // 起点：(100, 800)
            // 终点：(800, 300)
            ctx.moveTo(100, 800);
            ctx.lineTo(100, 300);
            ctx.lineTo(90, 310);
            ctx.moveTo(100, 300);
            ctx.lineTo(110, 310);

            ctx.moveTo(100, 800);
            ctx.lineTo(800, 800);
            ctx.lineTo(790, 790);
            ctx.moveTo(800, 800);
            ctx.lineTo(790, 810);

            ctx.strokeStyle = 'black';
            ctx.stroke();
        })();

        function draw(arr) {
            const ctx = canvas.getContext('2d');

            // 声明新状态，后续可以覆盖原状态
            ctx.beginPath();

            const len = arr.length;
            const max = Math.max(...arr);

            // 坐标x/y轴单位长度
            const yStep = (500 / max) * 0.8;
            const xStep = Math.floor((700 / len) * 0.8);

            ctx.moveTo(100 + xStep, 800 - arr[0] * yStep);
            for (let i = 1; i < arr.length; i++) {
                ctx.lineTo(100 + xStep * (i + 1), 800 - arr[i] * yStep);
            }
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }

        const data = [1, 20, 3, 12, 5, 9, 7, 26, 53, 110, 70, 33];
        draw(data);
    </script>
</body>
```
:::
::: tab label=矩形
```html
<body>
    <canvas id="canvas" height="1000" width="1000"></canvas>
    <script>
        const ctx = canvas.getContext('2d');

        // (左上角坐标 x, 左上角坐标 y, 宽， 高)
        ctx.rect(10, 100, 300, 100);
        ctx.stroke();
    </script>
</body>
```
:::
::::