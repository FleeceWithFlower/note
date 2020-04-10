# Mybatis

> 持久层框架，封装JDBC，使开发者只关注SQL语句，使用ORM思想实现结果集封装。

ORM（object relational mapping）

> 对象关系映射



#### SqlSessionFactoryBuilder

> 解析资源，用于构建SqlSessionFactory 

```
        InputStreamin =  Resources.getResourceAsStream("SqlMapConfig.xml");
        SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
        SqlSessionFactory sqlSessionFactory = builder.build(in);
```

#### SqlSessionFactory

> 用于构建SqlSession

:::tip

一旦被创建就应该在应用的运行期间一直存在，没有任何理由丢弃它或重新创建另一个实例

:::

#### SqlSession

> 使用JDBD connection对象进行CRUD

:::tip

每个线程都应该有它自己的 SqlSession 实例,所以它的最佳的作用域是请求或方法作用域。

:::

```
try (SqlSession session = sqlSessionFactory.openSession()) {
  // 你的应用逻辑代码
}
```



#### 映射器实例

> 映射器是一些绑定映射语句的接口。

```
try (SqlSession session = sqlSessionFactory.openSession()) {
  BlogMapper mapper = session.getMapper(BlogMapper.class);
  // 你的应用逻辑代码
}
```

## configuration

properties 

> 设置属性，属性可以在外部进行配置，并可以进行动态替换

```
<properties resource="org/mybatis/example/config.properties">
  <property name="username" value="dev_user"/>
  <property name="password" value="F2Fa3!33TYyg"/>
</properties>
<dataSource type="POOLED">
  <property name="user" value="${user:root}"/><!--这是变量，并且设置了默认值-->
</dataSource>
```

:::tap

先加载内部属性，在加载外部属性并相同属性替换。

:::

settings

- cacheEnabled

  > 开启全局缓存

- lazyLoadingEnabled

  > 全局延迟加载

typeAliases

> 配置别名，降低冗余的全限定类名书写

```
<typeAliases>
  <typeAlias alias="Author" type="domain.blog.Author"/>
</typeAliases>
```

environments 

> 定义环境变量

mappers

> 配置 SQL 映射语句

```
    <mappers>
        <package name="com/fleece/dao"/> <!--目录名下所有配置文件-->
<!--        <mapper resource="com/fleece/dao/IUserDao.xml"/>-->
    </mappers>
```

## XML 映射器

> MyBatis 的真正强大在于它的语句映射,让用户能更专注于 SQL 代码。

properties

- id

  在命名空间中唯一的标识符，可以被用来引用这条语句。

- parameterType

  将会传入这条语句的参数的类全限定名或别名。

- resultType

  期望从这条语句中返回结果的类全限定名或别名

- resultMap

  对外部 resultMap 的命名引用，结果映射是 MyBatis 最强大的特性。

- useCache

  是否启用二级缓存

- flushCache

  只要语句被调用，都会导致本地缓存和二级缓存被清空

- useGeneratedKeys

  MyBatis 使用 JDBC 的 getGeneratedKeys 方法来取出由数据库内部生成的主键（仅适用于 insert 和 update）

- keyProperty

  MyBatis 会使用 getGeneratedKeys 的返回值或 insert 语句的 selectKey 子元素设置它的值



```
<select
  id="selectPerson"
  parameterType="int"
  resultType="hashmap"
  resultMap="personResultMap"
  useCache="true"
  ">
```

### 主要标签

select

- id

  唯一标识

- parameterType

  参数类型

insert

update 

delete

#### resultMap

- 属性

  - id

    唯一标识

  - type

    封装类型

- 标签

  - id

    标记ID，作用同result，但可以提高整体性能

  - result

    注入到字段或 JavaBean 属性的普通结果

  - association

    配置关联表结果类型

    - javaType

      返回类型

    - resultMap

      将查询加过封装为指定map

    - columnPrefix

      去除别名前缀

    - select

      执行select语句并封装结果

    - column

      作为参数传递给select

  - collection

    和association相似，但返回List集合

    - ofType

      集合中项的类型

  - discriminator

    数据库查询同一字段可能返回不用的类型，用于鉴别类型

    ```
      <discriminator javaType="int" column="vehicle_type">
        <case value="1" resultMap="carResult"/>
        <case value="2" resultMap="truckResult"/>	
      </discriminator>
    ```


## 动态 SQL

- if 

  用于判断

  - test

    表达式

- choose

  同`swith` 语句 

  ```
    <choose>
      <when test="title != null">
        AND title like #{title}
      </when>
      <otherwise>
        AND featured = 1
      </otherwise>
    </choose>
  ```

-  *where* 

  同where语句	

- ### foreach

  循环

- bind

  创建变量

  ```
  <bind name="pattern" value="'%' + _parameter.getTitle() + '%'" />
  ```

  