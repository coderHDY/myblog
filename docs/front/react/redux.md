---
title: redux
date: 2022-02-23
---
## 简单使用
:::: tabs
::: tab label=设计图
* react状态管理工具:react集中式管理状态工具
* 设计思想：
>（1）Web 应用是一个状态机，视图与状态是一一对应的。  
>（2）所有的状态，保存在一个对象里面。

<img src="./assets/redux.png" style="width:600px;">

:::
::: tab label=store
* 创建以及引用`store`
* store常用的方法：
    1. `createStore`: (Reducer) => Store
    2. `getState`: () => State
    3. `dispatch`: (Action) => void
```js
import { createStore } from 'redux';
const store = createStore(reducer);
```
```js
// 使用数据
const state = store.getState();
```
>`dispatch`发射事件，接收一个action对象
```js
store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux' // 荷载参数
});
```
:::
::: tab label=action
* `action`: view通知store发起数据改变
```js
// 目标action格式
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux' // 荷载参数
};
```
* 简化，写一个actionCreater，传入载荷，生成action对象
```js
const ADD_TODO = '添加 TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');
```
:::
::: tab label=reducer
* reducer接收两个参数，当前state和action对象。返回新的state
```js
const reducer = function (state, action) {
  // ...
  return new_state;
};
```
* 可以和数组的reduce进行结合
```js
const actions = [
  { type: 'ADD', payload: 0 },
  { type: 'ADD', payload: 1 },
  { type: 'ADD', payload: 2 }
];

const total = actions.reduce(reducer, 0); // 3
```
* 纯函数
    * 不得改写参数
    * 不能调用系统 I/O 的API
    * 不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果
* **Reducer 函数里面不能改变 State，必须返回一个全新的对象**，请参考下面的写法。
```JS
// State 是一个对象
function reducer(state, action) {
  return Object.assign({}, state, { thingToChange });
  // 或者
  return { ...state, ...newState };
}

// State 是一个数组
function reducer(state, action) {
  return [...state, newItem];
}
```
:::
::: tab label=拆分
* state状态太多，可以进行拆分
```js
const chatReducer = (state = defaultState, action = {}) => {
  return {
    chatLog: chatLog(state.chatLog, action),
    statusMessage: statusMessage(state.statusMessage, action),
    userName: userName(state.userName, action)
  }
};
// 每一个属性，又对应一个更小的 reducer，这样整体的reducer就会更清晰
```
:::
::: tab label=combineReducers
```js
import { combineReducers } from 'redux';

const chatReducer = combineReducers({
  chatLog,
  statusMessage,
  userName
})

export default todoApp;
```
*  State 的属性名必须与子 Reducer 同名。如果不同名，就要采用下面的写法。
```js
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})
```
:::
::: tab label=subscribe
```js
function listerner() {
  let newState = store.getState();
  component.setState(newState);   
}

// 设置监听函数
store.subscribe(listener);
```
* 或者直接在根组件
```js
const render = () => ReactDOM.render( <App />, document.getElementById("root") );
render();

store.subscribe(render);
```
:::
::: tab label=计数器
* store定义
```js
import { createStore } from 'redux';
const ADD_ONE = '+1';
const DEL_ONE = '-1';

const incre = (num = 1) => ({ type: ADD_ONE, num })
const decre = (num = 1) => ({ type: DEL_ONE, num })

function countReducer(state = 0, action) {
    const { type, num } = action;
    switch (type) {
        case ADD_ONE: return state + num ?? 1;
        case DEL_ONE: return state - num ?? 1;
        default: return state
    }
}

const store = createStore(countReducer);

// 导出actionCreator和store
export { incre, decre }
export default store;
```
* 组件使用
```jsx
let Test = () => (
    <>
        <div>{store.getState()}</div>
        <button onClick={() => store.dispatch(decre())}>-1</button>
        <button onClick={() => store.dispatch(incre())}>+1</button>
    </>
)
```
* 监听改变刷新
```js
const render = () => ReactDOM.render(<App />, document.getElementById("root"));
render();

store.subscribe(render);
```
:::
::::
## 异步中间件
:::: tabs
::: tab label=中间件使用
* 普通操作只能同步修改状态，要异步修改，就要用到`异步中间件`：`applyMiddleware`
```js{8}
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'; // 打印日志的插件

const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
```
* createStore方法可以接受整个应用的初始状态作为参数，那样的话，applyMiddleware就是第三个参数了。
```js
const store = createStore(
  reducer,
  initial_state,
  applyMiddleware(logger)
);
```
* 多个中间件【可能有顺序要求】
```js
const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger)
);
```
:::
::: tab label=源码
```js
export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    var store = createStore(reducer, preloadedState, enhancer);
    var dispatch = store.dispatch;
    var chain = [];

    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    };
    chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {...store, dispatch}
  }
}
```
:::
::: tab label=异步操作
* 异步操作要发起三个种action：
    * 操作发起时的 Action
    * 操作成功时的 Action
    * 操作失败时的 Action
```js
// 写法一：名称相同，参数不同
{ type: 'FETCH_POSTS' }
{ type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
{ type: 'FETCH_POSTS', status: 'success', response: { ... } }

// 写法二：名称不同
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }
```
* 思路
    * 操作开始时，送出一个 Action，触发 State 更新为"正在操作"状态，View 重新渲染
    * 操作结束后，再送出一个 Action，触发 State 更新为"操作结束"状态，View 再一次重新渲染    

