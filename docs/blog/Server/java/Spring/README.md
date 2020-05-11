# Spring

> Spring 是一款轻量级控制反转（IOC）和面向切面编程（AOP）的框架

IoC

​	全程`Inversion of Control` 控制反转。对象由Spring创建，管理，装配，削减计算机的耦合。其中最常见的方式叫做*依赖注入*（Dependency Injection，简称DI）

- DI(注入依赖)

aop（面向切面编程）

 

 





BeanFactory

ApplicationContext

​	该`org.springframework.context.ApplicationContext`是一个维护bean定义以及相互依赖的注册表的高级工厂的接口,代表Spring IoC容器，并负责实例化，配置和组装Bean。

```
ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml");
```

getBean

​	用来检索bean的实例

```
IA as =  ac.getBean("accountService",IA.class) //使用ID
IA as =  ac.getBean("accountServiceAlias ",IA.class)//使用name或别名
IA as =  ac.getBean(IA.class)//使用类
```



构造方法

- ClassPathXmlApplicationContext

  类路径配置文件

- FileSystemXmlApplicationContext

  磁盘下路径配置文件

- AnnotationConfigApplicationContext

  读取注解

## 



### 标签

- bean

  ​	Spring IoC容器管理一个或多个bean。这些bean是使用您提供给容器的配置元数据创建的

  :::tip

  Bean命名约定

  ​	bean名称以小写字母开头，实例名加包名，驼峰式大小写例子，包括`accountManager`， `accountService`，`userDao`，`loginController`，等等。

  :::

  - id

    唯一标识符

  - name

    别名

  - class

    指定类

    :::tip

    class命名规则

    1.类全名

    2.类中的嵌套类

    例如，如果`SomeThing`在`com.example`包中有一个名为的类，并且 `SomeThing`该类有一个`static`名为的嵌套类`OtherThing`，则`class` bean定义上的属性值将为`com.example.SomeThing$OtherThing`。

    :::

  - scope

    作用范围

  - singleton

    > 单例(默认值)

  - factory-method

    利用方法创造对象

  - factory-bean

    指定某一个bean返回的类

  - request

  - session

  - global-session

  ```
  //对象工程静态创建对象 //静态方法有static修饰
  <bean id="clientService"
      class="examples.ClientService"
      factory-method="createInstance"/>
  //动态创建对象
  <bean id="serviceLocator" class="examples.DefaultServiceLocator"></bean>
  <bean id="clientService"
      factory-bean="serviceLocator"
      factory-method="createClientServiceInstance"/>    
  ```

  

- alias

  别名

```
<alias name="myApp-dataSource" alias="subsystemA-dataSource"/>//name值可以为 Bean的id或name
```



- import

  > 引用其他XML文件的Bean

```
 <import resource="services.xml"/>
```

- constructor-arg

  ​	传参

  - value

    ​	参数值

  - type

    ​	参数类型

  - index

    ​	参数索引

  - name

    ​	参数名

  - ref

    ​	引用

- property

  - name

    参数名

  - value

    参数值

  - ref

    引用





使用类中默认构造函数创建对象

```
<bean id="accountService" class="service.impl.AccountServiceImpl"></bean>
```

使用类中方法

```
<bean id="accountService" class="service.impl.AccountServiceImpl"></bean>
<bean id="accountService2" factory-bean="accountService" factory-method="getAccountService"></bean>
```

使用类中静态方法

```
<bean id="accountService" class="service.impl.AccountServiceImpl" factory-method="getAccountService"></bean>
```



## 基于构造函数注入模式

```
package com.fleece.springFrameworkDemo.dao;

import java.util.Date;

public class User {
    private String name;
    private Integer age;
    private Date date;

    public User(String name, Integer age,Date date) {
        this.name = name;
        this.age = age;
        this.date = date;
    }
    public String getName() {
        return name;
    }
    public Integer getAge() {
        return age;
    }
    public Date getDate() {
        return date;
    }
}
```



