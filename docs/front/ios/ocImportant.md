---
title: OC核心内容
date: 2025-04-20
---
## 分类
::: tip
- 应用场景：
  - 方法过多的时候，使用`category`进行分类
  - 可以给已有的第三方库/系统库类做扩展
- 分类可以给类添加方法，但是**不能添加属性**
- 操作流程：`新建` -> `Object-C file` -> `Category` -> `选择基础类` -> `确定`
:::
```objc
#import "Person.h"
#import "Person+action.h"

Person* p1 = [Person new];
p1.name = @"小明";
p1.age = 20;
[p1 haha];
```

## Extension
:::tip
- `Extension`是OC的一个特殊的分类，只有声明没有实现
- 特殊：延展中**可以创建方法和属性**
- 使用场景：
  - 写在本类的实现中，可以给本类添加**私有属性和私有方法**
:::
```objc
#import "Person.h"

// 延展的内部属性
@interface Person ()
{
  int _playYears;
}
@property NSString *lol;
- (void)sing;
@end

// 本类的方法实现
@implementation Person
- (void)sing {
    self.lol = @"亚索";
    NSLog(@"%@", self.lol);
    NSLog(@"唱歌");
}
@end
```