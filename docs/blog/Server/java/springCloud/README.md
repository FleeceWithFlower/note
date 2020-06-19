##  Spring Cloud Config( 配置中心 )

​	统一管理配置

##  Spring Cloud Eureka(服务发现 )

```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
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
    fetch-registry: false
    register-with-eureka: false
    service-url:
      defaultZone: http://localhost:4001/eureka/
```

最小服務

```
@SpringBootApplication
@EnableEurekaServer
public class Application {

    public static void main(String[] args) {
        new SpringApplicationBuilder(Application.class).web(true).run(args);
    }

}
```

