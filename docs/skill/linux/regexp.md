# 正则命令
## 查指定文件的字数
```shell
# 查本目录下所有md文件的字数
find . -name '*.md' -exec cat {} \;|wc -m
```
## 查找包含指定文字的文件
```shell
# 查找指定目录所有包含'原型链'文字的位置
grep  -r "原型链" docs/front docs/books
```