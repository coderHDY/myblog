---
title: 工具函数
date: 2022-08-16
---
## 滚动
:::: tabs
::: tab label=滚到顶部
```js
const scrollToTop = (el = window) => {
  el.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
```
:::
::: tab label=滚到底部
```js
const scrollToBottom = (el = window) => {
  el.scrollTo({
    top: document.documentElement.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};
```
:::
::: tab label=可见
```js
const smoothScroll = (el) => {
  el.scrollIntoView({
    behavior: "smooth",
  });
};
```
:::
::::
## 全屏显示
::: tip
全屏显示只能由用户发起，可以添加EventListener由用户出发
:::
:::: tabs
::: tab label=进入全屏
```js
const goToFullScreen = (element = document.body) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
};
```
:::
::: tab label=退出全屏
* 默认esc键就是退出全屏
```js
const goExitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
```
:::
::: tab label=测试
```html
<body>
  <img src="https://coderhdy.com/assets/img/bg.svg" alt="">
  <script>
    const goToFullScreen = (element = document.body) => {
      console.log(element);
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
      }
    };
    const goExitFullscreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    };

    const wrapper = document.querySelector(".wrapper");
    const img = document.querySelector("img");
    img.addEventListener("click", () => {
      goToFullScreen(img);
    });
  </script>
</body>
```
:::
::::
## 获取数据类型
:::: tabs
::: tab label=全面方法
```js
const getType = (obj) => {
  const ty = Object.prototype.toString.call(obj);
  return ty.match(/\w+/g)[1];
}
```
:::
::::
## 跨平台停止事件冒泡
```js
const stopPropagation = (event) => {
  event = event || window.event;
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
};
```
## 深拷贝
::: tip
一种思路，但是数组打印出来会是`Array { '0': '你好' }`的形式
:::
```js
const deepClone = (obj, hash = new WeakMap()) => {
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    if (obj[key] && typeof obj[key] === "object") {
      cloneObj[key] = deepClone(obj[key], hash);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
};

```
## 判断平台
:::: tabs
::: tab label=判断手机
```js
const isMobile = () => {
  const reg = /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
  return !!navigator.userAgent.match(reg);
};
```
::: tab label=判断安卓
```js
const isAndroid = () => {
  return /android/i.test(navigator.userAgent.toLowerCase());
};
```
:::
::: tab label=判断ios
```js
const isIOS = () => {
  let reg = /iPhone|iPad|iPod|iOS|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
};
```
:::
::: tab label=判断平台及版本
```js
const getExplorerInfo = () => {
  let t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf("msie")
    ? {
        //ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
    : !!t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: "IE",
        version: 11,
      }
    : 0 <= t.indexOf("edge")
    ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("firefox")
    ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("chrome")
    ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("opera")
    ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("Safari")
    ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1]),
      }
    : {
        type: t,
        version: -1,
      };
};
```
:::
:::tab label=js判断可触屏
```js
const canHover = matchMedia("(hover: hover)").matches;
```
:::
::::
## 操作cookie
::: danger
需要注意的是，`document.cookie`方法一次只能对一个 cookie 进行设置或更新。
:::
:::: tabs
::: tab label=解析
```JS
const parseCookie = (cookie = document.cookie) => {
    if (cookie.trim().length === 0) return {};
    return Object.fromEntries(cookie.split('; ').map(item => {
        const [key, ...val] = item.split('=');
        return [key, val.join("=")];
    }));
}
```
:::
::: tab label=增、改
```js
const setCookieItem = (key, val) => {
    return document.cookie = `${key}=${val}`;
}
```
:::
::: tab label=查
```js
const getCookieItem = (key, cookie = document.cookie) => {
    if (cookie.trim().length === 0) return undefined;
    const reg = new RegExp(`(?<=^${key}=|; ${key}=)[^\;]+`);
    return cookie.match(reg)[0];
}
```
:::
::: tab label=删
```js
const delCookie = (key) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};
```
:::
::::
## 随机函数
:::: tabs
::: tab label=随机字符
```js
const getRandomStr = (len) => {
  len = len ?? Math.floor(Math.random() * 100) + 10;
  const dir = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
  const dirLen = dir.length;
  let ans = "";
  for (let i = 0; i < len; i++) {
    const s = dir[Math.floor(Math.random() * dirLen)];
    ans += s;
  }
  return ans;
}
```
:::
::: tab label=随机数
```js
const getRandomNum = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
```
:::
::: tab label=数组随机取值
```js
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
```
:::
::::
## 首字母大写
:::: tabs
::: tab label=js
```js
const upperCaseFirst = ([first, ...rest]) => first ? first.toUpperCase() + rest?.join("") : ""
```
:::
::: tab label=css
```css
span {
  text-transform: capitalize;
}
```
:::
::::
## shuffle洗牌函数
```js
const shuffle = (arr) => Array.from(arr).sort(() => Math.random() - 0.5);
```
## 格式化数字
```js
const num = 1234567890;

// 1,234,567,890
console.log(num.toLocaleString("en-US"));

// $1,234,567,890.00
console.log(num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
}));

// 一二三四五六七八九〇
console.log(num.toLocaleString('zh-Hans-CN-u-nu-hanidec', {
    useGrouping: false
}));

// ¥1,234,567,890.00
console.log(num.toLocaleString('zh-CN', {
    style: 'currency',
    currency: 'CNY'
}));
```
## 日期
:::: tabs
::: tab label=检测是否有效
```js
const isValiDate = (...date) => !Number.isNaN(new Date(...date).valueOf());
```
* 测试
  ```js
  const isValiDate = (...date) => !Number.isNaN(new Date(...date).valueOf());
  const d1 = new Date("20202asdf-1");
  const d2 = new Date("2020-12-10");
  console.log(isValiDate(d1)); // false
  console.log(isValiDate(d2)); // true
  ```
