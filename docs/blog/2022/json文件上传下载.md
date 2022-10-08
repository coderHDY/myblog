---
title: json文件上传下载
date: 2022-10-08
---
## json文件上传下载
::: tip
* 上传：
    1. input：file 取文件
    2. `FileReader` 读文件
    3. `TextDecoder`、`Uint8Array`将 buffer / ArrayBuffer 转 String
* 下载
    1. JSON.stringify转化成字符串
    2. Blob转化成**不可变的类文件对象**
    3. `URL.createObjectURL`将Blob对象生成url链接
    4. 制造a标签设置下载文件名`a.download = "p.json";`
    5. 设置下载内容`a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')`
    6. 触发a标签点击事件
:::
```html{13,17-20,30-37}
<body>
    <input type="file" id="fileInput" />
    <button id="upload">上传</button>
    <button id="download">下载</button>

    <p id="p"></p>

    <script>
        let obj;
        upload.addEventListener('click', () => {
            if (fileInput.files.length < 0) console.wran('请选择文件再上传！');
            const fr = new FileReader();
            fr.readAsArrayBuffer(fileInput.files[0]);
            fr.onload = (e) => {
                const buffer = fr.result;

                // 重点：buffer 转 string
                var enc = new TextDecoder("utf-8");
                var arr = new Uint8Array(buffer);
                const str = enc.decode(arr);

                p.innerText = str;
                obj = JSON.parse(str);
            }
        });

        download.addEventListener("click", () => {
            const data = JSON.stringify(obj, null, 4);

            // 重点：导出数据并下载
            const blob = new Blob([data], { type: 'text/json' });
            const e = new MouseEvent('click');
            const a = document.createElement('a');
            a.download = "p.json";
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            a.dispatchEvent(e);
        })
    </script>

</body>
```