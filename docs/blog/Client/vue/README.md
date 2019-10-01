## Vue

> 用于构建用户界面的**渐进式框架**

 

### Vue 实例

> 所有的 Vue 组件都是 Vue 实例
>
> `vm` (ViewModel ) 这个变量名表示 Vue 实例。

### 虚拟 DOM

> 用于高效渲染数据，数据更新时，对比新旧虚拟DOM树，按需更新

用JS对象模拟DOM元素和嵌套关系

```
var div = {
	tagName:'div',
	attrs:{
   			id:'myID',
			title:'我的DIV',
			'data-index':'0'
			},
	childrens:[
			 {
				tagName:'div',
				attrs:{
					id:'myID',
					title:'我的DIV'
				}
			]
		}
```



- virtual node (`VNode`)

  > 虚拟节点 

### DIFF算法

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

  

#### 列表渲染

- v-for

  > `v-for` 指令基于一个	数组	对象	来渲染一个列表

  - key

    > Vue 识别节点的一个通用机制
    >
    > 
    >
    > `v-for`默认使用“就地更新”的策略,为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` 属性

#### 表单

- `v-model`

  > 在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。

  - 语法糖

    > `v-model` 本质上不过是语法糖。

    `v-model` 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

    - text 和 textarea 元素使用 `value` 属性和 `input` 事件；
    - checkbox 和 radio 使用 `checked` 属性和 `change` 事件；
    - select 字段将 `value` 作为 prop 并将 `change` 作为事件。

  - 修饰符

    - `.lazy`

      `v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 ,可以添加 `lazy` 修饰符，从而转变为使用 `change` 事件进行同步

    - `.number`

      `.number` 将用户的输入值转为数值类型

    - `.trim`

      `.trim`	自动过滤用户输入的首尾空白字符

### 事件

- 事件命名

  > 始终使用 kebab-case 的事件名

- $event

  > 内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法

- $listeners

  > 它是一个对象，里面包含了作用在这个组件上的所有监听器

  

  :::tip

  父组件只能监听根元素上的原生事件，`$listeners` 属性，你就可以配合 `v-on="$listeners"` 将所有的事件监听器指向这个组件的某个特定的子元素。

  :::

- v-on

  > `v-on` 指令监听 DOM 事件

- 事件修饰符

  > - `.stop` <!-- 阻止单击事件继续传播 -->
  > - `.prevent` <!-- 提交事件不再重载页面 -->
  > - `.capture` <!-- 添加事件监听器时使用事件捕获模式 -->
  > - `.self`<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
  > - `.once` <!-- 点击事件将只会触发一次 -->
  > - `.passive` <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
  > - `.native` - 监听组件根元素的原生事件。

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

### 组件

> 组件是可复用的 Vue 实例

:::warning

`data` 必须是一个函数

:::

#### 组件名

- kebab-case

  短横线分隔命名

- PascalCase

  驼峰命名法

#### 注册

- 全局注册

  - Vue.component
  - [自动化创建所有全局模块](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)

  :::warning

  全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生。

  :::

- 局部注册

  - `components`	选项

  



#### Prop

> 向子组件传值

- prop命名

  > HTML不区分大小写
  >
  > 模板引擎没有限制

- Prop 类型验证

  > 可以为 `props` 中的值提供一个带有验证需求的对象，而不是一个字符串数组。
  >
  > ```
  > props: {
  >   title: String
  >   }
  > ```
  >
  > 

  - type

    > 类型

    :::tip

    `type` 可以是下列原生构造函数中的一个，还可以是一个自定义的构造函数

    多类型传入数组

    :::

  - default

    > 默认值

  - required

    > 必填

- 替换/合并已有的特性

  - 绝大多数特性

    >  替换掉组件内部设置好的值。

  - `class` 和 `style`

    > 两边的值会被合并起来

- 禁用特性继承

  -  `inheritAttrs`	选项

  :::tip

  `inheritAttrs: false` 和 `$attrs`，你就可以手动决定这些特性会被赋予哪个元素。

  :::

