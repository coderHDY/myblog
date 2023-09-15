---
title: vue2响应式
date: 2023-09-15
---
* `class Dep`：收集依赖，被`reactive`调用
* `reactive`：将对象的某一个属性变为可响应式，**制作闭包为其存放单独`dep`对象和值**
* `observe`：将对象属性遍历调用`reactive`
* `watch`：首次添加依赖时调用
* `updateFn`：`reactive`内作为判断是否是首次渲染的桥梁

::: codePen
```html
<!DOCTYPE html>
<html>
  <head>
    <title>vue2响应式</title>
  </head>
  <body>
    <input type="text" id="input" />
    <h1 id="showEl"></h1>
    <h1 id="showEl2"></h1>

    <script>
      const input = document.querySelector("#input");
      const showEl = document.querySelector("#showEl");
      const showEl2 = document.querySelector("#showEl2");

      class Dep {
        dependArr = [];
        depend(fn) {
          if (this.dependArr.includes(fn)) {
            return;
          }
          this.dependArr.push(fn);
        }
        notify() {
          this.dependArr.forEach((fn) => fn());
        }
      }

      // 用watch执行一遍更新函数，添加上依赖
      let updateFn = null;
      const watch = (fn) => {
        updateFn = fn;
        updateFn();
        updateFn = null;
      };
      const reactive = (obj, key) => {
        const dep = new Dep();
        // 重要：避免监听依赖后循环访问对象，将值藏在闭包内
        let val = obj[key];
        Object.defineProperty(obj, key, {
          get() {
            if (updateFn) {
              dep.depend(updateFn);
            }
            return val;
          },
          set(newVal) {
            val = newVal;
            dep.notify();
          },
        });
      };
      const observe = (obj) => {
        const keys = Object.keys(obj);
        for (let key of keys) {
          reactive(obj, key);
        }
      };

      // 使用
      const data = {
        text: "",
      };

      // 更新函数
      const update = () => {
        console.log("update");
        showEl.innerText = data.text;
        showEl2.innerText = data.text;
      };

      // 执行阶段：添加依赖和事件监听
      observe(data);
      watch(update);
      input.addEventListener("input", (e) => {
        const v = e.target.value;
        data.text = v;
      });
    </script>
  </body>
</html>
```
:::