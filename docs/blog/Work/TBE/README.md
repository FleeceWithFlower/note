## API

> getAccounts
>
> | s                                                            | s    |
> | ------------------------------------------------------------ | ---- |
> | platform/rest/account?page=0&size=100&static.code=&account.uuid= |      |
>
> 

## 获取账户

123

## 开发流程

*善始善终*

> 使用 git diff 对比 文件差异

> 检查主要功能是否成功实现
>
> 检查 路由 进出口是否做限制
>
> 检查 路由 跳转状态 是否正确
>
> 检查 I18N 是否 正确
>
> 页面是否配置 loading



> 打包APP
>
> 检查页面 loading 是否正确
>
> 检查主要功能是否成功实现
>
> 检查 I18N 是否 正确
>
> 检查 路由 跳转状态 是否正确



#### 上班流程

> 下载 Blog
>
> 下载 workspace

#### 下班流程

>  上传 Blog

>  下载 workspace

## 模板

### changeGlobalToast

```
            this.$store.commit('changeGlobalToast',{
              toast:{
                time: 2000,
                width: "7.6em",
                mask: false,
                text: `${this.$t('message.ver1')}`,
                type: "text",
                position: "default"
              },
              status: true,
              i18n:false,
              postCatch:false
            })

```

### Toast

```
this.$vux.toast.show({    text: 'Loading',})
```

### Axios

> axios.all

```
                let that = this 
                this.$axios.all([
                    this.getPair(),
                    this.getPrimaryAccout(),
                ])
                    .then(this.$axios.spread(function (acct, perms) {
                        that.changePageLoading(false)
                    }))
```

### vue-x



```
  import { mapState,mapMutations } from "vuex";
```



### I18N

```
    i18n: {
            messages: {
                zhCN: require("./static/locales/zh-CN.json"),
                zhTW: require("./static/locales/zh-TW.json"),
                en: require("./static/locales/en.json"),
                ko: require("./static/locales/ko.json"),
                ja: require("./static/locales/ja.json")
            }
        },
```

### pageLoading

```
import { mapMutations } from "vuex";
...mapMutations(['changePageLoading']),
pageLoading.status
***
        this.changePageLoading({
          status:true})
          
```