# Canvas（画布）

+ 使用

  ```js
  //1.获取画布
  var cas = document.querySelector('canvas)
                                   
  //2.获取画笔
  var ctx = cas.getContetxt('2d');
  
  //3.用画笔向画布上画图
  ctx.moveTo(100,100)  //设置画笔的起始点，x,y轴
  ctx.lineTo(300,100) //设置画笔的结束点
  ctx.stroke() //对绘制到画布的路径进行描边
  ctx.rect(100,100,100,100) //前两个参数为坐标，后两个为宽高
  
  //4.向画布中绘制一张图片
  var img = new Image()
  img.src = '路径'
  img.onload = function(){
  	ctx.drawImage(img,0,0,100,100,0,0,100,100) //
  }
  var bas64data = cas.toDataURL() //生成一个bas64地图片地址
  ```

  

