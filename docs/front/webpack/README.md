---
title: webpack
date: 2022-02-13
---
## 核心概念
:::: tabs
::: tab label=介绍
* webpack is a **static module bundler** for modern jsvascript application.
* webpack是一个服务于现代javascript应用程序的`静态的模块化打包工具`。
* 将各种资源的语法打包成 **浏览器认识的** html/css/图片/视频等格式。
:::
::: tab label=核心配置
```
npm i webpack webpack-cli -g
```

* entry：入口文件，打包的`依赖关系图`生成起点
* output:输出文件配置
* loader:加载器
* plugins：插件
* mode: development | production | none

|none|development|production|
|---|---|---|
|不做优化|会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development|会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production，并且将chunk名称做一些混淆优化|

```js
const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    plugins: []
}
```
:::
::: tab label=依赖
* 依赖管理：`package.json`
* 开发依赖：直接`install`
* 生产依赖：`install --save--dev`，简写`install -D`
* 默认入口：当前文件夹下的src下的`index`文件，根据这个文件去寻找其他依赖，生成`依赖关系图`，进行打包

* 使用本地webpack两种方法：
    1. npx
    ```shell{1}
    npm install webpack webpack-cli -D

    npx webpack
    ```
    2. 或者直接在package.json创建脚本
    ```json
    "scripts": {
        "build": "webpack"
    }
    ```
>自定义入口/出口
```shell
npx webpack --entry ./src/index.js --output-path ./build
```
:::
::: tab label=loader
* loader可以对不同的源代码进行解析，打包对应的文件，如：css-loader、ts-loader
```shell
npm i css-loader -D
npm i style-loader -D
```
* 使用方式（2种）：
    1. 内联
    ```js
    import 'css-loader!./src/css/style.css'
    ```
    2. 配置(常用)
    >有多个loader就用use配置数组。  
    >注：use的执行顺序是 **倒序** 的，最下面的loader先执行。css文件需要先css-loader解析，再style-loader插入到文件内去
    ```js{5-15}
    //webpack.comfig.js
    module.exports = {
        // ...
        module: {
            rules: [
                {
                    test: /\.css$/,
                    // loader: "css-loader",
                    // use: [ {loader: "css-loader", options: xxx} ]
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                }
            ]
        }
    }
    ```
:::
::: tab label=PostCSS
* 进行一些CSS适配，将CSS转换成各浏览器都能识别的状态。如：加前缀、#12345678透明度等。
```shell
npm i postcss-loader -D
npm i autoprefixer -D
```
```js{7-16}
rules: [
    {
        test: /\.(css|less)$/,
        use: [
            "style-loader",
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [
                            require("autoprefixer"),
                        ]
                    }
                }
            },
            "less-loader",
        ]
    }
]
```
* 或者直接使用已经配置好的`postcss-preset-env`插件配置，会将大多数样式转化成各浏览器适配的版本。
```js{12}
rules: [
    {
        test: /\.(css|less)$/,
        use: [
            "style-loader",
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [
                            require("postcss-preset-env"),
                        ]
                    }
                }
            },
            "less-loader",
        ]
    }
]
```
:::
::: tab label=图片
* 对应`file-loader`
```shell
npm i file-loader -D
```
```js
rules: [
    {
        test: /\.(jpe?g|gif|svg|png)$/,
        loader: "file-loader",
        options: {
            limit: 8192,
        }
    }
]
```
* 使用`url-loader`，与`file-loader`相似，但是可以将较小的图片转化成`base64`格式，性能优化
* 可以用limit限制在多小的范围内才进行转化
:::
::: tab label=文件命名
* placeholder:
    * [ext] :处理文件的扩展名
    * [name] : 处理文件的原名称
    * [hash] :哈希值，文件内容
    * [path] :文件相对于webpack.config.js文件的相对路径
    * [hash:【length】] :哈希截取长度
    * [contentHash]: 
```js{5-8}
{
    test: /\.(png|gif|svg)$/,
    use: {
        loader: "file-loader",
        options: {
            outputPath: "img",
            name: "[name]_[hash:6][ext]"
        }
    },
}
```
:::
::: tab label=asset
* `asset module type`：`webpack5`推出的统一静态资源打包方法
* 配置项：
    * asset/resource：类似file-loader
    * asset/inline：类似url-loader
    * asset/source：类似原row-loader
    * asset：选择导出配置项
