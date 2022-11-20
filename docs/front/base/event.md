---
title: event
date: 2021-12-18
---
## EventTarget
### 构造
::: tip EventTarget
* 作用：构造一个事件监听器
* 调用：new EventTarget()
* 增加监听：target.addEventListener()
* 触发事件：target.dispatchEvent(new Event())
:::
:::: tabs 
::: tab label=使用
* 为多个元素、多种事件类型绑定同一个事件触发函数
```html{17-18,22,27}
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <div style="background-color: thistle;">盒子1</div>
    <div style="background-color: rgb(191, 196, 216);">盒子2</div>

    <script>
        const btns = document.getElementsByTagName('button');
        const divs = document.getElementsByTagName('div');
        const targetSet = new Set();
        Array.prototype.forEach.call(btns, item => {
            targetSet.add(item);
        })
        Array.prototype.forEach.call(divs, item => {
            targetSet.add(item);
        })
        const target = new EventTarget();
        target.addEventListener('go', () => console.log('你点击或者 mousemove 了div或者btn'));

        document.body.addEventListener('click', e => {
            if (targetSet.has(e.target)) {
                target.dispatchEvent(new Event('go'));
            }
        })
        document.body.addEventListener('mousemove', e => {
            if (targetSet.has(e.target)) {
                target.dispatchEvent(new Event('go'));
            }
        })
    </script>
</body>

```
:::
::: tab label=手写EventTarget
* 拥有addEventListener和dispatchEvent和removeEventListener方法
```html{8-35,47}
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <div style="background-color: thistle;">盒子1</div>
    <div style="background-color: rgb(191, 196, 216);">盒子2</div>

    <script>
        class MyEventTarget {

            // 监听收集器
            eventMap = new Map();
            addEventListener(type, callback, stage) {
                if (this.eventMap.has(type)) {
                    this.eventMap.get(type).push(callback)
                } else {

                    // 一个事件可触发多个回调，所以map的值存数组
                    // 如果要加上stage区分捕获/冒泡阶段的话用对象，存两个数组{catpture: [], bubbling:[]}
                    this.eventMap.set(type, [callback]);
                }
            }
            removeEventListener(type, cancelCallback) {
                if (this.eventMap.has(type)) {
                    let callbacks = this.eventMap.get(type);
                    callbacks = callbacks.filter(item => item != cancelCallback)
                }
            }
            dispatchEvent(event) {
                const type = event.type;
                if (this.eventMap.has(type)) {
                    let callbacks = this.eventMap.get(type);
                    callbacks.forEach(item => item.call(null, event));
                }
            }
        }
    </script>
    <script>
        const btns = document.getElementsByTagName('button');
        const divs = document.getElementsByTagName('div');
        const targetSet = new Set();
        Array.prototype.forEach.call(btns, item => {
            targetSet.add(item);
        })
        Array.prototype.forEach.call(divs, item => {
            targetSet.add(item);
        })
        const target = new MyEventTarget();
        target.addEventListener('go', () => console.log('你点了div或者btn'));

        document.body.addEventListener('click', e => {
            if (targetSet.has(e.target)) {
                target.dispatchEvent(new Event('go'));
            }
        })
        document.body.addEventListener('mousemove', e => {
            if (targetSet.has(e.target)) {
                target.dispatchEvent(new Event('go'));
            }
        })
        console.log(new Event('go'));
    </script>
</body>
```
:::
::::
### addEventListener
::: tip
* 作用：为**文档上的元素**绑定事件监听，触发**函数**
* 调用：element.addEventlistener(event, callback[, option | useCapture])
* 入参：String, Function[, Object | boolean]
* 返回：undefined
* tip：文档上的元素指Element/Window/Document/XMLHttpRequest/其他支持事件的对象
:::
* DOM上onclick类的事件绑定都是以属性的形式存在DOM对象上，因此不能重复绑定
* addEventListener可以同时绑定多个事件，因为注册的是一个事件列表
:::: tabs
::: tab label=onlick
```html
<body>
    <button class="btn1">按钮1</button>

    <script>
        const btn1 = document.getElementsByClassName("btn1")[0];

        // 会被覆盖
        btn1.onclick = () => console.log(11);
        btn1.onclick = () => console.log(22);
    </script>
</body>
```
<img src="./assets/onclick.png">
:::
::: tab label=addEventListener
```html
<body>
    <button class="btn1">按钮1</button>
    <script>
        const btn1 = document.getElementsByClassName("btn1")[0];
        const fn1 = e => console.log(11);
        const fn2 = e => console.log(22);
        //都会展示
        btn1.addEventListener('click', fn1);
        btn1.addEventListener('click', fn2);
    </script>
</body>
```

