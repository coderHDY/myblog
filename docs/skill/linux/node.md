---
title: node
date: 2021-11-11
---
## 安装nvm
```shell
wget https://github.com/nvm-sh/nvm/archive/refs/tags/v0.38.0.tar.gz

mkdir /root/.nvm
tar -zxvf v0.38.0.tar.gz --strip-components 1  -C /root/.nvm
vi ~/.bash_profile
```
```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
```shell
source ~/.bash_profile
```
## 安装
* 自选版本：[官方链接](https://nodejs.org/en/download/)
```shell
wget https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz

tar xf node-v12.18.1-linux-x64.tar.xz

# 改名
mv node-v12.18.1-linux-x64 nodejs

# 建立软链，直接设做全局的方法(注意当前路径)
ln -s /root/packages/nodejs/bin/npm /usr/local/bin/
ln -s /root/packages/nodejs/bin/node /usr/local/bin/
```

## 普通用户安装
```shell
wget https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz

tar xf node-v12.18.1-linux-x64.tar.xz

# 改名
mv node-v12.18.1-linux-x64 nodejs

# 建立本用户的bash环境链接
vi ~/.bashrc
```
```shell
# 注意当前nodejs位置
export PATH="${PATH}:${HOME}/packages/nodejs/bin"
```
```shell
# 使修改生效
source ~/.bashrc

npm --version
node --version
```