```js
{
    test: /\.(png|gif|svg)$/,
    type: "asset/resource",
}
```
```js{3}
{
    test: /\.(jpe?g|png|gif|svg)$/,
    type: "asset",
    parser: {
        dataUrlCondition: {
            maxSize: 100 * 1024,
        }
    },
    generator: {
        filename: "img/[name]_[hash][ext]"
    }
}
```
:::
::: tab label=问题
* 字体、icon、font打包：`file-loader`/`asset/resource`
* plugin和loader区别：
    * 添加功能：plugin
    * 模块打包：loader
:::
::::
## webpack-plugin
:::: tabs
::: tab label=清理chunk
* `CleanWebpackPlugin`：自动清理原打包文件
```shell
npm i clean-webpack-plugin -D
```
```js
const { cleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}
```

:::
::: tab label=html
* `HtmlWebpackPlugin`：自动生成html入口文件
>注意，导入没有解构！
```shell
npm i html-webpack-plugin -D
```
```js{1}
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html" // 可以指定模板
        })
    ]
}
```
:::
::: tab label=全局变量
* `DefinePlugin`：注入全局变量
```js
const { DefinePlugin } = require('webpack');
module.exports = {
    plugins: [
        new DefinePlugin({
            BASE_URL: "'./public/'"
        })
    ]
}
```
```html
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```
:::
::: tab label=public
* public文件夹下的东西会被直接复制到打包后的文件夹内，是因为有`CopyWebpackPlugin`这个插件
```shell
npm i copy-webpack-plugin -D
```
```js
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '',
                    globOptions: {
                        ignore: [
                            "**/index.html"
                        ]
                    }
                }
            ]
        })
    ]
}
```
:::
::: tab label=babel
>babel本质上是一个编译器，将我们的源代码转换成另一份源代码
* 安装
```shell
npm i @babel/core @babel/cli -D
npm i @babel/preset-env -D
```
* 常用ES6转ES5
```shell
npx babel src/test.js --out-dir ./ --presets=@babel/preset-env
```
* webpack内使用
```shell
npm i babel-loader @babel/core -D
```
```js{5-7}
{
    test: /\.js$/,
    use: {
        loader: "babel-loader",
        options: {
            presets: [ "@babel/preset-env" ],
        }
    }                
}
```
* 配置抽离：
    * (荐)babel.config.js/json...
    * babelrc.js/json
    ```js
    // webpack.config.js module.rules
    {
        test: /\.js$/,
        loader: "babel-loader",   
    }
    ```
    ```js
    // babel.config.js
    module.exports = {
        plugins: [],
        presets: [ '@babel/preset-env' ]
    }
    ```
:::
::: tab label=vue
```shell
npm i vue@next
npm i vue-loader@next -D
npm i @vue/compiler-sfc -D
```
```js{10-11}
// weboack.config.js
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

// plugins
plugins: [
    // ..
    new DefinePlugin({
        BASE_URL: "'./public/'",
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: true
    }),
    new VueLoaderPlugin()
]

// rules
{
    test: /\.vue$/,
    loader: 'vue-loader'
}
```
* vue/home.vue
```vue
<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Hello Vue!'
            }
        }
    }
</script>

<style>
    h2 {
        color: red;
    }
</style>
```
```js{3}
// index.js
const { createApp } = require('vue');
import home from'./vue/Home.vue';

const app = createApp(home);
app.mount("#app");
```
* index.html(模板)
```html
<body>
    <div id="app"></div>
</body>
```

