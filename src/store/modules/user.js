//初始数据
const initState={
    user:sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):null
}

//要去修改user的 action
export const changeUserAction = user =>{
    return {
        type:'changeUser',
        user  //传的值
    }
}

// reducer 函数 具体修改内容
const reducer =(state =initState,action)=>{
    switch(action.type){
        case 'changeUser':
            return{
                ...state,
                user:action.user
            }
            default:
                return state;
    }
}

export default reducer
//导出数据
export const getUser =(state) =>state.user.user