- #### 修饰符

  - `.sync`

    > 对一个 prop 进行“双向绑定”,省略父组件赋值过程

    ```
    $emit('update:val',$event.target.value)" 
    ```

    :::danger

    父组件v-bind 不能使用表达式

    :::

:::danger

 prop 会在一个组件实例创建**之前**进行验证，所以实例的属性 (如 `data`、`computed` 等) 在 `default` 或 `validator` 函数中是不可用的。

:::

- 传入所有属性

  > 使用不带参数的 `v-bind` (取代 `v-bind:prop-name`)

  ```
  <blog-post v-bind="post"></blog-post>
  ```

- 单向数据流

  > 父级 prop 的更新会向下流动到子组件中，但是反过来则不行。除了引用类型

:::tip

prop 没有值的情况在内，都意味着 `true`

:::

- 

####  单个根元素

> 每个组件必须只有一个根元素

#### 事件

- `$emit`

  > 触发父组件事件

#### 插槽

- `slot`

#### 动态组件

- `<component>`

  用来承载组件

- `is`

  用于选择组件

- `keep-alive`

  用于缓存实例

```
<keep-alive>
  <component v-bind:is="currentTabComponent" />
</keep-alive>
```

#### 异步组件

> 分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。

- Vue.component

  > 第二参数为函数，`resolve`	选项

```
Vue.component('async-example', function (resolve, reject) {
    resolve({
      template: '<div>I am async!</div>'
    })
})
```

配合webpack 的 code-splitting 功能

```
Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
})
```

配合webpack 2 和 ES2015 语法

```
Vue.component(
  'async-webpack-example',
  // 这个 `import` 函数会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)
```

