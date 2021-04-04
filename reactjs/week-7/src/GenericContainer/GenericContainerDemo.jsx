import React, { Component } from 'react';
import GenericContainer from './GenericContainerHOC';

class GenericContainerDemo extends Component {
    render() {
        const ContactListWithGenericContainer = GenericContainer(
            {
                reqURL: 'https://demo1443058.mockable.io/users/',
                reqMethod: 'GET',
                resName: 'contacts'
            })(ContactList)
        return (
            <div className="contactApp">
                <ContactListWithGenericContainer />
            </div >
        )
    }

}

const ContactList = ({contacts}) => {
    return(
        <div>
            <ul>
                {contact.map(
                    (contact) => <li key={contact.email}>
                        <img src={contact.photo} width="100px" height="100px" alt="presentataion"/>
                        <div className="contactData">
                            <h4>{contact.name}</h4>
                            <small>{contact.email}</small> <br/>
                            <small>{contact.phone}</small>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default GenericContainerDemo;