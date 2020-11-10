# 数组方法

- join()
- push()和pop()
- shift() 和 unshift()
- sort()
- reverse()
- concat()
- slice()
- splice()
- indexOf()和 lastIndexOf() （ES5新增）
- forEach() （ES5新增）
- map() （ES5新增）
- filter() （ES5新增）
- every() （ES5新增）
- some() （ES5新增）



## join()	转成字符串

join，就是把数组转换成字符串，然后给他规定个连接字符，默认的是逗号( ，)

- 书写格式：`join(" ")`，括号里面写字符串 ("要加引号"),

```js
var arr = [1,2,3];
console.log(arr.join()); 　　　　// 1,2,3
console.log(arr.join("-")); 　　// 1-2-3
console.log(arr); 　　　　　　　　// [1, 2, 3]（原数组不变）
```



## push()和pop()	数组末尾增/删

push(): 把里面的内容添加到数组末尾，并`返回`修改后的长度。

- 书写格式：`arr.push(" ")`，括号里面写内容 ("字符串要加引号"),

pop()：移除数组最后一项，`返回`移除的那个值，减少数组的length。

-  书写格式：`arr.pop( )`

```js
var arr = ["Lily","lucy","Tom"];
var count = arr.push("Jack","Sean");
console.log(count); 　　　　　　　　　　// 5
console.log(arr); 　　　　　　　　　　　// ["Lily", "lucy", "Tom", "Jack", "Sean"]
var item = arr.pop();
console.log(item); 　　　　　　　　　　 // Sean
console.log(arr); 　　　　　　　　　　  // ["Lily", "lucy", "Tom", "Jack"]
```



## shift() 和 unshift()	数组开头删/增

(和上面的push，pop相反，针对第一项内容)

**shift()：删除原数组第一项，并`返回`删除元素的值；如果数组为空则`返回`undefined 。**

**unshift:将参数添加到原数组开头，并`返回`数组的长度 。**

- 书写格式：`arr.shift(" ")`，括号里面写内容 ("字符串要加引号"),

```js
var arr = ["Lily","lucy","Tom"];
var count = arr.unshift("Jack","Sean");
console.log(count); 　　　　　　　　　　　　　　// 5
console.log(arr); 　　　　　　　　　　　　　　　//["Jack", "Sean", "Lily", "lucy", "Tom"]
var item = arr.shift();
console.log(item); 　　　　　　　　　　　　　　// Jack
console.log(arr); 　　　　　　　　　　　　　　 // ["Sean", "Lily", "lucy", "Tom"]
```



## sort()	数组从小到大排序

**sort()：将数组里的项从小到大排序**

- 书写格式：`arr.sort( )`

```js
var arr1 = ["a", "d", "c", "b"];
console.log(arr1.sort()); 　　　　　　　　　　// ["a", "b", "c", "d"]
```

- sort()方法比较的是字符串，没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数

```js
function sortNumber(a,b)
{
　　return a - b
}
```

```js
arr = [13, 24, 51, 3]; 
console.log(arr.sort()); 　　　　　　　　　　// [13, 24, 3, 51] 
console.log(arr.sort(sortNumber)); 　　　　// [3, 13, 24, 51](数组被改变)
```



## reverse()	数组翻转

reverse()：反转数组项的顺序。

- 书写格式：`arr.reverse( )`

```js
var arr = [13, 24, 51, 3];
console.log(arr.reverse()); 　　　　　　　　//[3, 51, 24, 13]
console.log(arr); 　　　　　　　　　　　　　　//[3, 51, 24, 13](原数组改变)
```



## concat()	数组的拼接

**concat() ：将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后`返回`新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并`返回`副本。**

- 书写格式：`arr.concat()`，括号里面写内容 ("字符串要加引号"),

```js
var arr = [1,3,5,7];
var arrCopy = arr.concat(9,[11,13]);
console.log(arrCopy); 　　　　　　　　　　　　//[1, 3, 5, 7, 9, 11, 13]
console.log(arr); 　　　　　　　　　　　　　　// [1, 3, 5, 7](原数组未被修改)
```



