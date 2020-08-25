# SpringBoot

---

```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
```

请求返回

```
@RestController
public class HelloWorld {
    @RequestMapping("/hello")
    public  String hello(){
        return "Hello World";
    }
}
```

模板引擎

```
@Controller
public class Index {
    @RequestMapping("/")
    public  String hello(){
        model.addAttribute("text","Welcome");
        return "index";
    }
}//classpath:templates/index.html
```

## 启动参数

**端口**

```
java -jar app.jar --server.port=3000
```



  



静态资源

classpath:	public   resources  static

resources   >  static  >  public

webjars