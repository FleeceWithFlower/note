#  OAuth

OAuth（开放授权）是一个开放标准，允许用户让第三方应用访问该用户在某一网站上存储的私密的资源（如照片，视频，联系人列表），而无需将用户名和密码提供给第三方应用。 

 允许用户提供一个令牌，而不是用户名和密码来访问他们存放在特定服务提供者的数据。 



## This creates several problems and limitations:

   o  Third-party applications are required to store the resource
      owner's credentials for future use, typically a password in
      clear-text.

   o  Servers are required to support password authentication, despite
      the security weaknesses inherent in passwords.

   o  Third-party applications gain overly broad access to the resource
      owner's protected resources, leaving resource owners without any
      ability to restrict duration or access to a limited subset of
      resources.

   o  Resource owners cannot revoke access to an individual third party
      without revoking access to all third parties, and must do so by
      changing the third party's password.

​	o  Compromise of any third-party application results in compromise of
​      the end-user's password and all of the data protected by that
​      password.



## 使用OAuth进行认证和授权的过程如下所示:

用户想操作存放在服务提供方的资源。

用户登录客户端向服务提供方请求一个临时令牌。

服务提供方验证客户端的身份后，授予一个临时令牌。

客户端获得临时令牌后，将用户引导至服务提供方的授权页面请求用户授权。在这个过程中将临时令牌和客户端的回调连接发送给服务提供方。

用户在服务提供方的网页上输入用户名和密码，然后授权该客户端访问所请求的资源。

授权成功后，服务提供方引导用户返回客户端的网页。

客户端根据临时令牌从服务提供方那里获取访问令牌。

服务提供方根据临时令牌和用户的授权情况授予客户端访问令牌。

 server将发行一个短有效期的access token和长生命期的refresh token 	

客户端使用获取的访问令牌访问存放在服务提供方上的受保护的资源。

## JWT（JSON Web Token）

- JSON Web令牌结构
- Header
- Payload
- Signature







## Access Token