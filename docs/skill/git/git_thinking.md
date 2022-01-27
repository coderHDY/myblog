---
title: git 思想
date: 2021-10-28
---

## 追踪能力
* git追踪文件是根据一个散列的计算值来追踪文件的
* 根据文件内容计算出文件的散列码（SHA1），如果两个文件的散列码相同就不追踪它
* 不管两个文件处在什么目录下，只要他的散列码相同，git就只追踪一份
* 因此，git 不追踪目录，只追踪具体的文件，空目录git是不会追踪的

## 分支和标签
::: tip tag
tag应该是一个静态的重要的版本，一旦打上就不应该去更改他，它更像是记录着一个历史节点
:::
::: tip branch
branch应该是动态的，他就是为了动态修改才创建的
::: 
## 查看github仓库大小
* api.github.com/repos，里面的size，单位kb
```shell
github.com/coderHDY/myblog
# 对应
api.github.com/repos/coderHDY/myblog
```