// 写 axios 的响应，请求数据
import axios from 'axios'
import qs from "qs"


//登录
export const requestLogin=(data)=>{
    return axios({
        url:'/api/login',
        method:'post',
        data:qs.stringify(data)
    })
}
//注册
export const requestRegister=(data)=>{
    return axios({
        url:'/api/register',
        method:'post',
        data:qs.stringify(data)
    })
}


axios.interceptors.response.use(res=>{
    console.log(res);
    return res
})
//轮播图接口
export const getBanner=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
}
//获取商品信息(首页)
export const getIndexGoods=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}
//获取分类树形结构
export const getCate=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}

//获取具体某个商品信息
export const getGoodsInfo=(params)=>{
    return axios({
        url:'/api/getgoodsinfo',
        method:'get',
        params:params
    })
}