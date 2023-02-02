---
title: Set
date: 2023-01-29
---
## 基本使用
* Swift 的所有基本类型（比如 String、Int、Double 和 Bool）默认都是可哈希化的，一个set只接受一种类型
* 集合没有等价的简化形式。`let set: Set<String>`
    ```swift
    let s = Set([1, 1, 2, 3, 2, 3, 2])
    print(s); // [2, 3, 1]
    ```
* 多种定义方式
    ```swift
    var s3: Set = ["h", "a", "b", "c"];
    var s2 = Set(["h", "a", "b", "c"]);
    var s1: Set<String> = ["h", "a", "b", "c"];
    ```
## count
```swift
var s = Set([1, 3])

print(s.count); // 2
```
## isEmpty
```swift
var s = Set([1, 2, 3])

print(s.isEmpty); // false
```
## 遍历
* Set遍历是`无序的`
```swift
var s = Set([1, 2, 3])

for i in s {
    print(i); // 2 1 3
}
```
* 排序遍历
```swift
var s = Set([1, 2, 3])

for i in s.sorted() {
    print(i); // 1 2 3
}
```
## 增删改查
### insert
```swift
var s = Set([1, 3])

s.insert(2)
print(s); // [3, 2, 1]
```
### remove
```swift
var s = Set([1, 2, 3])

print(s.remove(3)); // Optional(3)
print(s);           // [2, 1]
```
### removeAll
```swift
var s = Set([1, 2, 3])

s.removeAll()
print(s);            // []
```
## contains
* 简单包含
    ```swift
    let s = Set([1, 2, 3])

    let ans = s.contains(2)
    print(ans); // true
    ```
* 复杂条件
    ```swift
    let s = Set([1, 3])

    let ans = s.contains(where: {$0 % 2 == 0})
    print(ans); // false
    ```
## 交并差补（集）
### intersection
* 交集
```swift
var s1 = Set([1, 2, 3])
var s2 = Set([3, 4, 5])

print(s1.intersection(s2)); // [3]
```
### union
* 并集
```swift
var s1 = Set([1, 2, 3])
var s2 = Set([3, 4, 5])

print(s1.union(s2)); // [4, 1, 5, 2, 3]
```
### symmetricDifference
* 差集
```swift
var s1 = Set([1, 2, 3])
var s2 = Set([3, 4, 5])

print(s1.symmetricDifference(s2)); // [4, 5, 1, 2]
```
### subtracting
* 补集
```swift
var s1 = Set([1, 2, 3])
var s2 = Set([3, 4, 5])

print(s1.subtracting(s2)); // [1, 2]
// s1 的 1，2 是 s2的补集
```
## 其他判断
### 相等判断
```swift
var s1 = Set([1, 2, 3])
var s2 = Set([1, 2, 3])

print(s1 == s2); // true
```
### 子集
```swift
var s1 = Set([1, 2, 3])
var s2 = Set([1, 2， 3])

// 子集判断
print(s2.isSubset(of: s1)); // true
print(s1.isSuperset(of: s2)); // true

// 子集且不相等判断
print(s2.isStrictSubset(of: s1)); // false
print(s1.isStrictSuperset(of: s2)); // false
```
### 不相交判断
```swift
var s1 = Set([1, 2, 3])
var s2 = Set([4, 5])

print(s1.isDisjoint(with: s2)); // true
```
## 其他操作
### randomElement
```swift
var s1 = Set([1, 2, 3])

print(s1.randomElement()); // 2
```
### sorted
* 不改变原 Set
```swift
var s1 = Set([1, 2, 3])

print(s1.sorted(by: {$0 < $1})); // [1, 2, 3]
```