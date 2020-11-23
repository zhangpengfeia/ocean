# 原型对象

## 面向对象

### 什么是面向对象？

> 是一种编程思想，采用抽象化构造函数和实例化对象就是面向对象，就是用对象的方式描述一件事物

## 什么是原型？

> js中是通过原型实现继承的，js所有的东西都可以看做是对象，原型也是一个对象，可以通过原型实现对象的属性继承，其主要作用就是为了实现继承和扩展对象。

 ## 什么是原型对象?

> 每个函数都有一个prototype属性，这个属性指向函数的原型对象。原型对象中有一个constructor属性，它指向函数本身。

```js
比如有一个函数
function a(){ }	//根据规则为函数a创建一个prototype
a.prototype //a函数中的prototype的指向就是它的原型对象
a.prototype.constructor === a //而原型对象中自动获得一个constructor属性，constructor的指向就是a函数本身
a.prototype.toString //toString是原型对象中没有的，它是从object继承而来的
```

## 为什么要使用prototype？

> 使用prototype原型添加的方法，解决了数据共享，内存浪费，代码重复执行，问题，节省了内存空间.



##什么是proto？

>  这是js中每个对象原型都有的属性，它指向的是prototype,所以它也会指向该对象的原型对象

```js
a.prototype.__proto__ ===  Object.prototype //true
a的原型对象是由构造函数Object生成的，他们之间通过__proto__存在关系.

原型对象是构造函数Object生成的，而object也是一个函数，所以 Object.prototype 指向Object的原型对象.
```

## 什么是原型链?

```js
当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的__proto__隐式原型上查找，即它的构造函数的prototype，如果还没有找到就会再在构造函数的prototype的__proto__中查找，这样一层一层向上查找就会形成一个链式结构，我们称为原型链。
```



```js
--扩展
 普通数据类型是直接存在内存的栈中，而复杂数据类型只会把内存地址存在栈中，真正的数据会存在栈中的那个地址指向的堆中。    
```

##构造函数

+ 构造函数实例化步骤
  1. 在内存堆中新建一个空对象
  2. 将新对象的__proto__指向构造函数的prototype
  3. 将构造函数的this指向新对象，执行构造函数中语句，对新对象this初始化
  4. 有返回值且为引用值，则返回引用值，为原始数据则返回新对象，未设置返回值则返回新对象

```js
//首字母大写
function Star(name,age){
    //this代表未来某一次实例化对象
    this.name = name 
    this.age = age
    this.sing = function(){
        console.log("共同属性")
    }
}

//实例化：使用构造函数创建出一个对象
var w1= new Star('小白',18);
var w2= new Star('小黑',19);

//功能：方法调用，本质是函数，也是个复杂数据类型
//共同的属性

p1.sing == s2.sing    //false
//推断：在内存中 p1.sing 和 p2.sing 在堆上开启了两个不同的内存
```

##prototype

prototype属性，这个属性指向函数的原型对象。 

每一个构造函数都有一个prototype

实例化对象都有prototype,比如数组,自定义实例化的对象

```js
//解决，内存浪费问题
Star.prototype.sing = function(){
    console.log("我会唱歌")
}

p1.sing == p2.sing // true,它两存到了同一块空间
```

##_\_proto\_\_

实例化对象上 __proto__属性名:值是一个对象

```js
//p1.__proto__ 和 Star.prototyle，一样
p1.__proto__ == Star.prototype //true



//以下两种方法都可获取sing().
p1.sing()	//原型链的查找规则。
p1.__proto__.sing() 
```

## this指向

```js
//this谁调用就☞谁

//1.
function fn(){
    console.log(this)	//这里是windows
}
fn();


//2.
function Star(){
 	this.name = "hh"
    this.age = 13
    console.log(this) //指的是未来实例化对象
}

```

##查看类型

```js
参数1 instanceof  参数2 //参数1的类型是否为参数2,返回值是布尔值
//针对构造函数，看实例化对象的类型是否为instanceof后面的参数

```

##做一个基础的封装

```js
//1.设置一个函数
function Myfun(){
    //--获取DOM元素，放入this
}

//2.方法放在原型对象里
Myfun.propotype.rClick = function(){
    
}
```

