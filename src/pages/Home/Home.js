import React, { Component } from 'react'
import Top from './components/Top/Top'
import Banner from './components/Banner/Banner'
import './Home.css'
import List from './components/List/List'
import Nav from './components/Nav/Nav'


import { getBanner,getIndexGoods } from '../../util/request'


export default class Home extends Component {
    constructor() {
        super()
        //要用的数据
        this.state = {
            banner: [],
            list:[]
        }
    }
    //页面加载完成
    componentDidMount() {
        getBanner().then(res => {
            //整个数组取出
            var arr = res.data.list;
            //每一张图片都要循环一遍，加上前缀
            arr.forEach(item => {
                item.img = this.$img + item.img
                // console.log( item.img)
            })

            this.setState({
                banner: arr
            })
        })
        getIndexGoods().then(res=>{
            var arr = res.data.list[0].content;

            arr.forEach(item => {
                item.img = this.$img + item.img
            })
            
            this.setState({
                list: arr
            })
        })
    }

    render() {
        const { banner,list } = this.state
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
