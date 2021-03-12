[TOC]





### 字符串中提取数字

```js
let str = 'ABC1234D5FFG&7'

1.把字符串转为数组
2.使用 filter 遍历
3.如果为数字 return
[...str].filter(a => !Number.isNaN(parseInt(a)) )
```

