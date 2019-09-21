## Vue

> 用于构建用户界面的**渐进式框架**

 

### Vue 实例

> 所有的 Vue 组件都是 Vue 实例
>
> `vm` (ViewModel ) 这个变量名表示 Vue 实例。



### 选项对象

- data

- el

- watch

### 生命周期钩子

> 每个 Vue 实例在被创建时都要经过一系列的初始化过程,这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。

- beforeCreate

  > 实例创建完成前调用

- created

  > 在实例创建完成后,挂载之前调用

- beforeMount

  > 挂载开始之前被调用

- mounted

  > `el` 被新创建的 `vm.$el` 替换，并挂载到实例上去之后调用该钩子。
  >
  > > 注意 `mounted` **不会**承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 	vm.$nextTick 替换掉 `mounted`

- beforeUpdate

  > 数据更新时调用

- updated

  > 数据更新后调用

- activated

  > keep-alive 组件激活时调用。

- deactivated

  > keep-alive 组件停用时调用。

- beforeDestroy

  > 实例销毁之前调用。

- destroyed

  > Vue 实例销毁后调用。

- errorCaptured

  > 当捕获一个来自子孙组件的错误时被调用。

### 响应式系统

> 属性的值发生改变时，视图将会产生“响应”
>
> > 返回 `false` 以阻止该错误继续向上传播
>
> ::: warning
> This is a warning
> :::