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
  - `nil`: 空指针，存空的OC新类型，`nil`
  - `SEL`：方法，`@selector(methodName)`
  - `id`：任意对象，`nil`
  - `block`：块，`^(int a, int b){}`
- 赋空值使用建议：
  - `nil`：OC类型的空指针
  - `NULL`：c基础类型的空指针
- 弱指针：`weak`，弱指针，循环引用时其中一个指针用`week`不作为引用计数指针，不会造成循环引用
## 框架
- `#import`：增强版`#include`，只会引入一次
- `@property`：声明属性
- `@autoreleasepool`： 自动释放池

## NSLog
- 语法：`NSLog(@"%@",str);`，增强点：
  - 字符串前面添加`@`
  - 会自动换行
  - 可以打印OC新增数据类型的值

## @autoreleasepool
- 只有在`MRC`的情况下使用
- 语法：`@autoreleasepool{...}`，自动释放池，不会出现内存泄漏，但是会降低性能，所以不要滥用
- 存入自动释放池方法：`[[Person new] autorelease]`
- 自动释放池大括号结束的时候，自动释放池会自动调用`[obj release]`对象
- `规范`:init方法初始化参数，类同名方法调用init方法同时调用`autorelease`
  - `[[[self alloc] initWithName: name andAge: age] autorelease]`

## 类
::: tip
- 规范：类属姓名都以下划线开头`NSString *_name;`
- 类属性默认外部不可访问的，需要访问，使用`@public`关键字
- 方法头的**数据类型都要用小括号括起来**:`- (void)eat:(NSString*) food;`
- 属性修饰符
  - `@private`：私有属性，外部不可访问
  - `@protected`：**默认属性**，受保护的属性，外部不可访问，但子类可以访问
  - `@package`：当前的框架中访问
  - `@public`：外部可访问
  - `@readonly`：只读属性，外部不可修改，但子类可以修改
  - 属性修饰符使用建议：最小权限法则
- 可以在`@implementation`中声明属性，让属性完全私有，外界`xcode`都不会提示
- `私有方法`：只写实现不写声明
- `new`是创建对象的简写，`alloc`是创建对象，`init`是初始化对象，`initWithXxx`是初始化对象的方法
:::
:::warning
- 类名：首字母大写，驼峰式命名
- 类不可以在声明的时候给属性赋值的
:::
- 类对象里面有个属性`isa`，用来指向当前对象的类。作用是调用方法时通过指针找到对应的Person类
- `规范`：内部属性访问写`getter`和`setter`
  ```objc
  @interface Person : NSObject
  {
      NSString* _name;
      int _age;
  }
  - (void)initWithName:(NSString*)name age:(int)age;
  - (void)setAge:(int)age;
  - (int)age;
  - (void)setName:(NSString *)name;
  - (NSString *)name;
  - (void)showInfo;
  @end
  ```
- new方法的完整语法：`[[Person alloc] init]`
- **init方法重写规范**:先调用父对象`init`，先判断是否成功，再初始化值
  ```objc
  - (instancetype)init {
    if (self = [super init]) {
        self.name = @"小明啊";
    }
    return self;
  }
  ```
- 带参数的init，默认没有带参数`init`的声明，所以需要**在声明中添加**，并且带的参数必须用`initWithXxx:(xx)xx andXXX:(zz)zz`
  ```objc
  @interface Student : NSObject
  @property NSString* name;
  @property int age;
  - (instancetype)initWithName:(NSString *)name andAge:(int)age;
  @end

  // 实现
  - (instancetype)initWithName:(NSString *)name andAge:(int)age {
      if (self = [super init]) {
          self.name = name;
          self.age = age;
      }
      return self;
  }

  // 调用
  Student *s3 = [[Student alloc] initWithName:@"小红" andAge:20];
  NSLog(@"%@", s3.name);
  NSLog(@"%d", s3.age);
  ```
- 对象被回收的方法：`dealloc`，不用的对象会自动回收，不需要手动释放
## 对象方法
:::tip
- 规范
  - 如果只有一个参数，最好命名叫`xxWithFood`，例：`- (void)eatWithFood:(NSString*) food;`
  - 如果有多个参数，最好每个参数都加个`andXxx`前缀说明，例：`- (void)runWithSpeed:(int) speed andDirection:(int) direction;`
- 分组导航标记：可以在顶部快速找到指定方法
  - `#pagma mark Person类的实现`：导航位置添加注释
  - `#pragma mark -`：导航位置添加分割线
  - `#pragma mark - Person类的声明`：导航位置添加分割线再添加注释
