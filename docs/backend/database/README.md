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
::: tab label=导入命令
1. [下载链接的工具](https://www.mongodb.com/try/download/database-tools?tck=docs_databasetools)
2. book20220615.gz是数据文件
3. 用这个命令导入
    ```shell
    ./mongorestore --host=127.0.0.1 --port=27018 --gzip --archive=./book20220615.gz
    ```
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
::: tab label=对应关系
* 一对一：内嵌文档解决
* 一对多：将`一的_id`存到 -> `多的文档`里面去
    ```json
    {
        name: "书桌",
        user_id: "wq4234u23h4894u21394e234ew"
    }
    ```
* 多对多：将对应的id以数组的形式存储
    ```json
    {
        _id: "asdf9087asdf682832e23293j22j2"
        name: "黄老师",
        students: [
            "asdf24234923i42j409348023i4j23w",
            "234rf2h29298202093j2mjk2nkjn22k",
            "fas0fas7fa6dfa5er23jnr3n4o24924"
        ]
    }
    ----
    {
        _id: "fdsf6atf78asdf8asd789587d7fa2"
        name: "黄同学",
        teachers: [
            "f564as76t787872y3bdb283h92h2792",
            "sf6sa67f867dfg7a68768w7r92h2oni",
            "fas9d8f90a8g9a87g989809r8092uj3"
        ]
    }
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
// 查询所有符合条件 -> 【返回数组】
db.stu.find()

// 名字内 有 "hdy"的：可能是字符串，也【可能是数组】
// { "name" : [ "swk", "hdy" ], "age" : 300 }
db.stu.find({name: "hdy"})
db.stu.findMany({name: "hdy"})

// 第一个符合条件的文档 -> 【返回文档对象】
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
|操作|作用|例|
|---|---|---|
| $in | 限定某个值的范围 | `db.user.find({name: {$in: ["tangseng", "swk"]}})` |
| $nin | | `{name: {$nin: ["tangseng", "swk"]}}` |
| $eq | 等于 | `{age: {$eq: 500}}` |
| $ne | 不等于 | `{age: {$ne: 500}}` |
| $gt | 大于 | `{age: {$gt: 500}}` |
| $gte | 大于等于 | `{age: {$gte: 500}}` |
| $lt | 小于 | `{age: {$lt: 500}}` |
| $lte | 小等于 | `{age: {$lte: 500}}` |
| $all | **某个值包含所有** | `db.tea.find({"student.book": {$all: ["1", "2"]}})` |
| $size | 根据数组大小(只能传数字) | `db.tea.find({name: "黄老师", student: {$size: 3}})` |
| $regex | [官网](https://www.mongodb.com/docs/manual/reference/operator/query/regex/) | `db.tea.find({name: {$not: {$regex: "^黄"}}})` |
| $and | 与 | `db.tea.find({"student.age": { $gt: 10}, name: "孙老师"})` |
| $or | 或 | `db.user.find({$or: [{age: {$lt: 5}}, {age: {$gt: 26}}]})` |
| $nor | 不是...也不是... | `db.tea.find({$nor: [{name: "孙老师"}, {"student.age": {$gt: 20}}]})` |
| $not | **某个值**不是 | `db.tea.find({"student.age": {$not: {$eq: 20}}})` |
| $expr | 内部表达式（a字段大于b字段） |`db.monthlyBudget.find({$expr:{$gt:["$a", "$b"]}})`|
---
|限制|作用|例|
|---|---|---|
| limit()  | | `db.user.find({age: {$gt: 19, $lt: 30}}).limit(5)` |
| skip  | | `db.user.find().limit(20).skip(5)` |
| sort  | | `db.tea.find().sort({"student.0.age": 1})` |
| collation  | | |
| project  | | |
|投影|说明只需要哪些字段| `db.tea.find({}, {name: 1})` |
:::
* 多条件查询方法
    ```mongodb
    // 与
    db.user.find({age: { $gt: 490, $lte: 500 }})
    db.tea.find({"student.age": { $gt: 10}, name: "孙老师"})
    db.tea.find({$and: [{name: {$eq: "孙老师"}}, {"student.age": {$in: [20, 30]}}]})
    // 或
    db.user.find({$or: [{age: {$lt: 5}}, {age: {$gt: 26}}]})
    // 正则
    db.user.find({name: /黄/})
    ```
    >{age: {$eq: 500}} 和 {age: 500} 的区别：age是数组的画第二种方式会查询`包含`
## 改 options
::: tip

|命令|作用|例|
|---|---|------------------------------------|
| $set  | 只修改指定数据 | `db.tea.update({name: "宋老师"}, {$set: {age: 12}})` |
| $inc  | 自增 | `db.user.update({age: 3}, {$inc: {age: 30}})` |
| $addToSet | 操作【数组】如果存在就不添加了，否则推入 | `db.user.update({name: "zbj"}, {$addToSet: {"hobby.movies": "Mongo!!"}})`|
| $rename|文档字段改名|`db.articles.updateMany({}, {$rename: {subject: "place"}})`|
| $addFields|||
| $project | | |
| $unset | 删除文档的某个字段 | `db.articles.update({_id: 1}, {$unset: {place: "", views: ""}})` |
| $replaceRoot | | |
| $replaceWith | | |
---

* 操作数组

|命令|作用|例|
|---|---|---|
| $push | 推入数据（最后） | `db.user.update({name: "zbj"}, {$push: {"hobby.movies": "Mongo!!"}})`|
| $pop |移除第一个或最后一个(-1第一个)| `db.tea.update({name: "黄老师"}, {$pop: {"student": -1}})`|
| $pull |移除指定项|`db.profiles.updateOne({_id:1},{$pull:{votes:{$gte:6}}})`|
:::
## Mongoose
:::: tabs
::: tab label=介绍
* [官网](https://mongoosejs.com/docs/guide.html)
* nodejs 里对 Mongodb 模块的封装
* 主要提供了`Schema`类型校验，让nosql有了数据规范，防止插入不规则的数据
:::
::: tab label=主要模块
* Schema：(模式对象)
* Model：(集合对象)将mongodb的collection封装成对象，创建入参需要有Schema对象，做本对象的数据约束
* Document：(文档对象)相当于具体的一个document对象
:::
::: tab label=使用步骤
* 连接
    ```js
    const mongoose = require('mongoose');

    // connect(`mongodb://${ host }:${ port }/${ database }`)
    mongoose.connect('mongodb://localhost:27017/test');
    ```
* 创建Schema、创建Model
    ```js
    // model(collectionName, Schema)
    const Cat = mongoose.model('Cat', { name: String });
    ```
* 安装
    ```js
    // 方式一
    Cat.create({ name: "李四" }, () => console.log('success'));

    // 方式二
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));
    ```
:::
::: tab label=增
* 底层为mongodb的`insert`可插入`单个文档`或者`数组`
* 返回：(err, newDoc)
    ```js
    // model_user.create({ docs }, callback);
    // model_user.create([ {docs}, {docs} ], callback);
    model_user.create({
        name: "hdy",
        age: 18,
    },
    (err, doc) => {
        if (!err) {
            console.log(doc._id);
        } else {
            console.log("err");
        }
    });
    ```
:::
::: tab label=删
* 物理删除
    ```js
    remove(conditions[, callback])
    deleteOne(conditions[, callback])
    deleteMany(conditions[, callback])
    ```
* 逻辑删除：定义一个字段，专门显示是否删除。
    ```js
    updateOne({id: "123aa"}, {IS_VAL: false})
    ```
:::
::: tab label=改
* 使用
    ```js
    const update = async () => {
        const ans = await model_user.updateOne({ _id: "62c56bc2ddc8f86c64b873d3" }, { $set: { name: "黄大仙儿" } });
        console.log(ans);
    }
    update();
    ```
* 方法：
    ```js
    update(selector, options[, callback])
    updateOne()
    updateMany()

    replaceOne({ _id: 24601 }, { name: 'Jean Valjean' });
    ```
:::
::: tab label=查
* 方法：`model_user.find({ name: "hdy" }, ["age"], { limit: 1 })`
    ```js
    // model_user.find({conditions}, projection, options, callback).exex();
    // await model_user.find({conditions}, projection, options);

    // 单个查询：返回对象，非数组
    // model_user.findById()
    // model_user.findOne()

    const search = async () => {
        const ans = await model_user.find({ name: "hdy" }, ["age"], { limit: 1 });
        console.log(ans); // [ { _id: new ObjectId("62c56bc2ddc8f86c64b873d3"), age: 18 } ]
    }

    search();
    ```
    >使用`_id`查询时，可以直接使用id号，不需要整个和mongodb一样ObjectId(id)：`model_user.findById({ _id: "62c56bc2ddc8f86c64b873d3" }, { name: 1 }, { limit: 1 });`
* options用法
    ```js
    "name _id -age"
    ["name", "_id"]
    { name: 1, _id: 0 }
    ```
* 返回的doc是`Document对象`，实际上就是`Model的实例`
    ```js
    const search = async () => {
        const ans = await model_user.findById({ _id: "62c56bc2ddc8f86c64b873d3" }, { name: 1 }, { limit: 1 });
        console.log(ans instanceof model_user); // true
    }
    search();
    ```
:::
::: tab label=其他常用
* 计数：`model_user.count({ _id: "62c56bc2ddc8f86c64b873d3" });`
:::
::::
## Mongoose封装目录
:::: tabs
::: tab label=config
* 常量导出`config/db.js`
```js
module.exports = {
  default: "book",
  connections: {
    book: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 27017,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      dbName: process.env.DB_NAME || "book",
      pool: 5,
    },
  },
};
```
:::
::: tab label=core
* 导出数据库连接函数`core/db.js`
```js
const mongoose = require("mongoose");
const log      = require("./logger");
const config   = require("../config/db");
const connections = {};
exports.createConnection = (code) => {
  if (!connections[code]) {
    log.warn("Create a connection.");
    const dbURL = exports.getDBURL(code);
    try {
      connections[code] = mongoose.createConnection(dbURL);
    } catch (e) {
      log.warn(e);
      return null;
    }
  }
  return connections[code];
};

