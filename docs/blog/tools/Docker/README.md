# Docker

将应用和环境打包成一个镜像	

**国内阿里云镜像地址**

```
yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

**安装**

```
yum install -y yum-utils
yum install docker-ce docker-ce-cli containerd.io
```

启动

```
systemctl start docker
```

**版本**

```
docker version
```

卸载docker

```
yum remove docker-ce docker-ce-cli containerd.io
```

**删除资源**

```
rm -rf /var/lib/docker
```



## 镜像命令

**查看镜像**

```
docker images
```

**搜索镜像**

```
docker search mysql
```

**下载镜像**

```
docker pull image:version	//从 http://hub.docker.com 下载
```

**删除镜像**

```
docker rmi -f id	//删除指定镜像
docker rmi -f $(docker images -qa)	//删除所有镜像
```

**创建镜像**

​	通过`Dockerfile`创建镜像

```
docker build
-f ./Dockerfile	//指定 Dockerfile 文件名
-t test/centos	//镜像名
. //	本次执行的上下文路径
```

**标签**

```
docker tag 860c279d2fec runoob/centos:dev	//为镜像添加一个新的标签
```



## 容器命令

**运行容器**

```
docker run
--name name //容器名
-d //让容器在后台运行
-it //-i: 交互式操作。	-t: 终端。
-v 主机目录：容器目录	//映射数据卷
-p 主机端口：容器端口	//映射指定端口
-P // 将所有公开的端口发布到随机端口
imageID
/bin/bash // 放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。
```

**进入容器终端**

```
docker attach containerID
docker exec -it  containerID  /bin/bash	//开启新的终端（用于执行命令）
```

**退出容器终端**

```
ctrl + P + Q //退出容器终端
exit //退出容器终端并停止容器
```

**查看运行容器**

```
docker ps	//正在运行的容器
docker ps -a //所有容器
```

**查看指定容器信息**

```
docker inspect id
```

**检查`WEB `应用程序**

```
docker inspect containerID
```

**删除容器**

```
docker rm container	//删除指定容器
docker rm $(sudo docker ps -a -q)	//删除所有容器
```

**启动容器**

```
docker start container
```

**停止容器**

```
docker stop container
```

**重启容器**

```
docker restart container
```

**查看日志**

```
docker logs containerID	//查看容器输出
```

**查看进程信息**

```
docker top id //查看容器内部运行的进程
```

**拷贝数据**

```
docker cp containerID：容器路径 目的主机路径
```

**提交**

```
docker commit -m"提交信息" -a"作者" // 保存为新的镜像,并添加提交人信息和说明信息。
```

 **导出容器** 

```
docker export 1e560fca3906 > ubuntu.tar
```

 **导入容器** 

```
cat ./ubuntu.tar | docker import - test/ubuntu:v1
//实例将快照文件 ubuntu.tar 导入到镜像 test/ubuntu:v1
```

**查看端口**

```
docker port containerID
```



## 容器数据卷

 Docker Volume能让容器从宿主主机中读取文件或持久化数据到宿主主机内，让容器与容器产生的数据分离开来。  Volume的生命周期是独立于容器的生命周期之外的，即使容器删除了，volume也会被保留下来。

**查看卷信息**

```
docker volume ls
```

## 网络

Docker安装时自动生成`docker0`网卡。每启动一个容器，就会又生成一对网卡，`evth-pair`就是一对虚拟设备接口，一端连着协议，一端彼此相连，充当桥梁，连接各种虚拟设备

创建容器时，默认使用`--net bridge` 使用`docker`的默认网络，但是容器之间不能通过容器名ping通，需要使用`--link congtaierName`关联。自定义网络可以通过容器名ping通。

- 查看列表

```
docker network ls
```

- 查看详情

```
docker network inspect networkID
```

- 通过容器名互连

  自动将指定容器名的ip绑定为域名，容器名作为域名

```
docker run --name name --link containerName
```

- 创建自定义网络

```
docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 netName
```

- 网络连通

```
docker network connect netName containerName
```



## Dockerfile

 Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。 

```
FROM centos	//基于镜像
RUN	echo 'hello' > /index.html	//用于执行后面跟着的命令行命令。
VOLUME ["VOLUME01","VOLUME02"]
CMD echo "---end---"
CMD /bin/bash
```

```
docker build -f ./dockerfile -t test/centos .
```

**RUN**

docker build时运行命令

```
RUN <命令行命令>
RUN ["可执行文件", "参数1", "参数2"]
// Dockerfile 的指令每执行一次都会在 docker 上新建一层。所以过多无意义的层，会造成镜像膨胀过大 可简化为
RUN yum install wget \
    && wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz" \
    && tar -xvf redis.tar.gz
