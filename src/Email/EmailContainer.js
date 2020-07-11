import React from 'react';

//styling
import './Email.css';
import { Segment } from 'semantic-ui-react'

//components
import TemplateMenu from './TemplateMenu';
import Template from './Template';
import Contacts from './Contacts';




const EmailContainer = () => {
  
  return (
    <Segment className="EmailContainer">
        <TemplateMenu/>
        <Template/>
        <Contacts/>



    </Segment>
  );
}

export default EmailContainer;