exports.getDBURL = (db) => {
  const { host, port, dbName } = config.connections[db];
  const url = `mongodb://${host}:${port}/${dbName}`;
  return url;
};
```
:::
::: tab label=Model
* 导出原始操作数据库类：`core/model.js`
* [connect.model](https://mongoosejs.com/docs/api/connection.html#connection_Connection-model)
```js
const createError = require("http-errors");
const constant    = require("./constant");
const db          = require("./db");
const { INVALID, MOD_FIND_DEFAULT_SKIP, MOD_FIND_DEFAULT_LIMIT } = constant;

class Model {
  constructor (code, name, scheme) {

    // 固定的，数据库名
    const conn = db.createConnection(code);

    // 创建新的模型 @集合名 @Schema对象
    this.m = conn.model(name, scheme);
  }

  async create(obj) {
    try {
      delete obj.__v;
      // eslint-disable-next-line new-cap
      return await new this.m(obj).save();
    } catch (err) {
      console.log(obj, err);
      throw new createError.InternalServerError("新规错误！");
    }
  }

  async remove(id, obj = {}) {
    try {
      delete obj.__v;
      obj.valid = INVALID; // 0
      return await this.m.findByIdAndUpdate(id, obj).exec();
    } catch (err) {
      throw new createError.InternalServerError("删除错误！");
    }
  }

