import React, { useState } from 'react';

//styling
import './Contact.css';
import './Email.css';

import { Input, Segment, List, ListItem } from 'semantic-ui-react'

//components


const Contacts = () => {
  const [searchItem, setSearchItem] = useState('')

  
  return (
    <Segment className="Contacts email-item">
      <Input placeholder="Search..."
        onChange={e => setSearchItem(e.target.value)}
        value={searchItem}/>
    </Segment>
  );
}

// top: sort, search
// list of contacts, edit, delete
// bottom: add, select all

export default Contacts;
