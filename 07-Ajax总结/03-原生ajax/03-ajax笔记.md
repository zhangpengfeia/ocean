# Ajax 3Day

## 新闻案例

+ 需求：	
  + 获取新闻列表数据，使用模板引擎渲染到html

    + 定义过滤器，把字符串格式日期转为日期对象
    + 将字符串转为数组

+ 接口

  http://www.liulongbin.top:3006

  ​	URL：  /api/news

  ​	调用方式： GET

  - 返回示例：

  ```json
  {
      "status": 200,
      "msg": "获取新闻列表成功",
      "data": [
          {
              "id": 1,
              "title": "5G商用在即，三大运营商营收持续下降",
              "source": "新京报经济新闻",
              "cmtcount": 58,
              "tags": "三大运营商,中国移动,5G商用",
              "img": "/images/0.webp",
              "time": "2019-10-28T03:50:28.000Z"
          }
      ]
  }
  ```

  

## 原生Ajax

+ 发送步骤

  1. 创建xhr实例对象
  2. 准备发送请求的相关参数
  3. 执行发送请求的动作
  4. 监听服务器返回的结果

  ### get请求

  ```js
  
  var xhr =  new XMLHttpRequest() //1.
  
  //对get请求参数进行的编码处理是为了防止乱码
  var oarams = encodeURI('参数')  //使用encodeURI处理主动进行编码处理
  decodeURL(oarams)  //使用decodeURL反向解码
  
  xhr.open('get','url')  //2.  get要传参时直接写在url,
  xhr.send(null) //3.   get要传参时直接写在url,post需要传参
  xhr.onreadystatechange = function(){	//4
          if(xhr.readyState === 4 && xhr.status === 200){ //成立数据拿到
          var res = xhr.responseText//获取到服务器返回的数据
      }
   }
  
  ```

  ### post请求

  ```js
  var xhr =  new XMLHttpRequest() //1.
  
  xhr.open('post','url')  //2.  
  
  //post传递参数时必须设置请求头
  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset-UTF-8');
  
  xhr.send(name="aabc"&age="18") //3.   post需要传参
  xhr.onreadystatechange = function(){	//4
      if(xhr.readyState === 4 && xhr.status === 200){ //成立数据拿到
          var res = xhr.responseText//获取到服务器返回的数据，这里的数据为字符串
      }
   }
  ```

  ### 响应状态

  ```js
      xhr.readyState //有 5个状态
      0 = 对象已创建
      1 = open()已被调用
      2 = send()已被调用
      3 = 数据接受中
      4 = 服务器返回数据完毕
  
  	xhr.status //http协议的状态
  	200 = 数据正常
  
  xhr.onreadystatechange = function(){
  	
  } 
  ```

  ### 数据格式

  + 为了解析数据的方便，诞生了数据格式的标准
    + XML数据格式
      + 不方便大量数据网络传输
      + 不方便前端解析
  + 为了改善上述问题，就诞生了JSON
    + 它是一种字符串格式

  ```js
  /*1.数据结构为键值对
    2.键名必须使用双引号
    3.不能有注释
    4.最外层必须为对象或数组
    5.键值类型不能为undefined,可无限嵌套数组或对象
  */
  var str = '{name:"zs","age":1}'
  var obj = JSON.parse(str)		//将json字符串格式转为对象格式
  var str2 = JSON.stringify(obj)	//将json对象格式转为字符串格式
  
  ```

  ## 分析jquery中的ajax

  

## 原生ajax升级版

```js
xhr.timeout = 30		//设置超时时间，超过这个时间服务器依然没有返回，ontimeout回调函数会自动出发，主要用于提示用户。
xhr.ontimeout = function(){
    console.log("请求超时")
}


//这种方式需要后端支持
var fd = new FormData(this) //创建FormData(),作用是用来传参,传递form元素
fd.append('键'，'值')	//给fd中添加一个键值对
fd.delete('键')	//删除fd中的其中一个键
console.log(fd.get('键')) //查询fd中的键的值
xhr.send(fd)
```



```js
var xhr =  new XMLHttpRequest() //1.

xhr.timeout = 30		//设置超时时间，超过这个时间服务器依然没有返回，ontimeout回调函数会自动出发，主要用于提示用户。
xhr.ontimeout = function(){
    console.log("请求超时")
}

//对get请求参数进行的编码处理是为了防止乱码
var oarams = encodeURI('参数')  //使用encodeURI处理主动进行编码处理
decodeURL(oarams)  //使用decodeURL反向解码

xhr.open('get','url')  //2.  get要传参时直接写在url,
xhr.send(null) //3.   get要传参时直接写在url,post需要传参
xhr.onreadystatechange = function(){	//4
    if(xhr.readyState === 4 && xhr.status === 200){ //成立数据拿到
        var res = xhr.responseText//获取到服务器返回的数据
    }
 }
```



### 上传文件

```js
<input type=”file“ multiple>  // 使用multiple上传多个文件
<progress value="0" max="100">
 
    
file.files //获取文件

//监听文件上传进度
xhr.upload.onprogress = function(e){
    e.lengthComputable //当为true时，表示文件正在上传
    //计算进度 （已上传的大小 / 总大小 * 100） 可得出 100比
    var rate = Math.ceil(e.loaded/e.total *100)
    //更新进度条
    progress.setAttribute('value',rate)    
}
//上传完毕时候出发
xhr.upload.onload = function(){
    
}
```



## new知识

1. html

   ```jsx
   <input  type="file" multiple> //上传多个文件
   ```

   



## 单词

```js
encodeURI() //编码

decodeURL()	//反响编码

multiple //多个
```



## ？

+ 请求头格式?
  + HTTP协议是以ASCII码传输，建立在TCP/IP协议上的应用层规范。
  + HTTP请求分为，状态行，请求头，消息主体。
  + 去协议规定post提交的数据必须放在消息主体(entity-body)中
  + 服务端通常是根据请求头（headers）中的 Content-Type 字段来获知请求中的消息主体是用何种方式编码，再对主体进行解析。 
  + 所以说到 POST 提交数据方案，包含了 Content-Type 和消息主体编码方式两部分。 



+ 为什么上传文件post不需要设置请求头




+ get and post 的区别

  + get
    + get请求可被缓存，缓存静态资源，不会缓存动态数据
    + get请求保留在浏览器历史纪录中
    + get请求长度有限制 ie2k 其他8k
    + get请求将参数拼接到URL上进行传递
  + post请求：
    + post请求不会被缓存。
    + post请求不会保留在历史记录
    + post请求对数据长度没有要求，服务器可能会限制
    + post请求将放到Request body中后

+ 为什么给submit绑定点击事件不会获取到服务器数据？
