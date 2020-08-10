import React, { Component } from 'react'
import {Switch,Route,Redirect,NavLink} from 'react-router-dom'
import './Index.css'
import img1 from '../../assets/img/tab_home_nor.png'
import img2 from '../../assets/img/tab_home_hig.png'

import img3 from '../../assets/img/tab_menu_nor.png'
import img4 from '../../assets/img/tab_menu_hig.png'

import img5 from '../../assets/img/tab_shopping_nor.png'
import img6 from '../../assets/img/tab_shopping_hig.png'

import img7 from '../../assets/img/tab_me_nor.png'
import img8 from '../../assets/img/tab_me_hig.png'

import Home from '../Home/Home'
import Classify from '../Classify/Classify'
import ShopsCart from '../ShopsCart/ShopsCart'
import Mine from '../Mine/Mine'
import ShopDetail from '../ShopDetail/ShopDetail'

export default class Index extends Component {
    render() {
        return (
        <div className='index'>
            <Switch>
         <Route path='/index/home' component={Home}></Route>
         <Route path='/index/classify' component={Classify}></Route>
         <Route path='/index/shopscart' component={ShopsCart}></Route>
         <Route path='/index/mine' component={Mine}></Route>
         
         <Redirect to ='/index/home'></Redirect>
            </Switch>


          <footer>
                    <NavLink to="/index/home" activeClassName="select">
                        <span className='index-img1'><img src={img1}></img></span>
                        <span className='index-img2'><img src={img2}></img></span>
                        首页</NavLink>
                    <NavLink to="/index/classify" activeClassName="select">
                    <span className='index-img1'><img src={img3}></img></span>
                        <span className='index-img2'><img src={img4}></img></span>
                        分类</NavLink>
                    <NavLink to="/index/shopscart" activeClassName="select">
                    <span className='index-img1'><img src={img5}></img></span>
                        <span className='index-img2'><img src={img6}></img></span>购物车</NavLink>
                    <NavLink to="/index/mine" activeClassName="select">
                    <span className='index-img1'><img src={img7}></img></span>
                        <span className='index-img2'><img src={img8}></img></span>我的</NavLink>
                </footer>      
        </div>
        )
    }
}
