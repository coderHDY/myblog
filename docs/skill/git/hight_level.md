# git 高级

## git branch
* 查看、创建**分支**
::: tip 分支
一个项目开发周期可能很长，那么不可能所有人在一个地方更改代码，所以有了分支这个概念，就是开发大型项目的基础，每个分支可以**同时**处理不同的业务，然后一起合并到 master 分支上去。能够实现同步开发多个功能。
:::
```shell
# 查看本地分支
git branch
# 查看远程分支
git branch -r
# 查看本地分支和远程分支
git branch -a
# 创建新 dev 分支，但HEAD还是留在本分支
git branch dev
# 创建新分支并切换
git checkout -b dev
# 分支重命名
git branch -m oldName newName
# 删除分支
git branch -d dev
# 强制删除分支
git branch -D dev

# 查看树形分支历史
git show-branch
```
# git merge
::: tip 冲突
* a是b拉出来的一个分支，也就是说a是基于b分支在进行开发，a的commit不影响到b。
* b分支自己也在开发，b的commit也不影响到a
* 有一天a分支的任务完成了，需要融入回b分支，就要用到 git merge
* 可是有一个文件的一个位置，a分支也commit了修改，b分支也commit了修改，那么这次合并应该以谁的版本为准呢？
* 这就产生了**冲突**
::: 
```shell
# 把dev分支合并到本分支来
git merge dev
```
## git checkout
* 切换分支
```shell
# 切换
git checkout master
# 创建并切换
git checkout -b master
# 放弃当前所做的更改（未放进缓存区的）
git checkout .
```

## 命令设置别名
* 可以给一个很长的命令设置别名
```shell
git config --global alias.show-graph 'log --graph --abbrev-commit --pretty=oneline'
```

## git tag
* 给一个重要的commit版本打上tag标识，更好地认出找出该版本如：V1.0
```shell
# 列出已有tag
git tag
git tag -l
git tag --list

# 当前版本打标签
git tag v1.0
git tag -a v1.1 -m "my version 1.4"

# 指定版本打标签
git tag -a v1.2 9fceb02

# 查看标签
git show v1.0

# 删除标签
git tag -d v1.0
```

## .gitignore
* git提交时忽略文件
* 可以识别正则表达式
```shell
# 忽略一整个目录
node_modules/
# 忽略某一类文件
*.sh

# 模式取反(某个子目录这个文件不想被忽略)
!*.sh
```