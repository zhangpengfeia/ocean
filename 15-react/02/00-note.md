# React基础02

## 脚手架-项目创建

```js
1.创建命令 
npx create-react-app 项目名 
// npx 如果本地有这个模块就使用，如果没用就下载
```

### 文件介绍

```js
src下的文件都可删除,只保留核心
可以看脚手架官方文档
components // 组件目录 
  创建函数组件或类组件可以导入到App
  
react中的逻辑业务和样式是分开写的
全局样式放在 style 目录下，叫index.css
组件样式和组件同名同级，需要导入 

```

## 循环

```js
在jsx中使用map
{
    arr.map((v,i)=>(
    	<li key={i} onClick={()=>{ this.fun() }}> {v} </li>
    ))
}
```

## 受控组件

```js
相当于v-model

```

