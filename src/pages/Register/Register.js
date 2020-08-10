import React, { Component } from 'react'
import './Register.css'
import {requestRegister} from '../../util/request'
export default class Register extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                nickname:"",
                password:''
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
        requestRegister(this.state.user).then(res=>{
           if(res.data.code===200){
             alert('登录成功')
             this.props.history.push("/login")
        }else{
            alert(res.data.msg)
        }
        })
    }
    goback(){
        this.props.history.push("/login")
    }

    render() {
        return (
            <div className='register'>
                <div className='register-top'>
                    注册 <span onClick={()=>this.goback()}>返回</span>
                </div>
                <form>
                    <p>手机号：<input type="text" onChange={(e)=>this.changeUser(e,"phone")} /></p>
                    <p>昵 称：<input type='passward' onChange={(e)=>this.changeUser(e,"nickname")}/></p>
                    <p>密 码：<input type='passward' onChange={(e)=>this.changeUser(e,"password")}/></p>
                    <button onClick={()=>this.register()}>注册</button>
                </form>
           
            </div>
        )
    }
}
