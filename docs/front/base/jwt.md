---
title: 加密
date: 2022-08-15
---
## JWT
:::: tabs
::: tab label=介绍
* 使用固定的scriteKey进行对称加密/非对称加密
* 生成加密token`bearer header.payload.sign`
* 传给客户端
* 客户端向服务器、关联服务器、微服务发送请求，携带token，服务器端即可验证身份。
* 取代了cookie-sessionID形式的传递方式，好处：
  * 易于扩展
  * 分布式服务器
  * 多网站相关联
:::
::: tab label=加密
```js
const jwt = require("jsonwebtoken");
const secretKey = "coderHDY";

// 规范要求带 Bearer
const generateToken = (payload) => {
    const token =
        "Bearer " +
        jwt.sign(payload, secretKey, {
            expiresIn: 60 * 60,
        });
    return token;
};

const token = generateToken({ name: "coderHDY", pwd: "123456" });
```
:::
::: tab label=解密
* 中间件模式
```js
const jwt = require("jsonwebtoken");
const secretKey = "coderHDY";

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, secretKey, function (err, decoded) {
        if (err) {
            console.log("verify error", err);
            return res.json({ code: "404", msg: "token无效" });
        }
        console.log("verify decoded: ", decoded);
        console.log('验证通过');
        next();
    });
};
```
:::
::: tab label=express-jwt
* [官网](https://github.com/auth0/express-jwt)
* [教程](https://www.cnblogs.com/zkqiang/p/11810203.html)
:::
::::
## encodeURIComponent
::: tip
* jsAPI，本质上不属于加密
* 但是可以将除了`A-Z a-z 0-9 - _ . ! ~ * ' ( )`进行转义
* 是encodeURI的升级版，encodeURI有更多的不转义字符
* encodeURIComponent 使用的是 `UTF-8` 编码规则来编的.
* 转义两次原因：
  * **容器接收时会自动解码一次，而容器解码方式是不是utf-8就不一定了**
  * **前端传递时转义两次，无论服务器解码方式是不是utf-8都可以将`二次转义字符`转化成正确的`一段转义字符`。后端代码接受到再解码一次，能准确拿到utf-8解码字符**
:::
:::: tabs
::: tab label=不转义
* 前端
```js{1}
const str = "你好啊大头鬼? asdlkfj; *7&.,";
fetch(`./b.js?s=${str}`)
    .then(res => res.text())
    .then(res => console.log(res));
```
* 后端
```js{4-7}
app.get('/b.js', (req, res) => {
    console.log(req.query);
    /* 
        {
            s: '你好啊大头鬼? asdlkfj;*7',
            '.,': ''
        }
    */
    return res.send('哈哈哈解析错了');
})
```
:::
::: tab label=转义一次
* 前端
```js{1}
const str = encodeURIComponent("你好啊大头鬼? asdlkfj; *7&.,");
fetch(`./b.js?s=${str}`)
    .then(res => res.text())
    .then(res => console.log(res));
```
* 后端
```js{4}
app.get('/b.js', (req, res) => {
    console.log(req.query.s);
    /* 
        '你好啊大头鬼? asdlkfj; *7&.,'
    */
    return res.send('不用转义，容器转义一次了，并且这里是utf-8转义，所以是正确的。');
})
```
:::
::: tab label=转义两次
* 前端
```js{1}
const str = encodeURIComponent(encodeURIComponent("你好啊大头鬼? asdlkfj; *7&.,"));
fetch(`./b.js?s=${str}`)
    .then(res => res.text())
    .then(res => console.log(res));

```
* 后端
```js{2}
app.get('/b.js', (req, res) => {
    console.log(decodeURIComponent(req.query.s)); // 你好啊大头鬼? asdlkfj; *7&.,
    return res.send('解析一次解析对了，并且很保险！');
})
```
:::
::::
## md5
::: tip
* 一种不可逆的加密方式
* 作用一：网络传输中输入两次密码、手机号、身份证等验证正确性，不使用明文传递密码、验证身份等信息
* 作用二：数据库存储密码使用md5转义，不使用明文，防止服务器被攻击用户关键信息泄露
:::
md5加密：
<md5 />