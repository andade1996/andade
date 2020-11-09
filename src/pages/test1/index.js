import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {TestFun} from './../../store/action'
import {zbc} from './redux/action'
import Test from "./moudel/Test";
export const {Provider, Consumer} = React.createContext('zbc');
 class Test1 extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {};
        };
    handelClick = ()=>{
       const {zbc} = this.props
        zbc()
    }
     render() {
         return (
             <div onClick={this.handelClick}>
                 今天我吃小橘子
                 <Provider value={'欧青拉绍'}>
                     <Test/>
                 </Provider>

             </div>
         )
     }



}
function mapDispatchToProps(dispatch){
     return {
         add:bindActionCreators(TestFun,dispatch),
         zbc:bindActionCreators(zbc,dispatch)
     }
}
function  mapStateToProps(state){
        return {//解耦
            aa1:state.TestReducer.number,
            aa2:state.TestReducer.number1
        }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Test1)

