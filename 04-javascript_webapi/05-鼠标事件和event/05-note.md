#05-js Web API

##鼠标事件

```jsx
onmousedown //当鼠标点击左键的时候触发
onmouseup   // 当鼠标的按键松开的时候执行

mouseover	//鼠标移入元素触发
onmouseleave //鼠标移除元素触发


onmousemove 	// 鼠标移在元素中移动时触发


 // 以下两个事件都是，鼠标在某个元素身上移动的时候出触发
mouseover // 会冒泡到子元素
mouseenter 	// 不会冒泡到子元素
```

## event

+ 概念

  > event代表事件的状态和信息，比如触发event对象的元素，鼠标的位置及状态，按下的键等等，它的某些属性只对特定的事件有意义

  + event 是标准浏览器传进去的事件参数，事件参数放置在window.event对象中，兼容ie要加上e=e||window.event

```js
DOM.onmousemove = function(e){//e不止针对移动事件
    e.clientX	//以浏览器可视区域的左上角为原点
    e.clientY	//
    e.pageX // 以body左上角为原点
    e.pageY // 
}
```



##盒子位置

```js
DOM.offsetParent //找到一个有定位的父级，如果上级没有定位，会一直往上找，如果都没有最后找到body
DOM.offsetLeft //得到的是父级的水平距离
DOM.offsetTop // 得到的是父级的垂直距离


DOM.offsetWidth // 获取宽度，返回num类型padding+content+border
DOM.offsetHeight // 获取高度，返回num类型
//style.width 1.只能获取到行内样式 2.获取的只是内容宽度 3.获取到带px
//offsetWidth不可以设置,只能读取


DOM.clientwidth //获取宽度，不带边框
DOM.clientHeight // 获取高度
```

##事件解绑

```js
DOM.on事件类型 = null; //事件解绑 
DOM.romoveEventListener('事件',事件函数名) //注销事件
```



