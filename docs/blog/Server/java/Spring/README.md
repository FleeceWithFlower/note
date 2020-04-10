# Spring

> Spring 是一款轻量级控制反转（IOC）和面向切面编程（AOP）的框架

ioc（控制反转）

对象由Spring创建，管理，装配，削减计算机的耦合。

- DI(注入依赖)

aop（面向切面编程）

 

 







ApplicationContext

创建对象立即加载

构造方法

- ClassPathXmlApplicationContext

  类路径配置文件

- FileSystemXmlApplicationContext

  磁盘下路径配置文件

- AnnotationConfigApplicationContext

  读取注解

## 构造函数模式

bean

- id

  唯一标识

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

BeanFactory

Spring boot 

> 用于构建工程

Spring Cloud

> 给予Spring boot

解耦

编译期不依赖，运行期依赖

​	