
import React, {Component} from 'react';

export default class Test extends Component {
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



    render() {
        const  {a,b} = this.state
        return (

            <div>

            </div>
        )
    }
}
