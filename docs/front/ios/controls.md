---
title: 控制流
date: 2023-01-26
---
## 类型整理
### 所有基础类型
* Int
* Float: 32位浮点数。精度要求不高的话可以使用此类型
* Double: 64位浮点数。当你需要存储很大或者很高精度的浮点数时请使用此类型
    * 当推断浮点数的类型时，Swift 总是会选择 Double 而不是 Float。
* Bool
* tuples: 元组，元组相比数组，并不会要求所有值是一个类型
    * `let http404Error = (404, "Not Found")`
* optionals: 可选类型
* nil: 不是指针，它是一个确定的值，用来表示值缺失
* tuple：元组，定义一组数据，**定义时就确定了每个位置的类型**
>typealias AudioSample = UInt16 `定义类型别名`
```swift
let a = 3.14
print(type(of: a)); // Double
```
### tuple
* 元组，可以用来做为函数返回值
```swift
var stu = ("hdy", 18, "170", ["你不知道的JS"])

stu.3.append("JS高级编程")

print(stu); // ("hdy", 18, "170", ["你不知道的JS", "JS高级编程"])
```
### 解构可选类型的方法
* 可选类型：不确定是否有值
    ```swift
    let a = "0123"

    let b = Int(a)
    print(b); // Optional(123)
    ```
* 默认值解构
    ```swift
    let a = "123"

    let b = Int(a) ?? 0
    print(b); // 123
    ```
* 强制解构
    ```swift
    let a = "123"

    let b = Int(a)!
    print(b); // 123
    ```
* `if`解构(如果确定是`optional`类型，声明可以重名)
    ```swift
    let a = "123"

    let b = Int(a)

    if let b = b {
        print(b)
    }
    ```
* if多条件并列判断
    ```swift
    let a = "123"

    let b = Int(a)

    // 不能使用 || 运算符
    if let b = b, a == "123"{
        print(b)
    }
    ```
### 断言调试
* assert传入正确值，假如遇到`false`值会中断执行并报相应的错误
    ```swift
    let a = "123"

    assert(a == "123", "a 等于123，不理他")

    let b = Int(a)

    assert(a == "234", "a 不等于234"); // 断言停止执行并报错

    print("到不了我")
    ```
* 先决条件`precondition`：当一个条件可能为假，但是继续执行代码要求条件必须为真的时候，需要使用先决条件
    ```swift
    let a = "123"

    precondition(a == "123", "a 不等于123")

    let b = Int(a)

    precondition(a == "234", "a 不等于234"); // 断言停止执行并报错

    print("到不了我")
    ```
### 特殊写法(写进Number里面)
* 进制整理
```swift
let decimalInteger = 17
let binaryInteger = 0b10001       // 二进制的17
let octalInteger = 0o21           // 八进制的17
let hexadecimalInteger = 0x11     // 十六进制的17
```
* 简洁写法: 整数和浮点数都可以添加额外的零并且包含下划线
```swift
let a = 1_000_000
print(a); // 1000000
```
### 数字类型转换
```swift
let a = 1_000_000
print(Double(a)); // 1000000.0

let b = 3.14
print(Int(b)); // 3
```
## 数组和字典
* 初始化空
    ```swift
    shoppingList = []
    occupations = [:]
    ```
* 数组
    ```swift
    var students: [String] = ["小黄", "效力", "小周", "小黑"]
    students[1] = "小李"
    print(students)
    ```
* 字典
    ```swift
    var teach: [String: Float] = [
        "teacher": "周老师",
        "学生": "小黄",
    ]
    teach["课程"] = "swift"
    print(teach["学生"] ?? "")
    print(teach["学生"]!)
    print(teach)
    ```
## 控制流
### for in
* `for in`
    ```swift
    let codes = [1, 2, 3, 4, 5]
    var totle = 0

    for code in codes {
        totle += code
    }

    print(totle)
    ```
* 区间运算符（...）
    ```swift
    var score = 3;

    // 打印 0 1 2 3
    for i in 0...score {
        print(i)
    }

    // 打印 0 1 2 
    for i in 0..<score {
        print(i)
    }
    ```
