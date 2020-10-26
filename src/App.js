import React,{Component} from 'react';
import routerArr,{routes} from "./router";
import {HashRouter as Router,Link} from 'react-router-dom';
import  {Route,Switch} from 'react-router'
import {connect} from 'react-redux'
import  {Provider} from 'react-redux'
import  store from './store/index'

class App extends Component{
    constructor(props) {
        super(...arguments);
        this.state={
        }
    }
    componentDidMount() {

    }


    render() {
        return (
                <div>
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
                </div>




        );
    }
}

export default  connect((state)=>({number:state}),(dispatch)=>({
    add:(action)=>dispatch(action)
}))(App)
