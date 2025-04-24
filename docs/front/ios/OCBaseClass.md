---
title: Foundation 常用类
date: 2025-04-21
---
## NSString
:::warning
- **如果属性类型是NSString，那么@property用`copy`：`@property (copy) NSString* str`**
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
- 本地存储：`writeToFile`
- 本地读取`arrayWithContentsOfFile`
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
:::tip
存储文件类型需要是`.plist`类型
:::
- 本地存储：`writeToFile`
  ```objc
  NSArray* arr = @[@"jack", @"rose", @"lili"];
  [arr writeToFile:@"/Users/dreamarts/Desktop/app.plist" atomically:NO];
  ```
- 本地读取`arrayWithContentsOfFile`
  ```objc
  NSArray* arr = [NSArray arrayWithContentsOfFile:@"/Users/dreamarts/Desktop/app.plist"];
  if (arr != nil) {
      NSLog(@"%@", arr);
  }
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
## NSDictionary
:::tip
- 创建：`dictionaryWithObjectsAndKeys`
- 创建：`@{@"name": @"coderHDY", @"age": @18}`
- 取值：`objectForKey:`
- 遍历1：`enumerateKeysAndObjectsUsingBlock:`
- 遍历2：`for in`
- 键值对数量：`count`
- 获取所有键：`allKeys`
- 本地存储：`writeToFile`
- 本地读取：`dictionaryWithContentsOfFile`
:::
- 创建：`dictionaryWithObjectsAndKeys`
  ```objc
  NSDictionary* dir1 = [NSDictionary dictionaryWithObjectsAndKeys:@"coderHDY", @"name", @"18", @"age", nil];
  NSDictionary* dir2 = @{@"name": @"coderHDY", @"age": @18};
  NSLog(@"%@", dir2);
  ```
- 取值：`objectForKey:`
  ```objc
  NSDictionary* dir2 = @{@"name": @"coderHDY", @"age": @18};
  NSString* age = [dir2 objectForKey:@"age"]; // 18
  ```
- 遍历1：`enumerateKeysAndObjectsUsingBlock:`
  ```objc
  [dir2 enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, id  _Nonnull obj, BOOL * _Nonnull stop) {
      NSLog(@"%@ = %@", key, age);
  }];
  ```
- 遍历2：`for in`
  ```objc
  NSDictionary* dir2 = @{@"name": @"coderHDY", @"age": @18, @"222": @"id"};
  for (NSString* key in dir2) {
    NSLog(@"%@ = %@", key, dir2[key]);
  }
  ```
- 键值对数量：`count`
  ```objc
  NSDictionary* dir2 = @{@"name": @"coderHDY", @"age": @18, @"222": @"id"};
  NSUInteger n = dir2.count; // 3
  ```
:::warning
本地存储读取的文件类型需要是`.plist`
:::
- 本地存储：`writeToFile`
  ```objc
  NSString* path = @"/Users/dreamarts/Desktop/app.plist";
  NSDictionary* dir = @{@"name": @"coderHDY", @"age":@18};
  BOOL res = [dir writeToFile:path atomically:NO];
  if (res) {
      NSLog(@"OK");
  }
  ```
- 本地读取：`dictionaryWithContentsOfFile`
  ```objc
  NSString* path = @"/Users/dreamarts/Desktop/app.plist";
  NSDictionary* dir = [NSDictionary dictionaryWithContentsOfFile:path];
  if (dir) {
      NSLog(@"%@", dir);
  }
  ```

## NSMutableDictionary
:::tip
- 特点：继承自`NSDictionary`，有所有的NSDictionary的方法，**具备可变性**
- 创建：`dictionaryWithDictionary:`
- 添加：`setObject:forKey:`
- 删除：`removeObjectForKey:`
- 删除所有：`removeAllObjects`
:::
- 创建：`dictionaryWithDictionary:`
  ```objc
  NSMutableDictionary* dir = [NSMutableDictionary dictionaryWithDictionary:@{@"name": @"coderHDY", @"age":@18}];
  ```
- 添加：`setObject:forKey:`
  ```objc
  NSMutableDictionary* dir = [NSMutableDictionary dictionaryWithDictionary:@{@"name": @"coderHDY", @"age":@18}];
  [dir setObject:@"eat" forKey:@"action"];
  ```
- 删除：`removeObjectForKey:`
  ```objc
  NSMutableDictionary* dir = [NSMutableDictionary dictionaryWithDictionary:@{@"name": @"coderHDY", @"age":@18}];
  [dir removeObjectForKey:@"age"];
  ```
- 删除所有：`removeAllObjects`
  ```objc
  NSMutableDictionary* dir = [NSMutableDictionary dictionaryWithDictionary:@{@"name": @"coderHDY", @"age":@18}];
  [dir removeAllObjects];
  ```
## NSFileManager
::: tip
- 创建：`defaultManager`
- 判断文件夹存在：`fileExistsAtPath:`
- 判断文件/文件夹是否存在：`fileExistsAtPath:isDirectory:`
- 判断文件夹是否可以读取：`isReadableFileAtPath:`
- 判断文件夹是否可以写入：`isWritableFileAtPath:`
- 判断文件夹是否可以执行：`isExecutableFileAtPath:`
- 创建文件：`createFileAtPath`
- 创建文件夹：`createDirectoryAtPath:withIntermediateDirectories:attributes:error:`
- 删除文件夹：`removeItemAtPath:error:`
- 删除文件：`removeItemAtPath:error:`
- 移动文件：`moveItemAtPath:toPath:error:`
- 拷贝文件：`copyItemAtPath:toPath:error:`
- 获取文件大小：`attributesOfItemAtPath:error:`
- 获取文件属性：`attributesOfItemAtPath:error:`
- 获取文件类型：`typeOfItemAtPath:error:`
- 获取文件创建时间：`creationDateForItemAtPath:error:`
- 获取文件修改时间：`modificationDateForItemAtPath:error:`
- 获取文件访问时间：`accessDateForItemAtPath:error:`
- 获取文件权限：`posixPermissionsForItemAtPath:error:`
- 获取文件子目录和子文件：`contentsOfDirectoryAtPath:error:`
- 获取文件内所有（后代）文件和目录：`subpathsAtPath:`
:::
- 创建：`defaultManager`
  ```objc
  NSFileManager* defaultManage = [NSFileManager defaultManager];
  ```
- 判断文件夹存在：`fileExistsAtPath:`
  ```objc
  NSFileManager* defaultManage = [NSFileManager defaultManager];
  NSString* path = @"/Users/dreamarts/Desktop/app.plist";
  BOOL res = [defaultManage fileExistsAtPath:path];
  ```
- 判断文件/文件夹是否存在：`fileExistsAtPath:isDirectory:`
  ```objc
  NSFileManager* defaultManage = [NSFileManager defaultManager];
  NSString* path = @"/Users/dreamarts/Desktop/app.plist";
  BOOL isDir = NO;
  BOOL res = [defaultManage fileExistsAtPath:path isDirectory:&isDir];
  NSLog(@"exist = %d, isDir = %d", res, isDir); // exist = 1, isDir = 0
  ```
- 判断文件夹是否可以读取：`isReadableFileAtPath:`
  ```objc
  NSFileManager* defaultManage = [NSFileManager defaultManager];
  NSString* path = @"/Users/dreamarts/Desktop/app.plist";
  BOOL res = [defaultManage isReadableFileAtPath:path];
  NSLog(@"res = %d", res); // 1
  ```
- 获取文件子目录和子文件：`contentsOfDirectoryAtPath:error:`
  ```objc
  NSFileManager* defaultManage = [NSFileManager defaultManager];
  NSString* path = @"/Users/dreamarts/Desktop";
  NSArray* arr = [defaultManage contentsOfDirectoryAtPath:path error:nil];
  for (NSString* str in arr) {
      NSLog(@"%@", str);
  }
  ```
- 获取文件内所有文件和目录：`subpathsAtPath:`
  ```objc
  NSFileManager* defaultManage = [NSFileManager defaultManager];
  NSString* path = @"/Users/dreamarts/Desktop";
  NSArray* arr = [defaultManage subpathsAtPath:path];
  for (NSString* str in arr) {
      NSLog(@"%@", str); // 打印中文路径
  }
  ```
- 创建文件：`createFileAtPath`
  ```objc
  NSString* path = @"/Users/dreamarts/Desktop/1.txt";
  NSData* data = [path dataUsingEncoding:NSUTF8StringEncoding];
  NSFileManager* defaultManager = [NSFileManager defaultManager];
  BOOL res = [defaultManager createFileAtPath:path contents:data attributes:nil];
  ```
:::tip
`withIntermediateDirectories:YES`: 深度创建
:::
- 创建文件夹：`createDirectoryAtPath:withIntermediateDirectories:attributes:error:`
  ```objc
  NSString *path = @"/Users/dreamarts/Desktop/AA/BB/CC";
  NSFileManager *defaultManager = [NSFileManager defaultManager];
  BOOL res = [defaultManager createDirectoryAtPath:path
                        withIntermediateDirectories:YES
                                        attributes:nil
                                              error:nil];
  ```
## NSThread
::: tip
- NSThread 是一个线程对象，它允许你创建一个线程，并运行代码。
- 沉睡线程(单位：秒)：`[NSThread sleepForTimeInterval:10]`
:::

## NSPoint
::: tip
- `CGPoint` 是一个结构体，它表示一个二维坐标点。也有同样作用的方法`NSPoint`，建议使用`CGPoint`
- 创建1:`NSPoint p2 = {20, 30};`
- 创建2:`CGPointMake(x, y)`
- 判断结构体是否相等：`CGPointEqualToPoint(point1, point2)`
- 获取结构体中的x和y值：`point.x`、`point.y`
:::
- 创建1:`NSPoint p2 = {20, 30};`
  ```objc
  NSPoint p = NSMakePoint(10, 20);
  NSLog(@"x = %f, y = %f", p.x, p.y);
  ```
- 创建2:`CGPointMake(x, y)`
  ```objc
  NSPoint p2 = {20, 30};
  ```
## NSSize
::: tip
- `CGSize` 是一个结构体，它表示一个二维尺寸。也有同样作用的方法`NSSize`，建议使用`CGSize`
- 创建1:`NSSize s2 = {20, 30};`
- 创建2:`CGSizeMake(width, height)`
- 判断结构体是否相等：`CGSizeEqualToSize(size1, size2)`
- 获取结构体中的width和height值：`size.width`、`size.height`
:::
- 创建2:`CGSizeMake(width, height)`
  ```objc
  NSSize s1 = NSMakeSize(100, 400);
  NSLog(@"%f, %f", s1.width, s1.height);
  ```
## NSRect
::: tip
- `CGRect` 是一个结构体，它表示一个二维矩形区域。也有同样作用的方法`NSRect`，建议使用`CGRect`
- 创建1:`NSRect r2 = {20, 30, 40, 50};`
- 创建2:`CGRectMake(x, y, width, height)`
- 判断结构体是否相等：`CGRectEqualToRect(rect1, rect2)`
- 判断结构体是否包含另一个矩形：`CGRectContainsRect(rect1, rect2)`
- 获取结构体中的x、y、width和height值：`rect.origin.x`、`rect.origin.y`、`rect.size.width`、`rect.size.height`
:::
- 创建1:`NSRect r2 = {20, 30, 40, 50};`
  ```objc
  NSRect r2 = {10, 10, 100, 200};
  ```
- 创建2:`CGRectMake(x, y, width, height)`
  ```objc
  NSRect r1 = NSMakeRect(10, 10, 100, 200);
  ```
- 判断结构体是否包含另一个矩形：`CGRectContainsRect(rect1, rect2)`
  ```objc
  BOOL res = NSContainsRect(r1, r2);
  ```
## NSValue
:::tip
- `NSValue` 是一个对象，它表示一个值。它提供了一种方便的方式来表示各种类型的值，如`CGPoint`、`CGSize`、`CGRect`等。
- 创建：`NSValue valueWithCGPoint:`、`NSValue valueWithCGSize:`、`NSValue valueWithCGRect:`
- 获取：`CGPointValue`、`CGSizeValue`、`CGRectValue`
- 判断：`isEqualToValue:`
:::
```objc
NSRect r1 = NSMakeRect(10, 10, 100, 200);
NSRect r2 = {10, 10, 100, 200};
BOOL res = NSContainsRect(r1, r2);
NSLog(@"%d", res);

