import {TestPost} from './../axios/axiosRequest'

import {zbcsuccess,zbcerror} from './constText'
export function zbc(data) {
        return {
            type:'ZBC',
            data
        }
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
