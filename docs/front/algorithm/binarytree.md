---
title: 二叉树
date: 2021-12-18 15:00:00
categories:
 - 算法
---
## 手写二叉树
::: tip 知识点
|名词|知识点|
|---|---|
|节点|每个节点有左右两个子节点|
|满二叉树|除了最后一层，所有的节点都有2个子节点|
|二叉搜索树|左节点小于根节点，右节点大于根节点|
|前序遍历|根左右的顺序遍历|
|中序遍历|左根右【中序遍历的结果就是二叉搜索树排序的结果】|
|后序遍历|左右根|
:::
:::: tabs
::: tab label=手写二叉搜索树
```js
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BST {
    size = 0;
    root = null;
    initNode(val) {
        return new Node(val);
    }
    append(val, root = this.root) {
        const node = this.initNode(val);
        if (!this.root) {
            this.size++;
            this.root = node;
            return this.root;;
        }
        if (val < root.val) {
            if (root.left) {
                this.append(val, root.left)
            } else {
                this.size++;
                root.left = node;
            }
        }
        if (val >= root.val) {
            if (root.right) {
                this.append(val, root.right)
            } else {
                this.size++;
                root.right = node;
            }
        }
        return root;
    }
    get(val, root = this.root) {
        if (!root) {
            return;
        }

        // 经典的二叉树递归搜索法
        if (val === root.val) {
            return root.val;
        }
        return val > root.val ? this.get(val, root.right) : this.get(val, root.left);
    }
    max(root = this.root) {
        if (!root) {
            return;
        }
        return (root.right ? this.max(root.right) : root).val
    }
    min(root = this.root) {
        return root?.left ? this.min(root.left) : root?.val;
    }
    deep(current = this.root, currentDeep = 0, maxDeep = 0) {
        if (!current) {
            return Math.max(currentDeep, maxDeep);
        }
        return Math.max(
            this.deep(current.left, currentDeep + 1, maxDeep),
            this.deep(current.right, currentDeep + 1, maxDeep)
        );
    }
    preOrder(cNode = this.root, ans = []) {
        if (!cNode) {
            return;
        }
        ans.push(cNode.val);
        this.preOrder(cNode.left, ans);
        this.preOrder(cNode.right, ans);
        return ans;
    }
    mediumOrder(cNode = this.root, ans = []) {
        if (!cNode) {
            return;
        }
        this.mediumOrder(cNode.left, ans);
        ans.push(cNode.val);
        this.mediumOrder(cNode.right, ans);
        return ans;
    }
    postOrder(cNode = this.root, ans = []) {
        if (!cNode) {
            return;
        }
        console.log(cNode);
        this.postOrder(cNode.left, ans);
        this.postOrder(cNode.right, ans);
        ans.push(cNode.val);
        return ans;
    }
    levelOrder() {
        if (!this.root) {
            return [];
        }
        const ans = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const len = queue.length;
            ans.push(queue.map(item => item.val))
            for (let i = 0; i < len; i++) {
                const cNode = queue.shift();
                if (cNode.left) {
                    queue.push(cNode.left);
                }
                if (cNode.right) {
                    queue.push(cNode.right);
                }
            }
        }
        return ans;
    }
}
```
:::
::::
## 最大深度
:::: tabs
::: tab label=题目
* [力扣](https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnd69e/)
* 返回3

```txt
    3
   / \
  9  20
    /  \
   15   7
```
::: 
::: tab label=深度优先
* 内置类型TreeNode{val, left, right}
> 时间【O(n)】：95.62%  
> 空间【O(n)】：56.10%  

```js
function maxDepth(root, max = 0) {
    if (!root) return max;
    return Math.max(maxDepth(root.left, max + 1), maxDepth(root.right, max + 1))
}
```
:::
::: tab label=广度优先
>时间【O(n)】:88.18%  
>空间【O(n)】:7.57%  
```js
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    const queue = [];
    queue.push(root);
    let deep = 0;
    while (queue.length) {
        deep += 1;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const cNode = queue.shift();
            if (cNode.left != null) {
                queue.push(cNode.left);
            }
            if (cNode.right != null) {
                queue.push(cNode.right);
            }
        }
    }
    return deep;
};
```
:::
::::
## 验证二叉搜索树
:::: tabs
::: tab label=题
* [力扣](https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn08xg/)
* 给定节点看是否是二叉搜索树
    1. 左子树小于当前节点
    2. 右字树大于当前节点
    3. 子树也是二叉搜索树
:::
::: tab label=递归
>时间：44.32%    
>空间：36.30%  
```js
var isValidBST = function(root, max = Number.MAX_VALUE, min = -Number.MAX_VALUE) {
    if (!root) {
        return true;
    }
    if ((root.val <= min) || (root.val >= max)) {
        return false;
    }
    return isValidBST(root.left, root.val, min) && isValidBST(root.right, max, root.val);
};
```
:::
::::
## 对称二叉树
:::: tabs
::: tab label=题
* [力扣](https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn7ihv/)
* 根据中轴左右对称
```txt
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
:::
::: tab label=对称递归
>时间：82.13%  
>空间：31.96%
```js
var isSymmetric = function(root, left = null, right = null) {
    if (!root) {
        return true;
    }
    const deepHelper = (left, right) => {
        if (left == null && right == null) {
            return true;
        }
        if (left == null || right == null) {
            return false;
        }
        if (left.val != right.val) {
            return false
        }
        return deepHelper(left.left, right.right) && deepHelper(left.right, right.left)
    }
    return deepHelper(root.left, root.right);
};
```
:::
::::
## 层序遍历
:::: tabs
::: tab label=题
* [力扣](https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnldjj/)
```ts
    3
   / \
  9  20
    /  \
   15   7

