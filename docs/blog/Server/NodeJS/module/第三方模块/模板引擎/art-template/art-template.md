## ##安装

```
npm i art-template
```

## ##引用

```
var template = require('art-template');
```

## ##核心方法

### ### template

- template(filename, content)
- // 基于模板名渲染模板
- 参数
  - 文件名
  - 规则

```
let html=template('C:\\Users\\K\\Desktop\\art-template\\hello.html', {
    hello:'hello world'
})
console.log(html);
```



### ### template.compile

- template.compile(source, options)
- // 将模板源代码编译成函数
- 参数
  - 模板

```
var render = template.compile('hi, <%=value%>.');
//返回函数
var html = render({value: 'aui'});//函数添加规则
console.log(html);
    
```



### ### template.render

- template.render(source, data, options);

- // 将模板源代码编译成函数并立刻执行
- 参数
  - 模板
  - 规则

```
    fs.readFile('./hello.html',function (err,data) {
        let html=template.render(data.toString(), {
                hello:'hello world'
            })
        console.log(html);
        response.end(html)
    })

```



### 模板继承

```
{{extend './layout.art'}}
{{block 'head'}} ... {{/block}}
```

### 子模板

```
{{include './header.art'}}
{{include './header.art' data}}
```

