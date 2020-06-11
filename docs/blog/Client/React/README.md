---
sidebar: auto

---

## Cli（脚手架）

```
npx create-react-app my-app
```

## 自定义配置

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

## 组件

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



## props 

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

## state

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

## Style

```
 <h1 style={{color:'red'}}>评论区列表</h1>
```

## CSS

```
 <h1 className="color-red">评论区列表</h1>
```

## 事件

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

## 表单

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



## 生命周期

> 组件实例，从创建、运行、销毁	会触发一系列事件，这些事件叫做组件的生命周期函数

### 挂载

- constructor

  > - 通过给 `this.state` 赋值对象来初始化内部 state。

- static getDerivedStateFromProps

- render

- componentDidMount

  > 组件挂载后（插入 DOM 树中）调用

### 更新

- static [getDerivedStateFromProps](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)

  > 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。

- [shouldComponentUpdate](https://zh-hans.reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action)

  > 根据返回值判断是否重新渲染页面

- render

- [getSnapshotBeforeUpdate](https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)

  > 在最近一次渲染输出（提交到 DOM 节点）之前调用

- [componentDidUpdate](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)

  > 更新后调用。首次渲染不会执行此方法。

### 卸载

- [componentWillUnmount](https://zh-hans.reactjs.org/docs/react-component.html#componentwillunmount)

  > 组件卸载及销毁之前直接调用

### 错误处理

- static [getDerivedStateFromError](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromerror)

  > 此生命周期会在后代组件抛出错误后被调用。

- [componentDidCatch](https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch)

  > 此生命周期在后代组件抛出错误后被调用

## 组合&继承

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

## [Context](https://zh-hans.reactjs.org/docs/context.html)

- 创建

```
const MyContext = React.createContext(defaultValue);
```

- \<Provider\>

  > 传值

```
const MyContext = React.createContext(defaultValue);
<MyContext.provider value={/* 某个值 */}>
```

- contextType

  > 接收 provide

```
import MyContext form './MyContext'
class MyClass extends React.Component {
  render() {
    let value = this.context;
    /* 基于这个值进行渲染工作 */
  }
}
MyClass.contextType = MyContext;

//public class fields语法
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* 基于这个值进行渲染工作 */
  }
}
```

- Consumer

  > 子组件为function，接收 provide

```
const MyContext = React.createContext(defaultValue);


function Index(props) {
    return (
		<ThemeContext.Consumer>
		{value => (<div>{value.contextValue}</div>)}
 		</ThemeContext.Consumer>
 		)
}
//value === this.context
```



## 错误边界

static getDerivedStateFromError

> 此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state

```
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true,a:'wwww' };
    }

```

componentDidCatch()

>`componentDidCatch()` 会在“提交”阶段被调用，因此允许执行副作用。 它应该用于记录错误之类的情况

```
    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        console.log(error, errorInfo);
    }
```

## [Refs 转发](https://zh-hans.reactjs.org/docs/forwarding-refs.html)

- React.forwardRef

  > 允许组件接收ref并且转发给子组件

## Fragments

> 同Vue template，Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。

```
<React.Fragment>
    <td>Hello</td>
</React.Fragment>
//短语法
<>
	<td>Hello</td>
</>
```

## 高阶组件（HOC）

## Hook

1. - 
