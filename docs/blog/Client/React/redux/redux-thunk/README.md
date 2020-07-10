#  [redux-*thunk*](https://github.com/reduxjs/redux-thunk) 

`react-redux`中间件

## Why Do I Need This?

​	  基于`Redux `只能通过调度操作来执行简单的同步更新 ,中间件扩展了功能，并允许编写与商店交互的异步逻辑。 

##  What did this do 

​	redux-thunk封装了dispatch，如果传参为函数，它会向函数中传递dispath，返回我们自定义函数，否则redux为同步。

## 配置

```
//向redux添加中间件redux-thunk
import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk';
const  index = createStore(
    reducers,
    applyMiddleware(thunk)	

)
export default index
```

## 架构

1. 将store视为独立于项目的数据仓库，以`state`为基准向上设计
2. 设计`action`和`reducer`确定 更改`state`的行为方式和参数
3. 最上层通过调用`action`传相应参数执行动作