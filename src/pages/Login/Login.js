import React, { Component } from 'react'
import './Login.css'


export default class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                name:"",
                pass:""
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
        /* requestLogin(this.state.user).then(res=>{
            if(res.data.isok){
                sessionStorage.setItem("isLogin",1)
                this.props.history.push("/index")
            }else{
                alert(res.data.info)
            }
        }) */

    }

    render() {
        return (
            <div className='login'>
                <div className='login-top'>
                    登录 <span>注册</span>
                </div>
                
                <form>
                    <p>账 号：<input type="text" onChange={(e)=>this.changeUser(e,"name")} /></p>
                    <p>账 号：<input type='passward' onChange={(e)=>this.changeUser(e,"pass")}/></p>
                    <p className='login-p3'><span>忘记密码</span></p>
                    <button onClick={()=>this.Login()}>登录</button>
                </form>
           
            </div>
        )
    }
}
