import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//引入移动端框架
import 'antd-mobile/dist/antd-mobile.css'

//reset.css样式表
import './assets/css/reset.css'
import './assets/js/rem'

//定义路由模式
import {HashRouter} from 'react-router-dom'
ReactDOM.render(
  <HashRouter>
    <App></App>
  </HashRouter>,
  document.getElementById('root')
);