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
- 密码控制：UI控制器`属性控制` - `secureTextEntry`

## UIButton
- 设置背景图片
  - style选`default`
  - 背景图片：`background`
- 关闭点击高亮：`type`选`custom`  