---
title: Dictionary
date: 2022-10-14 15:07:00
---
## 定义
* let 不可变
* 
```swift
var d1 = [
    "a": "A",
    "b": "B",
    "c": "C"
];

var d2: Dictionary<String, String> = [
    "a": "A",
    "b": "B",
    "c": "C"
];

print(d1); // ["c": "C", "b": "B", "a": "A"]
```
* 空字典
```swift
var d3 = [String: String]();

var d4: Dictionary<String, String> = [:]
```
## 增删改查
### 增 / 改
* 直接赋值：增/改
    ```swift
    var d1 = [
        "a": "A",
        "b": "B",
        "c": "C"
    ];

    d1["a"] = "AA";
    print(d1); // ["b": "B", "c": "C", "a": "AA"]

    d1["d"] = "DD";
    print(d1); // ["a": "AA", "c": "C", "d": "DD", "b": "B"]
    ```
* `updateValue`：增/改
    ```swift
    var d = [
        "a": "A",
        "b": "B",
        "c": "C"
    ];

    d.updateValue("hello", forKey: "g");

    print(d); // ["a": "A", "b": "B", "g": "hello", "c": "C"]
    ```
### 删
```swift
var d = [
    "a": "A",
    "b": "B",
    "c": "C"
];

d.removeValue(forKey: "a");

print(d); // ["c": "C", "b": "B"]
```
```swift
var d = [
    "a": "A",
    "b": "B",
    "c": "C"
];

d.removeAll();

print(d); // [:]
```
## 其他
### 取值
::: tip
* 由于取出来可能是`nil`，所以正常取出来都是`optional`
:::
```swift
var d1 = [
    "a": "A",
    "b": "B",
    "c": "C"
];

print(d1["a"]); // Optional("A")
print(d1["d"]); // nil
print(d1["a"]!); // A
print(d1["a"] ?? ""); // A

if let item = d1["a"] {
  print(item); // A
}
```
### count
```swift
var d1 = [
    "a": "A",
    "b": "B",
    "c": "C"
];

print(d1.count); // 3
```
### filter
* 元组取值
    ```swift
    var d1 = [
        "a": "A",
        "b": "B",
        "c": "C"
    ];

    var d2 = d1.filter({item -> Bool in
        return item.key != "a";
    });

    print(d2); // ["b": "B", "c": "C"]

    var d3 = d1.filter({item -> Bool in
        return item.value != "C";
    });

    print(d3); // ["b": "B", "a": "A"]
    ```
* 解构对象取值
    ```swift
    var d1 = [
        "a": "A",
        "b": "B",
        "c": "C"
    ];

    var d2 = d1.filter { (k, v) in
        return k.uppercased() != v;
    }

    print(d2); // [:]
    ```
### 遍历
* for循环
    ```swift
    var d = [
        "a": "A",
        "b": "B",
        "c": "C"
    ];

    for (k, v) in d
    {
        print(k, v);
    }
    ```
### contains
```swift
var d = [
    "a": "A",
    "b": "B",
    "c": "C"
];

let ans = d.contains { (k, v) in
    return k.uppercased() != v;
}

print(ans); // false
```