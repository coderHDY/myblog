---
title: Proxy
date: 2021-12-11
---
::: tip Proxy
* Proxy：用于创建一个对象的代理，从而实现对目标对象操作的拦截。
* target：被代理的对象，一般理解为存储后端。
* handler：处理器对象。
* traps：handler提供的拦截原生操作方法。
:::
## 声明
### 构造函数
::: tip 构造函数
* 调用：new Proxy(target, handler)
* 入参：Object, Object
:::
::: warning
* get入参的属性名默认时String类型：get(target: object, name: string) {}
* 数组要将String转化为Number才能计算下标
:::
:::: tabs
::: tab label=基础使用
* 创造一个有默认属性值的对象
```js{5-9}
const obj = {
    name: 'hdy',
    age: 18
}
const proxy = new Proxy(obj, {
    get (target, name) {
        return target[name] ? target[name] : `还未定义${name}属性`;
    }
})
console.log(proxy.name); // hdy
console.log(proxy.age); // 18
console.log(proxy.height); // 还未定义height属性
```
:::
::: tab label=负索引数组
* 代理一个可以用负值索引的数组
> 计算索引需要先将字符串转换成数字
```js{4}
const arr = [1, 2, 3];
const proxy = new Proxy(arr, {
    get (target, index) {
        return index >= 0 ? target[index] : target[+index + target.length];
    }
})
console.log(proxy[1]);  // 2
console.log(proxy[-1]); // 3
```
:::
::: tab label=拦截验证
* 设置邮箱时先验证格式的正确性
```js{8-13}
const obj = {
    name: 'hdy',
    email: ''
}
const proxy = new Proxy(obj, {
    set(target, name, value) {
        if (name === 'email') {
            const reg = /(?<=^\b|\s+)\w+@[\w\.]+\b/gi;
            if (reg.test(value.trim())) {
                target.email = value.match(reg)[0];
            } else {
                throw Error('好好检查一下邮箱格式！')
            }
        }
    }
})

// proxy.email = '986.005715@qq.com'; // error
proxy.email = '986005715@qq.com';
console.log(proxy.email); // 986005715@qq.com
console.log(obj.email);   // 986005715@qq.com
```
:::
::: tab label=无操作转发
* 不设置任何handler处理函数，那么proxy接受到的操作就会原样传递给target
```js
const obj = {};
const proxy = new Proxy(obj, {});
proxy.name = 'hdy';
console.log(obj.name); // hdy
```
:::
::::
### revocable
::: tip revocable
* 作用：创建一个可撤销的代理对象
* 调用：Proxy.revocable(target, handler)
* 入参：Object, Object
* 返回：{ proxy: proxy, revoke: revokeFn }
* tip：和new Proxy()创建的一样，只是这个可以被删除
:::
```js{7,9,17-18}
const ans = Proxy.revocable({}, {
    get (target, name) {
        return `${name}: hdy`;
    }
})

console.log(ans); // { proxy: {}, revoke: [Function (anonymous)] }

const proxy = ans.proxy;
console.log(proxy.ownner); // ownner: hdy
console.log(proxy.name); // name: hdy

/**
 *  撤销以后再用就报错：
 *  Cannot perform 'get' on a proxy that has been revoked
 */
ans.revoke();
// console.log(proxy.name); // error
```
### Reflect
::: tip Reflect
* Reflect提供JS原生操作，并且只有静态方法
* Reflect拥有的静态方法都和handler提供的方法一一对应，可以用来proxy劫持操作后再执行target原生JS操作
:::
### this
::: warning
* handler里面的traps函数里的**this已经被绑定到handler上了**。不是proxy也不是target也不是receiver
```js{3}
const handler = {
    set(target, key, value, receiver) {
        console.log(this === handler); // true
        Reflect.set(target, key, value, receiver);
    }
}
const proxy = new Proxy({}, handler);
proxy.name = 'hdy';
```
:::
## handler方法
### get
::: tip get
* 作用：拦截读取属性
* 定义：get(target, prop, receiver)
* 入参：Object, String, Object
* 返回：any
* 调用：proxy.XX | proxy[XX]
* **receiver：如果target里面有getter，那么getter里面的this就是receiver**
:::

