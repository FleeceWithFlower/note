### app.mountpath

```
const app = express()
let admin  = express()
app.use(['/adm*n','/user'],admin)
console.log(admin.mountpath); // [ '/adm*n', '/user' ]
```





### 关键字

- app

  > 创建express应用程序

  ```
  lte express = require('express')
  let app = express()
  ```

- express.static(root,[options])

  > 托管应用内静态资源

  ```
  app.use('/public/',express.static('./public/'))
  ```

- app.locals

  > 程序本地变量

  ```
  app.locals.title
  ```

- app.mountpath

  > 子程序挂在的路径模式

- app.on('mount',callback)

  > 子程序挂在到父程序时，触发mount事件。

  ```
  admin.on('mount',function (parent) {console.log(parent)})
  ```

- app.all(path,callback)

  > 匹配	所有请求方法                                                                                                                                                                                                                                                                                                                                                                                                                              

- app.METHOD(path,callback)

  >匹配	HTTP中的方法

  ```
  app.get('/',callback)
  ```

- app.disable(name)

  > 禁用	app.settings	中的属性

- app.enable(name)

  > 启用	app.settings	中的属性
  
- app.engine(ext,callback)

  > 注册给定引擎的回调

  ```
  app.engine('art',require('express-art-template'))
  ```

- app.get(name)

  > 获得	app.settings	中属性的值

- app.listen(port,[hostname],[callback])

  > 绑定程序监听端口到指定的主机和端口号

- app.param([name],callback)

  > 路由参数的回调触发器

- app.path()

  > 获取	当前app路由的根路径

- app.render(view,[locals],callback)

  > 渲染视图

  ```
  res.render('index.art',{userName:'jack'})
  ```

  