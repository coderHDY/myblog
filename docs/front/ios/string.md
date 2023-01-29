---
title: String
date: 2023-01-27
---
## 基础使用
* 其他操作无法隐式转换
    ```swift
    let label = "The width is "
    let width = 94

    //let widthLabel = label + width // 报错

    let widthLabel = label + String(width) 正确

     print(widthLabel)
    ```
* 换行String
    ```swift
    let apples = 3
    let oranges = 5
    let q = """
    I said "我有 \(apples) 个苹果"
    我有 \(apples + oranges) 个水果"
    """

    print(q)
    ```
* 通过数组初始化
    ```swift
    let catCharacters: [Character] = ["C", "a", "t", "!", "🐱"]
    let catString = String(catCharacters)
    print(catString) // Cat!🐱
    ```

## 获取字符串
### for...in遍历
```swift
let s = "Hello, World!"

for i in s {
    print(i)
}
```
### 下标遍历
* 正向遍历 
    ```swift
    let a = "abcdefg";

    for i in (0..<a.count) {
        let char = a[a.index(a.startIndex, offsetBy: i)]
        print(char) // a b c d e f g
    }
    ```
* 反向遍历
    ```swift
    let a = "abcdefg";

    for i in (0 ..< a.count).reversed() {
        let char = a[a.index(a.startIndex, offsetBy: i)];
        print(char); // g f e d  c b a
    }
    ```
### count
* 长度
```swift
let s = "abcdefg";
print(s.count); // 7
let c = s.1;
print(c);
```
### 下标
* [String index设计原理](https://kemchenj.github.io/2019-10-07/)
```swift
var a = "abcdefg";

// 第三位访问，下标是2
let b = a[a.index(a.startIndex, offsetBy: 2)] // 2就是下标
print(b); // c

// 最后一位访问
let c = a[a.index(before: a.endIndex)]
print(c); // g

// 第一位访问
let d = a[a.startIndex]
print(d); // a

// 倒数第三位访问
let f = a[a.index(a.endIndex, offsetBy: -3)]
print(f); // e
```
### 区间
* 拿到3 ～ 5的区间（按照下标的原理，是`下标3` ～ `下标5`）
    ```swift
    var me = "你好呀我是西瓜皮儿"

    print(me[me.index(me.startIndex, offsetBy: 3)...me.index(me.startIndex, offsetBy: 5)]) // 我是西
    ```
* 拿到0 ～ -2位区间
    ```swift
    let a = "abcdefg";

    let start = a.startIndex;
    let end = a.index(a.endIndex, offsetBy: -2);

    print(a[start ... end]); // abcdef
    ```
### indices
* 获取字符串的整体`索引范围range`
```swift
var a = "abcdefg";

for idx in a.indices {
    let b = a[idx]
    print(b) // a b c d e f g
}
```
## 增删改查
### 拼接
* 拼接，两种方法
  * 【+】号只能做字符串类型的拼接
  * 【\ ()】可以拼接任意类型
>+号 
```swift
var me = "123"
me += "4"
print(me) // 1234
```
>【\ ()】
```swift
let apples = 3
let oranges = 5

let fruitSummary = "我有 \(apples + oranges) 个水果."

print(fruitSummary); // 我有 8 个水果.
```
### append
```swift
var me = "123"
me.append("4")
print(me) // 1234
```
### firstIndex
* 拿到第一个需求字符的index，类型是`Index`
* 只接收单个字符
```swift
var me = "你好呀我是西瓜皮儿"

let firstYa = me.firstIndex(of: "呀")

print(firstYa) // Optional(Swift.String.Index(_rawBits: 393985))

print(me[firstYa!]) // 呀
```
### lastIndex
* 拿到倒数第一个需求字符的index，类型是`Index`
* 只接收单个字符
```swift
var me = "你好呀我是西瓜皮儿呀"

let firstYa = me.lastIndex(of: "嘿")

if let firstYa {
    print(me[firstYa]) // 呀
}
```

### insert
>注：修改原字符串
* 插入单个字符
    ```swift
    var s = "abcdefg";
    s.insert("h", at: s.endIndex)
    print(s) // abcdefgh
    ```
* 插入多个字符
    ```swift
    var s = "abcdefg";
    s.insert(contentsOf: "hhhh", at: s.endIndex)
    print(s) // abcdefghhhh
    ```
### contains / hasPrefix / hasSuffix
```swift
let s = "abcdefg";

// 单个包含
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
### remove
* 注：会改变原字符串
```swift
var a = "abcdefg";

a.remove(at: a.index(a.startIndex, offsetBy: 2))
print(a) // abdefg
```
### removeSubrange
```swift
var me = "你好呀我是西瓜皮儿呀"

me.removeSubrange(me.startIndex...me.index(me.startIndex, offsetBy: 3))

print(me); // 是西瓜皮儿呀
```
### replaceSubrange
* 下标替换
```swift
var a = "abcdefg";

a.replaceSubrange((a.startIndex ... a.index(a.endIndex, offsetBy: -2)), with: "xxxxxx");
print(a); // xxxxxxg
```
### replacingOccurrences
* 指定匹配替换（返回新String）
* 全部替换
```swift
var me = "我说：你好呀我是西瓜皮儿呀"

let b = me.replacingOccurrences(of: "我", with: "小黄")

print(b) // 小黄说：你好呀小黄是西瓜皮儿呀
```
### prefix
* Substring 的实例：截取前固定位数的字符串，相当于从首字母获取固定长度区间
>Swift 里的 Substring 绝大部分函数都跟 String 一样，意味着你可以使用同样的方式去操作 Substring 和 String。然而，跟 String 不同的是，你只有在短时间内需要操作字符串时，才会使用 Substring。当你
>Substring占用了原String储存空间，
```swift
let s = "abcdefg";

print(s.prefix(3)); // abc

// 同
print(String(s[s.startIndex...s.index(s.startIndex, offsetBy: 2)])); // abc
```
* Substring转String
    ```swift
    var a = "abcdefg";

    let b = a.prefix(a.count)

    a.remove(at: a.startIndex)
    print(a) // bcdefg
    print(b) // abcdefg

    let c = String(b);
    print(c); // abcdefg
    ```
## 其他操作

### lowercased
* 转小写
```swift
var me = "Aksld3B"
let lowerMe = me.lowercased()
print(lowerMe) // aksld3b
```
### uppercased
* 转大写
    ```swift
    var me = "Aksld3B"
    let upperMe = me.uppercased()
    print(upperMe) // AKSLD3B
    ```
* 首字母大写
    ```swift
    var me = "aksld3B"

    func upperFirstChar(_ s: String) -> String {
        var firstChar = String(s[s.startIndex])
        firstChar = firstChar.uppercased();
        var a = s;
        a.replaceSubrange(a.startIndex...a.startIndex, with: firstChar)
        return a;
    }
    let upperMe = upperFirstChar(me);
    print(upperMe) // Aksld3B
    ```
### isEmpty
* 相对于 == ""，可以让代码更少字符串
    ```swift
    var a = "abcdefg";
    var b = "";

    print(a.isEmpty) // false
    print(a == "") // false

    print(b.isEmpty) // true
    print(b == "") // true
    ```
### 特殊解析
* 【\ "】可以解析包含双引号
    ```swift
    var a = "\"abcdefg\"";

    print(a); // "abcdefg"
    ```
* 【# "】可以不解析内部【\ ()】语法
    ```swift
    var name = "小黄"
    var a = #"abcdefg\(name)"#;

    print(a); // abcdefg\(name)
    ```
