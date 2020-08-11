import React, { Component } from 'react'
import Top from './components/Top/Top'
import Banner from './components/Banner/Banner'
import './Home.css'
import List from './components/List/List'
import Nav from './components/Nav/Nav'
import {connect} from "react-redux"

// 加载数据库中的方法
import {getHomeList,requestListAction,getHomeBanner,requestBannerAction} from '../../store/modules/home'

class Home extends Component {
  
    //页面加载完成
    componentDidMount() {
        this.props.requestList()
        this.props.requestBanner()

    }

    render() {
        const { list ,banner} = this.props
        return (
            <div className='home'>
                <Top></Top>
                {/* 自定义属性，父传子 */}
                <Banner banner={banner}></Banner>
                <Nav></Nav>
                <List list={list}></List>
            </div>
        )
    }
}

const mapState =state=>{
    console.log(state)
      //导出要用的状态层的数据
      return {
        list:getHomeList(state),
        banner:getHomeBanner(state)
    }
}
const mapDispatch=dispatch=>{
    return {
        requestList:()=>dispatch(requestListAction()),
        requestBanner:()=>dispatch(requestBannerAction()) 
         //requestBannerAction 调用状态层的函数，发出axiso请求， 
    }
}

export default connect(mapState,mapDispatch)(Home)