:::
::: tab label=计算间隔
```js
const timeDif = (d1, d2) => Math.floor(Math.abs(+new Date(d1) - +new Date(d2)) / (1000 * 60 * 60 * 24));
```
* 测试
  ```js
  const timeDif = (d1, d2) => Math.floor(Math.abs(+new Date(d1) - +new Date(d2)) / (1000 * 60 * 60 * 24));
  const d1 = new Date("2020-12-1");
  const d2 = new Date("2020-12-10");
  console.log(timeDif(d1, d2));
  ```
:::
::: tab label=一年第几天
```js
const first2today = today => Math.floor((+new Date(today) - +new Date(new Date(today).getFullYear().toString())) / (1000 * 60 * 60 * 24)) + 1;
```
* 测试
  ```js
  const first2today = today => Math.floor((+new Date(today) - +new Date(new Date(today).getFullYear().toString())) / (1000 * 60 * 60 * 24)) + 1;

  console.log(first2today("2019-12-31")); // 365
  console.log(first2today("2020-12-31")); // 366
  ```
:::
::: tab label=格式化
* 格式化日期
  ```js
  const formatDate = (date, mark = "-") => new Date(date).toISOString().slice(0, 10).split("-").join(mark);
  ```
  * 测试
    ```js
    const formatDate = (date, mark = "-") => new Date(date).toISOString().slice(0, 10).split("-").join(mark);

    console.log(formatDate("2019-12-31")); // 2019-12-31
    console.log(formatDate("2020-12-31", "/")); // 2020/12/31
    ```
* 格式化时间
  ```js
  const formatTime = (date, mark = ":") => new Date(date).toTimeString().slice(0, 8).split(":").join(mark);
  ```
  * 测试
    ```js
    const formatTime = (date, mark = ":") => new Date(date).toTimeString().slice(0, 8).split(":").join(mark);

    console.log(formatTime(Date.now())); // 20:36:40
    ```
:::
::::
## 颜色
:::: tabs
::: tab label=rgb2hex
* RGB（A）转16进制
```js
const rgb2Hex = (r, g, b, a) => {
    let ans = "#" + ((r << 16) + (g << 8) + b).toString(16);
    if (a !== undefined) {
        ans += Math.floor(a * 255).toString(16).padStart(2, "0");
    }
    return ans;
};
```
:::
::: tab label=hex2rgb
```js
const hex2Rgb = (hex) => {
    if (hex.startsWith("#")) hex = hex.slice(1);
    hex = hex.padEnd(6, "f");
    const [r, g, b, a] = hex.match(/\w{2}/g);
    return a === undefined ? `rgb(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)})` : `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${(parseInt(a, 16) / 255).toFixed(1)})`;
}
```
* 测试
  ```js
  const hex2Rgb = (hex) => {
      if (hex.startsWith("#")) hex = hex.slice(1);
      hex = hex.padEnd(6, "f");
      const [r, g, b, a] = hex.match(/\w{2}/g);
      return a === undefined ? `rgb(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)})` : `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${(parseInt(a, 16) / 255).toFixed(1)})`;
  }

  console.log(hex2Rgb('#fff')); // rgb(255, 255, 255)
  console.log(hex2Rgb('#ffffffff')); // rgba(255, 255, 255, 1.0)
  ```
