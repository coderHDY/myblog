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

## 类
::: tip
- 规范：类属姓名都以下划线开头`NSString *_name;`
- 类属性默认外部不可访问的，需要访问，使用`@public`关键字
- 方法头的**数据类型都要用小括号括起来**:`- (void)eat:(NSString*) food;`
:::
:::warning
- 类名：首字母大写，驼峰式命名
- 类不可以在声明的时候给属性赋值的
:::
- 类对象里面有个属性`isa`，用来指向当前对象的类。作用是调用方法时通过指针找到对应的Person类
## 对象方法
:::tip
- 规范
  - 如果只有一个参数，最好命名叫`xxWithFood`，例：`- (void)eatWithFood:(NSString*) food;`
  - 如果有多个参数，最好每个参数都加个`andXxx`前缀说明，例：`- (void)runWithSpeed:(int) speed andDirection:(int) direction;`
- 分组导航标记：可以在顶部快速找到指定方法
  - `#pagma mark Person类的实现`：导航位置添加注释
  - `#pragma mark -`：导航位置添加分割线
  - `#pragma mark - Person类的声明`：导航位置添加分割线再添加注释
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