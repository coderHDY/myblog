# git 基础

## git init

* 初始化git仓库
```shell
git init
```
## git config
* 配置本地仓库信息
```shell
# 本地仓库配置
git config use.name 'coderWhy'
git config use.email 'huangdeyu2020@163.com'

# 全局仓库配置
git config --global user.name 'huangdeyu'
git config --global user.email 'huangdeyu2020@163.com'

# 查看配置
git config -l
git config --list
git config --global --list
git config --local --list
```

## ssh-keygen
* 绑定远程仓库需要使用 SSH key
```shell
# 用我的邮箱生成 ssh-key (中间可以配置存放路径)
ssh-keygen-t rsa -C huangdeyu2020@163.com
# mac下查看生成的key (自己的路径)
cat ~/.ssh/id_rsa.pub
```

* 一台电脑配置多个git对应仓库
```shell
# 生成 ssh-key 放置到另一个路径下，以 .pub 结尾，如: ~/.ssh/id_rsa_github.pub
ssh-keygen-t rsa -C huangdeyu2020@163.com
# 编辑 config 对应配置文件，映射每个主机对应的配置和 ss-key 位置
vim ~/.ssh/config
Host gitee.com
User huangdeyu
IdentityFile ~/.ssh/id_rsa.huangdeyu

Host github.com
    Hostname github.com
    User coderHdy
    IdentityFile ~/.ssh/id_rsa_github
```
## git clone
* 克隆远程仓库到本地
1. 拿到远程仓库的ssh地址
2. 克隆到本地
```shell
git clone git@github.com:coderHDY/myblog.git
```

## git remote
* 设置和查看**和本地绑定的**远程仓库
* **名字是关联的时候取的，可以随意更改**，与远程无关，只是本地关于远程仓库的叫法
```shell
# 查看远程仓库
git remote show
git remote -v

# 设置上游仓库
git remote add origin git@github.com:coderHDY/myblog.git

# 删除上游（远程）仓库绑定
git remote rm origin

# 修改远程仓库在本地的名字
git remote rename origin main
```

## git add
* 将本地更改添加到本地缓存
::: tip 本地缓存
git 通过二进制算法记录了这个文件，放进缓存目录，只是代表将此文件暂存的意思，一个或多个缓存 commit 生成一个版本
:::
```shell
git add index.html
# 缓存全部本地更改
git add .
```

## git commit
* 将本地缓存文件提交，生成一个版本
::: tip 版本
* 在本地仓库有了版本的文件将永远不会丢失，除非电脑损坏或者删除隐藏的 .git 文件
* git通过二进制的算法将这次的更改记录起来，内存消耗很少，形成了一个可回溯的**版本**
:::
```shell
git commit -m 'some change'
```

## git log
* 打印本地的所有版本信息
* 可以看到当前的HEAD指针指向的哪个版本
::: tip HEAD指针
本地仓库多次commit后会生成多个版本库，HEAD指针指向的是当前正在用的的版本库
:::
```shell
# 详细信息
git log
# 精简版
git reflog
```

## git show
* 显示版本 diff 信息
```shell
# 显示最近一次commit的详细信息
git show
# 显示当前版本与指定版本的diff
git show 4022c4c
# 展示最近的commit信息
git show-branch --more=10
```

## git diff
* 比较两个版本之间的差异
> 较新的版本要放到后面
```shell
git diff 4022c4c HEAD
```

## git push
* 当前仓库的**HEAD指针**指向的版本推到远程仓库
```shell
# 精简版
git push
# 完整版
git push origin master:master
# 本地和远程同一分支，省略版
git push origin master

# 本地版本与远程版本有差异，强制推送?
git push --force origin master

# 删除远程分支
git push origin --delete master
```

## git rm
* 版本仓库中删除某个文件
```shell
# 删除某个文件
# rm 代表删除并暂存这个变更，commit提交版本
git rm docs/skill/linux/README.md
# 删除某个文件夹
git rm -r docs/skill/linux/
```