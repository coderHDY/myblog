---
title: react17
date: 2022-02-12
---
## 起步
:::: tabs
::: tab label=cdn引用
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="app"></div>

    <script type="text/babel">
        const VDOM = (<h1>Hello, world!</h1>);
        ReactDOM.render(VDOM,document.getElementById('app'));
    </script>
</body>
</html>
```
:::
::: tab label=createElement
* vue中的`h函数`
```html{15}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="app"></div>

    <script type="text/babel">
        const VDOM = React.createElement('h1', {id: 'haha'}, '你好，react');
        ReactDOM.render(VDOM,document.getElementById('app'));
    </script>
</body>
</html>
```
:::
::: tab label=井字棋案例
```shell
npm create-react-app my-app
```
* 用到知识点：
    * 类组件
    * props传参
    * 组件状态管理
    * 无状态函数式组件
    * 数组状态更改用concat/slice生成新数组再操作，避免使用同一引用的对象/数组
:::
::: tab label=index.js
```js{5-12,15-18,24,48-49,84-87,115-119}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 无状态函数式组件
function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            { props.value }
        </button >
    );
}

class Board extends React.Component {
    // 子组件调用、传参
    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.handleClick(i)}/>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            // 初始化固定长度数组写法
            history: [ Array(9).fill(null) ],
            xIsNext: true,
        }
    }
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        // 成功返回成功的棋子型号，无则返回null
        const successIdx = lines.findIndex(([a, b, c]) => squares[a] &&  squares[a] === squares[b] &&  squares[a] === squares[c]);
        if (successIdx !== -1) {
            return squares[lines[successIdx][0]];
        }
        return null;
    }
    handleClick(i) {
        const history = this.state.history;
        const squares = history[history.length - 1].slice();
        if (squares[i] || this.calculateWinner(squares)) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            xIsNext: !this.state.xIsNext,
            history: history.concat([squares]),
        });
    }
    jump(idx) {
        // 引用类型创造新引用赋值，触发更新
        this.setState({
            history: this.state.history.slice(0, idx + 1)
        });
    }
    render() {
        const history = this.state.history;
        const squares = history[history.length - 1];
        const winner = this.calculateWinner(squares);
        let status = winner ? `winner：${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        return (
            <div className="game">
                <div className="game-board">
                    <Board handleClick={(i) => this.handleClick(i)} squares={squares}/>
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <ol>
                        {history.map((item, idx) => (
                            <li key={idx}>
                                <button onClick={() => this.jump(idx)}>{winner && idx === history.length - 1 ? `winner：${winner}` : `next: ${idx % 2 === 0 ? 'X' : 'O'}`}</button>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

// ========================================
// react组件上树
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

```
:::
::::

## jsx规则
:::: tabs
::: tab label=基本规则
>jsx(javascript XML)
* 换行html片段加括号
* 混入`js表达式`用花括号
    >一个表达式可以产生一个具体的值
* jsx只能有一个根标签
* 标签必须闭合
    ```jsx
    <hr/>
    ```
* 不要自定义标签
* 组件标签首字母大写

:::
::: tab label=样式
* class换`chassName`
* style写**对象形式**，并且**属性名转小驼峰**：
    ```js
    const VDOM = (<h1 style={{backgroundColor: 'red'}}>Hello React!</h1>);
    ```
:::
::: tab label=注释
* 注释写法
    ```jsx
    const VDOM = (
        <h1 style={{backgroundColor: 'red'}}>
            {/* <hr/> */}
            Hello React!
        </h1>
    );
    ```
:::
::::
## 列表
:::: tabs
::: tab label=列表
* 列表用map等将数据转化成jsx模板语法
* 列表需要加一个唯一的key值，帮助diff算法优化速率
```jsx{4}
const arr = ['张莎', '李四', '王五'];
const VDOM = (
    <h1>
        { arr.map(item => <div key={item}>{ item }</div>) }
    </h1>
);
ReactDOM.render(VDOM, document.getElementById('app'));
```
:::
::::
## 类式组件
:::: tabs
::: tab label=使用
* 类组件继承`React.Component`构造react组件，实现`render`方法生成dom节点
```html
<script type="text/babel">
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                title: '你好啊大兄弟!'
            };
        }
        render() {
            return (<h1>{this.state.title}</h1>);
        }
    }
    ReactDOM.render(<MyComponent />, document.getElementById('app'));
</script>
```
:::
::: tab label=state
* 类组件控制state要注意：
    * this的控制：事件触发时this是否正确（用箭头函数或bind解决）
    * 修改状态时用`setState`进行赋值，让dom进行触发响应式
* 事件绑定用驼峰，react重写了
```js{5-9}
class MyComponent extends React.Component {
    state = {
        isHot: false,
    }
    toggleState = () => {
        this.setState({
            isHot: !this.state.isHot,
        })
    }
    render() {
        const { isHot } = this.state;
        return (<h1 onClick={this.toggleState}>今天天气好{isHot ? '炎热' : '凉爽'}啊！</h1>);
    }
}
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```
:::
::: tab label=props
* props使用注意事项：
    * props是只读属性，如果要做操作，先解构出来。
```js{3-4}
class People extends React.Component {
    render() {
        let { age } = this.props;
        age = +age + 1;
        return <h1>年龄：{age}</h1>
    }
}
ReactDOM.render(<People age="22"/>, document.getElementById('root'));
```
* 批量传递，解构语法
```js{19}
class People extends React.Component {
    render() {
        let { name, age, sex } = this.props;
        return (
            <h1>
                <div>姓名：{name}</div>
                <div>年龄：{age}</div>
                <div>性别：{sex}</div>
            </h1>
        )
    }
}
const people = {
    name: 'hdy',
    age: 18,
    sex: '男'
};

ReactDOM.render(<People {...people}/>, document.getElementById('root'));
```
:::
::: tab label=refs
:::
::::