  async update(id, obj) {
    try {
      delete obj.__v;
      return await this.m.findByIdAndUpdate(id, obj).exec();
    } catch (err) {
      console.log(id, obj, err);
      throw new createError.InternalServerError("更新错误！");
    }
  }

  async updateByCondition(condition, obj, options) {
    try {
      delete obj.__v;
      return await this.m.update(condition, obj, options).exec();
    } catch (err) {
      console.log(condition, obj, options, err);
      throw new createError.InternalServerError("更新错误！");
    }
  }

  async get(id, projection = "") {
    try {
      return await this.m.findById(id, projection).exec();
    } catch (err) {
      throw new createError.InternalServerError("取得错误！");
    }
  }

  async getOne(condition, projection = "", options = {}) {
    try {
      return await this.m.findOne(condition, projection, options).exec();
    } catch (err) {
      throw new createError.InternalServerError("取得错误！");
    }
  }

  async getOneOrder(condition, projection = "", sort = "") {
    try {
      return await this.m.findOne(condition)
        .select(projection)
        .sort(sort)
        .exec();
    } catch (err) {
      throw new createError.InternalServerError("取得错误！");
    }
  }

  async count(condition) {
    try {
      return await this.m.count(condition).exec();
    } catch (err) {
      throw new createError.InternalServerError("取得错误！");
    }
  }

