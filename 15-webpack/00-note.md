## 传统开发和工程化开发

+ 传统开发，不用任何构建工具

+ 工程化的方式，使用webpack

  ```js
  传统开发是将源代码直接在浏览器跑，工程化的方式
  源代码  --> 目标代码 
  ```

  

  ## webpack

  > webpack是一个现代javaScript应用程序的 `静态模块打包器`,三大前端框架都是用webpack打包的，且基于node.js.

### 使用

```js
1.初始化
npm init -y
2.安装
npm i webpack@4.4.0 webpack-cli@3.2.0  -D

3.检查
npx webpack -v 检查安装

4.打包命令
npx webpack 
```

```
将打包之后的main.js引入目标文件。
```

```js
解决打包css出错
1.安装loader包
npm install --save-dev css-loader  //允许引入css
npm install --save-dev style-loader //以style的格式插入到html
2.配置
user:['style-loader','css-loader'] //有顺序

打包图片时：
use:{
    loader:'file-loader',
     options:{
         outputPath:'路径',
             limit:3*1024, //入股图片小于3k就转为base64,否则直接拷贝
          name:'[name]-[hash:8].[ext]',
     }
}
```

```
测试网站兼容性 
```

```js
自动添加css样式前缀。
安装 npm install autoprefixer -D
postcss-loader:它会借助autoprefixer来添加兼容浏览器的css前缀。
单独配置 postcss.config.js

单独处理兼容 : browserslist:'ie 8'
```

```js
test: /\.js$/,
exclude:/node_modules/,
use:[
    {
        loader:'babel-loader',
        options:{
            presets:['@babel/preset-env']
        }
    }
]
```

```js
mini-css-extract-plugin
html-webpack-plugin

plugin:[
    new MiniCssExtractPlugin({
		filename:'css/[name].css'
    }),
    new HtmlWebpackPlugin({
        minify:{
			removeComments:true, //移除HTML中的注释
            collapseWhitespace:true, //删除空白符和换行符
            minifyCSS:true //压缩内联css
        },
        filename:'index.html',
        template:path.resolve('./public/index.html') //
    })
]
```

```js
npm i clean-webpack-plugin -D
修改webpack.config.js
```

````js
optimize-css-assets-webpack-plugin

去除console.log()
new TerserWebpackPlugin({
	compress:{
        drop_console:true
    }
})
````

+ webpack实时打包

  ```js
  npm i webpack-dev-server -D
  ```
  

### 初始化vue项目

```js
1.初始化
npm init -y
2.安装各种依赖
npm i html-webpack-plugin vue-loader vue-style-loader vue-template-compiler wbpack@4.4.2 webpack-cil@3.3.12 webpack-dev-server -D
npm i vue


```
