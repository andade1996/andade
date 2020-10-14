import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {TestFun} from './../../store/action'

 class Test1 extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {

        };
    }
    componentDidMount() {

        console.log(this.props,"为什么?")
    }
    handelClick=()=>{
      const {add} = this.props
        add()
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
         add:bindActionCreators(TestFun,dispatch)

     }
}


export default  connect((state)=>({text:state}),mapDispatchToProps)(Test1)

