# Java

## 数据类型

- 整型
  - int(常用)
  
  - short
  
- long
  
  - byte
  
  - BigInteger
  
    大整数，没有位数限制
  
- 小数
  - float
  - double(常用)

- char

  用于表示Unicode，不常用

- boolean

- String（非内置类型）

  非内置类型，由char值序列组成

- enum

  枚举类型

  ```
  //自定义枚举类型
  enum Size {SMALL,MEDIUM,LARGE}
  //声明 Szie 类型变量
  Size s = Size.MEDIUM
  ```

  

## JAVA类 

## JAVA抽象类

抽象类

在面向对象的概念中，所有的对象都是通过类来描绘的，但是反过来，并不是所有的类都是用来描绘对象的，如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。 使用 abstract class 来定义抽象类 

抽象方法

 该方法的具体实现由它的子类确定， 

:::tip

- 抽象类不能被实例化 
- 抽象类中不一定包含抽象方法，但是有抽象方法的类必定是抽象类 
- 抽象类中的抽象方法只是声明 ,任何子类必须重写父类的抽象方法，或者声明自身为抽象类。

:::

```
 public abstract double computePay();
```



## Java 接口

接口与类的区别：

- 接口不能用于实例化对象。
- 接口没有构造方法。
- 接口中所有的方法必须是抽象方法。
- 接口不能包含成员变量，除了 static 和 final 变量。
- 接口不是被类继承了，而是要被类实现。
- 接口支持多继承。

## 修饰符

- final

  声明常量

### static

- 静态变量

  static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量。

- 静态方法

  static 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。

## Java 封装

 防止该类的代码和数据被外部类定义的代码随机访问 

步骤

1. 修改属性的可见性来限制对属性的访问（一般限制为private） 
2. 对每个值属性提供对外的公共方法访问 

## Java 包(package)

## JDK预定义注解

- @Override

  检测被该注解注释的方法是否是继承自父类

- @Deprecated

  该注解标注的内容已过时

- @SuppressWarnings

  压制警告

## Junit

> Java语言的单元测试框架 

## JDBC

> 用来规范客户端程序如何来访问数据库的应用程序接口,一套java代码可 以操作不同的数据库
>
> 需要驱动jar包 mysql-connector-java.jar

操作流程

```
Class.forName("com.mysql.cj.jdbc.Driver");//注册驱动
Connection connection =  DriverManager.getConnection(url, user, password);//获取数据库连接对象
Statement stmt = conn.createStatement();//创建sql对象
String querySQL = "select * from students"; 
ResultSet resultSet = stmt.executeQuery(querySQL);//执行sql语句
stmt.close();//释放sql对象
conn.close();//释放数据库连接对象
```

## 数据库连接池

> 数据库连接池负责分配、管理和释放数据库连接，它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个；  释放空闲时间超过最大空闲时间的数据库连接来避免因为没有释放数据库连接而引起的数据库连接遗漏。 

### Druid连接池

> 引入 Druid jar包

创建工具类

```
Properties pro = new Properties(); //创建Properties对象
InputStream is = JDBCUtils.class.getClassLoader().getResourceAsStream("druid.properties");
pro.load(is);//加载自定义值
DataSource ds = DruidDataSourceFactory.createDataSource(pro);//传入参数获取 连接池对象
```

操作数据库

```
String sql = "insert into user values(null,?,?,?)";
preparedStatement = JDBCUtils.getConnection().prepareStatement(sql);//创建sql对象
preparedStatement.setString(1, username);
preparedStatement.setString(2, password);
preparedStatement.setInt(3, 18);//赋值
preparedStatement.executeUpdate();//执行
JDBCUtils.close(stmt,conn)//释放sql对象，归还连接
```



## JDBCTemplate

> 简化JDBC开发，不需要申请连接和释放资源。

SpringJDBCTemplate

```
JdbcTemplate template = new JdbcTemplate(JDBCUtils.getDataSource());
String sql = "update user set age=? where id=11";
template.update(sql,25);
```

常用API

- updata()

  执行	DML 语句，增删改查

- queryForMap()

  查询结果讲结果封装为map集合

- queryForList()

  查询结果将结果封装为List集合

- query()

  查询结果将结果封装为javaBean对象

- queryObject()

  查询结果将结果封装为对象

- BeanPropertyRowMapper

  查询结果将结果封装自定义对象

  ```
  template.query(sql,new BeanPropertyRowMapper<User>(User.class));
  ```

  

## Servlet

## HTTPServlet



配置路由

```
//web.xml
    <servlet>
        <servlet-name>demo1</servlet-name>
        <servlet-class>cn.itcust.web.servlet.ServletDemo1</servlet-class><!--映射类-->
    </servlet>
    <servlet-mapping>
        <servlet-name>demo1</servlet-name>
        <url-pattern>/demo1</url-pattern><!--路由-->
    </servlet-mapping>
```

配置Servlet类创建

- 默认第一次访问Servlet时创建
- 服务器初始化时创建

```
//web.xml
<!--值为>0时，服务器初始化时创建-->
<load-on-startup>1</load-on-startup>
```

类方法

- init

  初始化触发

- getServletConfig

  获取配置文件信息

- service

  被访问是触发

- getServletInfo

  回去ServletInfo信息

- destroy

  销毁时触发

<<<<<<< HEAD
## 工程目录

- dao

   进行数据操作的类  

- domain

   与数据库表--一一对应的javaBean 

## BeanUtils

## JAVABeanUtils

> 标准java类，用于封装数据库
>
> - 类必须被public修饰
> - 必须提供空参的构造器
> - 成员必须用private修饰
> - 提供成员 setter getter方法

## response



- setHeader

- setStatus

- getWriter

  获得字符输出流

- getOutputStream

  获得字节输出流

- setCharacterEncoding

- setContentType

- sendRedirect

## ServletContext

## Filter

> 用于拦截请求

@WebFilter

> 配置路径

生命周期

- init

  服务器启动时，用于加载资源

- doFilter

  每次请求

- destroy

  服务器正常关闭，用于销毁资源

## 动态代理

## ServletContextListener

监听器

@WebListener

## JSON转换

```
ObjectMapper mapper = new ObjectMapper();
String json =  mapper.writeValueAsString(obj);
```

Maven

mvn clean

> 删除target

mvn compile

> 将main文件夹下所有Java编译为class到target

mvn package

> 打成war包

mvn install

> 打成war包，推送到本地仓库

mvn test

> 调用test文件夹下的所有测试方法，并生成测试包	

## 三层架构

-  界面层 ( 表示层 )
-  业务逻辑层 ( 领域层)
-  数据访问层 ( 持久层 )
=======
Redis

MAVEN

标准目录结构

src/main/java	核心代码

src/main/resources	配置文件

src/test/java	测试代码

src/main/webapp web资源

## JNDI

## 集合接口

Collection

> 是最基本的集合接口 

List  

> 继承于`Collection`

Set 

> 继承于`Collection`

### Map

> 继承于`Collection`

### 关键字

- 集合√

  由一个或多个确定的元素所构成的整体

  - 链表
  - 循环数组
  - 队列