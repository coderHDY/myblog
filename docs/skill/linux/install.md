---
title: 软件安装
date: 2022-08-11
---
## 创建新用户
```shell
adduser work

passwd work

# 分配管理员权限
visudo
```
## 建立软链
```shell
# 前一个是文件所在目录 后面是系统命令需要调用的目录
ln -s /root/packages/nodejs/bin/npm /usr/local/bin/
```
## wget
```shell
yum install wget
```
## curl升级
```shell
yum install wget gcc openssl-devel -y
wget https://curl.haxx.se/download/curl-7.67.0.tar.gz
tar -zxvf curl-7.67.0.tar.gz
cd curl-7.67.0

# 修改为：用户根路径/curl
./configure --with-ssl --prefix=/usr/local/curl
make
make install

# 修改为：用户根路径/curl
echo "export PATH=/usr/local/curl/bin:$PATH" >> /etc/profile
source /etc/profile
curl --version
```

## nginx
* [参考](https://cloud.tencent.com/developer/article/1626878)
```shell
# 改源
sudo yum install -y epel-release
sudo yum -y update

sudo yum install -y nginx
```