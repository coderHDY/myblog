---
title: Foundation 常用类
date: 2025-04-21
---
## NSString
:::warning
- 字符串初始化默认是`immutable`，不可修改，需要使用`mutableCopy`方法变成`mutable`
- 如果字符串大量修改，用`NSMutableString`
:::
::: tip
- 转化为大写：`uppercaseString`
- 转化为小写：`lowercaseString`
- 去掉头尾指定字符串
- 去掉字符串前后的空格`stringByTrimmingCharactersInSet [NSCharacterSet whitespaceCharacterSet]`
- 去掉字符串前后的小写字母`stringByTrimmingCharactersInSet [NSCharacterSet lowercaseCharacterSet]`
- 去掉字符串前后的大写字母`stringByTrimmingCharactersInSet [NSCharacterSet uppercaseCharacterSet]`
- 拼接字符串对象:`stringWithFormat`
- 计算字符串长度`length`
- 计算字符串长度`length`
- 拿到指定下标的字符`characterAtIndex`，**中文等字符**转化回字符串`stringWithCharacters`
- 比较两个字符串是否相等`isEqualToString`
- 字符串**指定下标截取到最后**`substringFromIndex`
- 字符串**从开头截取到指定下标**:`substringToIndex`
- 字符串截取区间：`substringWithRange`
- 字符串替换：`stringByReplacingOccurrencesOfString`
- 字符串比较`compare`
- 将c的`char[]`转化为oc的NSString:`stringWithUTF8String`
- 将oc的NSString转化为c的`char*`
- 将字符串内容写入磁盘`writeToFile`
- 从网络/本地读取字符串`URLWithString`
- 判断开头是否是某个字符串`hasPrefix`
- 判断结尾是否是某个字符串`hasSuffix`
- 从前往后搜索另一串字符串`rangeOfString`
- 从后往前搜索另一串字符串`rangeOfString options NSBackwardsSearch`
- 字符串转**其他类型型**:`intValue`/`floatValue`/`doubleValue`/`boolValue`
- 去头尾空格：`stringByTrimmingCharactersInSet`
- 去掉头尾指定字符串`stringByTrimmingCharactersInSet options:NSBackwardsSearch`
- 字符串拆解成数组:`componentsSeparatedByString`
:::

- 拼接字符串对象:`stringWithFormat`
  ```objc
  int age = 14;
  NSString* s2 = @"小黄";
  NSString* s3 = [NSString stringWithFormat:@"大家好，我叫%@, 我今年%d岁了",s2, age];
  ```
- 计算字符串长度`length`
  ````objc
  NSString* s1 = @"1哈哈";
  // s1.length
  NSUInteger num = [s1 length];
  NSLog(@"%lu", num); // 3
  ````
- 拿到指定下标的字符`characterAtIndex`，**中文等字符**转化回字符串`stringWithCharacters`
  ````objc
  NSString* s = @"ha和额呵hahh";
  unichar c = [s characterAtIndex:2];
  NSString *charStr = [NSString stringWithCharacters:&c length:1];
  NSLog(@"%@", charStr); // 和
  ````
- 比较两个字符串是否相等`isEqualToString`
  ```objc
  NSString* s1 = @"123456";
  NSString* s2 = @"123456";
  BOOL isEqual = [s1 isEqualToString:s2];
  NSLog(@"%@", isEqual ? @"相同" : @"不同");
  ```
- 字符串**指定下标截取到最后**`substringFromIndex`
  ```objc
  NSString* s1 = @"呵呵呵 666 hello 666";
  NSString* s2 = [s1 substringFromIndex:4];
  NSLog(@"%@", s2); // 666 hello 666
  ```
- 字符串**从开头截取到指定下标**:`substringToIndex`
  ```objc
  NSString* s1 = @"呵呵呵 666 hello 666";
  NSString* s2 = [s1 substringToIndex:3];
  NSLog(@"%@", s2); // 呵呵呵
  ```
- 字符串截取区间：`substringWithRange`
  ```objc
  NSString* s1 = @"呵呵呵 666 hello 666";
  NSString* s2 = [s1 substringWithRange:NSMakeRange(2, 3)];
  NSLog(@"%@", s2); // 呵 6
  ```
