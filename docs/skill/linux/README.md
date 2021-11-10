# linux服务器部署

:::: steps

::: step
* git环境设置
1. 登录远程机器work的根目录
``` shell {1}
pwd

/home/work
```
2. 配置git
```shell
git config --global user.name huangdeyu
git config --global user.email huangdeyu@baidu.com
```
:::

::: step
* 初始化仓库
```shell
git clone ssh://g@gitlab.baidu.com:8022/huangdeyu/yunying-docs.git
```
:::

::: step
* 开启pm2守护的自动化部署进程
```shell
cd yunying-docs
pm2 start bash deploy.sh
```
:::
::: step
* 开启pm2守护的node服务器
```shell
# 别加 --watch，加了会重启服务器
pm2 start app.js
```
:::
::: step
* pm2守护进程检检查及保存
```shell
pm2 list
pm2 save
```
:::
::::
