#  *Redis* ( Remote Dictionary Server ) 远程字典服务 

- ping

 检测 `redis`服务是否启动 

- 服务器

```
$ redis-cli -h host -p port -a password
```

- 登录

```
auth password
```

- 修改配置

```
vi /etc/redis.conf
```



##  键命令 

- SET [key]

  设键

- GET [key]

  取值

- DEL [key]

  删键

- EXISTS  [key]

  ```
  检查给定 key 是否存在。
  ```

- keys *

  查看所有键

## String

- set [key] [value]

  设值

- setex [key] [seconds] [val] 

  设值 有过期时间的值

- setnx

   没值设值，有值不设置

- mset

  设值多个值

- mget

  获取多个值

- append [key] [val]

  追加字符串

- strlen [key]

  获取字符串长度

- getRange [key] [fristIndex] [lastIndex]

  获取范围字符串

- getset [key] [val]

  先获取后设值

- incr [key]

  i++

- decr [key]

  i--

- incrby [key] [val]

  加

- decrby

  减

## List

- LPush [key] val

  从左推值

- LPush [key] val

  从右推值

- LRange [key] [frist] [last]

  从左取范围

- RPOP [key]

  右移除

- LPOP [key]

  左移除

- Lindex [key] [index]

  获取指定索引

- Lrem [key] [num] [val]

  移除指定数目的指定值

- Ltrim [key] [frist] [last]

  截取指定索引，修改值

- Rpoplpush [source] [targe]

  （组合命令）将源list 最右 移动到 目标list左

- Lset [key] [index] [val]

  给指定下标赋值

- Linsert [key] [BEFORM/AFFTER] [pivot] [value]

  指定值 前或后 插值插值（只插最左第一个）

  ```
  //在值为10 前 插入1000
  linsert arr BEFORE 10 1000
  ```


## set

- sadd [key] [val]

  添值

- smembers [key]

  查看成员

- sismember [key] [val]

  判断是否有此成员

- scard [key]

  获取集合中个数

- srem [key] [val]

  移除某个元素

- srandmember [key]

  随机取一个元素

- sdiff [key] [key1]

  差集

- sinter [key] [key1]

  并集

## map

- hset [key] [map:[key] [val]]

  设值

- hget [key] [map:[key]]

  取值

- hdel [key] [map:[key]]

  删除指定key

- hgetall [key]

  取键所有值

- hlen [key]

  获取长度

- hexists [key] [map:[key]]

  是否存在

- hkeys [key]

  获取所有map key

- hvals [key]

  获取所有map val

## zset(有序集合)

- zadd key score val

  设值

- zrangebyscore [key] [min] [max] 

  排序	

- zrem

  移除

## Geospato

- geoadd key lon lat val

## Hyperloglog

​	基数

- PFadd

## Bitmaps

​	位存储，只有0和1

## 事务

- multi

  开始事务

- exec

  结束事务

- discard

  放弃事务

## 乐观锁

- watch

  监视，如果数据被修改，导致事务执行	失败

- unwatch

  放弃监视

## jedis

​	java连接工具

关键字

- select [index]

  切换数据库

- flushdb

  清空数据库

- keys *

  查看所有key

- ttl [key]

  剩余生存时间

- move [key] [index]

  将当前数据库键移到指定数据库

- type [key]

  查看值类型

## 持久化

- RDB

  dump.rdb

  同一时间集体保存,数据会丢失

  - 触发条件

  1. save规则满足情况下，redis会自动触发RDB规则
  2. flushall命令
  3. 退出Redis

  - 恢复

    将RDB放在redis目录下，启动时自动加载

- AOF

  appendonly.aof

  以日志的形式记录每个写操作，Redis执行时，只追加文件不可改写文件，redis启动时读取该文件重构。

  每秒执行一次sync保存日志。