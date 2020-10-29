import {createStore,applyMiddleware} from 'redux'
import redux from "./redux";
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import mySaga from './../pages/test1/redux/saga'
const sagaMiddleware = createSagaMiddleware()



export default  createStore(redux,applyMiddleware(sagaMiddleware,logger))


sagaMiddleware.run(mySaga)
