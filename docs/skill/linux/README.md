# linux服务器部署

## 部署流程
:::: steps

::: step
* 生产http克隆仓库的密钥
> 经测试，ssh 方式服务器无法拉取代码，所以需要http密钥
1. 进入 gitlab 的 setting
![](./assets/jinrusetting.png)
2. 找到access token
![](./assets/zhaodaoaccesstoken.png)
3. 生成token
> name写自己，不要设置时间  

![](./assets/shengchengtoken.png)
4. 将token存起来（不会再现）
![](./assets/token.png)
:::

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
1. 克隆代码
> 非sudo权限无法clone，原因暂未查到，猜想是内部服务器传输端口限制的问题

![](./assets/httpurl.png)
```shell {1-2}
# 要加 sudo，否则克隆无法完成
# 用户名和token必须以这种方式插入进去，否则后面自动化流水线跑不起来
# 用户名输入自己
# password输入步骤①生成的token

sudo git clone http://huangdeyu:TNPU4Uxp3JWsJPYvKmBr@gitlab.baidu.com/huangdeyu/yunying-docs.git
# 回车
```
2. 解决 npm i 权限问题
> 说明：仓库是sudo克隆下来的，所以对这个仓库里面的后续操作都需要加管理员权限
```shell
sudo chown -R $USER /home/work/yunying-docs
```
3. 安装依赖、代码打包
```shell
cd yunying-docs
npm i
npm run docs
```
:::

::: step
* nginx服务器配置
1. 查看端口号及目录配置
```shell {2,5}
# 查找nginx目录
whereis nginx
# /usr/local/nginx

sudo vim /usr/local/nginx/conf/nginx.conf
```
2. 检查项，无改动可以不修改
```js {2,10}
server {
    listen       8070;
    server_name  docs;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   /home/work/yunying-docs/docs/.vuepress/dist;
        #  root   html;
            index  index.html index.htm;
    }
}
```
3. 启动nginx服务器
> 出问题查看[这里](./#nginx服务器问题)
```shell
/usr/local/nginx/sbin/nginx
```
4. 浏览器输入网址，部署完成
```url
http://xiongwenjie.bcc-bdbl.baidu.com:8070
```
:::
::: step
* 配置自动化部署
1. 移动到项目仓库
```shell
cd /home/work/yunying-docs
```
2. 查看流水线shell
```shell
cat deploy.sh
```
> 查看自动化更新时间间隔
```shell {7}
while true
do
    sudo git pull origin master
    npm i
    npm run docs
    echo `date` >> log.txt
    sleepTime=`expr 1 \* 20`
    sleep ${sleepTime}
done
```
3. 自动化部署更新
```shell
nohup bash deploy.sh &
# 回车
# 会显示进程号
```
4. 记住进程号（后面很难再找到）

:::
::: step
* 自动化功能检查
1. 移动到仓库根目录
```shell
cd /home/work/yunying-docs
```
2. 查看自动化shell是否执行
```shell
cat /home/work/yunying-docs/log.txt
```
3. 查看流水线任务日志
```shell
cat /home/work/yunying-docs/nohup.out
```
:::
::::


## 附录

### nginx服务器问题
* nginx报错有三种可能的处理方式：
:::: tabs
::: tab label=查看关闭端口号
1. 查看端口号占用进程(已知端口号)
```shell
netstat -tunlp|grep 端口号
```

2. 关闭进程号
```shell
kill -9 进程号
```
> 如果关闭无权限
```shell
sudo kill -9 进程号
```
:::

::: tab label=重启nginx服务
1. 停止nginx服务
```shell
/usr/local/nginx/sbin/nginx -s stop
```
2. 开启nginx服务
```shell
/usr/local/nginx/sbin/nginx
```
:::
::: tab label=关闭后台进程
1. 查找后台任务进程号
```shell
ps -ef | grep nginx
```
2. 关闭进程
```shell
kill -9 进程号
```
> 如果关闭无权限
```shell
sudo kill -9 进程号
```
:::
::::

### 自动流水线问题
::: tip 
* 每次用nohup开启的时候，都会显示后台任务进程号，最好找个地方记下来
:::
* 查找进程号（如果忘记了）
```shell
ps -A

ps -ef | grep nginx
```
* 关闭自动流水线
```shell
kill -9 进程号
```
* 持续查看流水线进度
```shell
tail -f /home/work/yunying-docs/nohup.out
```

### 新安装nginx权限问题
* 如果普通用户没有nginx服务权限，会有这个报错
```txt
# 报错
nginx: [alert] could not open error log file: open() "/usr/local/nginx/logs/error.log" failed (13: Permission denied)
2021/11/06 10:13:38 [emerg] 21685#0: open() "/usr/local/nginx/logs/access.log" failed (13: Permission denied)
```
* 原因：打开这两个文件要有root权限
* 解决：用管理员身份删除这两个文件,然后[杀死nginx进程](./#nginx服务器问题)，再开