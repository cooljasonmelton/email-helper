import React from 'react';

//styling
import './Email.css';
import { Input, Segment } from 'semantic-ui-react'

//components


const Contacts = () => {
  
  return (
    <Segment className="Contacts email-item">
      <Input />


    </Segment>
  );
}

// top: sort, search
// list of contacts, edit, delete
// bottom: add, select all

export default Contacts;
