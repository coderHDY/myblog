---
title: Array
date: 2023-01-29
---
## 概念
* `数组`是`有序`数据的集。
* `集合`是`无序`、`无重复`数据的集。
* `字典`是`无序`的`键值对`的集。
## Array
* 初始化固定长度数组
    ```swift
    let b = Array(repeating: 0, count: 10000);
    print(b); // [0, 0, ...]
    ```
* 初始化`特定类型`的空数组
  ```swift
  let b: [String] = [];
  print(b); // []
  ```
## 拼接
* 必须要同类型才能拼接
```swift
let a: [Double] = [1, 2, 3, 4, 5, 6, 7]

let b = [8.0, 9.0];
print(a + b); // [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]
```
## count
```swift
let a: [Double] = [1, 2, 3, 4, 5, 6, 7]
print(a.count); // 7
```
## 相等
* 可以用`==`或`elementsEqual`判断两个数组的`元素和顺序相等`
```swift
var a = [1, 2, 3, 4, 5, 6, 7]
var b = [1, 2, 3, 4, 5, 6, 7]

print(a == b) // true
print(a.elementsEqual(b)) // true
```
## 增删改查
### contains
* 单值包含
    ```swift
    var a = [1, 2, 3, 4, 5, 6, 7]

    let b = a.contains(3)
    print(b); // true
    ```
* 复杂条件包含
    ```swift
    var a = [1, 2, 3, 4, 5, 6, 7]

    let b = a.contains(where: {$0 > 8})
    print(b); // false
    ```
### starts
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.starts(with: [1, 2, 3])

print(b); // true
```
### first
* 第一个符合计算函数的值
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.first(where: {$0 > 2}) ?? -1
print(b); // 3
```
### last
* 最后一个符合计算函数的值
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.last(where: {$0 < 5}) ?? -1
print(b); // 4
```
### lastIndex
* 最后一个匹配下标
```swift
var a = [1, 2, 3, 4, 5, 6, 3]

let b = a.lastIndex(of: 3) ?? -1
print(b); // 6
```
### firstIndex
* 第一个匹配下标
```swift
var a = [1, 2, 3, 4, 5, 6, 3]

let b = a.firstIndex(of: 3) ?? -1
print(b); // 2
```
### append
```swift
var a: [Double] = [1, 2, 3, 4, 5, 6, 7]
a.append(8)
print(a); // [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]
```
>同
```swift
var a: [Double] = [1, 2, 3, 4, 5, 6, 7]
a += [8]
print(a); // [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]
```
### 区间替换
* 单个字符替换
    ```swift
    var a = [1, 2, 3, 4, 5, 6, 7]
    a[3] = 10
    print(a); // [1, 2, 3, 10, 5, 6, 7]
    ```
* 区间替换(相当于JS的`splice`)，删除指定位数并插入数组
    ```swift
    var a = [1, 2, 3, 4, 5, 6, 7]
    a[3...4] = [10, 11, 199]
    print(a); // [1, 2, 3, 10, 11, 199, 6, 7]
    ```
### replaceSubrange
* 写法没有`区间替换`写法简洁
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

a.replaceSubrange(0...2, with: [0, 0])
print(a); // [0, 0, 4, 5, 6, 7]
```
### swapAt
* 两个元素换位置
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

a.swapAt(2, 3)

print(a); // [1, 2, 4, 3, 5, 6, 7]
```
### partition
* 查询`不满足`给定条件的`数量`
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.partition(by: {$0 > 1})

print(b); // 1
```
### insert
* 单个字符插入
    ```swift
    var a = [1, 2, 3, 4, 5, 6, 7]
    a.insert(100, at: 3)
    print(a); // [1, 2, 3, 100, 4, 5, 6, 7]
    ```
* 多个字符插入
    ```swift
    var a = [1, 2, 3, 4, 5, 6, 7]
    a.insert(contentsOf: [100, 101], at: 3)
    print(a); // [1, 2, 3, 100, 101, 4, 5, 6, 7]
    ```
