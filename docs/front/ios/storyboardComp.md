---
title: 可视化常用组件
date: 2023-06-25
---
## autolayout对齐技巧
* 组件拖到安全区外，默认对其者是整个`屏幕view`，安全区内默认对齐者是`safe area`
* 设置`equal width`后，还会有比例属性，需要在约束位置将其改成`1`
## UIView
* 禁止元素展示到View组件以外：`clipsToBounds`属性钩上
## UILabel
* 多行文字：双击，在属性里面设置文字，按`option + enter`换行 - 下面设置`lines`，控制多行文本
* 变更颜色：color，选择第二个`color slider`，再选择`RGB slider` - 右边三个点选择`Device RGB`才是正确的RGB颜色
* 获取/设置文字：
```swift
textLabel.text ?? ""
textLabel.text!

textLabel.text = "coderhdy\n好好学习"
```
## UIButton
* 获取/更改按钮文字
* type可以直接设置上一些默认图标
* 要更改字体大小等属性，需要把`title`设置成`attributed`
* disable: `Enable`勾选取消
```swift
btn.titleLabel?.text! ?? ""
btn.titleLabel!.text!

// 规范，设置文字 + 状态
hiddenBtn.setTitle("你点啥", for: .normal)
// 或者，也行
btn.titleLabel!.text = "吃饭啦"
```
* 设置`hidden`
```swift
hiddenBtn.isHidden = true
```
### 按钮点击事件
* 添加事件方法：
  * 拖动视图到代码，`connection`选择`action`;`type`选择`UIButton`;`event`选择`touch up inside`
  * 或者直接选中按钮最左边属性`touch up inside`拖动到代码内
    ```swift
    @IBAction func uploadBtnClick(_ sender: UIButton) {
        sender.setTitle("你点啥", for: .normal)
        print("你点啥啊")
    }
    ```
  * 纯代码添加
    ```swift
    override func viewDidLoad() {
        super.viewDidLoad()
        btn2.addTarget(self, action: #selector(addBtnClick(_:)), for: .touchUpInside)
    }
    @objc func addBtnClick(_ sender: UIButton) {
        sender.setTitle("你点啥啊", for: .normal)
        print("你点啥啊")
    }
    ```

## UIStackView
* ios9新增组件
* 作用：轻松实现水平/垂直布局**子组件可以少设置很多约束，自动按照stack排列**
* `spacing`:每个控件的间距

## UIViewController
* 一个UIViewController就是一个页面
* 可以直接用代码创建一个界面，但是那个界面就只能用代码编写
* 默认场景对应的类是`UIViewController`
### 创建一个界面
* 推荐：添加`Controller目录`，放各个页面的Controller: new -> `Group`
* 创建文件`cocoa Touch class`**继承UIViewController**
* 视图选择新UIViewController，设置`class`和`module`
* 设置`Storyboard id`完成创建
### 操作视图
* 以`popup`打开：视图1选择一个按钮，`control`键+拖动到视图2，选择`present as popover`
    * 全屏：设置`presentation：fullScreen`
    * 关闭：self.dismiss
    ```swift
    @IBAction func closeBtn(_ sender: Any) {
        dismiss(animated: true)
    }
    ```
* 以代码控制打开**ID传`storyboard id`**
    ```swift
    @IBAction func openThirdPage(_ sender: UIButton) {
        let ThirdController = storyboard!.instantiateViewController(withIdentifier: "ThirdView")

        // 全屏幕打开popup
        ThirdController.modalPresentationStyle = .fullScreen;

        present(ThirdController, animated: true, completion: nil)
    }
    ```
### 路由
* 首页面：点击ViewController，勾选`is initial View Controller`