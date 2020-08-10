import React, { Component } from 'react'
import './Main.css'
import {withRouter} from 'react-router-dom'
import {getGoodsInfo} from '../../../../util/request'
import picc from '../../../../assets/img/img/cart_on.png'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            detail: {},
            style:{display:'none'}
        }
    }
    componentDidMount(){
        // console.log(this.props)
        let id = this.props.match.params.id;
        getGoodsInfo({id:id}).then(res=>{
            this.setState({
                detail: res.data.list[0]
            })
        })
    }

    getInfo() {
       /* this.setState({
           style:{display:'block'}
       })
       */
    }
    cancel(){
        this.props.history.goBack()
    }
     
    
    render() {
        const {detail,style} =this.state
        // eval("(" + detail.specsattr + ")")
        if(detail.specsattr !=null){
            detail.specsattr =eval("(" + detail.specsattr + ")")
            console.log( detail.specsattr)
        }
        
        return (
            <div className='main'>
                <div className="main-box">
                    <img src={detail.img} className='m-img1'></img>
                    <p className='m-p1'><span>{detail.goodsname}</span> <i><img src={picc} className='m-img2'></img> 收藏</i></p>
        <p className='m-p2'><span>￥{detail.price}</span> <i>新品</i><i>热卖</i></p>
        <p className='m-p3'><span>￥{detail.market_price}</span></p>
                </div>

                <div dangerouslySetInnerHTML={{__html: detail.description}} />

               {/* 底部栏 */}
                <div className='main-footer'>
                    <button onClick={() => this.getInfo()}>加入购物车</button>
                </div >

                {/* 黑色弹框 */}
                <div className='main-info show' style={style}>
                     <button className='main-cancel' onClick={()=>this.cancel()}>X</button>

                <div className='info-bottom'>
                       <div className='in1'>
                           <img src={detail.img}></img>
                        <span>{detail.goodsname}</span>
                       </div>
                       <div className='in2'>
                            <p>{detail.specsname}</p>
                           {detail.specsattr!=null?   detail.specsattr.map(item=>{
                               return  <span key={item}>{item}</span>
                           }) :null} 
                       </div>
                       <div className='in3'>
                           <button>加入购物车</button>
                       </div>
                   </div>  
            </div>
              
            </div>
        )
    }
}
export default withRouter(Main)

