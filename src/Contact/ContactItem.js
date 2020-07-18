import React, { useState } from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css'
import { Segment, Icon } from 'semantic-ui-react'

const ContactItem = props => {
    const { contact } = props

    // when delete button pressed, deletes contact
    const handleDelete = contactId => {
        fetch(`http://localhost:3000/contacts/${contactId}`, {method: 'DELETE'})
        .then(r=>r.json())
        .then(userData => props.login(userData))
    }

    return(
        <Segment className="contact-item">
            <Icon className="delete-button" onClick={() => handleDelete(contact.id)} name="delete"/>
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
        </Segment>
    )
}

export default ContactItem
