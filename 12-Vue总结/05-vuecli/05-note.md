# 05-vue

## vue-cli

> 是一个vue项目的官方脚手架工具

### 功能

1. 统一项目目录
2. eslint代码风格约束
3. css预处理
4. babel编译 se6/7 -> 5
5. 内置开发本地服务器等功能。

### 安装

```js
1.安装
npm install  @vue/cli  -g

2.检测是否安装成功
@vue/cli -V

3.创建项目
vue create 项目名称

4.运行项目
npm run serve
```

### 文件分析

#### main.js

```js
render(h){
    return h('div')
}

h:是render函数中的自动注入函数，用来渲染标签和组件

#mount():挂载到哪里
```

#### .vue

```html
<template></template>	//html模板

<script>
    export default{
        data(){}, 
        methods:{},
        mounted{}
    }
</script>	//组件脚本
    
<style lang="less" scoped>
    lang //使用那个预处理器
	scoped //限制组件样式作用范围为当前组件
</style>
```



### 安装vue-router

```js
npm install vue-router -S

使用Vue.use(VueRouter) 安装vue-router
```



## 英雄列表小案例

```js
import axios from 'axios' 
Vue.propotype.$http = axios //将axios存入Vue原型中，可以全局访问
```



## ref

> 用来获取原生的dom

1. 和v-for搭配使用，获取的是多个dom组成的数组

```js
<div ref="box"></div>

this.$refs.box 
```



## slot插槽

###匿名

> 占位，可以在组件标签中占位

```js
<name-component>hhh</name-component>

template:`
	<div>
		<slot></slot>
	</div>
	`
```

### 具名

> 可以添加多个占位，位置可自定义，可以和匿名一起用

```js
<name-component>
 	<template v-slot:name>
        <div>11</div>
    `9`</template>
 	<template v-slot:name2></template>
 </name-component>

template:`
	<div>
		<slot name="name"></slot>
		<slot name="name2"></slot>

	</div>
	`
```











## ？

1. render()函数