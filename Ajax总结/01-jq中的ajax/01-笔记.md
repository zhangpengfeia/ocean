# ajax	

## 网站

将网页代码上传到服务器，并能通过域名或ip访问，它就是网站

+ 静态网站
  + 提前写好的网站，没有后台服务器的交互支持，不能实时更新数据。

+ 动态网站
  + 使用后端语言进行前后端交互，网页的数据是从服务器中动态获取到的。

  ### url

  ulr是统一资源定位符，资源类型有很多；

  url地址 = 协议 + 域名 + 路径

## 什么是ajax

+ 即异步的( Asynchronous) + JavaScript 和 XML，是一种用于创建快速动态网页的技术；使用AJAX则不需要加载更新整个网页，实现部分内容更新
+ 传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。
+ 本身不是一个新技术，是2005年Jesse James Garrett提出的新术语，用来描述一种使用现有拘束集合的’新‘方法，包括HTML,XHTML,CSS,javaScript,DOM,XML,XSLT以及XMLHttpRequest.
+ 尽管X在AJAX中代表XML，但是JSON的许多优势，不如更轻量以及作为javascrit的一部分，目前JSON比XML更加普遍。

### 知识点

1. XMLHttpRequer 
   + 它是Ajax的核心，用于与服务器进行交互，通过这个对象可以在不刷新页面的情况下请求特定URL,获取数据。
   + 它可用于获取任何数据类型，不仅仅是XML，更多出于安全等级原因的限制
   + XMLHttpRequest的过程是以异步进行的，当open()的第三个参数设置为false时，他就会已同步进行。



## get和post

+ get  和 post 区别 

  + get //主要获取服务器的资源数据，通过url传参		
  + post 主要是向指定的资源提交要被处理的数据
  + 区别：

  1. url可见性：get参数url可见，post url不可见

  2. 数据传输：get,通过拼接url进行传参，post 通过body体传输

  3. 缓存性：get请求是可缓存的，post不可缓存

  4. 后退页面：get后退时，不产生影响，post后重新提交

  5. 传输大小：get传输数据不超过2k-4k，浏览器不同限制不同

     ​		    post传输数据大小由php.ini配置文件设定，所以可无限制。

  6. 6.安全性：原则上post比get安全，毕竟传参url不可见，但是抓包会抓到



## jquery中的ajax

```js
基于jq的三个方法
$.get('url地址',地址的参数，function(){
      
      })
$.post('url地址',地址的参数，function(){})
$.ajax({
    url:'',
    type:"get",
    success:function(res){
        
    }
})
```

## 接口

后端需要给前端接口文档 

指的是API：程序员与计算机的对接

,或者URL：前后端对接



## 调试工具

Postman 验证接口是否正常。



## 图书管理案例

+ 实现的功能
  + 查询，删除，添加，并渲染到html页面

+ 接口

  + http://www.liulongbin.top:3006

    

  + 查询

    + 接口：get:  /api/getbooks

    |  参数名   |  类型  |   说明   |
    | :-------: | :----: | :------: |
    |    id     | Number |  图书id  |
    | bookname  | String | 图书名称 |
    |  author   | String |   作者   |
    | publisher | String |  出版社  |

  + 添加
    + 接口：post : /api/addbook

  |  参数名   |  类型  |   说明   |
  | :-------: | :----: | :------: |
  |    id     | Number |  图书id  |
  | bookname  | String | 图书名称 |
  |  author   | String |   作者   |
  | publisher | String |  出版社  |

  

  + 删除

    + 接口：get : /api/delbook

      | 参数名 | 类型   | 说明   |
      | ------ | ------ | ------ |
      | id     | Number | 图书id |


