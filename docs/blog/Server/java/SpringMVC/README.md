Spring MVC围绕前端控制器模式进行设计`Servlet`，其中`DispatcherServlet`，Central提供了用于请求处理的共享算法，而实际工作是由可配置的委托组件执行的.

## 配置

```
//webapp
  <servlet>
    <servlet-name>app</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class><!--创建对象-->
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:springMVC.xml</param-value>
    </init-param><!--加载配置-->
    <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
    <servlet-name>app</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
```



## `@RequestMapping`

请求 映射 

- `path`

  映射路径

- `method`

  限制	请求方法

- `params`

  限制	请求参数

```
@GetMapping(path ="/user/{id}",params = {"val1=1","val2"})
```

- `headers`

  限制	请求头

```
@GetMapping(path ="/",headers = "Accept=application/json")
```

- `consumes `

  限制 Content-Type  请求头

- `produces`  

  限制 Accept  请求头

```
    @RequestMapping(path = "/index2",method = {RequestMethod.GET})
    public String index2 (){
        return "index";
    }
```

- `@PathVariable`

   URI变量可以通过访问`@PathVariable` 

```
@GetMapping("/owners/{ownerId}/pets/{petId}")
public Pet findPet(@PathVariable Long ownerId, @PathVariable Long petId) {
    // ...
}
```

- `@RequestParam`

   获取参数

```
@GetMapping("/index")
public String index (@RequestParam("id") int id){
	   System.out.println(id);
}
```

- ` @RequestBody `

  接收	请求体

```
@PostMapping(path = "/post")
  public String index2 (@RequestBody JSONObject body) {
    System.out.println(body.toString());
  }
```



- `@RequestHeader`

```
@GetMapping("/index")
public String index ( @RequestHeader("Accept-Encoding") String encoding){
	   System.out.println(id);
}
```

- ##### `@CookieValue`

```
@GetMapping("/index")
public String index ( @CookieValue("JSESSIONID") String cookie){
	   System.out.println(JSESSIONID);
}
```

- ` @ModelAttribute `

- ` @SessionAttributes `

- ##### `@RequestAttribute`

- `HttpEntity`

  接收	HTTP实体，请求体 + 状态 + 标题 

```
@PostMapping("/accounts")
public void handle(HttpEntity<Account> entity) {
    // ...
}
```

- `@ResponseBody`

  返还响应体

  

## `@RequestMapping 变体`

- `@GetMapping`
- `@PostMapping`
- `@PutMapping`
- `@DeleteMapping`
- `@PatchMapping`