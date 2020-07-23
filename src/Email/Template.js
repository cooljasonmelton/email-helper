import React from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Email.css';
import { Segment } from 'semantic-ui-react'

//components
import NewTemplate from './NewTemplate'
import EditTemplate from './EditTemplate'
import SendEmailButton from './SendEmailButton';

const Template = props => { 
  return (
    <Segment className="Template email-item center-flex-box">

      {/* SEND BUTTON */}
      <SendEmailButton/>
      
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