---
title: UIKit
date: 2025-04-29
---
## 快捷查找
- UI控制器，从左到右分别是：`文件`，`历史`，`帮助文档`，`属性控制`，`布局控制`，`动作控制`
- 找到UI对应的控制器：`command + option + control + enter`
- 找到UI对应的控制器：选中UI - UIController - 右上角三横 - `assistant`
- 是否支持横屏：`General` - `Deployment Info` - `iPad orientation` - `Landscape`
- 默认启动控制器：主`storyboard`界面的**箭头指向哪个控制器就默认启动哪个控制器**
- **重复相似按钮创建**：多选 - `option + 拖动`
- 
## 键盘
- 展示键盘：选中模拟器 - `I/O` - `show keyboard`
- 展示键盘快捷键：`command + k`
- 选中数字输入框 - 设置属性 - `keyboard type`
- 数字输入：`number pad`
- 数字带小数点：`decimal pad`
- 关闭键盘
  - 方法1：`_textField.resignFirstResponder`
  - 方法2：`_textField.endEditing`
    ```c
    - (IBAction)calc:(id)sender {
        NSInteger ansVal = [_input1.text intValue] + [_input2.text intValue];
        _ans.text = [NSString stringWithFormat:@"%ld", ansVal];
        // 关闭键盘1
        // [_input1 resignFirstResponder];
        // [_input2 resignFirstResponder];

        // 关闭键盘2
        [self.view endEditing:YES];
    }
    ```

## UILabel
- 显示文本：`text`
## UITextField
- 获取/设置值：`text` 
  ```c
  - (IBAction)calc:(id)sender {
      NSInteger ansVal = [_input1.text intValue] + [_input2.text intValue];
      _ans.text = [NSString stringWithFormat:@"%ld", ansVal];
      [_input1 resignFirstResponder];
      [_input2 resignFirstResponder];
  }
  ```
- 获取焦点：`becomeFirstResponder`
- 关闭聚焦：`resignFirstResponder`
- 关闭聚焦：`[self.view endEditing: YES]`
- 密码控制：UI控制器`属性控制` - `secureTextEntry`
- 设置clearButton: `clear button`
- 设置按钮不可交互（没有交互效果）:属性设置`user interaction enabled` - `NO`

## UIButton
- 设置背景图片
  - style选`default`
  - 背景图片：`background`
- 关闭点击高亮：`type`选`custom`  
- 代码设置背景图
  ```c
  UIImage *img1 = [UIImage imageNamed:@"icon1"];
  UIImage *img2 = [UIImage imageNamed:@"icon2"];

  UIButton *b1 = [UIButton new];
  b1.frame = CGRectMake(100, 100, 50, 50);
  b1.backgroundColor = [UIColor redColor];
  [b1 setTitle:@"+" forState:UIControlStateNormal];
  [b1 setBackgroundImage:img1 forState:UIControlStateNormal];
  [b1 setBackgroundImage:img2 forState:UIControlStateHighlighted]; 
  ```
- 代码】按钮设置文字颜色
  ```c
  UIImage *img1 = [UIImage imageNamed:@"icon1"];
  UIImage *img2 = [UIImage imageNamed:@"icon2"];

  UIButton *b1 = [UIButton new];
  b1.frame = CGRectMake(100, 100, 50, 50);
  b1.backgroundColor = [UIColor redColor];
  [b1 setTitle:@"+" forState:UIControlStateNormal];
  [b1 setBackgroundImage:img1 forState:UIControlStateNormal];
  [b1 setBackgroundImage:img2 forState:UIControlStateHighlighted]; 
  ```
- 代码】设置事件
  ```c
  [b1 addTarget:self action:@selector(buttonClicked) forControlEvents:UIControlEventTouchUpInside];
  - (void) buttonClicked {
      NSLog(@"button clicked");
  }
  ```
