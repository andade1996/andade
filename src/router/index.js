import Test1 from './../pages/test1'
import Test2 from './../pages/test2'
import {Route} from "react-router";
import React from "react";

let routerArr = [
    {
        path:`/test1`,
        component:Test1
    },
    {
        path: '/test2',
        component:Test2
    }
]

export  function routes(list){
     return <Route exact path={list.path} render={(props)=><list.component {...props}/>} />
}


export  default routerArr
