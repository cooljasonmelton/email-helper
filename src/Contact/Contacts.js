import React, { useState } from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css'
import { Input, Segment, Button } from 'semantic-ui-react'

//components
import NewContact from './NewContact';
import ContactItem from './ContactItem'

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

  const selectAllContacts = () => {
    const { currentContacts } = props.state
    props.currentContacts({ contacts: contacts })
    // if all contacts selected, deselect all
    if (currentContacts.contacts.length === contacts.length) {
      props.currentContacts({ contacts: [] })
    }
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
        <Button onClick={selectAllContacts} icon="reply all" />

      </div>
      
      {/* DIV'D OFF FOR STYLING */}
      <div className="no-overflow">

        {/* TOGGLE NEW CONTACT FORM */}
        {toggleNewContact ? 
          <NewContact setToggleNewContact={setToggleNewContact}/>
            : ""}
          
        {/* CONTACT LIST */}
        {contacts && sortContacts(contacts).map(contact=> {
          return (
            <ContactItem key={contact.id} contact={contact}/>
          )
        })}
      </div>
    </Segment>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);