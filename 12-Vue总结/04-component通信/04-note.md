# 04-vue



## father Son Component通信



### father pass son

1. 父组件中的模板使用子组件的地方，在子组件身上添加自定义属性，然后绑定要传递的数据
2. 子组件在props中接受父组件的值，组件名使用驼峰
3. 在模板中使用传递过来的数据,，不加this

#### static grammar

+ 不加冒号，只能传字符串

```js
Vue.component('father-component',{
    template:`<son-component title="send value"></son-component>`,
})


Vue.component('son-component',{
    props:{
        title:{
	    type:String,
            required: true //true为必须传
        }
    },//如果son本身有属性名呢，会报错
    template:`<div>{{title}}</div>">`
})
```

#### dynamic grammar

1. 传递一般 dynamicData 时，需要加冒号
2.  绑定字符串会被当成属性识别
3. number,Array,Object,function

```js
Vue.component('father-component',{
    template:`<son-component :age=18></son-component>`,
})


Vue.component('son-component',{
    props:{
        age:{
		 	type:Number
        }
    },//如果son本身有属性名呢
    template:`<div>{{age}}</div>">`
})
```



### son pass father

>  在子组件中调取父组件中的方法，并且传入要传递的数据

1. 在父组件使用子组件的身上绑定一个自定义事件，触发时调用父组件中的函数

2. 在子组件需要传值的地方，使用$emit()调用父组件的自定义函数，并传入要传的数据

   

#### grammar

```js
Vue.component('father-component',{
    template:`<div :style={color:fcolor}>
					<son-component @自定义事件='changeColor'></son-component>
				</div>`,//不需要传递实参吗
    data(){
        return{
             fcolor:'red'
            }
	},
    methods:{
        changeColor(color){
            this.fcolor = color
        }
    }
})


Vue.component('son-component',{
    data(){
        return{
            color:'blue'
        }
    },
    methods:{
        changeFatherColor(){
            this.$emit('要触发的自定义事件',要传递的数据)
        }
    }
})
```

##component抽离复用

1. component抽离后，提高了component中的模板复用性
2. 抽离组件后，只负责视图模板渲染，可以拥有自己的数据，可随意修改数据



## **总结通信方式**

1. Props + $emit()

2. 回调函数的方式，给子组件传递一个数据，一个回调函数，父组件中定义回调函数，在子组件中使用 props接收，并调用改变传入的值。

3. $parent + $children

   ```js
   在子组件中通过 this.$parent.message 访问到父组件的至
   在父组件中使用 this.$children[0].number = 50; 访问第0项，因为一个父组件可能会有多个子组件
   ```

4. provide + inject

   ```js
   fatherComponent
   {
   	provide:{
   +		message:"123"
   	}	
   }
   
   sonComponent
   inject:['message']
   ```

5. $attrs + $listeners

   ```js
   父传子传孙子
   father
   <son :name>
   
   changeName(){
       this.name = 'df'
   }
   
   son
   <button @click="$listeners.changeName">按钮</button> //触发父元素的函数
   <sonS v-bind="$attrs" > //$attrs属性中包括了father传过来的值
   
   sonS
   <div>{{$attrs.name}}</div>
   ```

6. ref

   ```js
   father
   <Son ref='child' />
   <button @click="changeName"></button>
   
   methods:{
       changeName(){
           this.$refs.child.属性名 //获取子组件属性
           this.$refs.child.方法名() //调用子组件中的方法
       }
   }
   
   
   son
   data{
   	return{
           属性名
       }
   }
   方法名(){
   	this.age = 50
   }
   ```

   





## vue-单页应用开发

> 对url进行改变和监听location.hash，让某个dom节点显示对应的视图

### 原生 router

1. 对url进行改变
2. 使用hashchange事件监听hash
3. 准备一个存放内容的dom节点
4. 描述url标识的内容对应关系
5. 将当前hash对应的内容渲染到dom节点
6. 页面加载时根据hash渲染dom节点

### vue-router

1. 准备路由和视图的对应关系
2. 使用申明好的对应关系，实例化一个router实例
3. 将router实例挂载到vue中

#### grammar

```js

<router-link to='/foo'></router-link>
<router-link to='/bar'></router-link>

<router-view></router-view> //渲染对应的组件

1.准备路由和视图的对应关系
const foo = {
    template:`<div>foo</div>`
}
const bar = {
    template:`<div>bar</div>`
}

2.使用申明好的对应关系，实例化一个router实例
const routes = [
    {
        name:'foo'
        path:'/foo',
        component:foo
    },
    {
        path:'/bar',
        component:bar 
    }
]
const router = new VueRouter({
    routes:routes
})


3.将router实例挂载到vue中
const vm = new Vue({
    el:'#app',
    route:routes
})
```

### router 跳转案例

+ query传参

  ```js
  1.实现路由跳转
  this.$router.push({
    path:'/跳转路径' ,
    query:{ //跳转时通过传参数
    	参数:xx
    }
  })
  
  2.获取参数
  {{$route.query.参数名}} //获取query传过来的参数
  ```

+ param+name传参

  ```js
  1.实现路由跳转
  this.$router.push({
    name:'routerName', //必须添加一个name属性
    params:{ //跳转时通过传参数
  	id:id
    }
  })
  
  2.添加路径占位符
  
  
  3.获取参数
  {{$route.params.id}}
  ```

  

###从一个路径跳转到另一个路径

```js
1.重定向
{
    path:'地址',
    redirect:'重定向的地址'
}

2.别名
{
    path:'路径',
    alias:'路径的别名也是路径'
}
```



###导航守卫

> 经常用来判断登录

#### grammar

```js
router.beforeEach((to,from,next)=>{
  to //前往的目标路由对象
  from //来源路由对象
  next() //可调用的函数，必须调用才能完成正常跳转
})
```



### 路由嵌套

> 在已经存在的路由器中再套一层路由器

#### 网易云路由嵌套案例

```js
{
    children:[
        path:'路径',
        component:组件名
    ]
}
```

