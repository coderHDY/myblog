---
title: 常用命令
date: 2021-11-10
---
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