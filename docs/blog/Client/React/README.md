

### Cli（脚手架）

```
npx create-react-app my-app
```

### 自定义配置

安装

```
npm i react
npm i react-dom
```

jsx安装

```
npm i @babel/core -D
npm i babel-loader -D
npm i @babel/plugin-transform-runtime -D
npm i @babel/preset-env -D
npm i @babel/preset-react -D
```



.babelrc

```
{
  "presets": ["@babel/preset-react","@babel/preset-env"],
  "plugins":["@babel/plugin-transform-runtime"]
}
```

webbpack.config.js

```
const config ={
module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use:'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
```

### 组件

- 函数定义组件

```
//开头字母大写
function MyComponent(){
	return <div>我是组件1</div>
}
```

- class定义组件

  > 与函数定义组件区别，有私有数据和生命周期

```
class MyComponent extends React.Component{
	constructor(){
		super()
		this.state={
			count:0
		}
	}
	render(){
		return <div>我是组件1</div>
	}
}
```



### props 

- 函数组件

```
function MyComponent(props){
	return <div>{props.person.name}</div>
}
let person={
    name:'小明',
    age:'5岁'
}
let dom = <MyComponent person={person}></MyComponent>
```

- class组件

```
class MyComponent extends React.Component{
	render(){
		return <div>{person.name}</div>
		//return <div>{this.props.person.name}</div>
	}
}
let person={
    name:'小明',
    age:'5岁'
}
let dom = <MyComponent person={person}></MyComponent>
```

### state

```
class MyComponent extends React.Component{
    constructor(){
        super();
        this.state={
             person:'小明'
        }
    }
}

```

- setState

```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

### Style

```
 <h1 style={{color:'red'}}>评论区列表</h1>
```

### CSS

```
 <h1 className="color-red">评论区列表</h1>
```

### 事件

class fields

> 绑定this

- 安装

```
npm install --save-dev @babel/plugin-proposal-class-properties
```

- 配置

```
//.babelrc
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

- 用法

```
class MyComponent extends React.Component{
	handleClick = () => {
   		 console.log('this is:', this);
  	}
}
```

传参

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
```

### 表单

#### 受控组件

> input绑定state

```react
class MyComponent extends React.Component{
    constructor() {
        this.state = {
            count: 0,
        }
    }
    change = (e) => {
       this.setState(()=>({
            count:e.target.value
        }))
    }
    render() {
        return <div>
            <input
           onChange={this.change}
           value={this.state.count}/>
 </div>}
}
```

#### 非受控组件



### 生命周期

> 组件实例，从创建、运行、销毁	会触发一系列事件，这些事件叫做组件的生命周期函数

#### 挂载

- constructor

  > - 通过给 `this.state` 赋值对象来初始化内部 state。

- static getDerivedStateFromProps

- render

- componentDidMount

  > 组件挂载后（插入 DOM 树中）调用

#### 更新

- static [getDerivedStateFromProps](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)

  > 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。

- [shouldComponentUpdate](https://zh-hans.reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action)

  > 根据返回值判断是否重新渲染页面

- render

- [getSnapshotBeforeUpdate](https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)

  > 在最近一次渲染输出（提交到 DOM 节点）之前调用

- [componentDidUpdate](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)

  > 更新后调用。首次渲染不会执行此方法。

#### 卸载

- [componentWillUnmount](https://zh-hans.reactjs.org/docs/react-component.html#componentwillunmount)

  > 组件卸载及销毁之前直接调用

#### 错误处理

- static [getDerivedStateFromError](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromerror)

  > 此生命周期会在后代组件抛出错误后被调用。

- [componentDidCatch](https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch)

  > 此生命周期在后代组件抛出错误后被调用

### 组合&继承

> 接收父组件未知子节点，并在子组件指定位子渲染

```
//parent
render(){
	return <MyComponent>
		<div>我在子组件中被渲染</div>
	</MyComponent>
}
//child
render(){
	return <div>
	{this.props.children}
	</div> 
}
```

跨域

```
// `package.json`
"proxy": "http://localhost:4000"
```

### redux

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