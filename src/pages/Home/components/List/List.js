import React, { Component } from 'react'
import img1 from '../../../../assets/img/img/home/1.jpg'
import './List.css'

export default class List extends Component {
    
    render() {
        const {list} = this.props
        return (
            <div className='list'>
                <ul>
                    {
                        list.map(item=>{
                            return <li key={item.id}>
                            <div className='list-left' > 
                                <img src={item.img} alt="" />
                            </div>
                            <div className='list-right'>
                                <p>{item.goodsname}</p>
                                <p>￥{item.price}</p>
                                <button>立即抢购</button>
                            </div>
                         </li>
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}
