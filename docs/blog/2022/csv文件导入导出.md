---
title: csv文件导入导出
date: 2022-10-08 12:30:00
---
## csv文件导入导出
::: tip
* 库：[SheetJS](https://github.com/SheetJS/sheetjs)
:::
```html{31-40,65-68}
<body>
    <script src="https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js"></script>
    <style>
        table {
            overflow: scroll;
            white-space: nowrap;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid #333;
            padding: 1rem;
            max-width: 10rem;
            overflow: scroll;
        }
    </style>


    <input type="file" id="fileInput" />
    <button id="upload">上传</button>
    <button id="download">下载</button>

    <table id="table"></table>

    <script>
        console.log(XLSX);
        let objArr;
        upload.addEventListener('click', () => {
            if (fileInput.files.length < 0) console.wran('请选择文件再上传！');
            const fr = new FileReader();
            fr.readAsArrayBuffer(fileInput.files[0]);
            fr.onload = (e) => {
                const buffer = fr.result;
                const wb = XLSX.read(buffer, { type: "binary" });
                let worksheet = wb.Sheets[wb.SheetNames[1]];
                objArr = XLSX.utils.sheet_to_json(worksheet);
                obj2th(objArr[0]);
                objArr.forEach(item => obj2td(item));
            }
        });

        const obj2th = (obj) => {
            const thead = document.createElement("thead");
            const tr = document.createElement("tr");
            Object.keys(obj).map(item => {
                const th = document.createElement("th");
                th.innerText = item;
                tr.append(th);
            })
            thead.append(tr);
            table.append(thead);
        };
        const obj2td = (obj) => {
            const tr = document.createElement("tr");
            Object.values(obj).map(item => {
                const td = document.createElement("td");
                td.innerText = item;
                tr.append(td);
            })
            table.append(tr);
        };

        download.addEventListener("click", () => {
            const ws = XLSX.utils.json_to_sheet(objArr);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Data");
            XLSX.writeFileXLSX(wb, "啦啦啦导出文件.xlsx");
        })
    </script>

</body>
```
