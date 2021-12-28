# 动画特效
## 霓虹灯按钮
:::: tabs
::: tab label=特效按钮
<video src="./assets/texiao0.mp4" style="width:400px;" controls />
:::
::: tab label=代码
```html{50-68}
<body>
    <button class="btn">
        <span class="span1">&nbsp;</span>
        <span class="span2">&nbsp;</span>
        <span class="span3">&nbsp;</span>
        <span class="span4">&nbsp;</span>
        我是按钮
    </button>
    <button class="btn2">
        <span class="span1">&nbsp;</span>
        <span class="span2">&nbsp;</span>
        <span class="span3">&nbsp;</span>
        <span class="span4">&nbsp;</span>
        我是按钮
    </button>
    <button class="btn3">
        <span class="span1">&nbsp;</span>
        <span class="span2">&nbsp;</span>
        <span class="span3">&nbsp;</span>
        <span class="span4">&nbsp;</span>
        我是按钮
    </button>

    <style>
        body {
            background-color: black;
            padding: 50px;
        }
        button {
            margin-right: 20px;
        }
        .btn {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: rgb(219, 245, 181);
            background-color: transparent;
            outline: none;
            border: 0;
            box-shadow: rgb(145, 165, 114) 0px 0px 1px;
            overflow: hidden;
        }
        .btn:hover {
            background-color: #00ff0d;
            color: rgb(56, 83, 15);
            box-shadow: #00ff0d 0 0 10px;
        }
        .btn>span {
            display: block;
            position: absolute;
        }
        .btn>.span1 {
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to right, transparent, #00ff0d);
            animation: move1 800ms 0s linear infinite forwards; 
        }
        @keyframes move1 {
            0% {
                left: -100%;
                top: 0;
            }
            100% {
                left: 200%;
            }
        }
        .btn>.span2 {
            top: -100%;
            right: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to bottom, transparent, #00ff0d);
            animation: move2 800ms 200ms linear infinite forwards; 
        }
        @keyframes move2 {
            0% {
                top: -100%;
                right: 0%;
            }
            100% {
                top: 200%;
            }
        }
        .btn>.span3 {
            right: -100%;
            bottom: 0%;
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to left, transparent, #00ff0d);
            animation: move3 800ms 400ms linear infinite forwards; 
        }
        @keyframes move3 {
            0% {
                right: -100%;
                bottom: 0%;
            }
            100% {
                right: 200%;
            }
        }
        .btn>.span4 {
            bottom: -100%;
            left: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to top, transparent, #00ff0d);
            animation: move4 800ms 600ms linear infinite forwards; 
        }
        @keyframes move4 {
            0% {
                bottom: -100%;
                left: 0%;
            }
            100% {
                bottom: 200%;
            }
        }

        /* 后面就是重复按钮 */
        .btn2 {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: rgb(245, 181, 234);
            background-color: transparent;
            outline: none;
            border: 0;
            box-shadow: rgb(245, 181, 234) 0px 0px 1px;
            overflow: hidden;
        }
        .btn2:hover {
            background-color: #ff00ff;
            color: rgb(83, 15, 83);
            box-shadow: #ff00ff 0 0 10px;
        }
        .btn2>span {
            display: block;
            position: absolute;
        }
        .btn2>.span1 {
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to right, transparent, #ff00ff);
            animation: move1 800ms 0s linear infinite forwards; 
        }
        .btn2>.span2 {
            top: -100%;
            right: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to bottom, transparent, #ff00ff);
            animation: move2 800ms 200ms linear infinite forwards; 
        }
        .btn2>.span3 {
            right: -100%;
            bottom: 0%;
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to left, transparent, #ff00ff);
            animation: move3 800ms 400ms linear infinite forwards; 
        }
        .btn2>.span4 {
            bottom: -100%;
            left: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to top, transparent, #ff00ff);
            animation: move4 800ms 600ms linear infinite forwards; 
        }
        /* 按钮3 */
        .btn3 {
            position: relative;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: rgb(181, 230, 245);
            background-color: transparent;
            outline: none;
            border: 0;
            box-shadow: rgb(181, 230, 245) 0px 0px 1px;
            overflow: hidden;
        }
        .btn3:hover {
            background-color: #00ffff;
            color: rgb(15, 81, 83);
            box-shadow: #00ffff 0 0 10px;
        }
        .btn3>span {
            display: block;
            position: absolute;
        }
        .btn3>.span1 {
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to right, transparent, #00ffff);
            animation: move1 800ms 0s linear infinite forwards; 
        }
        .btn3>.span2 {
            top: -100%;
            right: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to bottom, transparent, #00ffff);
            animation: move2 800ms 200ms linear infinite forwards; 
        }
        .btn3>.span3 {
            right: -100%;
            bottom: 0%;
            line-height: 1px;
            width: 100px;
            background: linear-gradient(to left, transparent, #00ffff);
            animation: move3 800ms 400ms linear infinite forwards; 
        }
        .btn3>.span4 {
            bottom: -100%;
            left: 0%;
            line-height: 50px;
            width: 1px;
            background: linear-gradient(to top, transparent, #00ffff);
            animation: move4 800ms 600ms linear infinite forwards; 
        }
    </style>
</body>
```
:::
::: tab label=思路
<img src="./assets/texiaoanniu1.png" style="width:700px" >
:::
::::
