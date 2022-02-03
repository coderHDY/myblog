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
    "arrowParens": "avoid",
    "printWidth": 120
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
    // publicPath: './', // 开发测试打包引用成相对路径
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
## Element-plus
:::: tabs
::: tab label=介绍
* [Element-plus](https://element-plus.org/zh-CN/)为vue3定制的桌面端组件库
```shell
npm i element-plus
```
* 全局引用
```ts
// main.ts
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
app.use(ElementPlus);
```
:::
::: tab label=按需引用
* 按序引用需要引用`组件`、`组件样式`、`base样式`
* 可以用`babel-plugin-import`来帮助引入
```shell
npm i unplugin-vue-components unplugin-auto-import -D
```
```js
// main.ts
import 'element-plus/dist/index.css';
```
```js
// vue.config.js
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
}
```
>全局内引入了样式，**组件内无需任何导入**，直接使用需要的组件就可以。
:::
::::
## axios
:::: tabs
::: tab label=入门
* [axios](https://axios-http.com/docs/intro)：将ajax基于promise封装出来的网络请求库
```shell
npm i axios
```
```js
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
.then(res => console.log(res.data));

axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
axios.all(
    [
        axios.get(url),
        axios.get(url),
        axios.get(url),
    ]
)
```
:::
::: tab label=常用配置
```ts
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.timeout = 2500;
```
* 创建实例进行二次配置能力
```ts
const instance = axios.create();
instance.defaults.baseURL = 'https://api.example.com';
instance.defaults.timeout = 2500;

instance.get('/longRequest', {
    timeout: 5000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // default
});
```
* 拦截取消
```js{5}
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
axios.get('https://httpbin.org/get');

source.cancel('Operation canceled by the user.');
```
* 拦截器
```ts
// Add a request interceptor
axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
```
:::
::: tab label=二次封装
```txt
src
 |-service
 |   |-login
 |   |    |-login.ts
 |   |-request
 |   |    |-type.ts
 |   |    |-request.ts
 |   |    |-config.ts
 |   |-index.ts
 ```
:::
::: tab label=config.ts
* 根据环境导出一些对应的配置，如`baseUrl`
```ts
let BASE_URL = '';
const TIME_OUT = 2000;
if (process.env.NODE_ENV === 'production') {
    BASE_URL = '生产环境url';
} else if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:8888';
} else {
    BASE_URL = '测试环境url';
}

export { BASE_URL, TIME_OUT };

```
:::
::: tab label=request.ts
* 将axios进行二次封装
    1. 可以提高代码复用性
    2. 可以降低代码对第三方库的耦合性
```ts
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosInterceptorConfig, Interceptor } from './type';

class MyRequest {
    instance: AxiosInstance;
    interceptor: Interceptor | undefined;
    constructor(config: AxiosInterceptorConfig) {
        this.instance = axios.create(config);
        this.interceptor = config.interceptor;
        this.initInterceptors();
    }
    initInterceptors(): void {
        this.instance.interceptors.request.use(
            this.interceptor?.requestSuccessInterceptor,
            this.interceptor?.requestErrorInterceptor
        );
        this.instance.interceptors.response.use(
            this.interceptor?.responseSuccessInterceptor,
            this.interceptor?.responseErrorInterceptor
        );
    }
    request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    get(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'GET' });
    }
    post(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'POST' });
    }
    put(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'PUT' });
    }
    delete(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.request({ ...config, method: 'DELETE' });
    }
}

export default MyRequest;

```
:::
::: tab label=type.ts
* 将自定义ts类型抽出来，提高代码可读性
```ts
import { AxiosRequestConfig } from 'axios';

export interface Interceptor {
    requestSuccessInterceptor?: (config: AxiosInterceptorConfig) => AxiosInterceptorConfig;
    requestErrorInterceptor?: (config: AxiosInterceptorConfig) => AxiosInterceptorConfig;
    responseSuccessInterceptor?: (config: AxiosInterceptorConfig) => AxiosInterceptorConfig;
    responseErrorInterceptor?: (config: AxiosInterceptorConfig) => AxiosInterceptorConfig;
}

export interface AxiosInterceptorConfig extends AxiosRequestConfig {
    interceptor?: Interceptor;
}

```
:::
::: tab label=index.ts
* 导出请求实例对象。如果有多种请求，请求不同baseUrl的数据，则可以创建多个请求对象
```ts
import MyRequest from './request/request';
import { BASE_URL, TIME_OUT } from './request/config';

export default new MyRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
});

```
:::
::: tab label=使用
```ts
// login/login.ts
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import requestIst from '../';

export function login(config: AxiosRequestConfig): Promise<AxiosResponse> {
    config.url = '/login';
    return requestIst.post(config);
}

```
```html{3,6-11}
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { login } from '@/service/login/login';
export default defineComponent({
    setup() {
        let data = ref({});
        login({
            data: {
                name: 'ls',
            },
        }).then(res => (data.value = res));
        return { data };
    },
});
</script>
```
:::
::::
## 区分环境
:::: tabs
::: tab label=环境
* 常见三种环境：
    * 开发环境
    * 生产环境
    * 测试环境
* 常见三种根据环境区分变量的方式：
    * 手动修改
    * process.env.NODE_ENV进行读取
    * 编写不同环境的配置文件
:::
::: tab label=NODE_ENV
* webpack的definePlugin插件会在不同的环境下注入不同的值
```js
let BASE_URL = "";
if (process.env.NODE_ENV === 'production') {
    BASE_URL = '生产环境url';
} else if (process.env.NODE_ENV === 'development') {
    BASE_URL = '开发环境url';
} else {
    BASE_URL = '测试环境url';
}
```
:::
::: tab label=配置文件
* 根目录下编写对应的文件，在不同的执行环境下会自动注入不同的环境变量
>定义
```shell
# .env.production
BASE_URL=生产环境
```
```shell
# .env.production
BASE_URL=开发环境
```
```shell
# .env.production
BASE_URL=测试环境
```
>使用
```js
// 项目内
console.log(process.env.VUE_APP_BASE_URL);
```
:::
::::