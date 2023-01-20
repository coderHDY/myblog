---
title: React Hooks
date: 2023-01-04
---
## useLocalStorage
::: tip
1. CustomEvent可以携带参数
2. 修改原生的`localStorage.setItem`发射自定义事件
3. useLocalStorage中监听自定义事件做出数据修改，完成响应式
:::
::: warning
* 每次取 localStorage 中最新数据作为比对进行再次 set 数据，处理了页面多个组件同步更新问题
:::
```js{11-12,58-61}
import { useState, useEffect, useCallback } from "react";

const CHANGE_STORAGE_EVENT = "changeLocalStorage";

/* 修改原生 setStorage */
(() => {
  const oritinSetItem = localStorage.setItem;
  window.localStorage.setItem = (key, val) => {

    // customEvent默认不冒泡
    const setItemEvent = new CustomEvent(CHANGE_STORAGE_EVENT, { detail: { key, val }, bubbles: true });
    dispatchEvent(setItemEvent);
    oritinSetItem.call(window.localStorage, key, val)
  }

  const oritinRemoveItem = localStorage.removeItem;
  window.localStorage.removeItem = (key) => {
    const setItemEvent = new CustomEvent(CHANGE_STORAGE_EVENT, { detail: { key, val: null }, bubbles: true });
    dispatchEvent(setItemEvent);
    oritinRemoveItem.call(window.localStorage, key)
  }
})();

const setLocalStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
}
const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}
const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
}
const useLocalStorage = (k) => {
  const [val, setVal] = useState();
  const remove = useCallback(() => {
    setVal(null);
    removeLocalStorage(k)
  }, [k]);
  const set = useCallback((val) => setLocalStorage(k, val), [k]);

  // 初始化
  useEffect(() => {
    const localData = getLocalStorage(k);
    if (JSON.stringify(localData) !== JSON.stringify(val)) {
      setVal(localData);
    }
  }, [k, setVal, val])

  // 改变
  const listener = useCallback(e => {
    const { key, val } = e.detail;
    if (k === key) {
      setVal(val);
    }
    return true;
  }, [k, setVal]);

  useEffect(() => {
    window.addEventListener(CHANGE_STORAGE_EVENT, listener);
    return () => window.removeEventListener(CHANGE_STORAGE_EVENT, listener);
  }, [listener]);

  return [
    val,
    {
      set,
      remove,
    }
  ];
}

export default useLocalStorage;
```