# 《正则表达式必知必会》
## 第一章 应用场景
::: tip 应用场景
* 正则的基本应用场景作用就是**搜索和替换**，精通以后遇到字符串搜索替换就可以首先想到正则的解决方案
* 同一个问题经常会有多种正则解决方案
:::

* 找car单词
```js{2}
var str = "car incar Car inmycar";
var reg = /\bcar\b/ig;

console.log(str.match(reg)); // [ 'car', 'Car' ]
```
* 将字符串的超链接变成HTML可点形式
```js
var str = "this is my address:http://www.baidu.com/ car incar Car inmycar";
var reg = /\b(http|https):\/\/(?:www.)*?[\w]+?.(com|cn|org)\//ig;

console.log(str.replace(reg,(match) => `<a href='${match}'>${match}</a>`));
// this is my address:<a href='http://www.baidu.com/'>http://www.baidu.com/</a> car incar Car inmycar
```
## 第二章 单个字符
::: tip 
* 【.】表示任意字符，但要匹配换行符等需要加标识符s
* 固定匹配【.】本身加斜杠【\.】
* 【\b】**单词**间的间距。
* 【\B】**字母**间的间距。
:::
* 找到所有的c.t
```js
const str = 'cat cot ctt caat';
const reg = /c.t/g;

console.log(str.match(reg)); // ['cat', 'cot', 'ctt']
```
* 找到所有的张某
```js
const str = '张三 李四 张 王五 张志文 张靓颖';
const reg = /张.*?(?=\s|$)/g;

console.log(str.match(reg)); // [ '张三', '张', '张志文', '张靓颖' ]
```
* 找到所有的.a.文件：na.txt、sa.txt..
```js
const str = `ana.txt
na.txt
nax.txt
sa.txt
`
const reg = /^.a\.\w+\b/gm;
console.log(str.match(reg)); // ['na.txt', 'sa.txt']
```
## 第三章 区间
::: tip 区间
* 【[]】中括号内可以写取值区间。如：[ sa ]
* 全局不区分大小写可以用【i】，局部不区分大小写可以写[a-zA-Z]
* JS标识符【\w】代表区间[a-zA-Z0-9_]，【\W】取反
* 区间内【^】开头代表排除这个区间
:::
* 只要sa.txt/na.txt
```js
const str = `ca.txt
nan.txt
sa.txt
ana.txt
na.txt
`;
const reg = /^[ns].\.txt/mg;
console.log(str.match(reg)); // [ 'sa.txt', 'na.txt' ]
```
* 匹配RegExp或regexp
```js
const str = '正则一般写作RegExp或者regexp';
const reg = /[Rr]eg[Ee]xp/g;
console.log(str.match(reg)); // ['RegExp', 'regexp']
```
* 匹配所有数字字母
```js
const str = 'Word汉字word汉字123_';
const reg1 = /\w+\b/g;
const reg2 = /[a-zA-Z0-9]+\b/g

console.log(str.match(reg1)); // [ 'Word', 'word', '123_' ]
console.log(str.match(reg2)); // [ 'Word', 'word' ]
```
* 查找所有RGB颜色值
```js
const str = `
.header {
    color: #969896;
}

#b {
    color: #c66;
}

div {
    color: #de935f;
}

.d {
    color: #F0C674;
}`;
const reg = /(?<=:\s)#[A-Fa-f0-9]{3,6}/gi

console.log(str.match(reg)); // [ '#969896', '#c66', '#de935f', '#F0C674' ]
```
* 找到所有的【sX.txt】，X不能是数字。例：sa.txt/sb.txt
```js
const str = `
sa.txt
s1.txt
sb.txt
`
const reg = /s[^1-9]\.txt/gim;
console.log(str.match(reg)); // [ 'sa.txt', 'sb.txt' ]
```
## 第四章 元字符
::: tip 常用元字符
* 匹配元字符的原生需要**转义**【\(\)】

|元字符|含义|
|---|---|
|()|捕获组|
|[]|区间|
|.|任意字符|
|\ |转义字符|
|+ |一到多个匹配|
|* |0到多个匹配|
|? |1.非贪婪匹配 2.不存储捕获组 3.位置关系匹配 4.0个或1个匹配|
:::
::: tip 类元字符
* 类元字符代表某一类字符，十分有用

