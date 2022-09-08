---
title: react video处理
date: 2022-09-07
---
## 需求
* 在离开时拿到视频播放进度
* 在进入时播放视频，返回当时进度
## 问题
* `react-router-dom`没有实际的路由守卫，在不对全局路由处理的情况下就无法做路由拦截
* 如果用`useEffect`监听beforeLeave：useEffect监听到离开时，`ref.current`已经被清空
## 思路
* useEffect`定时器`获取时间
* 离开时发送网络请求保存进度，同时关闭定时器
```JSX
import React, { useEffect, useRef } from 'react';
export default function Home() {
    const videoRef = useRef();
    // 取 localStorage模拟网络请求
    const setTime = () => {
        const t = +localStorage.getItem("time");
        videoRef.current.currentTime = t ?? 0;
    }
    // 存
    useEffect(() => {
        let time = 0;
        const interval = setInterval(() => {
            const t = videoRef.current?.currentTime;
            if (t) time = t;
        }, 500);
        return () => {
            console.log(time);
            localStorage.setItem("time", time);
            clearInterval(interval)
        }
    }, []);
    return (
        <>
            <video src="/v1.mp4" controls ref={videoRef} onLoadStart={setTime} autoPlay></video>
        </>
    )
}
```