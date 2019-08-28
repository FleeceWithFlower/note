Module

`import`命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行；

 

`import`和`export`命令只能在模块的顶层，不能在代码块之中（比如，在`if`代码块之中，或在函数之中）。；

 

`Import`，`export`本质是传输接口，接口不可以修改，但是如若接口是变量，变量中的内容可以修改。

 

**Import****使用方法**

import { stat, exists, readFile } from 'fs';

**export****使用方法**

```
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```

 

```
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
 
export {firstName, lastName, year};
```

输出函数

```
export function multiply(x, y) {
  return x * y;
};
```

**函数重命名**

```
function v1() { ... }
function v2() { ... }
 
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```

​         

```
// 正确
function f() {}
export {f};
f};
```

**模块整体加载**

用星号（`*`）指定一个对象，所有输出值都加载在这个对象上面。忽略default方法

```
// main.js
 
import { area, circumference } from './circle';
 
console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
```

上面写法是逐一指定要加载的方法，整体加载的写法如下。

```
import * as circle from './circle';
 
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
```

**export default** **命令（默认输出）**

一个模块只能有一个默认输出

```
export default function () {
  console.log('foo');
}
```

 

```
import customName from './export-default';
customName(); // 'foo'
```

本质上，`export default`就是输出一个叫做`default`的变量或方法，然后系统允许你为它取任意名字

```
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;
 
// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';
```

## 同时输入默认方法和其他接口

```
import _, { each, forEach } from 'lodash';
```

## export 与 import 的复合写法

如果在一个模块之中，先输入后输出同一个模块，`import`语句可以与`export`语句写在一起。

```
export { foo, bar } from 'my_module';
 
// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
```

`foo`和`bar`实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用`foo`和`bar`。

## import() 

**动态加载模块**

```
import('/modules/my-module.js')//地址
  .then((module) => {
    // Do something with the module.
  });// 
```

`Import()`中输入地址

`Then`中参数为`Symbol`对象，其中保存接口。