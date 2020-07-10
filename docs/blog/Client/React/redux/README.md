# redux

## Why Do I Need This?

全局响应式状态管理

 管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。**state 在什么时候，由于什么原因，如何变化已然不受控制。** 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。 

 这里的复杂性很大程度上来自于：**我们总是将两个难以理清的概念混淆在一起：变化和异步**。 我称它们为[曼妥思和可乐](https://en.wikipedia.org/wiki/Diet_Coke_and_Mentos_eruption)。如果把二者分开，能做的很好，但混到一起，就变得一团糟。一些库如 [React](http://facebook.github.io/react) 试图在视图层禁止异步和直接操作 DOM 来解决这个问题。美中不足的是，React 依旧把处理 state 中数据的问题留给了你。Redux就是为了帮你解决这个问题。 

## 安装

```
npm install --save react-redux
npm install --save-dev redux-devtools //调试工具
```

## 配置

-  redux-devtools

```
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```

- store


```
import {createStore} from 'redux'
import reducer from './reducer'
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default  store
```

##  Action 

 强制使用 action 来描述所有变化带来的好处是可以清晰地知道应用中到底发生了什么 , 描述发生了什么的指示器

 我们约定，action 内必须使用一个字符串类型的 `type` 字段来表示将要执行的动作。 	

 State 不能被自身修改，只能由特定的 action 引起变化。 

 当我们的应用中每一个 action 被发起以及每次新的 state 被计算完成时都将它们记录下来 

## Dispatch 

传递 有效载荷 

## reducer 

 Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。 

 reducer 只是一个接收 state 和 action，并返回新的 state 的函数 

## Store

 **整个应用的 [state](https://www.redux.org.cn/docs/Glossary.html#state) 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 [store](https://www.redux.org.cn/docs/Glossary.html#store) 中。** State 是只读的, **唯一改变 state 的方法就是触发 [action](https://www.redux.org.cn/docs/Glossary.html#action)，action 是一个用于描述已发生事件的普通对象。** 

-  [`getState()`](https://www.redux.org.cn/docs/api/Store.html#getState) 

   方法获取 state 

-  [`dispatch(action)`](https://www.redux.org.cn/docs/api/Store.html#dispatch) 

  >  方法更新 state 

- [`subscribe(listener)`](https://www.redux.org.cn/docs/api/Store.html#subscribe) 

   注册监听器 
  
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

- unsubscribe

  停止监听 state 更新

 再次强调一下 **Redux 应用只有一个单一的 store**。当需要拆分数据处理逻辑时，你应该使用 [reducer 组合](https://www.redux.org.cn/docs/basics/Reducers.html#splitting-reducers) 而不是创建多个 store。 

## reducer

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

## Store

##  connect 

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

## 数据流

 **严格的单向数据流**是 Redux 架构的设计核心。 

1.  **调用** [`store.dispatch(action)`](https://www.redux.org.cn/docs/api/Store.html#dispatch) 
2.  [Store](https://www.redux.org.cn/docs/basics/Store.html) 会把两个参数传入 [reducer](https://www.redux.org.cn/docs/basics/Reducers.html)： 当前的 state 树和 action。 **调用传入的 reducer 函数** 
3.  **根 reducer 把多个子 reducer 输出合并成一个单一的 state 树** 
4. 触发 [`store.subscribe(listener)`](https://www.redux.org.cn/docs/api/Store.html#subscribe) 监听

## 中间件

 帮助你[用简便的方式来描述异步的 action](https://www.redux.org.cn/docs/advanced/AsyncActions.html)。 

 **它提供的是位于 action 被发起之后，到达 reducer 之前的扩展点。** 

 middleware 是指可以被嵌入在框架接收请求到产生响应过程之中的代码。 

  [`applyMiddleware()`](https://www.redux.org.cn/docs/api/applyMiddleware.html) 

##  action creators 

统一action处理方式，约束参数