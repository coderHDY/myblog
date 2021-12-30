# 二叉树
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