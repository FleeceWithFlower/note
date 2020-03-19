## MySQL

- 配置文件

```
C:\\mysql\my.ini
```

- 初始化数据库

```
cd C:\\mysql\bin
//需要删除安装目录下的data
//需要删除系统中mysql服务
mysqld --initialize --console
```

- root免密登录

```
mysqld --console --skip-grant-tables --shared-memory
```

- 重置密码

```
ALTER USER 'root'@'localhost' IDENTIFIED BY '你要设置的密码'
//忘记root密码时可以删除安装目录下的data，然后使用 mysqld --initialize --console 命令 重新安装。
```

- 登录

```
mysql -u root -p
```

- 启动及关闭 MySQL 服务器

```
//windows
net start mysql
net stop mysql
```

## 终端操作

- show databases;

  展示所有数据库

- show tables;

  查看数据库中的表

- use DB;

  选择某一数据库

- describe \<tabelName\>;

  查看数据表结构

- select * form \<tabelName\>

  查询表中记录

- exit;

  退出数据库服务器

- create database \<dataBaseName\>;

  创建数据库

增

- insert into \<tabelName\> values(val,val1);

  向表中增加记录



## 数值类型

### 数值

- INT

- FLOAT

- DOUBLE

日期

- DATE

- TIME
- YEAR

### 字符串

- CHAR

- VARCHAR

- BLOB

- TEXT

### 关键字

#### 数据库（Database）

> 数据库（Database）是按照数据结构来组织、存储和管理数据的仓库。

#### 关系数据库管理系统(（RDBMS）

> 建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。

#### RDBMS 术语

- **数据库:** 数据库是一些关联表的集合。
- **数据表:** 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
- **列:** 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据。
- **行：**一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
- **冗余**：存储两倍数据，冗余降低了性能，但提高了数据的安全性。
- **主键**：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
- **外键：**外键用于关联两个表。
- **复合键**：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
- **索引：**使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
- **参照完整性:** 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。

#### 表结构

- 表头(header): 每一列的名称;
- 列(col): 具有相同数据类型的数据的集合;
- 行(row): 每一行用来描述某条记录的具体信息;
- 值(value): 行的具体信息, 每个值必须与该列的数据类型相同;
- **键(key)**: 键的值在当前列中具有唯一性。

#### 术语

DB

### 