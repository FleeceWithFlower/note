# Node

## ***Node***中特殊成员

###   require

###   exports

###   __dirname

- 获得当前文件所属目录的绝对路径

###  __filename

- 获得当前文件的绝对路径

***

## 社区中代码风格规范：

#### [JavaScript Standard Style](https://standardjs.com/)

#### Airbnb JavaScript Style

***

## 核心模块

### path

> #### path.join
>
> - `path.join()` 方法使用平台特定的分隔符作为定界符将所有给定的 `path` 片段连接在一起，然后规范化生成的路径。
> - 参数
>   - \<string\> 路径片段的序列
> - 返回
>   - \<string\> 生成的路径
>
> ```
> let a = path.join('index','fofo')
> console.log(a);
> // index/fofo
> ```
>
> #### path.dirname
>
> - `path.dirname()` 方法返回 `path` 的目录名
> - 参数
>   - \<string> 路径
> - 返回
>   - \<string> 目录名
>
> ```
> let dirname = path.dirname('hello/world/index')
> console.log(dirname);
> //  hello/world
> ```
>
> #### path.extname
>
> - `path.extname()` 方法返回 `path` 的扩展名
> - 参数
>   - \<string> 路径
> - 返回
>   - \<string> 扩展名
>
> ```
> let extname = path.extname('hello/index.js')
> console.log(extname);
> //  .js
> ```
>
> 
>
> #### path.basename
>
> - `path.basename()` 方法返回 `path` 的最后一部分,如果添加了第二参数，则返回不带后缀名的path
> - 参数
>   - `path` \<string> 路径
>   - ext \<string> 扩展名
> - 返回
>   - \<string> 扩展名
>
> ```
> let basename = path.basename('hello/index.js')
> console.log(basename);
> //  index.js
> ```
>
> 添加第二参数
>
> ```
> let basename = path.basename('hello/index.js'，'.js')
> console.log(basename);
> //  index
> ```
>
> 
>
> #### path.format()
>
> - 从对象返回路径字符串
> - 参数
>   - `pathObject`\<object> 路径对象
>     - `dir`
>     - `root`
>     - `base` 
>     - `name` 
>     - `ext` 
> - 返回
>   - path\<string> 路径字符串
> - 如果提供了 `pathObject.dir`，则忽略 `pathObject.root`。
> - 如果 `pathObject.base` 存在，则忽略 `pathObject.ext` 和 `pathObject.name`。
>
> ```
> path.format({
> dir: 'C:\\path\\dir',
> base: 'file.txt'
> });
> // 返回: 'C:\\path\\dir\\file.txt'
> ```
>
> 
>
> #### path.isAbsolute
>
> - `path.isAbsolute()` 方法检测 `path` 是否为绝对路径。
> - 参数
>   - path\<string>
> - 返回
>   - \<boolean>
>
> ```
> path.isAbsolute('C:/foo/..');   // true
> ```
>
> 
>
> #### path.normalize
>
> - `path.normalize()` 方法规范化给定的 `path`
> - 参数
>   - path \<string>
> - 返回
>   - path \<string>
>
> #### path.parse
>
> - ``path.parse()` 方法返回一个对象，其属性表示 `path` 的重要元素。
> - 参数
>   - path\<string>
> - 返回
>   - path \<Object>
>     - `dir` \<string>
>     - `root` \<string>
>     - `base` \<string>
>     - `name` \<string>
>     - `ext` \<string>
>
> POSIX 
>
> ```text
> ┌─────────────────────┬────────────┐
> │          dir        │    base    │
> ├──────┬              ├──────┬─────┤
> │ root │              │ name │ ext │
> "  /    home/user/dir / file  .txt "
> └──────┴──────────────┴──────┴─────┘
> ```
>
> Windows
>
> ```text
> ┌─────────────────────┬────────────┐
> │          dir        │    base    │
> ├──────┬              ├──────┬─────┤
> │ root │              │ name │ ext │
> " C:\      path\dir   \ file  .txt "
> └──────┴──────────────┴──────┴─────┘
> ```
>
> ```
> let a =path.parse('C:\\path\\dir\\file.txt');
> console.log(a);
> /*
> { root: 'C:\\',
> dir: 'C:\\path\\dir',
> base: 'file.txt',
> ext: '.txt',
> name: 'file' }
> */
> ```
>
> 
>
> #### path.relative(from, to)
>
> - `path.relative()` 方法根据当前工作目录返回 `from` 到 `to` 的相对路径。
> - 参数
>   - from\<string>
>   - to\<string>
> - 返回
>   - path \<string> 相对路径
>
> ```
> let a =path.relative('C:\\path\\dir','C:\\path');
> console.log(a);
> 
> // ..
> ```
>
> 
>
> #### path.resolve
>
> - ``path.resolve()` 方法将路径或路径片段的序列解析为绝对路径。
> - 如果没有传入 `path` 片段，则 `path.resolve()` 将返回当前工作目录的绝对路径
> - 参数
>   - path\<string> 路径或路径片段的序列。
> - 返回
>   - path \<string> 绝对路径
>
> ```
> let a =path.resolve('/foo/bar', '/tmp/file/');
> console.log(a);
> 
> // C:\tmp\file
> 
> let a =path.resolve('/foo/bar', 'tmp/file/');
> console.log(a);
> 
> // C:\foo\bar\tmp\file
> ```
>
> 
>
> #### path.sep
>
> - 提供平台特定的路径片段分隔符：
>   - Windows 上是 `\`。
>   - POSIX 上是 `/`。
>
> ```
> let a =path.sep
> console.log(a);
> 
> //  \
> ```
>
> 
>
> #### path.toNamespacedPath(path)
>
> - 仅在 Windows 系统上，返回给定 `path` 的等效[名称空间前缀路径](http://nodejs.cn/s/cVsGGE)。
> - 参数
>   - path\<string> 路径
> - 返回
>   - path \<string> 绝对路径
>
> ```
> let a =path.toNamespacedPath('C:\\CloudMusic')
> console.log(a);
> 
> // \\?\C:\CloudMusic
> ```
>
> 
>
> ##### 待续····
>
> #### Windows 与 POSIX
>
> #### path.posix
>
> #### path.win32
>
> #### path.delimiter
>
> #### 

### fs

> 读取文件

- **Node**中文件操作路径为执行**Node**命令所处的路径

#### fs.readFile()

1.加载文件系统

```
var fs =require('fs')
//fs => filesystem /文件系统 
//fs核心模块 提供api
```

2.读取文件

- 参数一:filename

- 参数二:callback

​             参数1:error //错误对象，如果读取成功error=null

​             参数2:data //读取到的数据

```
fs.readFile('',function(){})
```



>  写文件

#### fs.writeFile（）

- //写文件

1. 参数一：地址
2. 参数二:数据
3. 参数三:回调函数

​             参数1:error //错误对象，如果读取成功error=null

```
var fs =require('fs')

