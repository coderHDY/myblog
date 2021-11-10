# 常用命令

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