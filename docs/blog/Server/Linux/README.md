

`Minix`

> 第一个开源操作系统

```
以UNIX为原型
```

Linux

> 开源并共同维护

```
以`Minix`为模板
```





任何东西都是一个文件

### shell（命令解释器）

> shell是一个接收由键盘输入的命令，并将其传递给操作系统来执行的程序。

### 终端

> 当使用图形用户界面时，需要另一种叫做终端仿真器(terminal emulator)的程序与shell进行交互

### 权限

- 用户

  > 多用户同一时间使用同一台计算机

  - 　用户组

    > 用户组(group)就是具有相同特征的用户(user)的集合体;

 用户组的所有信息都存放在 /etc/group 文件中

```
root:x:0:
```

根据`:`分割，分别对应

- 组名

  > 组名是用户组的名称，由字母或数字构成。

- 口令

  > 口令字段存放的是用户组加密后的口令字。

- 组标识号

  > 组标识号与用户标识号类似，也是一个整数，被系统内部用来标识组。别称GID

- 组内用户列表





- id

  > 显示用户身份号

  - uid

    > 用户ID

  - gid

    > 组表示号

  - groups

- chmod

> 更改文件模式

- umask

> 设置默认的文件权限

- su

  > 以另一个用户的身份来运行shell

- sudo

  > 以另一个用户的身份执行命令

- chow

  > 更改文件的所有者

- chgrp

  > 更改文件组所有权

- passwd

  > 更改用户密码



Linux/Unix 的文件调用权限分为三级 : 文件拥有者、群组、其他。利用 chmod 可以藉以控制文件如何被他人所调用。

