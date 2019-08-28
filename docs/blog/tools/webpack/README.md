# WEBPACK

JS模块打包器

- 默认支持js、import 、export
- 默认支持 JSON



## 安装

```
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

## webpack.config.js

```
const path = require('path')
const config = {
    entry:'./src/main',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'main.js'
    },
    module:{
            rules:[]
    },
    plugins:[]
}
module.exports=config

```



## 模式

- mode

  - production

    - cli

      - ```
        webpakck -p
        ```

    - 默认内部启动uglifyjs 插件

  - development 

- process.env.NODE_ENV
  
  - node.js 全局变量

## HTML

### html-webpack-plugin

- This is a [webpack](http://webpack.js.org/) plugin that simplifies creation of HTML files to serve your `webpack` bundles. 
- 动态创建idnex.html

```
npm install --save-dev html-webpack-plugin
```

- ```
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  ----------------------
  new HtmlWebpackPlugin({
     title: 'My App'
  }),
  
  ```
## 图片/字体

### file-loader

- The `file-loader` resolves `import`/`require()` on a file into a url and emits the file into the output directory.

```
npm install --save-dev file-loader
```

- ```
  {
      test: /\.(png|svg|jpg|gif)$/,
       loader : 'file-loader',
       options:{
          outputPath:'images'
                }
   },
  
  ```

- ```
  {
     test: /\.(woff|woff2|eot|ttf|otf)$/, 
     use: ['file-loader']
     }
  ```

  

## 数据

### csv-loader

### xml-loader

- The loader will translate the `data.xml` file into a JSON Object. [node-xml2js processors](https://github.com/Leonidas-from-XIV/node-xml2js#options) are supported via query syntax.
- 将XML转换成JSON

- 

  ```
  npm install --save-dev  xml-loader
  ```

  

- ```
  { test: /\.xml$/, loader: 'xml-loader' }
  ```

  



## 模板  //待补充

```
html-webpack-template
```

## 清理目录

### Clean plugin for webpack

- By default, this plugin will remove all files inside webpack's `output.path` directory, as well as all unused webpack assets after every successful rebuild.

- 默认情况下，此插件将删除webpack `output.path`目录中的所有文件，以及每次成功重建后所有未使用的webpack资产。

- ```
  npm install clean-webpack-plugin --save-dev
  ```

- ```
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  --------------------------
  new CleanWebpackPlugin()
  ```

  

## 生成资产清单

### webpack-manifest-plugin

- 用于生成资产清单的Webpack插件。

- 根目录中生成manifest.json

- ```
  const ManifestPlugin = require('webpack-manifest-plugin');
  -------------------------
   new ManifestPlugin()
  ```

   	

```
npm install --save-dev webpack-manifest-plugin
```

## 开发工具

### source map

- *切勿同时使用* `devtool` *选项和* `SourceMapDevToolPlugin`*/*`EvalSourceMapDevToolPlugin` *插件*

#### source-map-loader

- 开发模式 => cheap-module-eval-source-map
- 生产模式 => none

#### SourceMapDevToolPlugin

### webpack's Watch Mode

- ```diff
  "watch": "webpack --watch",
  ```

### webpack-dev-server

- ```
  devServer: {
       contentBase: './dist'
     }
  ```

  - hot module replacement
    - 热模块替换



### webpack-dev-middleware

- ```
  "serve": "webpack-dev-server --open",
  ```

- 配置

  - contentBase
    - 目录

  - compress
    - 是否gzip 压缩

  - host
    - host

  - port
    - 端口号

  - headers
    - 添加响应头

  - hot
    - 启用 webpack 的模块热替换特性

  
## Babel

- JavaScript 编译器
  - 语法转换
  - 通过 Polyfill 方式在目标环境中添加缺失的特性
  - 源码转换 

- ```
  npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack --save-dev
  npm install --save-dev @babel/polyfill
  ```

  - babel.config.js

    ```
    const presets = [
      [
        "@babel/env",
        {	
          targets: {
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1",
          },
          useBuiltIns: "usage",
        },
      ],
    ];
    
    module.exports = { presets };
    ```

- babel-loader
  
- es6语法转化为es5语法
  
- babel-core
  
- api接口
  
- babel-preset-env
  
- 指定环境
  
- babel-polyfill
  
- 模仿ES2015环境，向全局添加对象。如Promiss
  
- babel-runtime babel-plugin-transform-runtime
  
  - 避免重复引入辅助代码，比如 `_extend`



## uglify-js 

- UglifyJS是一个JavaScript解析器，minifier，压缩器和美化工具包。

- ```
  npm install uglify-js --save-dev
  ```

  

## Polyfill

- Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。

## tree shaking

- 用于描述移除 JavaScript 上下文中的未引用代码(dead-code)

- ## side-effect-free

  - 无副作用

  - ```
    "sideEffects": false
    ```

  - webpack，它可以安全地删除未用到的 export 导出

- dead code
  
- 未引用代码
  
- minifier
  
  - 压缩工具

## webpack-merge

- webpack配置工具

- ```
  npm install --save-dev webpack-merge
  ```

  

## 代码分离

-  SplitChunksPlugin

- [`ExtractTextPlugin`](https://www.webpackjs.com/plugins/extract-text-webpack-plugin)
- [`bundle-loader`](https://www.webpackjs.com/loaders/bundle-loader)
- [`promise-loader`](https://github.com/gaearon/promise-loader)

## 动态导入

## Webpack Bundle Analyzer

- Visualize size of webpack output files with an interactive zoomable treemap.

- 使用交互式可缩放树形图可视化webpack输出文件的大小。

- ```
  npm install --save-dev webpack-bundle-analyzer
  ```

- ```
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  
  module.exports = {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }
  ```

  
