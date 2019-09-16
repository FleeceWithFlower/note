### 上传头像

```
http://192.168.0.234:20004
```

### 组织成员

```
orgUser?page=0&size=20&sort=
```

### 登录

```
http://192.168.0.234:20000
```

参数

```
url: http://192.168.0.234:20000 + "/oauth/token",
```

```
grant_type: "password",
scope:"all",
username: this.userName,
password: this.password,
```

请求首部字段

```
 auth: {
          username: "user-app",
          password: "1234567"
        }
 默认为 window.btoa(`${[username]}${[password]}`)
 设置   Authorization
 
        
```



```
headers: {
"content-type": "application/x-www-form-urlencoded;charset=UTF-8"；
"Authorization":auth
}
```