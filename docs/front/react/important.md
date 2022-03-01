---
title: react细节知识
date: 2022-02-28
---
## setState
:::: tabs
::: tab label=机制
* setState(Object | function [, callback])
    * 对象式写法：多次调用只被推入一次数据更新【一轮时间循环内】
    * 函数式写法：多次调用多次数据更新，且能拿到原state、props
    * callback：在render函数执行后统一调用
---
* [官网](https://zh-hans.reactjs.org/docs/faq-state.html#what-does-setstate-do):调用 setState 其实是异步的 —— 不要指望在调用 setState 之后，this.state 会立即映射为新的值。如果你需要基于当前的 state 来计算出新的值，那你应该传递一个函数，而不是一个对象。
>实际上是`由react控制的回调函数及生命周期钩子所调用的setState`，数据更新控制是**异步的**  
>由非react调用的`异步回调`，数据更新控制是**同步的**。
:::
::: tab label=传入对象
* 点击一次
    * add执行三次，所以输出《3个0》
    * 但setState更新状态的内部回调函数只执行了一次，所以页面变为 1
```js{9-10,15,25}
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    add = () => {
        const count = this.state.count + 1;
        this.setState({ count }); // 将更改动作推入微任务队列
        console.log(this.state.count); // 0 0 0
    }
    addThree = () => {
        this.add();
        this.add();
        this.add(); // 终究 setState的内部回调 只会执行一次，因为异步任务队列同一个任务只会被推入一次
    }
    render() {
        const {
            state: { count },
            addThree,
        } = this;
        return (
            <>
                <div>count: {count}</div>
                <button onClick={addThree}>+3</button>
            </>
        )
    }
}
```
:::
::: tab label=传入函数
* 传入函数允许将一个setState更新任务推入队列多次并执行
* `JS执行环境`相关的知识
>机制不变，同一个更新任务只会被推入更新队列一次，  
>**但是三次调用add函数，setState传入的更新状态的函数不是同一个函数，所以会被推入多次**
* 点击1次
    * add执行三次，所以打印《3个0》
    * setState三次的回调不是同一个函数，所以被推入了三个，**所以修改后页面显示 3**
```js{9-13}
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    add = () => {

        // 每次调用，回调函数并不是同一个，被推入了3次
        this.setState((state, props) => {
            const count = state.count + 1;
            return { count }
        });
        console.log(this.state.count); // 0 0 0
    }

    addThree = () => {
        this.add();
        this.add();
        this.add(); // 更新了3次数据
    }
    render() {
        const {
            state: { count },
            addThree,
        } = this;
        return (
            <>
                <div>count: {count}</div>
                <button onClick={addThree}>+3</button>
            </>
        )
    }
}

```
:::
::: tab label=第二个参数
* 第一个参数是对象，传入第二个参数，callback，会在**状态更新后，`render调用后`进行调用**，所以输出《3个1》
```js{10-14}
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    add = () => {
        const count = this.state.count + 1;

        // 更新状态函数依然只会跑一次，所以结果是1，但是回调是在修改后执行的，所以打印了三次 1
        this.setState(
            { count },
            () => console.log(this.state.count) // 1 1 1
        );
    }
    addThree = () => {
        this.add();
        this.add();
        this.add();
    }
    render() {
        const {
            state: { count },
            addThree,
        } = this;
        return (
            <>
                <div>count: {count}</div>
                <button onClick={addThree}>+1</button>
            </>
        )
    }
}
```
:::
::: tab label=传入函数2
* 第一个参数是函数，就都能做出修改，第二个参数在`render调用后`调用，所以输出《3个3》
```js{8-11}
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    add = () => {
        this.setState(
            state => ({ count: state.count + 1 }),
            () => console.log(this.state.count)
        ); // 3 3 3
    }
    addThree = () => {
        this.add();
        this.add();
        this.add();
    }
    render() {
        const {
            state: { count },
            addThree,
        } = this;
        return (
            <>
                <div>count: {count}</div>
                <button onClick={addThree}>+1</button>
            </>
        )
    }
}
```
:::
::: tab label=非react控制异步更新
* **只有在react控制的`回调函数`/`生命周期`才会有数据更新队列同一个回调只推入一次的限制**。在其他自定义的异步回调中就没有这个限制：
    * 其他异步调用，setState执行，同步更新状态
    * 本轮事件循环执行完，render函数推入微任务队列
    * 更新页面展示
>Promise异步
```js{12,18-25}
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    add = () => {
        const count = this.state.count + 1;
        this.setState({ count });
        console.log(this.state.count); // 1 2 3

        // 慢速更新，可以发现，3次数据更新完了页面才刷新，所以《render函数一轮数据更新只被推入一次》
        const end = Date.now() + 1000;
        while (Date.now() < end) { }
    }
    addThree = () => {

        // Promise的《异步回调》，不是react控制的回调，setState后立马可以拿到更新后的数据
        Promise.resolve().then(() => {
            this.add();
        }).then(() => {
            this.add();
        }).then(() => {
            this.add(); // 数据更新了3次 1 2 3
        })
    }
    render() {
        const {
            state: { count },
            addThree,
        } = this;
        return (
            <>
                <div>count: {count}</div>
                <button onClick={addThree}>+1</button>
            </>
        )
    }
}
```
>setTimeout异步
```js
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    add = () => {
        const count = this.state.count + 1;
        this.setState({ count });
        const end = Date.now() + 1000;
        console.log(this.state.count); // 1 2 3
        while (Date.now() < end) { }
    }
    addThree = () => {
        setTimeout(() => {
            this.add();
            this.add();
            this.add();
        })
    }
    render() {
        const {
            state: { count },
            addThree,
        } = this;
        return (
            <>
                <div>count: {count}</div>
                <button onClick={addThree}>+1</button>
            </>
        )
    }
}

```
:::
::::
## Fragment
:::: tabs
::: tab label=使用
* 作用与空标签相同，避免创造无用根标签
>区别：Fragment可以写`key`/`children`值，空标签不能写属性。
```jsx{7-9}
import React, { createRef, Fragment } from 'react'

export default function Test() {
    const p = ['张三', '李四', '王五', 'hdy']
    return (
        p.map(item => (
            <Fragment key={item}>
                <div>{item}</div>
            </Fragment>
        ))
    )
}
```
:::
::::