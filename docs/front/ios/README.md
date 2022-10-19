---
title: ios入门
date: 2022-10-11
---
## 常用命令
* [中文文档](https://swift.bootcss.com/)
* [官方英文api文档](https://developer.apple.com/documentation/swift/array/withunsafemutablebufferpointer(_:))
:::: tabs
::: tab label=使用
* 查看swift版本
    ```swift
    xcrun swift -version
    ```
* 起项目
    ```shell
    open test.xcworkspace
    ```
* 清缓存，重装依赖
    ```shell
    cd /Users/dreamarts/Library/Developer/Xcode/DerivedData
    rm -rf ./**

    cd /Users/dreamarts/Library/Caches/CocoaPods
    rm -rf ./**

    cd /Users/dreamarts/Documents/work/jsurvey/jcomsurvey-ios
    pod install
    ```
* 清空编译缓存/编译
    ```shell
    cmd + shift + k

    cmd + b
    ```
:::
::: tab label=安装
* [安装cocoapod](https://blog.csdn.net/weixin_38716347/article/details/116845164)
* [开发环境配置](https://stainless.dreamarts.co.jp/pages/sl-yang/JcomSurveyDoc/docs/guide-ipad.html)
:::
::: tab label=M1芯片arm64问题
1. 项目文件 -> project -> build settings -> all -> architectures -> Exclude Architectures -> debug
    * `Any SDK: arm64`
2. 项目文件 -> targets -> build settings -> all -> architectures -> Exclude Architectures -> debug
    * `Any IOS Simulator SDK : arm64`
3. 退出项目
4. 访达 -> 应用程序 -> XCode -> 右键 -> 显示简介 -> 使用 `Rosetta`打开
    * [原因](https://support.apple.com/zh-cn/HT211861)
:::
::: tab label=编译错误处理
* [找不到已下载的外部模块文件](https://www.cnblogs.com/qingzZ/p/9223180.html)
    * build settings -> User header search path -> debug -> 增加：`${SRCROOT}` ，尾部选择：`recursive`
* [找不到.h文件/.m文件](https://blog.csdn.net/Wenhao_China/article/details/121120792)
:::
::::
## 类型
### 基础数据类型
::: tip
* Int
* Float
* Double
* Bool
* Character(单个字符，包括汉字)
* String
* Optional(可选类型)：可能有值，可能为`nil`
* ?? 合并空值运算符
:::
>声明赋值可自动推断类型
```swift
var a:String = "你好";
var b = true;

// 可选类型
var c: String? = nil;
c = "123";
```
### 类型推断
::: tip
* 变量：`var`
* 常量：`let`
* 输出：
* 类型推断：type(of: a)
* 判断数据类型：
* 类型转换(构造器)：String(true)
* 类型别名：`typealias`
:::
```swift
// 类型别名
typealias C = Int;
let c: C = 1;
```
### 合并空值运算符 ??
```swift
// 转换类型 ：?? 处理空值 nil，合并为后面的默认值
let c: String = "asdf";
var b = Int(c) ?? 100; // 解析出来是nil，空值运算符赋值为后面的默认值 100

print(b); // 100
```
## Any/AnyObject
* Any: 任意数据类型
* AnyObject: 类的类型
```swift

```
## 枚举类型
* 一般**大写**开头
    ```swift
    enum People
    {
        case A
        case B
        case C
    }
    print(People.A);
    ```
* 简写
    ```swift
    enum People
    {
        case A, B, C
    }
    print(People.A); // A
    ```
* 设置类型和值
    ```swift
    enum People: Int
    {
        case A = 1
        case B = 2
        case C = 3
    }
    print(People.A); // A
    print(People.A.rawValue); // 1
    ```
* 设置不同类型
    ```swift
    enum People
    {
        case name(String)
        case age(Int)
    }
    func test(param: People) -> Void
    {
        switch param
        {
            case People.name("张三"):
                print("这是张三");
            case People.age(18):
                print("他不是张三，但只有18岁");
            default:
                print("我也不知道他信息");
        }
    }

    test(param: People.name("张三")); // 这是张三
    test(param: People.age(18)); // 他不是张三，但只有18岁
    ```
* 迭代器
    ```swift
    enum People:CaseIterable
    {
        case name
        case age
    }

    print(type(of: People.allCases)); // Array<People>

    for item in People.allCases
    {
        print(item); // name age
    }

    for i in (0 ..< People.allCases.count)
    {
        print(People.allCases[i]); // name age
    }
    ```
## Int/Float/Double
* 数字**可以用下划线分割**方便展示
```swift
var a = 1_000_0000_0;
print(a)

var b = 1_00.0_0000_0;
print(b)
```
## Optional可选类型
::: tip 解绑方法
* `!`确定有值
* [if 可选项绑定](./#可选项绑定)
* [`??`合并空值运算符](./#合并空值运算符)
:::
* 可选类型：**类型不固定，可能为nil**
```swift
var a: Int? = 100;
print(a); // Optional(100)
```
* `!`确定有值，两种方式，`返回类型不再是可选`
```swift
var a: Int? = 100;
print(a); // Optional(100)

// 确定有值
let b = a!;
print(b); // 100
```
```swift
var a: Int! = 100;
print(a); // Optional(100)

a = 1;
let b: Int = a;
print(b); // 100
```
## 可选项绑定
* 在if语句中，让可选项变成绑定值，如果有值才执行if语句，并且赋值乘正确的值
```swift
let a: Int? = 1;
print(a); // Optional(1)

if let b = a {
    print(b); // 1
}
```
## 元组
* 作用：将不同的数据类型封装到一起
* 规则：
    * 下标取值
    * 赋值是值拷贝
    * 可以取名，类似对象
    * 可以简洁赋值
```swift
var a = (1, 2, 3, "哈哈哈");

var b: (Int, String) = (10, "10");

print(b.0);
```
* 拷贝传递
```swift
var b: (Int, String) = (10, "10");
var a = b;
b.0 = 20;

print(a); // (10, "10")
print(b); // (20, "10")
```
* 取名
```swift
let name = (name1: "hdy", name2: "coderhdy");
print(name.name1); // hdy
```
* 简洁赋值，注：`必须按顺序，且数量必须一致`
```swift
let (name, age) = ("hdy", 18);
print("\(name)的年龄是\(age)"); // hdy的年龄是18
```
```swift
// 数量不一致可以用下划线占位
let (name, age, _) = (name: "hdy", age: 18, height: 170);
print("\(name)的年龄是\(age)"); // hdy的年龄是18
```
* 作为函数返回值
```swift
let (name, age, _) = (name: "hdy", age: 18, height: 170);

func add(people: (String, Int)) -> (String, Int) {
    var (name, age) = people;
    name += "hhh";
    age += 10;
    return (name, age);
}

let (newName, newAge) = add(people: (name, age));
print("\(newName)的年龄是\(newAge)");
```
## switch
::: tip
* case可以匹配多个值
* case可以用区间运算符
* `fallthrough`如果本case匹配了，可以向下穿透一个case
* 可以配合元组使用多样赋值匹配
:::
* 多个值匹配
    ```swift{5,6,11,12,14,15}
    let a = 10;

    switch a
    {
        // 多个值匹配
        case 1, 2, 3:
            print("1");
        case 10, 20, 30:
            print("10");

            // 匹配穿透
            fallthrough;
        
        // 区间匹配
        case 100 ..< 999:
            print("100");
        case 1000 ..< Int(Double.infinity):
            print("1000");
        default:
            print("默认")
    }

    // 10
    // 100
    ```
* 配合元组使用匹配赋值
    ```swift
    let a = (10, 20);

    switch a
    {
        case let (v1, v2) where v1 > v2:
            print("第一个大");
        case let (v1, v2) where v1 < v2:
            print("第二个大");
        case let (v1, v2) where v1 == v2:
            print("一样大");
        default:
            print("比较失败？");
    }
    ```
## 区间运算符
::: tip
* 【1-4】`1 ... 4`
* 【1-3】`1 ..< 4`
* 【2.5 - 4】`(2.5) ... 4`
:::
```swift
for i in 0 ..< 5
{
    print(i);
}
```
* 跳跃
    ```swift
    // stride 包括开头不包括结尾
    for i in stride(from: 0, to: 10, by: 3)
    {
        print(i); // 0 3 6 9
    }
    ```
* 反转
    ```swift
    for i in stride(from: 0, to: 10, by: 3).reversed()
    {
        print(i); // 9 6 3 0
    }
    ```
## 注意
::: tip
* ios没有`++ --`运算符
* 元组可以集体比较，会按顺序一一比较
* `repeat...while` 就是 `do...while`
:::