
import {getCate} from '../../util/request'
//状态
const initState = {
    list: []
}

//action creator 
//修改info的action
export const changeClassifyAction = list => {
    return {
        type: "changelist",
        list
    }
}


//详情的请求的action
export const requestClassifyAction = () => {
    return (dispatch, getState) => {
        const {list}=getState().classify
        if(list.length>0){
            return
        }
        getCate().then(res => {
            dispatch(changeClassifyAction(res.data.list))
        })
    }
}


//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changelist":
            return {
                ...state,
                list: action.list
            }
        default:
            return state;
    }
}

export default reducer
//导出状态
export const getlist = state => state.classify.list;

