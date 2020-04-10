## ## 引入express

```
var express = require('express')
```



## ## 创建服务

```
var app = express()
```



## ## 监听端口

```
app.listen(3000,function () {
    console.log('服务器启动成功');
})
```



## ## 公开指定目录

```
app.use('/public/',express.static('./public/'))
```



## ## 配置请求与响应

```
app.get('/',function(req,res){
res.send('hello express，你好')
})
```

