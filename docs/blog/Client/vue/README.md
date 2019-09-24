## Vue

> 用于构建用户界面的**渐进式框架**

 

### Vue 实例

> 所有的 Vue 组件都是 Vue 实例
>
> `vm` (ViewModel ) 这个变量名表示 Vue 实例。

### 虚拟 DOM

### 模板语法

- 文本

  > “Mustache”语法 (双大括号) 的文本插值

- 原始 HTML

  > 使用  `v-html` 指令

- 特性

  > v-bind 指令

- 表达式

  > 模板中提供了完全的 JavaScript 表达式支持
  >
  > ::: warning
  >
  > 模板表达式都被放在沙盒中，只能访问[全局变量的一个白名单](https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9)，如 `Math` 和 `Date` 。你不应该在模板表达式中试图访问用户定义的全局变量。
  >
  > 不能访问window
  >
  > :::

### 指令

> 指令 (Directives) 是带有 `v-` 前缀的特殊特性
>
> ::: tip
>
> 指令特性的值预期是**单个 JavaScript 表达式**
>
> :::

- 参数

> 一些指令能够接收一个“参数”，在指令名称之后以冒号表示。

- 动态参数

> 可以用方括号括起来的 JavaScript 表达式作为一个指令的参数

- 修饰符

  > 修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

- 条件渲染

  - `v-if`

    > `v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

  - `v-else` 

    > `v-else` 指令来表示 `v-if` 的“else 块”

  - `v-else-if`

    > `v-if` 的“else-if 块”，可以连续使用

    - `key`

    > 使元素独立，防止复用

  - `v-show`

    > 根据条件展示元素

- 列表渲染

  - v-for

    > `v-for` 指令基于一个	数组	对象	来渲染一个列表

    - key

      > Vue 识别节点的一个通用机制
      >
      > 
      >
      > `v-for`默认使用“就地更新”的策略,为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` 属性

### 事件

- $event

  > 内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法

- v-on

  > `v-on` 指令监听 DOM 事件

- 事件修饰符

  > - `.stop` <!-- 阻止单击事件继续传播 -->
  > - `.prevent` <!-- 提交事件不再重载页面 -->
  > - `.capture` <!-- 添加事件监听器时使用事件捕获模式 -->
  > - `.self`<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
  > - `.once` <!-- 点击事件将只会触发一次 -->
  > - `.passive` <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->

- 按键修饰符

  > - `.enter` <!-- 只有在 `key` 是 `Enter` 时调用 -->
  > - 可以直接将 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的任意有效按键名转换为 kebab-case 来作为修饰符

- 系统修饰键

  > - `.ctrl`
  >
  > - `.alt`
  >
  > - `.shift`
  >
  > - `.meta`
  >
  > - `.exact`
  >
  >   ```
  >   <!-- 有且只有 Ctrl 被按下的时候才触发 -->
  >   <button @click.ctrl.exact="onCtrlClick">A</button>
  >   
  >   <!-- 没有任何系统修饰符被按下的时候才触发 -->
  >   <button @click.exact="onClick">A</button>
  >   ```

- 鼠标按钮修饰符

  > - `.left`
  > - `.right`
  > - `.middle`

:::tip

你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 `v-on` 有几个好处：

1. 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。
2. 因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。
3. 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。

:::

### 选项对象

- data

- el

- watch

  - vm.$watch

  > 观察和响应 Vue 实例上的数据变动

- computed

  > 计算属性默认只有 getter ,对于任何复杂逻辑，都应当使用**计算属性**。
>
  > ::: tip
  >
  > **计算属性是基于它们的响应式依赖进行缓存的**
  >
  > :::
  
  > :::danger
>
  > 在嵌套 `v-for` 循环中,计算属性不适用,应该使用方法代替
  >
  > :::

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
  > ::: warning
  >
  > 注意 `mounted` **不会**承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 	vm.$nextTick 替换掉 `mounted`
  >
  > :::

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
  >
  > ::: warning
  >
  > 返回 `false` 以阻止该错误继续向上传播
  >
  > :::

### 响应式系统

> 属性的值发生改变时，视图将会产生“响应”

### Class和Style动态绑定

- `v-bind:class`

> 可以传给 `v-bind:class` 一个对象，以动态地切换 class
>
> ::: tip
>
> 可以与普通的 class 属性共存。`v-bind:class`优先
>
> :::

- ### `v-bind:style`


> 可以传给 `v-bind:style`一个对象，以动态地切换 style,或数组语法可以将多个样式对象应用到同一个元素上
>
> :::tip
>
> `v-bind:style`	优先级高于	`v-bind:class`

- 自动添加前缀

> 当 `v-bind:style` 使用需要添加[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)的 CSS 属性时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀。

### 数组更新/变异方法

> Vue 将被侦听的数组的进行了包裹，数组为响应式。
>
> - `push()`
> - `pop()`
> - `shift()`
> - `unshift()`
> - `splice()`
> - `sort()`
> - `reverse()`

:::danger

直接利用索引直接设置一个数组项时,非响应式。

直接修改数组的长度，非响应式。



解决问题

1. Vue.set(vm.items, indexOfItem, newValue)
2. vm.items.splice(indexOfItem, 1, newValue)

:::

### 对象更新

> Vue 不能检测对象属性的添加或删除,对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。
>
> 解决：
>
> 1. vm.$set(vm.userProfile, 'age', 27)

- 为已有对象赋值多个新属性

  >  创建一个新的对象

  ```
  vm.userProfile = Object.assign({}, vm.userProfile,vm.b)
  ```

  



### 标签

- template

  > 用于	列表渲染	条件渲染，不会添加多余div