# SpringCloud

## eureka

### 注册中心

eureka-service	提供服务的注册与发现

```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
    <version>2.2.3.RELEASE</version>
</dependency>
```

配置

```
//application.yml	
eureka:
  instance:
    hostname: localhost
  client:
    fetch-registry: false	#声明自己为注册中心
    register-with-eureka: false	#是否注册自己
    service-url:
      defaultZone: http://localhost:4001/eureka/ #为任何不表达首选项的客户端提供默认服务URL
```

开启服务

```
@SpringBootApplication
@EnableEurekaServer
public class Application {
    public static void main(String[] args) {
        new SpringApplicationBuilder(Application.class).web(true).run(args);
    }
}
```

### 服务者

eureka-client

```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    <version>2.2.3.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
    <version>2.3.0.RELEASE</version>
</dependency>
```

配置

```
eureka:
  client:
    service-url:
      defaultZone: http://localhost:3002/eureka/
  instance:
    instance-id: 3001 # 修改描述信息
info:
  app.name: fleece
  company.name: dandelion
```

启动服务

```
@SpringBootApplication
@EnableEurekaClient
public class Client_3001_Application {
    //启动应用
    public static void main(String[] args) {
        SpringApplication.run(Client_3001_Application.class, args);
    }
}
```



### 消费者

## Ribbon

客户端负载均衡

```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
            <version>2.2.3.RELEASE</version>
        </dependency>
```

启动服务

```
@SpringBootApplication
@EnableEurekaClient
public class Consumer_80_Application {
    //启动应用
    public static void main(String[] args) {
        SpringApplication.run(Consumer_80_Application.class, args);
    }
}
```

- `@LoadBalanced`
  是` RestTemplate  `可以使用`application`作为域名访问

## Feign

接口版	Ribbon

启动服务

```
@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients
public class Consumer_80_Application {
    //启动应用
    public static void main(String[] args) {
        SpringApplication.run(Consumer_80_Application.class, args);
    }
}
```



## Hystrix

断路器，防止服务雪崩，占用资源等

```
<dependency>
   <groupId>org.springframework.cloud</groupId>
   <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
   <version>2.2.3.RELEASE</version>
</dependency>
```

启动服务

```
@SpringBootApplication
@EnableEurekaClient
@EnableDiscoveryClient
@EnableCircuitBreaker
public class Netflix_hystrix_provider_3005 {
    //启动应用
    public static void main(String[] args) {
        SpringApplication.run(Netflix_hystrix_provider_3005.class, args);
    }
}
```

### 服务熔断

服务端，服务器超时或异常触发

- `@HystrixCommand`

```
@RestController
@RequestMapping("/")
public class Test {
    @HystrixCommand(fallbackMethod = "testFail")
    @GetMapping(path = "/")
    public String test() throws RuntimeException {
        throw new RuntimeException("fail");
    }

    public String testFail() throws RuntimeException {
        return "request 3005 fail";
    }
}
```



### 服务降级

客户端，服务熔断或关闭之后触发

```
//xyz.fleecewithflower.www.service.TestService
@Service
@FeignClient(value = "service-provider",fallbackFactory = TestServiceFallbackFactory.class)
public interface TestService {
    @GetMapping("/")
    public  String index ();
    @GetMapping("/test")
    public  String test ();
}
```



```
//xyz.fleecewithflower.www.service.TestServiceFallbackFactory
@Component
public class TestServiceFallbackFactory implements FallbackFactory {
    @Override
    public Object create(Throwable throwable) {
        return new TestService() {
            @Override
            public String index() {
                return null;
            }

            @Override
            public String test() {
                return "服务暂停，服务降级";
            }
        };
    }
}
```



## Dashboard

监控

```
<dependency>
   <groupId>org.springframework.cloud</groupId>
   <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>
   <version>2.2.3.RELEASE</version>
 </dependency>
```

启动服务

```
@SpringBootApplication
@EnableHystrixDashboard
public class Netflix_hystrix_dashboard_3006 {
    //启动应用
    public static void main(String[] args) {
        SpringApplication.run(Netflix_hystrix_dashboard_3006.class, args);
    }
    @Bean
    public ServletRegistrationBean hystrixMetricsStreamServlet(){
        ServletRegistrationBean registrationBean =   new ServletRegistrationBean(new HystrixMetricsStreamServlet());
        registrationBean.addUrlMappings("/actuator/hystrix.stream");
        return registrationBean;
    }
}
```

## Zuul

路由网关

```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-zuul</artifactId>
            <version>2.2.3.RELEASE</version>
        </dependency>
```

配置

```
zuul:
  routes:
    mydept.serviceId: service-provider #需要替换的微服务名
    mydept.path: /api/** #替代后路径
  ignored-services: "*" #忽略指定服务或所有服务
```

启动服务

```
@SpringBootApplication
@EnableZuulProxy
public class Netflix_zuul_3007_Application {
    //启动应用
    public static void main(String[] args) {
        SpringApplication.run(Netflix_zuul_3007_Application.class, args);
    }
}
```

### 过滤器

- Type

  定义被应用的阶段

- Order

  在同一个Type中，执行的顺序

- Criteria

  过滤器执行时必须满足的条件

- Action

  过滤器执行的动作

```
public class PreFilter extends ZuulFilter {
    @Override
    public String filterType() {
        return "pre";
    }//过滤类型

    @Override
    public int filterOrder() {
        return 0;
    }//过滤等级

    @Override
    public boolean shouldFilter() {
        return false;
    }//判断是否执行

    @Override
    public Object run() throws ZuulException {
        return null;
    }//执行动作
}

```







## Config

### 服务端

```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-config-server</artifactId>
            <version>2.2.3.RELEASE</version>
        </dependency>
```

配置

```
spring:
  application:
    name: spring-cloud-config-service-3008
  cloud:
    config:
      server:
        git:
          uri: git@github.com:FleeceWithFlower/config.git
server:
  port: 3008
```

启动服务

```
@SpringBootApplication
@EnableConfigServer
public class Config_server_3008_Application {
    public static void main(String[] args) {
        SpringApplication.run(Config_server_3008_Application.class, args);
    }
}
```

### 客户端

```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-config-client</artifactId>
            <version>2.2.3.RELEASE</version>
        </dependency>
```

配置

```
//bootstrap.yml
spring:
  cloud:
    config:
          uri: http://localhost:3008
          name: application
          profile: dev
          label: master
```

