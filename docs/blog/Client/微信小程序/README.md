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



## WXML

> WXML（WeiXin Markup Language）是框架设计的一套标签语言 , 可以构建出页面的结构 

### 逻辑语法

- 胡子语法

### 条件逻辑

-  wx:if 

- wx:elif
- wx:else

### 列表循环

- wx:for

```
<block wx:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
```

### 模板

```
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
```

- 引用

```
<import src="item.wxml"/>

<template is="item" data="{{text: 'forbar'}}"/>
```

### 事件

- bind:tap

- catch:tap

  > 阻止冒泡事件

- 互斥事件

  - mut-bind:tap

  >只会出发一次mut-bind事件

  

- 捕获阶段

  > 捕获阶段位于冒泡阶段之前 , 事件到达节点的顺序与冒泡阶段恰好相反。 

  

  -  capture-bind

    > 捕获阶段绑定事件	

  -  capture-catch 

    >  中断捕获阶段和取消冒泡阶段 	

- 事件对象

  -  currentTarget 

    > 当前组件的属性值集合

    

  - target

    > 触发事件的组件的一些属性值集合 

    

  - ### detail

    > 自定义事件所携带的数据，如表单组件的提交事件会携带用户的输入

- wxs事件（待补充）

## WXSS

> WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式。 

###  style 

> 用于动态解析

:::warn

 静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 style 中，以免影响渲染速度。 

:::

### class

>  用于指定样式规则 

### 全局样式

> 定义在 app.wxss 中 

### 样式导入

-  @import 

```less
@import "common.wxss";
```

## WXS

> WXS（WeiXin Script）是小程序的一套脚本语言，结合 `WXML`，可以构建出页面的结构。 

:::tip

主要用于纯函数的计算，ios上会比javascript 快 2 ~ 20 倍 

:::

## JS

### App

> 用于构造小程序，整个小程序只有一个 App 实例，是全部页面共享的。开发者可以通过 `getApp` 方法获取到全局唯一的 App 实例

#### 生命周期

-  onLaunch  

```
当小程序初始化完成时
```



-  onShow  

```
当小程序启动，或从后台进入前台显示	
```



-  onHide  

```
当小程序从前台进入后台
```



-  onError 

```
当小程序发生脚本错误
```



-  其他字段 

```
可以添加任意的函数或数据到 Object 参数中，在App实例回调用 this 可以访问
```

### Page 



### 路由

-  navigateTo

> 打开新页面

-  [navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html) 

> 页面返回 

-  redirectTo 

> 页面重定向 

-  switchTab 

> Tab 切换 

-  reLaunch 

>  重启动 

### Ref

-  [SelectorQuery](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html) 

  >查询节点信息的对象

```
wx.createSelectorQuery() //创建节点对象
```

- [NodesRef](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html) 

  > 用于获取 WXML 节点信息的对象 

```
   wx.createSelectorQuery().select('#testChild').fields({id:true},function (res) {
      console.log(res.id)
    }).exec()
```

