---
title: canvas调帧
date: 2022-12-18
---
## requestAnimationFrame
::: tip
* 调用：`requestAnimationFrame(callback)`
* callback自动传入参数为当前的`时间戳`
* `根据浏览器性能差异`下一次刷新时执行
:::
```js
const loop = (timeStamp = Date.now()) => {
    /* animation ~~~ */
    requestAnimationFrame()
    loop();
}
```
::: warning
* 离开页面挂起，返回时继续执行
:::

## 动画帧数
::: tip
* 一秒更新的次数，可以通过时间戳来计算得出，但是根据浏览器的性能差异会有不同的效果，（例如：性能好的浏览器每秒刷新次数多
* 肉眼能反应的较舒适的帧数是每秒`30帧-60帧`，也就是 `17-34 毫秒`
* 可以固定好`每秒的运动量`，以及通过时间戳差计算出该有的运动量
:::
::: codePen height=200 val=30 type=number
```html{18,23,37-47}
<body>
    <canvas id="canvas"></canvas>
    <script>
        const canvas = document.querySelector("#canvas");
        canvas.setAttribute("style", "width: 100vw; height: 100vh");
        const { innerWidth, innerHeight, devicePixelRatio: dpr } = window;

        canvas.width = innerWidth * dpr;
        canvas.height = innerHeight * dpr;

        const ctx = canvas.getContext("2d");
        ctx.scale(dpr, dpr);

        const xOffset = 100;
        const yOffset = 60;

        // 一秒钟旋转度数
        const SECOND_ROTATE = {{val}};

        const dreaImg = (() => {
            let angle = 0;
            return (diffTime) => {
                angle += diffTime / 1000 * SECOND_ROTATE;

                ctx.save();
                ctx.translate(xOffset, yOffset);
                ctx.rotate(angle * Math.PI / 180);
                ctx.translate(-xOffset, -yOffset);

                ctx.fillStyle = "#000000";
                ctx.fillRect(50, 50, 100, 20);

                ctx.restore();
            }
        })();

        let lastTime = Date.now();
        const loop = (timeStamp = Date.now()) => {
            let diffTime = timeStamp - lastTime;
            lastTime = timeStamp;
            // 每秒钟控制在 30-60 帧
            diffTime = diffTime < 17 ? 17 : (diffTime > 34 ? 34 : diffTime);

            ctx.clearRect(0, 0, innerWidth, innerHeight);
            dreaImg(diffTime);
            requestAnimationFrame(loop);
        }

        loop();
    </script>
</body>
```
:::