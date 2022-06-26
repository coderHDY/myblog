---
title: React hooks
date: 2022-02-28
---
## 介绍
:::: tabs
::: tab label=优势
* [官网](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)
* 为了解决根本问题：**函数组件内不能用this**
    * **函数式组件只能使用简单组件（无状态组件）**，只接收props进行展示。
* 16.8开始支持
* 优势
    * 复用性强，class组件逻辑复用性不强
    * 逻辑整合，将相关的逻辑整合到一起，
:::
::: tab label=规则
* 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
* 只能在 React 的函数组件中调用 Hook。
:::
::: tab label=hook原理
>**hook原理**：有另一个函数`renderWithHook`调用使用hook组件，另一个函数调用时通过闭包保存了一个`current`，以链表的形式存储了hook的调用顺序，所以能够在下次组件重新渲染的时候访问到hook内的数据，因此必须保证每次渲染hook函数的调用顺序一致，**避免判断语句调用hook**
* `renderWithHook`
* var `dispatcher` = ReactCurrentDispatcher.current;

:::
::::
## useState
:::: tabs
::: tab label=useState
* 可以用hooks的`useState`解决类式组件的`state`：
* 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState
```js{3,7-8}
import { useState } from "react/cjs/react.development";
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```
:::
::: tab label=对象属性
* 对象属性:需要传入新的对象，因为react比较的方法是`Object.is`
```js
const [count, setCount] = useState({ a: 1, b: 2 });

const addOne = () => setCount(pre => ({ a: pre.a + 1, b: pre.b + 1 }));
const reset = () => setCount({ a: 1, b: 2 });
```
* 只更改对象的某些值，其他不变：用对象解构，生出一个新对象，给新值
```js{3}
const [info, setInfo] = useState({ name: 'hdy', age: 18 });
const { name, age } = info;
const addAge = () => setInfo({ ...info, age: age + 1 })
```
:::
::: tab label=更改函数
* 复杂初始值：传入函数，只在初始化的时候被调用，可以拿到原状态值
```js
const [count, setCount] = useState((c) => 1 + 1);
```
:::
::: tab label=赋值坑
>每次更新都会返回新的值。如果依赖前状态，`对象写法`的定时器赋值拿的就一直是初始值
* 定时器：
```jsx{7-9,11-13}
import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function Test() {
    const [num, setNum] = useState(0);
    const addNum = () => {
        // setInterval(() => {
        //     setNum(num + 1); // 使用对象，拿的 num 一直是 0，并没有发生改变，是引用方面的问题
        // }, 100);

        setInterval(() => {
            setNum(n => n + 1); // 必须要用函数，才能拿到正确的值
        }, 100);
    }
    return (
        <>
            <div>计数：{num}</div>
            <button onClick={addNum}>开启定时器</button>
        </>
    )
}
```
:::
::::
## useEffect
:::: tabs
::: tab label=使用
* 赋值给 useEffect 的函数会在组件渲染到屏幕之后执行。
    * 参数1：() => stopEffectFn
    * 参数2：控制参数1执行时机，不传则每次都执行，传空数组则只执行一次，传有变量的数组则会在变量更新时执行。
