---
title: 设计模式
date: 2023-12-28
---
## 构造器模式
```js
class People {
  constructor (name, age)  {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`你好，我叫${this.name}`);
  }
}

//
const a = new People("小黄", 18);
const b = new People("小黑", 18);

a.say();
```
* 解决问题
```js
const a = {
  name: "小黄",
  age: 18,
  say() {
    console.log(`你好，我叫${this.name}`);
  },
};
const b = {
  name: "小黑",
  age: 18,
  say() {
    console.log(`你好，我叫${this.name}`);
  },
};

a.say();
```
## 原型模式
* 两个新对象共用同一个`say`方法，都是挂在原型上
```js
class People {
  constructor (name, age)  {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`你好，我叫${this.name}`);
  }
}

//
const a = new People("小黄", 18);
const b = new People("小黑", 18);

a.say();
```
## 工厂模式
* 生成指定对象的函数
* 可以利用模块化让外部无法访问到构造器，只能访问构造器工厂
```js{25}
class User {
  constructor(role, rights) {
    this.role = role;
    this.rights = rights;
  }
}

const userFactory = (role) => {
  switch (role) {
    case "normal": {
      return new User(role, ["get"]);
    }
    case "admin": {
      return new User(role, ["get", "set", "update"]);
    }
    case "root": {
      return new User(role, ["get", "set", "update", "delete"]);
    }
    default: {
      throw new Error("参数错误");
    }
  }
};

export userFactory;
```
* 扩展：方法实现更加解藕，可以有更多个性化方法，同时共通方法也可以放到父类里面
```js
class User {}
class Normal extends User {}
class Admin extends User {}
class Root extends User {}

const userFactory = (role) => {
  switch (role) {
    case "normal": {
      return new Normal(role, ["get"]);
    }
    case "admin": {
      return new Admin(role, ["get", "set", "update"]);
    }
    case "root": {
      return new Root(role, ["get", "set", "update", "delete"]);
    }
    default: {
      throw new Error("参数错误");
    }
  }
};
```
## 建造者模式
* 将同一个模式的建造过程统一化，然后通过函数统一调用
```js
const navbar = {
  init() {},
  getData() {},
  render() {},
}
const content = {
  init() {},
  getData() {},
  render() {},
}

// 建造者
const builder = (component) => {
  component.init();
  component.getData();
  component.render();
}
```
## 单例模式
* 永远只用同一个实例，并且避免被全局重命名覆盖
```js
// es5写法
const objCreator = (() => {
  let instance = null;
  return (name, age) => {
    if (!instance) {
      instance = {
        name,
        age,
      };
    }
    return instance;
  };
})();

console.log(objCreator() === objCreator()); // true
```
* 类单例写法
```js
// es6写法
class SingleUser {
  static INSTANCE = null;
  constructor() {
    if (SingleUser.instance) {
      return SingleUser.instance;
    }
    SingleUser.instance = this;
  }
}

console.log(new SingleUser() === new SingleUser()); // true

```
## 装饰器模式
* 对已有功能做扩展
* 动态注入，降低耦合度
```js
const test = () => console.log("111");

Function.prototype.before = function (beforeFn) {
  return (...rest) => {
    beforeFn(...rest);
    return this(...rest);
  };
};
Function.prototype.after = function (afterFn) {
  return (...rest) => {
    const res = this(...rest);
    afterFn(...rest);
    return res;
  };
};
test.before(() => console.log("000")).after(() => console.log("222"))();

```
## 适配器模式
* 对`已有功能`和`已知的调用方法（环境）`做适配，防止因调用问题修改核心代码
```js{2,7}
class TencentMap {
  display() {
    console.log("展示腾讯地图");
  }
}
class GoogleMap {
  show() {
    console.log("展示谷歌地图");
  }
}

// 适配器，适配 TencentMap
class MapAdapter extends TencentMap {
  show() {
    this.display();
  }
}

// 适配器，适配 GoogleMap
// class MapAdapter extends GoogleMap {}

// 业务核心代码，传入map直接展示
const showMap = map => map.show();

const map = new MapAdapter();
showMap(map);
```
## 策略模式
* 将`核心算法`和`可扩展数据`分割开
```js
// 策略
const formStrategy = {
  name: [
    v => typeof v === "string" || "请输入字符",
    v => v.length > 0 && v.length < 20 || "名字长度不符合规范"
  ],
  age: [
    v => typeof v === "number" || "请输入数字",
    v => v > 0 && v < 120 || "年龄范围不符合规范",
  ],
}

// 算法
const validate = (form) => {
  for (let key in form) {
    for (let validFn of formStrategy[key]) {
      const msg = validFn(form[key]);
      if (msg !== true) {
        return msg
      }
    }
  }
  return true;
}

// 业务
const form = {
  name: "a",
  age: 130,
};
const success = validate(form);

console.log(success); // 年龄范围不符合规范
```
## 代理模式
* 用`其他对象提`供代理控制对象的访问
* 做拦截器
```js
const form = {
  name: "小黄",
  age: 13,
};

const formProxy = new Proxy(form, {
  get(target, key) {
    if (key === "name") {
      return "保密";
    }
    return target[key];
  },
  set(target, key, value) {
    if (key === "name") {
      throw new Error("姓名不可以更改");
    }
    target[key] = value;
  }
})

console.log(formProxy.name); // 保密
console.log(formProxy.age);  // 130

formProxy.name = "哈哈哈"; // Error: 姓名不可以更改
```
* 函数代理拦截
```js
const say = (s) => console.log(s);

const sayProxy = new Proxy(say, {
  apply(target, thisArg, restArg) {
    console.log("log start:", ...restArg);
    target.call(thisArg, ...restArg);
    console.log("log end:", ...restArg);
  }
})

sayProxy(11);
// log start: 11
// 11
// log end: 11

sayProxy("哈哈哈");
// log start: 哈哈哈
// 哈哈哈
// log end: 哈哈哈
```
## 观察者模式
* `观察目标`收集依赖的`观察者`
* 观察目标发生改变，通知观察者
* 主要应用场景：两个目标有业务关联度，但不好直接通信的情况
* 缺点：观察者模式主要对目标的值改变进行观察。如果要对事件进行**细分管控**，应该使用`发布订阅模式`
```js
class Observer {
  constructor (source) {
    source.add(this);
    this.source = source;
  }
  update() {
    console.log("监听到了更改", this.source.value);
  }
}
class Source {
  observers = [];
  _v = "";
  get value() {
    return this._v;
  }
  set value(v) {
    this._v = v;
    this.notify();
  }
  add(observer) {
    this.observers.push(observer);
  }
  notify() {
    this.observers.forEach(o => o.update());
  }
}

const source = new Source();
const observer1 = new Observer(source);
const observer2 = new Observer(source);

source.value = 10;
```
## 发布订阅模式
* A订阅x事件，并说明事件发生时触发函数
* x事件发布，触发A订阅的函数
* 思想：属于将`观察者模式`的触发器分类
```ts
type Callback = (...p: any) => void;
type CallbackList = Callback[];

class EventBus {
  listeners = new Map<string, CallbackList>();
  getCallbacks(event: string) {
    if (this.listeners.has(event) && Array.isArray(this.listeners.get(event))) {
      return this.listeners.get(event) as CallbackList;
    } else {
      const callbacks: CallbackList = [];
      this.listeners.set(event, callbacks);
      return callbacks;
    }
  }
  addEventListener(event: string, callback: Callback) {
    const callbacks = this.getCallbacks(event);
    callbacks.push(callback);
  }
  removeEventListener(event: string, callback?: Callback) {
    if (!callback) {
      this.listeners.delete(event);
      return;
    }

    const callbacks = this.getCallbacks(event);
    let idx = callbacks?.findIndex((cbk) => cbk === callback);
    while (idx > -1) {
      callbacks.splice(idx, 1);
      idx = callbacks.findIndex((cbk) => cbk === callback);
    }
  }
  dispatch(event: string, params?: any) {
    const callbacks = this.getCallbacks(event);
    callbacks.forEach((fn) => fn(params));
  }
}

const eventBus = new EventBus();

export type { Callback, CallbackList };
export default eventBus;
```
## 桥接模式
* 提供固定的调用器，扩展模式实现调用器需要的接口实现桥接
```ts
type Mode = {
  show: () => void;
  hide: () => void;
};

class Model {
  mode: Mode = {
    show: () => {},
    hide: () => {},
  };
  constructor(mode: Mode) {
    this.mode = mode;
  }
  show() {
    this.mode.show();
  }
  hide() {
    this.mode.hide();
  }
}

const modeMap = {
  rotate: {
    show: () => console.log("旋转展示"),
    hide: () => console.log("旋转关闭"),
  },
  opacity: {
    show: () => console.log("淡入展示"),
    hide: () => console.log("淡出关闭"),
  },
};

const model = new Model(modeMap.rotate);
model.show();
model.hide();
```
## 组合模式
* 在对象间形成树形结构
* 组合模式中基本对象和组合对象被一致对待
* 无需关心对象有多少层，只需要在根部进行统一调用
* 例如：vue/react的组件模式，父组件调用自组件方法相同，可以无限嵌套，同时将复杂的页面进行层级分类

