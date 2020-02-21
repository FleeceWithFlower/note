# Express

## app

- app.mountpath

```
const app = express()
let admin  = express()
app.use(['/adm*n','/user'],admin)
console.log(admin.mountpath); // [ '/adm*n', '/user' ]
```



## 中间件

- multer

   	**解析	上传文件**

- cookie-parser

   	**解析	cookie**

- body- parser 

   	**解析	请求参数**

- morgan

   	**记录日志**

- file-stream-rotator

   	**分解日志**
  
- art-template  /  express-art-template

   	**模板引擎**



## 关键字



### express

- app

  ​	**创建express应用程序**

  ```
  lte express = require('express')
  let app = express()
  ```

- express.static(root,[options])

  ​	**托管应用内静态资源**

  ```
  app.use('/public/',express.static('./public/'))
  ```

- app.engine(ext,callback)

  ​	**注册给定引擎的回调**

  ```
  app.engine('art',require('express-art-template'))
  ```

- app.listen(port,[hostname],[callback])

  ​	**绑定程序监听端口到指定的主机和端口号**

- app.all(path,callback)

  ​	**匹配	所有请求方法**                                                                                                                                                                                                                                                                                                                                                                                                                              

- app.METHOD(path,callback)

  ​	**匹配	HTTP中的方法**

- app.param([name],callback)

  ​	**路由参数的回调触发器**

- app.use([path,], function [, function...])

  ​	**用于挂载中间件**

- app.set(name, value)

  ​	**设置	app.settings	中属性的值**

- app.get(name)

  ​	**获得	app.settings	中属性的值**

- app.route(path)

  ​	**获取	路由实例**

- app.locals

  ​	**获取	程序本地变量**

- app.path()

  ​	**获取	当前app路由的根路径**

- app.mountpath

  ​	**获取	子程序挂在的路径模式**

- app.on('mount',callback)

  ​	**子程序挂在到父程序时，触发mount事件。**

  ```
  admin.on('mount',function (parent) {console.log(parent)})
  ```

***

### Request

- req.app

  ​	**获取	express的实例** 

- req.baseUrl

  ​	**路由实例挂载的Url路径** 

- req.originalUrl

  ​	**获取	原版的请求链接** 

- req.body

  ​	**获取客服端传来的键值对**

- req.fresh

  ​	**指示这个请求是否是新鲜的** 

- req.hostname

  ​	**包含了源自HostHTTP头部的hostname。** 

- req.params

  ​	**获取	 路由中命名的参数** 

  ```
  req.params.name
  ```

- req.path

  ​	**包含请求URL的部分路径** 

- req.protocol

  ​	**请求的协议，一般为http** 

- req.query

  ​	**获取	query string参数** 

- req.route

  ​	**获取	 当前匹配的路由** 

- req.signedCookies

  ​	**获取	签名cookie**	

- req.get(field)

  ​	**返回指定的请求HTTP头部的域内容** 

- req.is(type)

  ​	**判读	Content-type  类型，即响应实体的	MIME_type**

  ```
  req.is('html')
  ```

- req.accepts(types)

  ​	**判读	Accept   类型，即请求实体的	MIME_type**

***

### Response

- res.headersSent

  ​	**判断	是否已经发送HTTP头部**  

- res.locals

  ​	**获取本次请求中的变量**

- res.append(field [, value])

  ​	**追加响应头**

- res.cookie(name, value [,options])

  ​	***设置*Set-Cookie*头部* 	设置对应的cookie** 

- res.clearCookie(name [,options])

  ​	**设置*Set-Cookie*头部 	清除对应的cookie** 

- res.download(path, [,filename], [,fn])

  ​	**传输path指定文件作为一个附件 并修改	 Content-Disposition  头部**

- res.end([data] [, encoding])

  ​	**用于快速结束响应**

- res.get(field)

  ​	**返回field指定的HTTP响应的头部** 

- res.json([body])

  ​	**发送一个json的响应** 

- res.jsonp([body])

  ​	**发送一个json的响应，并且支持JSONP。** 

- res.location(path)

  ​	**设置响应的LocationHTTP头部为指定的path参数。 状态码为3**时重定向。**

- res.redirect([status,] path)

  ​	**重定向来源于指定path的URL**

- res.render

  ​	**渲染视图** 

- res.send([body])

  ​	**发送HTTP响应。** 

- res.sendFile(path [, options] [, fn])

  ​	**传输path指定的文件。** 

- res.set(field [, value])

  ​	**设置响应对象的HTTP头部field为value** 

- res.status(code)

  ​	**设置响应对象的HTTP status** 

- res.type(type)

  ​	**设置Content-TypeHTTP头部的MIME type** 

***

### Router

​	**创建一个路由** 

```
var router = express.Router([options]);
```

