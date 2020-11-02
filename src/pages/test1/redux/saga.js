
import {take,call,put,select,fork,takeEvery,takeLatest} from 'redux-saga/effects'
import  {delay} from 'redux-saga'
import {TestPost} from './../axios/axiosRequest'
import {zbcSuccess} from './action'

function *getList(){//各种请求数据方法,那么我们在别的地方写请求然后在下面fork
    const a = yield call(TestPost,{})
       yield put(zbcSuccess(a.data))
}



export default function *testSaga () {//假设我们是导出文件
                              //all用来请求函数fork用来派发函数
    while (true){
        const Action = yield take('ZBC');
        if ( Action.type === "ZBC" ){
             yield fork(getList)
        }
    }
}