## 命令模式
* 每个接收者只负责接受命令，做对应处理
* 发布者只负责发布命令，调用命令对象
* 核心：功能和调用解藕

## 宏命令模式
* 集合处理的命令模式
* 例：canvas动画，宏观调每一帧的渲染指令，渲染指令内调每个动画块的渲染指令
```js
class Snow {
  render() {
    console.log("雪花渲染");
  }
}
class CanvasAnimation {
  snowList = [];
  add() {
    this.snowList.push(new Snow());
  }
  // 宏命令调用子命令集合
  render() {
    this.snowList.forEach(s => s.render());
  }
}
const ca = new CanvasAnimation();

ca.add();
ca.add();
ca.add();

ca.render();
// 雪花渲染
// 雪花渲染
// 雪花渲染
```
## 迭代器模式
* 将对象/数组值遍历传入操作方法
* `Array`/`map`/`set`/`string`/`NodeList`默认具有迭代器接口，其他可以用ES6方法自己实现
```js
const o = {
  name: "黄",
  age: 18,
  *[Symbol.iterator]() {
    for (let key in o) {
      yield this[key];
    }
  },
};

// 迭代器操作
for (let v of o) {
  console.log(v);
}
// 黄
// 18
```
## 职责链模式
* 把各个职责分开，用链条形式调用
```js
const checkLen = (v) => v.length > 6 || "请输入六位以上字符串";
const checkType = (v) => typeof v === "string" || "请输入字符串";
const checkSymbol = (v) => !(/[\+\-\*\/,\.\?]/.test(v)) || "请勿输入特殊符号";

class Checker {
  rules = [];
  addRule(rule) {
    this.rules.push(rule);
  }
  check(v) {
    for (let r of this.rules) {
      let ans = r(v);
      if (ans !== true) {
        return ans;
      }
    }
    return true;
  }
}

const checker = new Checker();
checker.addRule(checkType);
checker.addRule(checkLen);
checker.addRule(checkSymbol);

console.log(checker.check(2));            // 请输入字符串
console.log(checker.check("2"));          // 请输入六位以上字符串
console.log(checker.check("28******"));   // 请勿输入特殊符号
console.log(checker.check("28093joker")); // true
```
