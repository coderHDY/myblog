---
title: String
date: 2022-10-13
---
## index
* [String index设计原理](https://kemchenj.github.io/2019-10-07/)

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
```
