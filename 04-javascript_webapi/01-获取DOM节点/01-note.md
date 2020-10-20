# 01-js Web API

## 概念

+ 介绍

  > Web API是浏览器提供的一套操作浏览器和页面元素的API（DOM和BOM）,比如让浏览器弹出提示框，元素显示隐藏等功能。

+ DOM

  > DOM：document object model 文档对象模型，是W3C推荐的处理HTML的标准编程接口，可通过DOM接口改变页面的结构样式等。

  1. DOM树，又称文档树模型，将文档映射为树形结构，通过节点对象对其处理，处理的结果可加入到当前页面

     + 文档：一个页面就是一个文档，DOM中使用document表示

     + 节点：网页中的所有内容，在文档树中都是节点（标签，属性，文本，注释等），使用node表示
     + 标签节点：网页中所有的标签，通常称为元素节点，简称元素，使用element表示

  - BOM：borwser object model  浏览器对象模型，描述了与浏览器进行交互的方法和接口，不同浏览器效果不同，window是BOM的，非js对象

## DOM节点

###查找

```js
var id = document.getElementById("id")	//id获取
var tag = document.getElementByTagName("标签"); //标签名获取
var name = document.getElmenentsByName("name") //name获取
var class = document.getElementByClassName("类");	//class获取
var css = document.querySelector('css选择器') //选择器获取单个
var css = document.querySelectorAll('css选择器') //选择器获取多个
```

### 创建

```js
var tagName = document.createElement('tagname') //创建一个dom节点
const text = document.createTextNode('text')//创建一个文本
const annotation = document.createComment('annotation') //创建一个注释
const fragment = document.createDocumentFragment() //创建一个片段
```

### 添加

```js
dom.appendChlid(tagname) //将tag插入到指定的父tag最后一个子Node
```

### 移除

```js
dom.removeChild(tagname) //要删除的tag 
```

### 替换

```js
dom.replaceChild(NewTagname,tagname) //第一个是新标签，第二是要替换的tag
```

### 插入

```js
dom.insertBefore(NewTagname,tagname) //第一个参数为新标签，第二个为指定插入到那个标签的前一个位置
```





## 样式操作

```js
DOM.style //获取CSS样式
DOM.style.width = "100px" //设置CSS样式值（行内样式）
```

## 类名操作

```js
a.classList.add("类名") //添加类名，重复类名只添加一次
a.classList.remove("类名") //移除类名
a.classList.toggle("类名") //切换类名，有就删，无则添加

a.className // 获取标签内class设置值，返回的是字符串
a.className = "class" //直接修改class,多个类名会被覆盖，设置类名尽量使用add()
```

## 事件

```js
DOM.onclick = function(){}//点击
DOM.onfocus = function(){}//焦点
DOM.onblur = function(){}//失去焦点
```

## 自定义属性操作

```js
<div data-xxx="1"> //设置
div.dataset //获取
```

