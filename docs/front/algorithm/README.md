---
title: 栈
date: 2021-12-28
---
## 手写栈
::: tip 规则
* 先进后出
* 能拿栈的深度
* 能读取最顶层元素
* 判断空/清空
:::
:::: tabs
::: tab label=图解
<img src="./assets/stack.png" style="width:300px;">

* 期望：
```js
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.top); // 2
console.log(stack.length); // 2
console.log(stack.pop()); // 2
console.log(stack.length); // 1
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true
```
:::
::: tab label=手写
```js
class Stack {
    stack = [];
    push(item) {
        this.stack.push(item);
    }
    pop(item) {
        return this.stack.pop(item);
    }
    get top() {
        return this.stack[this.stack.length -1];
    }
    get length() {
        return this.stack.length;
    }
    clear() {
        this.stack = [];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}
```
:::
::::