::: warning 约束
1. 如果target属性的writable是false，则proxy不可改动返回值
2. 如果target属性的get是undefined，那么proxy也要返回undefined
:::
:::: tabs
::: tab label=使用
* 获取属性加上标识
```js{3}
const proxy = new Proxy({ age: 19 }, {
    get(target, prop, proxy) {
        return `读取到${prop}的属性值是${target[prop]}`;
    }
})

console.log(proxy.age); // 读取到age的属性值是19
```
:::
::: tab label=writable
* 如果target属性的writable是false，则proxy不可改动返回值
```js{8}
const obj = Object.defineProperty({}, 'age', {
    value: 18,
    writable: false
})

const proxy = new Proxy(obj, {
    get(target, name, proxy) {
        return target[name] + 1; // error
    }
})

console.log(proxy.age);
/**
 * TypeError: 'get' on proxy: property 'age' is a read-only and
 * non-configurable data property on the proxy target but the proxy
 * did not return its actual value (expected '18' but got '19')
 */
```
:::
::: tab label=get
* 如果target属性的get是undefined，那么proxy也要返回undefined
```js
const obj = Object.defineProperty({}, 'age', {
    set(){}
})

const proxy = new Proxy(obj, {
    get(target, name, proxy) {
        return 111; // error
    }
})

console.log(proxy.age);
/**
 * TypeError: 'get' on proxy: property 'age' is a non-configurable
 * accessor property on the proxy target and does not have a getter
 * function, but the trap did not return 'undefined' (got '111')
 */
```
:::
::: tab label=Reflect.get
* 读取对象属性
* receiver：如果target里面有getter，那么getter里面的this就是receiver
```js
const obj = {
    name: 'hdy'
}
console.log(obj.name); // hdy
console.log(Reflect.get(obj, 'name')); // hdy
```
:::
::::
### set
::: tip set
* 作用：劫持赋值操作
* 定义：set(target, key, value, receiver)
* 入参：Object, String, any, Object
* 返回：Boolean
* 调用：proxy.key = value
:::
::: warning receiver
* 直接调用proxy是proxy本身
* proxy作为原型链，后代对象set属性也会调用此劫持，但receiver是后代对象
:::
:::: tabs
::: tab label=使用
```js
const proxy = new Proxy({}, {
    set(target, key, value, receiver) {
        console.log('劫持操作');
        Reflect.set(target, key, value, receiver);
    }
})

console.log(proxy.name = 'hdy');
/**
 *   劫持操作
 *   hdy
 */
```
:::
::: tab label=原型链调用
```js{3,7,10-11}
const proxy = new Proxy({ name: 'hdy' }, {
    set(target, key, value, receiver) {
        console.log(receiver === proxy);
        return Reflect.set(target, key, value, receiver);
    }
});
const child = Object.create(proxy);


proxy.name = '张三'; // true
child.name = '李四'; // false
child.age = 18; // false

console.log(Object.keys(child)); // [ 'age' ]
```
:::
::: tab label=this
* proxy里面函数的this都被绑定为handler
```js{3}
const handler = {
    set(target, key, value, receiver) {
        console.log(this === handler); // true
        Reflect.set(target, key, value, receiver);
    }
}
const proxy = new Proxy({}, handler);
proxy.name = 'hdy';
```
:::
::: tab label=Reflect.set
* 如果遇到 setter，receiver则为setter调用时的this值。
```js
const obj = {};
Reflect.set(obj, 'age', 18);
console.log(obj); // { age: 18 }
```
:::
::::
### has
::: tip has
* 作用：针对【in】方法的劫持
* 定义：has(target, key)
* 入参：Object, String
* 返回：Boolean
* 调用：key in target
:::
:::: tabs
::: tab label=使用
```js{17-19}
const obj = Object.defineProperties(
    {
        ['_name']: 'hdy'
    },
    {
        name: {
            get() {
                return this['_name'];
            },
            set(value) {
                this['_name'] = value;
            }
        }
    }
)
const proxy = new Proxy(obj, {
    has(target, key) {
        return key[0] !== '_';
    }
})

console.log('_name' in obj);   // true
console.log('_name' in proxy); // false

console.log(proxy.name); // hdy
proxy.name = '张三';
console.log(proxy.name); // 张三
```
:::
::: tab label=Reflect.has
* 与in操作符相同
```js
const obj = { name: 'hdy' };
console.log(Reflect.has(obj, 'name')); // true
console.log('name' in obj); // true
```
:::
::::
### apply
::: tip apply
* 作用：劫持函数调用操作
* 定义：apply(target, thisArg, arguments)
* 入参：Object, Object, Array
* 返回：any
* 调用：proxy() | proxy.apply() | proxy.call()
* tip：被代理的一定要是函数，否则自身都没有apply方法
:::
:::: tabs
::: tab label=使用
* 将所有入参加上代理【(proxy)】标识
```js
function say(word, word2) {
    console.log(`I said ${word} and ${word2}!`);
}
const proxy = new Proxy(say, {
    apply(target, thisArg, args) {
        args = args.map(item => `(proxy)${item}`);
        return target.call(thisArg, ...args);
    }
})

proxy('hdy', 'cool'); // I said (proxy)hdy and (proxy)cool!
```
:::
::: tab label=thisArg
```js
// 原对象
function finished(work) {
    console.log(`${this.name} finished ${work}`);
}

// 代理
const proxy = new Proxy(finished, {
    apply(target, thisArg, args) {
        return target.call(thisArg, args);
    }
})

// 代理执行的 this 是全局，name 为 undefined
proxy('homework'); // undefined finished homework

const obj = {
    name: '张三',
    finished: proxy
};

// this环境变成 obj，name为张三
obj.finished('coding'); // 张三 finished coding
```
:::
::: tab label=call/apply
* 除了new调用的是construct代理，其他函数调用方式都是触发apply代理
```js
// 原对象
function finished(work) {
    console.log(`${this.name} finished ${work}`);
}

// 代理
const proxy = new Proxy(finished, {
    apply(target, thisArg, args) {
        return target.call(thisArg, args);
    }
})

const obj = {
    name: '张三',
};

proxy.call(obj, '洗衣服');    // 张三 finished 洗衣服
proxy.apply(obj, ['洗衣服']); // 张三 finished 洗衣服
```
:::
::: tab label=Reflect.apply
* 作用：类似原生的Function.prototype.apply()
* 调用：Reflect.apply(target, thisArg, args)
* 入参：Object, Object, Array
* 返回：any
```js{6}
const obj = { name: 'hdy' };
function sayValue(key) {
    console.log(this[key]);
}

Reflect.apply(sayValue, obj, ['name']); // hdy
```
:::
::::
### ownKeys
::: tip ownKeys
* 作用：劫持获取对象keys值操作
* 定义：ownKeys(target)
* 入参：Object
* 返回：Iterator
* 调用：
    1. Reflect.ownKeys(proxy)
    2. Object.keys(proxy)
    3. Object.getOwnPropertyNames(proxy)
    4. Object.getOwnPropertySymbols(proxy)
