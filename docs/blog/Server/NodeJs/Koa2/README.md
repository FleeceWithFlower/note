# KOA2

 Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。 

```
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
```



## 关键字

### 设置

-  app.env 

  环境变量

-  app.keys 

   签名的 cookie 密钥数组 

### app

- app.listen()

  语法糖 ，监听端口

  ```js
  http.createServer(app.callback()).listen(3000);
  ```

- app.use()

  中间件

- app.keys

   设置签名的 Cookie 密钥。 	

- app.on

  触发事件

  ```
  app.on('error', err => {
    log.error('server error', err)
  });
  ```

### Context

 Koa Context 将 node 的 `request` 和 `response` 对象封装到单个对象中 

- ### ctx.req

  Node 的 `request` 对象.

- ### ctx.res

  Node 的 `response` 对象

- ### ctx.request

  koa 的 `Request` 对象.

- ### ctx.response

  koa 的 `Response` 对象.

- ### ctx.state

   推荐的命名空间，用于通过中间件传递信息和你的前端视图 

- ### ctx.app

   应用程序实例引用 

- ### ctx.app.emit

  触发事件

- ctx.cookies.get(name, [options])

  获取cookie

- ctx.cookies.set(name, value, [options])

  设置cookie

- ctx.throw([status], [msg], [properties])

   用来抛出一个包含 `.status` 属性错误的帮助方法 	

- ctx.assert(value, [status], [msg], [properties])

   当 `!value` 时抛出一个类似 `.throw` 错误的帮助方法。 

### Request

- request.headers

   请求头对象 

- request.method

   请求方法 

- request.url

   获取请求 URL. 

- request.originalUrl

   获取请求原始URL 

- ### request.origin

   获取URL的来源 

- ### request.href

   获取完整的请求URL

- ### request.path

   获取请求路径名。 

- ### request.querystring

   根据 `?` 获取原始查询字符串.//返回字符串无 ？

- ### request.search

   使用 `?` 获取原始查询字符串。//返回字符串有 ？

- request.query

   获取解析的查询字符串 ，返还对象

- ### request.type

   获取请求 `Content-Type` 

- ### request.charset

   存在时获取请求字符集 

### Response

- ### response.headers

   响应头对象 

- response.get(field)

   不区分大小写获取响应头字段值 `field`。 

- response.set(field, value)

   设置响应头 `field` 到 `value`:

- response.has(field)

  判断是否有响应头

- response.append(field, value)

  附加响应头

- response.remove(field)

  删除响应头	

- ### response.status

   获取/设置 响应状态

- ### response.message

   获取/设置 响应的状态消息 

- response.body

   获取响应主体。 

- response.redirect(url, [alt])

  执行重定向