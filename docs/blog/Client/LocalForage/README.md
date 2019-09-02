# LOCALFORAGE

> **改进的离线存储**

1. 可存储多数据类型
2. 兼容性强
3. API 简单

## 安装

npm install localforage

## 使用流程

1. 引入localforage
2. 配置数据库名称
3. 配置数据仓库名称
4. 配置驱动优先级

## 基本操作

### 查询数据

getItem(key, successCallback)

### 修改数据

setItem(key, value, successCallback)

### 删除数据

removeItem(key, successCallback)

### 重置数据库

clear(successCallback)

### LENGTH

length(successCallback)

> 获取离线仓库中的 key 的数量（即数据仓库的“长度”）。

### KEY

key(keyIndex, successCallback)

> 根据 key 的索引获取其名

### KEYS

keys(successCallback)

> 获取数据仓库中所有的 key。

### ITERATE

iterate(iteratorCallback, successCallback)

> 迭代数据仓库中的所有 value/key 键值对。

## 驱动

setDriver(driverName)
setDriver([driverName, nextDriverName])

> 默认情况下，localForage 按照以下顺序选择数据仓库的后端驱动：
>
> 1. IndexedDB
> 2. WebSQL
> 3. localStorage

- 参数
  - `localforage.INDEXEDDB`
  - `localforage.WEBSQL`
  - `localforage.LOCALSTORAGE`

driver()

> 返回正在使用的驱动的名称



## 配置

config(options)

- 参数

  - **driver**

    > 驱动

  - **name**

    > 数据库的名称

  - **size**

    > 数据库的大小（以字节为单位）。现在只用于WebSQL。

  - **storeName**

    > 数据仓库的名称

  - **version**

    > 数据库的版本。

  - **description**

    > 数据库的描述

## 实例

createInstance

> 创建并返回一个 localForage 的新实例

dropInstance

> 删除*数据库*	

参数

- `name` 

  > 仅指定了 `name` 属性,将删除指定的 “数据库”

- `storeName` 

  > 指定了 `name` 和 `storeName` 属性，会删除指定的 “数据仓库”