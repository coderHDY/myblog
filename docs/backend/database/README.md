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
## 主要概念
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
::: tab label=id
* 创建文件自动会生成 `_id`
```mongodb
_id: 62bc6137a0f1600f6f65c3fd
```
* 也可以自己手动创建，生成不会重复的一个Id
```
> ObjectId()
```
:::
::::
## 增
::: tip
```mongodb
db.stu.insert({"name": "hdy", "age": 18})

db.stu.insert([
    {"name": "hdy", "age": 18, sex: "man"},
    {"name": "hdy", "age": 18, sex: "man"},
    {"name": "hdy", "age": 18, sex: "man"}]
)

db.stu.insertOne()

db.stu.insertMany()
```
:::
## 查
::: tip
```mongodb
// 查询所有符合条件 -> 返回数组
db.stu.find()
db.stu.find({name: "hdy"})
db.stu.findMany({name: "hdy"})

// 第一个符合条件的文档 -> 返回文档对象
db.stu.findOne({name: "hdy"})

// 统计个数
db.stu.find({name: "hdy"}).count()
db.stu.find({name: "hdy"}).length()
```
:::
## 改
::: tip
* 主要方法
```mongodb
// 改一个
db.collection.update()
db.collection.updateOne()

// 改多个
db.collection.updateMany()

// 替换一个
db.collection.replaceOne()
```
* options
```mongodb
// 默认用新对象替换旧对象
db.stu.update({name: "hdy"}, {age: 28})

// 修改指定属性 $set
db.stu.update({name: "hdy"}, { $set: {age: 28} })

// 同时可以增加属性
db.stu.update({name: "hdy", age: 28}, { $set:{age: 18, sex: "???"} })

// 删除指定属性：$unset
db.stu.updateMany({name: "hdy", age: 18}, { $unset:{age: 1, sex: 1} })
```
* 第三个参数
```mongodb
db.collection.update(
    <query>,
    <options>,
    {
        upsert: boolean,
        multi: boolean,
        writeConcern: document,
        collation: document
    }

)


db.stu.update({name: "hdy"}, { $set:{age: 28} }, { multi: true })
```
:::