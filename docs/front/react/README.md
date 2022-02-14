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
```js{5-9,12}
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
```js{3-4,8}
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
::: tab label=props类型限制
* [官网](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper)
* 引入`prop-types`库
* 类`静态属性`设置属性`propTypes`，限制类型
* 类`静态属性`设置属性`defaultProps`，默认参数

```js{1}
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
    render() {}
}

MyComponent.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 任何可被渲染的元素（包括数字、字符串、元素或数组）
  // (或 Fragment) 也包含这些类型。
  optionalNode: PropTypes.node,

  // 一个 React 元素。
  optionalElement: PropTypes.element,

  // 一个 React 元素类型（即，MyComponent）。
  optionalElementType: PropTypes.elementType,

  // 你也可以声明 prop 为类的实例，这里使用
  // JS 的 instanceof 操作符。
  optionalMessage: PropTypes.instanceOf(Message),

  // 你可以让你的 prop 只能是特定的值，指定它为
  // 枚举类型。
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 一个对象可以是几种类型中的任意一个类型
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 可以指定一个数组由某一类型的元素组成
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 可以指定一个对象由某一类型的值组成
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 可以指定一个对象由特定的类型值组成
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // An object with warnings on extra properties
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),

  // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
  // 这个 prop 没有被提供时，会打印警告信息。
  requiredFunc: PropTypes.func.isRequired,

  // 任意类型的必需数据
  requiredAny: PropTypes.any.isRequired,

  // 你可以指定一个自定义验证器。它在验证失败时应返回一个 Error 对象。
  // 请不要使用 `console.warn` 或抛出异常，因为这在 `oneOfType` 中不会起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 你也可以提供一个自定义的 `arrayOf` 或 `objectOf` 验证器。
  // 它应该在验证失败时返回一个 Error 对象。
  // 验证器将验证数组或对象中的每个值。验证器的前两个参数
  // 第一个是数组或对象本身
  // 第二个是他们当前的键。
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};

```
:::
::: tab label=props限制例子
```html{8,17-21,23-25}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./react/packages/react.development.js" crossorigin></script>
    <script src="./react/packages/react-dom.development.js" crossorigin></script>
    <script src="./react/packages/babel.min.js"></script>
    <script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="root"></div>

<script type="text/babel">
    class People extends React.Component {
        static propTypes = {
            name: PropTypes.string.isRequired,
            age: PropTypes.number,
            sex: PropTypes.string,
        }

        static defaultProps = {
            sex: '男'
        }

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
        age: '18',   // 类型错误
        // sex: '男' // 使用默认
    };

    ReactDOM.render(<People {...people}/>, document.getElementById('root'));
</script>
</body>

</html>
```
:::
::: tab label=refs
>官方建议少用ref，能提升效率
* 类式组件三种定义方式
    * 字符串（官方说效率低）
    * 回调形式
    * createRef(官方推荐)
    >createRef是用`.current`获取DOM
```js{2-5,9-11}
class MyInput extends React.Component {
    input3 = React.createRef();
    show1 = () => console.log(this.refs.input1.value);
    show2 = () => console.log(this.input2.value);
    show3 = () => console.log(this.input3.current.value);
    render() {
        return (
            <h1>
                <input ref="input1" onBlur={this.show1} placeholder="失去焦点提示"/>
                <input ref={el => this.input2 = el} onBlur={this.show2} placeholder="失去焦点提示"/>
                <input ref={this.input3} onBlur={this.show3} placeholder="失去焦点提示"/>
            </h1>
        )
    }
}
ReactDOM.render(<MyInput/>, document.getElementById('root'));
```
* 函数式组件：useRef
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
::: tab label=event
* React组件上声明的事件最终绑定到了`document`这个DOM节点上，而不是React组件对应的DOM节点。故只有document这个节点上面才绑定了DOM原生事件，其他节点没有绑定事件。这样简化了DOM原生事件，减少了内存开销
* React以队列的方式，从触发事件的组件向父组件回溯，调用它们在JSX中声明的callback。也就是**React自身实现了一套事件冒泡机制**。我们没办法用event.stopPropagation()来停止事件传播，**应该使用event.preventDefault()**
* React有一套自己的`合成事件SyntheticEvent`，不同类型的事件会构造不同的SyntheticEvent
* React使用对象池来管理合成事件对象的创建和销毁，这样减少了垃圾的生成和新对象内存的分配，大大提高了性能
:::
::::