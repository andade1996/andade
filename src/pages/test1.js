import React,{Component} from 'react';

class Test1 extends Component{
    constructor() {
        super(...arguments);
    }
    componentDidMount() {
        console.log(this.props.match.params,'让我看看')
    }

    render() {
        return (
            <div>人生就是充满了奇遇</div>
        )
    }

}

export default Test1
