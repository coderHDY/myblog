---
title: 起步
data: 2022-01-10
---
## 入门网址
::: tip
* [Vue官网](https://cn.vuejs.org/)
:::
## 基础知识
### 基础指令
:::: tabs
::: tab label=model/on
* v-model：表单输入和应用状态之间的双向绑定
* v-on：绑定事件，简写【@】
---

<video src="./assets/qibudemo.mp4" style="width:400px;" controls />

```html{3-4}
<body>
    <div id="app">
        <input type="text" v-model="message">
        <button @click="getData">按钮</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    message: '消息',
                }
            },
            methods: {
                getData(e) {
                    console.log(this.message);
                }
            }
        })
    </script>
</body>
```
:::
::: tab label=if/show
* v-if：为判断是否渲染
* v-show为判断是否展示，只是修改了css属性，实际上是渲染了这个节点的

<img src="./assets/v-show.png" style="width:400px;">

```html{3,6}
<body>
    <div id="app">
        <div v-if="isLogin">v-if</div>
        <div v-if="!isLogin">v-if</div>
        <hr>
        <div v-show="isLogin">v-show</div>
        <div v-show="!isLogin">v-show</div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    isLogin: false,
                }
            },
        })
    </script>
</body>
```
:::
::: tab label=for
* v-for：列表渲染
* 需要唯一的key值，优化diff算法的。**不要用index值作为key，因为从头添加，index整体都会改变，diff算法就更耗时。**

<video src="./assets/v-for.mp4" style="width:400px;" controls />

```html{4}
<body>
    <div id="app">
        <ol>
            <li v-for="student in students" :key="student.id">{{student.name}}</li>
        </ol>
        <button @click="addMe">加上我</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    students: [
                        {
                            id: 0,
                            name: '小张',
                        },
                        {
                            id: 1,
                            name: '小李',
                        },
                        {
                            id: 2,
                            name: '小黄',
                        },
                        {
                            id: 3,
                            name: '小赵',
                        },
                    ]
                }
            },
            methods: {
                addMe() {
                    this.students.unshift({
                        id: 4,
                        name: 'hdy',
                    });
                }
            }
        })
    </script>
</body>
```
:::
::: tab label=bind
* v-bind：绑定值，简写【:】
* 动态参数：【v-bind:[attr]="XXX"】【v-on:[attr]="XXX"】
<img src="./assets/v-bind.png" style="width:500px;">

```html{3}
<body>
    <div id="app">
        <input type="text" v-bind:placeholder="message" :style="`width:${width};`"/>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    message: 'hello vue!',
                    width: '400px',
                }
            },
        })
    </script>
</body>
```
:::
::: tab label=html
* v-html：解析html语法

<img src="./assets/v-html.png" style="width:100px;">

```html{3,12}
<body>
    <div id="app">
        <div v-html="inner"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    inner: '<ul><li>1</li><li>2</li></ul>'
                }
            },
        })
    </script>
</body>
```
:::
::: tab label=text
* v-text：原样渲染字段，相当于【{{}}】语法
>不解析HTML语法，能够有效避免`xss`攻击

<img src="./assets/v-text.png" style="width:300px;">

```html
<body>
    <div id="app">
        <div v-text="inner"></div>
        <div>{{inner}}</div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    inner: '<ul><li>1</li><li>2</li></ul>'
                }
            },
        })
    </script>
</body>
```
:::
::: tab label=pre
* v-pre：跳过这个元素和它的子元素的编译过程。可以用来**显示原始 Mustache 标签**。跳过大量没有指令的节点会加快编译。

<img src="./assets/v-pre.png" style="width:200px;">

```html{3}
<body>
    <div id="app">
        <div v-pre>{{inner}}</div>
        <div>{{inner}}</div>
        <div v-html="inner"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    inner: '<ul><li>1</li><li>2</li></ul>'
                }
            },
        })
    </script>
</body>
```
:::
::: tab label=slot
* v-slot：使用具名插槽时指定插槽名字，【template标签中使用】
* 或直接在元素上写【slot="name"】

<img src="./assets/v-slot.png" style="width:300px">

```html{4-6,15-17}
<body>
    <div id="app">
        <bar>
            <template v-slot:bottom>3</template>
            <template v-slot:top>1</template>
            <div slot="center">2</div>
        </bar>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        Vue.component('bar', {
            template: `
            <div>
                <div class="box1"><slot name="top"/></div>
                <div class="box2"><slot name="center"/></div>
                <div class="box3"><slot name="bottom"/></div>
            </div>
            `
        })

        const app = new Vue({
            el: '#app',
        })
    </script>
</body>
```
:::
::: tab label=cloak
* 翻译：cloak【斗篷】
* v-cloak：在编译完成前都会有此属性，编译结束后会自动消失，可以结合属性选择器做一些事情。**例如不展示编译前语法**
>问题展示

<video src="./assets/v-cloakduibi.mp4" style="width:300px" controls/>

```html{10-16}
<body>
    <div id="app">
        {{message}}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            computed: {
                message() {
                    const end = Date.now() + 2000;
                    while(Date.now() < end) {}
                    return '编译了两秒钟的消息'
                }
            }
        })
    </script>
</body>
```
>解决

<video src="./assets/v-cloak.mp4" style="width:300px" controls/>

```html{3-5,8}
<body>
    <style>
        [v-cloak] {
            display: none;
        }
    </style>

    <div id="app" v-cloak>
        {{message}}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            computed: {
                message() {
                    const end = Date.now() + 2000;
                    while(Date.now() < end) {}
                    return '编译了两秒钟的消息'
                }
            }
        })
    </script>
</body>
```
:::
::: tab label=once
* v-once：只渲染组件一次，后续会被视为静态内容跳过，不参与数据动态更新
>例：挂载时count是0，monted更新count，组件不重新渲染

<video src="./assets/v-once.mp4" style="width:300px;" controls/>

```html{2,12,15-17}
<body>
    <div id="app" v-once>
        {{count}}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    count: 0
                }
            },
            mounted() {
                this.count++
            }
        })
    </script>
</body>
```
:::
::::

### 组件化
:::: tabs
::: tab label=注册组件

<img src="./assets/zizujian.png" style="width:200px;">

```html{5-9,14-27}
<body>
    <div id="app">
        本组件
        <hr>
        注册组件：
        <list></list>
        <hr>
        复用：
        <list></list>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        Vue.component('list', {
            template: `
            <div id="child">
                <ul>
                    <li v-for="name in students" :key="name">{{name}}</li>
                </ul>
            </div>
            `,
            data() {
                return {
                    students: ['hdy', '小赵', '张三'],
                }
            }
        })

        const app = new Vue({
            el: '#app',
        })
    </script>
</body>
```
:::
::: tab label=组件传参
<img src="./assets/zujianchuancan.png" style="width:200px">

```html{6,9,22-27,34-35}
<body>
    <div id="app">
        本组件
        <hr>
        老师们：
        <list :list="teachers"></list>
        <hr>
        学生们：
        <list :list="students"></list>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        Vue.component('list', {
            template: `
            <div id="child">
                <ul>
                    <li v-for="name in list" :key="name">{{name}}</li>
                </ul>
            </div>
            `,
            props: {
                list: {
                    type: Array,
                    default: []
                }
            }
        })
        
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    students: ['hdy', '小赵', '张三'],
                    teachers: ['黄老师', '张老师', '李老师'],
                }
            }
        })
    </script>
</body>
```
:::
::::
### 生命周期
:::: tabs
::: tab label=概览
<img src="./assets/lifecycle.png" style="width:500px;">

:::
::: tab label=before/created
* beforeCreated还没有创建Vue实例，基本不做事情
* created已经创建了Vue实例，可以拿到实例里面的data，但还没有挂载到DOM上。可以请求数据，因为接收data已经准备好了。

<img src="./assets/created.png" style="width:200px;">

```html{15,18}
<body>
    <div id="app">
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    message: '消息',
                }
            },
            beforeCreate() {
                console.log(this.message);
            },
            created() {
                console.log(this.message);
            }
        })
    </script>
</body>
```
:::
::: tab label=before/mounted
* beforeMount：挂载到DOM树上前
* mounted：已经上树，一般操作DOM的方法可以写这里。需要注意的是图片一类的数据，mounted以后，并没有渲染出高度，只是上了DOM树。请求图片也要时间，所以这里拿的宽高并不准确。

<img src="./assets/mount.png" style="width:200px;">

```html{16,19}
<body>
    <div id="app">
        <div id="content" ref="content"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    message: '消息',
                }
            },
            beforeMount() {
                console.log(this.$refs.content);
            },
            mounted() {
                console.log(this.$refs.content);
            },
        })
    </script>
    <style>
        #content {
            height: 100px;
            width: 100px;
            background-color: red;
        }
    </style>
</body>
```
:::
::: tab label=before/updated
* beforeUpdate：修改数据，即将进行DOM树更新的时候调用
* updated：DOM刷新完毕调用
:::
::: tab label=before/destroyed
* beforeDestory：VUE实例销毁前调用，可以用啦销毁事件监听器、setTimeout/setTimeInterval
* destroyed：Vue实例已销毁，拿不到数据了
:::
::::
### data/computed/watch
:::: tabs
::: tab label=data
* 为什么不直接用对象，而用函数返回对象？
>由于VUE组件是可以复用的，那么多个组件复用的时候，需要肯定不能用相同的数据。就利用function返回新的对象，让相同组件之间都拥有自己的data

<img src="./assets/data.png" style="width:300px">

```html{3-4,13-17}
<body>
    <div id="app" v-once>
        <comp></comp>
        <comp></comp>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        Vue.component('comp', {
            template: `
            <div>{{message}}</div>
            `,
            data() {
                return {
                    message: Math.floor(Math.random() * 100),
                }
            }
        })

        const app = new Vue({
            el: '#app',
        })
    </script>
</body>
```
:::
::: tab label=watch
* watch是一个属性随着另一个属性变化而变化，通常情况下都能被computed替代
* watch一般用于监控路由、input输入框的值特殊处理等等，它比较适合的场景是一个数据影响多个数据
* 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
* 深度监听，可监听一个对象内部的改变。

<video src="./assets/watch.mp4" style="width:400px;" controls />

```html{19-24}
<body>
    <div id="app">
        <input type="text" v-model="me.name">
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    me: {
                        name: 'hdy',
                        age: 18
                    }
                }
            },
            watch: {
                me: {
                    handler(newName, oldName) {
                        console.log('watch');
                    },
                    deep: true
                }
            }

        })
    </script>
</body>
```
:::
::: tab label=computed
* computed：computed内部可以进行复杂的计算，用函数名作为数据的变量名。并且在值没有改变的情况下，不会重复计算。computed有`缓存机制`
* 相比于data：一样的调用方法
* 相比于methods：除非值改变，否则不会重复计算

>都能生效

<video src="./assets/computed1.mp4" style="width:300px;" controls />

```html{3-5,14,18-20,23-25,28}
<body>
    <div id="app">
        <div>{{money + '元'}}</div>
        <div>{{dollor}}</div>
        <div>{{getMoney()}}</div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    money: 10,
                }
            },
            computed: {
                dollor() {
                    return this.money + '美元';
                }
            },
            methods: {
                getMoney() {
                    return this.money + '欧元';
                }
            },
            mounted() {
                setInterval(() => this.money++, 1000);
            }

        })
    </script>
</body>
```
:::
::: tab label=缓存机制
* computed有一个缓存机制，只有当依赖的响应式数据发生变化时才会进行清空缓存重新计算结果，否则就会直接调用缓存。是否变更有一个dirty属性控制，dirty===true，重新计算。

<img src="./assets/computed2.png" style="width:200px;">

```html{3-13}
<body>
    <div id="app">
        <div>{{dollor}}</div>
        <div>{{getMoney()}}</div>

        <div>{{dollor}}</div>
        <div>{{getMoney()}}</div>

        <div>{{dollor}}</div>
        <div>{{getMoney()}}</div>

        <div>{{dollor}}</div>
        <div>{{getMoney()}}</div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data() {
                return {
                    money: 10,
                }
            },
            computed: {
                dollor() {
                    console.log('computed');
                    return this.money + '美元';
                }
            },
            methods: {
                getMoney() {
                    console.log('methods');
                    return this.money + '欧元';
                }
            }

        })
    </script>
</body>
```
:::
:::tab label=原理实现
<img src="./assets/computed3.png" style="width:500px;">

```html{17,23,29,40,62-65}
<body>
    <div id="app">
        <div class='money'></div>
        <div class='dollor'></div>
    </div>

    <script>
        const money = new Proxy(
            {
                val: 0,
                dirty: false,
                useArr: []
            },
            {
                set(target, key, val) {
                    if (key === 'val') {
                        target.dirty = (val !== target[key]);
                        target.val = val;

                        const moneyDOM = document.querySelector('.money');
                        moneyDOM.innerText = val;

                        target.useArr.forEach(item => notify(item));
                    }
                }
            }
        )
        function notify(item) {
            item.refresh();
        }

        const getMoney = new Proxy(
            {
                val: null,
                refresh: function() {
                    if (!money.useArr.includes(this)) {
                        money.useArr.push(this);
                    }

                    if (money.dirty === true || this.val == null) {
                        this.val = this.computed();
                    }
                },
                computed() {
                    console.log('computed');
                    return money.val + '欧元';
                }
            },
            {
                set(target, key, val) {
                    if (key === 'val') {
                        this.val = val;
                        const dollorDOM = document.querySelector('.dollor');
                        dollorDOM.innerText = val;
                        Reflect.set(target, key, val);
                    }
                }
            }
        )
        money.val = 10;
        getMoney.refresh();
        console.log('分割线');

        setTimeout(() => money.val = 10, 1000);
        setTimeout(() => money.val = 20, 3000);
    </script>
</body>
```
:::
::::
### class/style
:::: tabs
::: tab label=class
* 动态绑定方法：
```html
<div v-bind:class="{ active: isActive }"></div>

<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
```
* 可以用计算属性返回对象的形式计算动态class

<img src="./assets/class.png" style="width:400px;">

```html{3,11-16}
<body>
    <div id="app">
        <div :class="box"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            computed: {
                box() {
                    return {
                        peek: true,
                        dark: +new Date().getHours() > 18 || +new Date().getHours() < 5
                    }
                }
            }
        })
    </script>
</body>
```
:::
::::