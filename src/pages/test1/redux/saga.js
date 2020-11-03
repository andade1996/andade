import {take,call,put,select,fork,takeEvery,takeLatest} from 'redux-saga/effects'
import {TestPost} from './../axios/axiosRequest'
import {zbcSuccess} from './action'
import {getListDetails} from './sagaModules'

function  *getList(){
    yield takeEvery('ZBC',getListDetails)
}

export default function *testSaga () {//假设我们是导出文件//all用来请求函数fork用来派发函数
    yield  fork(getList)
}
