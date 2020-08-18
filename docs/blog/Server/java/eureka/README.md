



```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-eureka</artifactId>
            <version>1.4.7.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
            <version>2.2.3.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-eureka-server</artifactId>
            <version>1.4.7.RELEASE</version>
        </dependency>
```

eureka Serve

service provider

service consumer

```
package xyz.fleecewithflower;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
    public class Application_3002 {
    public static void main(String[] args) {
        SpringApplication.run(Application_3002.class, args);
    }

}

```

## [使用Eureka服务器进行身份验证](https://cloud.spring.io/spring-cloud-netflix/2.2.x/reference/html/#authenticating-with-the-eureka-server)

```
//application.yml
eureka:
  client:
    service-url:
      defaultZone: user:password@localhost:8761/eureka
```