fs.writeFile('./a.txt','hello world',(error)=>{
    console.log( error);
}  )
```



> 获得目录列表

#### fs.readdir（）

```
var fs=require('fs')
fs.readdir(dir,function (err,data) {
  console.log(data)
})
```

### http

#### 1.引入模块

```
var http=require('http')
```

#### 2.创建实例

```
var server=http.createServer()//创建实例
```

#### 3.启动服务器

```
server.listen(8080,function () {
    console.log('    服务器启动成功，http://127.0.0.1：8080  ');
})//启动服务器
```

#### 4.请求对象  request

```
server.on('request',function (request,response) 
{

}
```

###### request.url 

- //请求地址
- 允许所有域访问

```
res.setHeader('Access-Control-Allow-Origin', '*')
```

#### 5.响应对象  response

###### response.write

- //发送一个请求主体的数据块。

###### response.end

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

### url



```
var url = require('url')
var obj = url.parse('/asd?name=阿萨德&messs=a阿萨德',true)
console.log(obj.query.name);
```



### module

Node没有全局作用域

- 模块中的**路径标识**，相对于**当前文件目录**，不受**Node命令所处路径影响**

#### require 

- 加载文件模块并执行代码
- 拿到被加载文件模块导出的接口对象

#### exports

> 导出模块

```
exports为module.exports的简写
//require真正引用的是module.exports，exports中保存的是地址指引
```

导出默认方法：

```
//js.js
let uurl=require('./url')
uurl()
//congole  '哈哈哈'
```



```
//url.js
function a (){
    console.log('哈哈哈')
}
module.exports=a
```

导出指定方法

```
//js.js
let uurl=require('./url')
uurl.hah()
//congole  '哈哈哈'
```

```
//url.js
function a (){
    console.log('哈哈哈')
}
exports.hah=a
```



- exports默认是空对象
- 路径 不能省略./
- 二进制使用toString()

## node API笔记

### buffer

为了使 `Buffer` 实例的创建更可靠且更不容易出错，各种形式的 `new Buffer()` 构造函数都已被弃用，且改为单独的 `Buffer.from()`，[`Buffer.alloc()`](http://nodejs.cn/s/Du96og) 和 [`Buffer.allocUnsafe()`](http://nodejs.cn/s/TWpeWk) 方法。

