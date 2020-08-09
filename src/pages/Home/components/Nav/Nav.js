import React, { Component } from 'react'
import img1 from '../../../../assets/img/img/home/1.jpg'
import './Nav.css'
export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <div className='nav-box'>
                    <img src={img1} alt="" />
                    <p>限时抢购</p> 
                </div>

                <div className='nav-box'>
                    <img src={img1} alt="" />
                    <p>积分商城</p> 
                </div>

                <div className='nav-box'>
                    <img src={img1} alt="" />
                    <p>联系我们</p> 
                </div>

                <div className='nav-box'>
                    <img src={img1} alt="" />
                    <p>商品分类</p> 
                </div>
                
            </div>
        )
    }
}
