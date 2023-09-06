---
title: useContext局部状态管理
date: 2023-03-24
---
## useContext定义局部状态
* `./services/useTheme.jsx`
```jsx
import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);
const DispatchContext = createContext(null);

const useTheme = () => useContext(ThemeContext);
const useThemeDispatch = () => useContext(DispatchContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = (newV) => {
    setTheme(newV);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <DispatchContext.Provider value={changeTheme}>
        {children}
      </DispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export { useTheme, useThemeDispatch };
export default ThemeProvider;
```
## 局部使用状态
```jsx
import React, { memo } from "react";
import ThemeProvider, { useTheme } from "./services/useTheme";

const Home = () => {
  const theme = useTheme();
  return
  <div style={{color: theme === "dark" ? "white" : "black"}}>
    111
  </div>
}

// 将Home组件包装，从Home往下都能够使用这个局部状态
// 或者直接从路由做这一层包装
const WrapperedThemeHome = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};
export default memo(WrapperedThemeHome);
```
## 状态更改
* Home下的子组件
```jsx
import React, { memo } from "react";
import ThemeProvider, { useTheme } from "./services/useTheme";
const Menu = () => {
  const theme = useTheme();
  const themeDispatch = useThemeDispatch();
  const changeMenuItem = () => {
    themeDispatch(theme === "light" ? "dark" : "light");
  };
  return (
    <button onClick={changeMenuItem}>{theme}</button>
  );
};
export default memo(Menu);
```
## 性能调优
* 某一个组件更新，其子组件都会更新，尤其是一个页面多个地方在使用这个状态的时候，需要用`memo(Component)`来减少局部无效更新
## useContext对比Redux
::: tip 选择标准
||redux|context|
|---|---|---|
|范围|全局|局部|
|状态个数|三个以上|三个以下|
|项目大小|超大|中小|
:::

## Provider
:::: tabs
::: tab label=Provider
```jsx
import { useContext, createContext, useReducer } from "react";

const initCount = 0;

const countReducer = (state, { type, num }) => {
  const newCount = (() => {
    switch (type) {
      case "add": {
        return state + num;
      }
      default: {
        return state;
      }
    }
  })();
  return newCount;
};

const ConditionContext = createContext(initCount);
const DispatchContext = createContext(() => {});

// 要调用某个共享状态的时候使用
const useCount = () => useContext(ConditionContext);
const useCountDispatch = () => useContext(DispatchContext);

// 提供reducer给所有子组件
const CountProvider = ({ children }) => {
  const [count, countDispatch] = useReducer(countReducer, initCount);
  return (
    <ConditionContext.Provider value={count}>
      <DispatchContext.Provider value={countDispatch}>
        {children}
      </DispatchContext.Provider>
    </ConditionContext.Provider>
  );
};
export { useCount, useCountDispatch, CountProvider };
```
:::
::: tab label=App
```jsx
import React from "react";
import { useRoutes } from "react-router-dom";
import routerMap from "./router";
import { CountProvider } from "./hooks/useCountProvider";

function App() {
  const elements = useRoutes(routerMap);
  return (
    <div>
      <CountProvider>{elements}</CountProvider>
    </div>
  );
}

export default App;
```
:::
::: tab label=useCountDispatch
```jsx
import react from "react";
import { useCount, useCountDispatch } from "hooks/useCountProvider";

const Home = () => {
  const count = useCount();
  const countDispatch = useCountDispatch();
  const addClick = () => {
    countDispatch({
      type: "add",
      num: 3,
    });
  };
  return (
    <div>
      {count}
      <button onClick={addClick}>+++</button>
    </div>
  );
};
export default Home;
```
:::
::::