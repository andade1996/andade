import {combineReducers} from 'redux'
let initState = {
    number:0,
    floatNumber:0.1
}
function add(state=initState,action) {
    console.log('胡啊you  ?');

    if (action.type === ''){
                state++
         }
      return state
 }

function text(state=initState,action){
    console.log(`我乃九重天至尊仙尊`);
    if (action.type === '123'){
        // return   Object.assign({},state.floatNumber)
        state.floatNumber++
     return state = Object.assign({},state)
    }
    return state
}

export  default combineReducers({
    add,
    text
})
