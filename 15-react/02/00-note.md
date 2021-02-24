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

## react通讯



> 不像vue，必须提前声明，而react不需要提前声明,和vue一样是单向数据流，可读不可修改

### 父传子

```js

1.函数组件传参数
<Fun msg="参数" ... />
function Fun(props){
    
}
2.class组件传参
class className extends React.Component{
    
    constructor(porps){
        super(porps)
        this.porps 可以拿到
    }
    render(){
        let {参数1，...} = this.props
    }
}
export default className
```

#### 传递函数

```js
直接传递
fun(){
    
}

<ProFun hanlder={this.fun}/>
    
    
获取：
class className extends React.component{
    render () {
        
        return (
        	this.props.hanlder() 直接调用
        )
    }
}
```

### 子传父

```js
通过调用父组件函数传递参数

father:
faterFun = (newInfo) => {
    this.setState({
        info: newInfo
    })
}

reder(){
    return ( 
    	<Profun info={info} changeInfo={this.faterFun} />
    )
}


son:

class ProFun extends React.component {
    render(){
        let { info } = this.props
        let { changeInfo } = this.props
        return (
        	<div>
            	<input onClick={changInfo('传递的参数')}
            </div>
        )
    }
}

提示：
如果不需要有自己的数据状态，那么用函数组件较好
需要保存自己的状态就用类组件
和vue一样，数据源更新，子组件数据也会改变
```

### 数据传递限制

+ __PropTypes__ :类型校验即默认值

  ```js
  1.下载导入包
    npm i prop-types
    import PropTypes from 'prop-types'
  2.校验
  function sonFun(){
      let { info } = this.props
  }
  
  PropsCheck.propTypes = {
      info: PropTypes.string  // 必须为字符串
  }
  
  PropsCheck.defaultProps = {
      info: '默认值'  // 默认值
  }
  
  ```

## 插件

```
React tools // 浏览器插件

```



