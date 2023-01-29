---
title: Dictionary
date: 2023-01-29
---
## 基础使用
* 键值对(类似JS对象)
* 所有键需要是相同的类型
* 所有值需要是相同的类型
```swift
var d: [String: String] = [:]

print(d); // [:]
```
```swift
var d = ["name": "小黄"]

print(d); // ["name": "小黄"]
```
## count
```swift
var d = ["name": "小黄", "age": "18"]

print(d.count); // 2
```
## updateValue
* `新增`或`修改`键值对
* updateValue新增成功会返回nil
* updateValue修改成功会返回旧的value
```swift
var d = ["name": "小黄", "age": "18"]

// 更新，返回 old value
print(d.updateValue("小灰", forKey: "name")); // Optional("小黄")

// 新增，返回nil
print(d.updateValue("170", forKey: "height")); // nil

// 新增成功
print(d); // ["age": "18", "name": "小灰", "height": "170"]
```
* 同下标设置值
>下标设置不会有任何的限制
```swift
var d = ["name": "小黄", "age": "18"]

d["height"] = "170"

print(d); // ["name": "小黄", "age": "18", "height": "170"]
```
## remove
* 删除前首先要`确定包含`。去掉optional的可能
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

if let idx = d.index(forKey: "age") {
    let f = d.remove(at:  idx)
    print(f); // (key: "age", value: "18")
}

print(d); // ["name": "小灰", "height": "170"]
```
## removeValue
* 可以`不考虑是否包含`
* 返回删除的`值`
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

if let removeVal = d.removeValue(forKey: "age") {
    print(removeVal); // 18
}

print(d); // ["height": "170", "name": "小灰"]
```
* 同
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

d["age"] = nil
print(d); // ["name": "小灰", "height": "170"]
```
## removeAll
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

d.removeAll()
print(d); // [:]
```
## contains
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

print(d.contains(where: {$0 == "age" && $1 == "18"})); // true
```
## filter
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

let f = d.filter({$0.key == "name" && $0.value == "小灰"})
print(f); // ["name": "小灰"]
```
## reduce
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

print(d.reduce("", {"我的\($1.key)是\($1.value), \($0)"})); // 我的height是170, 我的name是小灰, 我的age是18,
```
## 遍历
### for-in
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

for (k, v) in d {
    print("\(k)：\(v)")
}

//name：小灰
//age：18
//height：170
```
### keys
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

for k in d.keys {
    print(k)
}

//age
//height
//name
```
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

print(d.values); // ["170", "18", "小灰"]
```
### values
```swift
var d = ["age": "18", "name": "小灰", "height": "170"]

for v in d.values {
    print(v)
}

//18
//小灰
//170
```