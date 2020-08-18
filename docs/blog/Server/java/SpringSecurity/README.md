# SpringSecurity

```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
```

获取用户详情

```
SecurityContextHolder.getContext().getAuthentication().getPrincipal()
```

## 注解

```
@EnableGlobalMethodSecurity(securedEnabled = true) // 配置类开启注解模式
```

- `@Secured("ROLE_SAD")`

  ​	配置`Controller`权限

## configure

```
@Configuration
@EnableWebSecurity //开启Security
@EnableGlobalMethodSecurity(securedEnabled = true) // 开启注解模式
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {}
```



### 用户认证

```
@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception 
```

```
@Bean
//加密模式
public BCryptPasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
} 
```

```
//内存读取    
auth.inMemoryAuthentication().withUser("user")
                .password("{noop} 123456")
                .roles("USER");
//服务读取                
auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
```



### 权限配置

```
    @Override
    protected void configure(HttpSecurity http) throws Exception
```

```
http
                .authorizeRequests()
                .antMatchers("/").permitAll()//根路径开发全部权限
                .antMatchers("/vip1").access("hasRole('NORMAL')")
                .antMatchers("/vip2").hasAnyRole("ADMIN")
         
```

```
//关闭csrf
http.csrf().disable();
//开启记住我
http.rememberMe(); 
```



### 添加过滤器

```
http.addFilterBefore(tokenFilter, UsernamePasswordAuthenticationFilter.class);
```

```
public class TokenFilter extends OncePerRequestFilter  
```

```java
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
      chain.doFilter(request, response);
    }
```



### 自定义登录页

```
 http
        // ...
                .formLogin(form -> form
                        .loginPage("/login")
                        .successForwardUrl("/success")
                        .failureForwardUrl("/fail")
                        .permitAll()
                )//自定义登录
                .logout(form -> form
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/login")
                        .permitAll()
                )//自定义登出
```

HTML模板

```
form th:action="@{/login}" method="post">
            <div>
            <input type="text" name="username" placeholder="Username"/>
            </div>
            <div>
            <input type="password" name="password" placeholder="Password"/>
            </div>
            <input type="submit" value="Log in" />
 </form>
```

### 忽略资源

```
    @Override
    public void configure(WebSecurity web) throws Exception 
```

```
web.ignoring().antMatchers("/**/*.js", "/lang/*.json", "/**/*.css", "/**/*.js", "/**/*.map", "/**/*.html","/**/*.png");
```



## 单点登录（sso）

JWT

rsa

## oAuth2

```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-oauth2</artifactId>
        </dependency>
```

### 认证服务器

#### 配置

```
@Configuration
@EnableAuthorizationServer //启动认证服务
public class OauthServerConfig extends AuthorizationServerConfigurerAdapter {
```

```
         //数据库连接池对象
    @Autowired
    private DataSource dataSource;

    	//认证业务对象
    @Autowired
    private UserService userService;

	    //授权模式专用对象
    @Autowired
    private AuthenticationManager authenticationManager;

        //客户端信息来源
    @Bean
    public JdbcClientDetailsService jdbcClientDetailsService(){
        return new JdbcClientDetailsService(dataSource);
    }

        //token保存策略
    @Bean
    public TokenStore tokenStore(){
        return new JdbcTokenStore(dataSource);
    }

    //授权信息保存策略
    @Bean
    public ApprovalStore approvalStore(){
        return new JdbcApprovalStore(dataSource);
    }

    //授权码模式数据来源
    @Bean
    public AuthorizationCodeServices authorizationCodeServices(){
        return new JdbcAuthorizationCodeServices(dataSource);
    }
```



```
    //指定客户端信息的数据库来源
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.withClientDetails(jdbcClientDetailsService());
    }
```

```
    //检查token的策略
    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.allowFormAuthenticationForClients();
        security.checkTokenAccess("isAuthenticated()");
    }
```