* `stride` 跳过条件
    ```swift
    let minute = 60;
    let jump = 5

    for seconds in stride(from: 0, to: minute, by: jump) {
        print(seconds) ; // 0 5 10 15 20 25 30 35 40 45 50 55
    }
    ```
### 单侧区间
```swift
let names = [1, 2, 3, 4, 5, 6, 7]
for name in names[2...] {
    print(name) // 34567
}

for name in names[...2] {
    print(name) // 123
}

for name in names[..<2] {
    print(name) // 12
}
```
### `if` 赋值：去`optional`
```swift
let name: String? = "黄德宇";
print(name); // Optional("黄德宇")

if let a = name {
    print("你好\(a)") // 你好黄德宇
}
```
### guard
* 和if语句判断相反，且必须有`else`语句，**主要用来保护后面代码正确执行**
```swift
var name: String?

func hello(_ name: String?) {
    guard let name else {
        print("你好啊，无名氏")
        return;
    }
    print("你好呀，\(name)")
}

hello(name)
```
### switch
* 直接判断
* 多值判断
* 语句判断
>运行 switch 中匹配到的 case 语句之后，程序会退出 switch 语句，并不会继续向下运行，所以**不需要在每个子句结尾写 break。** 同时如果需要贯穿要加关键字`fallthrough`
```swift
let score = 97

switch score {
case let s where s < 0 || s > 100:
    print("错误分数")
case 100:
    print("满分")
case 60,61,62:
    print("刚刚及格")
case 95...99:
    print("差点满分")
case let s where s < 60:
    print("不及格")
default:
    print("考得不错")
}
```
* 元组情况
  * 可以使用`_`来匹配所有值
  * 用let分别取作用域别名
```swift
let score = ("小黄", 20)

switch score {
case (_, 60):
    print("刚刚及格")
case (let name, 20):
    print("\(name)考的真差")； // 小黄考的真差
default:
    print("考得不错")
}
```
### while / repeat...while
* while 直接判断
    ```swift
    var score = 8;

    while score < 10 {
        print(score); // 8 9
        score += 1
    }
    ```
* repeat...while 执行一次再判断
```swift
var score = 10;

repeat {
    print(score); // 10
    score += 1
} while score < 10
```
## 函数与闭包
### 函数基础写法

* 函数`只有单行表达式`且`表达式的值匹配函数返回值类型`会直接被作为返回值
```swift
func sum (a: Int, b: Int)-> Int {
    a + b
}

let a = 1
let b = 2

let c = sum(a: a, b: b)
print (c) // 3
```
### 可变参数长度
* 接受不固定长度参数，形参用`...`转化为数组
```swift
func sum(_ nums: Double...) -> Double {
    nums.reduce(0, {$0 + $1})
}

print(sum(1, 2, 3, 4)); // 10
```
### 函数标签
* 标签，标签调用顺序**不可以乱序**
    ```swift
    func sum (p1 a: Int, p2 b: Int)-> Int {
        return a + b
    }

    let a = 1
    let b = 2

    // 使用标签名称
    let c = sum(p1: a, p2: b)
    print (c) // 3
    ```
* 不需要标签
    ```swift
    func sum (_ a: Int, _ b: Int)-> Int {
        return a + b
    }

    let a = 1
    let b = 2

    // 都不需要使用标签
    let c = sum(a, b)
    print (c) // 3
    ```
