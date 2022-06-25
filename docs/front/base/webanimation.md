---
title: Animation
date: 2022-06-22
---
## Animation
::: tip
* 作用：创建一个Animation对象实例
* 调用：new Animation(effect, timeline)
* 入参：KeyframeEffect对象, [documentTimeLine](https://developer.mozilla.org/en-US/docs/Web/API/DocumentTimeline)
* 返回：Animation
:::
:::: tabs
::: tab label=跳球
```html
<body>
    <style>
        .ball {
            background-color: rgb(173, 255, 154);
            height: 100px;
            width: 100px;
            border-radius: 50px;
        }
    </style>
    <div class="ball"></div>

    <script>
        const ball = document.querySelector('.ball');
        const keyFrames = new KeyframeEffect(
            ball,
            [{
                    transform: 'translateY(0%)'
                },
                {
                    transform: 'translateY(100%)'
                },
            ], {
                duration: 1000,
                fill: 'backwards'
            }
        );
        const animation = new Animation(keyFrames, document.timeline);
        ball.addEventListener('click', () => animation.play());
    </script>
</body>
```
:::
::::