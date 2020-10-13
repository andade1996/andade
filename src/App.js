import React,{Component} from 'react';
import routerArr,{routes} from "./router";
import {HashRouter as Router,Link} from 'react-router-dom';
import  {Route,Switch} from 'react-router'
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
            <Router>
                <div className="App">
                    <Switch>
                      {
                          routerArr.map((value, index, array)=>{
                                    return  routes(value)
                          })
                      }
                    </Switch>
                    <Link to="/test1">About</Link>
                    <Link to="/test2">Product</Link>
                </div>
            </Router>

        );
    }
}

export default  connect((state)=>({number:state}),(dispatch)=>({
    add:(action)=>dispatch(action)
}))(App)
