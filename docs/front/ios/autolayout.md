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
## 动态改变优先级
```swift
redHeight0.priority = redHeight0.priority.rawValue < 201 ? UILayoutPriority(rawValue: 1000.0) : UILayoutPriority(rawValue: 200.0)
```