  async distinct(field, condition) {
    try {
      return await this.m.distinct(field, condition).exec();
    } catch (err) {
      throw new createError.InternalServerError("取得错误！");
    }
  }

  async getList(condition, projection,
    skip = MOD_FIND_DEFAULT_SKIP, // 0
    limit = MOD_FIND_DEFAULT_LIMIT, // 20
    sort = "") {
    try {
      return await this.m.find(condition)
        .select(projection)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .exec();
    } catch (err) {
      throw new createError.InternalServerError("取得错误！");
    }
  }
}

module.exports = Model;
```
:::
::: tab label=models
* 封装每个类型，制作一个集合：models/mod_book_list
* 模型：
    ```js
    const mongoose   = require("mongoose");
    const BookList = new mongoose.Schema({
        name:            { type: String,  description: "书单名" },
        weChatId:        { type: String,  description: "微信id" },
        description:    { type: String,  description: "书单简介" },
        cover:           { type: String,  description: "书单封面" },
        createBy:        { type: Object,  description: "创建人" },
        books:           [{ type: String, description: "isbn" }],
        stars:           [{ type: String, description: "点赞人weChatId" }],
    });

    // @DB_NAME_BOOK 固定数据库名
    const ModelBookList = new Model(DB_NAME_BOOK, SCHEMA_BOOK_LIST, BookList);
    ```
:::
::: tab label=controlers
* 导出每个类型（集合）的具体控制函数，以文件区分类型
```js
exports.nameused = async (req) => {
  log.info("booklist.nameused() start");
  const { name } = req.query;
  try {
    const condition = { valid: 1, name};
    const item = await ModelBookList.count(condition);
    return item !== 0;
  } catch (err){
    log.info("booklist.nameused() err");
    log.error(err);
    throw err;
  }
}
```
:::
::: tab label=routes
* 请求接收处理文件夹,一个文件处理一个模型的问题，接受请求，调用对应的controller
* routes/r_book_list.js
```js
router.get("/:docId", async (req, res) => {
  try {
    const result = await ctrlBokList.get(req);
    response.sendSuccess(res, result);
  } catch (err) {
    response.sendError(res, err);
  }
});
```
:::
::::
## 导入/导出
* [操作文档](https://www.mongodb.com/docs/database-tools/?_ga=2.120143496.1813334389.1658280512-1580676044.1657182971&_gac=1.171715988.1658291704.EAIaIQobChMIqJ7o-dGG-QIVnNxMAh2xzAwzEAAYASAAEgJKqfD_BwE)
:::: tabs
::: tab label=备份
* 切换到存放目录，执行：
```shell
mongodump -d book

# -d 数据库名
```
:::
::: tab label=恢复
* 跳转到恢复目标目录
```shell
mongorestore -d book_restore --dir ./book/

# -d 恢复数据库名
# --dir 存储位置

# 压缩文件
mongorestore --host=127.0.0.1 --port=27017 --gzip --archive=./book20220615.gz
```
:::
::: tab label=导出
```shell
mongoexport --collection=books --db=book --out=/Users/dreamarts/Desktop/test/book/book.json
```
:::
::: tab label=导入
```shell
mongoimport -c=books -d=test --mode=upsert --file=/Users/dreamarts/Desktop/test/book/book.json
```
:::
::::