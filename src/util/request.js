// 写 axios 的响应，请求数据
import axios from 'axios'
import qs from "qs"
import {successAlert} from '../util/alert'
//请求拦截
axios.interceptors.request.use(config => {
    if (config.url !='/api/userlogin') {
        config.headers.authorization =JSON.parse(sessionStorage.getItem("user")) 
        console.log(config.headers.authorization)
    }
    return config
})

//响应拦截
axios.interceptors.response.use(res => {
    console.group("本次路径：" + res.config.url)
    console.log(res)
    console.groupEnd()

    if(res.data.msg==="登录已过期或访问权限受限"){
        successAlert("登录已过期或访问权限受限")
        window.open('/login')
        return;
    }
    return res;
})




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
//获取分类商品
export const getGoods=(params)=>{
    return axios({
        url:'/api/getgoods',
        method:'get',
        params:params
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

//加入购物车
export const addShop = (data) => {
    return axios({
        url: "/api/cartadd",
        method: "post",
        data: qs.stringify(data)
    })
}
/////////////////////购物车列表
//购物车列表
export const requestShopList = (data) => {
    return axios({
        url: "/api/cartlist",
        params: data
    })
}

//修改
export const requestShopEdit = (data) => {
    return axios({
        url: "/api/cartedit",
        method:"post",
        data: qs.stringify(data)
    })
}

//删除
export const requestShopDel = (data) => {
    return axios({
        url: "/api/cartdelete",
        method:"post",
        data: qs.stringify(data)
    })
}