---
title: Vue3总结
date: 2022-01-27
---
## 对Vue2升级点
:::: tabs
::: tab label=起步
* CDN引入
```js
<script src="https://unpkg.com/vue@next"></script>
```
* vite创建
```shell
npm init vite hello-vue3 -- --template vue
```
* 脚手架
```shell
npm install -g @vue/cli
vue create hello-vue3
```
* 简单的父子响应式传参案例
```vue{2-7}
<script setup>
import Counter from "./components/computer.vue";
import { reactive } from 'vue';
let msg = reactive({ name: 'hello' });
const change = () => {
  msg.name = '呵呵';
};
</script>

<template>
  <div>
    <Counter :msg="msg" />
    {{ msg.name }}
    <button @click="change">修改</button>
  </div>
</template>
```
```vue{9-10}
<template>
  <div>
    {{ msg.name }}
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  props: ['msg'],
  setup(props) {
      let { msg } = props;
      return {
          msg
      }
  }
}
</script>
```
:::
::: tab label=this
* setup内无法使用this，因为在setup调用时，实例已经被创建，但是data/methods/等都还没有被解析。
>在data解析时，会把响应式数据绑定到这个实例上面去`instance.proxy`，在vue2写法的methods/生命周期钩子解析时，会绑定this为本实例。所以他们能够很方便的访问到this。而setup在他们解析之前执行，this就是原生的全局环境。
:::
::: tab label=props
* props按原方式接收，并作为setup的第一个参数
```js
export default {
    props: ['msg'],
    setup(props) {
        let { msg } = props;
        return {
            msg
        }
    }
}
```
* 强调：父传子的props参数应该是只读的，用`readonly`包裹一层再传递给子组件
```js
import { ref, readonly } from 'vue';
setup() {
    let msg = ref('hello');
    let readonlyMsg = readonly(msg);

    const changeMsg = () => {
        msg.value = '呵呵';
    };
    const changeReadonlyMsg = () => {
        readonlyMsg.value = '哈哈'; // 无效
    };
    return {
        msg,
        readonlyMsg, // 传给子组件的只读并且会接受修改的数据
        changeMsg, // 本组件内修改
    }
}
```
:::
::: tab label=data
* data：`reactive`、`ref`定义

|reactive指令|作用|
|---|---|
|reactive|定义深层响应式对象，并且可以解包深层的ref对象|
|reaconly|定义深层的只读对象|
|shallowReactive|定义浅层响应式对象|
|shallowReadonly|浅层只读控制，深层不管|
|isReactive|是否被reactive注册过(readonly包裹了reactive也算)|
|isReadonly|是否只读|
---

|ref指令|作用|
|---|---|
|ref|定义一个值的代理，**如果接收的是对象，那么会被reactive解析**|
|unref|获取ref.value，不管是不是proxy代理的值，都会返回一个原始值|
|isRef|判断是否是ref代理对象|
|toRef|将ref/reactive对象的某个属性作为ref对象单独拎出来`let a = toRef(props, 'a')`，并保持源响应式|
|toRefs|将响应式对象转化成`普通对象.ref对象`并保持响应式。可以用来解构proxy对象|
|customRef|自定义一些特殊的响应式Ref，例如自定义防抖Ref，可以自定义追踪和触发响应式的时间|
|shallowRef|浅层响应式，只监控refProxy.value值本身的变化，其他的不会出发`watchEffect`/`watch`的响应式|
|triggerRef|手动触发一次更新，配合shallowRef可以实现自定义watch响应时机的proxy|
>toRefs使用
```html{4}
<script setup>
import { ref,toRefs } from 'vue';
let msg = ref({name: 'hdy', age: 18});
let {name, age} = toRefs(msg.value);

msg.value.name = '张三'; // 都保持响应式
</script>
```
:::
::: tab label=生命周期
```js
imoprt { onMounted } from 'vue'
```
* **没有**`onCreate`、`onBeforeCreate`，直接在setup里面做对应的事情。`destroy`和`beforeDestroy`换成了`onBeforeUnmount`和`onUnmounted`
* 可以多次使用，并按顺序触发
```js
setup() {
    const msg = ref('')
    onMounted(() => console.log('---'));
    onMounted(callback);
    onMounted(() => {
        fetch('xx')
        .then(res => res.json())
        .then(res => msg.value = res.data)
    });

}
```


|选项式| API	Hook inside setup|
|---|---|
|beforeCreate|	Not needed*|
|created|	Not needed*|
|beforeMount|	onBeforeMount|
|mounted|	onMounted|
|beforeUpdate|	onBeforeUpdate|
|updated|	onUpdated|
|beforeUnmount|	onBeforeUnmount|
|unmounted|	onUnmounted|
|errorCaptured|	onErrorCaptured|
|renderTracked|	onRenderTracked|
|renderTriggered|	onRenderTriggered|
|activated|	onActivated|
|deactivated|	onDeactivated|

:::
::::