```
//bean.xml
<bean id="now" class="java.util.Date"></bean>
<bean id="user" class="com.fleece.springFrameworkDemo.dao.User">
        <constructor-arg  name="name" value="K"/>
        <constructor-arg  name="age" value="18"/>
        <constructor-arg  name="date" ref="now" />
</bean>
```

使用	constructor-arg 标签注入依赖，name为属性名，value为值，Spring自动转换基本类型，复杂类型需要使用 bean 引入。 









## 基于set方法注入模式

```
package com.fleece.springFrameworkDemo.dao;
import java.util.Date;
public class Account {
    public Integer id;
    public Integer count;
    public Date date;
    public void setId(Integer id) {
        this.id = id;
    }
    public void setCount(Integer count) {
        this.count = count;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", count=" + count +
                ", date=" + date +
                '}';
    }
}
```

```
<bean id="now" class="java.util.Date"></bean>
<bean id="account" class="com.fleece.springFrameworkDemo.dao.Account">
<property  name="id" value="1"></property>
<property  name="count" value="200"></property>
<property  name="date" ref="now"></property>
</bean>
```

使用 property 标签 通过 set方法 注入依赖，基本类型自动转换，复杂类型通过 指定Bean标签或 一下方法注入

复杂类型

array

```
<property name="myStrs">
            <array>
                <value>AAA</value>
                <value>BBB</value>
            </array>
</property>
```

list

```
<property name="myList">
            <list>
                <value>AAA</value>
                <value>BBB</value>
            </list>
</property>
```

set

```
<property name="mySet">
            <set>
                <value>AAA</value>
                <value>BBB</value>
            </set>
</property>
```

map

```
<property name="myMap">
            <map>
                <entry key="a" value="1"></entry>
                <entry key="b" value="2"></entry>
            </map>
</property>
```

props

```
<property name="myProperties">
            <props>
                <prop key="a">1</prop>
                <prop key="b">2</prop>
            </props>
</property>
```

## 构造函数注入与set注入区别

构造函数 必须传所有值，set模式不用传所有值。

## 注解模式

获取容器

```
ApplicationContext ac = new AnnotationConfigApplicationContext();
```

@Component

> 将当前类对象存入Spring容器中

- value

  > 指定Id

  ```
  @Component(value = "myAccount")
  ```

@Controller

> 用于表现层

@Service

> 业务层

@Repository

> 持久层

@Autowired

> IOC容器中 自身类型和BEAN类型 有唯一一个时，自动注入该BEAN
>
> 如果有多个匹配的BEAN时，自身变量名和BEAN的ID相同，自动注入该BEAN
>
> 不需要set方法	 

@Qualifier

> 按照类型注入的基础上再按照名称注入

- value

  > 用于指定注入bean的id

@Resource

> 直接按照bean的id注入

@Value

> 用于注入基本类型和Sring类型的数据

- value

  > 用于指定数据的值

@Scope

> 作用范围,取值同xml

@PreDestroy

> 指定销毁方法，对象为多例时 Spring不负责

@PostConstruct

> 指定初始化方法

@Configuration

> 配置类

@ComponenScan

> 指定创建容器时要扫描的包

@Bean

> 用于把当前方法的返回值作为Bean对象存入Spring的IOC容器中

- ​	name

  等于ID

@Import

> 加载子配置类	

@PropertySource

> 加载properties文件

```
@PropertySource("classpath:jabc.properties");
```

@Value

> 读取加载的properties值

@ContextConfiguration

> 声明spring配置项是XML方式或注解方式

- location

  > 指定xml文件路径

- classes

  > 类注解所在位置

```
@ContextConfiguration(classes = SpringConfiguration.class)
```

---

@RestController

>@Controller+@ResponseBody

---

## 事务

## 动态代理



## 数据注入

@Value

​	注入单个值	

@ConfigurationProperties

​	批量注入配置文件属性

















​	