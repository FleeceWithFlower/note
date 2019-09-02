# 基本

### 安装

```
npm install -g cordova
```

### 创建cordova

- cordova create

- 参数
  - 路径 //创建的目录名
  - ID
  - name //应用程序的显示标题
  - 配置 //

```
cordova create hello com.example.hello HelloWorld
```

### 平台

- cordova platform

## cordova平台命令

```
cordova {platform | platforms} [
    add <platform-spec> [...] {--save | link=<path> } |
    {remove | rm}  platform [...] {--save}|
    {list | ls}  |
    check |
    save |
    update ]
```



#### 添加平台

```
cordova platform add android --save --link-to=../www
```

- --link-to 
  - 链接需要编译的www文件	



#### 删除平台

```
cordova platform remove android --save
```

#### 更新config平台信息

```
cordova platform save
```

#### 查询config信息恢复平台

```
cordova prepare
```

#### 检查你当前平台设置状况

```
cordova platform ls
```

检查构建调节

### 构建App

#### 构建所有App

```
cordova build
```

#### cordova编译命令

```bash
cordova build [<platform> [...]]
    [--debug|--release]
    [--device|--emulator|--target=<targetName>]
    [--buildConfig=<configfile>]
    [-- <platformOpts>]
```

- --release
  - 发布模式
- --debug
  - 调试模式

#### 构建指定平台APP

- cordova build \<plateform>

```
cordova build ios
```

### 测试App

#### 模拟器

- cordova emulate

```
cordova emulate android
```

#### 真机

- cordova run

```
cordova run android
```

### 插件

cordova plugin search

#### 添加相机插件

```
cordova plugin add cordova-plugin-camera --sava
```

#### 查看当前安装的插件

```
cordova plugin ls
```

#### 更新config插件信息

```
cordova plugin save
```

### 更新Cordova和项目

```
npm update -g cordova
```

#### 查看版本信息

```
npm update -g cordova
```

#### 更新目标项目的平台

```
cordova platform update android --save
```

### 生命周期

#### deviceready

- 应用程序开始(不是从背景)

#### pause

- 应用程序移动到背景

#### resume

- 应用程序返回到前景

# chorm devToolApp

- chorm 打开开发者页面

```
chrome://inspect
```

# Config.xml

### 添加图标

```
    <platform name="android">
        <!--
            ldpi    : 36x36 px
            mdpi    : 48x48 px
            hdpi    : 72x72 px 
            xhdpi   : 96x96 px
            xxhdpi  : 144x144 px
            xxxhdpi : 192x192 px
        -->	
        <icon src="res/android/xxxhdpi.png" density="xxxhdpi" />
    </platform>
```

添加全平台默认图标

```
 <icon src="res/icon.png" />
```

### 添加启动画面

#### 安装插件

```
cordova plugin add cordova-plugin-splashscreen

```

```
<platform name="android">
    <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
</platform>
```



# [事件](http://cordova.axuer.com/docs/zh-cn/latest/cordova/events/events.html)

## **支持**

## deviceready

- 当Cordova完全加载好deviceready事件会触发。

  ```
  document.addEventListener("deviceready", onDeviceReady, false);
  
  function onDeviceReady() {
      // 现在可以安全的使用设备API
  }
  ```

  

## pause

- 当原生平台把应用程序放入后台这个pause事件会触发

  

## resume

- 当原生平台将应用程序从后台运行拉出`resume`事件就会触发。

  

## backbutton

- 当用户按下返回按钮事件触发



## menubutton

- 当用户按下菜单按钮事件触发

## searchbutton

- Android中当用户按下搜索按钮事件触发

## startcallbutton

- 当用户按下通话按钮事件触发

## endcallbutton

- 当用户按下挂断通话按钮事件触发

## volumedownbutton

- 当用户按下降低声音按钮事件触发

## volumeupbutton

- 当用户按下增加声音按钮事件触发

## activated

- 发生Windows运行时激活时会触发事件

# [CLI Reference](http://cordova.axuer.com/docs/zh-cn/latest/reference/cordova-cli/index.html)



# 待完成


## [Hooks](http://cordova.axuer.com/docs/zh-cn/latest/guide/appdev/hooks/index.html)

## [Plugin.xml](http://cordova.axuer.com/docs/zh-cn/latest/plugin_ref/spec.html)

## Plugin APIs
