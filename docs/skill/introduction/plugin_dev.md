---
title: 插件开发
date: 2021-10-15
---
* 为了更好地展现我们的能力，我们可能需要更多元化的表达方式，来做更好的讲解，下面介绍我们的开发流程。
::: tip
[vuepress官方文档](https://vuepress.vuejs.org/)可能教学并不是很全，因为它是依赖于[markdown-it](https://markdown-it.docschina.org/)和[markdown-it-container](https://www.npmjs.com/package/markdown-it-container)这两个库搭建起来的插件系统，如果需要详细地学习，需要将三个文档结合起来看。
:::
## 开发流程

:::: steps

::: step
* 在.vuepress/components 目录下新建文件夹，文件夹名字为组件名称
* 为方便目录结构管理尽量遵循目录结构统一
:::

::: step
* 以Vue2的语法编写插件
```js
// .vuepress/components/demo/Demo.vue
<template>
  <div>
      <h1>这是demo</h1>
      <p>
        <strong>我们是：{{name}}</strong>
      </p>
      <em>我年龄是：{{age}}</em>
      <slot></slot>
      <h3>这是demo写的footer</h3>
  </div>
</template>

<script>
export default {
    name: 'demo',
    props: {
        name: {
            type: String,
            default: ''
        },
        age: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>
```
:::

::: step
* 在.vuepress/components/enhanceAppFiles.js 文件夹下注册Vue组件
```js {3}
import Demo from './demo/Demo.vue';
export default ({Vue}) => {
    Vue.component(Demo.name, Demo);
}
```
:::

::: step
* 在.vuepress/components/myPlugin.js 文件夹下注册编译语法
```js {7}
// 注册插件语法列表
const components = [
  'step',
  'steps',
  'el-tabs',
  'el-tab-pane',
  'demo'
]
```
:::

::: step
* 如果需要给插件额外传参，就需要到utils.js文件夹下的FIXED_ATTR内增加传入参数，如果不需要可以跳过此步
> 传参props两种方式
> * 编写markdown时手动传参  
> * 在utils.js文件夹下编写插件时就传入固定的参数，编写markdown时就不用再写
```js {3}
// 各组件除了markdown写入的属性以外，需要固定传入的属性
const FIXED_ATTR = new Map([
    ['demo', 'name="百度搜索产品运营小组"'],
    ['steps', 'v-slot="{ active }"'],
    ['step', ':active="active"'],
    ['tabs', 'type=border-card']
])
```
:::

::: step
* 使用对应的插件语法，查看效果
:::

::::
## 全文搜索框
* 前提：线上部署（因为需要爬虫）
* [全文搜索框添加方法](https://github.com/mqyqingfeng/Blog/issues/267)