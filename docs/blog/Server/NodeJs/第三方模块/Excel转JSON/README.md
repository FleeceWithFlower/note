## xls-to-json

```
const  path = require('path')
const input= path.join(__dirname, './static/a.xls')
const output= path.join(__dirname,'/static/a.json')

node_xj = require("xls-to-json");
node_xj({
    input: input,  // input xls
    output:output, // output json
    rowsToSkip: 1
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
```