>产生问题：`store.dispatch`只能接收`action`作为参数，不是函数，所以需要用`redux-thunk`
:::
::: tab label=redux-thunk
* 作用：让store.dispatch可以接收函数作为参数
>store接受到这个参数发现是函数以后会去执行这个函数。
```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
```
* `actionCreator`定义：`actionCreator`返回的是正常的`action对象`或**一个函数**
```js{4-6}
// actionCreator
const incre = (num = 1) => ({ type: ADD_ONE, num })
const decre = (num = 1) => ({ type: DEL_ONE, num })
const increAsync = (num, timer) => (dispatch, getState) =>
    new Promise(resolve => setTimeout(() => resolve(), timer))
        .then(res => dispatch({ type: ADD_ONE, num }))
```
* 组件使用
```jsx{3-6}
<button onClick={() => store.dispatch(decre())}>-1</button>
<button onClick={() => store.dispatch(incre())}>+1</button>
<button onClick={
    () => store.dispatch(increAsync(100, 1000))
        .then(() => console.log(store.getState()))
}>异步+100</button>
```
:::
::: tab label=redux-promise
* 作用：让redux的dispatch接收函数，返回`Promise`对象，可以链式操作异步请求
```js
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(promiseMiddleware)
); 
```
```js
const fetchPosts = 
  (dispatch, postTitle) => new Promise(function (resolve, reject) {
     dispatch(requestPosts(postTitle));
     return fetch(`/some/API/${postTitle}.json`)
       .then(response => {
         type: 'FETCH_POSTS',
         payload: response.json()
       });
});
```
* 使用
```js
store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
);
```
:::
::: tab label=createAction
```js
import { createAction } from 'redux-actions';

class AsyncApp extends Component {
  componentDidMount() {
    const { dispatch, selectedPost } = this.props
    // 发出同步 Action
    dispatch(requestPosts(selectedPost));
    // 发出异步 Action
    dispatch(createAction(
      'FETCH_POSTS', 
      fetch(`/some/API/${postTitle}.json`)
        .then(response => response.json())
    ));
}
```
* 第二个dispatch方法发出的是异步 Action，只有等到操作结束，这个 Action 才会实际发出。注意，createAction的第二个参数必须是一个 Promise 对象。
:::
::::
## react-redux
:::: tabs
::: tab label=介绍
* react-redux是专门为react将redux进行封装。
* UI组件不能有自身状态，容器组件由connect生成
```js{4,14,19,26-27}
import { incre, decre, increAsync } from "../store"; // 引入 actionCreator
import { connect } from 'react-redux';

// UI组件
let TestUI = (props) => (
    <>
        <div>{props.count}</div>
        <button onClick={props.decre}>-1</button>
        <button onClick={props.incre}>+1</button>
        <button onClick={props.increAsync}>异步+100</button>
    </>
)

// store 里面的 state 映射成容器组件的 props
const mapStateToProps = state => ({
    count: state
})

// 将dispatch映射成容器组件的props
const mapDispatchToProps = dispatch => ({
    incre: () => dispatch(incre()),
    decre: () => dispatch(decre()),
    increAsync: () => dispatch(increAsync(100, 1000)),
})

// 用UI组件以及store的规则创建《容器组件》
const Test = connect(mapStateToProps, mapDispatchToProps)(TestUI)

export default Test;
```
:::
::: tab label=简写
* `mapDispatchToProps`可以简写为对象形式，值为actionCreator或函数，调用的返回值会被`dispatch`调用
```js
// 不同的actionCreator
const incre = (num = 1) => ({ type: ADD_ONE, num })
const decre = (num = 1) => ({ type: DEL_ONE, num })
const increAsync = (num = 100, timer = 1000) => (dispatch) =>
    new Promise(resolve => setTimeout(() => resolve(), timer))
        .then(res => dispatch({ type: ADD_ONE, num }))
```
```js{1-6}
// mapDispatchToProps 对象形式简写
const mapDispatchToProps = {
    incre,
    decre,
    increAsync,  // 返回的是函数，但是也会被dispatch调用，内部又因为有 redux-thunk，所以可以被正确解析
}

// 用UI组件以及store的规则创建《容器组件》
const Test = connect(mapStateToProps, mapDispatchToProps)(TestUI)
```
* UI组件调用
```jsx
<>
    <div>{props.count}</div>
    <button onClick={() => props.decre(1)}>-1</button>
    <button onClick={() => props.incre(1)}>+1</button>
    <button onClick={() => props.increAsync(100, 1000)}>异步+100</button>
</>
```
:::
::: tab label=简写整合
```js
import { connect } from 'react-redux'
import { incre, decre, increAsync } from '../store/action-creator'
import React from 'react';

const Computer = (props) => (
    <div>
        <div>{props.count}</div>
        <button onClick={() => props.decre(1)}>-1</button>
        <button onClick={() => props.incre(1)}>+1</button>
        <button onClick={() => props.increAsync(11, 1000)}>异步+11</button>
    </div>
)

export default connect(
    state => ({ count: state }),
    {
        incre,
        decre,
        increAsync
    }
)(Computer)
```
:::
::: tab label=Provider
* 顶层通过`Provider`组件传入store对象
    1. 每个通过connect生成的容器组件的props都会被注入`mapStateToProps`/`mapDispatchToProps`定义的store
    2. store更新，内部直接调用组件render，不用再用`subscribe`监听了
```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from './app';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
```
:::
::: tab label=combineReducers
* 如果有多个reducer，就需要用`combineReducers`进行合并，再进行store创建
```js
const reducers = combineReducers({ count, person });
const store = createStore(reducers, applyMiddleware(thunk));
```
>组件取状态就要对应的取
```js{3}
// 容器组件创建
export default connect(
    state => ({ count: state.count }),
    {
        incre,
        decre,
        increAsync
    }
)(Computer)
```
>注：即使是多个组件，一个`dispatch`还是会触发所有的`reducer`，所以**action的type不能重名**
:::
::::