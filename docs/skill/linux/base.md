---
title: 常用命令
date: 2021-11-10
---
## 基础命令
```shell
cd ./xxx
ls -al
rm -rf ./*.log
mkdir react-demo

ps -a u x # ps 查看进程

kill 3790 # 杀掉进程

lsof -i:3000 # 查看端口号使用情况
lsof -i | grep LISTEN  # 找到所有正在被监听的端口
```
## 命令帮助
```shell
# man
man mkdir

xxx -h
xxx --help
```
## 文件操作
### 新建文件
```shell
```
### 新建文件夹
```shell
# 文件夹
mkdir ./project

# 文件
touch ./index.js
```
### 删除文件夹
```shell
rmdir ./project

# 递归删除(删除文件夹及所有子文件)
rm -r ./project
# 强制递归删除
rm -rf ./project
```
### 移动文件
```shell
mv ./source.txt ./target

# 移动并强制覆盖
mv -f ./source/a.txt ./target

# 移动不覆盖
mv -n ./source/a.txt ./target
```
### 复制文件
```shell
cp ./source.txt ./target/
# 递归复制
cp -R ./source/a.txt ./target/ 
```
### 查看文件
```shell
cat
head
tail
```
### 编辑文件
```shell
vi
vim
nano
```
## 查找安装软件
### gblic
```shell
# 所有版本
strings /lib64/libc.so.6 | grep GLIBC
```
### nginx
```shell
# 查找目录
whereis nginx
```

## 任务管理

* 找到端口号对应的进程号
```shell
lsof -i:8000
```
* 杀死进程号
```shell
kill -9 23222
```

## 角色管理
* 新建角色
> 需要在root角色下
```shell
useradd A

passwd A

# 分配管理员权限
visudo
```
* 切换角色
```shell
su A
```

* 删除角色
```shell
userdel A -r
```
## 生成目录结构树
```shell
find . -print | sed -e's;[^/]*/;|____;g;s;____|; |;g'
```