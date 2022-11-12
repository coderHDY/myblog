---
title: console使用技巧
date: 2022-11-14
---
## 自定义样式
* [可定义属性](https://developer.mozilla.org/zh-CN/docs/Web/API/Console#outputting_text_to_the_console)
```js
console.log("%c都是苦逼程序员，%c请别调试我bug！", "font-size: 20px;color: black", "font-size: 50px;color: blue");
```
## clear
* 清空打印台
```js
console.clear()
```
## count
* 指定label记录执行次数
```js
console.count("time"); // time: 1
console.count("time"); // time: 2
console.count("time"); // time: 3

// 重置计数
console.countReset("time")
```
## 计时
```js
console.time("load");
console.timeLog("load");
console.timeEnd("load");
```
## trace
* 调用堆栈跟踪
```js
console.trace();
```