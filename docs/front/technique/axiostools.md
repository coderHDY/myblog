---
title: 网络请求工具封装
date: 2023-07-05
---
## 网络请求工具
::: tip
* 基于`axios 1.4.0`封装
:::

:::: tabs
::: tab label=getBaseUrl
* 路由跳转时，路径可能不是根路径，所以需要获取当前路径
```js
export const getBaseUrl = () => {
  let baseurl = `${window.location.protocol}//${window.location.host}`;
  if (baseurl.match(/^\//g)) {
    baseurl = `${window.location.protocol}//${window.location.host}${baseurl}`;
  }
  return baseurl;
}
export function getBasePathName() {
  const a = document.createElement("a");
  a.href = getBaseUrl();
  let rt = a.pathname.match(/^\//g) ? a.pathname : `/${a.pathname}`;
  rt = rt.match(/\/$/g) ? rt : `${rt}/`;
  return rt;
}
```
:::
::: tab label=fetch.ts
```js
import fetch, { CancelToken } from "axios";
import { getBaseUrl } from "./urlPathTool";

const baseUrl = `${getBaseUrl()}/`;

const handleRequestError = (requestUrl: string, err: any) => {
  try {
    if (err && err.response) {
      if (err.response.data.code === 401) {
        // console.log("跳转到登陆页面")
      } else if (err.response.data.code === 500) {
        // console.log("跳转到服务器错误页面")
      }
      throw err;
    }
  } catch (err: any) {
    if (err.message === "Network Error") {
      // console.log("跳转到网络错误页面")
    }
  }
};

const commonRequest = async (
  method: string,
  path: string,
  arr: { params?: any; data?: any; cancelToken?: CancelToken }
) => {
  const options = {
    method,
    url: `${baseUrl}${path}`,
    ...arr,
  };

  try {
    const response = await fetch(options);
    // check服务器返回
    return response.data.data;
  } catch (err: any) {
    handleRequestError(path, err);
  }
};

export function get(url: string, params = {}, cancelToken?: CancelToken) {
  return commonRequest("get", url, { params, cancelToken });
}

export function post<T>(url: string, data = {}, cancelToken?: CancelToken): T {
  return commonRequest("post", url, { data: { ...data }, cancelToken }) as T;
}

export function put<T>(url: string, data = {}, cancelToken?: CancelToken): T {
  return commonRequest("put", url, { data: { ...data }, cancelToken }) as T;
}

export function del<T>(url: string, data = {}, cancelToken?: CancelToken): T {
  return commonRequest("delete", url, { data: { ...data }, cancelToken }) as T;
}
```
:::
::: tab label=react路由外跳转
* 网络请求是普通函数，在组建外，所以错误页面跳转属于`路由外跳转`
* 基于`history`库
* 跳转函数
```js
// utils/History/history.tsx
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export default history;
```
* 路由包装
```js
// utils/History/HistoryRouter.tsx
import React from "react";
import type { History } from "history";
import type { BrowserRouterProps as NativeBrowserRouterProps } from "react-router-dom";
import { Router } from "react-router-dom";

export interface BrowserRouterProps
  extends Omit<NativeBrowserRouterProps, "window"> {
  history: History;
}

const BrowserRouter: React.FC<BrowserRouterProps> = (props) => {
  const { history, ...restProps } = props;
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...restProps}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default React.memo(BrowserRouter);
```
* 路由使用
```js
// App.tsx
const App: React.FC = () => {
  const { [STORAGE_THEME]: themeType } = useContext(ThemeContext);
  const Theme = { ...theme };
  Theme.palette.type = themeType;
  return (
    <Suspense>
      <BrowserRouter history={history}>
        <Elements />
      </BrowserRouter>
    </Suspense>
  );
};
```
* 路由跳转使用
```js
import history from "./History/history";

const ROUTE_MESSAGE_LOGIN = `${getBasePathName()}login`;
history.replace(ROUTE_MESSAGE_LOGIN);
```
:::
::: tab label=vue3路由外跳转
* `utils/webHistory.ts`
```js
import { createWebHistory } from "vue-router";

const webHistory = createWebHistory(import.meta.env.BASE_URL);
export default webHistory;
```
* `router/index.ts`
```js
import { createRouter } from "vue-router";
import ErrorView from "@/views/ErrorView/ErrorView.vue";
import webHistory from "@/utils/webHistory";

const router = createRouter({
	history: webHistory,
	routes: [
		{
			path: "/:w+",
			component: ErrorView,
		},
	],
});

export default router;
```
:::
::::


## 文件上传进度条
```ts
import axios, { AxiosProgressEvent } from "axios";
// 做进度条函数
const uploadProgress = (evt: AxiosProgressEvent, id: string) => {
  if (evt.progress && evt.total) {
    const percent = Math.round((evt.loaded * 100) / evt.total);
    setProgresses({ ...progresses, [id]: percent });
  }
};
const fileUpload = async (file: File) => {
  const url = `${getBaseUrl()}/${FILE_UPLOAD}`;
  const form = new FormData();
  const { fileInfo, cid } = file;
  if (fileInfo) {
    form.append("file", fileInfo);
    const option = {
      method: "post",
      url,
      data: form,
      onUploadProgress: (event: AxiosProgressEvent) =>
        uploadProgress(event, cid),
    };
    try {
      const result = await axios(option);
      uploadedFilesUrl.current = {
        ...uploadedFilesUrl.current,
        [cid]: result.data.data,
      };
    } catch (e) {
      setUploadFailed([...uploadFailed, cid]);
    }
  }
};
```