import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
//定义路由
//懒加载模块的引入
import asyncComponent from "./util/asyncComponent"
import Login from './pages/Login/Login'

const Index = asyncComponent(()=>import('./pages/Index/Index'))
const Register = asyncComponent(()=>import('./pages/Register/Register'))
const Home = asyncComponent(()=>import('./pages/Home/Home'))
const Classify = asyncComponent(()=>import('./pages/Classify/Classify'))
const ShopsCart = asyncComponent(()=>import('./pages/ShopsCart/ShopsCart'))
const Mine = asyncComponent(()=>import('./pages/Mine/Mine'))

const ShopDetail = asyncComponent(()=>import('./pages/ShopDetail/ShopDetail'))
const ShopList = asyncComponent(()=>import('./pages/ShopList/ShopList'))


function App() {
  return (
    <div className="App">
      {/* 接口 */}
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/register" component={Register}></Route>
      
        <Route path="home" component={Home}></Route>
        <Route path="/classify" component={Classify}></Route>
        <Route path="/shopscart" component={ShopsCart}></Route>
        <Route path="/mine" component={Mine}></Route>

        <Route path="/shopdetail" component={ShopDetail}></Route>
        <Route path="/shoplist" component={ShopList}></Route>
        
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
