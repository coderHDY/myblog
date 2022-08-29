---
title: 上传文件
date: 2022-08-19
---
## 前端:Form表单形式
::: tip
可以利用iframe防止form表单跳转
:::
```html
<body>
    <form action="http://127.0.0.1:8888/uploadFile" enctype="multipart/form-data" method="post" target="frameName">
        <div>
            <input type="file" name="file">
            <input type="submit" value="上传!">
        </div>
    </form>
    <iframe src="" frameborder="0" name="frameName"></iframe>
</body>
```
## 前端fetch
```js
<body>
    <input type="file" id="fileInput" />
    <button id="uploade">上传</button>

    <script>
        uploade.addEventListener('click', () => {
            if (fileInput.files.length < 0) console.wran('请选择文件再上传！');
            const formData = new FormData();
            formData.append("file", fileInput.files[0]);
            fetch('http://127.0.0.1:8888/uploadFile', {
                method: "POST",
                body: formData,
            }).then(res => res.text()).then(res => console.log(res));
        })
    </script>

</body>
```
## 服务器接收文件
* 引入`multer`包
```js
const multer = require("multer");

// check：定义存储文件位置和文件名
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'files')
    },
    filename: function (req, file, cb) {
        const type = file.mimetype.split("/")[1];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + `.${type}`)
    }
})
const upload = multer({ storage: storage });

// 写入处理中间件
app.post("/uploadFile", upload.single("file"), uploadFile);
```
## 服务器只读文件
```js
const multer = require("multer");
const readerStorage = multer.memoryStorage();
const fileReader = multer({ storage: readerStorage }).single("file");
const readFile = (req, res) => {
    fileReader(req, res, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(req.file);
            res.send('111');
        }
    })
}

app.post("/readFile", readFile);
```
## 静态资源服务器
```js
const express = require("express");
const path = require("path");

app.use("/file", express.static(path.join(__dirname, "../../files")));
```
>前端访问：xxx/file/xxx.mp4
## 测试
:::: tabs
::: tab label=前端
```html
<body>
    <input type="file" id="fileInput" />
    <button id="uploade">上传</button>


    <script>
        const server = "http://127.0.0.1:8888";
        uploade.addEventListener('click', () => {
            if (fileInput.files.length < 0) console.wran('请选择文件再上传！');
            const formData = new FormData();
            formData.append("file", fileInput.files[0]);
            fetch(`${server}/uploadFile`, {
                method: "POST",
                body: formData,
            }).then(res => res.json()).then(res => addFile(res));
        });

        const addFile = (file) => {
            const { filename, mimetype, originalname } = file;
            const type = mimetype.match(/[a-zA-Z0-9]+(?=\/)/g)[0];
            const el = document.createElement(type === "video" ? "video" : "img");
            el.src = `${server}/file/${filename}`;
            if (type === "video") {
                el.setAttribute("controls", true);
                el.setAttribute("autoplay", true);
            }
            document.body.append(el);
        };
    </script>

</body>
```
:::
::: tab label=后端
```js
const multer = require("multer");

// 写文件功能
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'files')
    },
    filename: function (req, file, cb) {
        const type = file.mimetype.match(/(?<=\/)[a-zA-Z0-9]+/);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + `.${type}`)
    }
})
module.exports.upload = multer({ storage });

module.exports.uploadFile = async (req, res) => {
    res.send(req.file);
}
```
```js
app.post("/uploadFile", upload.single("file"), uploadFile);
```
:::
::::