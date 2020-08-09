// 写 axios 的响应，请求数据
import axios from 'axios'
// import qs from "qs"

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