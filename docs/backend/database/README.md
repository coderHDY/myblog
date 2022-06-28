---
title: mongodb
date: 2022-06-15
---
## 介绍数据库
:::: tabs
::: tab label=文档
* [起步教程](https://www.mongodb.com/docs/guides/)
* [增删改查文档](https://www.mongodb.com/docs/manual/crud/)
* [安装](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#std-label-install)
* [可视化工具](https://www.mongodb.com/try/download/compass)
* [教程](https://www.bilibili.com/video/BV15k4y1m7BF?p=5&spm_id_from=pageDriver&vd_source=d76df0f3dd1e3afd6121a11edec4a28f)
:::
::: tab label=分类
* `关系型数据库`:RDBMS
    * MySQL、Orical、SQL Server、DB2
    * 关系型数据库全是`表`
* `非关系型数据库`NOSQL
    * MongoDB、redis
    * MongoDB存储的是JSON（BSON）
:::
::: tab label=安装命令
```
brew tap mongodb/brew

brew update

brew install mongodb-community@5.0

brew --prefix

brew services start mongodb-community@5.0

brew services stop mongodb-community@5.0

```
* 功能文件夹
```shell
sudo mkdir -p /usr/local/var/mongodb
sudo mkdir -p /usr/local/var/log/mongodb
```
* 启动命令
```shell
# 指定数据存储位置
sudo mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork

# 启动数据库的服务器：保存数据
mongod

# 开启默认数据库客户端：操作数据
mongo

# 开启指定目录数据库
mongo --dbpath /usr/XXXX/mongodb --logpath /usr/XXX/log/mongodb/mongo.log --fork

# 自定义端口
--port 10086
```
>tip：如果mac拒绝打开就在访达按`cmd+打开`，会吧应用加入白名单
:::
::::
## 主要命令
:::: tabs
::: tab label=概念
* 数据库（`database`）
* 集合（`collection`）
* 文档（`document`）
>增删改查操作文档
:::
::: tab label=命令
```shell
show dbs
use dbName
# 当前位置
db
# 查看集合
show collections
```
:::
::: tab label=CRUD
* 增(create)删(del)查(read)改(update)
* mongodb**数据库和集合都不用手动创建**，插入文档的时候会自动创建
```shell
db.students.insert({name: "hdy",age: 18})

# 遍历查找所有
db.students.find()
```
:::
::::