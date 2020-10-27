import {zbcsuccess,zbcerror} from './constText'


let initTestState ={
    arrList:[],

}


function TestReducer(state=initTestState,action) {

                switch (action.type){
                    case zbcsuccess:
                       return  Object.assign({},state,{
                           arrList:action
                       })
                }
    return state
}



export default  TestReducer
