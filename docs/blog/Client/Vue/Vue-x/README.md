
## 安装
- Vuex是Vue.js应用程序的**状态管理模式+库**

```
npm i vuex
```

## 引用

- 与模块系统一起使用时，必须通过`Vue.use()`以下方式显式安装Vuex ：

```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
```



## 引库

## 引入商店

- 可使用计算属性引入

```
 computed: {
    count () {
      return store.state.count
    }
```

## 组件引入商店

## this.$store

- 适用所有子组件
 

```
const app = new Vue({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```


### store

### state

### mapState

- 解决 当组件需要使用多个存储状态属性或getter时，声明所有这些计算属性可能会重复且冗长。

### 用法

- 实例中参数为Object， key=>value`<function>`
  - value`<funtion>`
    - 参数
      - state

```
{
     count: state => state.count
}
```

- 实例中参数为Object， key=>value`<function>`
  - ES6 简写

```
 count (state) {
                return state.count + this.localCount
            }
```

- 实例中参数为Object， key=>value`<string>`

```
{
countAlias: 'count',
}
```

- 实例中参数为Array， `<string>`
  - this.`<value>`和state.`<value>`相同时，可如下简写

```
[
  // map this.count to store.state.count
  'count'
]
```
### 与其他本地计算属性结合使用

```
computed: {
  localComputed () { /* ... */ },
  // mix this into the outer object with the object spread operator
  ...mapState({
    // ...
  })
}
```

### Getter

- 接受 state 作为其第一个参数
- 接受其他 getter 作为第二个参数

```
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
     doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
  }
})
```

#### store.getters

- 通过属性访问

### mapGetters

```
 ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
```

- getter 属性另取一个名字，使用对象形式

```
mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```

### Mutation

- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
- 每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**
- Mutation 必须是同步函数

store.commit

- 需要以相应的 type 调用 **store.commit** 方法
-  `store.commit` 传入额外的参数，即 mutation 的 **载荷（payload）**

```
mutations: {
  increment (state, n) {
    state.count += n
  }
}
```

```js
store.commit('increment', 10)
```

- 对象风格的提交方式
  - 提交 mutation 的另一种方式是直接使用包含 `type` 属性的对象：

```
store.commit({
  type: 'increment',
  amount: 10
})
```

### mapMutations

```
  methods: {
    ...mapMutations([
      'increment'])
  }
//将 `this.increment()` 映射为 `this.$store.commit('increment')`
```

#### Action

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

### context

- 与 store 实例具有相同方法和属性

### store.dispatch

- 触发Action
  - store.dispatch 返回promise，将action 返回 promise，store.dispatch后可接then()

### payload

- 以载荷形式分发

```
store.dispatch('incrementAsync', {
  amount: 10
})
```

- 以对象形式分发

```
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

### mapActions

- `mapActions` 辅助函数将组件的 methods 映射为 `store.dispatch` 调用

```
 ...mapActions([
      'increment'
    ]),
```

### Module

- Vuex 允许我们将 store 分割成**模块（module）**
- 每个模块可以嵌套子模块

### state

```
this.$store.state.<module>.<value>
```



### Getter

```
this.$store.getters['<mudule>/<getter>']
```

- 参数
  - state(**模块的局部状态对象**)
  - getters
  - rootState
  - rootGetter

##### mutations

```
this.$store.commit['<mudule>/<mutation>']
```

- 参数
  - state(**模块的局部状态对象**)
  - payload

##### Action

```
this.$store.dispatch['<mudule>/<action>']
```

- 参数

  - context
    - context.state
    - context.rootState（根节点状态）
    - getters
    - rootGetters

  - payload

- dispatch 和 commit 被局部化了

- 他们可以接受 `root` 属性以访问根 dispatch 或 commit

#### 严格模式

- 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。
- 发布环境下关闭严格模式，以避免性能损失。

```
const store = new Vuex.Store({
  // ...
  strict: true
})
```

#### 表单处理

- 不使用v-model,v-bind 绑定value,配合input事件

```
computed: {
  ...mapState({
    message: state => state.obj.message
  })
},
methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}
```



- 使用v-model,配合computed-set、get

```
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```

#### 插件

#### 测试

#### 热重载
