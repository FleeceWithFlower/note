## MySQL

- 配置文件

```
C:\\mysql\my.ini   //windows
/etc/my.cnf   //linux
```

- 初始化数据库

```
cd C:\\mysql\bin
//需要删除安装目录下的data
//需要删除系统中mysql服务
//mysql 8.0以上版本 需要安裝 Visual C++ Redistributable for Visual Studio 2015
mysqld --install //初始化服务
mysqld --initialize --console //初始化root用户
```

- 初始密码

```
//linux
sudo grep 'temporary password' /var/log/mysqld.log
```



- 启动及关闭 MySQL 服务器

```
//windows
net start mysql
net stop mysql
//linux
systemctl start mysqld //启动
systemctl stop mysqld //关闭
systemctl status mysqld //查看状态
```

- 登录

```
mysql -u root -p
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





## 终端操作

- show databases;

  查看所有数据库

- show tables;

  **查看数据库中所有的表**

- select * form \<tabelName\>

  查看表中所有记录

- describe \<tabelName\>;

  查看数据表结构



- 创建数据库

  ```
  create database \<dataBaseName\>;
  ```

- 删除数据库

  ```
  drop database <数据库名>;
  ```

- 创建表 

  ```
  CREATE TABLE table_name (column_name column_type);
  ```

  ​	约束

  - 主键约束(primary key)

    唯一且不为空；

  - 自增约束(auto_increment)

    非必传,自行增长

  - 唯一约束(unique)

    不重复

  - 非空约束(not null)

    不为NULL

  - 默认约束(default)

    设置默认值

  - 外键约束( foreign key(key) references classes(key) )

    关联表

    ```
    CREATE TABLE table_name (class_id int, foreign key(class_id) references classes(id);
    ```

    

- 删除表

  ```
  DROP TABLE table_name ;
  ```

- use DB;

  选择某一数据库

- exit;

  退出数据库服务器

增

- insert into \<tabelName\> values(val,val1);	

  向表中增加记录
  
- 增加某一条

  insert into \<tabelName\> (*key*) values(val);

删

- delete from \<tableName\> where name=val

改

- update \<tableName\>  set ***key=val*** where ***key=val***

查

- select  *  from  \<tableName\> ;

###  WHERE 

类似 if 语句 ，赛选返回true 的记录。

```
SELECT * from runoob_tbl WHERE runoob_author='菜鸟教程';
```

### LIKE 

 LIKE 通常与 **%** 一同使用 ，相当于正则中 * 号

### UNION  

查询多个表，去重

```
select name from students union select name  from origin;
```

UNION ALL

查询多个表，不去重

```
select name from students union all select name  from origin;
```

 **ORDER BY** 

分组

1.  ASC 

   升序

2.  DESC 

   降序

### WITH ROLLUP

JOIN

查询多个表

- inner join

  交集

- left join

  左边全读，右边交集

- right join 

  右边全读，左边交集

### NULL 值处理

查值时 不能使用 = NULL 或 != NULL 在列中查找 NULL 值 。 

-  **IS NULL** 

   当列的值是 NULL,此运算符返回 true 

-  **IS NOT NULL** 

    当列的值不为 NULL, 运算符返回 true 	

-  **<=>** 

   当比较的的两个值相等或者都为 NULL 时返回 true。 

### 正则（REGEXP ）

```
SELECT name FROM person_tbl WHERE name REGEXP '^st';
```

### 事务

-  **BEGIN**  

  开始一个事务

-  **ROLLBACK**  

   事务回滚 

-  **COMMIT**  

   事务确认 

### ALTER

 修改数据表名或者修改数据表字段 

- 删除表字段

```
ALTER TABLE @TABLEName  DROP @field;
```

- 添加表字段

```
ALTER TABLE @TABLEName ADD  @field;
```

- 修改表字段

```
ALTER TABLE @TABLEName MODIFY  @field;
```

```
ALTER TABLE @TABLEName CHANGE @oldField @newField;
```

- 修改和设置默认值

```
ALTER TABLE @TABLEName ALTER @field SET DEFAULT @val;
```

- 删除默认值

```
ALTER TABLE @TABLEName ALTER @field DROP DEFAULT;
```

- 修改表名

```
ALTER TABLE @TABLEName RENAME TO @val;
```

### 索引

 MySQL索引的建立对于MySQL的高效运行是很重要 

### 临时表

 MySQL 临时表在我们需要保存一些临时数据时是非常有用的。临时表只在当前连接可见，当关闭连接时，Mysql会自动删除表并释放所有空间。 

```
CREATE TEMPORARY TABLE @TABLEName();
```

### 复制表

```
 SHOW CREATE TABLE @TABLEName;//	查看建表命令 并使用该命令 修改表名 重新建表
 INSERT INTO @TABLEName(@FIELD) SELECT @FIELD FROM @TABLEName; //	克隆数据
```



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



## 内置函数

### 字符串

- CHAR_LENGTH(s) 

  返回字符数  

  ```
  SELECT CHAR_LENGTH("RUNOOB") AS LengthOfString;
  ```

-  CONCAT 

   合并字符串 

  ```
  SELECT CONCAT("SQL ", "Runoob ", "Gooogle ", "Facebook") AS ConcatenatedString;
  ```

-  CONCAT_WS(x, s1,s2...sn) 

  使用连接符

  ```
  SELECT CONCAT_WS("-", "SQL", "Tutorial", "is", "fun!")AS ConcatenatedString;
  ```

### 数字

-  AVG 

   平均值

  ```
  SELECT AVG(Price) AS AveragePrice FROM Products;
  ```

  

判断

- case

  ```
  SELECT CASE 
  　　WHEN 1 > 0
  　　THEN '1 > 0'
  　　WHEN 2 > 0
  　　THEN '2 > 0'
  　　ELSE '3 > 0'
  　　END
  ```

- if

  ```
  SELECT IF(1 > 0,'正确','错误')
  ```

  

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

```
INSERT INTO clone_tbl (runoob_id,
    ->                        runoob_title,
    ->                        runoob_author,
    ->                        submission_date)
    -> SELECT runoob_id,runoob_title,
    ->        runoob_author,submission_date
    -> FROM runoob_tbl;
```



## 第三范式

## BCNF 范式



