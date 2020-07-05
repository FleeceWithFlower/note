# TypeScript

- 安装

```
npm install typescript -D
```

- 编译

```
tsc <file>
```

1.  TypeScript的核心原则之一是对值所具有的*结构*进行类型检查。 

## 语法

- 变量

```
//修饰符 变量名:变量类型 = 值三
let isDone: boolean = false;
```

- 函数

```
//修饰符 函数名(参数:参数类型):返回值类型
function add(x: number, y: number): number {
    return x + y;
}
//或 定义接口
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
```

- 类

   TypeScript里，成员都默认为 `public`。 

:::tip

constructor存在于类的静态部分，所以不在检查的范围内。

:::

## 基础类型

### 布尔值

```
let isDone: boolean = false;
```

### 数字

```
let decLiteral: number = 6;
```

### 字符串

```
let name: string = "bob";
```

### 数组

```
let list: number[] = [1, 2, 3];
```

- 只读数组

```
let ro: ReadonlyArray<number> = a;
```

### 元组

```
let x: [string, number]= ['1', 2];
```

### 枚举

```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### Any

> 不确定类型，直接通过检查

```
let notSure: any = 4;
let list: any[] = [1, true, "free"];
```

### Void

> 获函数返回为空，或只能赋予`undefined`和`null`

```
function warnUser(): void {
    console.log("This is my warning message");
}
let unusable: void = undefined;
```

### Null 和 Undefined

```
let u: undefined = undefined;
let n: null = null;
```

### Never

> `never`类型表示的是那些永不存在的值的类型。如抛出异常 

```
function error(message: string): never {
    throw new Error(message);
}
```

### Object

> `object`表示非原始类型,除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型

### 类型断言

> 程序员标注变量类型

```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

## 类

TypeScript里，成员都默认为 `public`。 

- ## `public`

  外部可访问

- ## `private`

  外部不可访问

- static

  静态属性

- ## `protected`

  外部不可访问，派生类中仍然可以访问。 

- `readonly`

  只读属性, 必须在声明时或构造函数里被初始化 

## 继承

### 抽象类

​	 抽象类做为其它派生类的基类使用。  不同于接口，抽象类可以包含成员的实现细节。  抽象类必须被继承 才能使用

## 接口

​	定义 类 应该实现的 属性 和 方法

```
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
```



### **interface**

​	用于约束类型

```
interface LabelledValue {
  label: string;
}
```

- 可选属性

```
interface SquareConfig {
  color?: string;
  width?: number;
}
```

- 只读属性

```
interface Point {
    readonly x: number;
    readonly y: number;
}
```

## 类型断言 

 重写类型断言 

```
a = ro as number[];
```

