import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
    render() {
        const { info} = this.props
        return (   
                <div className='Header-top'>
                    {info} 
                </div>
        )
    }
}
