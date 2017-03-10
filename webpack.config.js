var path=require('path');
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var openBrowserPlugin=require('open-browser-webpack-plugin');
var extractTextPlugin=require('extract-text-webpack-plugin');

var config={
  entry:path.resolve(__dirname,'./src/App.js'),
  output:{
    path:path.resolve(__dirname,'./dist'),
    //publicPath:'/resource/',
    filename:'bundle.js'
  },
  plugins:[
    new htmlWebpackPlugin({
      title:'迅隆船务',
      template:'./src/app.html'
    }),
    new openBrowserPlugin({
      url:'http://localhost:7080'
    }),
    new extractTextPlugin("style.css")
  ],
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:extractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader'
        })
      },
      {
        test:/\.(png|jpg)$/,
        loader:'url-loader?limit=8192&name=images/[name].[ext]'
      }
    ]
  }
}

module.exports=config;
