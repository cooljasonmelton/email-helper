import React from 'react';

//styling
import './Email.css';
import { Segment, Grid } from 'semantic-ui-react'

//components
import TemplateMenu from './TemplateMenu';
import Template from './Template';
import Contacts from './Contacts';

const EmailContainer = () => {
  
  return (
    <Segment className="EmailContainer" style={{height: '85%'}}>
      <Grid style={{height: '100%'}} columns={3}>
        <Grid.Row stretched>
          <Grid.Column>
            <TemplateMenu/> 
          </Grid.Column>
          <Grid.Column>
            <Template/>
          </Grid.Column>
          <Grid.Column>
            <Contacts/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default EmailContainer;
