### 小程序与普通网页开发的区别

- 线程

::tip

*网页* : 开发渲染线程和脚本线程是互斥的

*小程序* :   二者是分开的

:::

- 面对环境

:::tip

*网页* : PC各种浏览器，移动端各种	*webview*

*小程序* :iOS 和 Android 的微信客户端,小程序运行环境如下

| **运行环境**     | **逻辑层**     | **渲染层**       |
| :--------------- | :------------- | :--------------- |
| iOS              | JavaScriptCore | WKWebView        |
| 安卓             | V8             | chromium定制内核 |
| 小程序开发者工具 | NWJS           | Chrome WebView   |

JSON配置

app.json

> 当前小程序的全局配置

 project.config.json

> 工具配置

 page.json













### 指令

#### 逻辑语法

- 胡子语法

#### 条件逻辑

-  wx:if 

```
<view wx:if="{{condition}}"> True </view>
```

#### 列表循环

- wx:for

```
<block wx:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
```

