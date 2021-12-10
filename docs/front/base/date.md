# Date
## 设置方法
### new Date
::: tip 构造函数(四种)
1. new Date()
2. new Date(value)
    * 入参：标准日期字符串
3. new Date(distance)
    * 入参：距离纪元时间的毫秒数
4. new Date(year[, month, day, hour, minute, seconds, mseconds])
    * 入参：Number[, Number, Number, Number, Number, Number, Number]
:::
```js{1,4,7,18}
const date1 = new Date();

const str = date1.toString();
const date2 = new Date(str);

const distance = date1.valueOf();
const date3 = new Date(distance);

const timeArr = [
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate(),
    date1.getHours(),
    date1.getMinutes(),
    date1.getSeconds(),
    date1.getMilliseconds()
]
const date4 = new Date(...timeArr);

console.log(date1.toString()); // Thu Dec 09 2021 00:16:49 GMT+0800 (中国标准时间)
console.log(date2.toString()); // Thu Dec 09 2021 00:16:49 GMT+0800 (中国标准时间)
console.log(date3.toString()); // Thu Dec 09 2021 00:16:49 GMT+0800 (中国标准时间)
console.log(date4.toString()); // Thu Dec 09 2021 00:16:49 GMT+0800 (中国标准时间)
```
### setFullYear
::: tip setFullYear
* 作用：设置日期对象本地日期的【年】
* 调用：date.setFullYear(year[, mounth, day])
* 入参：Number[, Number, Number]
* 返回：Number (距纪元时间的毫秒数)
:::
::: warning
* 如果时间设置超出了范围，会从后往前更新：日 -> 月 -> 年
* 设置月时注意月份 - 1
:::
:::: tabs
::: tab label=使用
```js
const date = new Date();
console.log(date.setFullYear(1996)); // 850044661554
console.log(date); // 1996-12-08T11:31:01.554Z
```
:::
::: tab label=月日
```js
const date = Date.now();
date.setFullYear(1996, 07, 26);
console.log(date); // 1996-08-26T11:52:18.067Z
```
:::
::: tab label=自动更新
* 设置【2022年1月0日】，被更新为【2021年12月31日】
```js
const date = new Date();
date.setFullYear(2022, 0, 0);
console.log(date); // 2021-12-31T11:54:17.655Z
```
:::
::::
### setMonth
::: tip setMonth
* 作用：设置日期对象本地日期的【月】
* 调用：date.setMonth(month[, day])
* 入参：Number[, Number]
* 返回：Number (距纪元时间的毫秒数)
* tip：超出合理范围年会被对应的更改
:::
::: warning
* 设置月份记得 - 1
* 如果【日】设置为0，那么月份会 - 1，日变成上个月最后一天
:::
```js
const date = new Date();

// 当前是12月
console.log(date.getMonth()); // 11

// 设置成【2月0日】，被转换成【1月31日】
date.setMonth(1,0);
console.log(date.getMonth()); // 0
console.log(date);            // 2021-01-31T11:47:37.531Z
```
### setDate
::: tip setDate
* 作用：**根据本地日期**(不是UTC日期)设置一个日期对象的【日】
* 调用：date.setDate(day)
* 入参：Number
* 返回：Number (距纪元时间的毫秒数)
* tip：支持负数入参，会月份-1，日期按上个月的最后一天做减法
:::
```js{2,5,8}
const date = new Date();
console.log(date); // 2021-12-08T11:23:12.174Z

date.setDate(1);
console.log(date); // 2021-12-01T11:23:12.174Z

date.setDate(-3);
console.log(date); // 2021-11-27T11:23:12.174Z
```
### setHours
::: tip setHours
* 作用：设置日期对象本地日期的【时】
* 调用：date.setHours(hour[, minute, second, msecond])
* 入参：Number[, Number, Number, Number]
* 返回：Number (距纪元时间的毫秒数)
* tip：超出合理范围【日】会被对应的更改
:::
::: warning
* 如果设置时分秒有超出范围的会自动更新 毫秒 -> 秒 -> 分 -> 时
:::
:::: tabs
::: tab label=时
```js
const date = new Date();
console.log(date.getHours()); // 19

date.setHours(0);
console.log(date.getHours()); // 0
```
:::
::: tab label=时分秒
```js
const date = new Date();
date.setHours(10,30,0,0);
console.log(date.toLocaleTimeString()); // 上午10:30:00
```
:::
::: tab label=自动更新
* 设置为【14：-1：00】，更新为【13：59：00】
```js
const date = new Date();
date.setHours(14, -1, 0);
console.log(date.toLocaleString()); // 2021/12/8 下午1:59:00
```
::::
### setMinutes
::: tip setMinutes
* 作用：设置日期对象本地日期的【分】
* 调用：date.setMinutes(minutes)
* 入参：Number
* 返回：Number (距纪元时间的毫秒数)
* tip：超出合理范围小时会被对应的更改
:::
```js
const date = new Date();
console.log(date.getMinutes()); // 40

date.setMinutes(10);
console.log(date.getMinutes()); // 10
```
### setSeconds
::: tip setSeconds
* 作用：设置日期对象本地日期的【秒】
* 调用：date.setSeconds(second)
* 入参：Number
* 返回：Number (距纪元时间的毫秒数)
* tip：超出合理范围分钟会被对应的更改
:::
```js
const date = new Date();
date.setSeconds(30);
console.log(date.getSeconds()); // 30
```
### setMilliseconds
::: tip setMilliseconds
* 作用：设置日期对象本地日期的【毫秒】
* 调用：date.setMilliseconds(millisecond)
* 入参：Number
* 返回：Number (距纪元时间的毫秒数)
* tip：超出合理范围秒会被对应的更改
:::
```js
const date = new Date();
console.log(date.getMilliseconds()); // 653

date.setMilliseconds(10);
console.log(date.getMilliseconds()); // 10
```
### setTime
::: tip setTime
* 作用：用一个纪元时间毫秒数重置本Date对象
* 调用：date.setTime(distance)
* 入参：Number (距纪元时间毫秒数)
* 返回：Number (距纪元时间的毫秒数)
:::
```js{6,11,13}
const date1 = new Date();
while (Date.now() < date1.getTime() + 1000) {}

// 停了一秒，date2 和 date1 不相等
const date2 = new Date();
console.log(date2.toString() === date1.toString()); // false

// 用 date1 的时间重置 date2 的时间
const distance = date1.getTime();
console.log(distance); // 1638974495485
date2.setTime(distance);

console.log(date2.toString() === date1.toString()); // true
```
## 获取时间
### getFullYear
::: tip getFullYear
* 作用：拿到【年】
* 调用：date.getFullYear()
* 返回：Number (0000-9999)
:::
```js
const date = new Date();
console.log(date.getFullYear()); // 2021
console.log(date.getFullYear() + 1); // 2022
```
### getMonth
::: tip getMonth
* 作用：拿到【月】
* 调用：date.getMonth()
* 返回：Number (0-11)
:::
::: warning
* 月份需要 + 1
:::
```js
const date = new Date();
console.log(date.getMonth()); // 11
```
### getDate
::: tip getDate
* 作用：拿到date对象的【日】
* 调用：date.getDate()
* 返回：Number (1-31)
:::
```js
// 今天12月8号
const date = new Date();
console.log(date.getDate()); // 8
```
### getDay
::: tip getDay
* 作用：拿到【星期几】
* 调用：date.getDay()
* 返回：Number (0-6)
* tip：0是星期天
:::
```js
// 今天星期三
const date = new Date();
console.log(date.getDay()); // 3
```
### getHours
::: tip getHours
* 作用：拿到【时】
* 调用：date.getHours()
* 返回：Number (0-23)
:::
```js
const date = new Date();
console.log(date.getHours()); // 18
```
### getMinutes
::: tip getMinutes
* 作用：拿到【分】
* 调用：date.getMinutes()
* 返回：Number (0-59)
:::
```js
const date = new Date();
console.log(date.getMinutes()); // 20
```
### getSeconds
::: tip getSeconds
* 作用：拿到【秒】
* 调用：date.getSeconds()
* 返回：Number (0-59)
:::
```js
const date = new Date();
console.log(date.getSeconds()); // 36
```
### getMilliseconds
::: tip getMilliseconds
* 作用：拿到【毫秒】
* 调用：date.getMilliseconds()
* 返回：Number (0-999)
:::
```js
const date = new Date();
console.log(date.getMilliseconds()); // 528
```
## 获取UTC时间
::: warning UTC时间
* UTC时间：世界标准时间，比中国时间慢8小时。  
UTC时间 - 中国时间 = -480
:::
### getTimezoneOffset
::: tip getTimezoneOffset
* 作用：获取协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。
* 调用：date.getTimezoneOffset()
* 返回：Number
:::
```js
const date = new Date();
console.log(date.getTimezoneOffset()); // -480
```
### getUTCFullYear
::: tip getUTCFullYear
* 作用：拿到【UTC时间标准的】【年】
* 调用：date.getUTCFullYear()
* 返回：Number (0000-9999)
:::
```js
const date = new Date();
console.log(date.getUTCFullYear()); // 2021
```
### getUTCMonth
::: tip getUTCMonth
* 作用：获取【UTC时间标准的】【秒】
* 调用：date.getUTCMonth()
* 返回：Number (0-11)
:::
::: warning
* 月份需要 + 1
:::
```js
const date = new Date();
console.log(date.getUTCMonth()); // 11
```
### getUTCDate
::: tip getUTCDate
* 作用：拿到【UTC时间标准的】【日】
* 调用：date.getUTCDate()
* 返回：Number (0-31)
:::
```js
const date = new Date();
console.log(date.getUTCDate()); // 8
```
### getUTCDay
::: tip getUTCDay
* 作用：获取【UTC时间标准的】【星期几】
* 调用：date.getUTCDay()
* 返回：Number (0-6)
:::
```js
const date = new Date();
console.log(date.getUTCDay()); // 3
```
### getUTCHours
::: tip getUTCHours
* 作用：获取【UTC时间标准的】【时】
* 调用：date.getUTCHours()
* 返回：Number (0-23)
:::
```js
// 现在是中国时间18点，18 - 8 = 10
const date = new Date();
console.log(date.getUTCHours()); // 10
```
### getUTCMinutes
::: tip getUTCMinutes
* 作用：获取【UTC时间标准的】【分】
* 调用：date.getUTCMinutes()
* 返回：Number
:::
```js
const date = new Date();
console.log(date.getUTCMinutes()); // 57
```
### getUTCSeconds
::: tip getUTCSeconds
* 作用：获取【UTC时间标准的】【秒】
* 调用：date.getUTCSeconds()
* 返回：Number
:::
```js
const date = new Date();
console.log(date.getUTCSeconds()); // 6
```
### getUTCMilliseconds
::: tip getUTCMilliseconds
* 作用：获取【UTC时间标准的】【毫秒】
* 调用：date.getUTCMilliseconds()
* 返回：Number (0-999)
:::
```js
const date = new Date();
console.log(date.getUTCMilliseconds()); // 964
```
## 设置UTC时间
### setUTCFullYear
::: tip setUTCFullYear
* 作用：设置对象UTC的【年】
* 调用：date.setUTCFullYear(year[, month, day])
* 入参：Number[, Number, Number]
* 返回：Number (距离纪元时间的毫秒数)
:::
::: warning
* 月份要 - 1
:::
```js
const date = new Date();
date.setUTCFullYear(1996, 06, 26);
console.log(date.toUTCString()); // Fri, 26 Jul 1996 14:55:55 GMT
console.log(date.toLocaleDateString()); // 1996/7/26
```
### setUTCMonth
::: tip setUTCMonth
* 作用：设置对象UTC时间的【月】
* 调用：date.setUTCMonth(month)
* 入参：Number
* 返回：Number (距离纪元时间的毫秒数)
* tip：月份 - 1
:::
```js
const date = new Date();

// 6月
date.setUTCMonth(7);
console.log(date.getUTCMonth()); // 7
```
### setUTCDate
::: tip setUTCDate
* 作用：设置对象UTC时间的【日】
* 调用：date.setUTCDate(day)
* 入参：Number
* 返回：Number (距离纪元时间的毫秒数)
:::
```js
const date = new Date();
date.setUTCDate(20);
console.log(date.getDate()); // 20
console.log(date.getUTCDate()); // 20
```
### setUTCHours
::: tip setUTCHours
* 作用：设置对象UTC时间的【时】
* 调用：date.setUTCHours(hour[, minute, second])
* 入参：Number[, Number, Number]
* 返回：Number (距离纪元时间的毫秒数)
* tip：UTC时间比中国时间慢8小时
:::
* 设置UTC时间是【10：59：00】对应北京时间【18：59：00】
```js
const date = new Date();
date.setUTCHours(10, 59, 00);
console.log(date.toUTCString()); // Wed, 08 Dec 2021 10:59:00 GMT
console.log(date.toTimeString()); // 18:59:00 GMT+0800 (中国标准时间)
```
### setUTCMinutes
::: tip setUTCMinutes
* 作用：设置对象UTC时间的分钟数
* 调用：date.setUTCMinutes(minute[, seconds, mseconds])
* 入参：Number[, Number, Number]
* 返回：Number(距离纪元时间的毫秒数)
:::
```js
const date = new Date();
date.setUTCMinutes(5);
console.log(date.getMinutes());    // 5
console.log(date.getUTCMinutes()); // 5
```
* 设置【分：秒：毫秒】
```js
const date = new Date();
date.setUTCMinutes(5, 5, 5);
console.log(date.toLocaleTimeString()); // 下午11:05:05
```
### setUTCSeconds
::: tip setUTCSeconds
* 作用：设置UTC时间的【秒】
* 调用：date.setUTCSeconds(seconds)
* 入参：Number
* 返回：Number (距纪元时间的毫秒数)
:::
```js
const date = new Date();
date.setUTCSeconds(20);
console.log(date.getSeconds()); //20
console.log(date.getUTCSeconds()); //20
```
### setUTCMilliseconds
::: tip setUTCMilliseconds
* 作用：设置UTC时间的【毫秒】
* 调用：date.setUTCMilliseconds(msconds)
* 入参：Number
* 返回：Number (距纪元时间的毫秒数)
:::
```js
const date = new Date();
date.setUTCMilliseconds(100);
console.log(date.getMilliseconds()); // 100
```
## 打印方法
### 汇总
::: warning 打印方法汇总
|方法|作用比较|例|
|---|---|---|
|Symbol.toPrimitive|内部调用toString()或valueOf()||
|valueOf|返回到距离纪元时间的毫秒数(一般内部使用，显式调用用getTime)|1638957011751|
|getTime|返回到距离纪元时间的毫秒数|1638957011751|
|toString|美式英语日期格式的字符串|Wed Dec 08 2021 17:59:08 GMT+0800 (中国标准时间)|
|toDateString|美式英语日期格式的年月日|Wed Dec 08 2021|
|toTimeString|美式英语日期格式的时分秒|23:51:33 GMT+0800 (中国标准时间)|
|toISOString|将对象的UTC时区时间返回一个ISO标准的字符串|2021-12-08T15:24:29.682Z|
|toJSON|将对象的UTC时区时间返回一个ISO标准的字符串|2021-12-08T15:24:29.682Z|
|toLocaleString|返回指定时区的字符串|12/8/2021, 11:38:35 PM|
|toLocaleDateString|返回指定时区的年月日|2021/12/8|
|toLocaleTimeString|返回指定时区的时分秒|下午11:46:58|
:::
### Symbol.toPrimitive
::: tip Symbol.toPrimitive
* 作用：自动转化值
* 调用：date[Symbol.toPrimitive] (hint)
* 入参：'number' | 'string' | 'default'
* 返回：String | Number
* tip：内部调用，当期望一个原始值却收到一个对象时，调用此方法。**根据hint，调用valueOf或toString**，无法转换最后抛出错误。
:::
### valueOf
::: tip valueOf
* 作用：返回日期对象的原始值
* 调用：date.valueOf()
* 返回：Number
* tip：从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期的毫秒数。
:::
::: warning
* 该方法功能和Date.prototype.getTime()一样
* valueOf一般内部调用，显式调用一般用.getTime()
:::
```js
const date = new Date();

console.log(date.valueOf()); // 1638957011751
console.log(typeof date.valueOf()); // number

// getTime作用相同
console.log(date.getTime()); // 1638957011751
console.log(typeof date.getTime()); // number
```
### toString
::: tip toString
* 作用：将date对象输出为**美式英语日期格式的字符串**
* 调用：date.toString()
* 返回：String
:::
```js
const date = new Date();
console.log(date.toString()); // Wed Dec 08 2021 17:59:08 GMT+0800 (中国标准时间)
```
### getTime
::: tip getTime
* 作用：获取从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期的**毫秒数**。
* 调用：date.getTime()
* 返回：Number
* tip：valueOf()作用和getTime()一样，但一般显式调用用getTime()
:::
```js
const date = new Date();
console.log(date.getTime()); // 1638959162725
```
### toDateString
::: tip toDateString
* 作用：美式英语和人类易读的形式返回一个日期对象日期部分的字符串
* 调用：date.toDateString()
* 返回：String
:::
```js
const date = new Date();
console.log(date.toDateString());   // Wed Dec 08 2021
console.log(date.toString());       // Wed Dec 08 2021 23:18:56 GMT+0800 (中国标准时间)
console.log(date.toLocaleString()); // 2021/12/8 下午11:18:56
console.log(date.toUTCString());    // Wed, 08 Dec 2021 15:20:31 GMT
console.log(date.valueOf());        // 1638976736688
```
### toTimeString
::: tip toTimeString
* 作用：拿到时间对象的【时分秒】
* 调用：date.toTimeString()
* 返回：String
:::
```js
const date = new Date();
console.log(date.toTimeString()); // 23:51:33 GMT+0800 (中国标准时间)
```
### toISOString
::: tip toISOString
* 作用：将对象的**UTC时间**返回一个ISO标准的字符串【YYYY-MM-DDTHH:mm:ss.sssZ】
* 调用：date.toISOString()
* 返回：String
* tip：总是UTC时区时间，最后会加一个Z做标识
:::
```js
const date = new Date();
console.log(date.toISOString()); // 2021-12-08T15:24:29.682Z
```
### toJSON
::: tip toJSON
* 作用：返回date对象的字符串格式。
* 调用：date.toJSON()
* 返回：String
:::
```js
const date = new Date();
console.log(date.toJSON());      // 2021-12-08T15:28:47.720Z
console.log(date.toISOString()); // 2021-12-08T15:28:47.720Z

const json = date.toJSON();
const date2 = new Date(json);
console.log(date2.toString() === date.toString()); // true
```
### toLocaleString
::: tip toLocaleString
* 作用：将日期对象以指定的时区返回字符串（默认当地时区）
* 调用：date.toLocaleString(locale, options)
* 入参：String, Object
* 返回：String
:::
```js
const date = new Date();
console.log(date.toString());              // Wed Dec 08 2021 23:38:35 GMT+0800 (中国标准时间)
console.log(date.toLocaleString());        // 2021/12/8 下午11:38:35
console.log(date.toLocaleString('en-US')); // 12/8/2021, 11:38:35 PM
```
### toLocaleDateString
::: tip toLocaleDateString
* 作用：将日期对象以指定的时区返回字符串（默认当地时区）(只要年月日)
* 调用：date.toLocaleDateString(locale, options)
* 入参：String, Object
* 返回：String
:::
```js
const date = new Date();
console.log(date.toLocaleDateString());        // 2021/12/8
console.log(date.toLocaleDateString('en-US')); // 12/8/2021
```
### toLocaleTimeString
::: tip toLocaleTimeString
* 作用：将日期对象以指定的时区返回字符串（默认当地时区）(只要时分秒)
* 调用：date.toLocaleTimeString(locale, options)
* 入参：String, Object
* 返回：String
:::
```js
const date = new Date();
console.log(date.toLocaleTimeString());        // 下午11:46:58
console.log(date.toLocaleTimeString('en-US')); // 11:46:58 PM
```
## 静态方法
### now
::: tip now
* 作用：获取自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。
* 调用：Date.now()
* 返回：Number
:::
:::: tabs
::: tab label=使用
```js
const now = Date.now();
const end = now + 2000;
while (Date.now() < end){}
console.log('暂停了2秒');
```
:::
::: tab label=实现
```js
const now = () => new Date().getTime();
console.log(now()); // 1638961853427
```
:::
::::
### parse
::: tip parse
* 作用：解析日期字符串，返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数
* 调用：Date.parse(String);
* 返回：Number
:::
::: warning
* 如果不确定字符串格式是否被支持，最好手动解析
:::
```js
const date = new Date();
const str = date.toString();
console.log(str);             // Wed Dec 08 2021 19:15:52 GMT+0800 (中国标准时间)
console.log(Date.parse(str)); // 1638962152000
```
### UTC
::: tip UTC
* 作用：以UTC的形式构造纪元时间的距离毫秒数
* 调用：Date.UTC(year[, month, day, hour, minutes, seconds, mseconds])
* 入参：Number[, Number, Number, Number, Number, Number]
* 返回：Number
:::
```js
const time1 = [1996, 06, 26, 10, 00, 00];
const date1 = new Date(...time1);

// UTC时间比中国时间慢8小时
const time2 = time1.map((item, index) => index !== 3 ? item : item - 8);

const date2 = new Date(Date.UTC(...time2));
console.log(date1.toString() == date2.toString()); // true
```
