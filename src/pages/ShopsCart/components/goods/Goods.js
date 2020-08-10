import React, { Component } from 'react'
import './Goods.css'
import pic from '../../../../assets/img/store.png'
import pic1 from '../../../../assets/img/1.jpg'
import pic2 from '../../../../assets/img/editor_nor.png'
import {  Checkbox } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;

export default class Goods extends Component {
    render() {
        return (
            <div className='goods'>
                <ul>
                    <li>
                    <p className='goods-p1'><img src={pic} className='goods-img1'></img><span>杭州保税区仓</span></p>
                    <div className='goods-box'>
                    <CheckboxItem ></CheckboxItem>
                        <img src={pic1} className='goods-img2'></img>
                        <div className='goods-right'>
                           <p>雪豹秋日牛皮男装</p>
                           <span>-</span> <span>1</span> <span>+</span>
                           <p>总价：368.00</p>
                        </div>
                        <p className='goods-price'>￥368.00</p>
                        <button>删除</button>
                    </div>
                    </li>

                    <li>
                    <p className='goods-p1'><img src={pic} className='goods-img1'></img><span>杭州保税区仓</span></p>
                    <div className='goods-box'>
                    <CheckboxItem ></CheckboxItem>
                        <img src={pic1} className='goods-img2'></img>
                        <div className='goods-right'>
                           <p>雪豹秋日牛皮男装</p>
                           <span>-</span> <span>1</span> <span>+</span>
                           <p>总价：368.00</p>
                        </div>
                        <p className='goods-price'>￥368.00</p>
                        <button>删除</button>
                    </div>
                    </li>
                </ul>
            
                <div className='foot'>
                    <div className='footer-left'>
                    <CheckboxItem ></CheckboxItem>
                    <p>全选</p>
                    </div>
                    <div className='footer-center'>
                       <div>
                           <img src={pic2}></img>
                           <p>编辑</p>
                       </div>
                       <div>
                           <p>合计：0</p>
                           <p>(不含运费)</p>
                       </div>
                    </div>

                    <button className='footer-right'>
                        去结算
                    </button>
                </div>

            </div>
        )
    }
}