## slice()	 截取

**slice()：`返回`从原数组中指定开始下标到结束下标之间的项组成的新数组。slice()方法可以接受一或两个参数，即要`返回`项的起始和结束位置。在只有一个参数的情况下， slice()方法`返回`从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法`返回`起始和结束位置之间的项——但不包括结束位置的项。**

- 书写格式：`arr.slice( 1 , 3 )`

```js
var arr = [1,3,5,7,9,11];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);
var arrCopy4 = arr.slice(-4,-1);
console.log(arr); 　　　　　　　　　　　　　　//[1, 3, 5, 7, 9, 11](原数组没变)
console.log(arrCopy); 　　　　　　　　　　　 //[3, 5, 7, 9, 11]
console.log(arrCopy2); 　　　　　　　　　　　//[3, 5, 7]
console.log(arrCopy3); 　　　　　　　　　　　//[3, 5, 7]
console.log(arrCopy4); 　　　　　　　　　　　//[5, 7, 9]
```

- arrCopy只设置了一个参数，也就是起始下标为1，所以`返回`的数组为下标1（包括下标1）开始到数组最后。 
- arrCopy2设置了两个参数，`返回`起始下标（包括1）开始到终止下标（不包括4）的子数组。 
- arrCopy3设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（6）来替换该位置的数，因此就是从1开始到4（不包括）的子数组。 
- arrCopy4中两个参数都是负数，所以都加上数组长度6转换成正数，因此相当于slice(2,5)。



## splice	删除，增加，替换

splice()：删除、插入和替换。

**删除**：指定 2 个参数：要删除的第一项的位置和要删除的项数。

- 书写格式：`arr.splice( 1 , 3 )`

**插入**：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。

-  书写格式：`arr.splice( 2,0,4,6 )`

**替换**：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。

- 书写格式：`arr.splice( 2,0,4,6 )`


```js
var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);
console.log(arr); 　　　　　　　　　　　　　　　//[5, 7, 9, 11]
console.log(arrRemoved); 　　　　　　　　　　　//[1, 3]
var arrRemoved2 = arr.splice(2,0,4,6);
console.log(arr); 　　　　　　　　　　　　　　　// [5, 7, 4, 6, 9, 11]
console.log(arrRemoved2); 　　　　　　　　　　// []
var arrRemoved3 = arr.splice(1,1,2,4);
console.log(arr); 　　　　　　　　　　　　　　　// [5, 2, 4, 4, 6, 9, 11]
console.log(arrRemoved3); 　　　　　　　　　　// [7]
```



## indexOf()和 lastIndexOf()	查找

**indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。**

- 书写格式：`arr.indexof( 5 )`

**lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。**

- 书写格式：`arr.lastIndexOf( 5,4 )`

```js
var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5)); 　　　　　　//2
console.log(arr.lastIndexOf(5)); 　　　 //5
console.log(arr.indexOf(5,2)); 　　　　 //2
console.log(arr.lastIndexOf(5,4)); 　　//2
console.log(arr.indexOf("5")); 　　　　 //-1
```



## forEach()	遍历

**forEach()：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有`返回`值。参数都是function类型，默认有传参，参数分别为：遍历的数组内容；第对应的数组索引，数组本身。**

- 书写格式：`arr.forEach()`

```js
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(x, index, a){
console.log(x + '|' + index + '|' + (a === arr));
});
// 输出为：
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true
```



## map()	遍历

**map()：指“映射”，对数组中的每一项运行给定函数，`返回`每次函数调用的结果组成的数组。**

书写格式：`arr.map()`

```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function(item){
return item*item;
});
console.log(arr2); 　　　　　　　　//[1, 4, 9, 16, 25]
```



## filter()	过滤

**filter()：“过滤”功能，数组中的每一项运行给定函数，`返回`满足过滤条件组成的数组。**

