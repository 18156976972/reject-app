import React, { Component } from 'react'
import img1 from '../../../../assets/img/set.png'
import img2 from '../../../../assets/img/news.png'
import img3 from '../../../../assets/img/keep.png'
import img4 from '../../../../assets/img/1.jpg'
import './Person.css'

export default class Person extends Component {
    render() {
        return (
            <div className='person'>
                <div className='person-box1'>
                    <p><span><img src={img1}></img></span>个人中心<i><img src={img2}></img></i></p>
                    <div className='person-img'>
                        <img src={img4}></img>
                    </div>
                </div>
                <div className='person-box2'>
                    <p>小不点儿</p>
                    <p>
                        <img src={img3}></img><span>我的收藏（<i>5</i>）</span>
                    </p>
                </div>
            </div>
        )
    }
}
