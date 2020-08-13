import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Kong from './components/kong/Kong'
import Goods from './components/goods/Goods'
import { connect } from "react-redux"
import {shopList,requestListAction} from '../../store/modules/shop'

class ShopsCart extends Component {
    constructor(){
        super()
        this.state={
            info:'购物车',
            style: {  },
        }
     }
     
     componentDidMount(){
         this.props.requestList()
        const {list} = this.props
        /* if(list){
            console.log(111)
            this.setState({
                style: { display: 'none' },
            }) 
        }else{
            console.log(222)
            this.setState({
                style: { display: 'block' },
            })
        } */
     }
     
     render() {
         const { info} = this.state
         const {list} =this.props
         return (
             <div>
                <Header info={info}></Header>

                <Goods list={list}></Goods>
             </div>
         )
     }
}

const mapState = state => {
    // console.log(state.shop);
    return {
        list: shopList(state),
    }
}
const mapDispatch = dispatch => {
    return {
        requestList: () => dispatch(requestListAction()),
        
    }
}

export default connect(mapState, mapDispatch)(ShopsCart)
