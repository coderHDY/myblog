---
title: 省略
date: 2023-05-15
---
## 单行句尾省略
::: codePen height=100 width=10000
```html{9-11}
<body>
  <div>asdf asdf asdf asdf adgfgsfdas sdfg safasdfasf aasfas fasf asdf asfasf asfa sdfa f asf asdf as</div>

  <style>
    div {
      width: 100px;
      resize: horizontal;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  </style>
</body>
```
:::
## 单行句首省略
::: tip
1. 句尾省略
2. 用正则匹配出句尾标点符号
3. `direction: rtl;`转换句尾标点符号和句子顺序
4. 父盒子flex布局
:::

* 完整替换js
```js
const regex = /(.*?)([\u3002\uFF01\uFF1F\uff0c\uFF1B\uFF1A\u3001.,;:‘“《》，〈〉<>（）＜＞\~`'"\/\!@#\$%\^&\*\(\)_\-\=\+]*\s*)$/s;

const newHtml = html.replace(
  regex,
  (_, $1, $2) => `<span class="omitted">${$1}</span><span>${$2}</span>`
);

div.innerHTML = newHtml;
```
::: codePen width=10000 height=100
```html
<body>
  <div>
    asdf asdf asdf asdf adgfgsfdas sdfg safasdfasf aasfas fasf asdf asfasf asfa
    sdfa f asf asdf as,./
  </div>

  <script>
    const div = document.querySelector("div");
    const html = div.innerText;
    const regex =
      /(.*?)([\u3002\uFF01\uFF1F\uff0c\uFF1B\uFF1A\u3001.,;:‘“《》，〈〉<>（）＜＞\~`"\/\!@#\$%\^&\*\(\)_\-\=\+]*\s*)$/s;

    const newHtml = html.replace(
      regex,
      (_, $1, $2) => `<span class="omitted">${$1}</span><span>${$2}</span>`
    );
    div.innerHTML = newHtml;
  </script>
  <style>
    div {
      width: 300px;
      display: flex;
    }
    .omitted {
      display: block;
      direction: rtl;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  </style>
</body>
```
:::
## 双向省略
* 将总是需要会展示的元素放在屏幕内
```js
const structMatchedHtml = (s) => {
  const shrinkStartReg =
    /(.*?)<\s*span\s+class=['"]match['"]\s*>(.*?)<\/\s*span\s*>(.*)/s;
  const regex =
    /(.*?)([\u3002\uFF01\uFF1F\uff0c\uFF1B\uFF1A\u3001.,;:‘“《》，〈〉<>（）＜＞\~`'"\/\!@#\$%\^&\*\(\)_\-\=\+]*\s*)$/s;
  return s.replace(shrinkStartReg, (_, preText, matchContent, afterText) =>
    preText === ""
      ? `<span class="match">${matchContent}</span>
          <span class="shrink-end">${afterText}</span>`
      : `<span class="shrink-pre">${preText.replace(regex, "$1</span>$2")}
          <span class="match">${matchContent}</span>
          <span class="shrink-end">${afterText}</span>`
  );
};
```
```css
div {
  width: 300px;
  display: flex;
}
.match {
  display: inline-block;
  background-color: yellow;
  vertical-align: bottom;
  white-space: nowrap;
}
.shrink-pre {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 0 1 auto;
  min-width: 2rem;
  direction: rtl;
}
.shrink-end {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.break {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
::: codePen width=10000 height=100
```html
<body>
  <div>
    asdf asdf asdf asdf adgfgsfdas sdfg
    <span class="match">我必须展示</span> safasdfasf aasfas fasf asdf asfasf
    asfa sdfa f asf asdf as,./
  </div>

  <script>
    const div = document.querySelector("div");
    const html = div.innerHTML;
    const structMatchedHtml = (s) => {
      const shrinkStartReg =
        /(.*?)<\s*span\s+class=["]match["]\s*>(.*?)<\/\s*span\s*>(.*)/s;
      const regex =
        /(.*?)([\u3002\uFF01\uFF1F\uff0c\uFF1B\uFF1A\u3001.,;:‘“《》，〈〉<>（）＜＞\~`"\/\!@#\$%\^&\*\(\)_\-\=\+]*\s*)$/s;
      return s.replace(shrinkStartReg, (_, preText, matchContent, afterText) =>
        preText === ""
          ? `<span class="match">${matchContent}</span>
              <span class="shrink-end">${afterText}</span>`
          : `<span class="shrink-pre">${preText.replace(regex, "$1</span>$2")}
              <span class="match">${matchContent}</span>
              <span class="shrink-end">${afterText}</span>`
      );
    };
    const newHtml = structMatchedHtml(html);
    div.innerHTML = newHtml;
  </script>
  <style>
    div {
      width: 300px;
      display: flex;
    }
    .match {
      display: inline-block;
      background-color: yellow;
      vertical-align: bottom;
      white-space: nowrap;
    }
    .shrink-pre {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 0 1 auto;
      min-width: 2rem;
      direction: rtl;
    }
    .shrink-end {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .break {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  </style>
</body>

```
:::
## 中间省略
::: codePen height=100 width=10000
```html
<body>
  <div>
    asdf asdf asdf asdf adgfgsfdas sdfg
    safasdfasf aasfas fasf asdf asfasf
    asfa sdfa f asf asdf as asdf afasdfasdf aasdf
  </div>

  <script>
    const div = document.querySelector("div");
    const html = div.innerText;
    const structMatchedHtml = (s) => {
      const pre = s.slice(0, -5);
      const end = s.slice(-5);
      return `<span class="omitted">${pre}</span>${end}`;
    };
    const newHtml = structMatchedHtml(html);
    div.innerHTML = newHtml;
  </script>
  <style>
    div {
      width: 300px;
      display: flex;
    }
    .omitted {
      display: inline-block;
      flex-grow: 0;
      flex-shrink: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      letter-spacing: 0.04rem;
    }
  </style>
</body>

```
:::
## 多行省略
::: danger
* 暂时不兼容ie和火狐
:::
::: codePen height=100 width=10000
```html
<body>
  <div class="container">
    <p class="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dapibus
      sapien. Ut accumsan lectus mi, eget consequat libero rutrum et.
    </p>
  </div>

  <style>
    .container {
      position: relative;
      width: 200px;
      height: 100px;
      overflow: hidden;
    }

    .paragraph {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  </style>
</body>

```
:::
## 兼容多行省略
::: codePen
```html
<body>
  <div class="container">
    <p class="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dapibus
      sapien. Ut accumsan lectus mi, eget consequat libero rutrum etasdf ads sfff.
    </p>
  </div>

  <style>
    .container {
      position: relative; /* 用于定位省略号 */
      overflow: hidden;
      width: 200px;
      height: 100px;
    }

    .paragraph {
      display: -webkit-box;
      text-overflow: ellipsis; /* 文本截断时用省略号表示 */
      line-clamp: 3;
      -webkit-box-orient: vertical; /* 弹性盒子垂直方向排列 */
      -webkit-line-clamp: 3; /* 显示行数 */
      -moz-box-sizing: border-box;
      box-sizing: border-box; /* 兼容 Firefox 布局问题 */
      overflow: hidden;
    }
  </style>
</body>

```
:::