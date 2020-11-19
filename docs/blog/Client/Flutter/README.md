# Flutter

## 安装

配置环境变量

```
export ANDROID_HOME=/Users/hedan/Desktop/android-sdk-macosx
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH=$PATH:/Users/hedan/Desktop/flutter/Flutter/bin
export PATH=$PATH:${ANDROID_HOME}/tools
export PATH=$PATH:${ANDROID_HOME}/platform-tools
export PATH=${PATH}:${ANDROID_HOME}/build-tools/30.0.2
source ~/.bash_profile 
```

安装`java`

## 命令

```
pod install
flutter packages upgrade
flutter pub get
flutter run
flutter build ios
flutter build ios
flutter clear 
flutter doctor
flutter config
flutter run --release

//Runner.xcworkspace
```

## 运行环境

- java 1.8
- android studio
- xcode 12
- vm15.5.2
- catalina 10.15.4
- flutter

## 虚拟机安装

1. 安装虚拟机  vm15.5.2

2. 关闭服务

   ```
   VMnetDHCP
   VMware NAT Service
   VMware Hostd
   ```

3.   使用管理员 运行 `unlocker-3.0.3` 中 `win-install`，

4. 安装`cantalinna`

   ```
   https://blog.sxbai.com/174.html
   ```

5. 引用cd `darwin` 安装 `vmtools`

## `StatelessWidget`

无状态组件

## `StatefulWidget`

有状态组件

- `MaterialApp`

  ```
  MaterialApp(
        title: 'Flutter Demo',//标题
        theme: ThemeData(
          primarySwatch: Colors.blue,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),//主题
        home: MyHomePage(title: 'Flutter Demo Home Page'),//主页
      );
  ```

## 修改应用图标

- `adnroid`

```
android/app/src/main/AndroidManifest.xml
```



## 路由

-  push

   入栈 

  ```
  //
  Navigator.push(BuildContext context, Route route)
  Navigator.of(context).push(Route route)
  ```

- ### pop

  出栈

  ```
  //
  Navigator.pop(context, "我是返回值")
  Navigator.of(context).pop()
  ```

- pushAndRemoveUntil

   关闭所有页面，打开到应用内的某个页面 

  

组件

- Scaffold

  - appBar
  - body

- Appbar

- Container

- Text

- Image

  图片

- ListView

  滑动列表

- GridView

  九宫格

- 布局

  - Row
  - Column
  - Expanded

  ```
  width：container的宽度，设置为double.infinity可以强制在宽度上撑满，不设置，则根据child和父节点两者一起布局。
  
  height：container的高度，设置为double.infinity可以强制在高度上撑满。
  
  ```

  

- 定位

  - Stack
  - Align
  - Positioned

- AspectRatio

  比例

- Wrap

  换行

```
flutter packages pub run build_runner build --delete-conflicting-outputs
```

## 关键字

- border

  ```
   decoration: BoxDecoration
  ```

  

- 默认样式

  ```
  DefaultTextStyle
  ```

  

- 滚动列表

  ```
  SingleChildScrollView
  ```

  

- `Padding`

  ```
  padding: EdgeInsets.symmetric(horizontal: 16)
  ```

  

- 百分比盒子

  ```
  FractionallySizedBox()
  ```
  
- state盒子

  ```
  StatefulBuilder(
   builder: (BuildContext context, StateSetter setState){}
  )
  ```

- 轮播图

  ```
  PageView
  ```

- flex

  ```
  mainAxisAlignment 主轴
  crossAxisAlignment 纵轴
  
  
  
  ```

  

