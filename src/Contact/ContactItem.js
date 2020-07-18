import React from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css'
import { Segment, Icon } from 'semantic-ui-react'

const ContactItem = props => {
    const { contact, currentContacts } = props
    console.log(props.state.currentContacts.contacts)

    const toggleSetCurrentContact = contact => {
        const { contacts } = props.state.currentContacts

        const contactSet = contacts.filter(c => c.id === contact.id)

        if (contactSet.length > 0){
            let removeContacts = contacts.filter(c => c.id !== contact.id)
            return currentContacts({ contacts: removeContacts })
        } else {
            let addContacts = [...contacts, contact]
            return currentContacts({ contacts: addContacts })
        }

        // get current contacts
        // add or remove this contact
        // reset contacts to this one

    }

    // when delete button pressed, deletes contact
    const handleDelete = contactId => {
        fetch(`http://localhost:3000/contacts/${contactId}`, {method: 'DELETE'})
        .then(r=>r.json())
        .then(userData => props.login(userData))
    }

    return(
        <Segment className="contact-item" onClick={() => toggleSetCurrentContact(contact)}>
            <Icon className="delete-button" onClick={() => handleDelete(contact.id)} name="delete"/>
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
        </Segment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      login: userData => dispatch({ type: 'LOGIN_USER', payload: userData }),
      currentContacts: contactData => dispatch({ type: 'SET_CURRENT_CONTACTS', payload: contactData })
    };
};
  
const mapStateToProps = state => {
    return {
        state
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
