## vue-router

- Vue Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器

### 安装

```
npm install vue-router
```

#### 配置

```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

### 使用

1.定义 (路由) 组件

-  可以从其他文件 import 进来

```
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
```

2.定义路由

```
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
```

3.创建 router 实例，然后传 `routes` 配置

```
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
```

4.创建和挂载根实例

- 记得要通过 router 配置参数注入路由， 从而让整个应用都有路由功能

```
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
```

### 动态路由匹配

#### params.id

- 像 `/user/foo` 和 `/user/bar` 都将映射到相同的路由。

```
  { path: '/user/:id', component: User }
```

- 一个“路径参数”使用冒号 `:` 标记,当匹配到一个路由时，参数值会被设置到`this.$route.params`，可以在每个组件内使用

```js
this.$route.params.id
//foo` 
//bar` 
```

- 路由中设置多段“路径参数”,对应的值都会设置到 `$route.params`中。

```
//  /user/:username/post/:post_id

// this.$route.params => { username: 'evan', post_id: '123' }
```

#### 实例复用

- 不同规则可能渲染同一页面，实例将被复用，**组件的生命周期钩子将不会再被调用**。想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) `$route` 对象，或者使用 2.2 中引入的 `beforeRouteUpdate`：

```
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

#### *  通配符

##### 

- { path: '*' }` 通常用于客户端 404 错误

##### pathMatch

- 当使用一个*通配符*时，`$route.params` 内会自动添加一个名为 `pathMatch` 参数。它包含了 URL 通过*通配符*被匹配的部分

- 匹配优先级
  - 谁先定义的，谁的优先级就最高

### 嵌套路由

#### children

- `children` 与`routes` 配置一样，可以嵌套多层路由

```
const routes = [
  {
    path: '/foo/:id',
    component: hello,
    children:[
      {
        path:'world',
        component: world,
      }
    ]
  },
]

```

### 编程式的导航

#### router.push

- 点击`<router-link>`等同于调用router.push()

- `router.push(location, onComplete?, onAbort?)`

  - location参数
    - 字符串 或 对象

  - onComplete
    - 导航成功完成回调函数
  - onAbort 
    - 终止导航回调函数
      -  (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 

#### router.replace

- 替换掉当前的 history 记录

#### router.go(n)

- 向前或者后退

```
router.go(1) //前进一步
router.go(-1) // 后退一步记录
```

### 命名路由

- 在 `routes` 配置中给某个路由设置名称。

```
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
```

```
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

```
router.push({ name: 'user', params: { userId: 123 }})
```

### 命名视图
         
         - 同级展示多个视图
         - component => components
         - 如果组件没有名字，则使用default
         
         ```js
           routes: [
             {
               path: '/',
               components: {
                 default: Foo,
                 a: Bar,
                 b: Baz
               }
             }
           ]
         ```

### 嵌套命名视图

###  重定向

- 访问匹配页面时，重定向到别的页面。

```
 routes: [
    { path: '/a', redirect: '/b' }
  ]
```



###  别名

- 页面还是匹配页面，就是名字改了

```
 routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
```

### 路由组件传参

- 使用 `props` 将组件和路由解耦,取代与 $route 的耦合

```
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
```

```
 routes: [
    { path: '/user/:id', component: User, props: true }]
```

### HTML5 History 模式

- 这种模式充分利用 `history.pushState` API 来完成 URL 跳转而无须重新加载页面。
