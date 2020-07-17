import React, {useState} from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Email.css';
import { Segment, Button, Input, Icon } from 'semantic-ui-react'

const TemplateMenu = props => {
    const [searchItem, setSearchItem] = useState('')

    const { templates } = props.state.login

    const handleDelete = tempId => {
        fetch("http://localhost:3000/templates/" + tempId, {method: 'DELETE'})
        .then(r=>r.json())
        .then(userData=>{
            props.login(userData)
            props.currentTemplate({id: ""})
        })
    }

    return (
        <Segment className="TemplateMenu email-item center-flex-box">
            <div className="template-menu-options">

                {/* button clear template causing new template to render */}
                <Button onClick={() => props.currentTemplate({ id: ""})}>
                    +
                </Button>

                <Input placeholder='Search...'
                    onChange={e => setSearchItem(e.target.value)}
                    value={searchItem}/>
            </div>

            <div className="no-overflow">

                {/* Map thru store of user templates and display */}
                {templates && templates.map(template => {
                    return (
                        <Segment className="template-item" onClick={()=> props.currentTemplate(template)}>
                            <Icon className="delete-button" onClick={() => handleDelete(template.id)} name="delete"/>
                            <h3>{template.name}</h3>
                            <p>{template.subject}</p>
                            <p>{template.body.substring(0,100)}</p>
                        </Segment>
                    )}).reverse()
                }   

            </div>
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
        login: userData => dispatch({ type: 'LOGIN_USER', payload: userData }),
        currentTemplate: templateData => dispatch({type:'SET_CURRENT_TEMPLATE', payload: templateData})
    };
};

  
export default connect(mapStateToProps, mapDispatchToProps)(TemplateMenu);