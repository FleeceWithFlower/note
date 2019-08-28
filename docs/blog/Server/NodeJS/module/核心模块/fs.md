## ## 读取文件

- **Node**中文件操作路径为执行**Node**命令所处的路径

### fs.readFile()

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



## ## 写文件

### fs.writeFile（）

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



## ## 获得目录列表

### fs.readdir（）

```
var fs=require('fs')
fs.readdir(dir,function (err,data) {
  console.log(data)
})
```