:::
::: warning
* 必须返回一个`可枚举对象`
:::
:::: tabs
::: tab label=使用
```js{7-9}
const obj = {
    name: 'hdy',
    age: 18,
    ['_height']: 180
}
const proxy = new Proxy(obj, {
    ownKeys(target) {
        return Reflect.ownKeys(target).filter(item => !item.startsWith('_'));
    }
})
console.log(Object.keys(proxy)); // [ 'name', 'age' ]
```
:::
::: tab label=Reflect.ownKeys
* 相当于Object.getOwnPropertyNames()
```js{7-9}
const obj = Object.defineProperties({ name: 'hdy' }, {
    age: {
        value: 18
    }
})

console.log(Reflect.ownKeys(obj)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(obj)); // [ 'name', 'age' ]
console.log(Object.keys(obj)); // [ 'name' ]
```
:::
::::
### construct
::: tip construct
* 作用：劫持原生的constructor函数
* 定义：construct(target, arguments, newTarget)
* 入参：Object, Array, Object(本Proxy对象)
* 返回：Object
* 调用：new proxy(args);
* tip：target必须有constructor(是函数\类)
:::
:::: tabs
::: tab label=使用
* 劫持new操作符，做更多的事
```js
class People {
    constructor() {
        this.head = 1;
    }
}
const proxy = new Proxy(People, {
    construct(target, args, newTarget) {
        const obj = new target(...args);
        obj.hand = 2;
        obj.foot = 2;
        return obj;
    }
})

const a = new proxy();
console.log(a); // People { head: 1, hand: 2, foot: 2 }
```
:::
::: tab label=拦截验证
* 创造时做拦截验证
```js{9-11,26,27}
class User {
    constructor(account, password, email) {
        this.account = account;
        this.password = password;
        this.email = email;
    }
}

// 不做拦截
const u1 = new User('123', '456我是哈哈', '999');
console.log(u1); // User { account: '123', password: '456我是哈哈', email: '999' }

// 做拦截
const UserProxy = new Proxy(User, {
    construct(target, args) {
        const nameReg = /\w{8,16}/g;
        const pwdReg = /[\w,\.\/\?\>\<\!@#\$%\^\&\*\(\)]{8,}/g;
        const emailReg = /\w+@[\w\.]+\b/g;
        if (!(nameReg.test(args[0]) && pwdReg.test(args[1]) && emailReg.test(args[2]))) {
            throw Error('格式不正确!')
        }
        return new target(...args);
    }
})

// Error: 格式不正确!
// const u2 = new UserProxy('123', '456我是哈哈', '999'); 
```
:::
::: tab label=Reflect.constrcut
* 作用：相当于new target()
* 调用：Reflect.construct(target, args, newTarget)
* 入参：Function, Array, Function(新对象原型的constructor属性，默认是参数1)
* 返回：Object | null
```js{1,13,15-16}
// 用 People 的构造函数构造对象，但原型链设置成 Animal
class Animal {}
Animal.prototype.protoIs = 'Animal的原型';

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
People.prototype.protoIs = 'People的原型';

const p1 = Reflect.construct(People, ['hdy', 18], Animal);

console.log(p1); // Animal { name: 'hdy', age: 18 }
console.log(p1.protoIs); // Animal的原型

console.log(p1 instanceof Animal); // true
console.log(p1 instanceof People); // false
```
:::
::::
### getPropertypeOf
::: tip getPropertypeOf
* 作用：劫持访问原型链对象操作
* 定义：getPropertypeOf(target)
* 入参：Object
* 返回：Object | null
* 调用：
    1. Object.getPropertyOf(proxy)
    2. Reflect.getPrototypeOf(proxy)
    3. instanceof
    4. proxy._ _ _proto_ _ _
    5. obj.isPrototypeOf(proxy)
