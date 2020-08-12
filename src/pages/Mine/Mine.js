import React, { Component } from 'react'
import Person from './components/person/Person'
import Order from './components/order/Order'
import {connect} from "react-redux"
import { changeUserAction } from '../../store/modules/user'
import './Mine.css'
 class Mine extends Component {
    cancel(){
        sessionStorage.clear()
        this.props.changed('')  
        this.props.history.push('/login')
        // console.log(this.props)
    }
    render() {
        return (
            <div>
                <Person></Person>
                <Order></Order>
                <button onClick={()=>this.cancel()} className='mine-btn'>退出登录</button>
            </div>
        )
    }
}
const mapState=(state)=>{
    //导出数据
    console.log(state)
    return{
    }
}

const mapDispatch=(dispatch)=>{
    return{
        changed:(user)=>dispatch(changeUserAction(user))
    }
}
export default connect(mapState,mapDispatch)(Mine)
