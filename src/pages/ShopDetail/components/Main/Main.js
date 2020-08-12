import React, { Component } from 'react'
import './Main.css'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import picc from '../../../../assets/img/img/cart_on.png'

import {getInfo,requestDetailAction} from '../../../../store/modules/detail'
import { addShop } from "../../../../util/request"
import {successAlert} from '../../../../util/alert'
import { getUser } from '../../../../store/modules/user'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            style: { display: 'none' },
            n:-1
        }
    }
    componentDidMount() {
        // console.log(this.props)
        this.id = this.props.match.params.id;
        this.props.requestDetail(this.id)
    }

    getInfo() {
        this.setState({
            style: { display: 'block' }
        })
    }
    cancel() {
        this.setState({
            style: { display: 'none' }
        })
    }
    changeN(index){
        this.setState({
            n:index
        })
    }
    ////加入购物车
      
    //加入购物车
    addShop() {
        addShop({
            uid: this.props.user.uid,
            goodsid: this.id,
            num: 1
        }).then(res => {
            successAlert(res.data.msg)
            this.cancel()
        })
    }

    render() {
        const { style,n } = this.state
        const {detail} =this.props
      return (
            <div className='main'>
                <div className="main-box">
                    <img src={detail.img} className='m-img1'></img>
                    <p className='m-p1'><span>{detail.goodsname}</span> <i><img src={picc} className='m-img2'></img> 收藏</i></p>
                    <p className='m-p2'><span>￥{detail.price}</span> <i>新品</i><i>热卖</i></p>
                    <p className='m-p3'><span>￥{detail.market_price}</span></p>
                </div>

                <div dangerouslySetInnerHTML={{ __html: detail.description }} />

                {/* 底部栏 */}
                <div className='main-footer'>
                    <button onClick={() => this.getInfo()}>加入购物车</button>
                </div >

                {/* 黑色弹框 */}
                <div className='main-info show' style={style}>
                    <button className='main-cancel' onClick={() => this.cancel()}>X</button>

                    <div className='info-bottom'>
                        <div className='in1'>
                            <img src={detail.img}></img>
                            <span>{detail.goodsname}</span>
                        </div>
                        <div className='in2'>
                            <p>{detail.specsname}</p>
                            {detail.specsattr ? eval("(" + detail.specsattr + ")").map((item,index) => {
                                return <span key={item} onClick={()=>this.changeN(index)} className={n===index?'sel':''}>{item}</span>
                            }) : null}
                        </div>
                        <div className='in3'>
                            <button onClick={() => this.addShop()}>加入购物车</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapState = state => {
    console.log(state);
    return {
        detail: getInfo(state),
        user: getUser(state)   //加载用户仓库
    }
}
const mapDispatch = dispatch => {
    return {
        requestDetail: (id) => dispatch(requestDetailAction(id))
    }
}

export default connect(mapState, mapDispatch)(withRouter(Main))


