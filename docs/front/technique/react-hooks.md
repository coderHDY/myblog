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
```js{9-10,46-49}
import { useState, useEffect, useCallback } from "react";

/* 修改原生 setStorage */
(() => {
    const oritinItem = localStorage.setItem;
    window.localStorage.setItem = (key, val) => {

        // customEvent默认不冒泡
        const setItemEvent = new CustomEvent("setLocalStorage", { detail: { key, val }, bubbles: true });
        dispatchEvent(setItemEvent);
        oritinItem.call(window.localStorage, key, val)
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
    const localData = getLocalStorage(k);
    const [val, setVal] = useState(localData);
    const removeData = useCallback(() => removeLocalStorage(k), [k]);
    const setData = useCallback((val) => setLocalStorage(k, val), [k]);

    // 初始化
    useEffect(() => {
        if (localData !== val) {
            setVal(localData);
        }
    }, [setVal, localData, val]);

    // 改变
    const listener = useCallback(e => {
        const { key, val } = e.detail;
        if (k === key) {
            setVal(val);
        }
        return true;
    }, [k, setVal]);

    useEffect(() => {
        window.addEventListener("setLocalStorage", listener);
        return () => window.removeEventListener("setLocalStorage", listener);
    }, [listener]);

    return [
        val,
        {
            setData,
            removeData,
        }
    ];
}

export default useLocalStorage;
```