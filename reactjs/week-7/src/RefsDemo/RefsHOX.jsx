import React, { Component } from 'react';

const RefsHOC = WrappedComponent => {
    return class Refs extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: ''
            }
            this.setStateFromInstance = this.setStateFormInstance.bind(this);
        }
        setStateFormInstance() {
            this.setState({
                value: this.instance.getCurrentState()
            })
        }
        render(){
            return(
                <div>
                    <WrappedComponent {...this.props} ref {(instance)=>this.instance}/>
                    <button onClick={this.setStateFormInstance}>Submit</button>
                    <h3>The value is {this.state.value}</h3>
                </div>
            );
        }
    }
}

export default RefsHOC;