---
title: graphQL
date: 2022-10-27
---
## 作用及场景
* 将接口写的更细致
* 使用接口更灵活，不需要获取多余数据，让前端决定获取哪些数据
## 例子
```JS
constconst express = require('express');
const app = new express();
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

// 支持 String, Int, Float, Boolean, ID, [String], 以及自定义类型
// 传参：【!】为必须传参项
const schema = buildSchema(`
    type TypeBooks {
        name: String,
        desc: String,
        comments: [String]
    }
    type BookDetail {
        _id: Int,
        name: String,
        desc: String
    }
    type Query {
        hello: String,
        getName: String,
        getAge: Int,
        getAllNames: [String],
        Book: TypeBooks,
        bookDetail(_id: Int!): BookDetail
    }
`);
const root = {
    hello: async () => new Promise(res => setTimeout(() => res("hehehehehe"), 1000)),
    getName: () => "你好呀 HDY",
    getAge: () => 18,
    getAllNames: () => ["hdy", "张三", "李四"],
    Book: () => ({
        name: "炸裂志",
        desc: "好看的书",
        comments: ["1233", "3423ERQW4"]
    }),
    bookDetail: ({ _id }) => ({
        _id,
        name: "你不知道的JS",
        desc: "好书好书好书"

    })
}

app.use("/", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))


app.listen(8888, () => {
    console.log('listen 8888');
});
```