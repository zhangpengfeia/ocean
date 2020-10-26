# 06-vueProject

## 项目初始化

```js
1.
vue create heima-pc //如果是git Bash请加winpty vue.cmd，否则不能上下移动

2.选最后一项配置
选中Babel,
    Router,
    Css Pre-processors,
    Liner/Formatter
	
	是否启动router记录模式，No
    是否使用预处理器，less
    选择那种规范化， standard config
    想在什么时机对代码规范校验，两个都选
    配置项放在哪里， 选独立文件
    是否需要为下一次项目保存本次配置，No
 
 3.绑定gitee仓库
```

## 代码规范

### ESLint

```js
1.下载vscode插件 ESlint
2.配置
    "editor.codeActionsOnSave":{
        "source.fixAll": true
    },
```

+ 配置自己的ESLint

  ```js
  rules:{
  	'规则名': off/on
  }
  ```

+ 关闭ESLint校验

  ```js
  1.删除package.json配置
  'gitHooks':{
      xxx:xxx
  }
  
  2.删除vscode中的配置
  ```



### vue代码规范

+ 查看vue官方文档



### 目录规范

####src

1. views
   + 放置跟路由绑定的组件
2. api
   + 放置网络接口
3. utils
   + 放置工具函数
4. styles
   + 公共样式

5. 删除一些不必要的文件和组件等

## Vue Devtools

> 它chrome插件,用来调试vue

## 组件库

###Element，已不维护

```js
1.安装
npm install element-ui -S
```
#### 校验表单

1. 表单验证

```js
1.
<from :model="form">
<from prop='mobile'>
    
    
form:{
        model:''
}

rules:{
    mobile:[
        { required:true,message:'请输入字符',trigger:'blur'}
        required //表示必填
        message //验证错误的提示文字
        trigger　//触发校验文件的事件
    ]   
}





2.自定义校验
const validateFlag = (rule,value,callback)=>{
    value //要校验表单项的当前输入值
    callback 校验失败负责错报错，校验成功必须调用
}


3.
this.$refs.loginForm.validate((valid)=>{
    当表单中所有需要校验的表单都通过的时候才为true,否则为false
})
```



## 封装请求模块

1. 同一个页面的请求没有语义化无法区别
2. 缺少一个统一管理所有接口的地方

### api/user.js

```js
import request from '@/utils/request'

const login = (mobile,code)=>{
    return request({
        url:''
        method:''
        data:{
        mobile,
        code
    	}
    })
}

//login方法调用达到的效果是：发起了要给登录请求，又接受了一个类型为promise对象的返回
```









##Ant Design



##安装axios

```js
小技巧
import a from '@/requst' //@ = src/ , .js可以省略

配置全局接口根路径
const instance = axios.create({
    baseURL:'路径'
})

export default instance
```



## 分析思路

### 一级路由

+ 创建一个Login文件夹
  1. index.js ,
  2. 一些静态资源



## 登录

```js
1391111111

246810
```

