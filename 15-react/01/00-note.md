# React基础

## 基础

### 基本步骤

```js
1.下载并导入react
import React from 'react' // 创建虚拟dom
import ReactDom from 'react-dom' // 将虚拟dom渲染到页面中的

2.创建虚拟dom
const div = react.createElement('div',{ id:'xx' },'内容')

3.调用render函数渲染
ReactDom.render(div,document.getElementById('app'))
```

### JSX语法

> 在js中，混合写入类似于html的语法，叫做JSX语法，严格遵守XML规范的js，它的html语法最后都会被转换为react.createElement的。

#### 使用

```js
1.安装
cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
cnpm i babel-preset-env babel-preset-stage-0 babel-preset-react -D

2.配置webpack配置
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude:'/node_modules/' }
        ]
    }
3.添加.babelrc配置文件
{
    "presets": [
        "env",
        "stage-0",
        "react"
    ],
    "plugins": [
        "transform-runtime"
    ]
}
```

#### 语法

```js
1.渲染
<div>{ a }<div> // 在jsx中使用变量
<div>{ a + 2 }<div> // 可以在花括号内放插值表达式或者计算
<div>{ arr }<div> // 渲染数组
2.类名
className="class"
<label htmlFor='o'></label>
```

### 组件

#### 语法

```js
1.构造函数形式
function Component(props){ // 以形参的形式接受name
    props.name // 接收到了属性
    return <div>hello</div> 
   // 必须要加return,必须return一个合法的虚拟dom,null表示什么都不渲染
}

// 组件名称首字母必须大写
<Hello name='小白'></Hello>
```

#### 抽离组件

+ **第一种(构造函数)**

  ```js
  1.在src下面创建components文件
  
  2.使用export default Hello // 把组件暴露出去
  
  3.导入
   import Hello from './from/Hello.jsx' // 不配置的话必须加.jsx后缀
  ```

+ **第二种(class)**

  ```js
  1.创建一个类
  class ClassName extends React.Component
      // 组件继承了 React.Component 这个父类。
      constructor(){
          super()
          this.state = { // 相当于vue中组件的data
              msg: '大家好' // class创建的私有数据
          }
      }
  
      render(){
          this.state.msg = 'hh' // 创建的私有数据是可读可写的
          
          return <div>
              { this.props.name }  // 直接使用传递的props参数  
            </div>
          
      }
  }
  
  user = {
      name:'zs'
  }
  
  // 传参
  <ClassName ...user></ClassName>
  ```

  + 注意
    1. 无论是那种方式他们的props都只是可读的，使用class创建的组件是有状态的，有自己的私有数据和生命周期函数。
    
    2. React官网说，无状态组件，由于没有私有属性和生命周期，所以运行效率比有状态组件稍微高。
    

### 样式

```js
1.下载css-loder和style-loder两个包
2.在webpack配置中配置
	{ test: /\.css$/,use: ['style-loder','css-loder']}
3.在组件中导入
  import css from '/css'

4.使用
  className={ css.xx } // css模块化了
```



### 事件

```js
1.绑定
hh =(a) => {	a }
onClick={ ()=>{ this.hh(1) } }

```

### 受控组件

```js
1.value绑定上state中的值后，通过onchange事件获取state中最新的值

注意：React中的 onchange事件在内部是做了处理的，和原生事件不同不是失去焦点触发

state = {
    inputValue: '文字'
}
changeHandler = (e) =>{
    e
    this.setState = ({
        inputValue: e.target.value
    })
}
render() {
    let { inputValue } = this.state
    return (
    	<div>
        	<h2>受控组件</h2>
        	<input type="text" value={ inputValue } onChange={ this.changeHandler } />
        </div>
    )
}


多个值受控,相当于多个双向绑定
1.利用name动态更新值

changeHandler = (e) =>{
    this.setState({
        [e.target.name]:e.target.value  // 属性表达式写法，[]中可以写表达式
    })
}

<input type="text" name={inputValue} value={ inputValue } onChange={ this.changeHandler } />
<input type="text" name={inputValue2} value={ inputValue2 } onChange={ this.changeHandler } />
```



### 修改state中的值

```js
this.setState({ msg: '123' },function(){ })
* setState是异步代码，如果调用之后想立即使用改变的值那么需要在回调中操作
```



 ## 生命周期

> 基本上每个框架都会有生命周期，是框架提供给开发者，让开发者在特定的时间注册自定义逻辑，本质上是回调函数

```js
* 挂载阶段
	1. 初始化 state 数据 constructor
    2. 初次渲染视图执行 render
    3. 加载完成后执行的钩子函数 componentDidMount()
* 更新阶段
	1. 重新渲染视图 render
    2. 更新渲染完毕后执行的钩子函数 componentDidUpdate() 
* 卸载阶段
	1. 卸载完成之前执行的钩子函数 componentWillUnmount()
```





## 插件

```
极简插件
```

