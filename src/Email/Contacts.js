import React, { useState } from 'react';

//styling
import './Contact.css';
import { Input, Segment, List, ListItem } from 'semantic-ui-react'

//components


const Contacts = () => {
  const [searchItem, setSearchItem] = useState('')

  
  return (
    <Segment className="Contacts email-item">
      <Input placeholder="Search..."
        onChange={e => setSearchItem(e.target.value)}
        value={searchItem}/>

      <List divided>
        <List.Item>
          <List horizontal divided>
            <List.Item> name </List.Item>
            <List.Item> email </List.Item>
            <List.Item> tags </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <List horizontal divided className="contact-entry">
            <List.Item className="contact-entry"> Jason Melton </List.Item>
            <List.Item className="contact-entry"> jason@email.com </List.Item>
            <List.Item className="contact-entry"> friend, enemy, cat-liker </List.Item>
          </List>
        </List.Item>
      </List>

      


    </Segment>
  );
}

// top: sort, search
// list of contacts, edit, delete
// bottom: add, select all

export default Contacts;
