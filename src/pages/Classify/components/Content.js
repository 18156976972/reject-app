import React, { Component } from 'react'
import './Content.css'
import {getCate} from '../../../util/request'
import img1 from '../../../assets/img/img/home/1.jpg'
export default class Content extends Component {
    constructor(){
        super()
        this.state={
            list: [],
            n:0
        }
     }

    componentDidMount() {
        //axios
        getCate().then(res => {
            
            this.setState({
                list: res.data.list
            })
        })
    }
    //更具下标找到对应的数据
    changeN(index){
        this.setState({
            n:index
        })
    }
    render() {
        const { list,n }=this.state
        return (
            <div className='content'>
                <div className='content-left'>
                    <ul>
                        {
                            list.map((item,index)=>{
                            return <li onClick={()=>this.changeN(index)} className={n===index?'select':''} key={item.id}>{item.catename}</li>
                            })
                        }

                    </ul>
                </div>
                <div className='content-right'>
                   
                    <ul>
                    {
                    list.length>0 ? list[n].children.map(item=>{return <li key={item.id}><img src={item.img}></img><span>{item.catename}</span></li>}):null
                    }         
                    </ul>
                </div>
            </div>
        )
    }
}
