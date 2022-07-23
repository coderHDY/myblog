---
title: git Action
date: 2022-07-23
discription: git action,yml,自动化部署,github同步gitee
meta:
    - name: keywords
    - content: git,action,yml,自动化部署,github同步gitee
---
## 常用配置
:::: tabs
::: tab label=样板
* [github action文档](https://docs.github.com/cn/actions/quickstart)
* [yml格式化网址](https://verytoolz.com/yaml-formatter.html)
* [github action官方市场](https://github.com/marketplace?type=actions)
* [awesome-actions库](https://github.com/sdras/awesome-actions)
```yml
name: SyncToGitee
on: [push]
jobs:
  repo-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Mirror the Github organization repos to Gitee.
        uses: Yikun/hub-mirror-action@master
        with:
          src: github/coderHDY
          dst: gitee/coderhdy
          dst_key: '${{ secrets.MY_PRIVATE_KEY }}'
          dst_token: '${{ secrets.GITEE_TOKEN }}'
          static_list: myblog
          force_update: true
```
:::
::: tab label=name
* 流水线名称
:::
::: tab label=on
* 流水线触发条件
* 可写成两种格式
    ```yml
    on: [push]
    ```
    ```yml
    on:
      push:
        branches: [master] # master 分支有 push 时触发
        paths-ignore:   # 下列文件的变更不触发部署
        - README.md
        - .github/**
    ```
:::
::: tab label=jobs
* 触发任务
    * 任务名称
    * ···
    * with: 运行环境
    * run: 运行脚本
```yml
jobs:
  deploy: # 任务名
    runs-on: ubuntu-latest # 执行runner环境
    steps:

      # 检出并下载里面的代码到runner环境中,actions/checkout@v2是官方自己造的轮子
      - name: Checkout
        uses: actions/checkout@v2

      # 打包构建
      - name: Build
        uses: actions/setup-node@master
        with: # 运行环境
          node-version: '14.17.2'
      - run: npm install
      - run: npm run build
```
:::
::: tab label=with
* 运行`环境`及`配置参数`
    ```yml
    - name: Build
      uses: actions/setup-node@master
      with:
        node-version: '14.17.2'
    - run: npm install
    - run: npm run build
    ```
    ```yml
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3 # 使用部署到 GitHub pages 的 action
      with:
        publish_dir: ./docs/.vuepress/dist # 部署打包后的 dist 目录
        github_token: ${{ secrets.DEPLOY }} # secret 名
        user_name: ${{ secrets.MY_USER_NAME }}
        user_email: ${{ secrets.MY_USER_EMAIL }}
        commit_message: 自动部署 # 部署时的 git 提交信息
    ```
:::
::: tab label=uses
* 已有的`action cli`脚本，可以拿官方的或者较为权威的或者自己写
```yml
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3 # 使用部署到 GitHub pages 的 action
```
:::
::::
## 自动部署
* 项目自动化部署到 github-page，同时解析到自己域名
:::: steps
::: step
* 项目`根路径`创建文件夹：`.github/workflows/`
* 创建流水线文件：`deploy-action.yml`
:::

::: step
* 配置文件`.github/workflows/deploy-action.yml`
* 重点关注必须更改的地方
```yml{6,23,26,32-33}
name: deploy

on:
  push:
    branches: [master] # master 分支有 push 时触发
    paths-ignore:   # 下列文件的变更不触发部署
      - README.md
      - .github/**

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:

      # 检出并下载里面的代码到runner环境中,actions/checkout@v2是官方造的轮子，直接拿来用就行
      - name: Checkout
        uses: actions/checkout@v2

      # 打包构建
      - name: Build
        uses: actions/setup-node@master
        with:
          node-version: '14.17.2'
      - run: npm install
      - run: npm run build
      - run: echo 'coderhdy.com' > ./docs/.vuepress/dist/CNAME # 自定义域名，没有就不添加

      # 部署到 GitHub pages
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3 # 使用部署到 GitHub pages 的 action
        with:
          publish_dir: ./docs/.vuepress/dist # 部署打包后的 dist 目录
          github_token: ${{ secrets.DEPLOY }} # secret 名
          user_name: ${{ secrets.MY_USER_NAME }}
          user_email: ${{ secrets.MY_USER_EMAIL }}
          commit_message: 自动部署 # 部署时的 git 提交信息
```
:::

::: step
* 创建github token
* `GitHub头像` -> `Setting` -> 最下面`Developer settings` -> `Personal access tokens` -> 选择 repo、workflow -> 创建
* 拷贝token
:::

::: step
* 添加github secrets
* 需要添加流水线的仓库 -> `Settings` -> `Secrets` -> `Actions` -> `New repository secret`
* 粘贴token
* 填写`Secret名字`
* 生成
:::

::: step
* 将`Secret名字`填写到`.github/workflows/deploy-action.yml`文件中
* 例：Secret名字是`DEPLOY`，修改第33行:
    ```yml
    github_token: ${{ secrets.DEPLOY }}
    ```
:::

::: step
* `git push`
* git仓库 -> Actions 查看流水线
* 双击流水线名查看日志
:::
::::
## github同步更新gitee
:::: steps
::: step
* 根目录添加`.github/workflows/gitee-sync-actions.yml`
```yml{11-15}
name: SyncToGitee # 自定义名
'on':
  - push
jobs:
  repo-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Mirror the Github organization repos to Gitee.
        uses: Yikun/hub-mirror-action@master # 使用第三方 action cli
        with:
          src: github/coderHDY # github账户
          dst: gitee/coderhdy # gitee账户
          dst_key: '${{ secrets.MY_PRIVATE_KEY }}'
          dst_token: '${{ secrets.GITEE_TOKEN }}'
          static_list: myblog # 仓库名
          force_update: true
```
:::

::: step
* github配置公钥
1. 本机输入
    ```shell
    cat ~/.ssh/id_rsa
    ```
2. 复制全部：
    ```
    -----BEGIN OPENSSH PRIVATE KEY-----
    XXXXX
    -----END OPENSSH PRIVATE KEY-----
    ```
3. `Github仓库` -> `Setting` -> `Secrets` -> `Actions` -> `New repository secret` -> 粘贴私钥 -> 添加 -> 复制`Secret name`
4. `.github/workflows/gitee-sync-actions.yml`文件配置`dst_key`
    * 例，`Secret name`为`MY_PRIVATE_KEY`：
    ```yml
    dst_key: '${{ secrets.MY_PRIVATE_KEY }}'
    ```
:::
::: step
* gitee配置公钥（已有就跳过）
```shell
cat ~/.ssh/id_rsa.pub
```
* gitee主页 -> 个人设置 -> SSH公钥 -> 添加
:::

::: step
* 原理：
* github拿`私钥`，gitee拿`公钥`
>由于是github推送东西给gitee，所以他们需要有`成对的公私钥`
:::

::: step
* gitee生成token：`gitee首页` -> `私人设置` -> `私人令牌` -> `生成新令牌` -> 生成 -> 复制`令牌内容`
* github保存token：`Github仓库` -> `Setting` -> `Secrets` -> `Actions` -> `New repository secret` -> 粘贴`令牌内容` -> 添加 -> 复制`Secret name`
* `.github/workflows/gitee-sync-actions.yml`文件14行配置`dst_token`
* 例，`Secret name`为`GITEE_TOKEN`：
    ```yml
    dst_token: '${{ secrets.GITEE_TOKEN }}'
    ```
:::
::: step
* git push
* github仓库 -> action -> 日志
:::
::::