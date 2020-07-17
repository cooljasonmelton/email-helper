import React from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Email.css';
import { Segment, Divider, Button, Icon } from 'semantic-ui-react'

//components
import NewTemplate from './NewTemplate'
import EditTemplate from './EditTemplate'

const Template = props => {
  // const sendEmail = () =>{
  //   const mailtoURL = `mailto:${contacts.join(",")}?subject=${subject}&body=${body}`
  //   window.open(mailtoURL, "_blank") 
  // }  
  
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
      {props.state.currentTemplate.id ?
        <EditTemplate/>
          : <NewTemplate/>
      }
    </Segment>
  );
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    currentTemplate: templateData => dispatch({type:'SET_CURRENT_TEMPLATE', payload: templateData})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);