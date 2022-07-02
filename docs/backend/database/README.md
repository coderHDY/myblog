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
* 插入多条
```mongodb
for (let i = 0; i < 20000; i++) {
    db.user.insert({name: "hdy" + i, age: i})
}

// 单次更新更快
const arr = [];
for (let i = 0; i < 20000; i++) {
    arr.push({name: "hdy" + i, age: i});
}
db.user.insert(arr);
```
:::
## 查
::: tip
```mongodb{4}
// 查询所有符合条件 -> 返回数组
db.stu.find()

// 名字内 有 "hdy"的：可能是字符串，也【可能是数组】
// { "name" : [ "swk", "hdy" ], "age" : 300 }
db.stu.find({name: "hdy"})
db.stu.findMany({name: "hdy"})

// 第一个符合条件的文档 -> 返回文档对象
db.stu.findOne({name: "hdy"})

// 统计个数
db.stu.find({name: "hdy"}).count()
db.stu.find({name: "hdy"}).length()
```
* 查内嵌文档
```mongodb
// 查找movies是hero的这一条数据
{ "hobby" : { "cites" : [ "beijing", "shanghai", "shenzhen" ], "movies" : [ "sanguo", "hero" ] } }

db.user.find({"hobby.movies": "hero"})
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
```mongodb{4,10}
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
## 删
>一般不用物理删除
::: tip
* 主要方法
```mongodb
// 删除多个
db.stu.remove()
db.stu.deleteMany()

// 删除一个
db.stu.deleteOne()
```
* 参数
```mongodb
db.stu.remove(<query>, <justOne: boolean>)

// 删除一个
db.stu.remove({age: 28}, true)

// 清空集合(remove必须有参数)
db.stu.remove({})

// 性能更好的清空（删除集合）
db.stu.drop();
```
* 删除数据库
```mongodb
use test

db.dropDatabase()
```
:::

## 查 options
::: tip
* $in
* $nin
* $eq
* $gt
* $gte
* $lt
* $lte
* $all
---
* limit()
* skip
* sort
* collation
* project
:::
* 查询方法
    ```mongodb
    // 在、不在范围
    {name: {$in: ["tangseng", "swk"]}}
    {name: {$nin: ["tangseng", "swk"]}}

    // 比较
    {age: {$eq: 500}}
    {age: {$lt: 500}}
    {age: {$gt: 500}}
    {age: {$lte: 500}}
    {age: {$gte: 500}}

    // 组合
    {age: { $gt: 490, $lte: 500 }}
    ```
* 限制
```

```
## 改 options
::: tip
* $addFields
* $set
* $project
* $unset
* $replaceRoot
* $replaceWith
:::
* 数组插入 $push
```mongodb
{ "name" : "zbj", "hobby" : { "movies" : [ "Interstellar" ] } }
> db.user.update({name: "zbj"}, {$push: {"hobby.movies": "Mongo!!"}})
{ "name" : "zbj", "hobby" : { "movies" : [ "Interstellar", "Mongo!!" ] } }
```
* （如果没有才）插入 $addToSet
```mongodb
{"name" : "zbj", "hobby" : { "movies" : [ "Interstellar", "Mongo!!", "Mongo!!", "Mongo!!" ] } }
> db.user.update({name: "zbj"}, {$addToSet: {"hobby.movies": "Mongo!!"}})

// 没变
{"name" : "zbj", "hobby" : { "movies" : [ "Interstellar", "Mongo!!", "Mongo!!", "Mongo!!" ] } }
```