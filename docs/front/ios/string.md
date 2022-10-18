---
title: String
date: 2022-10-13
---
## index
* [String index设计原理](https://kemchenj.github.io/2019-10-07/)
## count
* 长度
```swift
let s = "abcdefg";
print(s.count); // 7
let c = s.1;
print(c);
```
## 下标
```swift
let s = "abcdefg";

print(s[s.startIndex]);                        // a
print(s[s.index(before: s.endIndex)]);         // g

// 下标为 2 的项
print(s[s.index(s.startIndex, offsetBy: 2)]);  // c
```
## 获取区间
```swift
let s = "abcdefg";

let start = s.startIndex;
let end = s.index(s.endIndex, offsetBy: -2);

print(s[start ... end]); // abcdef
```
## findIndex
```swift
let s = "abcdefg";

let first = s.firstIndex(of: "e") ?? s.endIndex;

print(s[first]); // e
print(s[s.startIndex ... first]); // abcde
```
## prefix
```swift
let s = "abcdefg";
let first = s.firstIndex(of: "e") ?? s.endIndex;
print(s.prefix(3)); // abc
```
## 包含
```swift
let s = "abcdefg";
print(s.contains("g")); // true
print(s.contains("h")); // false

// 连续包含
print(s.contains("abc")); // true
print(s.contains("ac")); // false

// 分别包含
print(s.contains(where: String.contains("ac"))); // true

// 前缀
print(s.hasPrefix("abc")); // true
print(s.hasPrefix("ac")); // false

// 后缀
print(s.hasSuffix("fg")); // true
print(s.hasSuffix("f")); // false
```
## 插入
```swift
var s = "abcdefg";

s.insert(contentsOf: "zzz", at: s.index(s.startIndex, offsetBy: 2));
print(s); // abzzzcdefg
```
## 替换
* 下标替换
    ```swift
    var s = "abcdefg";

    s.replaceSubrange((s.startIndex ... s.index(s.endIndex, offsetBy: -3)), with: "xxxxxx");
    print(s); // xxxxxxfg
    ```
* 指定匹配替换（返回新String）
    ```swift
    var s = "abcdefg";

    let newS = s.replacingOccurrences(of: "de", with: "哈哈哈");
    print(newS); // abc哈哈哈fg
    ```
## 删除
```swift
var s = "abcdefg";

s.remove(at: s.startIndex);
print(s); // bcdefg
```
```swift
var s = "abcdefg";

// 删除 3 ～ -2 位
s.removeSubrange(s.index(s.startIndex, offsetBy: 2) ... s.index(s.endIndex, offsetBy: -3));
print(s); // abg
```
## 遍历
```swift
var s = "abcdefg";

// 直接遍历
for i in s {
    print(i);  // a b c d e f g
}

// 下标遍历
for i in (0 ..< s.count) {
    print(s[s.index(s.startIndex, offsetBy: i)]); // a b c d e f g
}

// 反向遍历
for i in (0 ..< s.count).reversed() {
    print(s[s.index(s.startIndex, offsetBy: i)]); // g f e d  c b a
}
```
## 其他
* 富文本
    ```swift
    var s = """
    <h1>
        你好
    </h1>
    """
    print(s);
    ```
* 标识位引号
    ```swift
    var s = #""你好""""#
    print(s); // "你好"""
    ```