:::

::: tab label=hex颜色透明度
```js
const hex2rgba = (hex, opacity) => {
    if (hex[0] === "#") {
        hex = hex.slice(1);
    }
    const rgbArr = hex.padEnd(6, "f").match(/\w{2}/g);
    return rgbArr.reduce((pre, item) => pre.replace("{color}", parseInt(`0x${item}`)), `rgba({color},{color},{color},${opacity})`);
}

console.log(hex2rgba("#fc5531", 0.2)); // rgba(252,85,49,0.2)
```
:::
::: tab label=随机rgb
```js
const randomRgb = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
```
* 测试
  ```js
  const randomRgb = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  for (let i = 0; i < 10; i++) {
      console.log(randomRgb());
  }
  ```
* rgba
```js
const randomRgba = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(1)})`;
```
:::
::: tab label=随机hex
```js
const randomHex = () => `#${Math.floor(Math.random() * 256).toString(16).padStart(2, "0")}`
  + `${Math.floor(Math.random() * 256).toString(16).padStart(2, "0")}`
  + `${Math.floor(Math.random() * 256).toString(16).padStart(2, "0")}`;
```
* 带透明度
```js
const randomHex = () => `#${Math.floor(Math.random() * 256).toString(16).padStart(2, "0")}`
    + `${Math.floor(Math.random() * 256).toString(16).padStart(2, "0")}`
    + `${Math.floor(Math.random() * 256).toString(16).padStart(2, "0")}`
    + `${Math.floor(Math.random() * 256).toString(16).padStart(2, "0")}`;
```
:::
::: tab label=网页变灰
```css
.gray {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-filter: gray;
    filter: gray;
    -webkit-filter: progid:dximagetransform.microsoft.basicimage(grayscale=1);
    filter: progid:dximagetransform.microsoft.basicimage(grayscale=1);
}
```
:::
::::
## 复制粘贴
:::: tabs
::: tab label=复制
```js
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
```
:::
::: tab label=粘贴
```js
const readText = () => navigator.clipboard.readText().then(res => console.log(res));
```
:::
::: tab label=事件
* 事件：`copy，cut，paste`
```js
el.addEventListener('copy', e => {
    console.log(e);
    const clipboardData = e.clipboardData || window.clipboardData; // ie、其他浏览器不一样

    // 控制剪切板api
    // clipboardData.setData();
    // clipboardData.getData();
    e.preventDefault(); // 禁止复制
})
```
:::
::: tab label=获取选中的文本
```js
const getSelectedText = () => window.getSelection().toString();

getSelectedText();
```
:::
::: tab label=旧替代方法
```html
<body>
    <div id="div">123234213423423家阿克琉斯的积分啦4</div>
</body>
<script>
    div.addEventListener("click", function () {
        const val = this.innerText;

        var input = document.createElement("input");
        input.style = `position: fixed;left: -100vw;`;
        input.value = val;
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, input.value.length - 5);
        document.execCommand('Copy');
        document.body.removeChild(input);
    })
</script>
```
:::
::::
## 暗黑模式
```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

