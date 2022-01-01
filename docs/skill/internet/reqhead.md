---
title: 请求头相关
date: 2021-11-13
---
## Purpose
::: tip Purpose
* 作用：预取机制
* 触发方法：
```html
<link rel="prefetch" href="/images/big.jpeg">
```
* 支持的值：prefetch/preload
:::

:::: tabs
::: tab label=prefetch
* Purpose: prefetch代表当前用户**可能用到这个资源**，需要**在空闲时间**做预取，放在浏览器内存里面，真正用到的时候直接从浏览器内存取
![](./assets/prefetch.png)
:::
::: tab label=preload
* Purpose: preload代表这个资源暂时没有被用到，但是**极有可能会用到**，优先级很高，所以会直接开启一个请求线程去请求相关资源，并**不会等网络空闲下来**
:::
::::
* webpack处理  
在[vue-cli官方文档](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload)有讲解
```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')

    // 或者
    // 修改它的选项：
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      return options
    })
  }
}
```