---
title: ios入门
date: 2022-10-11
---
## 常用命令
* 查看swift版本
    ```swift
    xcrun swift -version
    ```
## 类型
### 基础数据类型
::: tip
* Int
* Float
* Double
* Bool
* Character(单个字符，包括汉字)
* String
* Optional(可选类型)：可能有值，可能为`nil`
:::
>声明赋值可自动推断类型
```swift
var a:String = "你好";
var b = true;

// 可选类型
var c: String? = nil;
c = "123";
```
### 类型推断
::: tip
* 变量：`var`
* 常量：`let`
* 输出：
* 类型推断：
* 判断数据类型：
* 类型转换(构造器)：String(true)
* 类型别名：`typealias`
:::
```swift
// 类型别名
typealias C = Int;
let c: C = 1;
```
```swift
// 转换类型 ：?? 处理空值 nil
let c: String = "asdf";
var b = Int(c) ?? 100;

print(b);
```
## String
::: warning
* 拼接，两种方法
  * 【+】号只能做字符串类型的拼接
  * 【\ ()】可以拼接任意类型
:::
```swift
print("1 + 1 = \(1 + 1)")
print("1 + 1 =" + "2")
print("1 + 1 = " + String(1 + 1));
```
## Int/Float/Double
* 数字**可以用下划线分割**方便展示
```swift
var a = 1_000_0000_0;
print(a)

var b = 1_00.0_0000_0;
print(b)
```
## Optional可选类型
* 可选类型：**类型不固定，可能为nil**
```swift
var a: Int? = 100;
print(a); // Optional(100)
```
* 必有值写法，并且`返回类型不再是可选`
```swift
var a: Int?;
a = 100;
print(a!); // 100
```
## 元组
* 作用：将不同的数据类型封装到一起
* 规则：
    * 下标取值
    * 赋值是值拷贝
    * 
```swift
var a = (1, 2, 3, "哈哈哈");

var b: (Int, String) = (10, "10");

print(b.0);
```
* 拷贝传递
```swift
var b: (Int, String) = (10, "10");
var a = b;
b.0 = 20;

print(a);
print(b);
```