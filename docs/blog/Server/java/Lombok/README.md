# Lombok

idea需要安装	Lombok	插件

```
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.12</version>
            <scope>provided</scope>
        </dependency>
```







 **@Getter/@Setter** 

 **@ToString** 

 **of属性限定显示某些字段，通过exclude属性排除某些字段。** 

 **@EqualsAndHashCode**  **作用于类，覆盖默认的equals和hashCode** 

 **@NonNull**  **主要作用于成员变量和参数中，标识不能为空，否则抛出空指针异常。** 

 **@Data：作用于类上，是以下注解的集合：@ToString @EqualsAndHashCode @Getter @Setter @RequiredArgsConstructor** 

**@NoArgsConstructor：生成无参构造器；**

**@RequiredArgsConstructor：生成包含final和@NonNull注解的成员变量的构造器；**

**@AllArgsConstructor：生成全参构造器**