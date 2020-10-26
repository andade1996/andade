import {TestPost} from './../axios/axiosRequest'



export function zbc(data) {
    return  (Dispatch)=>(
        TestPost().then(res=>{
                console.log(res)
        })
    )
}

export function zbcSuccess(data) {
    return {
        type:'zbcSuccess',
        data
    }
}

export function  zbcError(data){
    return {
        type:'zbcError',
        data
    }
}
