---
title: OC开发基础-C语言基础
date: 2025-03-17
---
## C语言编译
- `gcc main.c -o my_program`：GNU Compiler Collection
- `gcc main.c func.c -o my_program`：多文件开发
## Xcode配置
- 代码练习：新建项目 - MacOS - `Command Line Tool`
- 关闭代码提示：`Preferences -> Text Editing -> Code Completion -> Disable`
- 为project添加多个target：
  - 新建`Project -> Targets -> +`
  - 切换：编译链接旁边切换目标target
- 快捷键
  - 同时编辑一个变量`control+command+e`

## C语言基础
- 程序只会从`main函数`开始执行
- 函数：`void funcName(int a, int b)`
- int范围在`-21亿～21亿左右`
- `float`只能存`7`位有效位数，定义加f，如`f1 = 1.1f`
- `double`可以存`16`位有效位数，直接写一个小数就是`double`类型的
- `char`只能存一个字符：`char a = 'a'`，必须用`单引号`
- `int`赋值小数会被截断，如`int a = 1.9`，结果为`1`
- 布尔值：c语言用`int`表示，1为真，0为假
- 只读变量：`const int a = 1;`
- 只读指针变量：`const int * p = &a;`，**无法通过指针修改变量的值**
    ```c
    int a = 1;
    int b = 2;
    const int * p = &a;
    *p = 5; // 报错
    ```
- 只读变量指针：`int * const  p = &a;`，**无法通过指针修改变量的值**
    ```c
    int a = 1;
    int b = 2;
    int * const  p = &a;
    p = &b; // 报错
    ```
- 完全只读指针：`int const * const  p = &a;`
## printf格式化
- `int: %d`,`float: %f`,`char: %c`,`string: %s`,`double: %lf`
- 格式化位数：
    - `%.2f`，如`%.2f`表示保留两位小数
    - `%5d`，如`%5d`表示输出的数字前面补空格，共5位
    - `printf("%05d\n", 3);`：，用0补齐五位，输出`00003`
    - 八进制：以`0`开头，`07777777`，打印占位符`%o`
    - 十六进制：以`0x`开头，`0x12acde`，打印占位符`%x`
- 格式化地址位：`%p`，例：：`printf("%p\n", &a);`
- 对齐输出：`%-5d`，如`%-5d`表示输出的数字前面补空格，共5位，输出`1   `
- 对齐输出变量控制：`printf("编号：%-*d姓名：%-*s性别：%-*s成绩：%-*.0lf\n", 4, stu.id, 15, stu.name, 5, gender, 10, stu.score);`

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
- 清空缓冲区函数
    ```c
    void clearInputBuffer(void) {
        int c;
        while ((c = getchar()) != '\n' && c != EOF);
    }
    ```
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
- **只读形参**：`void printArray(const int * arr, int len);`

## 预处理指令
::: danger
- 宏定义没有分号`;`
- **编译之前**把程序中所有使用宏名的地方换成宏值
- `#define LEN 10`
- `#undef LEN`： 删除宏定义，后续代码宏不可再使用
- 条件编译指令：`#if`、`#ifdef`、`#ifndef`、`#else`、`#elif`、`#endif`
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
- 带参数宏，参数不需要加类型说明符
    ```c
    #define ADD(a, b) a + b
    int c = ADD(10, 20);
    printf("%d\n", c); // 30
    ```
- 条件编译指令`#if`：只编译部分代码，条件只能是宏，因为是在编译阶段，还没有变量
    ```c
    #define DEBUG 1
    #define DEV 0
    #define DEPLOY 0

    #if DEBUG
    printf("DEBUG 模式！\n");
    #elif DEV
    printf("DEV 模式！\n");
    #elif DEPLOY
    printf("DEPLOY 模式！\n");
    #endif
    ```
- 条件编译指令`#ifdef`：判断宏**是否存在**，存在就编译，不存在就不编译
    ```c
    #ifdef DEBUG
        printf("DEBUG模式！！");
    #endif
    ```
