---
title: jest
date: 2023-09-06
---

## 单测
1. mock外部库引入函数返回值
```js
const fileTypeMock = jest.fn().mockReturnValue({ type: "image" });

// 对象的这个方法执行后被返回指定值
jest.spyOn(Helper, "getFileType").mockImplementation(fileTypeMock);
```
2. 更改外部库的某个函数
```js
const mockNav = jest.fn();
const mockedUseNavigate = jest.fn().mockReturnValue(mockNav);
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as object),
  // mock某一个使用的函数，直接给返回值
  // useSearchParams: () => [new URLSearchParams({ sjmsgToken: "1", v: "1" })],
  useNavigate: () => mockedUseNavigate,
}));
```
4. 执行hook
```js
const { result, rerender } = renderHook(() => useFileDropzone(), {
  wrapper: MemoryRouter,
});
```
5. 替代外部复杂方法
```js
const createObjectURLMock = jest.fn();
URL.createObjectURL = createObjectURLMock;
```
6. 执行hook返回的函数
```js
const res = result.current.acceptedFilesFormat(filesMock);
```
7. 替代ref
```js
// mock
const idInput: any = { value: "testUser" };
// 执行hook
const { result, rerender } = renderHook(() => useLogin(), {
  wrapper: MemoryRouter,
});
// 给ref赋值并等待执行异步函数
await act(async () => {
  if (result.current.idRef) {
    result.current.idRef.current = idInput;
  }
  if (result.current.pwdRef) {
    result.current.pwdRef.current = pwdInput;
  }
  await result.current.login();
});
```
8. 断言函数被执行
```js
expect(Service.loginService).not.toHaveBeenCalled();
```
9. 导入外部常量
```js
jest.mock("utils/constants.ts", () => ({
  ...(jest.requireActual("utils/constants.ts") as object),
  INTERVAL_TIME: 1,
}));
```
10. 重复渲染
* 执行一遍，rerender
* 修改参数，rerender
* 断言结果，要用`result.current.xxx`
```js
act(() => {
  const {
    replyContentTopRef,
    replyContentFootRef,
    contentTopHeight,
    contentFootHeight,
  } = result.current;
  if (replyContentTopRef) {
    replyContentTopRef.current = { clientHeight: 100 } as any;
  }
  if (replyContentFootRef) {
    replyContentFootRef.current = { clientHeight: 100 } as any;
  }
  rerender();
});

act(() => {
  props.fixed = false;
  rerender();
});

// ASSERT：確認
expect(result.current.contentTopHeight).toEqual(100);
```
11. 单个it修改外部库导入函数
```js
// 全局更改一个默认的，让此库变为可修改的
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as object),
  useParams: jest.fn().mockReturnValue({}),
}));

// 单个it自己修改（不修改也要默认给一个）
it(() => {
  jest.spyOn(RouterDom, "useParams").mockReturnValue({});
})
```
12. 防抖单测
```js

it("change searchText should debounce fetch tip list", async () => {
  // 模拟时间流逝
  jest.useFakeTimers();

  // ARRANGE：準備

  // ACT：実行
  const { result, rerender } = renderHook(() => useRecipientSelect(), {
    wrapper: MemoryRouter,
  });
  await act(async () => {
    result.current.onMenuClick();
    rerender();
  });

  await act(async () => {
    result.current.changeInputText("xxx");
    rerender();

    // 模拟时间流逝 1000
    await jest.advanceTimersByTime(1000);
    
    // await jest.runAllTimers();
  });

  // ASSERT：確認
  expect(result.current.tipList).toEqual(1);

  // 关闭模拟时间流逝
  jest.useRealTimers();
});
```
13. 清理函数
```js
beforeEach(() => {
  jest.clearAllMocks();
});
```
14. 确认时异步等待
```js
await waitFor(() => {
  expect(mockSetEditing).toBeCalled();
});
```
