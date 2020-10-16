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

- `Context.Provider`

  > 封装组件，`Provider`中`value`改变时，会从新渲染子组件。如果没有对应的 `Provider`，子组件会消费`Context.defaultValue`。 

```
const MyContext = React.createContext(defaultValue);
<MyContext.Provider value={/* 某个值 */}>
```

- `Class.contextType`

  > 使用 `this.context` 消费绑定`context`

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

- `Context.Consumer`

  >  一个 React 组件可以订阅 context 的变更，这让你在[函数式组件](https://zh-hans.reactjs.org/docs/components-and-props.html#function-and-class-components)中可以订阅 context。  传递给函数的 `value` 值等等价于组件树上方离这个 context 最近的 Provider 提供的 `value` 值。

```
const MyContext = React.createContext(defaultValue);


function Index(props) {
    return (
        <ThemeContext.Provider value={'ref-Consumer'}>
			<ThemeContext.Consumer>
			{value => (<div>{value.contextValue}</div>)}
 			</ThemeContext.Consumer>
 		</ThemeContext.Provider>
 		)
}
//value === this.context
```

- ### `Context.displayName`

   React DevTools 使用该字符串来确定 context 要显示的内容。 

```
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
<MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中
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

​	 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。 

::;warn

 **不要在循环，条件或嵌套函数中调用 Hook** , React 怎么知道哪个 state 对应哪个 `useState`？答案是 React 靠的是 Hook 调用的顺序。因为我们的示例中，Hook 的调用顺序在每次渲染中都是相同的，所以它能够正常工作

:::

- `useState` 

  函数返回 **当前**状态和一个让你更新它的函数，参数为默认值

```
const [age, setAge] = useState(42);
```

- ` useEffect `

   `componentDidMount`、`componentDidUpdate` 都会执行，组件销毁时执行函数返回值。参数二 指定状态变化时，函数才执行。

  ```
    useEffect(() => {
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    },[]);
  ```

- `useContext`

   `useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 ``。 

```
const value = useContext(MyContext);
```

-  `useReducer `

  ```
  const initialArg = {count: 0};
  function reducer(state, action) {
      switch (action.type) {
          case 'increment':
              return {count: state.count + 1};
          case 'decrement':
              return {count: state.count - 1};
          default:
              throw new Error();
      }
  }
  function init(state) {
      return state
  }
  function UseReducer() {
      const [state, dispatch] = useReducer(reducer, initialArg, init); //惰性初始化state
      return (
          <>
              <div>
                  {state.count}
              </div>
              <Button onClick={()=>dispatch({type:"increment"})}>+</Button>
              <Button onClick={()=>dispatch({type:"decrement"})}>-</Button>
          </>
      )
  
  }
  ```

  使用方法同`redux`

- ### `useCallback`

  用于缓存函数

```
    const MemoizedValue = useCallback(()=><Acomponent price={price}></Acomponent>, [name]);
```

:::tip

函数组件在render阶段会重新执行，缓存函数，在指定状态改变时，改变展示状态。

::;

- ### `useMemo`

   把“创建”函数和依赖项数组作为参数传入 `useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。 

-  `useRef`

    `useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。返回的 ref 对象在组件的整个生命周期内保持不变。 

-  ### `useImperativeHandle`

    `useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值，映射子组件ref方法。

-  ### `useLayoutEffect`

   ` useEffect `的同步版本

-  **自定义 Hook** 

   通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。 

::warn

 **自定义 Hook 必须以 “`use`” 开头吗？**必须如此。这个约定非常重要。 

:::