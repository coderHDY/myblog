---
title: form表单
date: 2022-08-29
---
## input框padding
* 浏览器下input框加padding后，无法将其长度转换到0，需要套一个div实现
:::: tabs
::: tab label=问题
```html{7,19}
<body>
    <input type="text" id="ipt">
    <button id="btn">缩</button>

    <style>
        #ipt {
            width: 200px;
            padding: 20px;
            background-color: rgb(247, 84, 84);
            box-sizing: border-box;
            transition: all .3s 0s linear;
        }

        #btn {
            display: block;
        }

        #ipt.small {
            width: 0;
        }
    </style>
    <script>
        btn.addEventListener("click", () => ipt.classList.toggle("small"))
    </script>
</body>
```
:::
::: tab label=解决
```html{18-22}
<body>
    <div id="wrapper">
        <input type="text" id="ipt">
    </div>
    <button id="btn">缩</button>

    <style>
        #ipt {
            padding: 20px;
            background-color: rgb(247, 84, 84);
            box-sizing: border-box;
        }

        #btn {
            display: block;
        }

        #wrapper {
            width: 200px;
            transition: all .3s 0s linear;
            overflow: hidden;
        }

        #wrapper.small {
            width: 0;
        }
    </style>
    <script>
        btn.addEventListener("click", () => wrapper.classList.toggle("small"))
    </script>
</body>
```
:::
::::
## 状态选中
:::: tabs
::: tab label=输入了值
* 借用`placeholder`消失的特性检测是否输入了值
```html
<body>
    <input type="text" id="ipt" placeholder=" ">

    <style>
        #ipt:not(:placeholder-shown) {
            background-color: rgb(226, 73, 73);
        }
    </style>
</body>
```
:::
::::