```
    //OAuth2的主配置信息
    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints
                .userDetailsService(userService)
                .approvalStore(approvalStore())
                .authenticationManager(authenticationManager)
                .authorizationCodeServices(authorizationCodeServices())
                .tokenStore(tokenStore());
    }
```



#### 实体类

##### user

```
//user
public class User implements UserDetails {
```

```
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add( new SimpleGrantedAuthority( "ROLE_USER" ) );
        return authorities;

    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }//是否过期

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }//是否锁定

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }//密码是否过期

    @Override
    public boolean isEnabled() {
        return true;
    }//账户是否激活
```

##### Role

```
public class Role implements GrantedAuthority {
```

```
    @JsonIgnore
    @Override
    public String getAuthority() {
        return name;
    }
```



### 资源服务器

```
@Configuration
@EnableResourceServer
@EnableGlobalMethodSecurity(securedEnabled = true)
public class OauthSourceConfig extends ResourceServerConfigurerAdapter {
```

```
    @Autowired
    private DataSource dataSource;

    /**
     * 指定token的持久化策略
     * InMemoryTokenStore表示将token存储在内存
     * Redis表示将token存储在redis中
     * JdbcTokenStore存储在数据库中
     * @return
     */
    @Bean
    public TokenStore jdbcTokenStore(){
        return new JdbcTokenStore(dataSource);
    }

    /**
     * 指定当前资源的id和存储方案
     * @param resources
     * @throws Exception
     */
```



```
    /**
     * 指定当前资源的id和存储方案
     * @param resources
     * @throws Exception
     */
    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources.resourceId("product_api").tokenStore(jdbcTokenStore());
    }
```

```

    @Override
    public void configure(HttpSecurity http) throws Exception{
        http.authorizeRequests()
                //指定不同请求方式访问资源所需要的权限，一般查询是read，其余是write。
                .antMatchers(HttpMethod.GET, "/**").access("#oauth2.hasScope('read')")
                .antMatchers(HttpMethod.POST, "/**").access("#oauth2.hasScope('write')")
                .antMatchers(HttpMethod.PATCH, "/**").access("#oauth2.hasScope('write')")
                .antMatchers(HttpMethod.PUT, "/**").access("#oauth2.hasScope('write')")
                .antMatchers(HttpMethod.DELETE, "/**").access("#oauth2.hasScope('write')")
                .and()
                .headers().addHeaderWriter((request, response) -> {
            response.addHeader("Access-Control-Allow-Origin", "*");//   允许跨域
            if (request.getMethod().equals("OPTIONS")) {//如果是跨域的预检请求，则原封不动向下传达请求头信息
                response.setHeader("Access-Control-Allow-Methods", request.getHeader("Access-Control-Request-Method"));
                response.setHeader("Access-Control-Allow-Headers", request.getHeader("Access-Control-Request-Headers"));
            }
        });
    }

```

### 授权码模式

- 获取授权码

  参数

  - response_type	=	code
  - client_id

```
http://localhost:8889/oauth/authorize?response_type=code&client_id=flower
```

用户代理在通过身份验证并授予“同意”页面上的OAuth客户端的访问权限后，将重定向到该应用程序中的路径。 

- 获取`access_token`

  参数

  -  `grant_type`	=	`authorization_code `	
  -  `client_id `
  -  `client_secret ` 
  -  `code `  //授权码

```
http://localhost:8889/oauth/token
```

### 简化模式

```
http://localhost:8889/oauth/authorize?response_type=token&client_id=heima_one
```

### 密码模式

```
http://localhost:8889/oauth/token
```

-  参数

   -  grant_type	=	password 
   -  client_id 
   -  client_secret 
   -  username 
   -  password 

### 客户端模式

```
http://localhost:8889/oauth/token
```

参数

-  grant_type=client_credentials
-  client_id 
-  client_secret 

### 刷新token

```
http://localhost:8889/oauth/token
```

参数

- grant_type=refresh_token
- client_id 
- client_secret 
- refresh_token