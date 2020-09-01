## Spring Cloud Config

## 服务器

```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter</artifactId>
        </dependency>
```

**启动服务**

```
@SpringBootApplication
@EnableEurekaClient
@EnableConfigServer
public class Config_Application {
    public static void main(String[] args) {
        SpringApplication.run(Config_Application.class, args);
    }
}
```

**配置**

```
spring:
  application:
    name: config-server
  cloud:
    config:
      server:
        git:
          uri: git@github.com:FleeceWithFlower/config.git
```



## 客户端

```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-client</artifactId>
</dependency>

```



**配置**

```
//bootstrap.yml
spring:
  application:
    name: config-server
  cloud:
    config:
      name: config-client #资源名
      profile: dev	#模式
      label: master #分支
      uri: http://localhost:3344	#	config-server
```
