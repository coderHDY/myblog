---
title: 类和结构体
date: 2023-01-30
---
## 基础使用
* 你只需在单一的文件中定义一个结构体或者类，系统将会自动生成面向其它代码的外部接口。
```swift
// 结构体
struct Resolution {
    var width = 0
    var height = 0
}

// 类
class VideoMode {
    var resolution = Resolution()
    var interlaced = false
    var frameRate = 0.0
    var name: String?
}
```
### 方法重载
```swift
* 同一个类或结构体中可以将同一种方法做出多种的形式来满足不同的调用。例：多个init
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
### 类和结构体区别
>不同：结构体赋值会`复制`，类事例赋值会赋值`引用`。
* class复制
    ```swift
    class People {
        var hand = 2;
        var foot = 2;
        init(hand: Int, foot: Int) {
            self.hand = hand;
            self.foot = foot;
        }
    }

    var a = People(hand: 2, foot: 3)

    let b = a;

    a.foot = 2;

    print(a.foot); // 2

    print(b.foot); // 2
    ```
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
* 结构体复制。`结构体和枚举是值类型`
    ```swift
    struct People {
        var hand = 2;
        var foot = 2;
    }

    var a = People(hand: 2, foot: 3)

    let b = a;

    // a 和 b 不是一个实例
    a.foot = 2;

    print(a); // People(hand: 2, foot: 2)

    print(b); // People(hand: 2, foot: 3)
    ```
* 类的实例的传递是`传引用`，结构体传递是`传值`
* 类的实例用`let`设置成常量以后，里面的属性是可以改变的，结构体不行
>值类型是这样一种类型，当它被赋值给一个变量、常量或者被传递给一个函数的时候，其值会被拷贝。
### 恒等运算符
* `===`检测两个常量或者变量是否引用了同一个实例。
    ```swift
    class People {
        var hand = 2;
        var foot = 2;
        init(hand: Int, foot: Int) {
            self.hand = hand;
            self.foot = foot;
        }
    }

    var a = People(hand: 2, foot: 3)

    let b = a;

    print(a === b); // true
    ```
* 必须传引用类型
    ```swift
    var a = 1

    let b = a;

    print(a === b); // Error
    ```
## 属性
### lazy
* 延迟加载属性：当获得属性的值因为需要`复杂或者大量的计算`，而需要采用`需要的时候再计算`的方式，可以使用延时加载属性
>lazy修饰的属性只有在`第一次被访问的时候才被创建`。
* 普通属性在`init`前赋值
* 可以让修饰属性在使用的时候再初始化，优化性能
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
### getter / setter
* 可以放一些复杂的计算属性
* setter默认参数newValue，不会
```swift
struct People
{
    private var _name = "";
    var name: String
    {
        // 也可以直接省略参数，拿默认参数名：newValue
        set(v){
            _name = v;
        }
        get {
            _name
        }
    }
}

var p = People();
    
print(p.name); // ""
p.name = "hdy";
print(p.name); // hdy
```
### 只读计算属性
* 只有getter的属性为只读属性，并且应该用`var`声明但`不能修改`
```swift
class People {
    var hand: Int {2}
}

let a = People();
print(a.hand); // 2

//a.hand = 3; // Error
```
### 监听属性
* 对属性修改做出监听（读取监听可以在get去做）
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

// 将要改变：hdy
// 已经改变：默认值
// hdy
```
### 静态属性
```swift
class People {
    static var hand = 2;
    static let foot = 2;
    var name: String;
    init(_ name: String) {
        self.name = name;
    }
}

let p1 = People("小黄")

print(p1.name);     // 小黄
print(People.hand); // 2

People.hand = 10
print(People.hand); // 10
```
## 装饰器
* 装饰器可以写一个统一的管理手段，来管理我们的数据，比如设置值时存储数据库、限制值的范围、多个属性要做相同的管理操作，就可以把管理代码做成装饰器。
### propertyWrapper
```swift
@propertyWrapper
struct AgeNum {
    private var num = 0;
    var wrappedValue: Int {
        get {num}
        set {
            num = newValue < 0 ? 0 : min(newValue, 120)
            
        }
    }
}

class People {
    @AgeNum var age: Int;
}

let p = People();

// 赋值错误年龄，超出边界
p.age = 121
print(p.age); // 120
```
### 装饰器初始化器
* 0参初始化
    ```swift
    @propertyWrapper
    struct AgeNum {
        private var num = 0;
        var wrappedValue: Int {
            get {num}
            set {
                num = newValue < 0 ? 0 : min(newValue, 120)
                
            }
        }
    //    默认调用
    //    init() {
    //        num = 0
    //    }
    }

    class People {
        @AgeNum var age: Int;
    }

    let p = People();

    print(p.age); // 0
    p.age = 121
    print(p.age); // 120
    ```
* 1参初始化`init参数名固定`
    ```swift
    @propertyWrapper
    struct AgeNum {
        private var num = 0;
        var wrappedValue: Int {
            get {num}
            set {
                num = newValue < 0 ? 0 : min(newValue, 120)
                
            }
        }
        // 注： 参数是必须的，且不能更改名字
        init(wrappedValue: Int) {
            print("初始化")
            num = wrappedValue
        }
    }

    class People {
        @AgeNum var age: Int = 130;
    }

    let p = People();

    print(p.age); // 130
    p.age = 121
    print(p.age); // 120

    //初始化
    //130
    //120
    ```
