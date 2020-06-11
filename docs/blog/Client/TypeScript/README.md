# TypeScript

- 安装

```
npm install typescript -D
```

- 编译

```
tsc <file>
```

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



```



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

## 接口

### interface

> 接口描述