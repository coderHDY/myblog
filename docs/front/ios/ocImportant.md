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
## 协议
::: tip
- 协议`protocol`就是一系列方法的声明
- 协议类似JAVA/Swift中的接口(interface)，用于规定类哪些方法必须实现，哪些方法可选实现
- 协议可以多遵守：`@interface Baby : NSObject <protocolName1, protocolName2>`
- `@required`：（默认），必须实现的方法
- `@optional`：可选实现的方法
- 协议也可以遵守别的协议，比如：`@protocol protocolName <protocolName1, protocolName2, protocolName3>`
:::
## 委托模式
:::tip
- 委托模式：配合id声明某个属性遵守的协议，实现协议中的方法
:::
- 协议声明
  ```objc
  @protocol PersonAction <NSObject>
  @required
  - (void) eat;

  @optional
  - (void) sleep;
  @end
  ```
- 遵守协议类
  ```objc
  @interface Baby : NSObject <PersonAction>
  - (void) eat;
  - (void) sleep;
  @end
  ```
- `委托`协议类
  ```objc
  @interface Person : NSObject
  @property(nonatomic, strong) NSString *name;
  // 定义一个指针，遵守PersonAction协议
  @property(nonatomic, weak) id<PersonAction> delegate;
  - (void) babySleep;
  @end

  // 实现
  @implementation Person
  - (void) babySleep {
      [self.delegate sleep];
  }
  @end
  ```
- 泛型指针
  ```c
  id<PersonAction> id1 = [Student new];
  id<PersonAction, StudentAction> id2 = [Student new];
  ```

## 单例模式
::: tip
- 规范：单例模式需要提供一个`sharedInstance`方法，用于获取单例对象
:::
- interface
  ```objc
  @interface Person : NSObject
  @property(nonatomic, copy)NSString* name;
  + (instancetype)sharedInstance;
  @end
  ```
- implementation
  ```objc
  #import "Person.h"

  @implementation Person

  + (instancetype)sharedInstance {
      static Person *instance = nil;
      static dispatch_once_t onceToken;
      dispatch_once(&onceToken, ^{
          instance = [[self alloc] init];
      });
      return instance;
  }

  + (id)allocWithZone:(struct _NSZone *)zone {
      static Person *instance = nil;
      static dispatch_once_t onceToken;
      dispatch_once(&onceToken, ^{
          instance = [super allocWithZone:zone];
      });
      return instance;
  }

  // 如需支持拷贝（防止 copy 产生新实例）：
  - (id)copyWithZone:(NSZone *)zone {
      return self;
  }

  - (id)mutableCopyWithZone:(NSZone *)zone {
      return self;
  }
  @end
  ```
- 调用
  ```objc
  Person* p1 = [[Person alloc] init];
  Person* p2 = [[Person alloc] init];
  Person* p3 = [[Person alloc] init];

  NSLog(@"%p", p1); // 0x600000b1c070
  NSLog(@"%p", p2); // 0x600000b1c070
  NSLog(@"%p", p3); // 0x600000b1c070
  ```

## 字典转模型
::: tip
1. 创造可变数组来保存一个个模型对象
2. 遍历字典，创建模型对象，将字典中的数据赋值给模型对象
3. 将模型对象添加到可变数组中

- 每定义一个新模型，最好封装成一个方法`initWithDict`/`appWithDict`，传入字典，返回模型对象
:::
- `initWithDict`转换方法
```objc
- (instancetype)initWithDict:(NSDictionary *)dict {
    if (self = [super init]) {
        self.name = dict[@"name"];
        self.age = [dict[@"age"] intValue];
    }
    return self;
}

//appWithDict
+ (instancetype)appWithDict:(NSDictionary *)dict {
    return [[self alloc] initWithDict:dict];
}

// 调用
NSDictionary *dict = @{@"name": @"小明", @"age": @20};
Person *p1 = [[Person alloc] initWithDict:dict];
Person *p2 = [Person appWithDict:dict];
```