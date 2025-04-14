---
title: OC语法
date: 2025-04-14
--- 
## 编译
```sh
cc -c main.m
cc main.o -framework Foundation

# 集合
cc -framework Foundation -o main main.m
```
## OC特征
- OC支持所有c语言语法
- OC追加类型：
  - `BOOL`：`YES`和`NO`
  - `Boolean`：`true`和`false`，不推荐用
  - `class`：类，`NSObject`是所有类的父类
  - `SEL`：方法，`@selector(methodName)`
  - `id`：任意对象，`nil`
  - `block`：块，`^(int a, int b){}`
## 框架
- `#import`：增强版`#include`，只会引入一次
- `@property`：声明属性
- `@autoreleasepool`： 自动释放池

## NSLog
- 语法：`NSLog(@"%@",str);`，增强点：
  - 字符串前面添加`@`
  - 会自动换行
  - 可以打印OC新增数据类型的值

## NSString
:::tip
- 语法：`NSString *str = @"hello";`
- 注意点：
  - OC字符串前面添加`@`
  - 打印占位符：`NSLog(@"%@", str);`
  - 字符串初始化默认是`immutable`，不可修改，需要使用`mutableCopy`方法变成`mutable`
:::