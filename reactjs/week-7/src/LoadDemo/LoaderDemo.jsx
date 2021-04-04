import React, { Component } from 'react';
import LoadIndicator from './LoaderHOC';
import './ContactsApp.css';

class LoaderDemo extends Component {
    constructor(props) {
        this.state = {
            searchText: '',
            searchResults: [],
            contactList: []
        }
        this.handleUserInput = this.handleUserInput.bind(this)
    }
    handleUserInput(inputText) {
        this.setState({
            searchText: inputText,
        }, () => console.log(this.state))
    }
    componentWillMount() {
        let init = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cche: 'default'
        }
        fetch('https://demo1443058.mockable.io/users/', init)
            .then((Response) => (Response.json()))
            .then(
                (data) => {
                    console.log(data);
                    this.setState(
                        prevState => ({
                            contactList: [data.contacts]
                        })
                    )
                }
            )
    }
    render() {
        const ContactListWithLoadIndicator = LoadIndicator('contacts')(contactList);
        return (<div className="contactApp">
            <ContactListWithLoadIndicator contacts={this.state.contactList} />
        </div>)
    }
}

const ContactList = ({ contacts }) => {
    return (
        <div>
            <ul>
                {contacts.map(
                    (contact) =>

                        <li key={contacts.email}>
                            <img src={contact.photo} width="100px" height="100px" alt="Presentation"/>
                            <div className="contactData">
                                <h4>{contact.name}</h4>
                                <small>{contact.email}</small> <br/>
                                <small>{contact.phone}</small>
                            </div>
                            {console.log(contact)}
                        </li>
                )}
            </ul>
        </div>
    )
}

export default LoaderDemo;