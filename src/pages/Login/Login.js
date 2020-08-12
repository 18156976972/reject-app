import React, { Component } from 'react'
import './Login.css'
import {requestLogin} from '../../util/request'
import {successAlert} from '../../util/alert.js'

import {connect} from "react-redux"
import { changeUserAction } from '../../store/modules/user'

class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                password:""
            }
        }
    }
    //在修改input值时，改变 user里的值  
    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    login(){
        console.log(12)
       //把user的值传会数据库
        requestLogin(this.state.user).then(res=>{
            if(res.data.code===200){
                //路由标识
                successAlert('登录成功')
                this.props.change(res.data.list)  

               /*  if(this.props.user){
                    sessionStorage.removeItem('user');
                }else{
                    sessionStorage.setItem('user',JSON.stringify(res.data.list))
                } */
                sessionStorage.setItem("user",JSON.stringify(res.data.list))
                this.props.history.push("/index")
                
            }else{
                successAlert(res.data.msg)
            }
        })

    }
    goo(){
        this.props.history.push('/register')
    }

    render() {
        const {user}=this.state
        return (
            <div className='login'>
                <div className='login-top'>
                    登录 <span onClick={()=>this.goo()}>注册</span>
                </div>
                
                <div className='form'>
                    <p>账 号：<input type="text" value={user.phone} onChange={(e)=>this.changeUser(e,"phone")} /></p>
                    <p>密 码：<input type='passward' value={user.password} onChange={(e)=>this.changeUser(e,"password")}/></p>
                    <p className='login-p3'><span>忘记密码</span></p>
                    <button onClick={()=>this.login()}>登录</button>

                </div>
           
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
        change:(user)=>dispatch(changeUserAction(user))
    }
}

//变成容器型组件
export default connect(mapState,mapDispatch)(Login)
