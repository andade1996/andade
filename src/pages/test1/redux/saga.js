
import {take,call,put,select,fork,takeEvery,takeLatest} from 'redux-saga/effects'
export default function *testSaga () {

        const Action = yield take('ZBC');
        console.log(Action,"我想吃大饼子")
       if ( Action.type === "ZBC" ){
               console.log('真的吗真的吗？')
       }

}
