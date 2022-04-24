---
title: 双指针
date: 2022-04-05
---
## 647. 回文子串
:::: tabs
::: tab label=题
* 寻找字符串中的回文字符串个数
```js
const s = "abc";
console.log(countSubstrings(s));
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
```
:::
::: tab label=解
* 中心扩展开，遇到回文则加，不是回文则中断
* 注意判断`奇数回文`和`偶数回文`两种情况
>时间：86.26%  
>空间：72.78%
```js
var countSubstrings = function(s) {
    let ans = 0;
    const handler = (start , last) => {
        while (start > -1 && last < s.length && s[start] === s[last]) {
            ans++;
            start--;
            last++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        handler(i, i);
        handler(i, i + 1);
    }
    return ans;
};
```
:::
::::
## 704. 二分查找
:::: tabs
::: tab label=题
* 给定一个 n 个元素`有序`的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
```js
const  nums = [-1,0,3,5,9,12], target = 9
console.log(search(nums, target));
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
```
:::
::: tab label=解
* 二分查找，左右中间，三个指针根据状态相互替换
* 注意边界处理，防止无限循环：
    * first = center + 1;
    * last = center - 1;
>时间：94.56%  
>空间：59.53%
```js
var search = function(nums, target) {
    let first = 0;
    let last = nums.length - 1;
    while (first <= last) {
        const center = Math.floor((last - first) / 2) + first;
        if (nums[center] === target) return center;
        if (nums[center] < target) {
            first = center + 1;
        } else {
            last = center - 1;
        }
    }
    return -1;
};
```
:::
::::
## 167. 两数之和 II
:::: tabs
::: tab label=题
* 给一个有序数组，拿到唯一解 n1 + n2 === target
* 返回[n1 + 1, n2 + 2]
:::
::: tab label=双循环
* 时间复杂度O(n^2)，空间O(1)
>时间：8.57%  
>空间：33.68%
```js
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const need = target - numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] === need) return [i + 1, j + 1];
            if (numbers[j] > need) break;
        }
    }
};
```
:::
::: tab label=双指针
* 双指针，（前提有序），向目标和靠近
* 时间复杂度 O(n)，额外空间 O(1)
>时间：96.11%  
>空间：31.16%
```js
var twoSum = function(numbers, target) {
    for (let i = 0,j = numbers.length - 1; i < j;) {
        const sum = numbers[i] + numbers[j];
        if (sum === target) return [i + 1, j + 1];
        if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
};
```
:::
::::
## 283. 移动零
:::: tabs
::: tab label=题
* 将数组所有0**原地**移动到末尾，**其他相对位置不变**
```js
const nums = [0,1,0,3,12]
moveZeroes(nums);
console.log(nums);
// 输出: [1,3,12,0,0]
```
::: 
::: tab label=遍历移动
* 直接遍历移动，需要注意splice以后i的位置，所以可以倒序遍历，避开`遍历splice陷阱`
>时间：18.13%  
>空间：51.12%
```js
var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};
```
:::
::: tab label=遍历赋值
* 遍历过程中记录0出现的次数，就是本数字应该向前移动的位数
>时间：98.25%  
>空间：37.50%
```js
var moveZeroes = function(nums) {
    let zero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zero++;
            continue;
        }
        if (zero !== 0) {
            nums[i - zero] = nums[i];
            nums[i] = 0;
        }
    }
};
```
:::
::::
## 876. 链表的中间结点
:::: tabs
::: tab label=题
* 求非空单链表的中间节点
:::
::: tab label=解
* 快慢指针专治链表
>时间：95.97%  
>空间：39.59%
```js
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
```
:::
::::
## 6037. 按奇偶性交换后的最大数字，双百
:::: tabs
::: tab label=题
* 一个正整数 num 。你可以交换 num 中 奇偶性 相同的任意两位数字（即，都是奇数或者偶数）。
```js
const num = 1234;
console.log(largestInteger(num));
// 输出：3412
```
:::
::: tab label=双百解
* 排序，双指针分别记录奇数和偶数的当前位置，每用一次后移一次
>时间：100%  
>空间：100%
```js
var largestInteger = function(num) {
    const sortArr = `${num}`.split('').map(item => +item).sort((a, b) => b - a);
    let even = sortArr.findIndex(item => item % 2 === 0);
    let odd = sortArr.findIndex(item => item % 2 === 1);
    return `${num}`.split('').map(item => {
        if (+item % 2 === 0) {
            const ans = sortArr[even];
            while (++even < sortArr.length) {
                if (sortArr[even] % 2 === 0) {
                    break;
                }
            }
            return ans;
        } else {
            const ans = sortArr[odd];
            while (++odd < sortArr.length) {
                if (sortArr[odd] % 2 === 1) {
                    break;
                }
            }
            return ans;
        }
    }).join('');
};
```
:::
::::
## 19. 删除链表的倒数第N个结点
:::: tabs
::: tab label=题
* 可能为空链表还要删除倒数第N个节点，还好N肯定是小于等于链表长度的
::: 
::: tab label=双指针解
>时间：99.70%  
>空间：50.08%
```js
var removeNthFromEnd = function(head, n) {
    const newHead = new ListNode(null, head);
    let fast = newHead;
    let slow = newHead;
    while (n-- > 0) {
        fast = fast.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return newHead.next;
};
```
:::
::::
## 3.无重复最长字符串
:::: tabs
::: tab label=题目
* 力扣题号：3
* 给一个字符串，求出最长的不重复字符
```js
const str = 'pwwkew';
console.log(maxNoRepeatLen(str)); // 3
```
```js
const str = 'aaa';
console.log(maxNoRepeatLen(str)); // 1
```
:::
::: tab label=实现1
* 难点：可能前面重复了，但是连着后面的是最长的，如：'pwwkew' 中的 'w'
* 核心思路：用数组存储，如果一个数重复了，就删除重复数和之前的数，然后再维护一个变量存储最大length
> 时间：92.73%  
> 空间：68.30%
```js
function maxNoRepeatLen(str) {
    let arr = [];
    let maxLen = 0;
    for (let char of str) {
        const index = arr.indexOf(char);
        if (index !== -1) {

            // 取本次不重复长度
            maxLen = Math.max(maxLen, arr.length);
            arr.splice(0, index + 1);
        }
        arr.push(char);
    }

    // 最后判断一次，因为可能最长不重复的在最后，for循环结束需要再取一次值
    maxLen = Math.max(maxLen, arr.length);
    return maxLen;
}
```
:::
::: tab label=双指针计数
>时间：98.99%  
>空间：80.61%
```js
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = start; j < i; j++) {
            if (s[j] === s[i]) {
                max = Math.max(max, i - start);
                start = j + 1;
                break;
            }
        }
    }
    max = Math.max(max, s.length - start);
    return max;
};
```
:::
::::
## 74. 搜索二维矩阵,矩阵思维
:::: tabs
::: tab label=题
* 排序矩阵内是否有目标值
```js
const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
console.log(searchMatrix(10)); // true
```
:::
::: tab label=暴力解
>时间：53.93%  
>空间：40.17%
```js
var searchMatrix = function (matrix, target) {
    return matrix.some(row => row.includes(target));
};
```
:::
::: tab label=双二分解
* 垃圾思想，二分找两次
>时间：75.61%  
>空间：67.67%
```js
var searchMatrix = function (matrix, target) {
    let firstRow = 0;
    let lastRow = matrix.length - 1;
    let midRow;
    while (firstRow <= lastRow) {
        midRow = Math.floor((lastRow - firstRow) / 2) + firstRow;
        if (matrix[midRow][0] <= target && matrix[midRow][matrix[midRow].length - 1] >= target) break;
        if (matrix[midRow][0] > target) {
            lastRow = midRow - 1;
        } else {
            firstRow = midRow + 1;
        }
    }
    if (matrix[midRow][0] > target || matrix[midRow][matrix[midRow].length - 1] < target) return false;
    let firstCol = 0;
    let lastCol = matrix[midRow].length - 1;
    while (firstCol <= lastCol) {
        const mid = Math.floor((lastCol - firstCol) / 2) + firstCol;
        if (matrix[midRow][mid] === target) return true;
        if (matrix[midRow][mid] > target) {
            lastCol = mid - 1;
        } else {
            firstCol = mid + 1;
        }
    }
    return false;
};
```
:::
::: tab label=高效解
* 有序矩阵查找，最佳搜索起点是右上角，根据条件向左下移动
>时间：89.16%  
>空间：60.29%
```js
var searchMatrix = function (matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if(matrix[row][col] > target){
            col--;
        } else {
            row++;
        }
    }
    return false;
};
```
:::
::::
## 15. 三数之和
:::: tabs
::: tab label=题
* 找到数组中三数之和等于0的结果
```js
const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums));
// 输出：[[-1,-1,2],[-1,0,1]]
```
:::
::: tab label=递归
* 思想：记录当前和，递归拿所有排列组合做排查
* 超时：O(n^3)
```js
function threeSum(nums) {
    const ans = [];
    nums.sort((a, b) => a - b);
    const handler = (cArr, i, sum) => {
        if (cArr.length === 3) {
            if (sum === 0) ans.push([...cArr]);
            return;
        }
        for (; i < nums.length; i++) {
            cArr.push(nums[i]);
            handler(cArr, i + 1, sum + nums[i]);
            cArr.pop();
            while (nums[i + 1] === nums[i]) i++;
        }
    };
    handler([], 0, 0);
    return ans;
}
```
:::
::: tab label=排序剪枝
* 思想：排序，三层遍历，拿到左节点，拿到右节点，看**左右之间**是否有需要节点
>时间：5.02%  
>空间：54.02%
```js
function threeSum(nums) {
    const ans = [];
    nums.sort((a, b) => a - b);
    for (let l = 0; l < nums.length - 2; l++) {
        if (nums[l] > 0) break;
        for (let r = nums.length - 1; r > l; r--) {
            if (nums[r] < 0) break;
            const need = 0 - nums[l] - nums[r];
            const idx = nums.indexOf(need, l + 1);
            if (idx !== -1 && idx < r) {
                ans.push([nums[l], nums[r], nums[idx]]);
            }
            while (nums[r - 1] === nums[r]) r--;
        }
        while (nums[l + 1] === nums[l]) l++;
    }
    return ans;
}
```
:::
::: tab label=双指针
* 思想：利用结果为0的特性。双层循环，外层取起点，里层双指针遍历，排序后可以根据差距目标0的大小来决定移动左指针还是右指针
>时间：98.29%  
>空间：47.34%
```js
function threeSum(nums) {
    const ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                ans.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[++l]) {}
                while (nums[r] === nums[--r]) {}
            }
        }
        while (nums[i + 1] === nums[i]) i++;
    }
    return ans;
}
```
:::
::::
## 16. 最接近的三数之和
:::: tabs
::: tab label=题
* 要求如果没有指定的三数之和，就返回最接近的
```js
const nums = [-1,2,1,-4], target = 1
console.log(threeSumClosest(nums, target));
// 输出：2
```
:::
::: tab label=解
* 思路：同三数只和思路，但是判断条件要改为abs最小
>时间：99.08%  
>空间：48.04%
```js
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let ans = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (Math.abs(sum - target) < Math.abs(ans - target)) ans = sum;
            if (sum < target) {
                l++;
            } else if (sum > target) {
                r--;
            } else {
                return sum;
            }
        }
    }
    return ans;
};
```
:::
::::