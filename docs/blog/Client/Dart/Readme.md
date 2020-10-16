# Dart

 Dart是谷歌开发的计算机编程语言 , 它被用于web、服务器、移动应用和物联网等领域的开发。 

```
void main(List<String> args) {
  print("hello world");
}
```

## 变量

- `var`

  ```
    var str ="hello";
  ```

- `Type`

  ```
  String str = "hello";
  ```

## 常量

- `const`

  ```
   const str = "hello";
  ```

- final

  ```
   final str = new DateTime.now();
  ```

:::tip

区别		 `const`比`final`更加严格。`final`只是要求变量在初始化后值不变 

:::

## 运算符

-  == 

  相等，同`JAVA`

- !=

  不相等

- `?:`

  三元运算

- ++

  自增

- --

  自减

- `>`

- `<`

- `>=`

- `<=`

- +

  用于字符串拼接，`num`运算

- -

  用于`num`运算

- *

  用于`num`运算

- /

  用于`num`运算

- %

  取余

- ~/

  取整

- &&

  同`java`

- ||

  同`java`

- ??=

  如果变量为空，则赋值

  ```
  var num = null;
  num ??=23;
  ```

## 关键字

- `if/else`

- `switch/case`

- `try/catch`

- `for/continue/break`

- `while`

- `do/while`

- as

  类型转换

- is

  类型判断

- `..`

  联级操作，链式写法

  ```
  class Hello {
    String text = "";
    printText() {
      print(this.text);
    }
  }
  
  void main(List<String> list) {
    var w = new Hello();
    w
      ..text = "hello world"
      ..printText();
  }
  ```

  

## String

 Dart 字符串是一组 `UTF-16` 单元序列。 

```
String hel = "hello";
String wor = 'world';
String helloWorld = """
hello 
world """;
String s = r"hello world.";

print(hel+" "+wor);
print("$hel $wor");	//${expression} 的方式内嵌表达式。 如果表达式是一个标识符，则 {} 可以省略
print(helloWorld);	//使用连续三个单引号或者三个双引号实现多行字符串对象的创建
print(s);	//使用 r 前缀，可以创建 “原始 raw” 字符串
```

## Number

- `int`

   整数值不大于64位

  ```
  int num = 1;
  ```

- `double`

   64位（双精度）浮点数 

  ```
  double num = 1.1;
  ```

## Boolean

```
  bool v = false;
```

- `true`

  真

- `false`

  假

## 集合

Dart 附带了核心集合 `API `，其中包括 list ，set 和 map 类。

- `length`
- `isEmpty`
- `isNotEmpty`

## List

```
var list = [1, 2, 3];
------
List list = new List();
list.add(1);
list.add(2);
print(list);
---
List list = new List(String); //集合内必须为String类型
```

- `add`

  添加一个项

  ```
  fruits.add('kiwis');
  ```

- `addAll`

  添加多个项

  ```
  fruits.addAll(['grapes', 'bananas']);
  ```

- `removeAt`

  移除

  ```
  fruits.removeAt(2);
  ```

- `indexOf`

   查找一个项在 list 中的下标值 

  ```
  assert(fruits.indexOf('apples') == 0);
  ```

- `fillRange`

- `forEach`

- `map`

- `every`

- `where`

- `any`

  

## Map

 关联 keys 和 values 的对象 

```
var gifts = {
  // Key:    Value
  'first': 'partridge',
  'second': 'turtledoves',
  'fifth': 'golden rings'
};
```

## 函数

```
bool isNoble(int atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```

-  箭头函数 

  ```
  bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
  //如果函数中只有一句表达式，可以使用简写语法：
  ```

-  匿名函数

  ```
  var fn = (){...}
  ```
  

  
-  指定命名参数 

  ```
  void enableFlags({bool bold, bool hidden}) {...}
  enableFlags(bold: true, hidden: false);
  ```

-  位置可选参数

   ```
   String say(String from, String msg, [String device]) {}
   ```

-  默认参数值

   ```
   void enableFlags({bool bold = false, bool hidden = false}) {...}
   ```

- main() 函数

   任何应用都必须有一个顶级 `main()` 函数，作为应用服务的入口。 

  ```
  // 这样运行应用： dart args.dart 1 test
  void main(List<String> arguments) {...}
  ```

## 类

```
class Hello {}
```

- 类中方法`this`指向该类

- 构造函数

  创建实例时触发

  ```
  class Hello {
    A(String text){print(text);}
  }
  ```

  赋值简写

  ```
  class Hello {
    String text = "";
    Hello(this.text);
  }
  new Hello("hello");
  ```

  默认赋值

  ```
  class Hello {
    String text = "";
    Hello():text="hello";
    printText(){
      print(this.text);
    }
  }
  void main(List<String> list) {
    Hello hello =  new Hello();
    hello.printText();
  }
  ```

  命名构造函数

  ```
  class Hello {
    Hello.world(){
      print("hello world");
    }
  }
  new Hello.world();
  ```

- 模块化

  ```
  import 'hello.dart';
  void main(List<String> list) {
    Hello hello =  new Hello();
  }
  ```

- 私有属性

  模块化时，属性前加`_`

  ```
  class Hello {
    String _str = "a";
  }
  ```

- get

- set

- 静态属性

  非静态方法可以访问静态成员和非静态成员

  ```
  class Hello {
    static String text = "";
  }
  ```

- 静态方法

  静态方法不能访问非静态成员

- 继承

  子类继承父类公有属性和方法，单继承

  ```
  class PrintText {
    String text = "";
    PrintText(this.text);
    void printText(){
      print(this.text);
    }
  }
  class HelloWorld  extends PrintText{
    HelloWorld(String text) : super(text);// 向 PrintText 传参
  }
  void main(){
    HelloWorld helloWorld = new HelloWorld("hello world");
    helloWorld.printText();
  }
  ```

  重写

  ```
  class PrintText {
    void printText(){
      print(1);
    }
  }
  class HelloWorld  extends PrintText{
    @override
    printText(){
      print(2);
    }
  }
  void main(){
    HelloWorld helloWorld = new HelloWorld();
    helloWorld.printText();
  }
  ```

- 抽象类

  主要用于定义标准，抽象类不能实例化，继承抽象类的子类可以实例化。

  ```
  abstract class Animal{
  	eat();
  }
  ```

- 接口

  可实现多接口

  ```
  abstract class Animal{
  	eat();
  }
  class Cat implements Animal{
  	@override
  	eat(){
  		print("吃鱼");
  	}
  }
  ```

- Mixins

  合并两个类

  ```
  class A{
   void printA(){
   	print("A");
   }
  }
  class B{
   void printB(){
   	print("B");
   }
  }
  class C with A,B{
  
  }
  void main(){
  	C c = new C();
  	c.printA();
  	c.printB();
  }
  ```

  作为父类不能存在构造函数

## 泛型

1. 正确指定泛型类型可以提高代码质量。
2. 使用泛型可以减少重复的代码。

```
var names = List<String>();
```

```
abstract class Cache<T> {
  T getByKey(String key);
  void setByKey(String key, T value);
}
```

- 限制泛型类型

  ```
  class Foo<T extends SomeBaseClass> {
    // Implementation goes here...
    String toString() => "Instance of 'Foo<$T>'";
  }
  
  class Extender extends SomeBaseClass {...}
  ```

## 库

pub

1. 创建`pubspec.yaml`

   ```
   name: my_app
   dependencies:
     js: ^0.3.0
     intl: ^0.12.4
   ```

2. `pub get`

   下载包

- `pub upgrade`

  更新