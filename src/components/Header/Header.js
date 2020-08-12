import React, { Component } from 'react'
import './Header.css'
import {withRouter} from 'react-router-dom'
class Header extends Component {
    goBack() {
        this.props.history.go(-1)
    }
    render() {
        
        const { info,back} = this.props
        return (   
                <div className='Header-top'>
                    {back?<span className="header-back" onClick={this.goBack.bind(this)}>返回</span>:null}
                    {info} 
                </div>
        )
    }
}
export default withRouter(Header)
