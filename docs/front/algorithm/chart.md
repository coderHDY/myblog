---
title: 图
date: 2022-04-28
---
## 48. 旋转图像
:::: tabs
::: tab label=题
* 在原地旋转二维图像90度
```js
const matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix);
console.log(matrix);
// 输出：[[7,4,1],[8,5,2],[9,6,3]]
```
:::
::: tab label=解
* 先上下旋转，再(左上 -> 右下)对称轴旋转即可达到90度旋转
>时间：98.99%  
>空间：36.35%
```js
var rotate = function(matrix) {
    matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
};
```
:::
::: tab label=180度
* 上下翻转，每层翻转
```js
function rotate(matrix) {
    matrix.reverse();
    matrix.forEach(row => row.reverse());
}
```
:::
::: tab label=270度
* 上下翻转，(右上 -> 左下) 的对角线翻转
```js
function rotate(matrix) {
    const n = matrix.length - 1;
    matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < n - i; j++) {
            [matrix[i][j], matrix[n - j][n - i]] = [matrix[n - j][n - i], matrix[i][j]];
        }
    }
}
```
:::
::::