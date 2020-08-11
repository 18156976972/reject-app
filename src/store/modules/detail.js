import { getGoodsInfo } from '../../util/request'

//状态
const initState = {
    info: {}
}
//修改info的action
export const changeInfoAction = info => {
    return {
        type: "changeInfo",
        info
    }
}
//详情的请求的action
export const requestDetailAction =(id)=>{
    return (dispatch,getState)=>{
        getGoodsInfo({id:id}).then(res=>{
            dispatch(changeInfoAction(res.data.list[0]))
        })
    }
}

//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeInfo":
            return {
                ...state,
                info: action.info
            }
        default:
            return state;
    }
}
export default reducer
//
export const getInfo = state => state.detail.info;