- 字符串替换：`stringByReplacingOccurrencesOfString`
  ```objc
  NSString* s1 = @"我爱北京天安门";
  NSString* s2 = [s1 stringByReplacingOccurrencesOfString:@"北京天安门" withString:@"广州小蛮腰"];
  NSLog(@"%@", s2); // 我爱广州小蛮腰
  ```

- 字符串比较`compare`
>可以添加第二个参数作比较配置
  ```objc
  NSString* s1 = @"China";
  NSString* s2 = @"Japan";
  NSComparisonResult result = [s1 compare:s2];
  if (result == NSOrderedAscending) {
      NSLog(@"%@在前面", s1);
  } else if (result == NSOrderedDescending) {
      NSLog(@"%@在前面", s2);
  } else {
      NSLog(@"相同");
  }
  ```
- 将c的`char[]`转化为oc的NSString:`stringWithUTF8String`
  ```objc
  char c1[] = "1234567";
  NSString* str1 = [NSString stringWithUTF8String:s0];
  NSLog(@"%@", str1);
  ```
- 将oc的NSString转化为c的`char*`
  ```objc
  NSString* s1 = @"assde";
  const char* c = s1.UTF8String;
  NSLog(@"%s", c);
  ```
- 将字符串内容写入磁盘`writeToFile`
  ```objc
  NSString *path = @"/Users/dreamarts/Documents/file.txt";
  NSString *s = [NSString stringWithContentsOfFile:path
                                          encoding:NSUTF8StringEncoding
                                              error:nil];
  NSLog(@"%@", s);
  ```
- 从网络/本地读取字符串`URLWithString`
  ```objc
  NSURL *url = [NSURL URLWithString:@"file:///Users/dreamarts/Documents/file.txt"];
  NSString *str = [NSString stringWithContentsOfURL:url
                                            encoding:NSUTF8StringEncoding
                                              error:nil];
  NSLog(@"%@", str);
  ```
::: tip
- 从本地读取格式：`file:///Users/dreamarts/Documents/file.txt`
- 从网络读取格式：`https://www.baidu.com`
- 从ftp读取格式：`ftp://www.baidu.com/1.txt`  
:::
- 判断开头是否是某个字符串`hasPrefix`
  ```objc
  NSString* s1 = @"呵呵呵 666 hello";
  BOOL res = [s1 hasPrefix:@"呵呵"];
  ```
- 判断结尾是否是某个字符串`hasSuffix`
  ```objc
  NSString* s1 = @"呵呵呵 666 hello";
  BOOL res = [s1 hasSuffix:@"hello"];
  ```
- 从前往后搜索另一串字符串`rangeOfString`
  ```objc
  NSString* s1 = @"呵呵呵 666 hello 666";
  NSRange res = [s1 rangeOfString:@"666"];
  NSLog(@"%lu", res.length); // 匹配的长度 没找到为0
  NSLog(@"%lu", res.location); // 出现的下标 没找到为 NSNotFound
  ```
- 从后往前搜索另一串字符串`rangeOfString options NSBackwardsSearch`
  ```objc
  NSString* s1 = @"呵呵呵 666 hello 666";
  NSRange res = [s1 rangeOfString:@"666" options:NSBackwardsSearch];
  NSLog(@"%lu", res.length); // 3
  NSLog(@"%lu", res.location); // 14
  ```
- 字符串转**其他类型型**:`intValue`/`floatValue`/`doubleValue`/`boolValue`
  ```objc
  NSString* s1 = @"12";
  int n1 = s1.intValue;
  NSLog(@"%d", n1); // 12
  ```
- 去头尾空格：`stringByTrimmingCharactersInSet`
  ```objc
  NSString *str1 = @" ss d ";
  str1 = [str1 stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]];
  NSLog(@"%@", str1); // ss d
  ```
- 去掉头尾指定字符串
  ```objc
  NSString *str1 = @"aaa ss d .xxx";
  str1 = [str1 stringByTrimmingCharactersInSet:[NSCharacterSet characterSetWithCharactersInString:@".xxx"]];
  NSLog(@"%@", str1); // aaa ss d
  ```

