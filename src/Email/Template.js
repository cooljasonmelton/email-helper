import React, { useState } from 'react';

//styling
import './Email.css';
import { Segment, TextArea, Button } from 'semantic-ui-react'

//components

const Template = () => {
  const [subject, setSubject] = useState("sample subject")
  const [text, setText] = useState("sample text")
  
  return (
    <Segment className="Template email-item center-flex-box">
      <Button>Send</Button>
      <h3>name of template</h3>
      <TextArea className="template-subject" 
        onChange={e => setSubject(e.target.value)}
        value={subject}/>

      <TextArea className="template-text" 
        onChange={e => setText(e.target.value)}
        value={text}/>
      <Button>Delete</Button>
    </Segment>
  );
}

export default Template;
