---
title: 响应式布局
date: 2022-03-04
---
## 媒体查询
:::: tabs
::: tab label=宽高限定
* 不同大小屏幕显示不同颜色
```html
<body>
    <div class="box"></div>
    <style>
        div {
            width: 200px;
            height: 200px;
        }


        @media screen and (min-width: 320px) {
            .box {
                background-color: red;
            }
        }

        @media screen and (min-width:990px) {
            .box {
                background-color: blue;
            }
        }

        @media screen and (min-width: 1500px) {
            .box {
                background-color: pink;
            }
        }

    </style>
</body>
```
:::
::: tab label=dpr限定
* dpr: 物理像素/设备像素
* 修改属性值用`content`
```html
<body>
    <img src="https://www.baidu.com/img/flexible/logo/pc/result@2.png">
    <style>
        img {
            width: 200px;
            height: 100px;
        }


        @media screen and (-webkit-min-device-pixel-ratio: 1) {
            img {
                content: url(https://inews.gtimg.com/newsapp_bt/0/12171811596_909/0)
            }
        }

        @media screen and (-webkit-min-device-pixel-ratio: 2) {
            img {
                content: url(https://img.alicdn.com/tfs/TB1EGGoLXXXXXcLXpXXXXXXXXXX-123-38.png)
            }
        }

        @media screen and (-webkit-min-device-pixel-ratio: 3) {
            img {
                content: url(https://www.baidu.com/img/flexible/logo/pc/result@2.png)
            }
        }

    </style>
</body>

```
:::
::::