## 1.引入模块

```
var http=require('http')
```

## 2.创建实例

```
var server=http.createServer()//创建实例
```

## 3.启动服务器

```
server.listen(8080,function () {
    console.log('    服务器启动成功，http://127.0.0.1：8080  ');
})//启动服务器
```

## 4.请求对象  request

```
server.on('request',function (request,response) 
{

}
```

### request.url 

- //请求地址
- 允许所有域访问

```
res.setHeader('Access-Control-Allow-Origin', '*')
```

## 5.响应对象  response

### response.write

- //发送一个请求主体的数据块。

### response.end

- 此方法向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成。 必须在每个响应上调用此 `response.end()` 方法。

### JSON.stringify(obj)

- response不能传对象，需要用JSON.stringify(obj)//将对象转换成JSON

### JSON.parse(str)

- JSON.parse(str)将字符串转换成对象

### 重定向 301

- 301转向(或叫[301重定向](https://baike.baidu.com/item/301重定向/1135400)，301跳转)是当用户或搜索引擎向网站服务器发出浏览请求时，服务器返回的HTTP数据流中头信息(header)中的状态码的一种，表示本网页永久性转移到另一个地址。

### 重定向 302

- 302重定向又称之为暂时性转移(Temporarily Moved )，英文名称：302 redirect。 也被认为是[暂时重定向](https://baike.baidu.com/item/暂时重定向/580233)（temporary redirect），一条对网站浏览器的指令来显示浏览器被要求显示的不同的URL，当一个网页经历过短期的URL的变化时使用。一个暂时重定向是一种服务器端的重定向，能够被[搜索引擎蜘蛛](https://baike.baidu.com/item/搜索引擎蜘蛛/9781549)正确地处理。

- Location响应报头域用于重定向接受者到一个新的位置。例如：客户端所请求的页面已不存在原先的位置，为了让客户端重定向到这个页面新的位置，服务器端可以发回Location响应报头后使用重定向语句，让客户端去访问新的域名所对应的服务器上的资源。

```
response.statusCode=302
response.setHeader('Location','/')
response.end()
```







```
var http=require('http')

var server=http.createServer()//创建实例

server.listen(8080,function () {
    console.log('    服务器启动成功，http://127.0.0.1：8080  ');
})//启动服务器

server.on('request',function (request,response) {
    console.log(request.url);//访问的url
    let a ={
        a:1,
        b:2
    }

    if(request.url==='/'){
        response.end(JSON.stringify(a))//响应必须用end结束
        console.log(a);
    }else{
console.log('1')
    }
    
})//接受请求
```

