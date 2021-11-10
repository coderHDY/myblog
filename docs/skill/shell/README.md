# 常用命令
更全的命令可以看：[api大全](https://www.runoob.com/linux/linux-shell-test.html)

## 变量
:::: tabs
::: tab label=变量
```shell
# 注意，=两边不能加空格
name="hdy"

echo ${name}
echo $name
```
:::
::: tab label=数组
```shell
names=("张三" "李四" "王五")

# 注：大括号不能省
for name in ${names[*]}
do
    echo $name
done
```
:::
::::
## 条件判断
* shell的数字、字符串、文件的判断写法都不一样
:::: tabs
::: tab label=数字
```shell
if test 1 -eq 1 ;then
    echo "true"
fi

# 注：中括号里面的空格都要对得上
if [ 1 = 1 ];then
    echo "true"
fi
```
:::
::: tab label=字符串
```shell
# 注：不能加中括号
if test "10:10" = "10:10" ; then
    echo "true"
fi
```
:::
::::

## 执行流程
::::tabs
::: tab label=if
> [ 中括号里面的空格不能少 ]
```shell
if [ 1 = 2 ];then
    echo "相等"
elif [ 2 = 2 ];then
    echo "这对相等"
else
    echo "不相等"
fi
```
:::
::: tab label=while
```shell
i=0
while test ${i} -lt 10 
do
    echo ${i}
    i=`expr ${i} + 1`
done
```
:::
::: tab label=for
* 直接遍历数组
```shell
for i in 1 2 3 4
do
    echo ${i}
done
```
* 遍历变量数组
```shell
names=("老黄" "老张" "老王")

for name in ${names[*]}
do
    echo ${name}
done
```
:::
::::
## 时间
```shell
echo `date`

# 格式化时间
echo `date "+%H:%M:%S"`

# 指定时间做事
while true
do
    sleep 1

    # 注：加双引号格式化成字符串，不加双引号格式化成数字
    current=`date "+%S"`
    echo ${current} >> log.txt
    if test ${current} -eq '11'; then
        echo `date "+%H:%M:%S"` >> log.txt
    fi
done
```
