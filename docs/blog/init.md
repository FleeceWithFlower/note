## AOP

连接点

切入点

> 没有被增强

通知

- 前置通知
- 后置通知
- 异常通知
- 最终通知



aop:config

> AOP配置起始标签

```
<aop:config></aop:config>	
```

aop:aspect

> 表明配置切面

aop:before

> 配置前置通知

- method

  > 用于指定那个方法为前置

- pointcut

  > 切入点表达式

  写法

  ```
  * com.xx.service.imp.*.*(..)
  ```

- aop:pointcut

  >aop:pointcut模板

aop:around

> 环绕通知