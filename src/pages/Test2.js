import React,{Component} from 'react';

class Test2 extends Component{
    constructor() {
        super(...arguments);
    }
   test = (data)=>{
         console.log(this.props,'屎好吃吗？')
   }
    render() {
        return (
            <div onClick={()=>{this.test(123)}}>我的人生就爱吃屎！</div>
        )
    }

}

export default Test2
