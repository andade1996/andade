import {TestPost} from './../axios/axiosRequest'

import {zbcsuccess,zbcerror} from './constText'
export function zbc(data) {
    // return  (Dispatch)=>(
    //     TestPost().then(res=>{
    //             if (res.status !==200) return;
    //             Dispatch(zbcSuccess(res.data))
    //     })
    // )
}

export function zbcSuccess(data) {
    return {
        type:zbcsuccess,
        data
    }
}

export function  zbcError(data){
    return {
        type:zbcerror,
        data
    }
}
