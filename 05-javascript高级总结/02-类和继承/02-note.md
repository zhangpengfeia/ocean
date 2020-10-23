# js高级02



##call

+ 可改变this指向，会执行函数
+ 函数.call(this的指向，传参)

```js
function fn(a,b){
    this.a = a
    this.b = b
}

var obj = {
    
}

fn.call(obj,10,20) //前面是被调用的函数.(新对象，需要执行的参数)，fn会被执行


function fn2(a,b,c,d){
    fn.call(this,a,b)
    
    this.c = c
    this.d = d
}
new fn2(1,2,3,4);
```

##继承

1. 原型链继承

   + 通过修改原型的原型对象，指向要继承的对象或原型，从而实现继承,会造成数据共享的问题。

2. 借助构造函数

   + 在子构造函数中使用call()，apply()来改变this的指向，实现继承,不会造成共享，可以传参，但是函数复用性就没有了,且访问不到父构造函数原型中的方法。

3. 组合继承

   + 用原型链和构造函数结合使用，通过原型链实现属性和方法的继承，然后借用构造函数来实现实例属性的集成。既有函数复用性，有保证都有自己的独立性。但是构造函数会被调用两次

4. 原型式继承

5. 寄生式继承

6. 寄生组合式继承

   







##ES6类

+ 传统的js中只有对象没有类，它是基于原型的面向对象的语言。原型对象特点就是将自身的属性共享给新对象，如果要生成一个对象实例，需要先定义一个构造函数，然后通过new操作符来完成。

+ ES6加入了类，通过class定义。该关键字出现使其在对象写法上更加清晰。

+ 特点

  1. 实质上类就是一个函数，自身指向的就是构造函数

  ```js
  class Person{
      
  }
  console.log(typeof Person);//function
  console.log(Person===Person.prototype.constructor);//true=
  ```

  2. 类的所有方法都定义在prototype上
  3. constructor方法是类的构造函数的默认方法，通过new命令生成对象实例时，自动调用
  4. constructor不定义也存在，默认返回实例对象this
  5. constructor中定义的属性可称为实例属性，即定义在this对象上，在它之外定义都是在原型上的
  6. 类的所有实例共享一个原型对象，所以proto属性是相等的。
  7. class不存在变量提升，需要先定义在使用

```js
class 类名{ //创建类
    constructor(name,age){	//es5的构造函数
        this.name = name
        this.age = age
    }
    
    fun1(){ } //自定义方法
}	

var cls = new 类名("zs",12)	//实例化对象
cls.fun1() //调用类里的方法


hasOwnProperty() //判断是否为实例属性
```

### 类的继承

1. extends 要继承的类
2. constructor中使用super()获取继承类的属性

```js

class my extends 要继承的类名 {	//类的继承
    //如果继承方法同名是不会覆盖的，调用时会按照原型链规则执行
    super.被继承的方法() //可以调用上级方法
}
var m = new my('1',2)//可直接传参


class my extends 要继承的类名{
    constructor(x,y,z){
        super(x,y) //给被继承的类构造函数，确定留几个位置,必需在this前面调用，即使没有参数也要放在前面。
    }
}

```



