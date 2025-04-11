---
title: OC开发基础-C语言基础
date: 2025-03-17
---
## C语言编译
- `gcc main.c`：GNU Compiler Collection
- `gcc main.c func.c -o my_program`：多文件开发
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
::: danger
- 宏定义没有分号`;`
- `#define LEN 10`
:::
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
  - `long long`：长长整型，任何系统都占8个字节，`long long int`可以省略`int`

## 数组
- 声明数组：`int arr[10];`
- 声明直接赋值：`int arr[3] = {100, 2,10};`
- 自动计算初始化长度：`int arr[] = {100, 2,10};`
- 自动计算初始化值为0：`int arr[10] = {};`
- 指定位置初始化值：`int arr[10] = {[1] = 3, [9] = 7};`
- 使用直接赋值的方式，就不能使用`变量`做长度，可以使用`宏`作为长度。
  - 错误示范：`int arr[len] = {100, 2,10};`
  - 正确示范：`int arr[LEN] = {100, 2,10};`
- 长度计算：`sizeof(arr) / sizeof(arr[0]);`
- 当数组作为函数的参数的时候，会丢失数组的长度信息，所以需要使用`指针`来传递数组。同属传入数组长度。
  - 例子：`void func(int *arr, int len);`/`void printArr(int arr[], int len);`
  - 原因：函数参数是数组，那么该形参就是指针地址。
- **数组名是一个地址常量，赋之后无法修改**
## 二维数组
- 声明：`int arr[3][4];`
- 直接赋值示例：
    ```c
    int arr[3][4] = {
        {1, 2, 3, 4},
        {1, 2, 3, 4},
        {1, 2, 3, 4},
    };
    printf("第二行第一列是：%d\n", arr[2][1]); // 244
    ```
- 指定行初始化
    ```c
    int arr[3][4] = {
        [1] = {1, 2, 3, 4},
        [2] = {1, 233, 3, 4},
    };
    printf("第二行第一列是：%d\n", arr[2][1]);
    ```
- 全部初始化为0
    ```c
    int arr[3][4] = {0};
    printf("第二行第一列是：%d\n", arr[2][1]); // 0
    ```
- 求行数列数
    ```c
    int arr[3][4] = {0};
    int rows = sizeof(arr) / sizeof(arr[0]);
    int columns = sizeof(arr[0]) / sizeof(arr[0][0]);
    int cells = sizeof(arr) / sizeof(arr[0][0]);

    printf("行数是：%d\n列数是：%d\n总元素个数是：%d\n", rows, columns, cells);
    ```

- 函数入参指定任意行列的数组：`void func(int rows, int cols, int arr[][cols]);`

## 字符串
::: tip
- 字符串的声明**通常用指针声明**，可以避免再赋值空间不够程序崩溃
:::
- 字符串的声明：`char str[10];`/`char *str = "hello world";`
- 字符串的初始化：`char str[] = "hello world";`
- 打印字符串：`printf("%s", str);`
- 分割原理：字符串的最后一个多一位`\0`，用来表示字符数组结束
- 面试题：
```c
char str[] = "jack";
char str2[4] = "rose";

printf("%s\n", str2); // rosejack
// 原因：rose只被分配了4个字节，没位置存\0，jack被读取了
```
- 以字符数组的形式赋值：`char str[] = { 'j', 'a', 'c', 'k', '\0' };`
- 获取字符串长度：
```c
char str[10] = "jack";
unsigned long len = strlen(str);
printf("欢迎你：%s\n名字长度：%lu\n", str, len);
```
- 输入字符串：`scanf("%s", str);`
  - 输入字符串时，**如果输入的字符串长度大于数组长度，则会出现越界，程序会崩溃**
  - **输入空格会被认为结束字符串，不会被存储到数组中**
- 常用函数
  - `<stdio.h>`
    - `puts(str);`：打印字符串
    - `gets(str)`: 从键盘输入字符串，并返回字符串长度，也是**超出长度会崩溃**
  - `<string.h>`
    - `strlen(str)`：获取字符串长度
    - `strcpy(str1, str2)`：将字符串`str2`复制到`str1`中，修改`str1`，**长度不够运行会崩溃**
    - `strcat(str1, str2)`：将字符串`str2`连接到`str1`的末尾，修改`str1`，**长度不够运行会崩溃**
    - `strcmp(str1, str2)`：比较字符串`str1`和`str2`
      - 返回值：完全相等返回`0`

