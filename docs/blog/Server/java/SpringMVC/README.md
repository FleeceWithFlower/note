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

-  `@Valid `

  | 限制                      | 说明                                                         |
  | :------------------------ | :----------------------------------------------------------- |
  | @Null                     | 限制只能为null                                               |
  | @NotNull                  | 限制必须不为null                                             |
  | @AssertFalse              | 限制必须为false                                              |
  | @AssertTrue               | 限制必须为true                                               |
  | @DecimalMax(value)        | 限制必须为一个不大于指定值的数字                             |
  | @DecimalMin(value)        | 限制必须为一个不小于指定值的数字                             |
  | @Digits(integer,fraction) | 限制必须为一个小数，且整数部分的位数不能超过integer，小数部分的位数不能超过fraction |
  | @Future                   | 限制必须是一个将来的日期                                     |
  | @Max(value)               | 限制必须为一个不大于指定值的数字                             |
  | @Min(value)               | 限制必须为一个不小于指定值的数字                             |
  | @Past                     | 限制必须是一个过去的日期                                     |
  | @Pattern(value)           | 限制必须符合指定的正则表达式                                 |
  | @Size(max,min)            | 限制字符长度必须在min到max之间                               |
  | @Past                     | 验证注解的元素值（日期类型）比当前时间早                     |
  | @NotEmpty                 | 验证注解的元素值不为null且不为空（字符串长度不为0、集合大小不为0） |
  | @NotBlank                 | 验证注解的元素值不为空（不为null、去除首位空格后长度为0），不同于@NotEmpty，@NotBlank只应用于字符串且在比较时会去除字符串的空格 |
  | @Email                    | 验证注解的元素值是Email，也可以通过正则表达式和flag指定自定义的email格式 |

- ## `@Validated`

## 自定义异常

```
@ControllerAdvice
public class HandlerControllerException {

    @ExceptionHandler(RuntimeException.class)
    public String handException(RuntimeException e){
        System.out.println(e);
        if(e instanceof AccessDeniedException){
            return "redirect:/403";
        }
        return "redirect:/500";
    }
}
```

