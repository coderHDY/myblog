---
title: base64文件上传下载
date: 2022-12-08
---
# base64文件上传下载
::: codePen width=375
```html{24,37-42,54}
<html>

<head>
    <title>base64和文件互转</title>
</head>

<body>
    <input type="file" id="fileInput" />
    <button id="upload">上传</button>
    <button id="download">下载</button>
    <p id="txt"></p>

    <script>
        let obj;
        // 文件读取
        upload.addEventListener("click", () => {
            if (fileInput.files.length < 0) console.wran("请选择文件再上传！");
            const fr = new FileReader();
            fr.onload = () => {
                obj = fr.result;
                txt.innerText = obj;
            }
            // 读取文件转换为 base64
            fr.readAsDataURL(fileInput.files[0]);
        });

        // 将 base64 有用信息分割出来
        const splitBase64 = (base64) => {
            const reg = /data\:([^;]+);base64,(.+)/;
            const info = {
                type: "",
                blob: "",
            }
            if (!reg.test(obj)) return info;
            const res = base64.match(reg);

            // 重点：base64 解码字符串，获取文件类型，转 u8array。让 blob 读取成为缓存
            const [type, content] = [res[1], atob(res[2])];
            info.type = fileNameMap[type];
            const unit8Array = new Uint8Array(content.length);
            unit8Array.forEach((_, i, arr) => arr[i] = content.charCodeAt(i));
            const blob = new Blob([unit8Array], { type })

            info.blob = blob;
            return info;
        }

        download.addEventListener("click", () => {
            // 重点：导出数据并下载
            const { type, blob } = splitBase64(obj);
            const a = document.createElement("a");
            a.download = `p${type}`;
            a.href = window.URL.createObjectURL(blob); // 将缓存转化成 url
            a.click();
        })

        // 文件类型和尾缀 map
        const fileNameMap = {
            "audio/aac": ".aac",
            "application/x-abiword": ".abw",
            "application/x-freearc": ".arc",
            "video/x-msvideo": ".avi",
            "application/vnd.amazon.ebook": ".azw",
            "application/octet-stream": ".bin",
            "image/bmp": ".bmp",
            "application/x-bzip": ".bz",
            "application/x-bzip2": ".bz2",
            "application/x-csh": ".csh",
            "text/css": ".css",
            "text/csv": ".csv",
            "application/msword": ".doc",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
            "application/vnd.ms-fontobject": ".eot",
            "application/epub + zip": ".epub",
            "image/ gif": ".gif",
            "text/html": ".html",
            "image/vnd.microsoft.icon": ".ico",
            "text/calendar": ".ics",
            "application/java-archive": ".jar",
            "image/jpeg": ".jpeg",
            "image/jpeg": ".jpg",
            "text/javascript": ".js",
            "application/json": ".json",
            "application/ ld + json": " .jsonld",
            "audio/midi": ".mid",
            "audio/x-midi": ".midi",
            "audio/mpeg": ".mp3",
            "video/mpeg": ".mpeg",
            "application/vnd.apple.installer + xml": ".mpkg",
            "application/vnd.oasis.opendocument.presentation": ".odp",
            "application/vnd.oasis.opendocument.spreadsheet": ".ods",
            "application/vnd.oasis.opendocument.text": ".odt",
            "audio/ogg": ".oga",
            "video/ogg": ".ogv",
            "application/ogg": ".ogx",
            "font/otf": ".otf",
            "image/png": ".png",
            "application/pdf": ".pdf",
            "application/vnd.ms-powerpoint": ".ppt",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation": ".pptx",
            "application/x-rar-compressed": ".rar",
            "application/rtf": ".rtf",
            "application/x-sh": ".sh",
            "image/svg + xml": ".svg",
            "application/x-shockwave-flash": ".swf",
            "application/x-tar": ".tar",
            "image/tiff": ".tiff",
            "font/ttf": ".ttf",
            "text/plain": ".txt",
            "application/vnd.visio": ".vsd",
            "audio/wav": ".wav",
            "audio/webm": ".weba",
            "video/webm": ".webm",
            "image/webp": ".webp",
            "font/woff": ".woff",
            "font/woff2": ".woff2",
            "application/xhtml + xml": ".xhtml",
            "application/vndms+excel": ".xls",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
            "application/xml": ".xml",
            "text/xml": ".xml",
            "application/vnd.mozilla.xul + xml": ".xul",
            "application/zip": ".zip",
            "video/3gpp": ".3gp",
            "audio/3gpp": ".3gp",
            "video/3gpp2": ".3g2",
            "audio/3gpp2": ".3g2",
            "application/x-7z-compressed": ".7z",
            "application/wps+writer": ".doc",
            "video/mp4": ".mp4",
            "application/vndopenxmlformats+officedocumentwordprocessingmldocument": ".docx",
            "text/markdown": ".md"
        };
    </script>

</body>

</html>
```
:::