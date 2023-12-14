---
title: 摸鱼鼠标控制
date: 2022-10-30
---
## robotjs
```shell
npm i pm2 -g
npm i robotjs
```
```JS
const robot = require("robotjs");
robot.setMouseDelay(2);

// 鼠标不动触发时间
const timer = 1000 * 60 * 2;

const run = () => {
    let twoPI = Math.PI * 2.0;
    let screenSize = robot.getScreenSize();
    let height = (screenSize.height / 2) - 10;
    let width = screenSize.width;
    let { x, y } = robot.getMousePos();
    return () => {
        let mouse = robot.getMousePos();
        if (mouse.x === x && mouse.y === y) {
            for (let cx = 0; cx < width; cx++) {
                let y = height * Math.sin((twoPI * cx) / width) + height;
                robot.moveMouse(x, y);
            }
        }
        x = mouse.x;
        y = mouse.y;
        console.log("Mouse is at x:" + x + " y:" + y);
    }
}

run()();
setInterval(run(), timer);
```
* 使用PM2启动脚本即可生效
```SHELL
pm2 start test.js
```