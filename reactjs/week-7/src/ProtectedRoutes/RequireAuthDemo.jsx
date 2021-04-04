import React, { Component } from 'react';
import { } from 'react-router-dom';
import {
    Link, Route, Switch, WithRouter
} from 'react-router-dom';
import RequireAuth from './RequireAuthHOC';

class RequireAutoDemo extends Component {
    constructor(props) {
        // Initialize state to false
        this.state = {
            authenticated: false;
        }
    }
    render() {
        const AuthContacs = withRouter(RequireAuth(Contacts));
        const { match } = this.props;
        console.log(match);
        return (
            <div className="nav navbar-nav">
                <ul>
                    <li>
                        <Link to={`${match.url}/home/`}>Home</Link>
                        <Link to={`${match.url}/contacts/`}>Contacts(Protected)</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path={`${match.path}/home/`} component={Home} />
                    <Route path={`${match.path}/contacts/`} render={() => <AuthContacs authenticated={this.state.authenticated} {...this.props} />} />
                </Switch>
            </div>
        );
    }
}

const Home = () =>{
    return(
        <div>
            Navigating to the protected Route gets redirected to /login
        </div>
    );
}

const Contacts = () =>{
    return(
        <div>Contacts</div>
    )
}

export default RequireAutoDemo;