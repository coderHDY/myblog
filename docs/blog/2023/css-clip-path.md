---
title: css clip-path
date: 2023-02-15
---
## inset剪切
* 剪切盒子形状
::: codePen val=40 type=number
```html
<body>
    <div></div>

    <style>
        div {
            width: 100px;
            height: 100px;

            /* inset 上右下左 分别剪裁多少*/
            clip-path: inset(0 0 {{val}}% 0);
            background-color: rgb(244, 81, 81);
            border-radius: 5px;
        }
    </style>
</body>
```
:::

## circle
::: codePen
```html
<body>
    <div></div>

    <style>
        body {
            background-color: rgb(130, 174, 232);
        }

        div {
            width: 100px;
            height: 100px;

            /* 30% 长宽 在正中心，默认值就是正中心，同 circle(30%) */
            clip-path: circle(30% at center center);

            background-color: rgb(244, 81, 81);
            border-radius: 5px;

            /* 被剪掉了 border 没用 */
            /* border: 3px solid #333; */
        }
    </style>
</body>
```
:::
::: codePen
```html
<body>
    <div></div>

    <style>
        body {
            background-color: rgb(130, 174, 232);
        }

        div {
            width: 100px;
            height: 100px;
            clip-path: circle(0%);

            background-color: rgb(244, 81, 81);
            border-radius: 5px;

            animation: clippath 2s infinite forwards linear;
            border-radius: 50%;
        }

        @keyframes clippath {
            0% {
                clip-path: circle(0%);
                background-color: #333;
                opacity: 1;
            }

            60% {
                opacity: 0;
            }

            100% {
                clip-path: circle(100%);
                background-color: #fff;
                opacity: 0;
            }
        }
    </style>
</body>
```
:::
## polygon
* 类似svg描点，描出的形状进行剪裁
:::codePen
```html
<body>
    <div></div>

    <style>
        body {
            background-color: rgb(130, 174, 232);
        }

        div {
            position: absolute;
            width: 100px;
            height: 100px;
            clip-path: polygon(0% 20%,
                    60% 20%,
                    60% 0%,
                    100% 50%,
                    60% 100%,
                    60% 80%,
                    0% 80%);

            background: linear-gradient(to right, rgb(236, 156, 156) 0%, rgb(66, 81, 194) 100%);
            border-radius: 5px;

            animation: right 2s infinite forwards linear;
        }

        @keyframes right {
            from {
                left: -100%;
            }

            to {
                left: 100%;
            }
        }
    </style>
</body>
```
:::
## 动画
::: codePen
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="wrapper">注册</div>

    <style>
        body {
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            display: grid;
            place-items: center;
            background-color: rgb(0, 16, 39);
        }

        .wrapper {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #fff;
            cursor: pointer;
            border: 2px solid rgb(198, 212, 239);
            border-radius: 10px;
            background-color: rgb(149, 169, 240);
        }

        .wrapper:hover {
            transform: scale(1.01);
            box-shadow: 0 0 30px rgb(151, 197, 237);
            transition: .4s;
        }

        .wrapper:hover::after,
        .wrapper:hover::before {
            animation-duration: 1s;
        }

        .wrapper::after,
        .wrapper::before {
            content: "";
            position: absolute;
            border: 2px solid rgb(93, 116, 174);
            box-shadow: inset 0 0 2px rgba(107, 236, 176, 0.9);
            border-radius: 10px;
            inset: -10px;
            animation: clippath 3s infinite linear;
        }

        .wrapper::before {
            animation-delay: -1.5s;
        }

        @keyframes clippath {

            0%,
            100% {
                clip-path: inset(0 0 96% 0);
                border-color: rgb(152, 117, 234);
                box-shadow: inset 0 0 4px rgba(152, 117, 234, 0.9);
            }

            25% {
                clip-path: inset(0 96% 0 0);
                border-color: rgb(159, 248, 144);
                box-shadow: inset 0 0 4px rgba(159, 248, 144, 0.9);
            }

            50% {
                clip-path: inset(96% 0 0 0);
                border-color: rgb(215, 248, 144);
                box-shadow: inset 0 0 4px rgba(215, 248, 144, 0.9);
            }

            75% {
                clip-path: inset(0 0 0 96%);
                border-color: rgb(248, 161, 144);
                box-shadow: inset 0 0 4px rgba(248, 161, 144, 0.9);
            }
        }
    </style>
</body>

</html>
```
:::