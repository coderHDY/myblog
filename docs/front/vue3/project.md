---
title: Vue3项目搭建
date: 2022-02-01
---
## 搭建
:::: tabs
::: tab label=创建
```shell
vue create vue3-system
```
:::
::: tab label=.editorconfig
* 整体代码风格文件，能保证在不同的编辑器代码风格统一
```shell
# https://EditorConfig.org
[*] # 表示所有文件适用
charset = utf-8
indent_style = space # 缩进风格 tab / space
indent_size = 4 # 缩进大小
end_of_line = lf # 控制换行类型（cr | lf | crlf）
insert_final_newline = true # 尾部加一行空行
trim_trailing_whitespace = true # 去除尾部空格

[*.md]
trim_trailing_whitespace = false # md文件关闭尾部去空格
max_line_length = off # md文件关闭尾部去空格
```
>vscode需要安装插件才能读取该文件的风格`EditorConfig for VS Code`
:::
::: tab label=prettier
* 让代码风格更好看的格式化工具，自动调整一些细节代码风格
>vscode 有`Prettier - Code formatter`插件，安装才会生效
* 项目内安装
```shell
npm i prettier -D
```
* 根目录新建文件`.prettierrc`
```json
{
    // tab缩进大小,默认为2
    "tabWidth": 4,
    // 使用tab缩进，默认false
    "useTabs": false,
    // 使用分号, 默认true
    "semi": false,
    // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    "singleQuote": false,
    // 行尾逗号,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    "trailingComma": "all",
    // 对象中的空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    "bracketSpacing": true,
    // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    "jsxBracketSameLine": false,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    "arrowParens": "avoid"
}
```
>`.prettierignore`文件说明哪些文件是忽略的
```shell
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```
* vscode的settings.json文件加两行
```json
"eslint.autoFixOnSave": true,
"editor.formatOnSave": true
```
* package.json文件新建脚本，自动格式化所有文件
```shell
"prettier": "prettier --write ."
```
:::
::: tab label=.eslintrc.js
* 根目录创建`.eslintrc.js`文件
* vscode下载eslint插件
```js{12}
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 如果需要关闭某一项错误检测，复制错误提示最后的检测项，填到这里'off'
        // '@typescript-eslint/no-var-requires': 'off',
    },
};
```
>eslint和一些其他的规范可能冲突，如prettier。cli配置了选项就是默认安装好的。
```shell
npm i eslint-plugin-prettier eslint-config -prettier -D
```
:::
::: tab label=git限制
* 设置一个限制，在git commit的时候就进行**代码检查**。
>工具：git husky
```shell
npx husky-init && npm install
```
* 生成的husky/pre-commit就是在执行`git commit`之前会拦截并执行的操作。可以在里面执行lint的格式化操作
```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
```
>这样能保证推进代码库的代码都是符合lint规范的。
:::
:::tab label=commit验证
1. 通过commitlint来限制提交
```shell
npm i @commitlint/config-conventional @commitlint/cli -D
```

2. 在根目录创建commitlint.config.js文件，配置commitlint
```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

3. 使用husky生成commit-msg文件，验证提交信息：

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```
:::
::: tab label=规范提交
* 规范commit信息工具：`commitizen`
```shell
npm i commitizen -D

npx commitizen init cz-conventional-changelog --save-dev --save-exact
```
>以后commit版本的时候，使用命令
```shell
git add .

npx cz

## 或者设置脚本 "commit": "cz"
```

| Type     | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 新增特性 (feature)                                           |
| fix      | 修复 Bug(bug fix)                                            |
| docs     | 修改文档 (documentation)                                     |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc) |
| refactor | 代码重构(refactor)                                           |
| perf     | 改善性能(A code change that improves performance)            |
| test     | 测试(when adding missing tests)                              |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等） |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                     |
| revert   | 代码回退                                                     |
:::
::: tab label=config.js
* [vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)可以增加webpack的配置，和默认配置进行合并
```js
module.exports = {
    outputDir: './build',
    configureWebpack: {
        resolve: {
            alias: {
                components: '@/components',
            },
        },
    },
    devServer: {
        // proxy：开发模式中，所有【/api】开头的请求路径都使用node代理请求，再把数据还给浏览器
        proxy: {
            '/api': {
                target: 'http://localhost:8889',
                changeOrigin: true, // 跨域
                pathRewrite: {
                    '^/api': '/',
                },
            },
        },
    },
};
```
:::
::::
## 路由初始配置
:::: tabs
::: tab label=安装配置
```shell
npm i vue-router@next
```
>src/router/index.ts
```ts
import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/home/home.vue'),
    },
    {
        path: '/login',
        component: () => import('@/views/login/login.vue'),
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
```
:::
::: tab label=main.ts
```ts{6}
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);

app.mount('#app');
```
:::
::: tab label=App.vue
```vue{3-5}
<template>
    <div>
        <router-link to="/">主页</router-link>
        <router-link to="/login">登录</router-link>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
});
</script>

<style lang="less"></style>
```
:::
::::
## VueX初始配置
:::: tabs
::: tab label=安装配置
```shell
npm i vuex@next
```
>src/store/index.ts
```ts
import { createStore } from 'vuex';

const store = createStore({
    state: {
        counter: 0,
    },
});

export default store;
```
:::
::: tab label=main.ts
```ts{4,8}
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

```
:::
::: tab label=home.vue
```vue{8,12-13}
<template>
    <div>
        {{ counter }}
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const store = useStore();
        const counter = ref(store.state.counter);
        return { counter };
    },
});
</script>

<style scoped></style>
```
:::
::::