* 元祖参数
```swift
func compire (scores: [Int])-> (min: Int, max: Int) {
    var min = scores[0]
    var max = scores[0]
    for i in scores {
        if (i < min) {
            min = i
        } else if (i > max) {
            max = i
        }
    }
    return (min, max)
}

let scores = [1, 3, 2, 100, -19]

let c = compire(scores: scores)
print (c) // (min: -19, max: 100)
```
* 返回函数类型
```swift
// 函数返回类型声明参数不能有参数名
func getCompireFn() -> (([Int]) -> (min: Int, max: Int)) {
    func compire (scores: [Int])-> (min: Int, max: Int) {
        var min = scores[0]
        var max = scores[0]
        for i in scores {
            if (i < min) {
                min = i
            } else if (i > max) {
                max = i
            }
        }
        return (min, max)
    }
    
    // 返回函数
    return compire;
}
let scores = [1, 3, 2, 100, -19]

// 都不需要使用标签
let compire = getCompireFn()
let c = compire(scores)

print (c) // (min: -19, max: 100)
```
* 函数作为参数：参数名也不能加标签
```swift
func getMax(_ scores: [Int]) -> Int {
    var max = scores[0]
    for i in scores {
        if (i > max) {
            max = i
        }
    }
    return max
}

func getMin(_ scores: [Int]) -> Int {
    var min = scores[0]
    for i in scores {
        if (i < min) {
            min = i
        }
    }
    return min
}

func compire(_ p1: Int, _ p2: Int, _ fn: ([Int]) -> Int) -> Int {
    return fn([p1, p2])
}

var ans = compire(1, 100, getMax)
print(ans)

ans = compire(1, 100, getMin)
print(ans)
```
### 三元表达式
```swift
let n1 = 1
let n2 = n1 % 2 == 0 ? n1 : 0

print(n2) // 0
```
### 闭包函数
```swift
func getSumFn (_ a: Int, _ b: Int)-> (Int) -> Int {
    func add(c: Int) -> Int {a + b + c}
    return add;
}


let sumFn = getSumFn(1, 2)
let c = sumFn(3)

print (c) // 6
```
### 自动闭包
```swift
var customersInLine = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]

// 函数闭包赋值，并没有执行
let customerProvider = { customersInLine.remove(at: 0) }
print(customersInLine.count)
// 5

print("Now serving \(customerProvider())!")
// Now serving Chris!
print(customersInLine.count)
// 4
```
### 匿名闭包
* 回调闭包
    ```swift
    let n1 = [1, 2, 3, 4]
    let n2 = n1.map({
        (n: Int) -> Int in
        return n * 2
    })

    // [2, 4, 6, 8]
    print(n2);
    ```
* 单行闭包简写
    ```swift
    let n1 = [1, 2, 3, 4]
    let n2 = n1.map({n in n % 2 == 0 ? n : 0})

    // [0, 2, 0, 4]
    print(n2);
    ```
* 闭包省略参数：通过位置操作
    ```swift
    let n1 = [1, 2, 3, 4]
    let n2 = n1.map({$0 % 2 == 0 ? $0 : 0})

    // [0, 2, 0, 4]
    print(n2);
    ```
## 类
### 基础使用
* 访问自己属性：`self`
* 重写：父类方法同名`override`
* 重载：自己方法函数参数或返回值不同
```swift
class Caculator {
    var a: Int?
    var b = 100
    init(_ a: Int?) {
        print("init")
        self.a = a
    }
    deinit {
        print("对象释放操作")
    }
    func add() -> Int {
        return self.a! + self.b
    }
    
    func add(c: Int) -> Int {
        return self.a! + self.b + c
    }
    
    // 重写父类方法用override
}

let n1 = Caculator(10)
print(n1.add()) // 110
print(n1.add(c: 1)) // 111
```
### getter / setter
* getter/setter
    ```swift
    class Caculator {
        var a: Int?

        var b: Int {
            get {
                print("get")
                return self.a! * 2
            }
            set {
                print("set")
                self.a = newValue
            }
        }
        
        init(a: Int) {
            self.a = a
        }
    }

    let n1 = Caculator(a: 10)

    n1.b = 20
    print(n1.b) // 40
    ```
* `willSet` / `didSet` 不能和getter同时使用
    ```swift
    class Caculator {
        var a: Int?

        var b: Int {
            willSet {
                print("willSet") // willSet
                print(newValue)  // 20
            }
            didSet {
                print("didSet")  // didSet
            }
        }
        
        init(a: Int) {
            self.a = a
            self.b = 100
        }
    }

    let n1 = Caculator(a: 10)

    n1.b = 20
    ```
