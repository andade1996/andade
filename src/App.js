import React,{Component} from 'react';
import routerArr from "./router";
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class App extends Component{
    constructor(props) {
        super(...arguments);
        this.state={
            a:{
                a:1,
                b:2
            }
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                {
                    routerArr&&routerArr.map(()=>{

                    })
                }
            </div>
        );
    }
}

export default  connect((state)=>({number:state}),(dispatch)=>({
    add:(action)=>dispatch(action)
}))(App)
