---
title: indexedDB
date: 2022-10-13 22:48:00
---
## 概念
* [参考文1](https://www.tangshuang.net/3735.html)
* [参考文2](https://www.zhangxinxu.com/wordpress/2017/07/html5-indexeddb-js-example/)
::: tip
* 支持浏览器：
* 大小限制：硬盘的一半
* 其他特性：
:::
## 起步
::: tip
1. 打开数据库。
2. 在数据库中创建一个对象仓库（object store）。
3. 启动一个事务，并发送一个请求来执行一些数据库操作，像增加或提取数据等。
4. 通过监听正确类型的 DOM 事件以等待操作完成。
5. 在操作结果上进行一些操作（可以在 request 对象中找到）
:::
## open
::: tip
* 作用：返回一个
* 使用：window.indexedDB.open(db, version)
* 入参：string, string
* 返回：异步创建，**需要success回调中拿到indexDB实例**
* tip： 如果数据库不存在，open 操作会创建该数据库，然后 `onupgradeneeded` 事件被触发，你需要在该事件的处理函数中创建数据库模式
:::
>indexDB实例应该先设置成功和失败的处理函数
```html
<body>

    <script>
        const req = window.indexedDB.open("todo");
        req.onsuccess = (e) => {
            console.log(e.target.result);  // IndexDB实例
        }
        req.onerror = (...rest) => {
            console.warn(rest);
        }
        console.log(req);
    </script>
</body>
```
## transaction
::: tip
* 作用：
* 调用：
* 入参：
* 返回：
:::
## 例子
::: tip
* 开始
:::
```HTML
<body>
    <button id="btn">show</button>
    <button id="addBtn">add</button>
    <button id="delBtn">del</button>

    <script>
        let db;

        const open = () => {
            const DBOpenRequest = window.indexedDB.open("todos");
            DBOpenRequest.onsuccess = e => {
                db = DBOpenRequest.result;
            }
            DBOpenRequest.onerror = (evt) => {
                console.error("openDb:", evt.target.errorCode);
            };
            DBOpenRequest.onupgradeneeded = (event) => {
                db = event.target.result;
                initDB(db);
            };
        }
        const initDB = (db) => {
            // 定义表
            const listStore = db.createObjectStore("list", { keyPath: "id", autoIncrement: true });
            // 定义数据列
            listStore.createIndex("id", "id", { unique: true });
            listStore.createIndex('val', 'val');
            listStore.createIndex('create', 'create');
            listStore.createIndex('deadline', 'deadline');
            listStore.createIndex('top', 'top');
            listStore.createIndex('done', 'done');
        }
        open();

        const showDB = () => {
            const trans = db.transaction("todos", "readwrite");
            console.log(trans);
        }
        const addTodo = () => {

            // 开启指定数据库表的事物，指名要的权限
            const trans = db.transaction("list", "readwrite");

            // 拿到操作数据库的对象
            const todosDb = trans.objectStore("list");
            const obj = {
                id: Math.floor(Math.random() * 1000),
                val: "吃饭",
                create: +new Date(),
                deadline: +new Date(),
                top: -1,
                done: false,
            }
            todosDb.add(obj);
        }
        const deleteTodo = () => {
            // 开启指定数据库表的事物，指名要的权限
            const trans = db.transaction("list", "readwrite");

            // 拿到操作数据库的对象
            const todosDb = trans.objectStore("list");
            todosDb.delete(2);
        }
        const show = async () => {
            // 开启指定数据库表的事物，指名要的权限
            const trans = db.transaction("list", "readwrite");

            // 拿到操作数据库的对象
            const todosDb = trans.objectStore("list");
            const ans = await todosDb.getAll();
            ans.onsuccess = () => {
                console.log(ans.result);
            }

        }
        btn.addEventListener("click", show);
        addBtn.addEventListener("click", addTodo);
        delBtn.addEventListener("click", deleteTodo);
    </script>
</body>
```