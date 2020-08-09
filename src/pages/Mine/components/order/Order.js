import React, { Component } from 'react'
import './Order.css'
import img1 from '../../../../assets/img/icon_refund.png'
export default class Order extends Component {
    render() {
        return (
            <div className='order'>
                 <div className='order-box1'>
                    <span>我的订单</span><i>查看订单</i>
                </div>
                <ul>
                    <li>
                        <img src={img1}></img>
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={img1}></img>
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={img1}></img>
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={img1}></img>
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={img1}></img>
                        <p>待发货</p>
                    </li>
                </ul>
                <div className='order-box'>
                    收货地址管理
                </div>
                
            </div>
        )
    }
}
