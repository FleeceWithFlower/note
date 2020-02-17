# [Git](/blog/Tools/npm/)

分布式版本控制系统

*Distrib uted Version Control System*(<acronym title="*Distributed Version Control System*">DVCS</acronym>)

<author>Linus Benedict Torvalds</author>

> "Git是目前世界上最先进的分布式版本控制系统"

 

***

## 快照



> 每次提交或在Git中保存项目的状态时，Git基本上会抓取i一张所有文件当前状态的快照，然后储存一个指向该快照的引用。如果文件没有改动，Git不会重新保存文件，而只是留下一个指向先前已保存过的相同文件的连接。



***

## 校验



> Git所有数据在存储前都会执行校验和计算，随后以 校验和 来引用数据

SHA-1 散列类

> 校验和机制，是以 40个十六进制字符（0-9和a-f）所组成的字符串



***



## 三种目录

Git目录

> 用来保存项目元数据和对象数据库

工作目录

> 某个版本的单次检出，这些文件中Git目录下的压缩数据库内被提取出，放在磁盘上以供使用或修改

暂存区

> 暂存区是一个文件，一般位于Git目录中，它保存了下次所要提交的内容的相关信息



<hr>



## 三种状态

已提交（committed）



> 已提交表示已经安全的存入本地数据库

已修改（modified）



> 已修改表示已经改动了文件，但尚未提交到数据库

已暂存（staged）



> 已暂存表示已经对修改的文件的当前版本做出了表示并将其加入下一次要提交的快照中



***



## Git工作流程

1. 修改工作目录中的文件
2. 暂存文件，将这些文件的快照加入暂存区
3. 提交暂存区的文件，将快照永久的保存在Git目录中

***



## 配置

增加

添加用户身份

