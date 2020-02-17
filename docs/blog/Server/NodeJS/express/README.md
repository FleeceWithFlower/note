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

- app.delete(path,callback)

  > 匹配	delete方法

- app.disable(name)

  > 禁用	app.settings	中的属性

- app.enable(name)

  > 启用	app.settings	中的属性