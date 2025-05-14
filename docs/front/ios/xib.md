---
title: Xib
date: 2025-05-14
---
## xib和storyboard的区别
- xib是轻量级的可视化设计器(组件级)
- storyboard是大型的可视化设计器(页面级)

## xib的使用
- 设置宽高：拖入view后，设置属性：`size: freeform`

## 加载xib代码
::: tip
- **拿xib文件的时候不用考虑文件夹结构，因为xib文件会被编译到`app bundle`中，都是虚拟Group的。**
- 这段加载xib文件代码最好直接重写进同名类方法中`DYAppView appView = [DYAppView appView];`
:::
```objc
 // 1.从根目录加载xib
UIView *view = [[[NSBundle mainBundle] loadNibNamed:@"MyView" owner:self options:nil] firstObject];
// 2.设置frame
view.frame = CGRectMake(0, 0, 100, 100);
// 3.添加到当前视图
[self.view addSubview:view];
```

## 拿到xib的子控件/赋值
1. `viewWithTag`(不推荐用)
```objc
// 1.设置tag 100
// 2.拿到控件
UILabel *label = [self.view viewWithTag:100];
```
2. `IBOutlet`(推荐用)
```objc
// 1. 为xib文件设置`File's Owner`为当前同名类
// 2.在xib中设置控件的`IBOutlet`属性
@property (weak, nonatomic) IBOutlet UILabel *label;
// 2.在`awakeFromNib`中赋值
appView.imageVIewIcon.image = [UIImage imageNamed:@"icon"];
appView.lbName.text = @"hello world";
```