:::
::: tab label=调试
* mode:`development`开发模式，打包就不会压缩。打包上线设置`production`
* devtool:`source-map`，出现问题能够定位到源文件位置
* vscode调试插件：`vetur`、`volar`(vue3支持较好)
```js
module.exports = {
    mode: 'development',
    devtool: "source-map",
}
```
* 编译器原理学习：[简单的源码](https://github.com/jamiebuilds/the-super-tiny-compiler)
:::
::::
## webpack-devServer
:::: tabs
::: tab label=自动编译
* 三种可选方式：
    * webpack watch mode
    ```js{3}
    //package.json
    "scripts": {
        "build": "webpack --watch"
    }
    ```
    >或者直接配置里面添加watc:true
    ```js{4}
    // webpack.config.js
    module.exports = {
        // ...
        watch: true
    }
    ```
    * webpack-dev-server(常)
    >实际上是webpack用express搭建的一个本地服务器，配上监听变化和自动编译操作。  
    >且打包后并不写入文件，而是使用`memfs`库写入内存，在内存中进行调用，减少了写文件阶段，访问更为快速。
    ```shell
    npm i webpack-dev-server -D
    ```
    ```js
    //package.json
    "scripts": {
        "server": "webpack server"
    }
    ```
    >如果服务器没找到的资源，会从这里进行查找。  
    >**开发阶段用`static`，生产阶段用`CopyWebpackPlugin`将静态资源一起打包。**
    ```js{5}
    // webpack.config.js
    module.exports = {
        // ...
        devServer: {
            static: "./public",
        }
    }
    ```
    * webpack-dev-middleware
:::
::: tab label=模块热替换
>当前webpack-dev-server属于热加载`live-reloade`，更改一个位置全部浏览器刷新HMR(hot module replace)  
>模块热替换是修改了哪个模块只热加载哪个模块，其他模块状态不变，就不会丢失掉当前测试的整个前端保存的状态。 

```js
// webpack.config.js
module.exports = {
    target: "web",
    devServer: {
        static: "./abc",
        hot: true,
    },
}
```
```js
// aa.js
console.log('cdc');
let a = 110;
export default {
    a
}
```
```js{4-7}
// index.js
import "./aa";

// 需要热加载模块
if (module.hot) {
    module.hot.accept('./aa.js', () => console.log("aa.js模块更新了！"));
}
```
:::
::: tab label=热替换原理
>Vue-loader已自动支持模块热替换 
* 模块热加载原理：webpack起了一个express静态资源服务器，起了一个socket长连接服务实时推送信息。
* 服务器监听到模块发生变化后，向客户端推送变化模块：（manifist.json 和 updata chunk），浏览器就能进行实时更新。


:::
::: tab label=其他配置
```js
// webpack.config.js
const path = require('path');
module.exports = {
    // ...
    devServer: {
        static: "./public",
        hot: true,
        host: "0.0.0.0", // 可以开启ipv4访问
        port: 8888,
        open: true,  // 是否自动打开浏览器
        compress: true, // 是否开启gzip压缩
        proxy: {  // 是否开代理，开发阶段有效
            "/api": {
                target: "http://localhost:8070",
                pathRewrite: { "^/api": "" },
                secure: false, // 是否阻止非https请求转发
                changeOrigin: true, // 修改源，防数据服务器校验header
            }
        }
    },
    resolve: {
        extensions: [ '.js', '.json', '.vue', '.ts' ], // 默认后缀名
        alias: {
            "@": path.resolve(__dirname, "./src"), // 设置路径别名
            "js": path.resolve(__dirname, "./src/js"),
        }
    }
}

```
:::
::: tab label=区分环境
* 目录：将生产环境和开发环境做一个自定义配置，公公配置使用`webpack-merge`来合并
```txt
config
  |-webpack.comm.config.js
  |-webpack.dev.config.js
  |-webpack.prod.config.js
package.json
```
>package.json
```js
"scripts": {
    "build": "webpack --config ./config/webpack.prod.config.js",
    "serve": "webpack serve --config ./config/webpack.dev.config.js"
}
```
>webpack.comm.config.js
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  target: "web",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/bundle.js",
  },
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "js": path.resolve(__dirname, "../src/js")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]",
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "哈哈哈哈"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin()
  ],
};

```
>webpack.dev.config.js
```js{1,5}
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./public",
    hot: true,
    // host: "0.0.0.0",
    port: 7777,
    open: true,
    // compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": ""
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
})
```
>webpack.prod.config.js
```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');

const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
  ]
})
```
:::
::::
