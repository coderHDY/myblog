---
title: vue3响应式
date: 2023-09-15
---
* `Dep`：是观察者模式设计核心，响应式通知依赖
* `reactive`：由于vue3 `reactive`只能接收对象，且同时切换成了`Proxy`做响应式，所以reactive兼顾vue2的`observe`功能
* `watch`：执行一遍数据获取更新并收集依赖
* `updateFn`：首次`render`/收集依赖的标志
::: codePen
```html
<!DOCTYPE html>
<html>
  <head>
    <title>vue3响应式</title>
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
      const reactive = (obj) => {
        const dep = new Dep();
        return new Proxy(obj, {
          get(obj, key) {
            if (updateFn) {
              dep.depend(updateFn);
            }
            return obj[key];
          },
          set(obj, key, val) {
            obj[key] = val;
            dep.notify();
          },
        });
      };

      let updateFn = null;
      const watch = (fn) => {
        updateFn = fn;
        updateFn();
        updateFn = null;
      };

      // 使用
      const data = reactive({
        text: "",
      });
      const update = () => {
        showEl.innerText = data.text;
        showEl2.innerText = data.text;
      };
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