import React, { useState } from 'react';

//styling
import './Email.css';
import { Segment, TextArea } from 'semantic-ui-react'

//components

const Template = () => {
  const [text, setText] = useState("")
  
  return (
    <Segment className="Template email-item">
      <TextArea className="template-text" 
        onChange={e => setText(e.target.value)}
        value={text}/>
    </Segment>
  );
}

export default Template;
