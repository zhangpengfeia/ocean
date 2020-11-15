## 搭建项目

```js
1.vue create name

2.Vuex,Router,
    版本2.x
```



## vant

```js
1.安装
cnpm install vant

2.引入vant的所有组件
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

```



## 适配库

### postcss-pxtorem

```js
将css里的px转为rem


1.安装
  cnpm install postcss-pxtorem -D

2.创建一个配置文件
  postcss.config.js

3.配置
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,//结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem
      propList: ['*'], //属性的选择器，*表示通用
      selectorBlackList:[]    忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
    }
  }
}
```

### flexible

```js
1.安装
npm install amfe-flexible

2.引入
import 'amfe-flexible'
```

## 封装axios库

```js
utils/request.js

1.使用axios.create
  创建2个 instance 封装2个基地址。
```

### 在线思维导图

```
百度脑图,幕布
```

