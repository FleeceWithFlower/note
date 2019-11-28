配置文件

```
C:\Program Files\mongodb-win32-x86_64-2008plus-ssl-4.0.9\bin\mongod.cfg
```

启动

```
mongod
```

- 默认在当前目录磁盘下的根目录=>data=>db
- 修改数据存储路径

```
mongod --dbpath(数据存储路径)
```

连接

```
mongo
```

退出连接

```
exit
```

查看显示所有数据库

```
show dbs
```

查看当前数据库

```
db
```

切换指定数据库

```
ues
```

插入数据

```
 db.students.insertOne({"name":"jack"})
```

查看当前数据库集合

```
show collections
```

查看数据库数据

```
db.<collection>.find()
//db.students.find()
```

