import React from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css'
import { Segment, Icon } from 'semantic-ui-react'

const ContactItem = props => {
    const { contact, currentContacts } = props

    // takes contact object as parameter
    const toggleSetCurrentContact = contact => {
        const { contacts } = props.state.currentContacts

        // checks if contact is in store
        const contactSet = contacts.filter(c => c.id === contact.id)

        // if contact is in store, removes it
        if (contactSet.length > 0){
            let removeContacts = contacts.filter(c => c.id !== contact.id)
            return currentContacts({ contacts: removeContacts })
        
        // if contact is not in store, adds it
        } else {
            let addContacts = [...contacts, contact]
            return currentContacts({ contacts: addContacts })
        }
    }

    // when delete button pressed, deletes contact
    const handleDelete = contactId => {
        fetch(`http://localhost:3000/contacts/${contactId}`, {method: 'DELETE'})
        .then(r=>r.json())
        .then(userData => props.login(userData))
    }

    // check if item is in currentContacts store and if so add 'selected' classname
    const checkSelected = contactId => {
        const { contacts } = props.state.currentContacts
        if (contacts.filter(c => c.id === contactId).length > 0) return " selected"
        return ""
    }

    return(
        <Segment className={"contact-item" + checkSelected(contact.id)}  onClick={() => toggleSetCurrentContact(contact)}>
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
