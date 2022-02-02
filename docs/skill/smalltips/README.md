---
title: 工作小技巧
date: 2021-11-02
---



## 新机软件
### curl下载失败
* [改DNS](https://blog.csdn.net/bryong/article/details/108374261)
::: tip 
* 就是把DNS改成其一，然后重启shell
>8.8.8.8  
>114.114.114.114
::: 
### 安装zsh
```shell
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```
* [开启zsh自动提示](https://blog.csdn.net/sunyv1/article/details/108049209)
```shell
git clone https://github.com/zsh-users/zsh-autosuggestions.git

open ~/.zshrc
```
* 更改
```shell
# plugins=(git)

plugins=(git zsh-autosuggestions)
```
* 生效配置文件
```shell
source ~/.zshrc
```
### 安装nvm
* 安装：[官网](https://github.com/nvm-sh/nvm)
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
* 更新nvm命令：
```shell
open ~/.zshrc
```
* 打开文件的最下面加上：
```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```
* 生效配置文件
```shell
source ~/.zshrc
```
### 安装vue-devtool
* 能访问外网直接取扩展程序下载
* 不能访问外网的情况下：
:::: steps
::: step
* 官网下载
```shell
git clone git@github.com:vuejs/devtools.git 
```
:::
::: step
* 使用yarn安装（npm安装会有问题）
```shell
npm install -g yarn

# 换淘宝镜像
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global

# 检查
yarn config get registry
```
:::
::: step
安装依赖
```shell
yarn install
yarn run build
```
:::
::: step
* chrome扩展程序 -> 开发者模式 -> 添加已解压包 -> packages\shell-chrome文件夹
:::
::::
## 工作调试
### 手机端打印
```shell
npm install vconsole
```
```js
import Vconsole from 'vconsole';
new Vconsole();
console.log('test');
```
### 调试手机网页
* 苹果电脑连接mac
* mac打开safari
* safari -> 偏好设置 -> 高级 -> 显示开发菜单
* 手机safari打开网页，苹果电脑就能看调试页面。

### mac直达文件
* 访达 -> shift + command + G
### vscode配置文件
* commond + shift + p -> default settings