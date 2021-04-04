import React, { Component } from 'react';
import RefsHOC from './RefsHOX';

class RefsDemo extends Component {
    render() {
        const RefsComponent = RefsHOC(SampleComponent);
        return (
            <div className="contactApp">
                <RefsComponent />
            </div>
        )
    }
}

class SampleComponent extends Component{
    constructor(props){
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    geCurrentState(){
        console.log(this.state.value)
        return this.state.value;
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    render(){
        return(
            <input type="text" onChange={this.handleChange} />
        )
    }
}

export default RefsDemo;