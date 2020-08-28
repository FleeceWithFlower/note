## yum 语法

```
yum [options] [command] [package ...]
```

- **options：**可选，选项包括-h（帮助），-y（当安装过程提示选择全部为"yes"），-q（不显示安装的过程）等等。
- **command：**要进行的操作。
- **package**操作的对象。

## yum常用命令

- 1.列出所有可更新的软件清单命令：yum check-update

- 2.更新所有软件命令：yum update

- 3.仅安装指定的软件命令：yum install <package_name>

- 4.仅更新指定的软件命令：yum update <package_name>

- 5.列出所有可安裝的软件清单命令：yum list

  yum list nginx*

  > 列出所有名称為nginx的包

- 6.删除软件包命令：yum remove <package_name>

- 7.查找软件包 命令：yum search <keyword>

- 8.清除缓存命令:

  - yum clean packages: 清除缓存目录下的软件包
  - yum clean headers: 清除缓存目录下的 headers
  - yum clean oldheaders: 清除缓存目录下旧的 headers
  - yum clean, yum clean all (= yum clean packages; yum clean oldheaders) :清除缓存目录下的软件包及旧的headers

- 更新

```
 yum -y update
```

 