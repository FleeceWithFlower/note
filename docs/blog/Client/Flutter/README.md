# Flutter

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

