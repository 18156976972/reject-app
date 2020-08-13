import React, { Component } from 'react'
import './Goods.css'
import pic from '../../../../assets/img/store.png'

import selectImg from "../../../../assets/img/radio_hig.png"
import noSelect from "../../../../assets/img/radio_nor.png"
import editorY from "../../../../assets/img/editor_hig.png"
import editorN from "../../../../assets/img/editor_nor.png"
import {successAlert}  from '../../../../util/alert'
import {withRouter} from 'react-router-dom'
import img1 from '../../../../assets/img/tab_shopping_nor.png'
import { connect } from "react-redux"
import {
    // shopList,
    // requestListAction,
    isEditor,
    changeIsEditorAction,
    isAll,
    requestEditAction,
    changeIsAllAction,
    changeOneAction,
    requestDelAction, 
    getAllPrice
} from '../../../../store/modules/shop'



class Goods extends Component {
    constructor(){
        super()
        this.state={
            style: { display: 'block' },
        }
    }
    
    //减的按钮 ，减的时候也是发起axios
    sub(item) {
        if (item.num <= 1) {
            successAlert("宝贝不能再少了");
            return
        } 
        //发起axios 
        this.props.requestEditAction({ id: item.id, type: 1 })
    }
    

    render() {
        const {
            list,
             isEditor,
            changeIsEditor, //调用这个方法
            isAll,
            changeIsAll,
            changeOne,
            getAllPrice,
            requestEditAction,
            requestDelAction,
        } = this.props
 
        if(list){ //
            return (
                <div className='goods' ref="aa">
        

                    <ul>
                         
                        {
                             list.map((item, index) =>{
                        return ( <li key={item.id} className={isEditor ? 'inner' : ''}>
    
                            <p className='goods-p1'><img src={pic} className='goods-img1'></img><span>杭州保税区仓</span></p>
                            <div className='goods-box'>
    
                            <img onClick={() => changeOne(index)} className="shop-item-selectImg" src={item.checked ? selectImg : noSelect} alt="" />
                                <img src={item.img} className='goods-img2'></img>
                                <div className='goods-right'>
                                   <p>{item.goodsname}</p>
                                   <span onClick={() => this.sub(item)}>-</span> <span>{item.num}</span> <span onClick={() => requestEditAction({ id: item.id, type: 2 })}>+</span>
                                   <p>总价：{item.price * item.num}</p>
                                </div>
                                <p className='goods-price'>￥{item.price}</p>
                                <button onClick={()=>requestDelAction(item.id)}>删除</button>
                            </div>
                            </li>)
                             })
                        }
                       
                    </ul>
                
                    <div className='foot'>
                        <div className='footer-left' onClick={() => changeIsAll()}>
                        <img src={isAll ? selectImg : noSelect} alt="" />
                        <p>全选</p>
                        </div>
                        <div className='footer-center'>
                           <div onClick={() => changeIsEditor()}>
                               <img src={editorY}></img>
                               <p>编辑</p>
                           </div>
                           <div>
                    <p>合计：{getAllPrice}</p>
                               <p>(不含运费)</p>
                           </div>
                        </div>
    
                        <button className='footer-right'>
                            去结算
                        </button>
                    </div>
    
                </div>
            )
        }else{
          //list 无数据时候
          return ( <div className='kong' >
          <div>
              <img src={img1}></img>
              <p>购物车还是空空的</p>
              <p>快去逛逛吧~</p>
          </div>
         </div>)

        }
       
    }
}

const mapState = state => {
    // console.log(state.shop);
    return {
        // list: shopList(state),
        isEditor: isEditor(state),
        isAll: isAll(state),
        getAllPrice: getAllPrice(state) //获取计算出的总价格
    }
}
const mapDispatch = dispatch => {
    return {
        // requestList: () => dispatch(requestListAction()),
        changeIsEditor: () => dispatch(changeIsEditorAction()),
        changeIsAll: () => dispatch(changeIsAllAction()),  //  全选

        changeOne: (index) => dispatch(changeOneAction(index)),
        requestEditAction: (data) => dispatch(requestEditAction(data)), //编辑加减
         requestDelAction: id =>{ dispatch(requestDelAction(id))
        }  //删除某个
    }
}

export default connect(mapState, mapDispatch)(withRouter(Goods))