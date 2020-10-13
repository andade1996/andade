import {combineReducers} from 'redux'
let initState = {
    number:0,
    floatNumber:0.1
}
function add(state=initState,action) {

         if (action.type === ''){
                state++
         }
      return state
 }

function text(state=initState,action){

    if (action.type === '123'){

        state.floatNumber+=1
    }
    return state
}

export  default combineReducers({
    add,
    text
})
