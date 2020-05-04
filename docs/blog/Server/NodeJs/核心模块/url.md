

```
var url = require('url')
var obj = url.parse('/asd?name=阿萨德&messs=a阿萨德',true)
console.log(obj.query.name);
```

