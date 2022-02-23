---
title: 项目相关
date: 2022-02-23
---
## 1.Vue实现一个防抖输入框
:::: tabs
::: tab label=server
```js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.listen('8888', () => console.log('listen 8888'));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const url = path.join(__dirname, './test.html');
    const code = fs.readFileSync(url);
    return res.send(code);
})

app.get('/search', (req, res) => {
    const query = req.query.s;
    console.log(query);
    setTimeout(() => res.send({data: query}), 1000);
})
```
:::
::: tab label=实现
```html{22-40}
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/vue@next"></script>
    <title>Document</title>
</head>

<body>
    <div id="app">
        <input type="text" v-model="v">
    </div>
    <script>
        const {
            createApp,
            ref,
            watchEffect,
            watch,
        } = Vue;
        const app = createApp({
            setup() {
                const v = ref('');
                changeVal = e => v.value = e.target.value;
                watchEffect((onIvalidate) => {
                    if (v.value.trim() === '') {
                        return;
                    }
                    const controler = new AbortController();
                    const {
                        signal
                    } = controler;
                    const timer = setTimeout(() => {
                        fetch(`/search?s=${v.value}`, {
                                signal,
                            })
                            .then(res => res.json())
                            .then(res => console.log(res))
                    }, 1000);
                    onIvalidate(() => {
                        controler.abort();
                        clearTimeout(timer);
                    });
                })
                return {
                    v,
                }
            }
        });
        app.mount('#app');
    </script>
</body>
```
:::
::::