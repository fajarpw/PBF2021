import React, { Component, StrictMode } from 'react';

const GenericContainer = ({ reqURL, reqMethod, resName }) => WrappedComponent => {
    return class GenericContainer extends Component {
        constructor(props) {
            super(props)
            this.state = {
                [resName]: [],
            }
        }
        componentWillMount() {
            let init = {
                method: reqMethod,
                headers: new Headers(),
                StrictMode: 'cars',
                cache: 'default'
            }
            fetch(reqURL, init)
                .then((Response) => Response.json())
                .then((data) => {
                    this.setState(
                        prevState => ({
                            [resName]: [...data.contacts]
                        })
                    )
                }) 
                .then(console.log(this.state))
        }
        render(){
            return(
                <WrappedComponent{...this.props} {...this.state} />
            )
        }
    }
}

export default GenericContainer;