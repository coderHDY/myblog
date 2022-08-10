---
title: git
date: 2021-11-10
---
## 安装
* [官网](https://git-scm.com/)
* [更多安装版本](https://github.com/git/git/releases/tag/v2.17.2)
```shell
wget https://github.com/git/git/archive/refs/tags/v2.33.0.tar.gz

tar -zxvf v2.33.0.tar.gz

cd git-2.33.0

yum install autoconf automake libtool

make configure

./configure --prefix=/home/work

yum install zlib-devel

make

make install
```
```shell
vi ~/.bash_profile

# ~/.bash_profile 配置环境
export PATH=/root/git/bin:$PATH

source ~/.bash_profile

# sudo寻找命令：/sbin:/bin: /usr/sbin: /usr/bin
# 如果没有sudo权限可以开软链 fromOldLink toNewLink
ln -s /root/lib/git/bin/git /usr/bin/git
```
## 免密pull
::::tabs
::: tab label=ssh
1. 配置global 仓库user信息
2. 设置ssh-key
3. clone仓库
4. 后续就可以免密pull
:::
::: tab label=http
1. 获取仓库的http连接
2. 做链接拼接上自己的信息
```shell
git clone http://huangdeyu:TNPU4Uxp3JWsJPYvKmBr@gitlab.baidu.com/huangdeyu/yunying-docs.git
```
3. 后续也可以免密pull
:::
::::
## 服务器git免密登录
* [如何部署博客到服务器](https://github.com/mqyqingfeng/Blog/issues/243)
:::: steps
::: step
* 服务器创建本地仓库
  ```shell
  # 添加一个名为 git 的用户
  adduser git
  # 设置 git 用户的密码
  passwd git
  # 提权
  sudo visudo
  # 在文件里写入
  git ALL=(ALL:ALL) ALL
  # 保存提出，然后切换到 git 用户
  su git
  ```
:::

::: step
* 本地使用git身份登录服务器
  ```shell
  ssh -v git@10.14.xxx.xxx

  # 输入密码
  ```
:::

::: step
* 服务器创建免密登录（公私钥）
  ```shell
  # 进入用户主目录
  cd ~

  # 创建 .ssh 目录
  mkdir .ssh && cd .ssh

  # 创建 authorized_keys 文件
  touch authorized_keys
  ```
* 在本地起一个终端，获取本地公钥
  ```shell
  cat ~/.ssh/id_rsa.pub
  ```
* 关联
  ```shell
  # 登陆服务器，将获取的公钥写入服务器的 authorized_keys
  echo "这里修改为你的公钥内容" >> ~/.ssh/authorized_keys

  # 给相关文件添加执行权限
  chmod 600 ~/.ssh/authorized_keys
  chmod 700 ~/.ssh
  ```
:::

::: step
* 完成远程免密登录
  ```shell
  ssh -v git@10.14.xxx.xxx
  ```
:::
::::
## 服务器git仓库
:::: steps
::: step
* 生成git仓库：`git@10.14.233.17:/home/www/website/blog.git`
```shell
# 进入代码仓库目录
cd /home/www/website

# 赋予 git 用户权限
sudo chown git:git /home/www/website

# 创建代码目录
mkdir blog.git

# 进入代码目录
cd blog.git

# 初始化
git init --bare .
```
>`git init --bare` 初始化仓库只包括版本控制文件
:::

::: step
* 借助一个 hooks，在有代码提交到该仓库的时候，将提交的代码迁移到其他目录
  ```shell
  cd hooks

  # 创建并编辑 post-receive 文件
  vim post-receive

  # 这里是 post-receive 写入的内容

  #!/bin/bash
  git --work-tree=/home/www/website/blog checkout -f

  # 赋予执行权限
  chmod +x post-receive

  # 退出目录到 blog.git 同级目录并创建文件
  cd ../../ && mkdir blog
  ```
:::

::: step
* 推到远程仓库
  ```shell
  git push -f git@10.14.233.17:/home/www/website/blog.git master
  ```
* 可以把上传文件存放到`deploy.sh`文件
:::
::::
