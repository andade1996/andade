import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {TestFun} from './../../store/action'
import {zbc} from './redux/action'
 class Test1 extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {

        };
    }
    componentDidMount() {


    }
    handelClick=()=>{
      const {add} = this.props

        console.log(this.props,"text")
    }
    render() {
        return (
            <div onClick={this.handelClick}>
                今天也是美好的 天
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

