import {call, put} from "redux-saga/effects";
import {TestPost} from "../axios/axiosRequest";
import {zbcSuccess} from "./action";

export  function *getListDetails(){
    const a = yield call(TestPost,{})

    yield put(zbcSuccess(a.data))
}