- 方法内调用自身其他方法：`[self doSomething]`
:::
```swift
/**** 声明 *****/
@interface Person : NSObject
// 声明属性，定义在类的接口部分，类属姓名都以下划线开头
{
    // 外部可访问的属性：@public
    @public
    NSString *_name;
    int _age;
    float _height;
}
// 无参数方法
- (void)run;
// 一个参数
- (void)eat:(NSString*) food;
// 多个参数
- (void)add:(int)num1 :(int)num2;
// 多个参数说明
- (void)addWithNum1:(int)num1 andNum2:(int)num2;
@end
/***** 声明结束 *****/

/***** 实现 *****/
#pagma mark Person类的实现
@implementation Person : NSObject
- (void)run {
    NSLog(@"我在跑步");
}
- (void)eat:(NSString*) food {
    NSLog(@"我在吃%@", food);
}
- (void)add:(int)num1 :(int)num2 {
    NSLog(@"%d + %d = %d", num1, num2, num1 + num2);
}
- (void)addWithNum1:(int)num1 andNum2:(int)num2 {
    NSLog(@"%d + %d = %d", num1, num2, num1 + num2);
    // 调用自身方法
    [self run];
}
@end
/***** 实现结束 *****/

int main(int argc, const char * argv[]) {
    Person* p1 = [Person new];
    p1->_name = @"张三";
    p1->_age = 17;
    p1->_height = 1.75;
    NSLog(@"%@", p1->_name);

    [p1 run];
    [p1 eat:@"apple"];
    [p1 add:1 :2];
    [p1 addWithNum1:1 andNum2:2];

    return 0;
}
```
## 类方法
- 类方法使用`+`开头
- 调用类方法使用：类名调用
```objc
@interface MyPoint : NSObject
+ (void)sayHaha;
@end

[MyPoint sayHaha];
```
- `规范`：写一个类，要创建一个同名的类方法，用来初始化对象。
- `规范`：创建的参数名字要用`类名WithXxx`的形式
- `规范`：类方法返回值如果是当前类的对象，那么返回值类型用`instancetype`
```objc
// 定义
@interface MyPoint : NSObject
{
    @public
    double _x;
    double _y;
}
+ (MyPoint *)myPoint;
+ (MyPoint *)myPointWithX:(double)x y:(double)y;
+ (void)sayHaha;
@end

// 实现
@implementation MyPoint
+ (instancetype)myPoint {
  MyPoint *p = [MyPoint new];
  return p;
}
+ (instancetype)myPointWithX:(double)x y:(double)y {
    MyPoint *p = [MyPoint new];
    p->_x = x;
    p->_y = y;
    return p;
}
+ (void)sayHaha {
    NSLog(@"哈哈哈");
}
@end

// 调用
[Person person];
```
## 复制源文件到工程目录
- 从文件夹中选中要复制的`.h`文件和`.m`文件
  - 拖拽到工程目录中
  - 选择`Copy items if needed`
  - 选择`Create groups`
  - 点击`Finish`

## try catch
```objc
@try {}
@catch(NSException *exception) {}
@finally {}
```

## static关键字
- oc中，`static`关键字用于修饰类方法变量，该变量**不会回收**，`所有对象共用一个值`

## self
- 在**对象方法中**，`self`表示当前对象本身
- 在**类方法中**，`self`表示当前类本身


## 继承
- 子类能够重写父类的方法，但是不能重写父类的属性
- `super`指针，调用继承的方法`[super methodName]`

## 多态
- 父类指针指向子类对象
- 父对象指针的子类方法重写了，父指针调用的是**子类重写后的方法**
## id指针
- `id`指针，可以指向任何对象，通过id指针调用方法的时候，编译器不会做任何检查
- `id`指针不能使用点语法
- 也可以使用`NSObject*`声明任意对象，编译会做类型检查
```objc
id obj = [Student new];
[obj setName:@"小红"];
NSLog(@"%@", [obj name]);
```

## respondsToSelector/instancesRespondToSelector
- `respondsToSelector:`方法，判断当前对象是否实现了该方法
  ```objc
  Person* p1 = [Person new];
  if ([p1 respondsToSelector:@selector(length)]) {
      [p1 performSelector:@selector(length)];
  } else {
      NSLog(@"p1没有sayHi方法");
  }
  ```
- `instancesRespondToSelector:`方法，判断当前对象是否实现了该**类方法**
  ```objc
  if ([Student instancesRespondToSelector: @selector(study:)]) {
      NSLog(@"Student类的实例可以调用study方法");
  } else {
      NSLog(@"Student类的实例不能调用study方法");
  }
  ```

## isKindOfClass/isMemberOfClass/isSubclassOfClass
- `isKindOfClass:`方法，判断当前对象是否是**该类或子类的实例**
- `isMemberOfClass:`方法，判断当前对象是否是**该类的实例**
  ```objc
  Person* s1 = [Student new];
  if ([s1 isKindOfClass: [Person class]]) {
      NSLog(@"p1是Person类的对象"); // 输出
  } else {
      NSLog(@"p1不是Person类的对象");
  }

  if ([s1 isMemberOfClass: [Person class]]) {
      NSLog(@"p1是Person类的对象");
  } else {
      NSLog(@"p1不是Person类的对象"); // 输出
  }
  ```
