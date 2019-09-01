# [Git](/blog/Tools/npm/)

"Git是目前世界上最先进的分布式版本控制系统"

> SHA-1 校验和

Git Bash配置

```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

初始化git

```
git init
```





## 主要使用方法



### 1.添加文件将状态保存到暂存区（status）

使用命令`git add <file>`，注意，可反复多次使用，添加多个文件；

```
git add <file>
```

### 2.删除文件将状态保存到暂存区（status）

```
git rm <file>
```

git rm -cache \<file>

- 忽略文件设为未跟踪

git rm -f \<file>

- 强行删除文件

### 3.将暂存区状态上传git仓库（commit）

```
git commit -m <message>
```

#### git commit 

##### 进入vim编辑器

1. <kbd>shift</kbd> 开始编辑
2.  /#  为注释
3. 结束 嗯 <kbd>ESC</kbd> 退出编辑 ，输入 <kbd>:wq</kbd>保存并退出VIM

##### -a

自动添加所有文件到暂存区

##### -m

快速打注释

##### -amend

- 修改上次提交

### 4.重命名

> 可以使用手动重命名，和cli重命名

#### git mv

- from
- to

### 5.查看提交历史

##### git log

```
git log
```

##### -p

- 查看差异

##### -\<num>

- 查看条数

##### --stat

- 摘要模式

##### git log --pretty=oneline

- 简洁版历史记录

##### --pretty=format

- 自定义log输出模式

##### --since=2.weeks  /  --after

- 筛选两周之内的提交
- 2008-8-1
- 2 year 1 day 3minnutes ago

##### --until  /  --before

- 直到某一天

##### --author

- 筛选作者

##### --grep

- 筛选关键字

##### -S

- 少许那提交了某个字符串！

-- \<dir>

- 筛选提交的目录

## 



## 撤退/删除

### 1.撤销修改

```
git checkout -- <file>
```

//若已提交暂存区，但没commit，则返回至暂存区的状态

//若没有提交暂存区，则返回版本库状态



### 2.清空暂存区	

```
git reset HEAD <file>
```

//HEAD 表示最新版本



### 3.撤回指定版本

- 退回上一版本

```
git reset --hard HEAD^^
```

- 返回指定版本

```
git reset --hard <commit id>
```





## 命令符

- 掌握工作区的状态

```
git status
```













- 记录命令

```
git reflog
```

- 比较文件差异

```
git diff <filename>
```

***

## 标签（tag）



### 轻量标签

git tag [tag-name]

### 注释标签

git tag -a [tag-name] -m[annotation]

### 补加标签

git tag -a [tag-name] [校验和]

### 上传标签

git push [remote-name] [tag-name]

> 一次性上传

git push [remote-name] --tags

### 检出标签

git checkout -b [branch-name] [tag-name]

> 标签是某次提交的快照，是固定不可变的,可以利用标签创建新的分支来修改

### 删除

- 删除标签

```
git tag -d <tagname>
```

- 删除远程标签

```
git push origin :refs/tags/<tagname>
```



### 命令符

- 查看所有标签

```
git tag
```

### 上传标签

- 推送一个本地标签

```
git push origin <tagname>
```

- 推送全部未推送过的本地标签

```
git push origin --tags
```
***

## 分支管理

### 创建分支

#### git branch [branch-name]

### 

### 切换分支

#### git checkout [branch-name]



### 创建+切换分支

#### git checkout -b  [branch-name]



### 合并某分支到当前分支

#### git merge [branch-name]



### 删除分支

#### git branch -d  [branch-name]



- 查看分支

```
git branch
```

### 分支合并冲突

```
当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交
```

- 查看分支合并图

```
git log --graph
```

- 带参数查看分支合并图

```
git log --graph --pretty=oneline --abbrev-commit
```

### 分支管理策略

```
git merge --no-ff -m "merge with no-ff" dev
```

//`--no-ff`参数，表示禁用`Fast forward`

### Bug分支

储存当前工作

```
git stash
```

查看stash列表

```
git stash list
```

回复存档

```
git stash apply stash@{*}
```

s

```
git stash pop
```

### 强行删除分支

```
git branch -D <name>
```

### 查看各个分支当前所指对象

#### git log --oneline --decorate

#### git log --oneline --decorate --graph --all

> 查看分支指向及分叉情况

### Fast-forward

> 合并分支时，两条分支在同一条线上，提示 Fast-forward，简化合并操作，直接将指针向前移动

***

## 远程仓库（github）

## 

### 创建SSH Key

- 打开Git Bash

```
ssh-keygen -t rsa -C "youremail@example.com"
```

- 在用户主目录下生成.ssh目录

```
里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。
```



### 添加远程仓库



### git remote

- 查看远程仓库名称

##### add

```
git remote add origin git@server-name:path/repo-name.git；
```



##### -v

- 查看每个仓库对应的 url

### 从本地推送到远程仓库

- 第一次

```
git push -u origin master
```

- 此后

```
git push origin master
```



### 从远程仓库克隆到本地

```
git clone <url> <<name>>
```

//url 地址

//name 克隆后本地项目名字 

//  <>必要参数

//  <<>> 不必要参数

- 克隆分支

```
git clone -b <branch name> [remote repository address]
```

- SSH

```
user@server:/path.git
```

- HTTP

```
https://github.com/michaelliao/gitskills.git
```

- 切换远程分支

```
git checkout -b dev origin/dev
```



### 拉取数据

#### git fetch

#### git pull

### 检查远程仓库

#### git show  [remote-name]

### 删除远程仓库

#### git remote rm [remote-name]

### 重命名远程仓库

#### git remote remote [remote-name] [new-name]



#### 命令符



查看远程库的信息

```
git remote
```

显示更详细的信息

```
git remote -v
```



