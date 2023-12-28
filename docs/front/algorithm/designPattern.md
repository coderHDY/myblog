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
