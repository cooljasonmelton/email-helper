import React, { useState } from 'react';

//styling
import './Email.css';
import { Segment, Divider, Button, Icon } from 'semantic-ui-react'

//components
import NewTemplate from './NewTemplate'
import EditTemplate from './EditTemplate'

const Template = () => {
  const [contacts, setContacts] = useState(['jason', 'paul', 'rachel'])
  const [subject, setSubject] = useState("sample subject")
  const [body, setBody] = useState("sample body")
  const [createNewTemplate, setTemplate] = useState(true)

  // currently grabs sample state above
  // change this to later use redux to get selected contacts & template
  const sendEmail = () =>{
    const mailtoURL = `mailto:${contacts.join(",")}?subject=${subject}&body=${body}`
    window.open(mailtoURL, "_blank") 
  }
  
  return (
    <Segment className="Template email-item center-flex-box">

      {/* SEND BUTTON */}
      <Button animated onClick={null}>
        <Button.Content visible>Send</Button.Content>
        <Button.Content hidden>
        <Icon name='arrow right' />
        </Button.Content>
      </Button>
      <br/>

      {/* DECIDES NEW OR EDIT TEMPLATE */}
      {createNewTemplate ?
        <NewTemplate/>
          : <EditTemplate/>
      }

      {/* DELETE BUTTON */}
      <Divider/>
      <Button>Delete</Button>
    </Segment>
  );
}

export default Template;
