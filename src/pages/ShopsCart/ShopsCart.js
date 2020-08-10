import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Kong from './components/kong/Kong'
import Goods from './components/goods/Goods'
export default class ShopsCart extends Component {
    constructor(){
        super()
        this.state={
            info:'购物车',
        }
     }
 
     render() {
         const { info} = this.state
         return (
             <div>
                <Header info={info}></Header>
                {/* <Kong></Kong> */}
                <Goods></Goods>
             </div>
         )
     }
}

