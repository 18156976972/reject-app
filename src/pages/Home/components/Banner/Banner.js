import React, { Component } from 'react'
import "./Banner.css"
//引入轮播图模块
import {Carousel} from "antd-mobile"
export default class Banner extends Component {
    
    render() {
        //接受数据
    const {banner} = this.props
        return (
            <div className="banner">
                <Carousel>
                    {
                        banner.map(item=>{
                            return <img key={item.id} src={item.img} alt=''></img>
                        })
                    }
                </Carousel>
            </div>
        )
    }
}
