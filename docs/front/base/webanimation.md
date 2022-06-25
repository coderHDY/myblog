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
::: tab label=拖拉menu
```html
<body>
    <style>
        body {
            padding: 0;
            margin: 0;
        }

        .wrapper {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow-x: hidden;
        }

        .menu {
            position: absolute;
            width: 100vw;
            height: 100vh;
            right: -100vw;
            background-color: rgb(173, 255, 154);
        }
    </style>
    <div class="wrapper">
        <div class="menu"></div>
        <button>控制按钮</button>
    </div>
    <script>
        const menu = document.querySelector('.menu');
        const button = document.querySelector('button');
        const inFrame = new KeyframeEffect(
            menu,
            [{
                    right: "-100%",
                },
                {
                    right: "-20%",
                },
            ], {
                duration: 200,
                fill: 'forwards'
            }
        );
        const outFrame = new KeyframeEffect(
            menu,
            [{
                    right: "-20%",
                },
                {
                    right: "-100%",
                },
            ], {
                duration: 200,
                fill: 'forwards'
            }
        );

        const toggle = (() => {
            let state = 'out';
            return () => {
                if (state === 'out') {
                    const inAni = new Animation(inFrame, document.timeline);
                    inAni.play();
                    state = 'in';
                } else {
                    const outAni = new Animation(outFrame, document.timeline);
                    outAni.play();
                    console.log(outAni.playbackRate);
                    state = 'out';
                }
            }
        })();
        button.addEventListener('click', () => toggle());
    </script>
</body>
```
:::
::::