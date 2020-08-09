import React, { Component } from 'react'

import img1 from '../../../../assets/img/img/home/logo.jpg'
export default class Top extends Component {
    render() {
        return (
            <div className='top'>
                 
                 <img src={img1} />
                 <input type='text' placeholder='寻找商品'></input>
                 
            </div>
        )
    }
}