- `isSubclassOfClass`：判断当前类是否是**该类的子类**
  ```objc
  if ([Student isSubclassOfClass: [Person class]]) {
      NSLog(@"Student是Person类的子类");
  } else {
      NSLog(@"Student不是Person类的子类"); // 输出
  }
  ```
## MRC和ARC
::: tip
- `MRC`和`ARC`都是管理内存的方法
- MRC：Manual Reference Counting，**手动引用计数**
- ARC：Automatic Reference Counting，**自动引用计数**
- ARC：编译器自动管理内存，不需要手动释放内存，编译器会自动释放内存，不会出现内存泄漏
- MRC：需要手动释放内存，否则会内存泄漏
- 默认使用的是ARC
- 使用MRC的方法：**PROJECT -> Build Settings -> Apple Clang Language Objective-C Runtime -> Automatic Reference Counting: NO**
:::
- 使用对象的`retainCount`可以查看该对象被引用了几次
- 使用对象的`retain`方法，`retainCount`会加1
- 使用对象的`release`方法，`retainCount`会减1
- 当`retainCount`为0时，对象会被释放
- 内存释放调用的是`dealloc`方法，
  ```objc
  - (void)dealloc {
      NSLog(@"%@被释放了", _name);
      [super dealloc];
  }

  // 模拟释放
  Person* p1 = [Person new];
  p1.name = @"小明";
  p1.age = 10;
  NSLog(@"我叫%@, 今年%d岁", p1.name, p1.age);

  Person* p2 = [p1 retain]; // retain返回值为该对象本身
  NSUInteger num = [p1 retainCount];
  NSLog(@"%lu", num); // 2

  [p1 release];
  p1 = nil; // 避免僵尸对象
  [p2 release]; // 为0 释放
  p2 = nil;
  ```
- 如果对象使用其他对象
  - 那么在赋值的`setter`方法中需要使用`retain`方法，并且需要使用**原对象**的`release`方法，否则会内存泄漏
  - 赋值可能新旧对象是否相同，需要使用`_car != car`方法，同时不需要调用原对象的`release`方法，避免提前释放
  - 在`dealloc`方法中需要使用使用对象的`release`方法，否则会内存泄漏
  ```objc
  - (void)setCar:(Car *)car {
    if (_car != car) {
      [_car release];
      _car = [car retain];
    }
  }

  - (void)dealloc {
    [_car release];
    [super dealloc];
  }
  ```

## block类型
::: tip
- block类型，是一个**函数指针**，指向一个函数的指针，函数指针可以指向一个函数，也可以指向一个函数指针
- 声明：`void (^blockName)(int type1, int type2, ...)`
- 规则：
  - block可以访问全局和局部变量的值，但是**不能修改block外部局部变量的值**
  - 如果要让block修改block外部局部变量的值，需要使用`__block`关键字
  - block作为函数返回值时，只能做`typedef`，不然编译报错
- 使用场景：
  -  block可以作为闭包使用，带着传递和保存变量
:::
- 完整写法
  ```c
  int(^add)(int num1, int num2);
  add = ^int(int num1, int num2) {
      return num1 + num2;
  };
  int sum = add(1, 2);
  NSLog(@"%d", sum);
  ```
- 简写，没有变量和返回值
  ```c
  void(^sayHaha)(void) = ^{}
  ```
- 简写，变量声明省略形参名
  ```c
  int(^add)(int, int) = ^(int num1, int num2) {
      return num1 + num2;
  };
  ```
- 类型别名
  ```c
  typedef void (^voidBlock)(void);
  voidBlock b1 = ^{
      NSLog(@"牛逼");
  };
  b1();
  ```
- 修改局部变量
  ```c
  __block int num = 0;
  void(^addOne)(void) = ^{
      num++;
  };
  addOne();
  addOne();
  addOne();
  addOne();
  NSLog(@"%d", num); // 4
  ```
- block作为参数
  ```c
  typedef void(^Haha)(void);
  void runBlock(Haha haha) {
      haha();
  }

  int main(int argc, const char * argv[]) {
    typedef void(^haha)(void);
    runBlock(^{
        NSLog(@"哈哈哈哈");
    });
    
    return 0;
  }
  ```
- block作为返回值
  ```c
  typedef NSString* (^StringFormat)(int);
  StringFormat stringFromIntBlock(void) {
      return ^NSString *(int value) {
        return [NSString stringWithFormat:@"数字是：%d", value];
      };
  }
  StringFormat b1 = stringFromIntBlock();
  NSLog(@"%@",b1(333));
  ```