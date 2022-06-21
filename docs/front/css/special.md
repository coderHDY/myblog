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