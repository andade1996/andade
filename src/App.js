import React,{Component} from 'react';
import Test1 from './pages/test1'
import Test2 from './pages/Test2'
import { Route,NavLink} from 'react-router-dom';
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
        const {add,number} = this.props
        return (
            <div className="App">
                <NavLink to={'/test1'}>去test1</NavLink>
                <NavLink to={'/test2'}>去test2</NavLink>
                <div  onClick={this.handelClick}>信春哥得永生{number.add}</div>
                <Route path={'/test1/:id'} component={Test1}></Route>
                <Route path={'/test2'} component={Test2}></Route>
            </div>
        );
    }
}

export default  connect((state)=>({number:state}),(dispatch)=>({
    add:(action)=>dispatch(action)
}))(App)
