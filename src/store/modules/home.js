// axios 引入
import { getBanner,getIndexGoods } from '../../util/request'

//状态
const initState = {
    list: [],
    banner: []
}

// 修改list 
export const changeListAction = list => {
    return {
        type: "changeList",
        list
    }
}

//页面发出的axios 请求
export const requestListAction=()=>{
    return (dispatch,getState)=>{
        //list有值时，不在请求数据
        //变量解析，取list的值
        const {list} =getState().home   // 类似  const {list,banner}=this.props
        if(list.length>0){
            return
        }
        getIndexGoods().then(res=>{
            dispatch(changeListAction(res.data.list[0].content))
        })
    }
}
//修改banner
export const changeBannerAction = banner => {
    return {
        type: "changeBanner",
        banner
    }
}
//banner求情数据
export const requestBannerAction=()=>{
    return (dispatch,getState)=>{
        //banner有值时，不在请求数据
        const {banner} =getState().home
        if(banner.length>0){
            return
        }
        getBanner().then(res=>{
            dispatch(changeBannerAction(res.data.list))
        })
    }
}


//rouder
const reducer =(state=initState,action)=>{
    switch(action.type){    //switch 方法
        case 'changeList':
            return{
                ...state,
                list:action.list
            }
        case 'changeBanner':
            return{
                    ...state,
                banner:action.banner //修改数据
            }

        default:
            return state;
    }
}
export default reducer

//导出状态
export const getHomeList= state =>state.home.list

export const getHomeBanner= state =>state.home.banner

// state 参数，home，是仓库的命名， list ,是数据名
//banner数据

