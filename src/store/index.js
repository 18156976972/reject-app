//引入配置
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from "redux-thunk"

import user from './modules/user'
import home from "./modules/home"
import detail from './modules/detail'
import classify from './modules/classify'
import shop from './modules/shop'
//链接路由界面的数据
const reducer = combineReducers({
    user:user,
    home:home,
    detail:detail,
    classify:classify,
    shop:shop
})

//建库，reducer ， 中间层
const store = createStore(reducer,applyMiddleware(thunk))

//暴露出去
export default store