[局部注册](https://cn.vuejs.org/v2/guide/components-registration.html#局部注册)的时候，你也可以直接提供一个返回 `Promise` 的函数

```
new Vue({
  components: {
    'my-component': () => import('./my-async-component')
  }
})
```

处理加载状态

> 异步组件工厂函数返回一个对象,用于处理异常状态，可以用Vue Router 代替

### 处理边界情况

`$root`

> 访问根实例

`$parent`

> 访问父级组件实例

`ref` 

> 访问子组件实例或子元素
>
> $refs
>
> 当 `ref` 和 `v-for` 一起使用的时候，得到包含了对应数据源的这些子组件的数组。

依赖注入

- provide

  > 扩展到更深层级的嵌套组件

- inject

  > 接收provide

程序化事件监听

- $on

  > 侦听一个事件

- $once

  > 一次性侦听一个事件

- $off

  > 停止侦听一个事件

递归组件

> 组件可以递归，自己嵌套自己，但必须确保递归调用是条件性的 (例如使用一个最终会得到 `false` 的 `v-if`)。

inline-template

> 这个组件将会使用其里面的内容作为模板，而不是将其作为被分发的内容。

X-Template

```
<script type="text/x-template" id="hello-world-template">
  <p>Hello hello hello</p>
</script>

Vue.component('hello-world', {
  template: '#hello-world-template'
})
```

### 过度

`transition`

> 在 CSS 过渡和动画中自动应用 class

- 过渡的类名

  - v-enter

    > 元素被插入之前生效

  - v-enter-active

    > 进入过渡生效时的状态

  - v-enter-to

    > 定义进入过渡的结束状

  - v-leave

    > 定义离开过渡的开始状态

  - v-leave-active

    > 定义离开过渡生效时的状态。

  - v-leave-to

    > 定义离开过渡的结束状态。

name

> `name`值	替换掉类名	v-

```
<transition name="my-transition">
```

### CSS 动画

> 同过度，但`v-enter` 类名在节点插入 DOM 后不会立即删除，而是在 `animationend` 事件触发时删除。

- 自定义过渡的类名
  - `enter-class`
  - `enter-active-class`
  - `enter-to-class` 
  - `leave-class`
  - `leave-active-class`
  - `leave-to-class` 

:::tip

配合	`Animate.css` 使用

:::

- JavaScript 钩子
  -  v-on:before-enter
  -  v-on:enter
  - v-on:after-enter
  - v-on:enter-cancelled
  - v-on:before-leave
  - v-on:leave
  - v-on:after-leave
  - v-on:leave-cancelled

:::tip

配合	`Velocity.js` 使用

:::

:::danger

当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。

:::



同时使用过渡和动画

> `type` 特性并设置 `animation` 或 `transition` 来明确声明你需要 Vue 监听的类型

事件

`transitionend` 

`animationend` 

显性的过渡持续时间

- duration

  > 定制一个显性的过渡持续时间 (以毫秒计)

### 混入

- mixins

> 分发 Vue 组件中的可复用功能
>
> 传入数组，数组值为对象，对象中包含选项，在创造实例时合并

- 

:::tip

一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

:::

- 全局混入
  - Vue.mixin
    - 传入单个对象

### 自定义指令

- Vue.directive

  - 参数：	函数名和函数钩子

  - 函数钩子
    - `bind`	只调用一次
    - `inserted` 被绑定元素插入父节点时调用
    - `update` 所在组件的 VNode 更新时调用
    - `componentUpdated` 指令所在组件的 VNode及其子 VNode 全部更新后调用
    - `unbind`  只调用一次，指令与元素解绑时调用



### 过滤器

> 自定义过滤器,过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示

- filters
  - 全局定义
    - Vue.filter
  - 本地定义

```
filters: {

}
```



### API

Vue.extend

> 使用基础 Vue 构造器，创建一个“子类”。

$mount

组件之间的循环引用

> 组件之间相互依赖，这变成了一个循环，不知道如何不经过其中一个组件而完全解析出另一个组件。可以使用全局注册和异步加载解决

### 关键字

`vm` 

> `vm` (ViewModel ) 这个变量名表示 Vue 实例。

`Mustache`

> `Mustache`”语法 (双大括号) 的文本插值

`v-text`

> 更新元素的 `textContent`

`v-html`

> 更新元素的 `innerHTML`

`v-show`

> 根据表达式之真假值，切换元素的 `display` CSS 属性。

`v-if`

> 根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。

v-for

> 基于源数据多次渲染元素或模板块。

`v-on`

> 绑定事件监听器。

​	**修饰符**：

- `.stop` - 调用 `event.stopPropagation()`。
- `.prevent` - 调用 `event.preventDefault()`。
- `.capture` - 添加事件侦听器时使用 capture 模式。
- `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。
- `.native` - 监听组件根元素的原生事件。
- `.once` - 只触发一次回调。
- `.left` - (2.2.0) 只当点击鼠标左键时触发。
- `.right` - (2.2.0) 只当点击鼠标右键时触发。
- `.middle` - (2.2.0) 只当点击鼠标中键时触发。
- `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器

`v-bind`

> 动态地绑定一个或多个特性

v-model

> 在表单控件或者组件上创建双向绑定。
>
> **修饰符**：
>
> - [`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy) - 取代 `input` 监听 `change` 事件
> - [`.number`](https://cn.vuejs.org/v2/guide/forms.html#number) - 输入字符串转为有效的数字
> - [`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim) - 输入首尾空格过滤

`v-slot`

> 提供具名插槽或需要接收 prop 的插槽

`v-pre`

> 跳过这个元素和它的子元素的编译过程。

`v-cloak`

> 这个指令保持在元素上直到关联实例结束编译。

`v-once`

> 只渲染元素和组件**一次**。

#### 特殊特性

`key`

> `key` 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

`ref`

> `ref` 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 `$refs` 对象上。

`is`

> 用于动态组件且基于DOM 内模板的限制来工作。

#### 内置的组件

### `<component>`

> 渲染一个“元组件”为动态组件。依 `is` 的值，来决定哪个组件被渲染。

### `<transition>`