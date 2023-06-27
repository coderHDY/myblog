---
title: 基础知识点
date: 2023-06-25
---
## 苹果开发者计划
* 加入：99$/年
  * 推送/支付等功能
  * 上架app store
* 登陆真机：登陆iCloud账号
  * 首选项-performance-accounts-添加账号

## 创建项目配置
* `product Name`可以有中文，但不建议中文
* team：登陆一个iCloud账号即可
* `Orgamization Identifier`(组织标识符) ，一般为域名的倒写
* 项目标识符：默认组织标识符+产品名称，后可修改
* 界面开发方式：默Storyboard
* 生命周期（`life cycle`）：生命周期，例如应用home后台的回调，Storyboard只能选择`UIKit App Delegate`，Swift UI还可以选择`SwiftUI APP`
* 开发语言：swift
## 目录
* `Assets.xcassets`放所有的资源
* `LaunchScreen`放启动界面
## 运行到真机
* USB连电脑-保持解锁
* 选择项目工作空间最外层-`singing & Capabilities`-选中自动签名（`automatically manage signing`）
* 选择根项目-general-`Development Info`，选择对应版本，打包安装
## 运行其他项目
* 更改为自己的icloud账号
* 更改boundleId：选择项目工作空间最外层-`singing & Capabilities`- `bundle Identifier`
## 浏览视图对应的文件
* 选中view-点击顶部黄色按钮拿到该view的view controller-找到class，点进去就是view对应的文件
* 选中View -> 右上角的几条横线按钮 -> assistant -> 进入该view对应的代码视图
## 关联视图和代码
* control + 拖动
>有关联试图的代码前面圆圈按钮就是实心的，没有关联的是空心的
## 注释
* 单行注释：commond + /
* 多行注释：commond + option + /