- 书写格式：`arr.filter()`

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr.filter(function(x, index) {
return index % 3 === 0 || x >= 8;
}); 
console.log(arr2); 　　　　　　　　//[1, 4, 7, 8, 9, 10]
```



## every()	判断是否每一项满足条件

**every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会`返回`true。**

- 书写格式：`arr.every()`

```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function(x) {
return x < 10;
}); 
console.log(arr2); 　　　　　　　　//true
var arr3 = arr.every(function(x) {
return x < 3;
}); 
console.log(arr3); 　　　　　　　　// false
```



## some()	判断是否有一项满足条件

**some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会`返回`true。**

- 书写格式：`arr.some()`

```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function(x) {
return x < 3;
}); 
console.log(arr2); 　　　　　　　　//true
var arr3 = arr.some(function(x) {
return x < 1;
}); 
console.log(arr3); 　　　　　　　　// false
```



# string字符串

| **charAT（index）**     | 通过索引找字符                                               |
| ----------------------- | ------------------------------------------------------------ |
| **charCodeAt**（index） | 通过索引找到字符的 Unicode 编码。这个`返回`值是 0 - 65535 之间的整数。方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者`返回`的是位于指定位置的字符的编码，而后者`返回`的是字符子串。 |
| **indexOf（）**         | 从前往后找，找到`返回`内容的索引，找不到`返回`-1；           |
| **lastIndexOf**（）     | 从后往前找，找到`返回`内容的索引，找不到`返回`-1；           |
| **slice（n，m）**       | 从索引n 查找到索引m  但不包括m，slice可以取负值              |
| **substring（n，m）**   | 从索引n 查找到索引m ，但不包括m， 不可以取负值               |
| **substr（n，m）**      | 从索引n开始截取m 个                                          |
| **split（切割形式）**   | 把一个字符串分割成字符串数组。                               |
| **toUpperCase（）**     | 转大写字母                                                   |
| **toLowerCase（）**     | 转小写字母                                                   |
| replace(n，m)           | 替换                                                         |

 

# Math对象

| **Math.floor（）**   | 向下取整            |
| -------------------- | ------------------- |
| **Math.ceil（）**    | 向上取整            |
| **Math.random（）**  | 取0-1之间的随机小数 |
| **Math.round（）**   | 四舍五入            |
| **Math.max（）**     | 取最大值            |
| **Math.min（）**     | 取最小值            |
| **Math.abs（）**     | 取绝对值            |
| **Math.pow（x，y）** | x的y次幂            |
| **Math.sqrt（）**    | 开平方              |



# Date日期对象

| **new Date（）**              | 创建一个日期对象                                             |
| ----------------------------- | ------------------------------------------------------------ |
| **getFullYear（）**           | `返回`年份                                                   |
| **getMonth（）**              | `返回`月份数（0-11），想要得到几月，需要加1                  |
| **getDay（）**                | `返回`一周的第几天（0-6），想要得到星期几，需要加一          |
| **getDate（）**               | `返回`日                                                     |
| **getHours（）**              | `返回`时                                                     |
| **getMinutes（）**            | `返回`分                                                     |
| **getSeconds（）**            | `返回`秒                                                     |
| **getTime（）**               | `返回`从1970年1月1日00：00到现在的毫秒数（格林尼治时间），也就是时间戳 |
| **setYear(yearInt)**          | 设置年份.2位数或4位数                                        |
| **setFullYear(yearInt)**      | 设置年份.4位数                                               |
| **setMonth(monthInt)**        | 设置月份(0-11)                                               |
| **setDate(dateInt)**          | 设置日(1-31)                                                 |
| **setHours(hourInt)**         | 设置小时数(0-23)                                             |
| **setMinutes(minInt)**        | 设置分钟数(0-59)                                             |
| **setSeconds(secInt)**        | 设置秒数(0-59)                                               |
| **setMilliseconds(milliInt)** | 设置毫秒(0-999)                                              |

