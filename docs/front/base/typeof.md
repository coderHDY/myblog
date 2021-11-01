# 类型判断

## typeof
::: tip typeof
> 只能识别出这些类型  
1. undefined
2. boolean
3. string
4. number
5. "object" 对象  **或 null**  (不是函数)
6. "function"
7. symbol
:::
* 注：typeof 会把 null 和 object 和 Array类型都判断为 **object**，所以 [深浅拷贝](../sourcecode/#深浅拷贝)函数需要再次判断类型
## ===
* 原生的 '==' 符号有一些缺陷，所以引入了全等 '==='
::: tip == 和 === 区别
1. boolean、string、number **==会自动转换类型**再判断，不是精准比较

2. undefined == null; // true  
undefined === null; // false

3. NaN == NaN // true  
NaN === NaN // false
::: 

## instanceof
* instanceof 本质上是从原型链上面去找对象