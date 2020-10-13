import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import redux from "./redux";

export default  createStore(redux,applyMiddleware(thunk))
