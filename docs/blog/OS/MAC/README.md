暂时使用命令

```
//有时候因为环境变量问题 不能使用命令，即使用下面命令补救
export PATH=/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin
```



echo $PATH

查看环境变量

```
sudo vi ~/.bash_profile
export PATH=$PATH:/haha/notexist
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

- 更新配置的环境变量

```
 source .bash_profile 
```

