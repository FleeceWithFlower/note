# #mongoose

## ＃＃配置

1.下载包

```
npm i mongoose
```

2.引包

```
var mongoose = require('mongoose');
```

3.链接数据库

```
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
```

4.设计Schema

```
var kittySchema = mongoose.Schema({
  "username":{ type: String, required: true },
  "password":{ type: String, required: true },
  "emailAddress":String,
   "date": { type: Date,default: Date.now},
});
```

5.发布model

```
var Kitten = mongoose.model('Kitten', kittySchema);
```

## ＃＃增删改查（ＣＲＵＤ）

### ###增加（Create）

#### ####创建实例

```
var felyne = new Kitten({ name: 'Felyne' });
```

#### ####储存

```
felyne.save(function (err, felyne)
{

    if (err) return console.error(err);
    felyne.speak();

})
```



### ###读取查询(Retrieve)

#### #### find()

返回所有指定属性数组

```
<model>.find(
{
     name:'Lily'
     
},
     
 function(err,data)
 {
  
     console.log('data')
                 
  })
```



#### #### findOne()

返回第一个指定属性对象

```
<model>.find(
{
     name:'Lily'
     
},
     
 function(err,data)
 {
  
     console.log('data')
                 
  })
```



### ###更新(Update)

```
<model>.findByIdAndUpdate(<id>:String,
{
 name:'Lily'
},
     
 function(err,ret)
 {
     console.log(ret)    
 })    
```



### ###删除(Delete)

```
<model>.remove(
{
     name:'Lily'
     
},
     
 function(err)
 {
  if(err)
  {
    console.log(err)
  }
  else
  {
   console.log('success')
  }
   })    
```







# #code

```
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var felyne = new Kitten({ name: 'Felyne' });
console.log(felyne.name); // 'Felyne'

felyne.speak(); // "Meow name is fluffy"

felyne.save(function (err, felyne) {
    if (err) return console.error(err);
    felyne.speak();
});

Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})
```