![](./assets/addeventlistener.png)
:::
::: tab label=第三个参数
* 可查看[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
* 事件传播的一些配置
    1. 事件捕获、冒泡
    2. 阻止关闭此事件（preventDefault）
    3. 是否只能调用一次
    4. 移除方法
* 直接写true/false代表是否在捕获阶段触发，**默认是false**，也就是说默认事件回调是在冒泡阶段触发的
:::
::: tab label=事件捕获
* event在DOM树从上到下捕获，再从下到上冒泡
```html
<body>
    <div id="father">
        <div id="child"></div>
    </div>
    <style>
        #father {
            width: 100px;
            height: 100px;
            background-color: green;
        }
        #child {
            width: 50px;
            height: 50px;
            background-color: red;
        }
    </style>
    <script>
        const father = document.getElementById('father');
        const child = document.getElementById('child');
    </script>
</body>
```
* 默认
```js
// 默认都是捕获阶段触发，father在DOM树的上面，所以是father先
father.addEventListener('click', () => console.log('father'));
child.addEventListener('click', () => console.log('child'));
```
<img src="./assets/buhuoeventlistener.png" style="width:400px;">

* 冒泡
```js
// father把第三个参数设置false，就变成冒泡阶段触发
// 所以是child先触发，然后事件冒泡到father再触发
father.addEventListener('click', () => console.log('father'),false);
child.addEventListener('click', () => console.log('child'));
```
<img src="./assets/shijianmaopao.png" style="width:400px;">
:::
::: tab label=手写简易版
* 期望
```html
<body>
    <button class="btn1">按钮1</button>
    <script>
        const btn1 = document.getElementsByClassName("btn1")[0];
        const fn1 = e => console.log(11);
        const fn2 = e => console.log(22);

        btn1.myAddEventListener('mouseover', fn1);
        btn1.myAddEventListener('click', fn2);
    </script>
</body>
```

* 实现
```js
Object.prototype.myAddEventListener = function(type, callback) {
    const eventTypeHandlers = `on${type}handler`;
    const eventType = `on${type}`;
    if (!this[eventTypeHandlers]) {
        this[eventTypeHandlers] = [];
    }
    if (!this[eventType]) {
        this[eventType] = e => {
            this[eventTypeHandlers].forEach(item => item.call(this, e))
        }
    }

    this[eventTypeHandlers].push(callback);
}
```
![](./assets/shouxieaddevent.png)
* 其实是依赖于on事件回调触发，并不算自己触发的
:::
::::
### removeEventListener
::: tip
* 作用：移除监听事件
* 调用：eventTarget.removeEventTarget(type, callback, options)
* 入参：String, Function[, Boolean | Object]
* 返回：undefined
:::
```html{8-9,11,14-15}
<body>
    <button id='btn'>按钮</button>

    <script>
        const btn = document.querySelector('#btn');
        const callback1 = () => console.log('1');
        const callback2 = () => console.log('2');
        btn.addEventListener('click', callback1);
        btn.addEventListener('click', callback2);

        btn.click(); // 1 2
        setTimeout(() => {
            console.log('移除事件1，再点击');
            btn.removeEventListener('click', callback1);
            btn.click(); // 2
        }, 2000)
    </script>
</body>
```
### dispatchEvent
::: tip
* 作用：向指定目标派发事件
* 调用：element.dispatchEvent(event)
* 入参：Event
* 返回：undefined
:::
::: warning 只发射一次
* 每个事件只能被发射一次，多次发射报错
:::
:::: tabs
::: tab label=使用
* 自定义事件设置及触发
```html{6,11-12}
<body>
    <button id='btn'>按钮</button>

    <script>
        const btn = document.querySelector('#btn');
        btn.addEventListener('go', () => console.log('go go go!'));
        
        // btn.go(); // error
        
        setTimeout(() => {
            const goEvent = new Event('go');
            btn.dispatchEvent(goEvent); // go go go!
        }, 2000)
    </script>
</body>
```
:::
::: tab label=捕获/冒泡
* 指定位置发起的事件同样是按照【捕获 -> 冒泡】的顺序触发的
```html{7-9,12-13}
<body>
    <button id='btn'>按钮</button>

    <script>
        const btn = document.querySelector('#btn');

        // 捕获 -> 冒泡，与定义顺序无关
        btn.addEventListener('go', () => console.log('冒泡go!'), false);
        btn.addEventListener('go', () => console.log('捕获go!'), true);
        
        setTimeout(() => {
            const goEvent = new Event('go');
            btn.dispatchEvent(goEvent); // 捕获go! 冒泡go!
        }, 2000)
    </script>
</body>

```
>默认是false:冒泡
:::
::: tab label=hideBox
* 有一个遮罩层遮住了按钮，且他们不在一个dom事件触发的线路上，怎样点击box也能触发按钮的点击
>1. 事件截获调btn.click
>2. 事件截获调btn.dispatchEvent
```html{2-5,20-23,25}
<body>
    <div>
        <div id='hide-box'>遮罩层，盖住了按钮</div>
    </div>
    <button id='btn'>按钮</button>

    <style>
        #hide-box {
            position: absolute;
            background-color: rgb(142, 194, 236, 0.3);
            width: 100px;
            height: 100px;
        }
    </style>
    <script>
        const btn = document.querySelector('#btn');
        btn.addEventListener('click', () => console.log('按钮点击'));
        
        const hideBox = document.querySelector('#hide-box');
        hideBox.addEventListener('click', e => {
            btn.dispatchEvent(new Event('click'));
            e.preventDefault();
        })

        hideBox.click(); // 按钮点击
    </script>
</body>
```
:::
::: tab label=多次发射
```html{12-13}
<body>
    <button id='btn1'>按钮</button>
    <button id='btn2'>按钮</button>

    <script>
        const btn1 = document.querySelector('#btn1');
        const btn2 = document.querySelector('#btn2');

        btn1.addEventListener('click', e => {
            console.log('按钮1点击');

            //  Error: The event is already being dispatched.
            btn2.dispatchEvent(e);
        });
        btn2.addEventListener('click', () => console.log('按钮2点击'));
        
        btn1.click();
    </script>
</body>

```
:::
::::
## Event属性
### Event
::: tip 构造
* 作用：构造新的Event事件
* 调用：new Event(type[, {bubbles, cancelable, composed}])
* 入参：String[, {Boolean, Boolean, Boolean}]
:::
:::: tabs
::: tab label=使用
```html
<body>
    <div>
        <button>按钮1</button>
    </div>

    <script>
        const div = document.querySelector('div');
        const btn = document.querySelector('button');
        btn.addEventListener('say', () => console.log('btn说我被触发了'));
        div.addEventListener('say', () => console.log('div说我被触发了'));

        const event = new Event('say');

        // 发射事件，但并没有冒泡
        btn.dispatchEvent(event); // btn说我被触发了
    </script>
</body>
```
:::
::: tab label=冒泡事件
* bubbles等几个参数默认都是false，要设置true需要手动设置
```html
<body>
    <div>
        <button>按钮1</button>
    </div>

    <script>
        const div = document.querySelector('div');
        const btn = document.querySelector('button');
        btn.addEventListener('say', () => console.log('btn说我被触发了'));
        div.addEventListener('say', () => console.log('div说我被触发了'));

        const event = new Event('say',{bubbles: true});

        // 发射事件，并且冒泡给了div
        btn.dispatchEvent(event); // btn说我被触发了 div说我被触发了
    </script>
</body>
```
:::
::::
### target
::: tip
* 值：事件发起节点对象
* 获取：e.target
:::
### currentTarget
::: tip
* 作用：拿到事件当前传播到的node对象
* 获取：e.currentTarget
:::
```html
<body>
    <div>
        <button>按钮</button>
    </div>

    <script>
        const button = document.querySelector('button');
        const div = document.querySelector('div');
        div.addEventListener('click', e => {
            console.log(e.target); // <button>按钮</button>
            console.log(e.currentTarget); // <div>...</div>
        })
        button.click();
    </script>
</body>
```
### type
::: tip
* 值：事件的类型
* 返回：String
:::
```html
<body>
    <button>按钮</button>

    <script>
        const button = document.querySelector('button');
        button.addEventListener('go', function(e) {
            console.log(e.type); // go
        });

        const e = new Event('go');
        button.dispatchEvent(e);
    </script>
</body>
```
### bubbles
::: tip
* 作用：检测事件是否会冒泡
* 获取：event.bubbles
* 值：Boolean
:::
```html{11-12,14-16}
<body>
    <div>
        <button>按钮1</button>
    </div>

    <script>
        const div = document.querySelector('div');
        const btn = document.querySelector('button');
        btn.addEventListener('click', e => console.log(e.bubbles));

        // div盒子在冒泡阶段等click事件触发
        div.addEventListener('click', () => console.log('div说我被触发了'), false);

        // new Event默认不冒泡
        btn.dispatchEvent(new Event('click')); // false
        console.log('等两秒');

        // true div说我被触发了
        setTimeout(() => btn.dispatchEvent(new Event('click', {bubbles: true})), 2000)
    </script>
</body>
```
### cancelable
::: tip
* 作用：设置事件默认事件是否可被preventDefault()取消
* 获取：event.cancelable
* 值：Boolean
* tip：正常传播，只是禁止了默认事件
:::
### defaultPrevented
::: tip
* 作用：查看该事件是否调用了preventDefault方法
* 调用：e.defaultPrevented
* 返回：Boolean
:::
::: warning
* dispatchEvent发射的事件好像不生效？
* 手动触发可以
:::
* 点击按钮，显示true
```html
<body>
    <button>按钮</button>

    <script>
        const button = document.querySelector('button');

        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(e.defaultPrevented); // true
        })
        
        // 生成的事件无效？
        // const e = new Event('click');
        // e.preventDefault();
        // button.dispatchEvent(e);
    </script>
</body>
```
### eventPhase
::: tip
* 作用：查看当前事件传播到哪个阶段了
* 调用：event.eventPhase
* 返回：Number
:::
|值|含义|
|---|---|
|0|事件没开始传播|
|1|事件在捕获阶段|
|2|事件到达target|
|3|事件在冒泡阶段|
```html{11,15,19,23,27,30}
<body>
    <div>
        <button>按钮</button>
    </div>

    <script>
        const button = document.querySelector('button');
        const div = document.querySelector('div');

        div.addEventListener('click', function(e) {
            console.log('div捕获：' + e.eventPhase); // 1
        }, true);

        button.addEventListener('click', function(e) {
            console.log('button捕获：' + e.eventPhase); // 2
        }, true);

        button.addEventListener('click', function(e) {
            console.log('button冒泡：' + e.eventPhase); // 2
        });

        div.addEventListener('click', function(e) {
            console.log('div冒泡：' + e.eventPhase); // 3
        });
        
        const e = new Event('click');
        console.log(e.eventPhase); // 0
        button.dispatchEvent(e);

        setTimeout(() => console.log('结束' + e.eventPhase)); // 0
    </script>
</body>
```
### isTrusted
::: tip
* 作用：查看该事件是不是系统信任的浏览器发起事件【用户生成的返回false】
* 调用：event.isTrusted
* 返回：Boolean
* tip：只读属性
:::
* dispatchEvent发起的值是false，点击时浏览器发起的值是true
```html
<body>
    <button>按钮</button>

    <script>
        const button = document.querySelector('button');
        button.addEventListener('click', function(e) {
            console.log(e.isTrusted); // false
        });

        const e = new Event('click');
        button.dispatchEvent(e);
    </script>
</body>
```
## Event方法
### preventDefault
::: tip
* 作用：阻止浏览器默认事件作用触发
* 调用：e.preventDefault()
* tip：不影响自定义事件，不影响事件传播
:::
### composedPath
::: tip
* 作用：事件的传播路径
* 调用：e.composedPath()
* 返回：Array【栈结构】
:::
::: warning 返回值
* 0是target，最下面是window
* 从一开始就把路径存完了，并不是边执行边存的
:::
```html{11,15}
<body>
    <article>
        <div>
            <button>按钮</button>
        </div>
    </article>
    <script>
        const button = document.querySelector('button');
        const div = document.querySelector('div');
        button.addEventListener('click', function(e) {
            console.log(e.composedPath()); // Array(7) [button, div ...]
        });

        div.addEventListener('click', function(e) {
            console.log(e.composedPath()); // Array(7) [button, div ...]
        },true);

        const e = new Event('click');
        button.dispatchEvent(e);
    </script>
</body>
```
### stopImmediatePropagation
::: tip stop stopImmediatePropagation
* 翻译：停止立即传播
* 作用：不再调用其他的事件回调，并且阻止传播
* 调用：e.stopImmediatePropagation()
* 返回：undefined
:::
::: warning
* addEventListener同一个事件时是按序执行，stopImmediatePropagation之前的都执行，之后的都不执行
* 并且停止事件的传播
:::
```html{16,19,24}
<body>
    <article>
        <div>
            <button>按钮</button>
        </div>
    </article>
    <script>
        const button = document.querySelector('button');
        const div = document.querySelector('div');

        button.addEventListener('click', function(e) {
            console.log('e的点击事件1');
        });
        button.addEventListener('click', function(e) {
            console.log('e的点击事件2');
            e.stopImmediatePropagation();
        });

        // 已被阻止剩下的事件回调执行，无
        button.addEventListener('click', function(e) {
            console.log('e的点击事件3');
        });
        
        // 已被停止事件传播，无
        div.addEventListener('click', function(e) {
            console.log('到div了');
        });

        const e = new Event('click');
        button.dispatchEvent(e);
    </script>
</body>
```
### stopPropagation
::: tip
* 作用：停止事件传播，但**本对象上的监听回调会执行完**
* 调用：e.stopPropagation()
:::
```html{16,19,24}
<body>
    <article>
        <div>
            <button>按钮</button>
        </div>
    </article>
    <script>
        const button = document.querySelector('button');
        const div = document.querySelector('div');

        button.addEventListener('click', function(e) {
            console.log('e的点击事件1');
        });
        button.addEventListener('click', function(e) {
            console.log('e的点击事件2');
            e.stopPropagation();
        });

        // 会执行完本对象的事件回调
        button.addEventListener('click', function(e) {
            console.log('e的点击事件3');
        });
        
        // 已被停止事件传播，无
        div.addEventListener('click', function(e) {
            console.log('到div了');
        });

        const e = new Event('click');
        button.dispatchEvent(e);
    </script>
</body>
```
## 移动端事件
:::: tabs
::: tab label=移动端
|type|场景|
|---|---|
|touchstart|触摸交互，tab切换，链接跳转|
|touchmove|画板、拖动、滑动特效、签名|
|touchend|主要跟touchmove结合使用：滑动结束|
|touchcancel|很少使用，touch被打断时触发：(电量不足)|
>如果没开理想视口，click延迟会在300ms左右，开启理想视口会快一些。**尽量在移动端使用 touchstart / touchend**
* 触发顺序：touchstart => (touchmove) => touchend => `click`(捕获冒泡都在这儿开始)
>`touchmove`手不离开屏幕会一直触发，即使离开了监听区域
:::
::: tab label=示例
* touch事件结束了才开始点击事件的捕获冒泡
* touch事件被alert打断了才会触发touchcancel
* touchmove后不会触发click
```html
<body>
    <style>
        body {
            width: 100vw;
            height: 100vw;
            background-color: yellow;
        }
    </style>
    <script>
        document.body.addEventListener('touchstart', () => {
            console.log('开始触摸');
        })
        document.body.addEventListener('touchmove', () => {
            console.log('触摸移动');
        })
        document.body.addEventListener('touchend', () => {
            console.log('触摸停止');
        })
        document.body.addEventListener('touchcancel', () => {
            console.log('触摸被打断');
        })
        document.body.addEventListener('click', () => {
            console.log('捕获点击');
        }, true);
        document.body.addEventListener('click', () => {
            console.log('冒泡点击');
        })
        setTimeout(() => alert('打断了你的触摸'), 4000);
    </script>
</body>
```
:::
::: tab label=点击穿透
* touchstart事件让eventTarget消失，之后会在原位置触发click事件。
>穿透演示：移动端点击button，遮罩层消失，下层的盒子接受到了click事件。**说明click是在touch结束后才在`原位置`触发**
```html{8,16-19}
<head>
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover, user-scalable=no">
</head>

<body>
    <div class="wrapper">
        <a href="https://www.bytedance.com">点我去字节</a>
        <div id="shape">
            <h1>恭喜你被字节录取了</h1>
            <button>确定</button>
        </div>
    </div>

    <script>
        document.querySelector('button').addEventListener('touchend', e => {
            document.querySelector('#shape').style.display = 'none';
            // e.preventDefault(); // 解决点击穿透方案
        })
    </script>

    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .wrapper {
            position: relative;
            width: 100%;
            height: 100vw;
        }

        a {
            display: block;
            width: 100%;
            height: 20vh;
            background-color: pink;
        }

        #shape {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            text-align: center;
            padding-top: 10vw;
        }
    </style>
</body>
```
* 解决：
    1. `e.preventDefault()`
    2. 背后的click改成`touch`事件
    3. 让背后元素暂时不响应事件
    ```js
    document.querySelector('a').style.pointerEvents = 'none';
    setTimeout(() => {
        document.querySelector('a').style.pointerEvents = 'auto';
    }, 300)
    ```
:::
::::
### clientX/pageX/screenX
::: tip
* `e.targetTouches[0].clientX`是相对于浏览器左边缘距离
* `e.targetTouches[0].screenX`是相对于屏幕左边缘距离
* `e.targetTouches[0].pageX`是相对于页面左边缘距离，有可能发生了滚动
:::
### touch事件和mouse事件打平
::: tip
1. 鼠标`mousemove`和`touch`事件取x和y方法不一样
2. mouse有移出屏幕的风险，会导致监听触发不符合预期
:::
::: danger
* mouse事件有x,y，touch事件只有clientX，clientY
* touch事件必须拿`targetTouches`或`touches`获取clientX/clientY
* mac的触控板是touch事件
:::
```js
const moveListener = (el, callback) => {
    let mouseDown = false;
    el.addEventListener("touchmove", e => callback(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
    el.addEventListener("mousedown", () => mouseDown = true);
    el.addEventListener("mouseup", () => mouseDown = false);
    el.addEventListener("mouseout", () => mouseDown = false);
    document.addEventListener("mouseout", () => mouseDown = false);
    el.addEventListener("mousemove", (e) => {
        if (!mouseDown) return;
        callback(e.clientX, e.clientY);
    })
}
```