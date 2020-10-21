import {combineReducers} from 'redux'
import TestReducer from './../pages/test1/redux/Reducer'
let initState = {
    number:0,
    floatNumber:0.1
}
function reducer(state=initState,action){
    console.log(TestReducer,"穿山甲说了什么")
    switch (action.type){
        case '123': return state.number++;

    }
    return state
}

export  default combineReducers({
    reducer,
    TestReducer
})