## 指针
- 指针变量声明：`int *p;`/`int* p;`/`int * p;`
- 指针变量赋值：`p = &a;`
- 指针变量取值：`*p = 100;`
- 指针存`NULL`值，被访问时会报错
- 形参指针修改：
    ```c
    void add(int *pNum1, int *pNum2) {
        *pNum1 += *pNum2;
    }

    int main(int argc, const char *argv[]) {
        int num1 = 1;
        int num2 = 2;
        
        add(&num1, &num2);
        
        printf("num1 = %d\n", num1); // 3
        return 0;
    }
    ```
- 声明二级指针：`int **p = &pNum;`，**二级指针只能存储一级指针的地址**
- 二级指针使用：`*(*p)`，`*p`是二级指针指向的一级指针，`*(*p)`是二级指针指向的一级指针指向的值
- 指针的加减法，单位是指针自身单位变量：`p++`，
  - 如果指针指向的是数组，则`p++`会移动到下一个数组元素
    ```c
    int arr[] = {1, 2, 3, 4, 5};
    int *p = &arr[0];
    for (int i = 0; i < 5; i++) {
        printf("第%d个元素是：%d\n", i, *(p + i)); // 遍历数组
    }
    ```
    ```c
    // 数组名也是指针
    int arr[] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; i++) {
        printf("第%d个元素是：%d\n", i, *(arr + i)); // 遍历数组
    }
    ```
  - 如果指针指向的是结构体，则`p++`会移动到下一个结构体成员。
- 指针数组：是一个数组，数组中每个元素都是指针。例：`int* p[3] = {&a, &b, &c};`
- 指针之间的**减法**：两个指针之间相差多少个元素。
    ```c
    int arr[6]  = {1, 2, 3, 4, 5, 6};
    int* p1 = &arr[2];
    int* p2 = &arr[4];
    long diff = p2 - p1;
    printf("%ld\n", diff); // 2
    ```
## 指针和字符变量
- 全局变量的指针字符变量：都存储在内存的Data区中。
- 局部变量的指针字符变量：**字符串存储在内存的Data区中，字符串的结束符是`\0`。**
    ```c
    // 局部变量：
    // 存储在栈中的字符串
    char str1[] = "jack";
    // 存储在Data区中的字符串
    char* str2 = "hello";
    ```
- 以指针方式存储的字符串**无法通过下标修改**
    ```c
    char* str = "hello";
    str[0] = 'H'; // 报错

    char* str3 = "hello";
    str3 = "rose"; // 可以
    ```
- 声明指针字符串的时候，会从Date区寻找是否有相同的字符串，如果有则返回该字符串的指针，如果没有则创建一个字符串，并返回该字符串的指针。
    ```c
    char* str1 = "hello";
    char* str2 = "hello";
    char* str3 = "hello";

    printf("str1 = %p \n", str1); // 相同地址
    printf("str1 = %p \n", str2); // 相同地址
    printf("str1 = %p \n", str3); // 相同地址

    printf("str1 = %s \n", str1); // hello
    printf("str1 = %s \n", str2); // hello
    printf("str1 = %s \n", str3); // hello
    ```
- 等价：`str[i] ==  *(str + i)`
    ```c
    char* str = "asdfghasdfgasdfgh";
    int count = 0;

    int i = 0;
    while (*(str + i) != '\0') {
        if (*(str + i) == 'a') {
            count++;
        }
        i++;
    }

    // 等价：str[i] ==  *(str + i)
     while (str[i] != '\0') {
        if (str[i] == 'a') {
            count++;
        }
        i++;
    }
    ```
- 存储多个字符串，建议使用指针数组，可以存储不固定长度的字符串
```c
char* str[] = {"hello", "world", "rose"};
for (int i = 0; i < 3; i++) {
    printf("%s\n", str[i]);
}
```

## 内存分区
- 栈：存储局部变量，函数调用参数，函数返回地址，函数返回值。
- 堆：存储动态分配的内存。允许程序员动态分配内存。
- Bss区：存储未初始化的全局变量，静态变量，常量。
- Data区：存储已经初始化的全局变量，静态变量，常量。
- Text区：存储代码。