import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import redux from "./redux";
import logger from 'redux-logger'


export default  createStore(redux,applyMiddleware(thunk,logger))
