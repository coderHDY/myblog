# nginx
## 基础命令
* 安装
```shell
brew install nginx
```
* 查看版本
```shell
nginx -v
```
* 启动
```shell
nginx
```
* 重启
```shell
nginx-s reopen
```
* 关闭
```
nginx -s stop
```
* 退出
```shell
nginx-s quit
```
* 找到配置文件夹
```shell
open /opt/homebrew/etc/nginx/

# 找到文件： nginx.conf
```
* 配置重载
```shell
nginx -s reload
```