import React, { useState } from 'react';

//styling
import './Contact.css'
import { Input, Segment, Button, Divider } from 'semantic-ui-react'

//components
import NewContact from './NewContact';


const Contacts = () => {
  const [searchItem, setSearchItem] = useState('')
  const [toggleNewContact, setToggleNewContact] = useState(false)
  
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

      {toggleNewContact ? 
        <NewContact setToggleNewContact={setToggleNewContact}/>
        : ""}
      <Divider/>




      {/* contact list */}
      <div className="no-overflow">
        <Segment>
          <h3>Dave</h3>
          <p>Dave@gmail.com</p>
        </Segment>
      </div>


    </Segment>
  );
}

export default Contacts;
