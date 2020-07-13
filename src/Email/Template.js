import React, { useState } from 'react';

//styling
import './Email.css';
import { Segment, TextArea, Button } from 'semantic-ui-react'

//components

const Template = () => {
  const [contacts, setContacts] = useState(['jason', 'paul', 'rachel'])
  const [subject, setSubject] = useState("sample subject")
  const [body, setBody] = useState("sample body")

  // currently grabs sample state above
  // change this to later use redux to get selected contacts & template
  const sendEmail = () =>{
    const mailtoURL = `mailto:${contacts.join(",")}?subject=${subject}&body=${body}`
    window.open(mailtoURL, "_blank") 
  }
  
  return (
    <Segment className="Template email-item center-flex-box">

      <Button onClick={sendEmail}>Send</Button>

      <h3>name of template</h3>

      <TextArea className="template-subject" 
        onChange={e => setSubject(e.target.value)}
        value={subject}/>

      <TextArea className="template-text" 
        onChange={e => setBody(e.target.value)}
        value={body}/>

      <Button>Delete</Button>

    </Segment>
  );
}

export default Template;
