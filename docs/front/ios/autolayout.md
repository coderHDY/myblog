---
title: Autolayout
date: 2022-11-10
---
## 子元素隐藏
* 禁止子元素超出父元素高度
* 父元素设置：
```swfit
clipsToBounds = YES
```
## 动态加约束
* 代码添加多个元素的相互约束需要添加：
```swift
// subview 需添加约束元素本身
blueBtn.translatesAutoresizingMaskIntoConstraints = false;
```
```swift
blueBtn.widthAnchor.constraint(equalToConstant: 200).isActive = true;

blueBtn.leadingAnchor.constraint(equalTo: blueView.leadingAnchor, constant: 100).isActive = true;
```
* 集体生效
```swift
let btnLeading = blueBtn.leadingAnchor.constraint(equalTo: blueView.leadingAnchor, constant: 100);
let btnTop = blueBtn.bottomAnchor.constraint(equalTo: blueView.bottomAnchor, constant: 100);
let btnBottom = blueBtn.topAnchor.constraint(equalTo: blueView.topAnchor, constant: 100);
NSLayoutConstraint.activate([btnLeading, btnTop, btnBottom]);
```
## 动态添加元素
* 子元素的x/y是依照在父元素的边界实现的
```swift
let btn1 = UIButton(frame: CGRect(x: 200, y: 100, width: 100, height: 100));
btn1.setTitle("哈哈哈", for: UIControl.State.normal);
blueView.addSubview(btn1);
btn1.backgroundColor = UIColor.blue;
```
## 设置动态添加元素附着点
```swift
// 设置附着view
pickerView?.popoverPresentationController?.sourceView = self.datePickView

// 设置附着元素
pickerView?.popoverPresentationController?.sourceRect = self.datePickerButton.frame
```
## 动态改变优先级
```swift
redHeight0.priority = redHeight0.priority.rawValue < 201 ? UILayoutPriority(rawValue: 1000.0) : UILayoutPriority(rawValue: 200.0)
```
## 动态改变滚动高度
* `ScrollView`控制顶部、底部距离为固定值，中间子盒子一个一个撑起ScrollView
    * 设置`ScrollView`与父盒子/兄弟上下左右的高度属性，`priority`设置最高
    * `scrollView`设置与子View的top相等，子View的`bottom`相等
    * `ScrollView`与子View的`bottom`的`priority`设置**低**一点
* tableView？
## 断点调试
```swift
po self.contentScrollView
```
## 获取指定元素距离顶部的距离
```swift
// 获取【相对于父元素】位置
let offsetY = deepBlueView.frame.origin.y

// scrollView 滚动到指定位置
self.contentScrollView.contentOffset = CGPoint.init(x: 0, y: offsetY)
```