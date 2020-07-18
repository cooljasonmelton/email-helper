import React, { useState } from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css'
import { Input, Segment, Button, Icon } from 'semantic-ui-react'

//components
import NewContact from './NewContact';

const Contacts = props => {
  const [searchItem, setSearchItem] = useState('')
  const [toggleNewContact, setToggleNewContact] = useState(false)

  const { contacts } = props.state.login

  // put contacts in alphabetical order by name
  const sortContacts = contacts => contacts.sort((a,b) => {
    if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
    if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
    return 0;
  })

  // when delete button pressed, deletes contact
  const handleDelete = contactId => {
    fetch(`http://localhost:3000/contacts/${contactId}`, {method: 'DELETE'})
    .then(r=>r.json())
    .then(userData => props.login(userData))
  }
   
  return (
    <Segment className="Contacts email-item">

      {/* OPTIONS */}
      <div className="contact-options">

        {/* TOGGLE NEW CONTACT CONTAINER */}
        <Button onClick={() => setToggleNewContact(!toggleNewContact)}> + </Button>

        {/* SEARCH INPUT  */}
        <Input placeholder="Search..."
          onChange={e => setSearchItem(e.target.value)}
          value={searchItem}/>

        {/* SELECT ALL CONTACTS */}
        <Button icon="reply all" />

      </div>

      <div className="no-overflow">

        {/* TOGGLE NEW CONTACT FORM */}
        {toggleNewContact ? 
          <NewContact setToggleNewContact={setToggleNewContact}/>
            : ""}
          
        {/* CONTACT LIST */}
        {contacts && sortContacts(contacts).map(contact=> {
          return (
            <Segment className="contact-item">
              <Icon className="delete-button" onClick={() => handleDelete(contact.id)} name="delete"/>
              <h3>{contact.name}</h3>
              <p>{contact.email}</p>
            </Segment>
          )
        })}
      </div>
    </Segment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    login: userData => dispatch({ type: 'LOGIN_USER', payload: userData }), 
  };
};

const mapStateToProps = state => {
  return {
      state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);