import React, { useState } from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css'
import { Input, Segment, Button, Divider } from 'semantic-ui-react'

//components
import NewContact from './NewContact';

const Contacts = props => {
  const [searchItem, setSearchItem] = useState('')
  const [toggleNewContact, setToggleNewContact] = useState(false)

  const { contacts } = props.state.login

 
  return (
    <Segment className="Contacts email-item">
      {/* OPTIONS */}
      <div className="contact-options">
        {/* TOGGLE NEW CONTACT CONTAINER */}
        <Button onClick={() => setToggleNewContact(!toggleNewContact)}> + </Button>

        {/* search input  */}
        <Input placeholder="Search..."
          onChange={e => setSearchItem(e.target.value)}
          value={searchItem}/>
      </div>

      {/* toggle new contact form */}
      {toggleNewContact ? 
        <NewContact setToggleNewContact={setToggleNewContact}/>
          : ""}

      <Divider/>

      {/* contact list */}
      <div className="no-overflow">

      {contacts && contacts.map(contact=> {
        return (<Segment className="contact-item">
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
        </Segment>
      )})}


      </div>


    </Segment>
  );
}

// NOT USING YET
// const mapDispatchToProps = dispatch => {
//   return {
//     login: userData => dispatch({ type: 'LOGIN_USER', payload: userData }), 
//   };
// };

const mapStateToProps = state => {
  return {
      state
  }
}

export default connect(mapStateToProps)(Contacts);