|元字符|含义|
|---|---|
|\s|空格、非打印字符（换行、制表符类）[\f\n\r\t\v]|
|\S|【\s】取反，所有打印字符|
|\w|字母数字下划线[a-zA-Z0-9_]|
|\W|非字母数字下划线[^a-zA-Z0-9_]|
|\d|所有数字|
|\D|所有非数字|
|\b|所有单词分隔（不匹配出空格，只匹配出单词结束）|
|\B|所有字母分隔|
|\f|换页|
|\n|换行|
|\r|回车|
|\t|制表符|
|\v|垂直制表符|
:::
::: warning
* POSIX字符类JS不支持
:::
* 转义元字符：匹配出数组
```js
const str = `
const arr = [1, 2, 3, [4, 5]];
console.log(arr)`

const reg = /\[.*\](?=\s|;)/g;
console.log(str.match(reg)); // [ '[1, 2, 3, [4, 5]]' ]
```
* 【\s\S】：数据去空格/换行
```js
const str = `大家
好，
我是 hdy
！`
const reg = /\s/g;
console.log(str.replace(reg, '')); // 大家好，我是hdy！
```
* 【\d\D】：把数字分离出来
```js
const str = '我今年18岁';
const reg1 = /\d+/g;
const reg2 = /\D+/g;
console.log(str.match(reg1)); // [ '18' ]
console.log(str.match(reg2)); // [ '我今年', '岁' ]
```
* 【\b】和【\B】的区别：匹配出所有单词。
```js
const str = 'I love this world!';
const reg1 = /\w+\b/gi;
const reg2 = /\w+\B/gi;

console.log(str.match(reg1)); // [ 'I', 'love', 'this', 'world' ]
console.log(str.match(reg2)); // [ 'lov', 'thi', 'worl' ]
```
## 第五章 重复匹配
::: tip 重复匹配
|字符|含义|
|---|---|
|+|贪婪，1个以上|
|+?|非贪婪，1个以上|
|*|贪婪，0个以上|
|*?|非贪婪，0个以上|
|?|0个或1个|
|{2}|2次|
|{2,}|2次及以上|
|{2,4}|2-4次|
:::
::: warning 贪婪模式
* 有多个匹配成功情形时，是选择最多的匹配方式(贪婪)还是最少的匹配方式(非贪婪)
:::
* 【贪婪/非贪婪】匹配出对象
```js{3,4}
// 只要params后面的结果对象，但是有对象嵌套的情况
const str = 'baiduboxapp://setquery?params={"code":200, "data": {"name":"hdy", "pets":{"dog": "小黄", "cat": "小花"}}}';
const reg1 = /(?<=params=)\{.*\}/g;
const reg2 = /(?<=params=)\{.*?\}/g;

console.log(str.match(reg1)); // ['{"code":200, "data": {"name":"hdy", "pets":{"dog": "小黄", "cat": "小花"}}}']

// 匹配错误，少了花括号
console.log(str.match(reg2)); // ['{"code":200, "data": {"name":"hdy", "pets":{"dog": "小黄", "cat": "小花"}']
```
* 【贪婪 + \w + 转义.】匹配URL
```js{2}
const str = '我的网址是：www.hao123.com';
const reg = /[\w\.]+/gi;

console.log(str.match(reg)); // [ 'www.hao123.com' ]
```
* 【?】复杂一点的URL
```js{2,4}
const str = '我的网址是：https://www.baidu.com 或者http://www.baidu.com 或者www.baidu.com';
const reg = /(https?:\/\/)?[\w\.]+/gi;

console.log(str.match(reg)); // [ 'https://www.baidu.com', 'http://www.baidu.com', 'www.baidu.com' ]
```
* 尾部处理：匹配邮箱
```js{2}
const str = 'My Email is 986005715@qq.com ,do you remember?Another one is huangdeyu2020@163.com.Please call me!';
const reg1 = /\b[\w\.]+?@[\w\.]+\w+(?=[\.,!\b\s])/g;

// 错误尾部处理
const reg2 = /\b[\w\.]+?@[\w\.]+[\w\.]+/g;

console.log(str.match(reg1)); // [ '986005715@qq.com', 'huangdeyu2020@163.com' ]
console.log(str.match(reg2)); // [ '986005715@qq.com', 'huangdeyu2020@163.com.Please' ]
```
* 【{min, max}】匹配日期串
```js
// 第三个日期不符合规范
const str = `
2021/09/10
21/9/1
2/2/2
`;
const reg = /\d{2,4}\/\d{1,2}\/\d{1,2}/g;

console.log(str.match(reg)); // [ '2021/09/10', '21/9/1' ]
```