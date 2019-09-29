## 创建目录

- md/mkdir

```
mkdir <dir>
```

## 删除目录

- rd \<folderName> 
  -   rd只能删除空文件夹，如果其中有子文件或子文件夹就会停下来

- rd /s \<folderName>
  - rd 加上 /s就可以直接删除，但是删除时会弹出是否确认删除的提示

- rd /s /q \<folderName>
  - 对于有些不需要确认的删除操作，就可以加/q (quit)退出，启用安静模式，就可以删除文件

## 新增空文件

- type nul

```
 type nul > .test
```

## 新增有内容文件

echo [fileContent]

```
echo HelloWorld > hello.txt
```

## 删除文件

del

```
del hello.txt
```

# CMD

### 远程桌面

```
mstsc
```

