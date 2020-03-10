# Mongoose

## Schema

 Mongoose 的一切始于 Schema。每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成。 

```
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var blogSchema = new Schema({
    title:  String
  });
```

##  model  

 [Models](http://www.mongoosejs.net/docs/api.html#model-js) 是从 `Schema` 编译来的构造函数。 它们的实例就代表着可以从数据库保存和读取的 [documents](http://www.mongoosejs.net/docs/documents.html)。 从数据库创建和读取 document 的所有操作都是通过 model 进行的 

```
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);
```

## Documents

Documents 是 `model` 的实例 

## package

- dotenv

  配置环境变量

- 

- 

## 关键字

- Schema

  **用于定义文档结构**

- model

   **用于创建 `Documents` **

- Documents 

  **用于操作数据库**







- Schema.prototype.set()

   读/写 schema 的一个选项。 

- Schema.prototype.get()

   读取 schema 的一个选项。 

### Validators

- Numbers.min

  最小值

- Numbers.mix

  最大值

- Strings.enum

  枚举

- Strings.match

  正则

- Strings.maxlength	

  最大字符长度

- Strings.minlength

  最字符长度

-  自定义 

   验证是一个[中间件](http://www.mongoosejs.net/docs/middleware.html)。它默认作为 pre('save')` 钩子注册在 schema 上 

```
        validate: {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid phone number!'
        },
```



### Models

- Model.find()

  查询文档

- Model.findById()	

  通过 ID	查询文档 

- Model.findOne()

  返回一个 匹配的 文档

- Model.findOneAndUpdate()

  返回一个 匹配的 文档并更新	

- Model.findByIdAndUpdate()

  通过ID 返回 文档并更新

- Model.remove()

  删除所有匹配的文档 

- Model.findOneAndRemove()

  返回一个 匹配的 文档并删除	

- Model.findByIdAndRemove()

  通过ID 返回 文档并删除

### Query

- Query.prototype.select()

  指定返回结果 包含或排除 字段

- Query.prototype.exec()

  执行查询	

### Populate

 可以让你在别的 collection 中引用 document 	







