import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import './default.css';//加载公用样式
import router from './router/router.js';//加载路由文件
import './config/config'//加载配置参数

render(router,document.getElementById('container'));
