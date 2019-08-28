Node没有全局作用域

- 模块中的**路径标识**，相对于**当前文件目录**，不受**Node命令所处路径影响**

### require 

- 加载文件模块并执行代码
- 拿到被加载文件模块导出的接口对象

### exports//导出模块

```
exports为module.exports的简写
//require真正引用的是module.exports，exports中保存的是地址指引
```

导出默认方法：//

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