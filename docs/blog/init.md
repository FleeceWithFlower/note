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