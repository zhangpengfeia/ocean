[TOC]




## 方法

### Object.keys()

+ 返回值：一个表示给定对象的所有可枚举属性的字符串数组 。
+ object.keys和 for in 的排序没有任何区别,for in还会枚举其原型链上的属性

```js

let ogj = {
    name:'zs',
    age:18,
}
Object.keys(obj)  // ['name','age']


let arr = [a,b,c]
Object.keys(arr)	//["0","1","2"]
```

### Object.values()

+ 返回值：对象所有的values

  

### Array.from()

+ 可以迭代一个可遍历的对象，并转为一个真正的数组

  ```js
  Arrray.from(obj) 
  ```

### Object.is()

+ 判断两个对象是否相等

  ```js
  Obejct.is(obj1,obj2) //相等为true,不等为false
  ```

### toString.call()

+ 判断数据类型，对每一种数据类型都实用 

  ```js
  toString.call(数据)
  ```

### Array.of()

+ 该方法的作用非常类似Array 构造器，但在
  使用单个数值参数的时候并不会导致特殊结果

  ```js
  Array.of 基本上可以用来替代Array()或newArray()，并且不存在由于参数不同而导致的重
  载，而且他们的行为非常统一
  ```

### startsWith()

+ 匹配首个指定的字符，匹配到为true,没有为false

  ```js
  str.startsWith("字符") //有这个字符为true 
  ```

### includes()

+ 匹配指定的值，匹配到为true,无则false，可用于数组和字符串

  ```js
  str.includes('a') 
  arr.includes('a') //找a这个元素 
  ```

### Object.assign ()

+ Object.assign方法用于对象的合并，将源对象（ source ）的所有可枚举属性，复制到目标对象（ target ）。 

```js
Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

### window.onerror

+ 它是一个全局的异常处理函数，可以抓取所有的JavaScript异常。

  ```
  window.onerror = function(message, source, line, column, error) {	
  	
  }
  ```




### Object.setPrototypeOf()

```js
用来设置一个对象的原型链。
Object.setPrototypeOf(a,b) //b 做为 a 的原形对象
```



## 属性

