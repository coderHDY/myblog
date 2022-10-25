---
title: func及相关类型
date: 2022-10-17 15:26:00
---
## 定义
* 返回值`void`可以不写
    ```swift
    func test1()
    {
        print("你好");
    }

    func test2() -> Void
    {
        print("你好");
    }

    test2();
    ```
## 类型
```swift
var a: () -> Void = {() -> Void in
    print("1111");
}

a(); // 1111
```
## 返回函数
```swift
func test() -> () -> Void
{
    print("你好");
    func a()
    {
        print("a函数");
    }
    return a;
}
```
## 可变参数长度
```swift
func test(s: String...)
{
    print(s);
}

test(s: "1", "2", "3");
```
## 元组入参
```swift
func test(people:(name: String, age: Int))
{
    print("\(people.name)的年龄是\(people.age)");
}

test(people: (name: "hdy", age: 18));
```
```swift
func test(people:(name: String, age: Int))
{
    let (name, age) = people;
    print("\(name)的年龄是\(age)");
}

test(people: (name: "hdy", age: 18));
```
## 入参命名
* 定义`外部调用名`和`内部使用名`
    ```swift
    // age : 外部调用名
    // a   : 内部使用名
    func test(age a: Int)
    {
        print("年龄是\(a)");
    }

    test(age: 18);
    ```
* 只写一个默认外部名称和内部名称相同
    ```swift
    func test(age a: Int)
    {
        print("年龄是\(a)");
    }

    test(age: 18);
    ```
* 下划线`_`代表忽略外部调用名
    ```swift
    func test(_ a: Int)
    {
        print("年龄是\(a)");
    }

    test(18);
    ```
* 类型传递可以关闭关联命名规则?
    ```swift
    func test(name: String, age: Int) -> Void
    {
        print("\(name)的年龄是\(age)");
    }

    let c: (String, Int) -> Void = test;
    c("hdy", 18); // hdy的年龄是18
    ```
## 入参别名
* 入参可以直接省略，`$0`代表第一个入参，可以直接使用
```swift
let a: (String, Int) -> String = {"参数1:\($0)，参数2:\($1)"}

print(a("你好", 857)); // 参数1:你好，参数2:857
```
## 匿名函数
* 直接通过`匿名函数`传递到变量进行命名赋值，用in分隔入参和实现
    ```swift
    let c = {(name: String, age: Int) -> Void in
        print("\(name)的年龄是\(age)");
    }
    c("hdy", 18); // hdy的年龄是18
    ```
* 定义简单函数
    ```swift
    let a: () -> Void = {
      print("匿名函数");
    }
    a(); // 匿名函数
    ```
## 返回函数
```swift
let a = {() -> () -> Void in
  func test() -> Void
  {
    print("高阶函数");
  }
  return test;
}
a()(); // 高阶函数
```
## assert
* 相当于js的 throw。抛出错误停止运行
* 返回`false`才会停止运行，第二个参数是**提示信息**
```swift
func test(_ a: Int)
{
    if a < 19
    {
        assert(false, "stop");
    }
    print("18")
}

test(18);
```
## guard
* 相当于`否定的if`
    ```swift
    func test(param: String?)
    {
        guard let value = param else
        {
            print("param没有值");
            return;
        }
        print("param 为\(value)");
    }

    let a: String? = "你好";
    test(param: a); // param 为你好
    ```
* **声明的值可以在代码块外面使用**
    ```swift{9}
    func test(param: String?)
    {
        guard let value = param else
        {
            print("param没有值");
            return;
        }

        print("param 为\(value)");
    }

    let a: String? = nil;

    test(param: a); // param没有值
    ```
## inout
* 函数参数默认不能修改
    ```swift
    func test(a: Int)
    {
        a += 1;
        print(a); // error
    }

    var p = 1;
    test(a: p);
    ```
* 通过`inout`函数参数修改，需要传入引用
    ```swift{1,8}
    func test(a: inout Int)
    {
        a += 1;
        print(a); // 2
    }

    var p = 1;
    test(a: &p);

    print(p); // 2
    ```
## 泛型
```swift
func getAge<T>(age: T) -> T
{
    return age;
}
    
print(getAge(age: "hdy")); // hdy
print(getAge(age: 18)); // 18
print(getAge(age: [1, 2, 3, 4])); // [1, 2, 3, 4]
```
## 尾随闭包
* 概念：将入参的末尾的闭包函数放到点用写法外面去
    ```swift
    func test(p1: String, p2: (_:String) -> Void)
    {
        p2(p1);
    }

    test(p1: "hdy") { s in
        print("hello \(s)");
    }
    // hello hdy
    ```
* 单个入参尾随必报可以省略括号
    ```swift
    func test(p: (String) -> String)
    {
        var ans = p("hdy");
        print(ans);
    }

    test { s -> String in
        return "你好 \(s)";
    }
    // hello hdy
    ```