* 头部插入
    ```swift
    var a = [1, 2, 3, 4, 5, 6, 7]
    a.insert(0, at: 0)
    print(a); // [0, 1, 2, 3, 4, 5, 6, 7]
    ```
### remove
* 移除指定下标项
```swift
var a = [1, 2, 3, 4, 5, 6, 7]
a.remove(at: 3)
print(a); // [1, 2, 3, 5, 6, 7]
```
### removeSubrange
* 移除下标区间
```swift
var a = [1, 2, 3, 4, 5, 6, 7]
a.removeSubrange(1...3)
print(a); // [1, 5, 6, 7]
```
### removeAll
```swift
var a = [1, 2, 3, 4, 5, 6, 7]
a.removeAll(where: {$0 < 3})
print(a); // [3, 4, 5, 6, 7]
```
### removeLast
* 移除最后一个
```swift
var a = [1, 2, 3, 4, 5, 6, 7]
a.removeLast()
print(a); // [1, 2, 3, 4, 5, 6]
```
### removeFirst
* 移除第一个
```swift
var a = [1, 2, 3, 4, 5, 6, 7]
a.removeFirst()
print(a); // [2, 3, 4, 5, 6, 7]
```
### suffix
* 获取`末尾固定位数`的`新数组`
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.suffix(3)

print(b); // [5, 6, 7]
```
## 遍历
### for-in
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

for i in a {
  print(i); // 1234567
}
```
### enumerated
* 转化成`区间`[(idx, val)...]
```swift
var a = [1, 2, 3]

for (idx, val) in a.enumerated() {
  print("index是\(idx), value 是\(val)")
}

//index是0, value 是1
//index是1, value 是2
//index是2, value 是3
```
### indices
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

for idx in a.indices {
    print(idx); // 0123456
}
```
### forEach
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

a.forEach({print($0)}) // 1234567
```
### 反向遍历
```swift
var a = [1, 2, 3, 4, 5, 6, 7]
a.reversed().forEach({print($0)}); // 7654321
```
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

for i in a.reversed() {
    print(i); // 7654321
}
```
## 其他操作
### sort
* 传入函数返回值确定 `$0是否在前面`
* 不改变原数组
```swift
var a = [1, 6, 3, 4, 2, 5]

let b = Array(a.sorted(by: {$0 < $1}))
print(b); // [1, 2, 3, 4, 5, 6]
```
### filter
* 不改变原数组
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.filter({$0 % 2 != 0})
print(b); // [1, 3, 5, 7]
```
### map
* 不改变原数组
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.map({$0 % 2 == 0 ? "偶" : "奇"})
print(b); // ["奇", "偶", "奇", "偶", "奇", "偶", "奇"]
```
### reduce
* 不改变原数组
* 参数与js相反，`$0初始值`，`$1计算函数`
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.reduce(100, {$0 + $1})
print(b); // 128
```
### compactMap
* 与`map`用法相同，但是返回的一定是非空项，否则就剔除掉
```swift
var a = [1, 2, 3, 4, 5, 6, 3]

let b = a.compactMap({$0 > 3 ? $0 : nil})
print(b); // [4, 5, 6]
```
### compactMap
* `map` + `flat`功能
```swift
var a = [1, 2, 3, 4, 5, 6]

let b = a.flatMap({Array(repeating: $0, count: $0)})
print(b); // [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]
```
### reversed
* 逆转后只是用的原数组引用，如果要生成新数组要用`Array`
```swift
var a = [1, 2, 3, 4, 5, 6]

let b = Array(a.reversed())
print(b); // [6, 5, 4, 3, 2, 1]
```
### max
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.max()!
print(b); // 7
```
### min
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.min()!
print(b); // 1
```
### prefix
* 相当于`获取区间`，得到subSequence
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.prefix(3)
let c = a[0...2]

print(b); // [1, 2, 3]
print(c); // [1, 2, 3]
```
### randomElement
* 随机获取数组的一个元素
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.randomElement()!

print(b); // 1
```
### shuffled
* `洗牌`函数
```swift
var a = [1, 2, 3, 4, 5, 6, 7]

let b = a.shuffled()

print(b); // [5, 3, 2, 4, 6, 7, 1]
```