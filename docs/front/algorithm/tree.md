---
title: 树
date: 2021-11-06
categories:
 - 算法
---
## 介绍
::: tip
* 掌握
    * 遍历方法：前序、中序、后序、深度优先、广度优先
    * 递归求解
:::
## 做题
### 前中后序遍历
::: tip
* 前：根 -> 左 -> 右
* 中：左 -> 根 -> 右
* 后：左 -> 右 -> 根
```js
// 前序
const root = [1,null,2]; // 注：不是数组，是treeNode节点
console.log(preorderTraversal(root)); // [1,2]
```
* 前序：[力扣144](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
* 中序：[力扣94](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
* 后序：[力扣145](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/)
:::
:::: tabs
::: tab label=前序遍历
>时间：91.23%  
>空间：51.89%
```js{5-7}
function preorderTraversal(root, ans = []) {
    if (!root) {
        return [];
    }
    ans.push(root.val);
    preorderTraversal(root.left, ans);
    preorderTraversal(root.right, ans);
    return ans;
}
```
:::
::: tab label=中序遍历
>时间：99.53%  
>空间：41.18%
```js{5-7}
function inorderTraversal(root, ans = []) {
    if (!root) {
        return [];
    }
    inorderTraversal(root.left, ans);
    ans.push(root.val);
    inorderTraversal(root.right, ans);
    return ans;
}
```
:::
::: tab label=后序遍历
>时间：99.51%  
>空间：57.67%
```js
function postorderTraversal(root, ans = []) {
    if (!root) {
        return [];
    }
    postorderTraversal(root.left, ans);
    postorderTraversal(root.right, ans);
    ans.push(root.val);
    return ans;
}
```
:::
::::
### 广度优先
::: tip
* 广度优先：利用队列，又叫做层序遍历
* 深度优先：利用递归
* 广度优先：[力扣102](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/submissions/)
* 深度优先：[]()
:::
::::tabs
::: tab label=广度优先
>时间：92.31%  
>空间：34.92%
```js{8-23}
function levelOrder(root) {
    if (!root) {
        return [];
    }
    const ans = [];
    const queue = [];
    queue.push(root);
    let len = queue.length;
    while (len) {
        let cLevel = [];
        for (let i = 0; i < len; i++) {
            const cNode = queue.shift();
            cLevel.push(cNode.val);
            if (cNode.left) {
                queue.push(cNode.left);
            }
            if (cNode.right) {
                queue.push(cNode.right);
            }
        }
        ans.push(cLevel);
        len = queue.length;
    }
    return ans;
}
```
:::
::::
### 最大深度
::: tip
* 给定二叉树求最大深度
* [力扣104](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
:::
:::: tabs
::: tab label=深度优先遍历
>时间：88.43%  
>空间：98.00%
```js{5}
function maxDepth(root, max = 0) {
    if (!root) {
        return max;
    }
    return Math.max(maxDepth(root.left, max + 1), maxDepth(root.right, max + 1));
}
```
:::
::::
### 路径总和
::: tip
* 求路径总和是否等于target值
```js
const root = [5,4,8,11,null,13,4,7,2,null,null,null,1];
const targetSum = 22;
console.log(hasPathSum(root, targetSum)); // true
```
* [力扣112](https://leetcode-cn.com/problems/path-sum/)
:::
:::: tabs
::: tab label=路劲总和
* 深度优先遍历
>时间：98.10%  
>空间：45.77%
```js{6-9,11}
function hasPathSum(root, targetSum) {
    if (!root) {
        return false;
    }
    
    // 叶子节点，递归终点判断
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }

    return !!(hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val));
}
```
:::
::::
### 根据中序后序构造二叉树
::: tip 
* 给定中序、后序遍历
* 假定没有重复元素
* 构造二叉树
* [力扣106](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/submissions/)
:::

:::: tabs
::: tab label=思路
* 后序遍历最后一个是根
* 中序遍历中根为中线，左右叉树可以划分
* 右叉树不为0，拿再拿后序遍历的倒数第二个就是右叉树的根
* 以此类推
>时间：40.65%  
>空间：15.11%
```js{10-17}
function buildTree(inorder, postorder) {
    if (inorder.length === 1) {
        return new TreeNode(inorder[0], null, null);
    }

    const rootVal = postorder[postorder.length - 1];
    const rootNode = new TreeNode(rootVal, null, null);
    const rootIndex = inorder.indexOf(rootVal);

    let inorderLeft = inorder.slice(0, rootIndex);
    let inorderRight = inorder.slice(rootIndex + 1, postorder.length);
    if (inorderRight.length) {
        rootNode.right = buildTree(inorderRight, postorder.slice(postorder.length - inorderRight.length - 1, postorder.length - 1));
    }
    if (inorderLeft.length) {
        rootNode.left = buildTree(inorderLeft, postorder.slice(0, inorderLeft.length));
    }
    return rootNode;
}
```
:::
:::  tab label=优化
* 利用哈希表存储中序遍历，然后用下标记录本树的边界，进行递归
>时间：97.03%  
>空间：63.49%
```js
function buildTree(inorder, postorder) {

    // 用来取中点，提高效率
    const inorderMap = new Map(inorder.map((item, index) => [item, index]));

    const handler = (left, right) => {
        if (left > right) {
            return null;
        }
        
        const nodeVal = postorder[rootIndex--];
        const index = inorderMap.get(nodeVal);
        const node = new TreeNode(nodeVal);
        
        // 左右边界去掉当前节点
        node.right = handler(index + 1, right);
        node.left = handler(left, index - 1);
        
        return node;
    }

    let rootIndex = postorder.length - 1;
    return handler(0, inorder.length - 1);
}
```
:::
::::
### 前序中序构造二叉树
::: tip
* 给前序中序遍历
* 返回二叉树
* [力扣105](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/submissions/)
:::
:::: tabs
::: tab label=思路
* 同前面的优化思路，拿一个map存储中序键值对，查下标时间变成O(1)。再用前序找根，中序分左右子树的方法做出二叉树
* 注：后序应该先把右子树做完，前序应该先把左子树做完。
>时间：97.06%  
>空间：63.13%
```js{4-17,19}
function buildTree(preorder, inorder) {
    const inorderMap = new Map(inorder.map((item, index) => [item, index]));

    const handler = (left, right) => {
        if (left > right) {
            return null;
        }

        const nodeVal = preorder[rootIndex++];
        const node = new TreeNode(nodeVal);

        const index = inorderMap.get(nodeVal);
        node.left = handler(left, index - 1);
        node.right = handler(index + 1, right);

        return node;
    }

    let rootIndex = 0;
    return handler(rootIndex, preorder.length - 1);
}
```
:::
::::
### 填充所有节点的右侧指针
::: tip
* 给完美二叉树
* 同级的节点左边指右边，最右边指null
* [力扣116](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/)
:::
:::: tabs
::: tab label=广度优先遍历
>时间：99.30%  
>空间：35.50%
```js{9-21}
function connect(root) {
    if (!root) {
        return null;
    }
    const queue = [];
    queue.push(root);
    let len = queue.length;

    while (len) {
        for (let i = 0; i < len; i++) {
            const cNode = queue.shift();
            cNode.next = i !== len - 1 ? queue[0] : null;
            if (cNode.left) {
                queue.push(cNode.left);
            }
            if (cNode.right) {
                queue.push(cNode.right);
            }
        }
        len = queue.length;
    }
    return root;
}
```
:::
::: tab label=递归思路
* 做一个左右节点指针器
>时间：97.15%  
>空间：91.19%
```js
function connect(root) {
    if (!root) {
        return null;
    }

    const handler = (left, right) => {
        if (!left || left.next === right) {
            return;
        }
        left.next = right;
        handler(left.left, left.right);
        handler(left.right, right.left);
        handler(right.left, right.right);
    }
    handler(root.left, root.right);
    return root;
}
```
:::
::::
