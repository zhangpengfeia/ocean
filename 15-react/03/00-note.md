# React-03

### this的指向

```js
1. 在jsx中直接用this 
2. 声明函数时用箭头函数声明
3. 在事件中使用箭头函数 {()=>{ Fun() }}
```

### 非受控组件

> 和 vue 中的 ref 类似，可以直接获取 dom 

+ 如果不需要双向绑定，但是需要取值使用 __React.creatRef()__

  ```js
  1. 在constructor里调用 React.creatRef() 方法获取返回值
  2. 把返回的内容保存到实例属性中
  3. render 方法中把上一步的属性赋值给ref
  4. 就可以在方法中通过这个属性获取到dom
  ```



## 组件通信

### 兄弟组件通信

> 两个平级组件就称兄弟组件

+ **步骤**
  1. 提升：把共享的数据提取到他们公共的父组件中
  2. 共享：谁使用数据就传给谁，谁修改数据通过调用函数修改

```js
* 父组件
changeInfo = (newInfo) =>{ 
    this.setState = {
        fatherInfo: newInfo // 修改之后，数据会重新向下更新
    }
}


<chilerA info={this.state.fatherInfo} /> // 传入数据通过 props 接收
<chilerB changeIninfo={this.state.fatherInfo} /> // 修改数据，子组件调用函数修改
    
    
* B子组件
this.props.changeInfo("修改值") // 调用函数修改
```



### 单标签和双标签

> 类似于vue的插槽,但是React是可以传递 jsx 格式的数据。

```react
* 单标签打印为undefeid
* 双标签可以打印出来值
	如果双标签中有jsx标签，那么打印的是一个对象 this.props.chidren

* 可以在属性中传入 jsx 格式，然后在组件中渲染出来
<SendTems header={ <div>呵呵</div> } />
<div>{this.props.hader}<div>
 
* 当然也可以传入组件
  <SendTems Header={<Arct/>} />
  <div>{this.props.Header}<div>
```

### 功能复用

> 外部传入结构到内部组件内，内部可以传递数据到外部结构 

```react
* 外部结构
<Render 
    render={
        (secret) => {
            return (
            <div>
             	{secret}   
             </div>
            )
        }
    }
/>


* 内部组件
state = {
    secret: "呵呵"
}
let { render } = this.props
let { secret } = this.state
{
    render(secret)
}
```

### 功能复用-RenderProps-children属性 

> 和 render 复用一样，只不过是属性名换为了 children

 英雄联盟接口 :  https://autumnfish.cn/api/lol/search

```react
* herolist
render() {
        return (
            <div>
                <HeroListData render={ (listData) => {
                    return (
                        <ul>
                            {listData.map((v,i)=>{
                                return <li key={i} >
                                    <h3>{v.name}</h3>
                                    <img src={v.icon} alt=""></img>
                                    <audio src={v.selectAudio} controls></audio>
                                </li>
                            })}
                        </ul>
                    )
                }}/>
            </div>
        )
    }


* heroListData
    render() {
        let { heroListData } = this.state
        let { render } = this.props

        return (
            <div>
                <div onClick={ this.getHeroList }>
                    <h2>英雄列表</h2>
                    { render(heroListData) }
                </div>
            </div>
        )
    }
```

### HOC-高阶组件

> 相当于用函数把class组件包裹起来，然后在这个函数中将class组件return出去，然后将函数return出去，外部组件声明普通函数，然后传将函数传入进来

```
1.结构由外部组件函数来定
2.数据由高阶函数来定
```



## 知识点

1. **setState是异步的**

   ```react
   1. 当调用 this.setState({}) 时，会进行虚拟 dom 的 diff 算法，这个操作是异步的。
   2. 有第二个参数是一个回调函数，在这个函数中拿到的是最新的值，类似于 vue 中的 nextTick()
      this.setState({
          num: num + 1
      },()=>{ this.state.num })
   3. 和 vue 一样，在更新虚拟 dom 时，并不会每次调用都会重新渲染真实 dom，它用了 diff 算法，一层一层对比，当虚拟 dom 更新完毕后，才会渲染真实的 dom
   
   4.传入函数,可以获取到最新的值，不考虑页面的更新
   	this.setState((state)=>{ return { num:num+1 } })
   ```



## 问题

1. 在vscode里单标签和双标签怎么替换生命周期