// 输出
[
  [3],
  [9,20],
  [15,7]
]
```
:::
::: tab label=解
* 用队列
>时间：80.02%  
>空间：94.35%  
```js
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const ans = [];
    const queue = [];
    queue.push(root);
    while (queue.length) {
        ans.push(queue.map(item => item.val));
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            const cNode = queue.shift();
            if (cNode.left) {
                queue.push(cNode.left);
            }
            if (cNode.right) {
                queue.push(cNode.right);
            }
        }
    }
    return ans;
};
```
:::
::::
## 中序遍历
:::: tabs
::: tab label=题
* [力扣94](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
* 求中序遍历
```txt
输入：root = [1,null,2,3]
输出：[1,3,2]
```
:::
::: tab label=默认入参
>时间：97.37%  
>空间：13.96%
```js
var inorderTraversal = function(root, ans = []) {
    if (!root) {
        return ans;
    }
    if (root.left) {
        inorderTraversal(root.left, ans);
    }
    ans.push(root.val);
    if (root.right) {
        inorderTraversal(root.right, ans);
    }
    return ans;
};
```
:::
::: tab label=辅助函数
>时间：76.74%   
>空间：41.39%
```js
var inorderTraversal = function(root) {
    const ans = [];
    const deepHelper = (node) => {
        if (!node) {
            return;
        }
        if (node.left) {
            deepHelper(node.left);
        }
        ans.push(node.val)
        if (node.right) {
            deepHelper(node.right);
        }
    }
    deepHelper(root);
    return ans;
}
```
:::
::::
## 897. 递增顺序搜索树
:::: tabs
::: tab label=题
* 给一棵二叉树，中序遍历生成新的二叉树，只有右节点，且递增，且每个节点没有左子节点
:::
::: tab label=解
>时间：95.60%  
>空间：26.42%
```js
var increasingBST = function(root) {
    const ansPre = new TreeNode();
    let cNode = ansPre;
    const handler = (node) => {
        if (node.left) handler(node.left);
        cNode.right = new TreeNode(node.val);
        cNode = cNode.right;
        if (node.right) handler(node.right);
    }
    handler(root);
    return ansPre.right;
};
```
:::
::::
## 100. 相同的树
:::: tabs
::: tab label=题
* 验证两棵树完全相同
:::
::: tab label=解
>时间：98.10%  
>空间：24.53%
```js
var isSameTree = function(p, q) {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```
:::
::::
## 589. N 叉树的前序遍历
:::: tabs
::: tab label=题
* 给定一个 **n叉树** 的根节点  root ，返回 其节点值的 前序遍历 。
:::
::: tab label=递归法
>时间：71.10%  
>空间：8.10%
```js
var preorder = function(root) {
    const ans = [];
    const handler = node => {
        if (node) {
            ans.push(node.val);
            node.children.forEach(item => handler(item));
        }
    }
    handler(root);
    return ans;
};
```
:::
::: tab label=迭代法
>时间：95.80%  
>空间：22.90%
```js
var preorder = function(root) {
    const ans = [];
    const queue = [root];
    while(queue.length) {
        const cNode = queue.shift();
        if (cNode) {
            ans.push(cNode.val);
        }
        if (cNode?.children) {
            queue.unshift(...cNode.children);
        }
    }
    return ans;
};
```
:::
::::
## 257. 二叉树的所有路径
:::: tabs
::: tab label=题
```js
// root = [1,2,3,null,5]
const root = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3),
)
console.log(binaryTreePaths(root)); // [ '1->2->5', '1->3' ]
```
:::
::: tab label=解
* 缓存当前路径关系
>时间：96.26%  
>空间：46.14%
```js
var binaryTreePaths = function (root) {
    const ans = [];
    const handler = (cPath, node) => {
        cPath = `${cPath}${node.val}`;
        if (!node.left && !node.right) ans.push(cPath);
        if (node.left) handler(`${cPath}->`, node.left);
        if (node.right) handler(`${cPath}->`, node.right);
    }
    handler('', root);
    return ans;
};
```
:::
::::
## 114. 二叉树展开为链表
:::: tabs
::: tab label=题
* 按照先序遍历生成新的二叉树排序方式，所有节点只有右节点
```js
const root = [1,2,5,3,4,null,6]
console.log(flatten(root));
// 输出：[1,null,2,null,3,null,4,null,5,null,6]
```
:::
::: tab label=解
* 前序遍历：中左右
* 前序遍历反向遍历：右左中，也就是前序遍历从最后一个往前拿
* 反向遍历同时制作每一个节点的right，遍历完成即制作完成
>时间：82.84%  
>空间：34.02%
```js
var flatten = function(root) {
    let last = null;
    const handler = node => {
        if (!node) return;
        handler(node.right);
        handler(node.left);
        node.right = last;
        node.left = null;
        last = node;
    };
    handler(root);
    return last;
};
```
:::
::::