常用的 [linux](http://www.111cn.net/list-156/) 文件权限：

444 r--r--r--
600 rw-------
644 rw-r--r--
666 rw-rw-rw-
700 rwx------
744 rwxr--r--
755 rwxr-xr-x
777 rwxrwxrwx

从左至右，1-3位数字代表文件所有者的权限，4-6位数字代表同组用户的权限，7-9数字代表其他用户的权限。

读取的权限等于4，用r表示

写入的权限等于2，用w表示

执行的权限等于1，用x表示

通过4、2、1的组合，得到以下几种权限：0（没有权限）；4（读取权限）；5（4+1 | 读取+执行）；6（4+2 | 读取+写入）；7（4+2+1 | 读取+写入+执行）



### 重定向

标准输入

> 用户输入的内容叫做标准输入

> 默认连接键盘

标准输出

> 运行结果叫做标准输出

> 默认连接屏幕

标准错误

> 运行结果的状态信息叫做标准错误

> 默认连接屏幕

文件描述符

- 0

  > 标准输入

- 1

  > 标准输出

- 2

  > 标准错误

I/O 重定向

> 重新指定 标准 输入/输出/错误的 来向 

- 重定向标准错误

```
$ ll /abc /home 2> error.text
```



- 标准输出和标准错误输入到同一文件

```
$ ll /abc /home &> error.text
```



- 位存储桶

  > /dev/null文件

```
ls - /bin/usr 2> /dev/null
```





## 系统

### screen

- 
  screen -S yourname ： 新建一个叫yourname的session
- screen -ls         ： 列出当前所有的session
- screen -r yourname ：x`回到yourname这个session

ctrl-a d：退出 Screen 会话

### 查看进程

```
ps -ef |[filter]
```

### lsof -i:port

> 参看端口进程

### kill -KILL  PID

> 杀掉 指定ID 进程

### 创建用户

​	useradd testuser  创建用户testuser

#### 设置密码


​	passwd testuser  给已创建的用户testuser设置密码

### 关键字

- env：环境变量

- grep：字符串查找

- df（disk free）：剩余磁盘空间

```
df -h//已人类可读的形式展现
```



- free

  > 剩余内存数量

- cd（Change Directory）

  > 切换工作目录

  - cd -

    > 切换先前的工作目录

  - cd  ~`username` 切换到某用户的主目录

- ls（list）

  > 打印目录列表

  - ls -a（all）

    > 列出隐藏文件

  - ls -l

    > 更多细节的目录列表

  - ls -S

    > 文件大小排序

  - ls -t

    > 时间排序

  - ls -r (reverse)

    > 反转顺序


```
-rw-rw-r-- 1 me me 0 2008-03-06 14:52 foo.txt
```

- 解读

1. 文件类型
2. 文件模式
   - 文件所有者的访问权限
   - 件所属组中成员的访问权限
   - 其他所有人的访问权限
3. 硬链接数
4. 文件属主的用户名
5. 文件所属用户组的名字
6. 文件字节数大小
7. 上次修改文件的时间
8. 文件名

- file

  > 文件简单描述                                                     

- less

  > 查看文本内容

- pwd（Print Working Directory）

  > 打印工作目录

- clear

  > 清空目录

- date

  > 打印日期

- cal

  > 打印日历

- exit

  > 终止终端会话 

### 目录结构

- /bin

  > 系统启动的和运行的二进制程序

- /sbin

  > 系统二进制文件

- boot

  > Linux内核

- dev

  > 设备节结点的特殊目录

- etc

  > 包含系统层面的配置文件和shell脚本

  - /etc/crontab

    > 定义自动运行的任务

  - /etc/fstab

    > 包含存储设备的列表

  - /etc/passwd

    > 包含用户账号列表

- home

  > 用户分配的目录，普通用户只能在他们自己的目录下创建文件

- /lib

  > 包含核心系统程序所需的库文件

- /opt

  > 安装可选的商业软件

- /usr

  > 包含普通用户所需要的所有程序和文件

- /usr/bin

  > 包含系统安装的可执行程序

- /usr/sbin

  > 系统管理程序

- /usr/share

  > /usr/bin中程序所用的共享数据

- /usr/lib

  > /usr/bin中程序所用的共享库

- /var

  > 可能变动的数据

- /var/log

  > 日志文件

### 文件/文件夹操作

- cp

  > 复制文件

  - -a

    > 复制所有

  - -r

    > 递归复制

- mv

  > 移动文件/重命名

- rm

  > 删除文件或目录

  - -r

    > 递归删除 删除目录时必须使用

  - -f

    > 忽略不存在的文件

### 重定向

标准输入

> 用户输入的内容叫做标准输入

> 默认连接键盘

标准输出

> 运行结果叫做标准输出

> 默认连接屏幕

标准错误

> 运行结果的状态信息叫做标准错误

> 默认连接屏幕

I/O 重定向

> 重新指定 标准 输入/输出/错误的 来向 

\>

- 重定向操作符

>  删除一个已经存在的文件的内容或者创建一个空文件，将输出结果添加到文件中。

\>\>

> 将输出结果添加到文件内容之后

文件描述符

- 0

  > 标准输入

- 1

  > 标准输出

- 2

  > 标准错误

### 用户/用户组管理

- `/etc/passwd`：用户
- `/etc/shadow `：用户密码及其相关属性
-  /`etc/grounp`：用户组
- `/etc/gshadow`：组密码及其相关属性
- `/etc/sudoers`：sudo配置
- `/home/user_name`：主目录
- `/var/spool/mail/user_name`：邮箱目录
- `/etc/skel/`：用户模板文件  //创建主目录时自动添加

命令

- useradd：添加用户

```
useradd -l user_name //锁定用户
useradd -u user_name //解锁用户
```

- usermod：修改用户

```
usermod -G other user_name //修改用户所属的附加群组
```

- userdel：删除用户


```
//删除用户并删除其主目录
userdel -r user_name
```

- groupadd：添加用户组

```
groupadd group_name
```

- groupmod：修改用户组
- groupdel：删除用户组

### 权限

ACL

- chmod:修改权限

  八进制数 字表示法

```
//例
chmod 755 test.md
chmod 777 test.md
```

```
1-3位数 目录的所有者
4-6位数 用户组
7-9 其他所有的人

r 读 4
w 写 2
x 执行 1
```

​		符号表示法

```
//例
chmod ugo=rw test.md
chmod ugo+x-e test.md
```

```
u 目录的所有者
g 用户组
o 其他所有的人
a 前三者结合

+ 表示加上一个权限
- 表示删掉一个权限
= 表示只有指定的权限可用，其它所有的权限被删除

r 读
w 写
x 执行
```



umask ：设置默认权限

```
 //例
 umask 0000
 000 000 000 000
 --- rwx rwx rwx
 
 umask 0022
 000 000 010 010
 --- rwx r-x r-x
```



```
后三位转换为二进制数，二进制中数字 1 出现的位置，相对应的属性被删
```



- su：切换用户

```
su - user_name//切换用户时同时切换用户环境
su - user_name -c command//以用户身份执行命令，但不切换用户
```



 sudo

>以另一个用户身份执行命令

```
su 和 sudo 之间的一个重要区别是 sudo 不会重新启动一个 shell
```

- `/etc/sudoers`

  > `sudo`	配置文件

chown 

> 更改文件所有者和用户组

chgrp

> 更改用户组所有权

passwd

> 更改用户密码

### 软件包

软件测试周期

- #### Alpha（α，阿尔法）/CB

  > 内测

- #### Beta（β，贝塔）

  > 公测

- #### Gamma（γ，伽玛）/RC（Release Candidate）

  > 正式发布的候选版本

包管理工具

- RPM（ Red-Hat Package Manager ）

  >  红帽包管理工具

- Yum（ Yellow dog Updater, Modified ）

  > 基于RPM包管理，可以自动处理依赖性关系，并且一次安装所有依赖的软件包

yum search package name

> 查找资源库中的软件包

yum install package name

> 从资源库中安装一个软件包

rpm -i package ﬁle

> 通过软件包文件来安装软件

yum update

> 经过资源库来更新软件包

rpm -U package ﬁle

> 经过软件包文件来升级软件

yum erase package name

> 卸载软件

FTP

- 重启

```
service vsftpd restart
```

## 压缩

zip命令

　　解压：unzip FileName.zip

　　压缩：zip FileName.zip DirName

```
//将demo目录下所有文件 压缩成demo.zip
zip -r demo.zip demo/
```

关键字

-  systemctl restart firewalld 

  打开防火墙

-  systemctl restart firewalld 

  重启防火墙

-  firewall-cmd --zone=public --add-port=80/tcp --permanent 

  开放端口号

-  systemctl status redis 

  查看服务状态

-  systemctl start redis 

  启动服务

-  systemctl stop redis 

  停止服务

-  systemctl restart redis 

  重启服务

-  systemctl enable redis 

  开机启动服务

-  curl

   访问网站

```
curl localhost:3000
```