console.log(isDarkMode); // true
```
## 检测是否激活本网页
::: tip
切换浏览器tab、最小化浏览器都算`未激活`
:::
```js
const isTabInView = () => !document.hidden; 
```
## touchmove事件打平
::: tip
1. 鼠标`mousemove`和`touch`事件取x和y方法不一样
2. mouse有移出屏幕的风险，会导致监听触发不符合预期
:::
:::: tabs
::: tab label=使用
```js
// callback: (x, y) => void
const moveListener = (el, callback) => {
    let mouseDown = false;
    el.addEventListener("touchmove", e => callback(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
    el.addEventListener("mousedown", () => mouseDown = true);
    el.addEventListener("mouseup", () => mouseDown = false);
    el.addEventListener("mouseout", () => mouseDown = false);
    document.addEventListener("mouseout", () => mouseDown = false);
    el.addEventListener("mousemove", (e) => {
        if (!mouseDown) return;
        callback(e.clientX, e.clientY);
    })
}
```
:::
::: tab label=测试
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <title>Document</title>
</head>

<body>
    <div id="position">x: 0 y: 0</div>

    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            width: 100vw;
            height: 100vh;
        }
    </style>
    <script>
        const body = document.body;
        const position = document.querySelector("#position");

        // callback: (x, y) => void
        const moveListener = (el, callback) => {
            let mouseDown = false;
            el.addEventListener("touchmove", e => callback(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
            el.addEventListener("mousedown", () => mouseDown = true);
            el.addEventListener("mouseup", () => mouseDown = false);
            el.addEventListener("mouseout", () => mouseDown = false);
            document.addEventListener("mouseout", () => mouseDown = false);
            el.addEventListener("mousemove", (e) => {
                if (!mouseDown) return;
                callback(e.clientX, e.clientY);
            })
        }

        const handleMove = (x, y) => {
            position.innerText = `x: ${x} y: ${y} `;
        }
        moveListener(body, handleMove);
    </script>
</body>

</html>
```
:::
::::
## url解析query
```js
const queryParser = (url) => {
    const queryReg = /\?([^#]+)/;
    try {
        const queryStr = url.match(queryReg);
        if (queryStr === null) return {};

        const queryParams = Object.fromEntries(queryStr[1].split("&").map(item => item.split("=")).map(([k, v]) => ([k, decodeURIComponent(v)])));
        return queryParams;
    } catch (e) {
        return {}
    }
}
```
## 输入法半角转全角
* 涉及到日文输入法可以直接转化为对应英文字母
```js
const jp2en = (s: Vowels) => {
  const map = {
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    ア: "a",
    イ: "i",
    ウ: "u",
    エ: "e",
    オ: "o",
  };
  return Object.keys(map).includes(s) ? map[s] : "";
};

const toHalfWidth = (str: string) => {
  let result = "";
  const reg = /[a-z0-9０-９]/i;
  for (let i = 0; i < str.length; i++) {
    if (/[あ-おア-エ]/.test(str[i])) {
      result += jp2en(str[i] as Vowels);
      continue;
    }
    if (!reg.test(str[i])) {
      continue;
    }
    const c = str.charCodeAt(i);
    if (c >= 0xff01 && c <= 0xff5e) {
      // full string
      result += String.fromCharCode(c - 0xfee0);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
};

```
## 防抖节流
:::: tabs
::: tab label=节流
```js
const throttle: Throttle = (fn, sleep = 200) => {
  let timer: ReturnType<typeof setTimeout> | null;
  return () => {
    if (timer) return;
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, sleep);
    return () => {
      timer = null;
    };
  };
};
```
:::
::: tab label=UI防抖
* react hook
* 目的：先更新UI，再发请求更新数据
```js
type UseUIDebounce = <T>(
  asyncFn: (p: T) => any,
  genKeyFn?: (p: T) => string,
  time?: number
) => (p: T) => any;

/**
 * UI refresh first, api debounce request
 * @param asyncFn 更新数据的发送请求的函数
 * @param genKeyFn 判断是否是同一个请求，通过参数做一个唯一标识key
 * @param time
 * @returns
 */
const useUIDebounce: UseUIDebounce = (asyncFn, genKeyFn, time = 1000) => {
  const singleTimer = useRef<any>();
  const multiTimer = useRef(new Map());
  return (p) => {
    if (typeof genKeyFn === "function") {
      const key = genKeyFn(p);
      if (multiTimer.current.has(key)) {
        clearTimeout(multiTimer.current.get(key));
      }
      multiTimer.current.set(
        key,
        setTimeout(() => {
          asyncFn(p);
          multiTimer.current.delete(key);
        }, time)
      );
    } else {
      clearTimeout(singleTimer.current);
      singleTimer.current = setTimeout(() => {
        asyncFn(p);
        singleTimer.current = null;
      }, time);
    }
  };
};
```
* 使用
```js
// 发送网络请求函数
const updateFn = async (param) => {
  try {
      await post("api/xxxxx", param)
      
  } catch {
    return "failed";
  }
};
// 发送网络请求函数做成防抖函数
const debounceUpdate = useUIDebounce(
  updateFn,
  // 使用参数的某个key做唯一标识
  ({ key }) => key
);
const doSomeThing = () => {
  setList(newList);
  void debounceUpdate(newList);
};
```
:::
::: tab label=屏幕resize防抖
```js
interface UseWindowResize {
  (callback: () => void, throttleTime?: number): void;
}
const useWindowResize: UseWindowResize = (callback, throttleTime = 200) => {
  const throttledUpdateWidth = throttle(callback, throttleTime);

  useEffect(() => {
    window.addEventListener("resize", throttledUpdateWidth);
    return () => window.removeEventListener("resize", throttledUpdateWidth);
  }, [throttledUpdateWidth]);
  useEffect(() => {
    callback();
  }, []);
};
```
:::
::::