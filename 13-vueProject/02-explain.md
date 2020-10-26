# 02-layout架构组件实现

## element布局容器

```js
<el-menu
	:default-active='不写死' 默认激活那个菜单，与index属性匹配
	background-color=“”     菜单背景颜色
    text-color=""    文本颜色
    active-text-color=""    激活之后的颜色
	:iscollapse="true" 左侧导航栏的折叠
	:collapse-transition='false' 控制折叠的过渡效果
    :router="true" 开启路由
>
```

### header区域

```js
<el-dropdown>
    
</el-dropdown>
```

### 左侧导航菜单栏交互

```js
NavMenu导航菜单
```

## 定义路由

```js
定义404需要放到末尾


事件修饰符：第三方组件点击没有反应时使用

监听路由变化：
watch:{
    $route:{
        handler:function(newval){ }
        immediate:true ,直接执行一次    
    }
}
```