```

**CMD**

 类似于 RUN 指令，用于运行程序，但二者运行的时间点不同 

- CMD 在docker run 时运行。 会被 docker run 命令行参数中指定要运行的程序所覆盖。 
- Dockerfile 中如果存在多个 CMD 指令，仅最后一个生效。 

```
CMD <shell 命令> 
CMD ["<可执行文件或命令>","<param1>","<param2>",...] 
CMD ["<param1>","<param2>",...]  # 该写法是为 ENTRYPOINT 指令指定的程序提供默认参数
```

**ENTRYPOINT**

同CMD

-  不会被 docker run 的命令行参数指定的指令所覆盖 
-  会被docker run 时使用了 --entrypoint 选项 覆盖
- Dockerfile 中如果存在多个 `ENTRYPOINT`指令，仅最后一个生效

```
//联合使用
ENTRYPOINT ["nginx", "-c"] # 定参
CMD ["/etc/nginx/nginx.conf"] # 变参 
-----------------
docker run  nginx:test -c /etc/nginx/new.conf
最终结果是	nginx -c /etc/nginx/new.conf
```

**COPY**

 复制指令，从上下文目录中复制文件或者目录到容器里指定路径。 

```
COPY *.jar /app.jar
```

**ADD**

同COPY，但会自动解压

```
ADD zip.tar /myzip
```

**ENV**

设置环境变量， 在后续的指令中可以通过 $NODE_VERSION 引用 

```
ENV <key> <value>
ENV <key1>=<value1> <key2>=<value2>...
```

```
ENV NODE_VERSION 7.2.0
RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz"
```

**ARG**

同`ENV`, 不过作用域不一样。ARG 设置的环境变量仅对 Dockerfile 内有效，  构建好的镜像内不存在此环境变量。 

```
ARG <参数名>[=<默认值>]
```

**VOLUME**

挂载数据卷 

```
VOLUME ["<路径1>", "<路径2>"...]
VOLUME <路径>
```

**EXPOSE**

 声明端口, docker run -P 时，会自动随机映射 EXPOSE 的端口 

```
EXPOSE <端口1> [<端口2>...]
```

**WORKDIR**

指定的工作目录,之后命令都在会这一层执行

```
WORKDIR <工作目录路径>
```

## Compose

定义运行多个容器

- 安装

```
sudo curl -L "https://get.daocloud.io/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose -o /usr/local/bin/docker-compose
```

- 授权

```
sudo chmod +x docker-compose
```

- 查看版本

```
cd /usr/local/bin
docker-compose version
```

- 停止

```
docker-compose stop
```

- `yaml`

```
version:3 // 版本号
services: //服务
	webapp:
   		 build: ./dir //指定为构建镜像上下文路径
   		 depends_on://依赖关系
 		     - redis
 		 expose: //暴露端口
 			- "3000"
 		 image: ubuntu:14.04	//	指定容器运行的镜像
 		 volumes:	//	将主机的数据卷或着文件挂载到容器里。
 		 	- "/localhost/postgres.sock:/var/run/postgres/postgres.sock"


```

- depend_on 依赖	

**version**

## swarn

集群

- 初始化

```
docker swarm init [OPTIONS]
```

## RAFT协议

三个主节点  > 一台管理节点存活

扩缩容

云原生	

##  alpine 

```
FROM alpine:3.7
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
```

```
FROM python:3.7-alpine
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
WORKDIR /code
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["flask", "run"]
```

