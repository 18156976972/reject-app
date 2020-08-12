import { requestShopList,requestShopEdit ,requestShopDel} from "../../util/request"
//加载user 仓库
import { getUser } from "./user"
//状态
const initState = {
    list: [],//购物车的列表
    isEditor: false,//是否编辑
    isAll: false,//是否全选
}

// 1.修改list
export const changeListAction = list => ({
    type: "changeList",
    list
})
//2.修改是否全选
export const changeIsAllAction = () => ({
    type: "changeIsAll"
})


//页面出发发起获取列表请求
export const requestListAction = () => {
    return (dispatch, getState) => {
        requestShopList({ uid: getUser(getState()).uid }).then(res => {
            const list = res.data.list?res.data.list:[];
            //初始让所有商品都不选中
            list.forEach(item => {
                item.checked = false
            })

            dispatch(changeListAction(list))
        })
    }
}


//2.//修改isEdior 
export const changeIsEditorAction = () => ({
    type: "changeIsEditor"
})

//3.
//修改某条数据的checked
export const changeOneAction = index => ({
    type: "changeOne",
    index
})

//4.用户在组件点了+ -  发起axios 
export const requestEditAction=data=>{
    return (dispatch)=>{
        requestShopEdit(data).then(res=>{
            dispatch(requestListAction())
        })
    }
}

//5.删除  发axios请求，刷新页面
export const requestDelAction=id=>{
    return (dispatch)=>{
        requestShopDel({id:id}).then(res=>{
            dispatch(requestListAction())
            //requestListAction() 页面求情数据
        })
    }
}


////具体修改的rouder
//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeList":
            return {
                ...state,
                list: action.list
            }
        case "changeIsEditor":
            return {
                ...state,
                isEditor: !state.isEditor
            }
        case "changeIsAll":

            return {
                ...state,
                isAll: !state.isAll,
                list: state.list.map(item => {
                    item.checked = !state.isAll;
                    return item
                })
            }
        case "changeOne":
            const { list } = state
            list[action.index].checked = !list[action.index].checked
            return {
                ...state,
                list: [...list],
                isAll: list.every(item => item.checked)
            }
        default:
            return state;
    }
}

export default reducer

//导出状态
export const shopList = state => state.shop.list;
//编辑
export const isEditor = state => state.shop.isEditor;
//全选
export const isAll = state => state.shop.isAll;
//计算总价格 ,传出去
export const getAllPrice = state => {
    /*
    var sum=0;
    const {list}=state.shop
    list.forEach(item=>{
        if(item.checked){
            sum+=item.price*item.num
        }
    })
    return sum*/
    const { list } = state.shop
    return list.reduce((val, item) => item.checked ? val + item.price * item.num : val, 0)
}