NSValue* v1 = [NSValue valueWithRect: r1];
NSValue* v2 = [NSValue valueWithRect: r2];
BOOL res2 = [v1 isEqualToValue: v2];
NSLog(@"%f", v1.rectValue.size.width);
```

## NSDate
::: tip
- `NSDate` 是一个对象，它表示一个特定的时间点。它提供了一种方便的方式来表示日期和时间，并支持许多常见的操作，如比较、格式化等。
- 创建：`[NSDate new]`
- 格式化输出：`[NSDateFormatter new]`
- 日期NSString转NSDate:`[format dateFromString:@"2025-04-24"]`
- 当前时间增加/减少秒数：`dateWithTimeIntervalSinceNow:`
- 比较两个时间之差：`[date1 timeIntervalSinceDate:date2]`
- 获取年月日：`NSCalendar`
:::
- 格式化输出：`[NSDateFormatter new]`
  ```objc
  NSDate* d1 = [NSDate new];
  NSDateFormatter* f1 = [NSDateFormatter new];
  [f1 setDateFormat:@"yyyy-MM-dd"];
  NSString* str = [f1 stringFromDate:d1];
  NSLog(@"%@", str); // 2025-04-24
  ```
- 日期NSString转NSDate:`[format dateFromString:@"2025-04-24"]`
  ```objc
  NSString* s1 = @"2025-04-24 12:00:00 +0800";
  NSDateFormatter* f1 = [NSDateFormatter new];
  [f1 setDateFormat:@"yyyy-MM-dd HH:mm:ss Z"];
  NSDate* d2 = [f1 dateFromString:s1];
  NSLog(@"%@", d2); // Thu Apr 24 12:00:00 2025
  ```
- 当前时间增加秒数：`dateWithTimeIntervalSinceNow:`
  ```objc
  NSDate* d3 = [NSDate dateWithTimeIntervalSinceNow:60 * 60 * 8];
  NSLog(@"%@", d3); // 当前时间+8小时：Thu Apr 24 15:46:42 2025
  ```
- 比较两个时间之差：`[date1 timeIntervalSinceDate:date2]`
  ```objc
  NSString* str = @"";
  NSDate* d1 = [NSDate new];
  for (int i = 0; i < 50000; i++) {
      str = [NSString stringWithFormat:@"%@%d", str, i];
  }
  NSDate* d2= [NSDate new];
  NSTimeInterval interval = [d2 timeIntervalSinceDate:d1];
  NSLog(@"%f", interval); // 1.655952
  ```
- 获取年月日：`NSCalendar`
  ```objc
  NSDate* d1 = [NSDate new];
  NSCalendar* c1 = [NSCalendar currentCalendar];
  NSDateComponents* c2 = [c1 components:NSCalendarUnitYear | NSCalendarUnitMonth | NSCalendarUnitDay fromDate:d1];
  NSLog(@"%ld-%ld-%ld", c2.year, c2.month, c2.day); // 2025-4-24
  ```