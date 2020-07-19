import React, { useState } from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css'
import { Segment, Icon, Input, Divider, Button } from 'semantic-ui-react'

const ContactItem = props => {
    const [editContact, setEditContact] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

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

    const handleEditContact = contact => {
        setEditContact(!editContact)
        setName(contact.name)
        setEmail(contact.email)
    }

    const handleUpdateContact = (contact, method) => {
        let reqObj;
        if (method === "DELETE") reqObj = { method: method }

        if (method === "PATCH") reqObj = {
            method: method,
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                name, 
                email 
            })
        }

        fetch(`http://localhost:3000/contacts/${contact.id}`, reqObj)
        .then(r=>r.json())
        .then(userData => props.login(userData))

        // toggle edit off 
        setEditContact(false)
    }

    // check if item is in currentContacts store and if so add 'selected' classname
    const checkSelected = contactId => {
        const { contacts } = props.state.currentContacts
        if (contacts.filter(c => c.id === contactId).length > 0) return " selected"
        return ""
    }

    return(
        // CONTACT SEGMENT 
        <Segment className={"contact-item" + checkSelected(contact.id)}  
            onClick={() => toggleSetCurrentContact(contact)}>
        
            {!editContact ?
            <>
                <div className="contact-buttons">
                    <Icon className="edit-button" onClick={() => handleEditContact(contact)} name="edit"/>
                    <Icon className="delete-button" onClick={() => handleUpdateContact(contact, "DELETE")} name="delete"/>
                </div>
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>
            </>
                :   <> {/* EDIT FORM */}
                        <div className="contact-buttons">
                            <Icon className="edit-button" onClick={() => handleEditContact(contact)} name="edit"/>
                            <Icon className="delete-button" onClick={() => handleUpdateContact(contact, "DELETE")} name="delete"/>
                        </div>
                        <Divider/>
                        <div>
                            <Input className="widen" value={name} onChange={e => setName(e.target.value)} />
                            <Input className="widen" value={email} onChange={e => setEmail(e.target.value)} />
                            <Button className="widen" onClick={() => handleUpdateContact(contact, "PATCH")}>Save</Button>
                        </div>
                    </>}
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
