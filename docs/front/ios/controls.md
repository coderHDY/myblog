---
title: 控制流
date: 2023-01-26
---
## String
* 声明可以隐式转换
    ```swift
    let a: Double = 70
    let a = 70.0
    print(a); // 70.0
    ```
* 其他操作无法隐式转换
    ```swift
    let label = "The width is "
    let width = 94

    //let widthLabel = label + width // 报错

    let widthLabel = label + String(width) 正确

     print(widthLabel)
    ```
* 转换String快捷方式
    ```swift
    let apples = 3
    let oranges = 5

    let fruitSummary = "我有 \(apples + oranges) 个水果."

    print(fruitSummary)
    ```
* 换行String
    ```swift
    let apples = 3
    let oranges = 5
    let q = """
    I said "我有 \(apples) 个苹果"
    我有 \(apples + oranges) 个水果"
    """

    print(q)
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
* ...运算符
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
### 条件判断
* if 赋值：去optional
    ```swift
    let name: String? = "黄德宇";
    print(name); // Optional("黄德宇")

    if let a = name {
        print("你好\(a)") // 你好黄德宇
    }
    ```
### switch
* 直接判断
* 多值判断
* 语句判断
>运行 switch 中匹配到的 case 语句之后，程序会退出 switch 语句，并不会继续向下运行，所以**不需要在每个子句结尾写 break。**
```swift
let score = 62

switch score {
case let s where s < 0 || s > 100:
    print("错误分数")
case 100:
    print("满分")
case 60,61,62:
    print("刚刚及格")
case let s where s < 60:
    print("不及格")
default:
    print("考得不错")
}
```
### 遍历
* 字典遍历无序
    ```swift
    let score = [
        "小黄": 90,
        "小李": 77,
        "小周": 68,
        "小沈": 98,
        "小呆": 99,
    ]

    // 无序遍历
    for (name, s) in score {
        print(name)
        print(s)
    }
    ```
### while / repeat...while
* while 直接判断
    ```swift
    var score = 8;

    while score < 10 {
        print(score)
        score += 1
    }
    ```
* repeat...while 执行一次再判断
```swift
var score = 10;

repeat {
    print(score)
    score += 1
} while score < 10
```
## 函数与闭包
### 函数基础写法
```swift
func sum (a: Int, b: Int)-> Int {
    return a + b
}

let a = 1
let b = 2

let c = sum(a: a, b: b)
print (c) // 3
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
### 匿名闭包
* 回调闭包
    ```swift{2-5}
    let n1 = [1, 2, 3, 4]
    let n2 = n1.map({
        (n: Int) -> Int in
        return n * 2
    })

    // [2, 4, 6, 8]
    print(n2);
    ```
* 单行闭包简写
    ```swift{2}
    let n1 = [1, 2, 3, 4]
    let n2 = n1.map({n in n % 2 == 0 ? n : 0})

    // [0, 2, 0, 4]
    print(n2);
    ```
* 闭包省略参数：通过位置操作
    ```swift{2}
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
