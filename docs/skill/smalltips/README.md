---
title: 工作小技巧
date: 2021-11-02
---



## 新机软件
### Homebrew
1. 安装git
2. `sh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"`
* [一键安装包](https://gitee.com/cunkai/HomebrewCN)
* 安装路径查看：
    ```shell
    brew config | grep HOMEBREW
    ```
### wget
```shell
brew install wget 
```
* 后续命令跟提示输入完整
### curl下载失败
* [改DNS](https://blog.csdn.net/bryong/article/details/108374261)
::: tip 
* 就是把DNS改成其一，然后重启shell
>8.8.8.8  
>114.114.114.114
::: 
### 安装zsh
```shell
# brew install oh-my-zsh

sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

# curl
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)”
```
* [开启zsh自动提示](https://blog.csdn.net/sunyv1/article/details/108049209)
    ```shell
    cd ～/.oh-my-zsh/plugins
    git clone https://github.com/zsh-users/zsh-autosuggestions.git
    ```
* Zsh自定义环境路径导出：
    ```shell
    open ~/.zshrc
    ```
    ```shell
    export PATH=${PATH}:/Users/dreamarts/Documents/packages/mongodb-macos-x86_64-5.0.9/bin
    ```
* Zsh改主题：
    ```shell
    open ~/.zshrc
    # ZSH_THEME="random"
    ```
* 更改
```shell
open ~/.zshrc
# plugins=(git)

plugins=(git zsh-autosuggestions)
```
* 生效配置文件
```shell
source ~/.zshrc
```
### 安装nvm
:::: tabs
::: tab label=brew
* 安装
    ```shell
    brew install nvm  #（后续配置跟弹出教程走）
    ```
* 配置node寻找python环境：
    ```shell
    npm config set python /opt/homebrew/opt/python@3.9/libexec/bin/python
    ```
:::
::: tab label=mac
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
:::
::: tab label=windows
* [下载包](https://github.com/coreybutler/nvm-windows/releases)
* 安装（不能有中文路径）
* 双击nvm（配置环境）
:::
::::
### npm淘宝镜像
* 换淘宝
    ```shell
    npm config set registry https://registry.npmmirror.com

    npm get registry
    ```
* 换回来
    ```shell
    npm config set registry https://registry.npmjs.org
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
### 调试手机网页
:::: tabs
::: tab label=苹果手机
* 苹果电脑连接mac
* mac打开safari
* safari -> 偏好设置 -> 高级 -> 显示开发菜单
* 手机safari打开网页，苹果电脑就能看调试页面。
:::
::: tab label=内网穿透
* 方式1：花生壳 / ngrok网穿透，进行公网服务器映射
* 方式2：局域网内开启服务器（nginx、webpack devserver、vite等），局域网可以访问
:::
::: tab label=vConsole
* 两种方式添加
1. publuc文件夹
```HTML
<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
<script>
    // VConsole will be exported to `window.VConsole` by default.
    var vConsole = new window.VConsole();
</script>
```
2. 项目添加
```shell
npm install vconsole
```
```js
import Vconsole from 'vconsole';
new Vconsole();
console.log('test');
```

:::
::::
### chrome插件下载
::: tip
1. [极简插件：](https://chrome.zzzmh.cn/)
2. [Extfans](https://www.extfans.com/)
3. [Crx4Chrome](http://www.crx4.com/)
* 下载 -> chrome开发者模式 -> 安装
:::
### mac直达文件
* 访达 -> shift + command + G
### vscode配置文件
* commond + shift + p -> default settings
## macAPP清除互联网下载标志
* 路径换成.app所在路径，在`应用程序`->`显示包内容`可以查看
```shell
sudo xattr -r -d com.apple.quarantine /path/to/application.app
```