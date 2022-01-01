---
title: 队列
date: 2021-12-28
---
## 手写队列
::: tip 规则
* 先进先出
* 能拿队头和队尾元素
* 能判断空/清空队列
* 能拿当前队列的长度
:::
:::: tabs
::: tab label=图解
<img src="./assets/queue.png" style="width:400px;">

* 期望：
```js
const queue = new Queue();
queue.in('hdy');
queue.in('张三');
queue.in('李四');
console.log(queue.length); // 3
console.log(queue.front); // hdy
queue.clear();
console.log(queue.isEmpty()); // true
```
:::
::: tab label=实现
```js
class Queue {
    queue = [];
    in(item) {
        this.queue.unshift(item);
    }
    out() {
        return this.queue.shift();
    }
    get front() {
        return this.queue[this.queue.length - 1];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    clear() {
        this.queue = [];
    }
    get length() {
        return this.queue.length;
    }
}
```
:::
::::
## 应用
### 击鼓传花
:::: tabs
::: tab label=问题
* 一圈小朋友围成一圈，从1数到5，第五个人淘汰，求最后一个剩下的人

<img src="./assets/jiguchuanhua.png" style="width:400px;">

* 期望：
```js
const boys =['小张', '小李', 'hdy', '小黑'];
console.log(getAns(boys)); // 小李
```
:::
::: tab label=思路
>绕圈圈入队

<img src="./assets/jichuchuanhuasilu.png" style="width:400px;">

:::
::: tab label=代码
```js
function getAns(arr) {
    const queue = [...arr];
    while(queue.length !== 1) {
        for(let i = 0; i < 4; i++) {
            const cItem = queue.shift();
            queue.push(cItem);
        }
        queue.shift();
    }
    return queue[0];
}
```
:::
::::