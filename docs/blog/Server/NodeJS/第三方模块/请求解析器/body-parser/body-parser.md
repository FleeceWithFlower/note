

## ##安装

```
npm i body-parse
```

## ##配合express

```
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post(function (req, res) {
  console.log(req.body)
})
```

