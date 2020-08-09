import React, { Component } from 'react'
import './Register.css'

export default class Register extends Component {
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
    register(){
       
    }

    render() {
        return (
            <div className='register'>
                <div className='register-top'>
                    登录 <span>返回</span>
                </div>
                <form>
                    <p>手机号：<input type="text" onChange={(e)=>this.changeUser(e,"name")} /></p>
                    <p>昵 称：<input type='passward' onChange={(e)=>this.changeUser(e,"pass")}/></p>
                    <p>密 码：<input type='passward' onChange={(e)=>this.changeUser(e,"pass")}/></p>
                    <button onClick={()=>this.register()}>注册</button>
                </form>
           
            </div>
        )
    }
}
