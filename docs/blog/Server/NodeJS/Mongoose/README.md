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

## 关键字

- Schema

  **用于定义文档结构**

- model

   **用于创建 `Documents` **

- Documents 

  **用于操作数据库**