暂时使用命令

```
//有时候因为环境变量问题 不能使用命令，即使用下面命令补救
export PATH=/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin
```





环境变量

```
sudo vi ~/.bash_profile //修改
export PUB_HOSTED_URL=https://pub.flutter-io.cn	//设置变量
export PATH=$PATH:/haha/notexist  //设置环境变量
```

使用环境变量

```
 source ~/.bash_profile 
```

