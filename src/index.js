import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import App from './App';

//引入移动端框架
import 'antd-mobile/dist/antd-mobile.css'

//reset.css样式表
import './assets/css/reset.css'
import './assets/js/rem'

//  定义中间层
import store from './store'
import {Provider} from 'react-redux'

//定义路由模式
import {HashRouter} from 'react-router-dom'

//在全局，给图片加一个前缀（自己定义一个变量存着,存在Component，的原型链上）
Component.prototype.$img="http://localhost:3000"

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <App></App>
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);