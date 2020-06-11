**CSRF**

```
https://blog.csdn.net/xiaoxinshuaiga/article/details/80766369
```

Spring Security Java配置将创建一个称为的Servlet过滤器，该过滤器`springSecurityFilterChain`负责应用程序中的所有安全性

```

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        super.configure(http);

        http
                
                
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/level1").hasRole("vip1")
                .antMatchers("/level2").hasRole("vip2");
        http.formLogin();
        http.logout();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                .withUser("89cff0").password(new BCryptPasswordEncoder().encode("2469220")).roles("vip1");
    }



}

```

