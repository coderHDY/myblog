---
title: Set
date: 2022-10-14 14:18:00
---
## 定义
* 无序
* 不重复
* 用`let`定义的不能修改
```swift
var s3: Set = ["h", "a", "b", "c"];
var s2 = Set(["h", "a", "b", "c"]);
var s1: Set<String> = ["h", "a", "b", "c"];

print(s1); // 无序：["a", "h", "b", "c"]
```
## 增删改查
```swift
var s1: Set = ["h", "a", "b", "c"];

// 增
s1.insert("h");

// 查
print(s1.contains("a")); // true

// 删
s1.remove("a")
s1.removeAll();

print(s1.contains("a")); // false
print(s1); // []
```

## 其他操作
### union
* 并集：合并两个set
```swift
var s1: Set = ["h", "a", "b", "c"];
var s2: Set = ["hh", "papa"];

var s3 = s1.union(s2);

print(s1); // ["h", "a", "c", "b"]
print(s2); // ["papa", "hh"]
print(s3); // ["h", "papa", "a", "c", "b", "hh"]
```
### intersection
* 交集
```swift
var s1: Set = ["h", "a", "b", "c"];
var s2: Set = ["hh", "papa", "c"];

var s3 = s1.intersection(s2);

print(s3); // ["c"]
```
### subtracting
* 补集：返回 s1 中有但是 s2 没有的部分
```swift
var s1: Set = ["h", "a", "b", "c"];
var s2: Set = ["hh", "papa", "c"];

var s3 = s1.subtracting(s2);

print(s3); // ["a", "b", "h"]
```
### 相等
* 长度相等
* 每一项都有
```swift
var s1: Set = ["h", "a"];
var s2: Set = ["a", "h"];

print(s1 == s2); // true
```
### filter
```swift
var s1: Set = ["h", "a", "g", "q", "x"];

var s2: Set = s1.filter({["h", "a"].contains($0)});
var s3: Set = s1.filter({item in
    ["h", "a"].contains(item)
});

print(s2); // ["h"]
```
### 遍历
```swift
var s1: Set = ["h", "a", "g", "q", "x"];

for item in s1
{
    print(item); // a q h g x
}
```