- 设置按钮点击没有变颜色(关闭交互效果)：`interaction enabled` - `NO`
## 动画 
- 放大缩小
  ```c
  [UIView animateWithDuration:0.5
                  animations:^{
                    self.imgBtn.transform = CGAffineTransformScale(
                        self.imgBtn.transform, 0.9, 0.9);
                  }];


  //    放大
  [UIView animateWithDuration:0.5
                  animations:^{
                    self.imgBtn.transform = CGAffineTransformScale(
                        self.imgBtn.transform, 1.1, 1.1);
                  }];
  ```
- 左右移动
  ```c
  //    向左移动
  [UIView animateWithDuration:0.5
                    animations:^{
                      self.imgBtn.transform = CGAffineTransformTranslate(
                          self.imgBtn.transform, -10, 0);
                    }];

  ```
- 旋转【`M_PI_4`】`180度的1/4`
```c
[UIView animateWithDuration:0.5 animations:^{
    self->_btn1.transform = CGAffineTransformRotate(self->_btn1.transform, M_PI_4);
}];
```
- 延迟执行动画`delay`
```c
[UIView animateWithDuration:0.5 delay:1 options:UIViewAnimationOptionCurveEaseInOut animations:^{
    self->_btn1.transform = CGAffineTransformRotate(self->_btn1.transform, M_PI_4);
} completion:^(BOOL finished) {
    NSLog(@"动画完成");
}];
```


## frame控制
::: tip
- 注意：修改frame属性时，避免给元素添加布局约束
- `frame`:  元素大小和位置
- `bounds`: 元素大小
- `center`: 元素位置
- `transform`: 元素旋转/缩放/翻转/镜像
:::
- 上下移动【注：不能直接赋值，需要取出来再赋值】
  ```c
  // 上
  CGRect frame = self.imgBtn.frame;
  frame.origin.y -= 10;
  self.imgBtn.frame = frame;
  // 下
  CGRect frame = self.imgBtn.frame;
  frame.origin.y += 10;
  self.imgBtn.frame = frame;
  ```
- 放大缩小
  ```c
  CGRect frame = self.imgBtn.frame;
  frame.origin.x -= 5;
  frame.origin.y -= 5;
  frame.size.width += 10;
  frame.size.height += 10;
  self.imgBtn.frame = frame;
  ```

## UIImage
- 获取图片
  ```c
  UIImage *image = [UIImage imageNamed:@"image.png"];
  ```

## UIColor
- 获取颜色:`[UIColor colorWithRed:0.0 green:0.0 blue:0.0 alpha:1.0]`
- 基础颜色：`[UIColor redColor]`

## 技巧-tag
::: warning
- 这么做很难调试，尽量少用
:::
- 获取tag对应的元素：`(UITextField *)[self.view viewWithTag:tag]`


## UIView
- 获取子元素：`[self.view viewWithTag:tag]`
- 添加子元素：`addSubview`
- 移除元素：`removeFromSuperview`

## NSBundle
- 获取软件根路径：`[NSBundle mainBundle]`
- 获取资源路径：`NSString *path = [NSBundle mainBundle] pathForResource:@"pic.plist" ofType:nil]`
- 获取资源：`NSArray *array = [NSArray arrayWithContentsOfFile:path]`

## 设置border
```objc
self.imgBtn.layer.borderWidth = 1;
self.imgBtn.layer.borderColor = [UIColor redColor].CGColor;
self.imgBtn.layer.cornerRadius = 5;
// 圆角以外的部分裁剪掉
self.imgBtn.layer.masksToBounds = YES;
```

## 改变状态栏
::: tip
- 在ViewController中设置
:::
- 改颜色
```objc
- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}
```
- 隐藏状态栏
```objc
- (BOOL)prefersStatusBarHidden {
    return YES;
}
```

## 把元素设置到最上方
- 代码设置，类似前端的`z-index`
```c
[self.view bringSubviewToFront:self.imgBtn];
```
## 删除元素
- 根据父元素清空父元素
  ```c
  [self.view.subviews makeObjectsPerformSelector:@selector(removeFromSuperview)];
  ```
- 根据被删除的元素移出页面
  ```c
  [self.imgBtn removeFromSuperview];
  ```