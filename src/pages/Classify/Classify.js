import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Content from './components/Content'
export default class Classify extends Component {
    constructor(){
       super()
       this.state={
           info:'分类',
       }
    }

    render() {
        const { info} = this.state
        return (
            <div>
               <Header info={info}></Header>
               <Content></Content>
            </div>
        )
    }
}
