---
title: vuepress项目搭建
date: 2022-01-03
---
## 基础搭建
:::: steps
::: step
* 初始化服务
```shell
npm init

npm install -D vuepress

mkdir docs && echo '# Hello VuePress' > docs/README.md
```
* package.json添加
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
* 启动服务
```shell
npm run docs:dev
```
:::

::: step
* 初始化目录结构
```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── config.js (重要配置)
│   │ 
│   ├── README.md
└── package.json
```
:::

::: step
* 上主题
```shell
npm install vuepress-theme-reco --save-dev
```

```js
// .vuepress/config.js

module.exports = {
  theme: 'reco'
} 
```
* 再跑就有效果了
```shell
npm run docs:dev
```
:::

::: step
* 让主题复杂一点
>主页README.md，背景图放在public目录下  
```md{3}
---
home: true
bgImage: '/assets/bg.jepg'
bgImageStyle: {
  color: 'white',
  maxHeight: '400px',
  boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
}
isShowTitleInHome: true
heroText: 🎃南瓜的博客
tagline: 爱笑的人运气不会差
---
```
```js
module.exports = {
    title: '南瓜籽儿',
    theme: 'reco',

    themeConfig: {
        type: 'blog',
        author: '南瓜籽儿',
        startYear: '2022',
        // authorAvatar: '/portrait.jpg',
        // modePicker: false,
        // logo: '/portrait.jpg',
        // nav: require('./nav'),
        // sidebar: require('./sidebar'),
        lastUpdated: '上次更新',
        friendLink: [
            {
              title: 'vuepress-theme-reco',
              desc: 'A simple and beautiful vuepress Blog & Doc theme.',
              logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png',
              link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ],
        // 博客设置
        blogConfig: {
            tag: {
                location: 2, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/coderHDY' },
            ]
        },
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        subSidebar: 'auto',
        sidebarDepth: 2,
        displayAllHeaders: false,
        //valine
        // valineConfig: {
        //     appId: '', // your appId
        //     appKey: '', // your appKey
        //     placeholder: '说说你的看法~',
        //     avatar: 'wavatar',
        //     serverUrl: ''
        // }
    },
    markdown: {
        lineNumbers: true
    },
}
```
:::
::: step
* 新建目录写文件
```{10-12}
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── config.js (重要配置)
│   ├── blog
│   │   ├── 2022
│   │   |   └── yuandan.md
│   ├── README.md
└── package.json
```
* yuandan.md
```
---
title: 元旦
date: 2022-01-01
tags:
 - 生活
categories:
 - 个人日记
---

## 早上
* 早上我们去吃饭了
## 中午
* 中午我敲了代码
```
* 重启服务器就有效果了
:::
::::

## 运行项目
:::: steps
::: step
* 先安装依赖
```shell
npm i
```
:::
::: step
* 本地运行
```
npm run docs:dev
```
:::
::: step
* 修改文档后会自动更新
* 如果没有自动更新，就结束进程再启动
```shell
ctl + c

npm run docs:dev
```
:::
::::
## 本地后台更新项目
:::: steps
::: step
* 安装pm2
```shell
npm i pm2 -g
```
:::
::: step
* pm2启动应用
```shell
pm2 start npm -- run docs:dev
```
:::
::: step
* 保存项目
```shell
pm2 save
```
* 如果自动更新失效，重启项目
```shell
pm2 restart 0
```
:::
::::

## 部署项目
:::: steps
::: step
* 设置部署文件
>deploy.sh
```shell
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'xxx.com' > CNAME

git init
git add -A
git commit -m 'Deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:coderxxx/coderxxx.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:coderHDY/XXX.git master:gh-pages

cd -
```
:::
::: step
* 配置好部署路径以后，每次要更新文件就执行命令行
```shell
bash deploy.sh
```
:::
::::