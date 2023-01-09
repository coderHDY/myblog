---
title: markdown插件编写
date: 2023-01-09 8:00:00
---
::: tip
* markdown-it解析markdown语法
* markdown-it-container增加自定义解析语法
:::
```js
const container = require('markdown-it-container');
var md = require('markdown-it')();

const mdFile = `
::: CodePen val=1 select=[1, 2, 3]
* 啦啦啦啦
:::
`;

const mark = "CodePen";
md.use(container, mark, {
    render: function (tokens, idx) {
        const token = tokens[idx];
        if (tokens[idx].nesting === 1) {
            const reg3 = new RegExp(`${mark}\\s+(.*)`);
            const rawAttrs = token.info.match(reg3);
            return `<${mark} ${rawAttrs}>\n`;
        } else {
            return `</${mark}>\n`;
        }
    }
});

console.log(md.render(mdFile));
```