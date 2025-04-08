---
title: OC开发基础-C语言基础
date: 2025-03-17
---
## Xcode配置
- 代码练习：新建项目 - MacOS - `Command Line Tool`
- 关闭代码提示：`Preferences -> Text Editing -> Code Completion -> Disable`
- 为project添加多个target：
  - 新建`Project -> Targets -> +`
  - 切换：编译链接旁边切换目标target

## C语言基础
- 程序只会从`main函数`开始执行
- 函数：`void funcName(int a, int b)`
- int范围在`-21亿～21亿左右`
- `float`只能存`7`位有效位数，定义加f，如`f1 = 1.1f`
- `double`可以存`16`位有效位数，直接写一个小数就是`double`类型的
- `char`只能存一个字符：`char a = 'a'`，必须用`单引号`
- `int`赋值小数会被截断，如`int a = 1.9`，结果为`1`
- 布尔值：c语言用`int`表示，1为真，0为假
## printf格式化
- `int: %d`,`float: %f`,`char: %c`,`string: %s`,`double: %lf`
- 格式化位数：
    - `%.2f`，如`%.2f`表示保留两位小数
    - `%5d`，如`%5d`表示输出的数字前面补空格，共5位
    - `printf("%05d\n", 3);`：，用0补齐五位，输出`00003`
    - 八进制：以`0`开头，`07777777`，打印占位符`%o`
    - 十六进制：以`0x`开头，`0x12acde`，打印占位符`%x`
- 格式化地址位：`%p`，例：：`printf("%p\n", &a);`

## scanf
- 接收用户输入，赋值给指定变量地址`scanf("%d", &a);`
- 使用`&`获取变量的地址
```c
int main(int argc, const char * argv[]) {
    int num = 0;
    int pwd = 0;
    printf("请输入账号：");
    scanf("%d", &num);
    if (num == 1) {
        printf("请输入密码：");
        scanf("%d", &pwd);
        if (pwd == 123456) {
            printf("密码正确\n");
        } else {
            printf("密码错误\n");
        }
    } else {
        printf("请输入数字\n");
    }
    return 0;
}
```
- 输入多个字符用空格隔开
```c
scanf("%d%d", &num, &pwd);
```
- 可以自定义分隔符
```c
scanf("%d-%d", &num, &pwd);
```
- scan是从`缓冲区`获取数据，如果缓冲区有数据，则不会等用户输入
```c
int num = 0;
int pwd = 0;
scanf("%d", &num);
rewind(stdin); // 清空缓冲区
printf("num = %d\n", num);

// 输入 10 20
scanf("%d", &pwd);
printf("pwd = %d\n", pwd);
```
- 清空`scanf`的缓冲区：`rewind(stdin);`

## 运算
- 如果算数运算的表达式类型是一致的，那么结果也会是这个类型
```c
int num1 = 10;
int num2 = 4;
double num3 = num1 / num2;
printf("num3 = %lf\n", num3); // num3 = 2.000000
```

## 内置方法
- 做随机数
```c
#include <stdlib.h>

// 0-9 的随机数
printf("请输入分数：%d\n", arc4random_uniform(10));

// 10-20的随机数
printf("请输入分数：%d\n", arc4random_uniform(11) + 10);
```
- 最大值`INT32_MAX`
- 最小值`INT32_MIN`

## switch-case
- 注意：`break`，不然会继续执行下面的case
- switch表达式的结果**不可以是浮点数**，否则会报错
- 如果要在case里面声明变量，就需要用大括号括起来这个case的语句
```c
int score = 6;

switch(score * 10) {
    case 60: {
        printf("刚好及格\n");
        break;
    }
    case 70:
        printf("及格\n");
        break;
    default:
        printf("不懂\n");
}
```

## 函数声明
- 函数声明可以在函数调用之前声明
- 函数声明和函数定义可以放在同一个文件，也可以放在不同的文件
- 函数声明：`void funcName(int a, int b);`
- 函数定义：`int funcName(int a, int b) { return a + b; }`

## 预处理指令
- 分类
  - 文件包含指令：`#include`，把头文件内容复制到当前位置
  - 宏指令：`#define`
  - 条件编译指令：`#if`、`#ifdef`、`#ifndef`、`#else`、`#elif`、`#endif`
  - 错误处理指令：`#error`
  - 警告处理指令：`#warning`
  - 运算指令：`#pragma`
- 特点
  - 以`#`开头
  - 没有分号`;`
  - 预处理指令是编译器在`编译之前`处理的，所以不能在函数里面使用

## 进制
- 十进制：`10`，打印占位符`%d`
- 二进制：以`0b`开头，`ob101010111`
- 八进制：以`0`开头，`07777777`，打印占位符`%o`
- 十六进制：以`0x`开头，`0x12acde`，打印占位符`%x`

## 修饰符
- int
  - `signed`：有符号，默认
  - `unsigned`：无符号
  - `short`：短整型，占2个字节，`short int`可以省略`int`
  - `long`：长整型，32位操作系统占4个字节，64位系统占8个字节，`long int`可以省略`int`
  - `long long`：长长整型，占8个字节，`long long int`可以省略`int`