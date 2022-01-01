---
title: 错误解决
date: 2021-11-10
---
## 权限问题

::::tabs
::: tab label=目录加上管理员权限
```shell
sudo chown -R $USER 你没有权限的那个的路径
# 例
sudo chown -R $USER /home/work/yunying-docs
```
:::
::: tab label=文件设置
```shell
# root权限下
visudo
```
```txt
# 目录：/etc/sudoers
Defaults    secure_path = /sbin:/bin:/usr/sbin:/usr/bin
Defaults    secure_path = /sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin

work    ALL=(ALL)       ALL
work    ALL=NOPASSWD:ALL
```
:::
:::tab label=启动nginx
* 普通用户没有权限启动nginx
```shell
sudo chmod -R a+rw /usr/local/nginx 
```
:::
::::


## nginx服务器问题
* nginx报错有三种可能的处理方式：
:::: tabs
::: tab label=查看关闭端口号
1. 查看端口号占用进程(已知端口号)
```shell
netstat -tunlp|grep 端口号
```

2. 关闭进程号
```shell
kill -9 进程号
```
> 如果关闭无权限
```shell
sudo kill -9 进程号
```
:::

::: tab label=重启nginx服务
1. 停止nginx服务
```shell
/usr/local/nginx/sbin/nginx -s stop
```
2. 开启nginx服务
```shell
/usr/local/nginx/sbin/nginx
```

3. 重载nginx配置
```shell
service nginx reload
```
:::
::: tab label=关闭后台进程
1. 查找后台任务进程号
```shell
ps -ef | grep nginx
```
2. 关闭进程
```shell
kill -9 进程号
```
> 如果关闭无权限
```shell
sudo kill -9 进程号
```
:::
::::

## 自动流水线问题
::: tip 
* 每次用nohup开启的时候，都会显示后台任务进程号，最好找个地方记下来
:::
* 查找进程号（如果忘记了）
```shell
ps -A

ps -ef | grep nginx
```
* 关闭自动流水线
```shell
kill -9 进程号
```
* 持续查看流水线进度
```shell
tail -f /home/work/yunying-docs/nohup.out
```

## 新安装nginx权限问题
* 如果普通用户没有nginx服务权限，会有这个报错
```txt
# 报错
nginx: [alert] could not open error log file: open() "/usr/local/nginx/logs/error.log" failed (13: Permission denied)
2021/11/06 10:13:38 [emerg] 21685#0: open() "/usr/local/nginx/logs/access.log" failed (13: Permission denied)
```
* 原因：打开这两个文件要有root权限
* 解决：用管理员身份删除这两个文件,然后[杀死nginx进程](./#nginx服务器问题)，再开

## 服务器下npm run build失败
* 停止在95%，
```txt
emitting (95%) CopyPlugin 
```
* 解决1
```shell
npm install -g npm
```
* 解决2:webpack有output: {path：XXX},需要特殊处理