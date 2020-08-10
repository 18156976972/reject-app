import React, { Component } from 'react'
import './List.css'
import {withRouter} from 'react-router-dom'

class List extends Component {
       
    getInfo(id){
        this.props.history.push("/shopdetail/" + id)
    }
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
                                <button onClick={()=>this.getInfo(item.id)}>立即抢购</button>
                            </div>
                         </li>
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}
export default withRouter(List)