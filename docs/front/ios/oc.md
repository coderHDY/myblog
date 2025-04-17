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
- 将c的`char[]`转化为oc的NSString
  ```c
  char c1[] = "1234567";
  NSString* str1 = [NSString stringWithUTF8String:s0];
  NSLog(@"%@", str1);
  ```
- 拼接字符串对象:`stringWithFormat`
  ```c
  int age = 14;
  NSString* s2 = @"小黄";
  NSString* s3 = [NSString stringWithFormat:@"大家好，我叫%@, 我今年%d岁了",s2, age];
  ```
- 计算字符串长度`length`
  ````c
  NSString* s1 = @"1哈哈";
  NSUInteger num = [s1 length];
  NSLog(@"%lu", num); // 3
  ````
- 拿到指定下标的字符`characterAtIndex`，字符转化回字符串`stringWithCharacters`
  ````c
  NSString* s = @"ha和额呵hahh";
  unichar c = [s characterAtIndex:2];
  NSString *charStr = [NSString stringWithCharacters:&c length:1];
  NSLog(@"%@", charStr); // 和
  ````
- 比较两个字符串是否相等`isEqualToString`
  ```c
  NSString* s1 = @"123456";
  NSString* s2 = @"123456";
  BOOL isEqual = [s1 isEqualToString:s2];
  NSLog(@"%@", isEqual ? @"相同" : @"不同");
  ```
- 字符串比较
  ```c
  NSString* s1 = @"China";
  NSString* s2 = @"Japan";
  NSComparisonResult result = [s1 compare:s2];
  if (result == NSOrderedAscending) {
      NSLog(@"%@在前面", s1);
  } else if (result == NSOrderedDescending) {
      NSLog(@"%@在前面", s2);
  } else {
      NSLog(@"相同");
  }
  ```

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
:::
:::warning
- 类名：首字母大写，驼峰式命名
- 类不可以在声明的时候给属性赋值的
:::
- 类对象里面有个属性`isa`，用来指向当前对象的类。作用是调用方法时通过指针找到对应的Person类
- `规范`：内部属性访问写`getter`和`setter`
```c
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
```c
@interface MyPoint : NSObject
+ (void)sayHaha;
@end

[MyPoint sayHaha];
```
- `规范`：写一个类，要创建一个同名的类方法，用来初始化对象。
- `规范`：创建的参数名字要用`类名WithXxx`的形式
- `规范`：类方法返回值如果是当前类的对象，那么返回值类型用`instancetype`
```c
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
```c
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