
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {TestFun} from "../../../store/action";
import {zbc} from "../redux/action";
import {connect} from "react-redux";

class Test extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            a:1,
            b:0
        };
    }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(prevProps,prevProps,"吃屎得少年他不夫存在0")
    // }
    //
    // static getDerivedStateFromProps(a,b){
    //     console.log(a,b,"今天吃个大香蕉l")
    //     return{
    //         a:a.data,
    //         b:a.data
    //     }
    //
    // }

    handleClick=()=>{
        console.log(this.props,"吃小螃蟹")
    }

    render() {

        return (

            <div onClick={this.handleClick}>
                今天我要吃大香蕉
                {
                    this.props.arrList&&
                    this.props.arrList.map((v,i)=>{
                        return (
                            <div key={i}>
                                {v.Address}
                            </div>
                        )
                    })
                }
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
        arrList:state.TestReducer.arrList.data,
        aa2:state.TestReducer.number1
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Test)
