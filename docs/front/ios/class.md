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
### 默认初始化器
* 默认就会有初始化成员属性的init方法
```swift
struct People
{
    var name: String;
    var age: Int;
}

let p = People(name: "hdy", age: 18)
print(p); // People(name: "hdy", age: 18)
```
## class
### 对比判断
* `==`表示符号两边的值是否相等，`===`表示两个类型（class type）是否引用同一个类实例
* 注：引用判断，三个`===`
```SWIFT
class People
{
    public var type = "人";
}

var p1 = People();
var p2 = People();
print(p1 === p2); // false
```
### 与结构体对比
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
::: warning 禁止继承
* final修饰的类禁止被继承
    ```swift{1}
    final class People {
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

    // error: inheritance from a final class 'People'
    ```
* 同时也可以final修饰单个方法
    ```swift{6}
    class People {
        var name = "";
        init(name: String) {
            self.name = name;
        }
        final public func getName() -> String {
            return self.name;
        }
    }

    class Student: People {
        override init(name: String) {
            super.init(name: "子类\(name)")
        }
        override public func getName() -> String {
            return "我是\(self.name)";
        }
    }

    // error: instance method overrides a 'final' instance method

    let s = Student(name: "hdy");
    print(s.getName()); // 我是子类hdy
    ```
:::
* `单继承，多协议（接口）`
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
::: tip 重载
* 函数名一样，参数不同/返回值不同
:::
::: tip 多态
* 父类引用指向子类对象
:::
::: tip 重写
* 子类重写父类同名方法/属性
:::
* 重写(与父类同样方法会报错)
    ```SWIFT
    class People
    {
        func say()
        {
            print("我是人");
        }
    }

    class Student: People
    {
        override func say()
        {
            print("我是学生");
        }
    }
    let s = Student();
    s.say(); // 我是学生
    ```
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
### extension扩展
* extension扩展
* extension不能扩展属性，只能扩展方法
```swift
class People {
    var name = "";
    init(name: String) {
        self.name = name;
    }
    final public func getName() -> String {
        return self.name;
    }
}

class Student: People {
    override init(name: String) {
        super.init(name: "子类\(name)")
    }
    override public func getName() -> String {
        return "我是\(self.name)";
    }
}

let s = Student(name: "hdy");
print(s.getName()); // 18
```
### protocol 接口
* 类似于其他语言的interface
    ```swift
    protocol P1
    {
        var name: String{get set}
    }

    class People: P1
    {
        var name = "hdy";
    }

    let p = People();
    print(p.name); // hdy
    ```
### lazy 延迟属性
::: tip
* 可以让修饰属性在使用的时候再初始化，优化性能
:::
* 普通属性在`init`前赋值
    ```swift
    class Date
    {
        init()
        {
            print("date init");
        }
    }

    class P
    {
        var date = Date();
        init()
        {
            print("p init");
        }
    }

    P();

    // date init
    // p init

    ```
* 使用`lazy`关键字修饰可以关闭默认初始化
    ```swift
    class Date
    {
        init()
        {
            print("date init");
        }
    }

    class P
    {
        lazy var date = Date();
        init()
        {
            print("p init");
        }
    }

    var p = P(); // p init
    p.date // date init
    ```
### 闭包初始化器
```swift
class People
{
    var name: String = {
        return "我叫hdy"
    }();
    var age: Int = {
        return "name".count
    }();
}

let p = People()
print(p.name); // 我叫hdy
print(p.age); // 4
```
### 析构函数
* 引用只要有一个变量或常量指向这个实例，**实例对象就不会被销毁**
```swift
class People
{
    var name: String = "我叫hdy";
    var age: Int = "name".count;
    deinit
    {
        print("准备销毁");
    }
}

var p: People? = People();
print(p); // Optional(__lldb_expr_166.People)

p = nil; // 准备销毁
print(p); // nil
```
### 引用问题
:::: tabs
::: tab label=强引用
* 直接赋值就是强引用
```swift
class P {}
var p = P();
```
:::
::: tab label=引用计算器
* 每个强引用会让引用的计数 + 1
* 计数为 0 时，对象会在内存中删除
:::
::: tab label=循环强引用
* `互相有属性强引用`的情况下不会在内存中销毁
```swift
class A
{
    var b: B?;
    deinit
    {
        print("a deinit");
    }
}

class B
{
    var a: A?;
    deinit
    {
        print("b deinit");
    }
}

var a: A? = A();
var b: B? = B();
a!.b = b;
b!.a = a;

a = nil;
b = nil;

// 对象都没有被销毁
```
:::
::: tab label=弱引用
```swift
class A
{
    weak var b: B?;
    deinit
    {
        print("a deinit");
    }
}

class B
{
    weak var a: A?;
    deinit
    {
        print("b deinit");
    }
}

var a: A? = A();
var b: B? = B();
a!.b = b;
b!.a = a;

a = nil; // a deinit
b = nil; // b deinit
```
:::
::: tab label=无主引用
* 本身不需要全局变量来引用，而是以其他对象的成员变量来展示，同时又引用别的对象
```swift
a -> b(无主) -> a
```
```swift{27-28}
class A
{
    var b: B?;
    deinit
    {
        print("a deinit");
    }
}

class B
{
    var a: A?;
    init(a: A)
    {
        self.a = a;
    }
    deinit
    {
        print("b deinit");
    }
}

var a: A? = A();
var b: B = B(a: a!);
a!.b = b;

a = nil;
// 对象都没有被销毁
```
:::
::: tab label=unowned
* 指明自己不用计数 + 1
```swift{28}
class A
{
    var b: B?;
    deinit
    {
        print("a deinit");
    }
}
    

class B
{
    unowned var a: A?;
    init(a: A)
    {
        self.a = a;
    }
    deinit
    {
        print("b deinit");
    }
}

var a: A? = A();
var b: B = B(a: a!);
a!.b = b;

a = nil; // a deinit
```
:::
::: tab label=闭包循环引用
* 闭包内引用自己，增加了一个无效引用，导致内存不删除
    ```swift
    class A
    {
        var name = "hdy"
        lazy var b: () -> Void  = {
            print(self.name); // lazy 执行时已经有了self
        };
        deinit
        {
            print("a deinit");
        }
    }

    var a: A? = A();

    a!.b(); // 闭包内多了一个引用指向自己

    a = nil; // 自己删除引用，但是还是不会销毁

    // 不会输出 a deinit
    // 不执行 a!.b() 就会输出 a deinit
    ```
* 解决：定义【捕获列表】
    ```swift
    class A
    {
        var name = "hdy"
        lazy var b: () -> Void  = {[unowned self] () -> Void in 
            print(self.name); // lazy 执行时已经有了self
        };
        deinit
        {
            print("a deinit");
        }
    }

    var a: A? = A();

    a!.b(); // hdy

    a = nil; // a deinit
    ```
:::
::::