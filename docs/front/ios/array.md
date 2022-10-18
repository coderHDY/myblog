---
title: Array
date: 2022-10-14
---
## 常用定义
* 只有 var 定义的数组可以修改
```swift
var a1 = [1, 2, 3, 4, 5];

var a2: [String] = ["a", "b", "c"];
let a3: [String] = [];

// 空数组
var a4: Array<String> = ["a", "b", "c"];

// 初始长度 3， 初始化值 1
var a5 = Array(repeating: 1, count: 3);
```
## 增删改查
### 增
* append / +
    ```swift
    var a5 = [1, 2, 3, 4];

    a5 += [10, 12];

    a5.append(13);
    ```
* insert
    ```swift
    var a5 = [1, 2, 3, 4];

    a5.insert(10, at: 2);

    print(a5); // [1, 2, 10, 3, 4]
    ```
### 改
* insert
    ```swift
    var a5 = [1, 2, 3, 4];

    a5.replaceSubrange(1...3, with: [10, 11, 12, 13]);

    print(a5); // [1, 10, 11, 12, 13]
    ```
### 删
* 删单个
    ```swift
    var a = [1, 2, 3, 4];

    print(a.remove(at: 2));  // 3
    print(a);                // [1, 2, 4]
    ```
* 删头尾
    ```swift
    var a1 = [1, 2, 3, 4];

    var a2 = a1.removeLast();
    print(a2); // 4
    print(a1); // [1, 2, 3]


    var a3 = a1.removeFirst();
    print(a3); // 1
    print(a1); // [2, 3]
    ```
* 删范围
    ```swift
    var a1 = [1, 2, 3, 4];

    var a2 = a1.removeSubrange(2...3);

    print(a2); // ()
    print(a1); // [1, 2]
    ```
### 查
* 单个包含
    ```swift
    var a = [1, 2, 3, 4];

    print(a.contains(3)); // true
    ```
* 复杂条件包含
    ```swift
    var a1 = [1, 2, 3, 4];

    var c = a1.contains(where: { i in
      if (i > 4) {
          return true;
      } else {
          return false
      }
    })

    print(c); // false
    ```
## 其他
### reversed
::: warning
* 不改变原数组
:::
```swift
var a1 = [1, 2, 3, 4];

var a2 = Array(a1.reversed());

print(a2); // [4, 3, 2, 1]
print(a1); // [1, 2, 3, 4]
```
### sort
```swift
var a1 = [10, 2, 3, 41];

var a2 = a1.sorted();
var a3 = a1.sorted(by: <);

// 复杂排序
var a4 = a1.sorted { $0 > $1 };

var a5 = a1.sorted { (a, b) in
    a > b;
};
var a6 = a1.sorted { (a, b) -> Bool in
    a > b;
};

print(a2); // [2, 3, 10, 41]
print(a3); // [2, 3, 10, 41]
print(a4); // [41, 10, 3, 2]

print(a1); // [10, 2, 3, 41]
```
### filter
```swift
var a1 = [10, 2, 3, 41];

var a2 = a1.filter { $0 > 2 }
var a3 = a1.filter { item -> Bool in
    item < 11
}
var a4 = a1.filter { item -> Bool in
    return item < 11
}

print(a2); // [10, 3, 41]
print(a3); // [10, 2, 3]
print(a4); // [10, 2, 3]
```
### 比较
* 条件：`长度相等` && `内容相等`
    ```swift
    var a1 = [10, 2, 3, 41];
    var a2 = [10, 2, 3, 41];
    var a3 = [10, 2, 3];

    print(a1 == a2); // true
    print(a1 == a3); // false
    ```
## 遍历
* 正向遍历
    ```swift
    var a1 = [10, 2, 3, 41];

    // 直接遍历
    for item in a1
    {
        print(item); // 10 2 3 41
    }

    // 下标遍历
    for item in a1[0 ... (a1.count - 1)]
    {
        print(item); // 10 2 3 41
    }

    for item in a1[0 ..< a1.count]
    {
        print(item); // 10 2 3 41
    }
    ```
* 反向遍历
    ```swift
    for item in a1.reversed()
    {
        print(item);
    }
    ```