# git

## 介绍

+ 作用是让开发者共享代码

## 版本工具的演进

+ 本地模式
+ 集中模式 svn
  + 使用单一的文件服务器，可从中提取，提交，更新，集中模式
+ 分布式git

### 版本控制

功能：可以追踪文件的变更，谁在那个时间段更改了它，改了什么内容，文件的版本号，都会记录下来，从而可以回滚到历史版本和之前的状态。

集中化版本控制：有一个单一的服务器用来保存文件，可多人协作进行修改，提取。

分布式版本控制：客户端不单单只是提取最新版本了，而是将仓库的代码完整的镜像下来，这样一来，即使任何一个协同工作的服务器或客户端发生故障，都可以用任何一个客户端的镜像仓库恢复。

## git使用前配置

使用git之前配置用户信息，为了更好的管理，提交代码是会用到这些信息

```js
git config --global user.name "Zhang" 设置用户名
git config --global user.email "email" 设置邮箱

git config --list //显示用户配置等
clear //清屏
```

## 初次使用

```js
git init 	创建git仓库，用来存储
git add xxx.html  //将指定文件添加到暂存区中
git add . 	//将所有文件添加到暂存区
git ls-flies //查看暂存区文件

git commit -m '描述这次做了什么功能'	//提交代码的备注

git status   //查看所有文件的状态。
git log 	//查看历史版本
git log --oneline //只看备注
```

## 核心概念

### 原理概念

+ 工作目录

  + 就是写代码的地方，新创建的文件都会在这里

+ 暂存区

  + 当git add . 时，就会添加到暂存区

+ 本地仓库

  + 当git commit -m '' 提交后，就会真正的存入本地仓库

  

+ 为什么不直接放入本地仓库

  + 当代码量完成一半时，通过add添加到暂存区，当误删代码时，可以从暂存区恢复代码。

### 文件状态

1. 暂存区中的文件状态

   ```js
   new file:index.js  //表示新文件
   
   delect:index.js	//已删除的文件
   
   modified：index.js //已修改的文件
   
   Unmerged paths: index.js//因包含冲突未被合并的文件
   
   
   
   
   Changes tobe committed：  //已经存入暂存区，提交到本地仓库时这些代码将会存入本地仓库
   
   Changesnot staged for commit // 以下文件未存入暂存区，如果提交未使用 -a参数的话，则不会提交到本地仓库
   
   Untracked files // 未跟踪文件，未存入暂存区，不可使用-a参数使用
   ```

+ 未跟踪（Untracked），新文件 
+ 已暂存，在暂存区的文件
+ 已修改，暂存区的代码被修改（代码在工作目录）
+ 已提交，本地仓库中的文件



## 操作流程化

+ 添加到暂存区

```js
git add 文件1 文件2  //多个文件提交
git add * //添加所有文件到暂存区，但是排除以.开头的文件
git add *.js  //将后辍为.js的文件添加到暂存区
```

+ 提交

```js
git commit //不添加-m，会弹出编辑框强制添加备注

git commit --amend //修改最后一次提交的备注
```

+ 除了新建的文件，原本就存在的文件修改后再次提交可直接使用commit存入本地

```js
git commit -a -m "备注"
//a是all的缩写，m是 message 的缩写
```

### 逆向操作

```js
restore 命令，默认是带着 --worktree 参数的

git restore --worktree  文件名
// 简写-w,将已修改没有暂存的指定文件返回修改之前。

git restore --staged 文件名  
//作用是将 暂存区的文件从暂存区撤出，但不会更改文件。

$ git restore -s id  文件名
//作用是将指定的文件，回退到指定的版本快照中




git rm -r 
//删除所有文件

git rm --cached 文件名 
//将暂存区的文件删除后，当回滚版本时，它不会存在。

git rm -f 文件名 //将文件从暂存区移到工作目录并删除文件，对未跟踪的文件不能使用
```

+ 撤销代码修改

原理是相当于把工作目录删除后，将缓存区的文件移入工作目录

```js
git checkout //在未使用add添加到暂存中时，撤销所有的修改，且永久无法找回，慎重操作
```

+ 将本地仓库的代码撤销掉

```js
git reset --hard 历史编号 //回滚到指定历史编号的版本
```

+ 工作目录，暂存区，新添加和修改的代码都不要了

```js
git reset --hard HEAD  //将本地仓库的代码覆盖掉工作目录和暂存区，最后提交的版本叫HEAD
```



## 单词

```js

//git命令---------------
global //全局
init //初始化
commit	//提交
oneline //一行
amend  //修改
restore //恢复
staged 	//已暂存
cached	//缓存
message //信息
checkout //检出
```



## git的贮藏与清理

- `适用场景：当a开发者在工作一段时间后，现在所有的东西都进入混乱状态,此时想要切换到另一个分支做其他事情，但又不想因为已经做了一半的工作创建一次提交。

- 解决:

  ```js
  git stash 或 git stash push //将新的贮藏推送到栈上，推送后工作树为空
  
  git stash list //查看被贮藏的文件
  
  git stash apply //将最新的贮藏工作重新应用
  
  git stash apply stash@{2} //将指定的贮藏重新应用
  
  git stash apply --index //加上--index后，可将之前暂存的文件重新应用暂存。
  
  git stash drop stash2{0} //移除指定的贮藏
  
  git stash pop //应用贮藏后立即从栈上移除
  
  
   
   git stash --all //来移除每一样东西并存放在栈中
  ```

  ```js
  `扩展`
  git stash --keep-index //不仅将已暂存的文件贮藏在栈，还要保留已暂存的内容和索引中
  
  `默认情况下git stash只会贮藏已暂存和已跟踪文件。`
  git status --include-untracked  //会贮藏任何未跟踪文件，但不包括明确忽略文件，简写-u。包含所有文件使用-a
  
  `不贮藏所有修改过的文件`
  git status --patch 
  
  `当贮藏了文件a,然后还在贮藏的分支上修改a,在将a重新应用工作时可能会出现合并冲突`
  git stash branch 分支名称 //检出贮藏工作所在的提交，重新在那应用工作
  ```

  



## 问题

1. git restore --staged 和 git rm --cached的区别？

+ git restore --staged 是将文件撤销到工作目录中，暂存区中还有保留，工作目录也会保留，但是当commit提交到本地仓库中时不会将此文件提交，当版本回滚时此文件会受到回滚的控制

+ git rm --cached 是将文件彻底从暂存区删除，本地工作目录也还会保留，当commit提交到本地仓库时，不会将此文件提交，但是当回滚版本时，此文件不会回滚回来

+ 总结：git restore 是撤销操作。

  ​	    git rm --cached是删除操作。

  

2. 暂存区已经将文件__add存入__，此时在工作目录中__修改文件__，___再次add___，是否会__覆盖__掉暂存区的文件？
   + 会覆盖

3. 当文件commit提交到本地仓库中后，是否还可执行git restore 和git rm --cached操作
   + 不可

   

   

