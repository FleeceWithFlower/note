## 

- nginx -s reload

  刷新配置

-  nginx -s quit 

  停止服务
  
- 指定配置文件

  ```
  nginx -c /usr/local/etc/nginx/nginx.conf
  ```

  



http

```
    server {
        listen       80;
        server_name  www.fleecewithflower.xyz fleecewithflower.xyz;
        location / {
                       proxy_pass http://127.0.0.1:3000/;
        }
    }
```

https

```
    server {
        listen       443  ssl;
        server_name  www.fleecewithflower.xyz fleecewithflower.xyz;
        ssl_certificate      ./ssl/server.crt;
        ssl_certificate_key  ./ssl/server.key;
        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;
        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;
        location / {
            proxy_pass http://127.0.0.1:3000/;
        }
    }
```

