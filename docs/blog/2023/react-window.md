---
title: React-window使用
date: 2023-01-07
---
## FixedSizeList
::: tip
* 每一行高度固定
* 计算出列表总高度
* 监听滚动事件，计算需要展示的项，只渲染需要展示的项
* 原理：计算高度给css的`top属性`，其余不渲染。例：`top: 3.8363e+06px;`
:::
```jsx
import React, { memo, useState } from 'react';
import { areEqual, FixedSizeList as List } from 'react-window';

const getList = (num) => (
    Array.from({ length: num }, (v, i) => ({
        val: `这是第${i}个元素`,
        id: i,
    }))
)

export default function Home() {
    const [list] = useState(getList(100000));
    const Cell = memo(({ index, style }) => {
        const item = list[index];
        if (!item) return null;
        return (
            <div style={style} key={item.id}>
                <div>{item.val}</div>
                <div>啦啦啦{item.val}</div>
            </div>
        )
    }, areEqual);

    return (
        <>
            <List
                height={600}
                itemCount={list.length}
                itemSize={50}
                width={300}
            >
                {Cell}
            </List>
        </>
    )
}
```
## VariableSizeList
::: tip
* 项可变高度列表
* 需要给一个函数计算出每一项的高度
:::
```jsx{5}
import React, { memo, useState } from 'react';
import { areEqual, VariableSizeList } from 'react-window';

// 可变长度，所以要给出一个计算每一个项的高度的计算公式
const getItemSize = index => index % 3 === 0 ? 60 : 30;

const getList = (num) => (
    Array.from({ length: num }, (v, i) => ({
        val: `这是第${i}个元素`,
        val2: num % 3 === 0 ? `这是第${i}个元素哈哈哈哈` : undefined,
        id: i,
    }))
);

export default function Home() {
    const [list] = useState(getList(100000));
    const Row = memo(({ index, style }) => {
        const item = list[index];
        if (!item) return null;
        return (
            <div style={style} key={item.id}>
                <div>{item.val}</div>
                {item.val2 && <div>{item.val2}</div>}
            </div>
        )
    }, areEqual);

    return (
        <>
            <VariableSizeList
                height={150} // 列表可视区域的高度
                itemCount={1000} // 列表数据长度
                itemSize={getItemSize} // 设置列表项的高度
                layout="vertical" // （vertical/horizontal） 默认为vertical，此为设置列表的方向
                width={300}
            >
                {Row}
            </VariableSizeList>
        </>
    )
}
```
## AutoSizer
::: tip
* 自动将虚拟列表组件的宽高设置成父组件的宽高
:::
```jsx
import React, { memo, useState } from 'react';
import { areEqual, VariableSizeList } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

// 可变长度，所以要给出一个计算每一个项的高度的计算公式
const getItemSize = index => index % 3 === 0 ? 60 : 30;

const getList = (num) => (
    Array.from({ length: num }, (v, i) => ({
        val: `这是第${i}个元素`,
        val2: num % 3 === 0 ? `这是第${i}个元素哈哈哈哈` : undefined,
        id: i,
    }))
);

export default function Home() {
    const [list] = useState(getList(100000));
    const Row = memo(({ index, style }) => {
        const item = list[index];
        if (!item) return null;
        return (
            <div style={style} key={item.id}>
                <div>{item.val}</div>
                {item.val2 && <div>{item.val2}</div>}
            </div>
        )
    }, areEqual);

    return (
        <>
            <div style={{ height: "90vh", width: "100vw" }}>
                <AutoSizer>
                    {({ height, width }) => (
                        <VariableSizeList
                            height={height}
                            itemCount={1000}
                            itemSize={getItemSize}
                            layout="vertical"
                            width={width}
                        >
                            {Row}
                        </VariableSizeList>
                    )}
                </AutoSizer>
            </div>
        </>
    )
}
```
## resetAfterIndex
::: tip
* 库缓存了每个raw的高度，如果需要重置，需要手动重置
:::
```js
// listRef 绑定虚拟列表组件
listRef.current.resetAfterIndex(0, false);
```