>参数1返回`清除函数`，会在组件卸载前执行，重复渲染更新时，回调也会执行
```js
useEffect(() => {
    const timer = setInterval(() => addOne(), 1000);
    return () => {
        console.log('清除函数执行'); // 一秒执行一次，因为重复渲染。组件卸载前也会执行
        clearInterval(timer)
    };
});
```
>参数2控制执行时机，同时也能够演变组件的生命周期
```js
useEffect(() => {
    console.log('count发生变化啦！');
}, [count]);
```
:::
::: tab label=替代生命周期
* 替代`componentDidMount`空依赖只在挂载的时候执行一次
```js
useEffect(() => console.log('---'), []);
```
* 替代`componentWillUnmount`，参数一的返回值会在组件卸载的时候触发，同时参数二传空依赖，平时也不会执行
```js
useEffect(() => () => {console.log('unMount')}, []);
```
* 结合使用
```js
useEffect(() => {
    const timer = setInterval(() => addNum(), 100); // 空依赖，componentDidMount
    return clearInterval(timer); // 空依赖的返回值，componentWillUnmount
}, []);
```
>不传：监听所有变化，相当于`componentDidMount`和`componentDidUpdate`
:::
::::
## useRef
:::: tabs
::: tab label=useRef
* 函数式组件使用ref：useRef
```js{2,3,6}
function MyInput() {
    const input1 = React.useRef(null);
    const show = () => console.log(input1.current.value);
    return (
        <div>
            <input type="text" ref={input1} onBlur={show}/>
        </div>
    )
}
ReactDOM.render(<MyInput/>, document.getElementById('root'));
```
:::
::: tab label=回调形式
* 类式组件的回调形式ref也能用
```jsx{4-5,8}
import React from 'react'

export default function Test() {
    let inputBox;
    const show = () => console.log(inputBox.value);
    return (
        <>
            <div><input type="text" ref={c => inputBox = c} /></div>
            <button onClick={show}>开启定时器</button>
        </>
    )
}
```
:::
::: tab label=createRef
* 与类式组件效果相同
>useRef和createRef底层实现一模一样
```jsx{4-5,8}
import React, { createRef } from 'react'

export default function Test() {
    let inputBox = createRef(null);
    const show = () => console.log(inputBox.current.value);
    return (
        <>
            <div><input type="text" ref={inputBox} /></div>
            <button onClick={show}>开启定时器</button>
        </>
    )
}
```
:::
::::
## useReducer
:::: tabs
::: tab label=介绍
* 类似于`redux`的管理方法
    1. 定义状态的`reducer`函数，内置对各种`action`的处理，返回新的`state`: (state, payload) => newState
    2. 使用useReducer，传入`reducer，初始化状态，初始化函数?`: (reducer, init, initFn?) => [state, dispatch]
    3. `dispatch`发射`type`及`payload`参数：`dispatch({ type: XX, payload: XXX })`
:::
::: tab label=使用
```jsx{8,16-23,25-26,30,36,49,51,65}
import { useState, useReducer } from 'react';

const ADD = 'add';
const DEL = 'del';
const CLEAR = 'clear';
const TOGGLE_DONE = 'toggleDone';

// 设计模式：策略模式。扩展性强的项目取出，作为策略设计解构
const reducerMap = new Map([
    [CLEAR, () => []],
    [ADD, (list, payload) => [payload, ...list]],
    [DEL, (list, payload) => list.filter(item => item.name !== payload.name)],
    [TOGGLE_DONE, (list, payload) => list.map(item => item.name === payload.name ? { ...item, done: !item.done } : item)],
])

const listReducer = (list, action) => {
    const { type, payload } = action;
    const newList = reducerMap.get(type)(list, payload);

    // 持久化存储
    localStorage.setItem('todo-list', JSON.stringify(newList));
    return newList;
}

// 持久化存储
const initState = JSON.parse(localStorage.getItem('todo-list')) || [];

export default function TodoList() {
    const [inputVal, changeInput] = useState('');
    const [list, dispatch] = useReducer(listReducer, initState);

    const recordList = () => {
        const val = inputVal.trim();
        const idx = list.findIndex(item => item.name === val);
        if (idx !== -1 || val === '') return;
        dispatch({ type: ADD, payload: { name: inputVal, done: false } });
        changeInput('');
    }
    return (
        <div>
            <div>
                <input type="text" value={inputVal} onChange={e => changeInput(e.target.value)} onKeyUp={e => e.code === 'Enter' ? recordList() : ''} />
                <button onClick={recordList}>添加</button>
            </div>
            <dl>
                {
                    list.map((item, i) => (
                        <li key={item.name}>
                            <input type="checkbox" value={!item.done} onChange={() => dispatch({ type: TOGGLE_DONE, payload: item })} />
                            <span>{item.name}</span>
                            <button onClick={() => dispatch({ type: DEL, payload: item })}>删除</button>
                        </li>
                    ))
                }
            </dl>
            <div>
                <span>总计：</span>
                <span>
                    {
                        list.filter(item => item.done === true).length
                    }/{
                        list.length
                    }
                </span>
                <button onClick={() => dispatch({ type: CLEAR })}>清空</button>
            </div>
        </div>
    )
}
```
:::
::::