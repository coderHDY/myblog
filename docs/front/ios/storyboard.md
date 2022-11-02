---
title: Storyboard
date: 2022-11-02
---
## 跳转传值
### 构造函数传参
:::: tabs
::: tab label=ViewController
* 界面指着`button`按住`control`拖到代码里，生成`关联`
```swift{7}
class ViewController: UIViewController {

    @IBAction func touchJump(_ sender: Any) {
        print("跳转");
        
        // 传值方法
        let view2 = ViewController2(data: "好好学习");

        self.present(view2, animated: true) {
            print("跳转成功");
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
    }
}
```
:::
::: tab label=ViewController2
* new file -> Cocoa Touch class -> subclass of: `UIViewController`
```swift{4-11,22-25}
import UIKit

class ViewController2: UIViewController {
    var data: String?;
    init(data: String? = nil) {
        super.init(nibName: nil, bundle: nil);
        self.data = data
    }
    required init?(coder: NSCoder) {
        super.init(coder: coder);
    }
    override func viewDidLoad() {
        super.viewDidLoad()

        self.view.backgroundColor = UIColor.red;
        let button = UIButton(frame: CGRect(x: 100, y: 100, width: 100, height: 50))
        button.setTitle("返回", for: UIControl.State.normal)
        button.addTarget(self, action: #selector(back), for: UIControl.Event.touchUpInside)
        self.view.addSubview(button);
        
        // 接受界面入参
        let label = UILabel(frame: CGRect(x: 20, y: 200, width: 200, height: 50));
        label.text = data;
        label.textColor = UIColor.white;
        self.view.addSubview(label);
    }
    @objc func back () {
        self.dismiss(animated: true) {
            print("返回了");
        }
    }
}
```
:::
::::
### 指定内容传参
:::: tabs
::: tab label=ViewController
```swift{8-10}
import UIKit
class ViewController: UIViewController {
    @IBAction func touchJump(_ sender: Any) {
        print("跳转");

        // 传值方法
        let view2 = ViewController2();
        view2.data = "我是第一个页面给你的值！";

        self.present(view2, animated: true) {
            print("跳转成功");
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
    }
}
```
:::
::: tab label=ViewController2
```swift{4,14-18}
import UIKit

class ViewController2: UIViewController {
    var data: String?;
    override func viewDidLoad() {
        super.viewDidLoad()

        self.view.backgroundColor = UIColor.red;
        let button = UIButton(frame: CGRect(x: 100, y: 100, width: 100, height: 50))
        button.setTitle("返回", for: UIControl.State.normal)
        button.addTarget(self, action: #selector(back), for: UIControl.Event.touchUpInside)
        self.view.addSubview(button);
        
        // 接受界面入参
        let label = UILabel(frame: CGRect(x: 20, y: 200, width: 200, height: 50));
        label.text = data;
        label.textColor = UIColor.white;
        self.view.addSubview(label);
    }
    @objc func back () {
        self.dismiss(animated: true) {
            print("返回了");
        }
    }
}
```
:::
::::
## 反向传值
### 协议传值法
:::: tabs
::: tab label=ViewController
```swift{3,4,9,10,18-21}
import UIKit

// 实现了指定的接受参数的协议
class ViewController: UIViewController, View2BackSendDataProtocal {
    var label: UILabel?;
    @IBAction func jump(_ sender: Any) {
        let view2 = View2();

        // 进入该页面的时候赋值 delegate 为自己，让其调用自己实现协议的赋值方法
        view2.delegate = self;
        self.present(view2, animated: true);
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        label = UILabel(frame: CGRect(x: 20, y: 100, width: 100, height: 50));
        self.view.addSubview(label!);
    }
    func sendData(data: String) {
        print("data: \(data)");
        self.label?.text = data;
    }
}
```
:::
::: tab label=View2
```swift{3-6,10-11,25-26}
import UIKit

// 只做一个协议，实现此协议的 类 需要实现【接受值的方法】
protocol View2BackSendDataProtocal {
    func sendData(data: String);
}

class View2: UIViewController {

    // delegate是一个【实现了指定协议的类】
    var delegate: View2BackSendDataProtocal?
    override func viewDidLoad() {
        super.viewDidLoad()

        self.view.backgroundColor = UIColor.gray;
        let button = UIButton(frame: CGRect(x: 20, y: 100, width: 100, height: 50));
        button.setTitle("返回", for: UIControl.State.normal);
        button.addTarget(self, action: #selector(jump), for: UIControl.Event.touchUpInside);
        self.view.addSubview(button);
    }

    // 返回事件
    @objc func jump() {

        // 此时 delegate 已经是可以接收值的 【实现了协议的类】 了
        delegate?.sendData(data: "儿子给你的数据！");
        self.dismiss(animated: true);
    }
}
```
:::
::::
### 闭包传值法
:::: tabs
::: tab label=ViewController
```swift
import UIKit

class ViewController: UIViewController {
    var label: UILabel?;
    @IBAction func jump(_ sender: Any) {

        // 实现view2 的闭包函数
        let view2 = View2();
        view2.closure = ({s -> Void in
            self.label?.text = s;
        })
        self.present(view2, animated: true);
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        label = UILabel(frame: CGRect(x: 20, y: 100, width: 100, height: 50));
        self.view.addSubview(label!);
    }
}
```
:::
::: tab laebl=View2
```swift
import UIKit
class View2: UIViewController {
    
    // 预留一个 optional类型的闭包
    var closure: ((String) -> Void)?

    override func viewDidLoad() {
        super.viewDidLoad()

        self.view.backgroundColor = UIColor.gray;
        let button = UIButton(frame: CGRect(x: 20, y: 100, width: 100, height: 50));
        button.setTitle("返回", for: UIControl.State.normal);
        button.addTarget(self, action: #selector(jump), for: UIControl.Event.touchUpInside);
        self.view.addSubview(button);
    }
    @objc func jump() {

        // 调用自己的闭包函数
        self.closure!("还你的值！");
        self.dismiss(animated: true);
    }
}
```
:::
::::
## UINavigator
:::: tabs
::: tab label=第一个页面
* 将默认的view删掉，加上一个`UINavigation`
* 新建第一个页面controller 的 class
* 点击 root view -> 右边第四个选项关联class
```swift{8-11}
import UIKit
class TableViewController: UITableViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        self.title = "首页";

        // 设置顶部导航栏
        self.navigationController?.navigationBar.barTintColor = UIColor.white;
        let barItem = UIBarButtonItem(barButtonSystemItem: UIBarButtonItem.SystemItem.done, target: self, action: #selector(click));
        self.navigationItem.leftBarButtonItem = barItem;
    }

    @objc func click() {

        // 跳转到第二个页面
        let viewController = ViewController();
        self.navigationController?.pushViewController(viewController, animated: true);
    }
  
    // MARK: - Table view data source
    override func numberOfSections(in tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 0
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return 0
    }
}
```
:::
::: tab label=第二个页面
* ViewController
```swift{10-12,15-18}
import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.title = "关于";
        self.view.backgroundColor = UIColor.blue;
        
        // 不写默认是出栈，title是上一个栈的title
        let backItem = UIBarButtonItem(title: "< 返回", style: UIBarButtonItem.Style.plain, target: self, action: #selector(pop))
        self.navigationItem.leftBarButtonItem = backItem;
        
    }
    @objc func pop() {
        self.navigationController?.popViewController(animated: true);
        _ = self.navigationController?.popViewController(animated: true);
    }
}
```
::::
## UITabBarController
* Main创建`UITabController`
* 按住`control`从`UITabBarController`拖到要关联的页面即可完成关联
* 创建多个viewController
```swift
import UIKit

class ViewController3: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        self.view.backgroundColor = UIColor.green;
        let item = UITabBarItem(tabBarSystemItem: UITabBarItem.SystemItem.contacts, tag: 2);
        self.tabBarItem.title = "我的"; // 无效
        self.tabBarItem = item;
        self.tabBarItem.badgeValue = "99+"
    }
}
```
> 由于是在`viewDidLoad`初始化的，所以初始化需要在页面首次被打开才会展示正确。书上说可以在`视图控制器的构造方法中进行`
## UIAlertController
```swift
import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad();

        let button = UIButton(frame: CGRect(x: 20, y: 100, width: 100, height: 50));
        button.setTitle("出弹窗", for: UIControl.State.normal);
        button.backgroundColor = UIColor.darkGray;
        button.tintColor = UIColor.white;
        button.addTarget(self, action: #selector(alert), for: UIControl.Event.touchUpInside);
        self.view.addSubview(button);
    }
    @objc func alert() {
        // 整体的弹框
        let alertController = UIAlertController(title: "确定要点击吗？", message: "系统会崩溃哦～", preferredStyle: .alert);
        
        // 用户的选项
        let ok = UIAlertAction(title: "确定", style: UIAlertAction.Style.default) {action in
            print("点击了确定");
        }
        let cancel = UIAlertAction(title: "取消", style: UIAlertAction.Style.cancel) {action in
            print("点击了取消");
        }
        alertController.addAction(ok);
        alertController.addAction(cancel);
        self.present(alertController, animated: true);
    }
}
```
## WebView
:::: tabs
::: tab label=基础webview
```swift
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let webView = UIWebView(frame: self.view.bounds);
        let url = URL(string: "https://www.bilibili.com");
        let request = URLRequest(url: url!);
        
        webView.loadRequest(request);
        self.view.addSubview(webView);
    }
}
```
:::
::::