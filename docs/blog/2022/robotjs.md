---
title: 摸鱼鼠标控制
date: 2022-10-30
---
## robotjs
```JS
const robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

const run = () => {
    for (let x = 0; x < width; x++) {
        y = height * Math.sin((twoPI * x) / width) + height;
        robot.moveMouse(x, y);
    }
}

run();
setInterval(run, 1000 * 60 * 10); // 10分钟动一下鼠标
```