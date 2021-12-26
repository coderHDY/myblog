# animation动画
## keyframes
::: tip keyframes
* 建立两个或以上关键帧，每一个关键帧都描述了动画元素在给定的时间点上应该如何渲染。

|值|含义|
|---|---|
|from|0%|
|to|100%|
|50%|执行到一半的时间节点|
:::
## 整合属性
::: tip animation
|属性|效果|值|
|---|---|---|
|animation-name|应用的关键帧的名字|none /【 [0-9a-zA-Z-_]+ 】|
|animation-delay|动画开始执行的时间长度|1s, 20ms|
|animation-direction|动画执行顺序以及循环动作设定|normal / alternate / reverse / alternate-reverse|
|animation-duration|动画周期的时长|1s, 15s / 10s, 30s, 230ms|
|animation-iteration-count|动画重复运行次数|infinite【无限循环】 /  1【默认】|
|animation-play-state|定义一个动画是否运行或者暂停，恢复时会从暂停位置继续|running / paused|
|animation-timing-function|定义CSS动画在每一动画周期中执行的节奏|ease / ease-in / ease-out / ease-in-out / linear / steps(4, end) / cubic-bezier(0.1, 0.7, 1.0, 0.1) / step-start / step-end|
|animation-fill-mode|动画在执行之前和之后如何将样式应用于其目标。|none / forwards / backwards / both|
:::
* 跳跳球动画
:::: tabs
::: tab label=跳跳球
<video src="./assets/cssballjump.mp4" style="width:200px;" controls/>

```html{22-26,28-35}
<body>
    <div id="container">
        <div id="ball"></div>
    </div>

    <style>
        #container {
            position: relative;
            width: 200px;
            height: 500px;
            background-color: rgb(118, 144, 233);
            overflow: hidden;
        }
        #ball {
            width: 100px;
            height: 100px;
            margin-left: 50%;
            transform: translate(-50%, 0);
            background-color: #fff;
            border-radius: 50px;

            animation-name: jump;
            animation-delay: 1s;
            animation-duration: 3s;
            animation-direction: alternate;
            animation-iteration-count: infinite;
        }
        @keyframes jump {
            0% {
                margin-top: 0%;
            }
            100% {
                margin-top: 400px;
            }
        }
    </style>
</body>
```
:::
::: tab label=name/delay/duration
>animation-name
* 调用定义好的关键帧，本例中调用了下面的jump关键帧
```css{2,4}
#ball {
    animation-name: jump;
}
@keyframes jump {
    0% {
        margin-top: 0%;
    }
    100% {
        margin-top: 400px;
    }
}
```
>animation-delay
* **帧加载到元素以后**，等多久执行动画，本例中直接绑定，所以浏览器等一秒执行动画
* 注意，是帧加载到元素身上以后的计时
```css
animation-delay: 1s;
```
>animation-duration
* 执行完一个周期的所有帧需要的时间，本例中【0% - 100%】共花费3s
```css
animation-duration: 3s;
```
:::
::: tab label=count/direction
>animation-iteration-count
* 执行的次数，默认是1，可以设置数字或者无限循环【infinite】
```css
animation-iteration-count: infinite;
```
>animation-direction
* 执行的方向以及重复执行的方向
```css
animation-direction: alternate;
```
![](./assets/animationduration.png)
:::
::::
* 动画
:::: tabs
::: tab label=动画
:::
::: tab label=play-state
>animation-play-state
:::
::: tab label=timing-function
>animation-timing-function
:::
::: tab label=fill-mode
>animation-fill-mode
:::
::::