import React, { Component } from 'react'
import './ShopDetail.css'
import DetailTop from './components/DetailTop/DetailTop'
import Main from './components/Main/Main'
export default class ShopDetail extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div className='shopdetail'>
                <DetailTop></DetailTop>
                <Main></Main>
            </div>
        )
    }
}
