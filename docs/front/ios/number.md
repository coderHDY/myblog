---
title: Number
date: 2023-01-29
---
## 基础写法
* 可以用下划线分割长数字
```swift
let a = 100_0000_0000;
print(a); // 10000000000
```

## distance
* 相当于`100 - 30`
```swift
let a = 30;
let dis = a.distance(to: 100)

print(dis); // 70
```
## advanced
* 相当于`40 + 10`
```swift
let a = 40;
let dis = a.advanced(by: 10)

print(dis); // 50
```
## negate
* 相当于`-40`
```swift
var a = 40;
a.negate()
print(a); // -40
```
## pow
* `a` 的 `b` 次方
```swift
print(pow(2, 4)) // 16
```
## abs
* 绝对值
```swift
print(abs(-30)) // 30
```
## min
* 最小值
```swift
print(min(10, 30)) // 10
```
## max
* 最大值
```swift
print(max(10, 30)) // 30

print(max(1, 2, 2,4, 5, 5,6,6,9)) // 9
```