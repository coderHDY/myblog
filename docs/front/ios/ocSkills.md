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