- 条件编译指令`#ifndef`：判断宏**不存在**，不存在就编译，存在就不编译
- 技巧：debug打log，只有在debug模式才会编译的log代码
```c
#define DEBUG 1
#define DEV 0
#define DEPLOY 0

#if DEBUG
    #define LOG(str, ...) printf(str, ##__VA_ARGS__)
#else
    #define LOG(str, ...)
#endif

LOG("DEBUG 模式！\n");
LOG("%d\n", a);
```
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
    - `strstr(str1, str2)`，在一个字符串中查找另一个字符串首次出现的位置
    - `strcmp(str1, str2)`：比较字符串`str1`和`str2`
      - 返回值：完全相等返回`0`
    - `fputs()`/`fopen`/`fclose`： 将字符串`str`写入文件/控制台
      - 输出到标准输出流
        ```c
        char* str = "hello world";
        // 输出到标准输出流
        fputs(str, stdout);
        ```
      - 输出到文件流
        ```c
        /**
         * 文件打开，用一个file指针指向文件
         * fopen第二个参数
         * w: 写入
         * r: 读取
         * a: 追加
         */
        FILE *fp = fopen(
            "/Users/dreamarts/Documents/coderhdy/c-study/00_base/12_指针/test.txt",
            "w");
        /** 输入 */
        fputs(str, fp);
        /** 关闭读取文件 */
        fclose(fp);
        ```
    - `fgets()`：从文件流中读取字符串，返回读取的字符串长度。**安全，推荐用法**
      - 读取标准输入流数据
        ```c
        char str[5];
        printf("请输入：\n");
        fgets(str, sizeof(str), stdin);
        
        // 输入的最后一位可能是\n，在字符串长度不够的时候（5 - 1 = 4）
        unsigned long len = strlen(str);
        if (str[len] == '\n') {
            str[len] = '\0';
        }
        
        printf("%s\n", str);
        ```
      - 读取文件流数据
        ```c
        FILE* fp = fopen("/Users/dreamarts/Documents/coderhdy/c-study/00_base/12_指针/test.txt", "r");
        char str[100];
        fgets(str, sizeof(str), fp);
        printf("%s\n", str);
        fclose(fp);
        ```

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
## 指针和函数
- 指针指向函数，可以调用
```c
char* getWeekDay(int weekDayNum) {
    switch(weekDayNum) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "错误值";
    }
}

int main(int argc, const char * argv[]) {
    // 指向外部函数的指针
    // 函数返回值 (*指针函数名)(参数)
    char* (*getWeekDayFn)(int weekDayNum) = getWeekDay;
    // 通过指针调用函数
    char* weekDay = getWeekDayFn(4);
    printf("%s\n", weekDay);
    return 0;
}
```

## 内存分区
- 栈：存储局部变量，函数调用参数，函数返回地址，函数返回值。
- 堆：存储动态分配的内存。允许程序员动态分配内存。
- Bss区：存储未初始化的全局变量，静态变量，常量。
- Data区：存储已经初始化的全局变量，静态变量，常量，**字符串**。
- Text区：存储代码。
::: warning
- 字符串存储在Data区中，字符串的结束符是`\0`。所以函数可以返回字符串
- 但是不能修以字符指针存储在Data区中的改字符串。
```c
char* getWeekDay(int weekDayNum) {
    switch(weekDayNum) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "错误值";
    }
}
```
:::

## 内存使用
- 申请内存：`malloc()`/`calloc()`/`realloc()`/`free()`
- `malloc()`：申请内存，返回内存地址，失败返回`NULL`，没申请到会有`NULL`，使用完后需要释放。
    ```c
    #include <stdlib.h>

    int *p = malloc(sizeof(int) * 10);
    if (p == NULL) {
        printf("内存申请失败");
        return 1;
    }
    for (int i = 0; i < 10; i++) {
        p[i] = i + 1;
    }
    for (int i = 0; i < 10; i++) {
        printf("%d ", p[i]);
    }
    //释放
    free(p);
    ```
