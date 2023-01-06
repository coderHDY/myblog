---
title: React-beautiful-dnd使用
date: 2023-01-06
---
::: tip React-beautiful-dnd
* React可拖拽排序库
:::
```jsx
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

//初始化数据
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + 1}`,
        content: `this is content ${k + 1}`
    }));

// 重新记录数组顺序
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const grid = 8;

// 设置样式
const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "lightgreen" : "#ffffff",
    ...draggableStyle
});

const getListStyle = () => ({
    background: 'black',
    padding: grid,
    width: 250
});

const About = () => {
    const [items, setItems] = useState(getItems(11));

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const newItems = reorder(
            [...items],
            result.source.index,
            result.destination.index
        );
        setItems(newItems);
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot)}
                        >
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}
export default About;
```