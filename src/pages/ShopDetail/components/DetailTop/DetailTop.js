import React, { Component } from 'react'
import './DetailTop.css'
import {withRouter} from 'react-router-dom'
class DetailTop extends Component {
    goback(){
        this.props.history.goBack()
     }
    render() {
        return (
                <div className='detail-top'>
                    商品详情 <span onClick={()=>this.goback()}>返回</span>
                </div>
        )
    }
}
export default withRouter(DetailTop)
