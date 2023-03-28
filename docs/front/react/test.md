---
title: react单测
date: 2023-03-28
---
## 起步
* [api 文档](https://testing-library.com/docs/queries/about)
* create-react-app自带单测
```json
"@testing-library/jest-dom": "^5.16.2",
"@testing-library/react": "^12.1.2",
"@testing-library/user-event": "^13.5.0",
```
* 安装
```shell
npm install --save-dev jest
```
* 启动
```shell
npm run test
```
## 测试普通函数
:::: tabs
::: tab label=describe
* 定义测试代码块，并且可以分组/嵌套
```jsx
// tests/index.test.js
import React from "react";

describe("test", () => {
  test("equal", () => {
    expect(<div />).toEqual(<div />);
  });
});
```
* 嵌套多组测试
```jsx{5-7,10-12,14-16}
import React from "react";

describe("test", () => {

  test("test1", () => {
    expect(1).toBe(1)
  });

  describe("group", () => {
    test("test1", () => {
      expect(1).toBe(1)
    });

    test("test2", () => {
      expect(2).toBe(2)
    });
  });
});

```
:::
::: tab label=test
* 同`it`
```jsx
test("test1", () => {
  expect(1).toBe(1)
});
```
```jsx
it("test1", () => {
  expect(1).toBe(1)
});
```
:::
::: tab label=expect
* 预期，结合结合
* 普通值对比：`预期(1).等于(1)`
```jsx
expect(1).toBe(1)
```
* 对象等引用相等
```jsx
expect({name: "hdy"}).toEqual({name: "hdy"})
```
:::
::: tab label=toBeCalled
```js
test("onClick", () => {
  const fn = jest.fn()
  const btn = <button onClick={fn}>button</button>
  // 点击btn
  expect(fn).toBeCalled()
});
```
:::
::: tab label=toBeTruthy/toBeFalsy
* 真/假
```jsx
test("test1", () => {
  expect(1 > 3).toBeFalsy();
});

test("test1", () => {
  expect(1 === 1).toBeTruthy();
});
```
:::
::: tab label=not
```js
test("test1", () => {
  expect(Math.random()).not.toBe(2);
});
```
:::
::::
## 渲染测试
:::: tabs
::: tab label=render
* react18会有render提示，无视就行
```js
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

test("1", () => {
  const {asFragment} = render(<div>Foo</div>);

  expect(screen.getByText('Foo')).toBeInTheDocument()
  
  expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
    <div>
      Foo
    </div>
  </DocumentFragment>
  `)
})
```
:::
::: tab label=toHaveTextContent
* 渲染指定组件，包含字段
```jsx
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

test('has correct welcome text', () => {
  render(<div>hello world!</div>)
  expect(screen.getByText(/hello/i)).toHaveTextContent('hello world')
})
```
* 使用正则
```jsx
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

test('has correct welcome text', () => {
  render(
    <div>
      hello
      <div><div>hello world!</div></div>
    </div>
  )
  expect(screen.getByText(/hello world!/)).toBeInTheDocument()
})
```
:::
::::