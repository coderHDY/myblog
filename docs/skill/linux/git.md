
# git
## 安装
* 更多安装版本[官网](https://github.com/git/git/releases/tag/v2.17.2)
```shell
wget https://github.com/git/git/archive/refs/tags/v2.17.2.tar.gz

tar -zxvf v2.17.2

cd git-2.17.2

make configure

./configure --prefix=/home/work

make

make install
```

## 免密pull
::::tabs
::: tab label=ssh
1. 配置global 仓库user信息
2. 设置ssh-key
3. clone仓库
4. 后续就可以免密pull
:::
::: tab label=http
1. 获取仓库的http连接
2. 做链接拼接上自己的信息
```shell
git clone http://huangdeyu:TNPU4Uxp3JWsJPYvKmBr@gitlab.baidu.com/huangdeyu/yunying-docs.git
```
3. 后续也可以免密pull
:::
::::