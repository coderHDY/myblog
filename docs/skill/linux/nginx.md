---
title: nginx
date: 2021-12-23
---
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
  ```shell
  nginx -s stop
  ```
* 退出
  ```shell
  nginx-s quit
  ```
* 找到配置文件夹`nginx.conf`
  ```shell
  open /opt/homebrew/etc/nginx/
  ```
* 修改配置文件
  ```shell
  vim nginx.conf
  ```
* 配置重载
  ```shell
  nginx -s reload

  # systemctl reload nginx
  ```

## 其他
:::: steps
::: step
* 安装
  ```shell
  yum install -y nginx
  ```

:::
::: step
* 启动
  ```shell
  systemctl start nginx
  ```
:::
::: step
* 设置为在系统启动时自动启动
  ```shell
  systemctl enable nginx
  ```
:::
::: step
* index.html 文件，放在 /home/www/website/ 目录下
  ```shell
  # 创建目录
  mkdir -p /home/www/website
  ```
:::
::::