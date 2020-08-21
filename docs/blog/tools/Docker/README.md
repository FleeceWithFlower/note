# Docker

将应用和环境打包成一个镜像	

国内阿里云镜像地址

```
yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

安装

```
yum install -y yum-utils
yum install docker-ce docker-ce-cli containerd.io
```

启动

```
systemctl start docker
```

版本

```
docker version
```

hello world

```
docker run hello-world
```

查看镜像

```
docker images
```

卸载docker

```
yum remove docker-ce docker-ce-cli containerd.io
```

删除资源

```
rm -rf /var/lib/docker
```

## 镜像命令

- 查看镜像

```
docker images
```

- 下载镜像

```
docker pull mysql
```

- 删除镜像

```
docker rmi -f id
```

## 容器命令

- 新建容器

```
docker pull centos
```

- 重启

```
docker restart
```

- 运行容器

```
docker run image
参数
--name="Name" //用于区分容器
-d //后台方式运行
-ir //交互运行
-p 主机端口：容器端口//指定端口 
```

```
docker run -it cemtos /bin/bash
exit //退出
ctrl + P + Q //容器不停止但退出命令
```

- 查看运行容器

```
docker ps
参数
-a //历史运行
```

- 删除容器

```
docker rm id
```

- 查看日志

```
docker logs
```

- 查看进程信息

```
docker top id 
```

- 查看容器信息

```
docker inspect id
```

- 进入程序并开启新的终端

```
docker exec -it  id  /bin/bash
```

- 进入程序

```
docker attach id 
```

- 拷贝数据

```
docker cp 容器id：容器路径 目的主机路径
```

- 提交

```
docker commit -m"提交信息" -a"作者"
```

## 容器数据卷

容器的持久化和同步操作，容器和主机共享目录

```
docker run -it -v 主机目录：容器目录
```

具名挂载

匿名挂载

- 查看卷信息

```
docker volume ls
```

## Dockerfile

镜像脚本

```
FROM centos
VOLUME ["VOLUME01","VOLUME02"]
CMD echo "---end---"
CMD /bin/bash
```

```
docker build -f ./dockerfile -t test/centos .
```

数据同步

容器之间数据同步

```
--voumes-from 
```