## NSMutableString
::: tip
- 继承自`NSString`，有所有的`NSString`的方法, **具备可变性**
- 使用场景：大批量字符串拼接的时候（5次以上）
- 创建：`NSMutableString *str = [s1 mutableCopy];`
- 创建：`NSMutableString *str = [NSMutableString string];`
- 添加：`[str appendString:@"123"];`
- 删除：`[str deleteCharactersInRange:NSMakeRange(0, 3)];`
- 替换：`[str replaceCharactersInRange:NSMakeRange(0, 3) withString:@"123"];`
- 截取：`[str substringWithRange:NSMakeRange(0, 3)];`
- 插入：`[str insertString:@"123" atIndex:0];`
- 截取：`[str substringFromIndex:0];`
- 截取：`[str substringToIndex:3];`
- 截取：`[str substringWithRange:NSMakeRange(0, 3)];`
:::
- 替换：`[str replaceCharactersInRange:NSMakeRange(0, 3) withString:@"123"];`
  ```objc
  NSMutableString* s1 = [NSMutableString string];
  [s1 appendFormat:@"jack"];
  [s1 replaceCharactersInRange:NSMakeRange(1, 1) withString:@"e"];
  NSLog(@"%@", s1); // jeck
  ```
## NSRange
- 语法：`NSRange range = {0, 3};`
- 语法：`NSRange range = {.location = 3, .length = 7};`
- 属性：`location`、`length`
- 创建：`NSRange range = NSMakeRange(0, 3);`
- 转化为字符串：`NSStringFromRange(range)`

## NSArray
:::tip
- 特点：
  - 只能存储OC对象
  - 长度固定，无法新增/删除
  - 元素紧密相连，每个元素都有自己的下标
  - 元素的类型是`id`类型
  - 当NSArray存储数据类型不一样的时候，遍历可以用`id`类型
- 创建：`NSArray *arr = @[@"jack", @"rose", @"tom"];`
- 创建：`NSArray *arr = [NSArray arrayWithObjects:@"jack", @"rose", @"tom", nil];`
> nil表示数组结束
- 创建：`NSArray *arr = @[@"jack", @"rose", @"tom"];`
- 长度：`count`
- 是否包含：`containsObject`
- 拿到第一个元素：`firstObject`
- 拿到最后一个元素：`lastObject`
- 找到第一个指定元素的下标：`indexOfObject:`
- 遍历1: `for (int i = 0; i < arr.count; i++)`
- 遍历2:`for (NSString* str in arr)`
- 遍历3:`enumerateObjectsUsingBlock`
- 拼接所有项目:`componentsJoinedByString`
- 字符串拆解成数组:`componentsSeparatedByString`
- 排序：`sortedArrayUsingComparator`
:::
- 创建：`NSArray *arr = @[@"jack", @"rose", @"tom"];`
  ```objc
  NSArray *arr = @[@"jack", @"rose", @"tom"];
  NSLog(@"arr = %@", arr); // arr = ( jack, rose, tom )
  NSLog(@"%@", arr[0]); // jack
  NSLog(@"%lu", arr.count);
  ```
- 是否包含：`containsObject`
  ```objc
  NSArray *arr = @[@"jack", @"rose", @"tom"];
  BOOL res = [arr containsObject:@"jack"]; // YES
  ```
- 拿到第一个元素：`firstObject`
  ```objc
  NSArray *arr = @[];
  arr.firstObject; // nil
  ```
- 找到第一个指定元素的下标：`indexOfObject:`
  ```objc
  NSArray *arr = @[@"jack", @"rose", @"tom"];
  NSUInteger i = [arr indexOfObject:@"rose"];
  NSLog(@"%lu", i); // 1

  NSUInteger i = [arr indexOfObject:@"r"]; // NSNotFound
  ```
- 遍历3:`[arr enumerateObjectsUsingBlock:^(id _Nonnull obj, NSUInteger idx,BOOL *_Nonnull stop) {}];`
  ```objc
  NSArray *arr = @[ @"jack", @"rose", @"tom" ];
  [arr enumerateObjectsUsingBlock:^(id _Nonnull obj, NSUInteger idx,
                                    BOOL *_Nonnull stop) {
    NSLog(@"%@", obj); // jack rose tom
    if (idx == 1) {
        *stop = YES; // 停止遍历
    }
  }];
  ```