- `calloc()`：**常用**，申请内存，返回内存地址，失败返回`NULL`，**并且初始化内存为0**
    ```c
    #include <stdlib.h>

    // calloc使用
    int *p = calloc(10, sizeof(int));
    if (p == NULL) {
        printf("内存申请失败");
        return 1;
    }
    for (int i = 0; i < 10; i++) {
        p[i] = i + 1;
    }
    for (int i = 0; i < 10; i++) {
        printf("%d ", p[i]);
    }
    //释放
    free(p);
    ```
- `realloc()`：(扩容)重新分配内存，返回内存地址，失败返回`NULL`
    ```c
    #include <stdlib.h>

    int *p = calloc(10, sizeof(int));
    int *p1 = realloc(p, 11);
    if (p1 == NULL) {
        printf("内存申请失败");
        return 1;
    }
    for (int i = 0; i < 11; i++) {
        p1[i] = i + 1;
    }
    for (int i = 0; i < 11; i++) {
        printf("%d\n", p1[i]);
    }
    //释放
    free(p1);
    ```
- `free()`：释放内存，释放内存地址，释放内存后，内存地址变为`NULL`

## static和extern
:::tip
- 如果要声明全局变量，必须使用`static`/`extern`修饰。
- 声明全局变量要声明在.h文件中，实现在.c文件中。
- 区别：
  - `static`只有当前模块能访问的变量。
  - `extern`是外部变量，是**全局变量**，**全局变量**是**所有源文件都能访问的变量**。
:::
```c
extern int num = 10; // 外部能直接操作
static int age = 20; // 外部只能通过本文件的函数访问操作

int getAge() {
    return age;
}
void addAge() {
    age++;
}
```

## static与malloc
- static：静态变量，静态函数，静态代码块，静态方法，静态成员变量，静态成员函数。
- static修饰全局变量：让全局变量变成**只有源文件能访问的变量**
- static修饰局部变量：让局部变量变成只有函数能访问的变量，第一次访问初始化，后续访问复用。
:::tip static和malloc的区别
- calloc**可以初始化内存为0**
- 生命周期：
  - static：全局变量，函数，代码块，成员变量，成员函数，生命周期是整个程序。
  - malloc：动态分配内存，生命周期是可以由程序员调用`free`释放掉
:::

## 结构体
:::tip
- 结构体：一种**特殊的自定义的数据类型**，可以存储多个变量，变量类型可以不同。
- 结构体变量赋值形式是拷贝成员变量的值进行赋值
:::
- 初始化语法
    ```c
    struct Student {
        char* name;
        int gender;
        float height;
    };

    int main(int argc, const char * argv[]) {
        struct Student ming;
        ming.name = "小明";
        ming.gender = 1;
        ming.height = 1.75;
        return 0;
    }
    ```
- 创建结构体时初始化
    ```c
    struct Student {
        char* name;
        int gender;
        float height;
    } ming,hong,fang;
    ```
- 简易初始化
    ```c
    struct Student ming = {"小明", 1, 1.75};
    ```
    ```c
    struct Student ming = {
        .name = "小明",
        .gender = 1,
        .height = 1.75
    };
    ```
- 创建结构体指针
    ```c{3,5}
    struct Student fang = {"小芳", 0, 1.65};
    struct Student* pStu = &fang;
    // 指针访问有简写
    (*pStu).name = "小方";
    // 简写
    pStu -> height = 1.70;
    ```

## 枚举
:::tip
- 枚举值的命名规范：**以枚举类型名称开头**，单词首字母大写
:::
```c
enum WeekDay {
    WeekDayMonday = 1,
    WeekDayTuesday,
    WeekDayWednesday,
    WeekDayThursday,
    WeekDayFriday,
    WeekDaySaturday,
    WeekDaySunday
}

enum Gender {
    Male = 1,
    Female = 2
}

Gender gender = Male;
```

## typedef
:::tip
- 作用：**定义类型别名**，方便使用，减少代码量，提高代码可读性。
:::
 - **常用简写**，为匿名结构体/枚举重命名
```c
// 结构体
typedef struct {
    int age;
    char* name;
} Student;
Student xiaoming = {19, "小明"};

// 枚举
typedef enum {
    DirectionEast,
    DirectionWest
} Direction;
Direction d1 = DirectionEast;
```