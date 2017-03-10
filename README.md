# Demo01
>-open-browser-webpack-plugin 编译完成后自动打开浏览器
>-html-webpack-plugin 自动生成html文件
>-style-loader,css-loader 加载CSS文件
>-extract-text-webpack-plugin 自动整合样式文件，webapck2.* 的要指定版本
```
npm install --save-dev extract-text-webpack-plugin@2.0.0-rc.3
```
同时对应的webpack.config.js要改成
```
{
  test:/\.css$/,
  use:extractTextPlugin.extract({
    fallback:'style-loader',
    use:'css-loader'
  })
}

```