* 2参以上初始化
    ```swift
    @propertyWrapper
    struct AgeNum {
        private var num = 0;
        var wrappedValue: Int {
            get {num}
            set {
                num = newValue < 0 ? 0 : min(newValue, 120)
                
            }
        }

        init(_ wrappedValue: Int, _ printStr: String) {
            print(printStr)
            num = wrappedValue
        }
    }

    class People {
        @AgeNum(130, "我是多参数装饰器") var age: Int;
    }

    let p = People();

    print(p.age); // 130
    p.age = 121
    print(p.age); // 120

    //我是多参数装饰器
    //130
    //120
    ```
## 方法
* 类、结构体、枚举都可以定义实例方法；
>结构体和枚举能够定义方法是 Swift 与 C/Objective-C 的主要区别之一
```swift
class Counter {
    var num: Int;
    func add() {
        num += 1
    }
    func del() {
        num -= 1
    }
    init() {
        self.num = 0;
    }
    init(_ num: Int) {
        self.num = num;
    }
}

let counter = Counter();
counter.add()
counter.add()
counter.add()
print(counter.num); // 3
```
### mutating
* 修改结构体或者枚举实例的方法**必须**加关键字
    ```swift
    struct Counter {
        var num: Int;
        mutating func add() {
            num += 1
        }
        mutating func del() {
            num -= 1
        }
        init() {
            self.num = 0;
        }
        init(_ num: Int) {
            self.num = num;
        }
    }

    var counter = Counter();
    counter.add()
    counter.add()
    counter.add()
    print(counter.num); // 3
    ```
* 处理枚举（仿JS Promise）
    ```swift
    enum Promise {
        case padding
        case fullfilling
        case rejected
        mutating func resolved() {
            switch self {
            case .padding:
                    self = .fullfilling
            case .fullfilling:
                self = .fullfilling
            case .rejected:
                self = .rejected
            }
        }
        mutating func reject() {
            switch self {
            case .padding:
                self = .rejected
            case .fullfilling:
                self = .fullfilling
            case .rejected:
                self = .rejected
            }
        }
    }

    var p = Promise.padding;
    p.resolved();

    print(p == Promise.fullfilling); // true
    ```
### 静态方法
* 记录最高的人类岁数
    ```swift
    class People {
        static var hightestAge = 120;
        var age = 0;
        var isLife = true;
        func nextYear(isLife: Bool) {
            if isLife {
                age += 1;
                People.hightestAge = max(age, People.hightestAge)
            } else {
                self.isLife = isLife
            }
        }
    }

    let p = People();

    for _ in 0...122 {
        p.nextYear(isLife: true)
    }
    print(p.age);              // 123
    print(People.hightestAge); // 123

    p.nextYear(isLife: false);

    print(p.age)               // 123
    print(People.hightestAge); // 123
    ```
### 下标
```swift
struct Multiple {
    var num: Int;
    subscript(_ index: Int) -> Int {
        get {num * index} // 获取的所有index值是num的index倍
    }
}

var n = Multiple(num: 10);
print(n[10]); // 100

print(n[20]); // 200
```
### 结构体默认初始化器
* 默认就会有`初始化成员属性`的init方法
```swift
struct People
{
    var name: String;
    var age: Int;
}

let p = People(name: "hdy", age: 18)
print(p); // People(name: "hdy", age: 18)
```
### 权限
* `private`：只能当前类中访问
* `fileprivate`：当前swift源文件可访问
* `internal`（默认）：整个模块/库内部/框架内部/app内部可以访问
* `public`：可以被任何人访问，但是在其他module不可以背override和继承
* `open`：可以被任何人访问
### 继承
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
* `final`修饰的类禁止被继承
    ```swift
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

    // error: instance method overrides a 'final' instance method

    let s = Student(name: "hdy");
    print(s.getName()); // 我是子类hdy
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
* `重载`：函数名一样，参数不同/返回值不同
* `多态`：父类引用指向子类对象
* `重写`：子类重写父类同名方法且入参相同/同名属性
>重写(正常与父类同样方法会报错，因此需要`override`)
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
### 便利构造器
* `convenience`修饰init
* `便利构造器`必须先调用自身的其他`指定构造器`
```swift
class People
{
    var name: String
    init(_ name: String) {
        self.name = name
    }
    convenience init() {
        self.init("默认名字")
    }
}
let p = People();
print(p.name); // 默认名字
```
### 必要构造器
* 子类必须实现，且父子都要说明`required`
```swift
class People {
    var name = "";
    required init(name: String) {
        self.name = name;
    }
}

class Student: People {
    required init(name: String) {
        super.init(name: "子类\(name)")
    }
}

let s = Student(name: "10");
print(s.name); // 子类10
```
### 析构器
* `init`子类加了`super.init`就是父类先构造，否则就是子类先构造
* `deinit`一定是子类先析构
* 引用只要有一个变量或常量指向这个实例，**实例对象就不会被销毁**
```swift
class People {
    init() {
        print("爸爸构造了")
    }
    deinit {
        print("爸爸析构了")
    }
}

class Student: People {
    override init() {
        super.init()
        print("儿子构造了")
    }
    deinit {
        print("儿子析构了")
    }
}



var s: Student? = Student();
// 爸爸构造了
// 儿子构造了

s = nil

//儿子析构了
//爸爸析构了
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
* 协议内泛型
    ```swift
    protocol T
    {
        associatedtype T
        func test(p: T)
    }
        
    class Test: T
    {
        func test(p: String)
        {
            print(p);
        }
    }

    let t = Test()
    t.test(p: "你好"); // 你好
    ```
### 引用问题
* **swift除了`class对象`和`闭包`，都是值类型**
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