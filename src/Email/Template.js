import React from 'react';

//styling
import './Email.css';
import { Segment, TextArea } from 'semantic-ui-react'


//components


const Template = () => {
  
  return (
    <Segment className="Template email-item">
      <TextArea className="template-text" />


    </Segment>
  );
}

export default Template;
