---
title: struct/class
date: 2022-10-19
---
## struct 结构体
### 属性/方法
* 类似于`class`，有属性/方法/初始化函数init
* self == this
* 都可以写属性/静态属性/方法/静态方法，但不太建议写太复杂的东西在struct内
* 赋值传递是拷贝传递
* **如果结构体是 let 定义，那么结构体内属性都不准修改**
```swift
struct People
{
    private var name = "";
    private var age = 0;
    static let type = "人类";

    func getName() -> String
    {
        return self.name;
    }
    func getAge() -> Int
    {
        return self.age;
    }

    // 写方法必须加 mutating
    mutating func setAge(newAge: Int) -> Void
    {
        self.age = newAge;
    }
    
    // 初始化方法不需要加 func， 且可以多次重载
    init() {
        print("默认初始化");
    }
    init(name: String) {
        self.name = name;
        print("初始化姓名，缺少年龄");
    }
    init(name: String, age: Int)
    {
        self.name = name;
        self.age = age;
    }
}

print(People.type); // 人类

let p1 = People(name: "hdy", age: 18);
print(p1); // People(name: "hdy", age: 18)

// p1.setAge(newAge: 19) // 报错

let p2 = People(); // 默认初始化
print(p2); // People(name: "", age: 0)
```
### 读写拦截。
```swift
struct People
{
    private var _name = "";
    var name: String
    {
        set(v) // 也可以直接省略参数，拿默认参数名：newValue
        {
            _name = v;
        }
        get
        {
            return _name;
        }
    }
}

var p = People();
    
print(p.name); // ""
p.name = "hdy";
print(p.name); // hdy
```
>默认：set和get都不设置，就是默认状态。  
>只读属性：只设置get方法。
### 属性监听
```swift
struct People
{
    var name: String = "默认值"
    {
        willSet
        {
            print("将要改变：\(newValue)"); // 将要改变：hdy
        }
        didSet
        {
            print("已经改变：\(oldValue)"); // 已经改变：默认值
        }
    }
}

var p = People();

p.name = "hdy";
print(p.name); // hdy
```
### 绑定下标
```swift
struct People
{
    private var vals: [Any] = ["hdy", 18, 170, true];
    subscript(index: Int) -> Any
    {
        set
        {
            vals.insert(newValue, at: index)
        }
        get
        {
            return vals[index]
        }
    }
}

var p = People();

p[0] = "hdy";
print(p); // People(vals: ["hdy", "hdy", 18, 170, true])
print(p[1]); // hdy
```
## class
### 同结构体类比
::: tip class 和 struct 不同的地方
* class空的 init(){} 需要加convenience
    ```swift
    class People
    {
        var name = "";
        var age = 0;
        convenience init()
        {
            self.init(name: "hdy", age: 18)
        }
        init(name: String, age: Int)
        {
            self.name = name;
            self.age = age
        }
    }

    let p = People();

    print(p.name); // hdy
    print(p.age); // 18
    ```
* 类的实例的传递是`传引用`，结构体传递是`传值`
* 类的实例用`let`设置成常量以后，里面的属性是可以改变的，结构体不行
:::
### 继承
* 单继承，多协议（接口）
* 父类
    ```swift
    class People
    {
        private var name = "";
        init(name: String) {
            self.name = name;
        }
        public func getName() -> String {
            return self.name;
        }
    }

    let p = People(name: "hdy");
    print(p.getName()); // hdy
    ```
* 继承
    ```swift
    class People
    {
        private var name = "";
        init(name: String) {
            self.name = name;
        }
        public func getName() -> String {
            return self.name;
        }
    }

    class Student: People
    {
        
    }

    let s: People = Student(name: "hdy");
    print(type(of: s)); // Student
    ```
### 向下类型转换
* 问题：Any/AnyObject可以表示任意类型，但是如果是继承来的方法，调用会有问题
    ```swift{14-15}
    class People
    {
        private var name = "";
        init(name: String) {
            self.name = name;
        }
        public func getName() -> String {
            return self.name;
        }
    }

    class Student: People {}

    let s: Any = Student(name: "hdy");
    print(s.getName()); // Error
    ```
* 用已知有这个方法的实例就不会有问题（本身或者父类）
    ```swift{14-15}
    class People
    {
        private var name = "";
        init(name: String) {
            self.name = name;
        }
        public func getName() -> String {
            return self.name;
        }
    }

    class Student: People {}

    let s: People = Student(name: "hdy");
    print(s.getName()); // hdy
    ```
* 向下类型转换
    ```swift
    class People
    {
        private var name = "";
        init(name: String) {
            self.name = name;
        }
        public func getName() -> String {
            return self.name;
        }
    }

    class Student: People {}

    let s: Any = Student(name: "hdy");
    let ss = s as! Student;

    print(ss.getName()); // hdy
    ```
    ```swift
    let s: Any = Student(name: "hdy");

    if let ss = s as? Student {
        print(ss.getName()); // hdy
    }
    ```
    ```swift
    let s: Any = Student(name: "hdy");

    let ss = s as? Student;
    print(ss?.getName()); // Optional("hdy")
    print(ss!.getName()); // hdy
    ```
### 重载/多态/重写
::: tip 重载定义
* 函数名一样，参数不同/返回值不同
:::
::: tip 多态定义
* 父类引用指向子类对象
:::
::: tip 重写定义
* 子类重写父类同名方法/属性
:::
* 重写
```swift
class People {
    var name = "";
    init(name: String) {
        self.name = name;
    }
    public func getName() -> String {
        return self.name;
    }
}

class Student: People {
    override init(name: String) {
        super.init(name: "子类\(name)")
    }
}

let s = Student(name: "10");
print(s.getName()); // 子类10
```