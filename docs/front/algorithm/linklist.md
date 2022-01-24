---
title: 链表
date: 2021-11-22
categories:
 - 算法
---
## 手写链表
### 单向链表
::: tip 规范
* 每个节点有下一个节点的指针
* 可以拿到链表的长度
* 增
    * 末尾添加元素:append(ele)
    * 指定下标插入元素:appendAt(index, ele)
* 删
    * 末尾元素移除
    * 指定下标移除:delete(index)
* 改
    * updataAt(index, newEle)
* 查
    * get(index)
    * indexOf(element)
:::

:::: tabs
::: tab label=期望
```js
const ll = new LinkList();
ll.append('father')
.append('me')
.append('son')

ll.appendAt(1, 'mother');

console.log(ll.get(3)); // son
console.log(ll.indexOf('son')); // 3
ll.delete(0);
console.log(ll.indexOf('me')); // 1
ll.updateAt(0, 'daughter');
console.log(ll.indexOf('daughter')); // 0
```
:::
::: tab label=实现
```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkList {
    head = null;
    length = 0;
    initNode(item) {
        return item instanceof Node ? item : new Node(item);
    }
    append(item) {
        item = this.initNode(item);
        let cNode = this.head;
        if (cNode == null) {
            this.head = item;
            this.length += 1;
            return this;
        }
        while (cNode.next != null) {
            cNode = cNode.next;
        }
        cNode.next = item;
        this.length += 1;
        return this;
    }
    appendAt(index, item) {
        item = this.initNode(item);
        let cNode = this.head;
        let cIndex = 0;
        if (cNode === null || index === 0) {
            this.length++;
            item.next = this.head;
            this.head = item;
            return;
        }
        while (cNode.next != null && cIndex != index - 1) {
            cNode = cNode.next;
            cIndex++;
        }
        item.next = cNode.next;
        cNode.next = item;
        this.length++;
        return;
    }
    delete(index) {
        if (index >= this.length) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let cNode = this.head;
        for(let cIndex = 0; cIndex < index - 1; cIndex++) {
            cNode = cNode.next;
        }
        cNode.next = cNode.next.next;
        this.length--;
        return;
    }
    updateAt(index, item) {
        item = this.initNode(item);
        if (index > this.length - 1) {
            return;
        }
        if(index === 0) {
            item.next = this.head;
            this.head = item;
            return;
        }
        let cNode = this.head;
        for(let i = 0; i < index - 1; i++) {
            cNode = cNode.next;
        }
        item.next = cNode.next.next;
        cNode.next = item;
        return;
    }
    get(index) {
        if(this.length <= index) {
            return;
        }
        if(index === 0) {
            return this.head;
        }
        let cNode = this.head;
        for(let i = 0; i < index; i++) {
            cNode = cNode.next;
        }
        return cNode;
    }
    indexOf(item) {
        item = this.initNode(item);
        const val = item.value;
        let cNode = this.head;
        let index = 0;
        while (cNode.value != val && cNode.next) {
            cNode = cNode.next;
            index++;
        }
        return cNode .value === val ? index : -1;
    }
}
```
:::
::::
### 双向链表
::: tip 规范
* Node节点有头指针和尾指针
* 记录长度
* 尾部插入不用遍历，更方便
* 通过下标取节点效率更高【判断index是否过半，从前往后和从后往前】
* 反向遍历更方便
:::
:::: tabs
::: tab label=期望
```js
const dbll = new DBLinkList();
dbll.append('张三')
.append('李四')
.append('王五')

console.log(dbll.get(2)); // 王五
```
:::
::: tab label=实现
```js
class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.pre = null;
    }
}
class DBLinkList {
    head = null;
    tail = null;
    length = 0;
    initNode(item) {
        return item instanceof Node ? item : new Node(item);
    }
    append(item) {
        item = this.initNode(item);
        let cNode = this.head;
        if (cNode == null) {
            this.head = item;
            this.tail = item;
            this.length++;
            return this;
        }
        while (cNode.next) {
            cNode = cNode.next;
        }
        cNode.next = item;
        item.pre = cNode;
        this.tail = item;
        this.length++;
        return this;
    }
    get(index) {
        if (index >= this.length) {
            return;
        }
        if (index > this.length / 2) {
            let cNode = this.tail;
            for (let i = 0; i < this.length - index - 1; i++) {
                cNode = cNode.pre;
            }
            return cNode;
        } else {
            let cNode = this.head;
            for (let i = 0; i < index; i++) {
                cNode = cNode.pre;
            }
            return cNode;
        }
    }
}
```
:::
::::
## 算法题
### 反转链表
:::: tabs
::: tab lable=双指针法
>时间：88.33%  
>空间：37.73%
```js
var reverseList =  function(head) {
    let prev = null;
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
```
:::
::::