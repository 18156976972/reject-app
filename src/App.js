import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
//自定义路由拦截模块
import MyRoute from "./pages/MyRoute/MyRoute"

//懒加载模块的引入
import asyncComponent from "./util/asyncComponent"
import Login from './pages/Login/Login'

const Index = asyncComponent(()=>import('./pages/Index/Index'))
const Register = asyncComponent(()=>import('./pages/Register/Register'))
const Home = asyncComponent(()=>import('./pages/Home/Home'))
const Classify = asyncComponent(()=>import('./pages/Classify/Classify'))
const ShopsCart = asyncComponent(()=>import('./pages/ShopsCart/ShopsCart'))
const Mine = asyncComponent(()=>import('./pages/Mine/Mine'))

const ShopList = asyncComponent(()=>import('./pages/ShopList/ShopList'))
const ShopDetail= asyncComponent(()=>import('./pages/ShopDetail/ShopDetail'))


function App() {
  return (
    <div className="App">
      {/* 接口 */}
      <Switch>
        <Route path="/login" component={Login}></Route>
        <MyRoute path="/index" component={Index}></MyRoute>
        <MyRoute path="/register" component={Register}></MyRoute>
      
        <MyRoute path="home" component={Home}></MyRoute>
        <MyRoute path="/classify" component={Classify}></MyRoute>
        <MyRoute path="/shopscart" component={ShopsCart}></MyRoute>
        <MyRoute path="/mine" component={Mine}></MyRoute>
        <MyRoute path="/shoplist/:id" component={ShopList}></MyRoute>
        <MyRoute path='/shopdetail/:id' component={ShopDetail}></MyRoute>
        
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
