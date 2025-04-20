---
title: OC开发技巧
date: 2025-04-17
---
## 小技巧
- 重写`description`方法可以自定义打印对象
```c
@implementation Student
- (NSString *)description {
    NSString *des =
        [NSString stringWithFormat:@"啦啦啦啦啦，我是一个人 %p", self];
    return des;
}
@end


Student* stu = [Student new];
NSLog(@"%@", stu); // 啦啦啦啦啦，我是一个人 0x6000000d80d0
```

## SEL消息机制
- `SEL`是`Objective-C`中的一个类型，用于表示方法名，它实际上是一个`C`语言中的`指针`，指向一个`C`函数的`函数名`。
- `@selector`用于获取一个方法的`SEL`。
- `performSelector:`用于执行一个`SEL`对应的方法。
- **将SEL对象作为一个消息发送给一个对象，就是命令该对象执行该对象的方法。**
```c
Student* stu = [Student new];
SEL s1 = @selector(sayHi);
[stu performSelector:s1];

// 带参数
SEL s2 = @selector(sayHi:);
[stu performSelector:s2 withObject:@"hello"];
```

## OC中的点语法
- 只是简写了`getter`和`setter`
- **获取和使用的时候去掉属性的下划线**
```c
Student* stu = [Student new];
stu.name = @"hello";
NSLog(@"%@", stu.name);
```

## 强制类型转换
```c{3}
Person* s = [Student new];
s.name = @"小花";
[(Student *)s study:@"数学"];
```

## @class
- `@class`用于声明一个类，它告诉编译器这个类已经定义了，但编译器不知道这个类的具体实现。
- 作用：在循环引用的时候，在`.h`文件内用`@class`声明，在`.m`文件用`#import`

## @property
- `@property`相当于`getter`和`setter`的简写，可以省略`getter`和`setter`的**声明和实现**
- 名字需要去掉下划线。`@property NSString* name`
    ```c
    // 声明
    @interface Person : NSObject
    @property NSString* name;
    @end

    Person* p = [Person new];
    p.name = @"小明";
    NSLog(@"%@", p.name);
    ```



## OC 中的 `@property` 参数
:::tip
原子性（Atomicity）
- `atomic`（默认）：线程安全，但性能较低。
- `nonatomic`：非线程安全，性能更高，**实际开发中多数使用**。
:::
```objc
@property (atomic) NSString *name;
@property (nonatomic) NSString *name;
```
:::tip
二,内存管理（Memory Management）

| 参数                              | 含义                                   | 使用场景                 |
| --------------------------------- | -------------------------------------- | ------------------------ |
| `strong`(默认)/`retain`(MRC only) | 强引用，引用计数 +1                    | 常用于对象类型           |
| `weak`                            | 弱引用，不会增加引用计数，自动设为 nil | 常用于代理、避免循环引用 |
| `assign`                          | 简单赋值，不管理内存(避免循环引用)     | 常用于基本数据类型       |
| `copy`                            | 复制一份对象，防止原对象被改动         | 常用于 NSString、Block   |
:::
```objc
@property (strong, nonatomic) NSString *title;
@property (weak, nonatomic) id<SomeDelegate> delegate;
@property (assign, nonatomic) NSInteger age;
@property (copy, nonatomic) NSString *name;
```

::: tip
三、访问权限（Access Control）
:::

- `readwrite`（默认）：生成 getter 和 setter。
- `readonly`：只生成 getter，不生成 setter。

```objc
@property (readonly, nonatomic) NSString *token;
@property (readwrite, nonatomic) NSString *username;
```

:::tip
四、自定义方法名（可选）
- `getter=xxx`：自定义 getter 方法名。
- `setter=xxx:`：自定义 setter 方法名。
:::

```objc
@property (getter=isOpen, nonatomic) BOOL open;
```

使用方式：
```objc
if (self.isOpen) {
    // do something
}
```

- 示例
```objc
@interface Person : NSObject

@property (nonatomic, strong) NSString *name;
@property (nonatomic, assign) NSInteger age;
@property (nonatomic, copy, readonly) NSString *ID;
@property (nonatomic, weak) id delegate;
@property (getter=isOnline, nonatomic) BOOL online;

@end
```

## ARC项目参入MRC组件
- 在`Build Phases`中添加`Compile Sources`，选择`MRC`组件的`.m`文件，双击写入`-fno-objc-arc`