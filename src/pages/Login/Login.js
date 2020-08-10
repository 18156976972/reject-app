import React, { Component } from 'react'
import './Login.css'
import {requestLogin} from '../../util/request'

export default class Login extends Component {
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
       //把user的值传会数据库
        requestLogin(this.state.user).then(res=>{
            console.log(res)
            if(res.data.code===200){
                sessionStorage.setItem("isLogin",1)
                this.props.history.push("/index/home")
            }else{
                alert(res.data.msg)
            }
        })

    }
    go(){
        this.props.history.push('/register')
    }

    render() {
        return (
            <div className='login'>
                <div className='login-top'>
                    登录 <span onClick={()=>this.go()}>注册</span>
                </div>
                
                <form>
                    <p>账 号：<input type="text" onChange={(e)=>this.changeUser(e,"phone")} /></p>
                    <p>密 码：<input type='passward' onChange={(e)=>this.changeUser(e,"password")}/></p>
                    <p className='login-p3'><span>忘记密码</span></p>
                    <button onClick={()=>this.login()}>登录</button>
                </form>
           
            </div>
        )
    }
}
