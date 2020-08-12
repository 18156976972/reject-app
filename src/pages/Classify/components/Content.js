import React, { Component } from 'react'
import './Content.css'

import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {getlist,requestClassifyAction} from '../../../store/modules/classify'

 class Content extends Component {
    constructor(){
        super()
        this.state={
            n:0
        }
     }

    componentDidMount() {
        this.props.requestList()
    }
    //更具下标找到对应的数据
    changeN(index){
        this.setState({
            n:index
        })
    }

    getGoodsInfo(id){
        this.props.history.push("/shoplist/" + id)
    }

    render() {
        const { n }=this.state
        const { list }=this.props
        return (
            <div className='content'>
                {/* 左边 */}
                <div className='content-left'>
                    <ul>
                        {
                            list.map((item,index)=>{
                            return <li onClick={()=>this.changeN(index)} className={n===index?'select':''} key={item.id}>{item.catename}</li>
                            })
                        }

                    </ul>
                </div>
                {/* 右边 */}
                <div className='content-right'>
                   
                    <ul>
                    {
                    list.length>0 ? list[n].children.map(item=>{return <li key={item.id} onClick={()=>this.getGoodsInfo(item.id)} info={item.catename}><img src={item.img}></img><span>{item.catename}</span></li>}):null
                    }         
                    </ul>
                </div>
            </div>
        )
    }
}
const mapState=state=>{
    console.log(state)
    //导出要用的状态层的数据
    return {
        list:getlist(state),
    }
}
const mapDispatch=dispatch=>{
    return {
        requestList:()=>dispatch(requestClassifyAction())
            
    }
}

export default connect(mapState,mapDispatch)(withRouter(Content))