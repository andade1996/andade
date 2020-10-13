import {combineReducers} from 'redux'
function add(state=0,action) {

         if (action.type === ''){
                state++
         }
      return state
 }

export  default combineReducers({
    add
})
