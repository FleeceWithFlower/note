# Spring

> Spring 是一款轻量级控制反转（IOC）和面向切面编程（AOP）的框架

IoC

​	全程`Inversion of Control` 控制反转。IoC也称为依赖注入（DI）

对象由Spring创建，管理，装配，削减计算机的耦合。

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
IAcountService as =  ac.getBean("accountService",IAccountService.class)
```



构造方法

- ClassPathXmlApplicationContext

  类路径配置文件

- FileSystemXmlApplicationContext

  磁盘下路径配置文件

- AnnotationConfigApplicationContext

  读取注解

## 构造函数模式



### 标签

- bean

  ​	Spring IoC容器管理一个或多个bean。这些bean是使用您提供给容器的配置元数据创建的

- import

  > 引用其他XML文件的Bean

```
 <import resource="services.xml"/>
```

- bean

  - id

    唯一标识符

  - class

    指定类

  - scope

    作用范围

- singleton

  > 单例(默认值)

- prototype

- request

- session

- global-session

- factory-bean

  指定某一个bean返回的类

- factory-method

  利用方法创造对象

:::tip

Bean命名约定

​	bean名称以小写字母开头，实例名加包名，驼峰式大小写例子，包括`accountManager`， `accountService`，`userDao`，`loginController`，等等。

:::

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

constructor-arg

传参

```
<bean id="accountService" class="service.impl.AccountServiceImpl">
        <constructor-arg index="0" name="name" value="89cff0" type="java.lang.String"/>
        <constructor-arg index="1" name="age" value="18" type="java.lang.Integer"/>
        <constructor-arg index="2" name="birthday"  ref="now"/>
</bean>
<bean id="now" class="java.util.Date"></bean>
```

- type

  参数类型

- index

  参数索引

- name

  参数名

- value

  参数值

- ref

  引用



## set注入模式

property

调用Class中 set方法

```
    <bean id="accountService2" class="service.impl.AccountServiceImpl2">
        <property name="name"  value="89cff0" ></property>
        <property name="age"  value="18" ></property>
        <property name="birthday"  ref="now" ></property>
    </bean>
    <bean id="now" class="java.util.Date"></bean>
```

- name

  参数名

- value

  参数值

- ref

  引用

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

区别

构造函数 必须传值，set模式不用。

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