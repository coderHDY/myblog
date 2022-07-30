---
title: 特殊样式记录
date: 2022-06-21
---
## 模糊背景
```html
<body>
    <div class="bgc"><img src="https://coderhdy.com/assets/img/bgimg.jpg" alt=""></div>
    <div class="box">你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</div>
    <style>
        .bgc {
            position: absolute;
            height: 80vh;
            width: 100%;
            background-repeat: no-repeat;
            background-position: 50% 0;
            background-color: #fff;
            -webkit-filter: blur(50px);
            /* Chrome, Safari, Opera */
            filter: blur(50px);
            background-size: cover;
            overflow: hidden;
            z-index: -1;
        }

        .box {
            position: relative;
        }

    </style>
</body>
```
## css滚动阴影
```html{24-29,31-37}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        header {
            position: sticky;
            background: rgba(255, 255, 255, 0.9);
            top: 0;
            text-align: center;
            font-size: 20px;
            padding: 10px;
            z-index: 1;
        }

        shadow::before {
            content: '';
            box-shadow: 0 0 15px 3px #333;
            position: fixed;
            width: 100%;
        }

        shadow::after {
            content: '';
            width: 100%;
            height: 15px;
            background: #fff;
            position: absolute;
        }

        ul {
            margin-top: 15px;
        }

        li {
            height: 100px;
            margin-bottom: 10px;
            background-color: rgb(255, 111, 111);
        }
    </style>

    <header>css头部滚动阴影</header>
    <shadow></shadow>
    <div>
        <ul>
            <li>1</li>
        </ul>
    </div>
</body>

</html>
```
## button关闭点击阴影
* 手机特有阴影效果
```css
button {
    -webkit-tap-highlight-color: transparent;
　　-moz-tap-highlight-color:transparent;
　　outline: 0;
}

input {
    -webkit-appearance: none;
}
```
