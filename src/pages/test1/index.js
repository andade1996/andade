import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {TestFun} from './../../store/action'
import {zbc} from './redux/action'
import Test from "./moudel/Test";
 class Test1 extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {};
        };
    handelClick = ()=>{
        console.log(this.props,"今天我吃定了小橘子了！");
       const {zbc} = this.props
        zbc(123)
    }
     render() {
         return (
             <div onClick={this.handelClick}>
                 今天我吃小橘子
                 <Test data='欧青辣少' />
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

