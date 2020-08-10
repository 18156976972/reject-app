import React, { Component } from 'react'
import './Kong.css'
import img1 from '../../../../assets/img/tab_shopping_nor.png'
export default class Kong extends Component {
    render() {
        return (
            <div className='kong'>
                <div>
                    <img src={img1}></img>
                    <p>购物车还是空空的</p>
                    <p>快去逛逛吧~</p>
                </div>
            </div>
        )
    }
}
