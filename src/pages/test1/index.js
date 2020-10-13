import React, {Component} from 'react';
import {connect} from 'react-redux'
 class Test1 extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {number:null};
    }
    componentDidMount() {

        console.log(this.props,"为什么?")
    }
    handelClick=()=>{
       let {add,text} =  this.props
        add({type:'123'})
       this.setState({
           number:this.props.text.text.floatNumber
       })
    }
    render() {
        return (
            <div onClick={this.handelClick}>
                今天也是美好的 {this.state.number}天
            </div>
        )
    }
}

export default  connect((state)=>({text:state}),(dispatch)=>({
    add:(action)=>dispatch(action)
}))(Test1)