- 拼接所有项目:`componentsJoinedByString`
  ```objc
  NSArray *arr = @[ @"jack", @"rose", @"tom" ];
  NSString* s = [arr componentsJoinedByString:@"-"];
  NSLog(@"%@", s); // jack-rose-tom
  ```
- 字符串拆解成数组:`componentsSeparatedByString`
  ```objc
  NSString* s = @"jack-rose-tom";
  NSArray* arr = [s componentsSeparatedByString:@"-"]; // ( jack, rose, tom )
  ```
- 排序：`sortedArrayUsingComparator`
  ```objc
  NSArray *arr = @[@"jack", @"rose", @"tom"];
  NSArray *arr = [arr sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
    return [obj1 compare:obj2];
  }]

  // 按数字排序
  NSString* s1 = @"19 10 9 32 46 63 66 34 446 77 44";
  NSArray* a1 = [s1 componentsSeparatedByString:@" "];
  NSArray* a2 = [a1 sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
      return [obj1 intValue] - [obj2 intValue];
  }];
  NSLog(@"%@", a2); // 从小到大
  ```
## NSMutableArray
::: tip
- 特点：继承自`NSArray`，有所有的NSArray的方法，**具备可变性**
- 创建：`NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"jack", @"rose", @"tom", nil];`
- 添加：`addObject:`
- 多个添加：`addObjectsFromArray`
- 删除：`removeObjectAtIndex:`
- 替换：`replaceObjectAtIndex:withObject:`
- 插入：`insertObject: atIndex:`
- 删除指定范围：`removeObjectsInRange`
- 删除最后一个元素：`removeLastObject`
- 删除所有元素：`removeAllObjects`
:::
- 添加：`addObject:`
  ```objc
  NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"jack", @"rose", @"tom", nil];
  [arr addObject:@"qiqi"];
  NSLog(@"%@", arr); // ( jack, rose, tom, qiqi )
  ```
- 多个添加：`addObjectsFromArray`
  ```objc
  NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"jack", @"rose", @"tom", nil];
  [arr addObjectsFromArray:@[@"xx", @"hh"]];
  NSLog(@"%@", arr); // ( jack, rose, tom, xx, hh )
  ```
- 删除：`removeObjectAtIndex:`
  ```objc
  NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"jack", @"rose", @"tom", nil];
  [arr removeObjectAtIndex:1];
  NSLog(@"%@", arr); // ( jack, tom )
  ```
- 替换：`replaceObjectAtIndex:withObject:`
  ```objc
  NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"jack", @"rose", @"tom", nil];
  [arr replaceObjectAtIndex:1 withObject:@"lili"];
  NSLog(@"%@", arr); // ( jack, lili, tom )
  ```
- 插入：`insertObject: atIndex:`
  ```objc
  NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"jack", @"rose", @"tom", nil];
  [arr insertObject:@"qiqi" atIndex:2];
  NSLog(@"%@", arr); // ( jack, rose, qiqi, tom )
  ```
- 删除指定范围：`removeObjectsInRange`
  ```objc
  NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"jack", @"rose", @"tom", nil];
  [arr removeObjectsInRange:NSMakeRange(1, 2)];
  NSLog(@"%@", arr); // ( jack )
  ```
- 删除最后一个元素：`removeLastObject`
  ```objc
  NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"jack", @"rose", @"tom", nil];
  [arr removeLastObject];
  NSLog(@"%@", arr); // ( jack, rose )
  ```
- 删除所有元素：`removeAllObjects`
  ```objc
  NSMutableArray *arr = [NSMutableArray arrayWithObjects:@"jack", @"rose", @"tom", nil];
  [arr removeAllObjects];
  NSLog(@"%@", arr); // ( jack, rose )
  ```
## NSNumber
:::tip
- 包装基本数据类型，作为一个对象，**可以存入数组中**
- 类型初始化：`@(num)`
- 类型转化：`intValue`、`floatValue`、`doubleValue`、`boolValue`、`stringValue`
:::
- 类型初始化：`@(num)`
  ```objc
  int num = 20;
  NSNumber* n = @(num);
  ```
- 创建：`NSNumber *num = @(10);`
  ```objc
  NSNumber* num = @12.333;
  NSArray *arr = @[num];
  NSLog(@"%@", arr); // ( "12.333" )
  NSLog(@"%.2f", num.floatValue); // 12.33
  ```
