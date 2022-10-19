---
title: soket实现实时
date: 2022-10-19
---
## 理论
* 主屏幕WS长连接
* 多个弹幕发射器触发ws发射请求，server利用ws长连接向主屏幕推送消息
## 服务器
```js
const express = require('express');
const app = new express();
require("express-ws")(app);
app.listen(8888, () => {
    console.log('listen 8888');
});

let ws;
app.ws("/", (wsInstance, req) => {
    ws = wsInstance;
    ws.on('message', function (msg) {
        console.log(msg);
        ws.send(msg);
    });
})
app.get("/msg", (req, res) => {
    const { m } = req.query;
    if (!ws || !m) return res.send({ "done": false })
    ws.send(m);
})
```
## 屏幕
```html
<body>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background-color: #000000;
            color: #fff;
        }

        .dynamic {
            position: fixed;
            left: 100vw;
            white-space: nowrap;
            animation: moveToLeft 5s linear forwards;
        }

        @keyframes moveToLeft {
            to {
                left: -10vw;
            }
        }
    </style>
    <script>
        const body = document.body;

        const goToFullScreen = (element = document.body) => {
            console.log(element);
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullScreen();
            }
        };

        body.addEventListener("click", () => goToFullScreen());


        let socket = new WebSocket("ws://localhost:8888/");
        socket.onopen = function () {
            console.log('用websocket与服务器建立连接...');
        };

        socket.onmessage = function (e) {
            const msg = JSON.parse(e.data);
            if (msg?.text) {
                dynamicText(msg.text);
            }
        };

        setTimeout(() => {
            const msg = JSON.stringify({ text: 'ws连接成功' });
            socket.send(msg);
        }, 2000);

        const dynamicText = (text) => {
            const span = document.createElement("span");
            span.classList.add("dynamic");
            span.style.top = `${Math.random() * 80 + 10}vh`
            span.innerText = text;
            document.body.appendChild(span);
            setTimeout(() => {
                document.body.removeChild(span);
            }, 5000);
        };
    </script>
</body>
```
## 弹幕发射器
```html
<body>
    <input type="text" class="ipt">
    <button class="submit">发送</button>
    <script>
        const ipt = document.querySelector(".ipt");
        const submit = document.querySelector(".submit");
        const wsUrl = "http://localhost:8888/msg?m={msg}";

        submit.addEventListener("click", () => {
            const val = ipt.value;
            const msg = JSON.stringify({ text: val });
            fetch(wsUrl.replace("{msg}", msg)).catch(e => { });
        })
    </script>
</body>
```