```
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

初始化仓库

```
git init
```



查询

查看设置

```
git config --list
```

查看帮助

```
git help
```



***



## 标签

增加

标签

```
git tag [tag-name]
```

参数

 -a [tag-name] -m[annotation]

> -a 指定标签名，说明标签带注释
>
> -m 快速添加注释信息

#### 

上传标签

```
git push [remote-name] [tag-name]
```

参数

--tags

> 一次性上传所有标签

检出标签

git checkout -b [branch-name] [tag-name]

> 标签是某次提交的快照，是固定不可变的,可以利用标签创建新的分支来修改

***

删除

删除标签

```
git tag -d <tagname>
```

删除远程标签

```
git push origin :refs/tags/<tagname>
```

***

修改

补加标签

```
git tag -a [tag-name] [SHA-1 校验和]
```

***

查询

查看所有标签

```
git tag
```



***



## 分支

增加

创建分支

```
git branch [branch-name]
```

创建+切换分支

git checkout -b  [branch-name]

删除

删除分支

```
git branch -d  [branch-name]
```



修改

切换分支

```
git checkout [branch-name]
```

参数

- -b

  > 创建+切换分支

```
git checkout -b  [branch-name]
```





查询

查看分支列表

```
git branch 
```

参数

--merged

> 已合并分支

--no-merged

> 未合并分支



### 远程分支

> 远程分支是对远程仓库的引用(指针)，包括分支，标签



### 上游分支(upstream branch )/追踪分支 ( track branch )

> 跟踪分支检是与远程分支有直接关系的本地分支

- 本地分支关联追踪分支

```
git branch -u || --set-upstream-to   [remote-name]/[remote-branch-name]
```

- 查看追踪分支

```
git branch -vv
```

***



## 合并

> 寻找共同祖先，进行三方合并



***



## 变基

- ### git rebase

> 把某个分支上所有的提交的更改在另一个分支上重现一遍



***



## 远程仓库



- ### 创建SSH Key

- 打开Git Bash

```
ssh-keygen -t rsa -C "youremail@example.com"
```

- 在用户主目录下生成.ssh目录

```
里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。
```



- git remote

>  查看远程仓库名称

- 添加远程仓库

```
git remote add   [remote-name]  [remote-url]
```

###### 

- 删除远程仓库

```
git remote rm [remote-name]
```



- 删除远程分支

```
git push [remote-name] --delete [remote-branch-name]
```

- ### 查看远程仓库 URL

- git remote -v

> 查看每个仓库对应的 url

- 查看远程仓库分支

```
git ls-remote [remote-name]
```



- 从本地推送到远程仓库

```
git push -u [remote-name] [branch-name]
```

- ###### -u

```
首次推送添加上游分支/追踪分支
```



- 从远程仓库克隆到本地

```
git clone [remote-name]  [dir-name]
```

- 克隆远程指定分支

```
git clone -b <branch name> [remote repository address]
```

- 切换远程分支

```
git checkout -b dev origin/dev
```



- ### 拉取数据

- git fetch

> 从服务器拉去数据但不合并

- git pull

> 从服务器拉去数据并且合并



- ### 检查远程仓库

```
git show  [remote-name]
```

- ### 重命名远程仓库

```
git remote remote [remote-name] [new-name]
```

#### 



***

## 工作区

增加

添加文件将状态保存到暂存区

```
git add <file>
```

参数

- /* 或 .

  > 添加或删除所有文件将状态保存到暂存区

删除文件将状态保存到暂存区（status）

```
git rm <file>
```

参数

- -cache

  >  忽略文件设为未跟踪

-  -f

  >  强行删除文件



删除

撤销修改

```
git checkout -- <file>
```

> 若已提交暂存区，但没commit，则返回至暂存区的状态
>
> 若没有提交暂存区，则返回版本库状态

修改

重命名

git mv

> 可以使用手动重命名，和cli重命名

参数

- from
- to







查询

查看历史输入命令

```
git reflog
```

查看工作目录文件状态

```
git status
```

查看文件差异

```
git diff <filename>
```



***



## 暂存区



增加

将暂存区状态保存到git仓库

```
git commit
```

参数

- -m

  > 快速添加注释
  >
  > > 注释流程
  > >
  > > 
  > >
  > > 进入vim编辑器
  > >
  > > 1. <kbd>shift</kbd> 开始编辑
  > > 2. /#  为注释
  > > 3. 结束 嗯 <kbd>ESC</kbd> 退出编辑 ，输入 <kbd>:wq</kbd>保存并退出VIM

- ##### -a

> 自动添加所有文件到暂存区

***

删除

清空暂存区	

```
git reset HEAD <file>
```



退回上一版本

```
git reset --hard HEAD^^
```



退回指定版本

```
git reset --hard HEAD^^
```

git reset --hard <commit id>

***

修改

***

查询

***

查看提交历史

```
git log
```

参数

- ##### -p

  > 查看差异



- ##### -\<num>

  > 查看条数



- --stat

  > 摘要模式



- git log --pretty=oneline

  > 简洁版历史记录



- ##### --pretty=format

  > 自定义log输出模式



- --since /  --after

  ```
  git log --since=2.weeks 
  ```

  

  > 筛选时间范围内的提交
  >
  > 格式
  >
  > > weeks
  > >
  > > 2008-8-1
  > >
  > > 2 year 1 day 3minnutes ago



- --until  /  --before

  >  直到某一天

- --author

  > 筛选作者

- --grep

  > 筛选说明中的关键字

- -S

  > 少许那提交了某个字符串

- -- \<dir>

  > 筛选提交的目录



## 

# KEY（关键字）

***

- 

  ### 基本命令

- git init --bare --shared

  > 初始化裸仓库

- git checkout [file name]

  > 撤销文件的修改

- git checkout -b [branch name]

  > 创建分支，当前工作目录并移动到该分支

- git add

  > 1. 将工作目录中的文件 已修改状态	设为	已暂存状态
  > 2. 将为文件 未追踪状态   设为  追踪状态

- git reset HEAD

  > 将暂存目录中的文件	已暂存状态	设为	已修改状态

- git commit

  > 将暂存目录中的文件 已暂存状态	设为	已提交状态

- git commit --amend

  > 合并上一条提交

- git branch

  > 查看分支信息

- git branch [branch name]

  > 创建分支

- git status

  > 查看当前分支状态

- git rm --cached -f

  >将文件设为未追踪状态

- git log

  > 查看历史提交信息

- git tag

  > 查看标签列表

- git tag -l [reg]

  > 筛选标签列表

- git tag [tag name] -a -m "[mes]''

  > 添加注释标签

- git tag [ tag name ] [ SHA-1]

  > 为历史提交补加标签

- git push [remote name] [tag name]

  > 向远程仓库标签

- git push [remote name] [tag name] --tags

  > 向远程仓库所有标签

***

- 

  ### 远程仓库

- git remote add [remote name]  [remote url]

  > 添加远程仓库

- git remote rename [remote name] [new remote name]

  > 重命名远程仓库

- git remote rm [remote name]

  > 删除远程仓库

- git remote -v

  > 显示远程仓库

- git remote show [remote name]

  > 查看远程仓库详情

- git fetch [remote name]

  > 拉取远程仓库数据

- git pull

  > 拉取远程仓库数据，并尝试合并到当前分支

- git push [remote name] [branch name]

  > 将数据推送到远程仓库

  