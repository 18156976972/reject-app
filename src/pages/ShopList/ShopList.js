import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import './ShopList.css'
import {getGoods} from '../../util/request'
import {successAlert} from '../../util/alert'
export default class ShopList extends Component {
    constructor(){
        super()
        this.state={
            info:'电视',
            list:[]
        }
    }
    componentDidMount() {

        let id = this.props.match.params.id;
        getGoods({fid:id}).then(res=>{
              if(res.data.code===200 && res.data.list){
                this.setState({
                    list:res.data.list
                })
              }else{
                successAlert('没有商品哦')
              }
        })

    }


    render() {
        const {info,list} =this.state

        return (
            <div className='shoplist'>
               <Header info={info} back></Header>


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
