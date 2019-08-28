# npm 

安装 node.js

检查版本号

```
npm -v
```



####  更新 npm

##### 最新版

```
npm install npm@latest -g
```



##### 未发布版

```
npm install npm@next -g
```

## 创建一个 `package.json`

```
npm init
```

默认

```
npm init -yes
```



## 指定依赖关系

- `"dependencies"`：您的应用程序在生产中需要这些包。
- `"devDependencies"`：这些包仅用于开发和测试。

一个条目添加到您`package.json`的`dependencies`：

```
npm install <package_name> --save
```

一个条目添加到您`package.json`的`devDependencies`：

```
npm install <package_name> --save-dev
```







# 切换淘宝源

```
npm --registry https://registry.npm.taobao.org install express
```

### 持久使用

```
npm config set registry https://registry.npm.taobao.org
```

#### 配置后可通过下面方式来验证是否成功 

```
npm config get registry
//npm info express
```

切回官方npm仓库

```
npm config set registry https://registry.npmjs.org
```

### ###或

- 全局安装cnpm

```
npm install --global cnpm
```

- 下载包方法

```
cnpm install vue -S
```



# 如何安装本地包

```
 npm install <package_name>
```



# 卸载本地安装的包

`npm uninstall <package>`:

```
npm uninstall lodash
```

如需从 `package.json` 文件中删除依赖，需要在命令后添加参数 `--save`:

```
npm uninstall --save lodash
```

# 如何安装全局包

```
npm install -g jshint
```



# 如何更新全局安装的包

```
npm update -g jshint
```

# 卸载全局安装的包

```
npm uninstall -g jshint
```

登入NPM账号

****

```
npm login
```

查看本地账号证书

```
npm whoami
```

发布包

```
npm publish
```





# 上传npm

登陆npm

```
npm login
```

查看登陆证书

```
npm whoami
```

更新版本号

```
npm version <update_type>
```

发布包

```
npm publish
```



18.查看个人资料

```
npm profile get 
```

### 设置密码

```
npm profile set password
```



设置资料

```
npm profile set <prop> <value>
```