### 结构体
* 结构体和类的区别：
    * 结构体是传值，类是传引用
    * 类的实例用let设置成常量以后，里面的属性是可以改变的，结构体不行
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
## 枚举
### 枚举固定类型
* 二次赋值只需要`.xxx`
```swift
enum Barcode {
    case a, b, c
}

var code = Barcode.a

print(code); // a
print(code == Barcode.a); // true
print(type(of: code)); // Barcode


code = .b
print(code); // b
```
>**不会**被隐式地赋值为 0，1，2 和 3。相反，这些枚举成员本身就是完备的值，这些值的类型是已经明确定义好的 `CompassPoint` 类型
### 使用枚举值
* 枚举键：`.rawValue`
* 枚举值
* 枚举公用方法：在枚举中定义`func`
```swift
enum school: Int {
    case teacher = 1
    case two, three, four
    func getFive() -> String {
        switch self {
        case .teacher:
            return "老师好"
        case .two, .three, .four:
            return "234"
        }
    }
}
let rawValue = school.three.rawValue
print(rawValue) // 3

let ans = school.three.getFive()
print(ans) // 234
```
### 枚举自定义结构类型
```swift
enum Barcode {
    case upc(Int, Int, Int, Int)
    case qrCode(String)
}

let code = Barcode.upc(1, 2, 3, 4);

print(code); // upc(1, 2, 3, 4)
```
### 遍历枚举
* 实现`CaseIterable`协议就能遍历
```swift
enum People: CaseIterable {
    case teacher;
    case student;
    case police;
}

print(People.allCases.count); // 3

for i in People.allCases {
    print(i); // teacher student police
}
```
## 并发性
### async
```swift
func connectUser(to server: String) async{
    async let userID = fetchUserID(from: server)
    async let username = fetchUsername(from: server)
    let greeting = await "Hello \(username), user ID \(userID)"
    print(greeting)
}
```
* 使用Task调用异步函数
```swift
Task {
    await connectUser(to: "primary")
}
```
## 协议
* 声明协议
    ```swift
    protocol Animal {
        var name: String { get }

        // mutating:可修改方法
        mutating func say()
    }
    ```
* 遵循协议
    ```swift
    protocol Animal {
        var name: String { get }

        // mutating:可修改方法
        mutating func say()
    }

    class People: Animal {
        var name: String;
        init(_ name: String) {
            self.name = name
        }
        func say() {
            print("我是人，我的名字是\(self.name)")
        }
    }

    let A = People("小黄")
    A.say() // 我是人，我的名字是小黄
    ```
## Error
* 最佳实践：声明错误类型
```swift
enum paramError: Error {
    case tooBig
    case tooSmall
    case typeErr
}
```
* defer:defer 代码块来表示在函数返回前，函数中最后执行的代码。无论函数是否会抛出错误，这段代码都将执行。
```swift

enum paramError: Error {
    case tooBig
    case tooSmall
    case typeErr
}

func getScoreLevel(_ score: Int)throws -> String {
    defer {
        print("返回前最后执行的代码");
    }
    print("正常开始")
    if (score > 100) {
        throw paramError.tooBig
    } else if (score < 0) {
        throw paramError.tooSmall
    }
    switch score {
    case let s where s > 60:
        return "及格"
    case let s where s < 60:
        return "不及格"
    case let s where s == 60:
        return "刚刚及格"
    default:
        print("未知类型\(score)")
    }
    return ""
}

let ans = try getScoreLevel(100)
print(ans)

//正常开始
//返回前最后执行的代码
//及格
```
## 泛型
```swift
func repeatArray<Item>(item: Item, num: Int) -> [Item]{
    var ans: [Item] = [];
    for _ in 0..<num {
        ans.append(item)
    }
    return ans
}

let ans = repeatArray(item: "Me", num: 4)
print(ans); // ["Me", "Me", "Me", "Me"]
```
>问题：泛型的where怎么用？where 来指定对类型的一系列需求，比如，限定类型实现某一个协议，限定两个类型是相同的，或者限定某个类必须有一个特定的父类。
```swift
func anyCommonElements<T: Sequence, U: Sequence>(_ lhs: T, _ rhs: U) -> Bool
    where T.Element: Equatable, T.Element == U.Element
{
    for lhsItem in lhs {
        for rhsItem in rhs {
            if lhsItem == rhsItem {
                return true
            }
        }
    }
    return false
}
let ans = anyCommonElements([1, 2, 3], [3])
print(ans)
```
## 检测api可用性
```swift
if #available(iOS 10, macOS 10.12, *) {
    // 在 iOS 使用 iOS 10 的 API, 在 macOS 使用 macOS 10.12 的 API
} else {
    // 使用先前版本的 iOS 和 macOS 的 API
}
```