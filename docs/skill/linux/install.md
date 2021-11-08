# 安装工具
## 安装git
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