:::
::: warning 限制
* 必须返回Object或null
* target不可扩展的情况下禁止撒谎
:::
:::: tabs
::: tab label=使用
* 撒谎
```js{6,10-11}
const father = { name: 'hdy' };
const child = Object.create(father);

const proxy = new Proxy(child, {
    getPrototypeOf(target) {
        return { value: '就不告诉你我爹是谁' };
    }
})

console.log(Object.getPrototypeOf(proxy)); // { value: '就不告诉你我爹是谁' }
console.log(Object.getPrototypeOf(child)); // { name: 'hdy' }
```
:::
::: tab label=禁止撒谎
* 禁止：target不可扩展的情况下不返回target本身的原型
```js{3,7}
const father = { name: 'hdy' };
const child = Object.create(father);
Object.preventExtensions(child);

const proxy = new Proxy(child, {
    getPrototypeOf(target) {
        return { value: '就不告诉你我爹是谁' };
    }
})

console.log(Object.getPrototypeOf(proxy));
/**
 * TypeError: 'getPrototypeOf' on proxy: proxy
 * target is non-extensible but the trap did not return its actual prototype
 */
```
:::
::: tab label=多种触发方式
* tip：只有instanceof较特殊
> a instanceof b // a._ _ _proto_ _ _ 往上能不能找到 b.prototype  
> b.isPrototypeOf(a) // a._ _ _proto_ _ _ 往上能不能找到 b 本身
```js{1-2,8,12-16}
class lying {}
lying.prototype = { value: '我是假原型' };
const father = { name: 'hdy' };
const child = Object.create(father);

const proxy = new Proxy(child, {
    getPrototypeOf(target) {
        return lying.prototype;
    }
})

console.log(Object.getPrototypeOf(proxy) === lying.prototype);  // true
console.log(Reflect.getPrototypeOf(proxy) === lying.prototype); // true
console.log(proxy.__proto__ === lying.prototype);               // true
console.log(proxy instanceof lying);                            // true
console.log(lying.prototype.isPrototypeOf(proxy));              // true
```
:::
::: tab label=Reflect.getPropertypeOf
* 同Object.getPropertypeOf
```js
const arr = [1, 2, 3];
console.log(Reflect.getPrototypeOf(arr) === Object.getPrototypeOf(arr)); // true
```
:::
::::
### setPrototypeOf
::: tip setPrototypeOf
* 作用：拦截Object.setProtypeOf()
* 定义：setPrototypeOf(target, prototype)
* 入参：Object, Object | null
* 返回：Boolean
* 调用：Object.setPrototypeOf(proxy, proto)
:::
:::: tabs
::: tab label=使用
```js
const father = { name: 'hdy' };
const child = { age: 18 };
const proxy = new Proxy(child, {
    setPrototypeOf(target, proto) {
        console.log('设置原型劫持操作');
        return Reflect.setPrototypeOf(target, proto);
    }
})
Object.setPrototypeOf(proxy, father); // 设置原型劫持操作

console.log(father.isPrototypeOf(proxy)); // true
console.log(father.isPrototypeOf(child)); // true
```
:::
::: tab label=Reflect.setPrototypeOf
* 同Object.setPrototypeOf
```js
const father = {};
const child = {};
console.log(Reflect.setPrototypeOf(child, father)); // true
console.log(father.isPrototypeOf(child)); // true
```
:::
::::
### defineProperty
::: tip defineProperty
* 作用：拦截原生的defineProperty方法
* 定义：defineProperty(target, property, descriptor)
* 入参：Object, String, Object
* 返回：Boolean (属性操作是否成功)
* 调用：Object.defineProperty(proxy, name, descriptor)
:::
:::: tabs
::: tab label=使用
```js{5,6,19-21}
const proxy = new Proxy({}, {
    defineProperty(target, prop, descriptor) {

        // 每次设置做提醒
        console.log(`${target}设置了${prop}`);
        return Reflect.defineProperty(target, prop, descriptor);
    }
})

Object.defineProperty(proxy, 'age', {
    get() {
        return this._age ? this._age + '岁' : '0岁';
    },
    set(value) {
        this._age = value;
    }
}); // [object Object]设置了age

console.log(proxy.age); // 0岁
proxy.age = 100; // [object Object]设置了_age
console.log(proxy.age); // 100岁
```
:::
::: tab label=Reflect.defineProperty
* 和Object.defineProperty唯一不同的是返回值是Boolean（Object.defineProperty返回Object）
```js
const obj = {};
const ans = Reflect.defineProperty(obj, 'name', { value: 'hdy' });
console.log(ans); // true
console.log(obj.name); // hdy
```
:::
::::
### deleteProperty
::: tip deleteProperty
* 作用：劫持delete操作
* 定义：deleteProperty(target, name)
* 入参：Object, String
* 返回：Boolean (是否删除成功)
* 调用：delete proxy.prop
:::
:::: tabs
::: tab label=使用
* 劫持了但是没有调用原生，所以删除无效
```js{2-4}
const proxy = new Proxy({ name: 'hdy' }, {
    deleteProperty(target, name) {
        console.log(`不能删除${name}属性！`);
    }
});
console.log(proxy.name); // hdy
console.log(delete proxy.name); // 不能删除name属性！ false
console.log(proxy.name); // hdy
```
* 劫持调用原生
```js{3}
const proxy = new Proxy({ name: 'hdy' }, {
    deleteProperty(target, name) {
        const res = Reflect.deleteProperty(target, name);
        console.log(res ? `删除了${name}属性！` : `不能删除${name}属性！`);
        return res;
    }
});

console.log(proxy.name); // hdy
console.log(delete proxy.name); // 删除了name属性！ true
console.log(proxy.name); // undefined
```
:::
::: tab label=属性不存在
* 属性不存在，Reflect.deleteProperty()依然返回true
* 只有被**冻结或被限制删除**的属性才会返回false
```js
const obj = {};
console.log(delete obj.name); // true

Object.defineProperty(obj, 'age', {

    // 默认configurable是false
    value: 18
});

console.log(Reflect.deleteProperty(obj, 'age')); // false
```
:::
::: tab label=Reflect.deleteProperty
* 同delete关键字作用
>如果target不是Object会报错
```js
const obj = {
    name: 'hdy',
    age: 18
}

// 删除不存在属性返回true
console.log(Reflect.deleteProperty(obj, 'height')); // true

// 删除成功返回true
console.log(Reflect.deleteProperty(obj, 'name')); // true
console.log(obj.name); // undefined

// 冻结，删除失败返回false
Object.freeze(obj);
console.log(Reflect.deleteProperty(obj, 'age')); // false
console.log(obj.age); // 18
```
:::
::::
### getOwnPropertyDescriptor
::: tip getOwnPropertyDescriptor
* 作用：拦截Object.getOwnPropertyDescriptor(target, name)
* 定义：getOwnPropertyDescriptor(target, name)
* 入参：Object, String
* 返回：Object | undefined
* 调用：Object.getOwnPropertyDescriptor(proxy, name)
:::
::: warning 限制：configurable相关不能撒谎
1. 必须返回Object或undefined
2. 不可配置属性不可以返回可配置
3. 属性存在且target不可扩展，不可返回不存在
4. 属性不存在的属性且target不可扩展，不可返回存在
5. 可配置或不存在的属性，不可以返回不可配置
:::
:::: tabs
::: tab label=使用
* 给所有属性加一个【proxy】标识
```js{3-6}
const proxy = new Proxy({ name: 'hdy' }, {
    getOwnPropertyDescriptor(target, name) {
        const descriptor = Object.getOwnPropertyDescriptor(target, name);
        descriptor.value = `proxy:${descriptor.value}`;
        descriptor.writable = false;
        return descriptor;
    }
})

console.log(Object.getOwnPropertyDescriptor(proxy, 'name'));
/**
{
  value: 'proxy:hdy',
  writable: false,
  enumerable: true,
  configurable: true
}
 */
```
:::
::: tab label=configurable撒谎
```js{4,13}
const proxy = new Proxy({ name: 'hdy' }, {
    getOwnPropertyDescriptor(target, name) {
        const descriptor = Object.getOwnPropertyDescriptor(target, name);
        descriptor.configurable = false;
        return descriptor;
    }
})

console.log(Object.getOwnPropertyDescriptor(proxy, 'name'));
/**
 * TypeError: 'getOwnPropertyDescriptor' on proxy: trap reported
 * non-configurability for property 'name' 
 * which is either non-existent or configurable in the proxy target
*/
```
:::
::: tab label=Reflect.getOwnPropertyDescriptor
* 与Object.getOwnPropertyDescriptor的不同：
> 第一个参数如果不是对象，Reflect.getOwnPropertyDescriptor会报错  
> 第一个参数如果不是对象，Object.getOwnPropertyDescriptor会转化为对象处理
```js
const obj = { name: 'hdy' };

console.log(Reflect.getOwnPropertyDescriptor(obj, 'name')); 
// { value: 'hdy', writable: true, enumerable: true, configurable: true }
```
:::
::::
### isExtensible
::: tip isExtensible
* 作用：劫持Object.isExtensible(target)
* 定义：isExtensible(target)
* 入参：Object
* 返回：Boolean
* 调用：Object.isExtensible(target)
:::
::: warning
* 只能做操作，不能修改值
:::
:::: tabs
::: tab label=使用
```js
const proxy = new Proxy({}, {
    isExtensible(target) {
        console.log('自定义操作！');
        return Reflect.isExtensible(target);
    }
})
console.log(Object.isExtensible(proxy)); // 自定义操作！ true
```
:::
::: tab label=不能撒谎
```js
const proxy = new Proxy({}, {
    isExtensible(target) {
        return !Reflect.isExtensible(target);
    }
})

console.log(Object.isExtensible(proxy));
/**
 * TypeError: 'isExtensible' on proxy: 
 * trap result does not reflect extensibility of proxy target (which is 'true')
 */
```
:::
::: tab label=Reflect.isExtensible
* 与Object.isExtensible不同点：
>第一个参数不是对象时：Object.isExtensible会转化成对象判断  
>第一个参数不是对象时：Reflect.isExtensible会报错
```js
const obj = {};
console.log(Reflect.isExtensible(obj)); // true

Object.freeze(obj);
console.log(Reflect.isExtensible(obj)); // false
```
:::
::::
### preventExtensions
::: tip preventExtensions
* 作用：劫持限制对象扩展类操作
* 定义：preventExtensions(target)
* 入参：Object
* 返回：Boolean
* 调用：
    1. Object.preventExtensions(proxy)
    2. Object.seal(proxy)
    3. Object.freeze(proxy)
:::
:::: tabs
::: tab label=使用
```js
const proxy = new Proxy({}, {
    preventExtensions(target) {
        throw Error('此对象不可禁止扩展');
    }
})

// Object.preventExtensions(proxy); // Error: 此对象不可禁止扩展
// Object.seal(proxy); // Error: 此对象不可禁止扩展
// Object.freeze(proxy); // Error: 此对象不可禁止扩展
```
:::
::: tab label=Reflect.preventExtensions
* 与Object.preventExtensions不同点是第一个参数如果不是对象会报错
```js
const obj = { name: 'hdy' };
Reflect.preventExtensions(obj);
obj.age = 18;
console.log(obj.age); // undefined
```
:::
::::
