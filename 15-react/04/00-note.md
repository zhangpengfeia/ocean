# React-04

### displayName

```react
在创建高阶组件的时候会造成重名
通过 displayName 改变组件名称：
	组件变量.displayName = '组件名'
```



### React路由

> react中的路由也是一种组件，导入即可使用

```react
1. 安装 npm i react-router-dom
2. 导入
  	import { HashRouter as Router, Route } from 'react-router-dom'
	HashRouter: 路由出口
    Route: 路由路径和对应的组件
3. 使用
	function Index(){ //路由组件
        return {
            
        }
    }
	
	function List(){ //路由组件
        return {
            
        }
    }

	function Root(){
        return <div>
        	<HashRouter> {/*BrowserRouter  Router */}  
            	<Route path="/index" component={Index} />
            	<Route path="/list" component={List} />
            </HashRouter> 
        </div>
    }
	
	export default Root
```

+ __路由模式__

  1. HashRouter ： 带#号
  2. BrowserRouter : 没有 # 号，利用的是浏览器的 history 属性，推荐

+ __404页面__

  ```react
  需要用 Switch 包裹，只显示一个路由
   import { HashRouter as Router, Route, Switch } from 'react-router-dom'
  
  <HashRouter> {/*BrowserRouter  Router */} 
  	<Switch>
          <Route path="/index" component={Index} />
          <Route path="/list" component={List} />
          <Route path="*" component={NotFound} /> // 用 * 号
  	</Switch>
  </HashRouter> 
  ```

+ __重定向__

  ```react
  Redirect
  
  import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
  
  <HashRouter> {/*BrowserRouter  Router */} 
      <Route path="/index" component={Index} />
      <Route path="/list" component={List} />
      <Redirect from="/" to="/index" /> 
  </HashRouter> 
  ```

+ __路由解析过程__

  ```react
  React 的默认解析模式是模糊匹配，开头相同就匹配，调整为精确匹配即可：exact
  
  1. 输入 url 后
  2. React 解析，获取pathName
  3. 从上到下解析，只要有一个匹配就进入
  4. 将重定向改为精确匹配
  	<Redirect from="/" to="/index" exact /> 
  ```



## 导航

### 编程式导航

> 通过 Props 中的 history 对象实现

#### 语法

```react
push 和 replace
push：有历史记录
replace：无历史记录

props.history.push()
props.history.replace('/index')
```

### 声明式导航

```react
1.
import { Link } from 'react-route-dom'
<Link to='/index'>导航</Line> // 选中后不会高亮

2.
import { NavLink } from 'react-route-dom'
<NavLink to='/index' activeClassName="actived">可高亮导航</NavLink> // 可高亮导航
<NavLink to='/index' activeStyle={{ border:xx }}>自定义样式</NavLink> // 自定义样式

```

## 路由嵌套

> 在官网中没有这个说明，就是在路由中在套一层路由结构，和vue的子组件一样

```react
*注意： <Router></Router> 要将路由相关的所有组件都包裹起来
```

### 传递参数

```react
<Link to="/index/11">跳转带参</Link>
<Route path='/index:id?' component={ index } /> // 接收,?可选参数

function Index(props){
    props.match.params // 可以拿到传过来的数据
}
```



## 框架



### antd-mbile 

> 和 element-ui类似，它和React绝配生命周期