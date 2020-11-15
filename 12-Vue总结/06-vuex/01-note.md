## 概念

> Vuex 是vue官方为 Vue 应用程序开发的一种状态管理模式，采用集中式存储管理应用的所有组件的状态。

+ **特点**
  1. 响应式。



## 使用

+ **安装**

  ```js
  1.npm install vuex 
  2.创建一个store文件夹下index.js
  3.导入 import Vuex from 'vuex'(需要先导入vue)
  4.挂载到vue中.
  	Vue.use(Vuex)
  5.创建实例
   const store = new Vuex.Store({
  	state:{ //组件中的data
          msg:'共享数据'
      }
   })
   6.导出
    export default store
  
  7.引入到main入口文件
   new Vue({
       store
   })
  ```

+ **获取**

  ```js
  1.直接使用
  在代码中：this.$store.state.name
  在视图中：$store.state.name
  
  
  2.映射使用
   获取的数据不能修改。
   import { mapState } from 'vuex'
   computed:{
       ...mapState(['name']) //传入的是一个数组。
   }
  
   视图使用：{{name}}
   代码使用：this.name
  ```

+ **修改**

  ```js
  1.
  mutations :{
  	函数名(value，x){
          value  当前state
          x,y 额外传入的参数
      }
  }
  
  
  调用：
  this.$store.commit('name','修改的新值')
  this.$store.commit('name:newName','修改的新值')
  
  2.映射修改
  import { mapMutations } from 'vuex'
  
  methods:{
      this.name('数据')
      ...mapMutations(['name'])
  }
  ```

  