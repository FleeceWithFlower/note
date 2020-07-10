# [react-redux](https://react-redux.js.org/)

  它使您的React组件可以从Redux存储中读取数据，并向存储分派操作以更新数据 

```
npm install react-redux
```

[`Provider`](https://react-redux.js.org/introduction/quick-start#provider) 

app上可以获得 Redux  

[`connect()`](https://react-redux.js.org/introduction/quick-start#connect) 

 `connect`为您提供了一个将组件连接到商店的功能。 

- `mapStateToProps`

  用于从存储中选择连接的组件所需的数据部分。通常被简称`mapState`为简称 

  每次存储状态更改时都会调用它。 	

  它接收整个存储状态，并应返回此组件需要的数据对象。 

  不传参数，默认两个都传参，props改变时，都会进行diff并刷新页面

  参数

  - **`state`** 

    Redux存储状态 

  - **`ownProps`**  

    组件自身props

- `mapDispatchToProps`

  `dispatch`是Redux存储的功能 ， 组件将永远不会直接访问商店 ， 默认情况下，连接的组件`props.dispatch`可以接收并可以分派动作。 定义这个参数后可以将返回对象 作为prop传递给组件 

  不传参数，默认两个都传参，props改变时，都会进行diff并刷新页面

  两种形式 `mapDispatchToProps`

  该`mapDispatchToProps`参数可以有两种形式。虽然功能形式允许更多的自定义，但对象形式却易于使用。
  
- **功能形式**：允许更多的自定义，访问权限`dispatch`并可以选择`ownProps`
  - **对象简写形式**：更具说明性，更易于使用
  
  > ⭐ **注意：**`mapDispatchToProps`除非您特别需要以某种方式自定义调度行为，否则我们建议使用对象形式。

### `bindActionCreators`

```
提供mapDispatchToProps可以指定组件可能需要分派的操作。它使您可以提供动作分派功能作为道具。因此，props.dispatch(() => increment())您可以props.increment()直接致电，而不是致电。您可能要这样做有几个原因。

更具说明性
首先，将调度逻辑封装到函数中可以使实现更具声明性。调度动作，并让Redux的商店处理的数据流是如何实现的行为，而不是什么它。

一个很好的例子是单击按钮时调度一个动作。从概念上讲，直接连接按钮可能没有任何意义，也没有按钮参考dispatch。

// button needs to be aware of "dispatch"
<button onClick={() => dispatch({ type: "SOMETHING" })} />

// button unaware of "dispatch",
<button onClick={doSomething} />

复制
一旦您用调度动作的函数包装了我们所有的动作创建者，该组件就不再需要了dispatch。因此，如果您定义自己的mapDispatchToProps，连接的组件将不再接收dispatch。

将动作调度逻辑传递给（未连接的）子组件
此外，您还可以将动作分派功能传递给子组件（可能是未连接的组件）。这允许更多组件调度动作，同时使它们“不知道” Redux。

// pass down toggleTodo to child component
// making Todo able to dispatch the toggleTodo action
const TodoList = ({ todos, toggleTodo }) => (
  <div>
    {todos.map(todo => (
      <Todo todo={todo} onClick={toggleTodo} />
    ))}
  </div>
)

复制
这就是React Redux的connect工作-它封装了与Redux存储对话的逻辑，让您不必担心。这就是您在实现中应该完全利用的东西
```

