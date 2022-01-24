---
title: 哈希表
date: 2021-11-28
categories:
 - 算法
---
## 手写哈希表
::: tip 知识点
|名词|解释|
|---|---|
|哈希算法|哈希表内有一个哈希算法，将所有的键转化成字符串，再转化成数字，控制在【一定范围内】|
|哈希值|这个范围就是哈希表的长度，转化成的数字就是该项在哈希表内的下标|
|冲突|两个值通过哈希函数转码以后，基本很难发生重复（一般成千上万个能重复一两个），但是这种不同的键转化成了同一个哈希值就叫冲突|
|避免冲突|每个字符转码后乘以一个质数，能最大程度避免冲突【计算机大佬验证的规律】|
|解决冲突|如果发生冲突，可以用链地址法或者向下探索法进行解决冲突，常见的是链地址法|
|再哈希|哈希表需要控制size和整体哈希表长度的比例，才能最大程度的避免冲突，提高效率。常见范围【已有项/总长度 = (0.25 ~ 0.75)】如果发现超出了这个范围，就需要`再哈希`，重新定义哈希表的长度，并计算所有的值重新插入新的哈希表。|
:::
:::: tabs
::: tab label=期望
```js
const hdy = {
    name: 'hdy',
    age: 18
}
const zs = {
    name: '张三',
    age: 20
}
const ls = {
    name: '李四',
    age: 30
}
const hashMap = new HashMap();
hashMap.set('hdy', hdy);
hashMap.set('zs', zs);
hashMap.set('ls', ls);
console.log(hashMap.size); // 3
hashMap.set('zs', {
    name: '张三二代',
    age: 10
})
console.log(hashMap.get('zs')); // { name: '张三二代', age: 10 }
```
:::
::: tab label=实现
```js
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
}
class HashMap {
    arr = [];
    _size = 0;
    maxSize = 10; // 一般会设置成要存储总量的2-3倍
    get size() {
        return this._size;
    }

    // 数据劫持，如果size超出安全比例就【再哈希】
    set size(val) {
        const rate = val / this.maxSize;
        if (rate < 0.25 && this.maxSize > 10) {
            this.maxSize = this.maxSize / 2;
            this.reHash();
        } else if (rate > 0.75) {
            this.maxSize = Math.floor(this.maxSize * 2);
            this.reHash();
        }
        return this._size = +val;
    }
    reHash() {
        const oldArr = this.arr;
        this.arr = [];
        oldArr.forEach((item) => {
            if (item) {
                this.set(item.key, item.val);
                let cItem = item.next;
                while(cItem) {
                    this.set(cItem.key, cItem.val);
                    cItem = cItem.next;
                }
            }
        })
    }

    // 将要存储的节点作为链表，解决冲突
    initNode(key, val) {
        return new Node(key, val);
    }

    // 核心：哈希函数
    getHashCode(key) {
        const str = key.toString();
        let code = 0;
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            code += charCode * 7;
        }
        return code % this.maxSize;
    }
    set(key, value) {
        const keyCode = this.getHashCode(key);
        const node = this.initNode(key, value);
        if (!this.arr[keyCode]) {
            this.arr[keyCode] = node;
            this.size++;
            return;
        }
        let cNode = this.arr[keyCode];
        while (cNode.next && cNode.key !== key) {
            cNode = cNode.next;
        }
        if (cNode.key === key) {
            cNode.val = node.val;
        } else {
            cNode.next = node;
            this.size++;
        }
        return;
    }
    get(key) {
        const code = this.getHashCode(key);
        if (!this.arr[code]) {
            return;
        }
        let cNode = this.arr[code];
        while (cNode.key !== key && cNode.next) {
            cNode = cNode.next;
        }
        return cNode.key === key ? cNode.val : null;
    }
    delete(key) {
        const code = this.getHashCode(key);
        if (!this.arr[code]) {
            return false;
        }
        let cNode = this.arr[code];
        if (cNode.key === key) {
            this.arr[code] = cNode.next;
            this.size--;
            return true;
        }
        while (cNode.next && cNode.next.key !== key) {
            cNode = cNode.next;
        }
        if (cNode.next.key === key) {
             cNode.next = cNode.next.next;
             this.size--;
             return true;
        } else {
            return false;
        }
    }
}
```
:::
::: tab label=再哈希测试
* 存储量超过一定范围，冲突概率会增大；存储量低于一定范围，就太浪费空间。一般这个安全范围在【0.25~0.75】

```js{43-79}
const hdy = {
    name: 'hdy',
    age: 18
}
const zs = {
    name: '张三',
    age: 20
}
const ls = {
    name: '李四',
    age: 30
}
const ww = {
    name: '王五',
    age: 18
}
const atm = {
    name: '奥特曼',
    age: 20
}
const gs = {
    name: '怪兽',
    age: 30
}
const xdcr = {
    name: '咸蛋超人',
    age: 18
}
const hmbb = {
    name: '海绵宝宝',
    age: 20
}

const hashMap = new HashMap();
hashMap.set('hdy', hdy);
hashMap.set('zs', zs);
hashMap.set('ls', ls);
hashMap.set('ww', ww);
hashMap.set('atm', atm);
hashMap.set('gs', gs);
hashMap.set('xdcr', xdcr);

// 现在是 0.7，再增加一个会变成 0.8，突破界限，再哈希
console.log(hashMap);
// HashMap {
//     arr: [
//       <1 empty item>,
//       Node { key: 'ls', val: [Object], next: [Node] },
//       <2 empty items>,
//       Node { key: 'atm', val: [Object], next: null },
//       Node { key: 'hdy', val: [Object], next: null },
//       Node { key: 'ww', val: [Object], next: [Node] },
//       <2 empty items>,
//       Node { key: 'zs', val: [Object], next: null }
//     ],
//     _size: 7,
//     maxSize: 10
//   }
hashMap.set('hmbb', hmbb);
console.log(hashMap);
// HashMap {
//     arr: [
//       <1 empty item>,
//       Node { key: 'ls', val: [Object], next: null },
//       <1 empty item>,
//       Node { key: 'hmbb', val: [Object], next: null },
//       <2 empty items>,
//       Node { key: 'ww', val: [Object], next: [Node] },
//       <4 empty items>,
//       Node { key: 'xdcr', val: [Object], next: null },
//       <2 empty items>,
//       Node { key: 'atm', val: [Object], next: null },
//       Node { key: 'hdy', val: [Object], next: null },
//       <3 empty items>,
//       Node { key: 'zs', val: [Object], next: null }
//     ],
//     _size: 8,
//     maxSize: 20
//   }
```
:::
::::