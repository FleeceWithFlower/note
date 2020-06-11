# react-redux

- 安装

```
npm install --save react-redux
npm install --save-dev redux-devtools //调试工具
```

配置 redux-devtools

```
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```

store

```
import {createStore} from 'redux'
import reducer from './reducer'
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default  store
```

- getState

  > 读值

- subscribe

  > store改变时触发函数

- setState

  >subscribe触发函数,调用setState更新视图

```
    constructor(props){
        super(props)
        this.state=store.getState()
        store.subscribe(this.changeStore)
    }
	changeStore=()=>{
        this.setState(store.getState())
    }
```

reducer

> 接收旧的 state 和 action，返回新的 state

```
const defaultState = {
    person:{
        name:'K',
        age:'24'
    }
}
export default (state = defaultState,action)=>{
    return state
}
```



action*

*reducer*

::: warn

1. store唯一

2. store接收reducer返回的新state并改变

3. reducer里必须为纯函数，**只要传入参数相同，返回计算得到的下一个 state 就一定相同。**

   **永远不要**在 reducer 里做这些操作：

   - 修改传入参数；
   - 执行有副作用的操作，如 API 请求和路由跳转；
   - 调用非纯函数，如 `Date.now()` 或 `Math.random()`。