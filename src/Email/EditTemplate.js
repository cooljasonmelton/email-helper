import React, {useState} from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Email.css';
import { Divider, TextArea, Input, Form } from 'semantic-ui-react'

const EditTemplate = props => {
    const {currentTemplate} = props.state
    const [name, setName] = useState(currentTemplate.name)
    const [subject, setSubject] = useState(currentTemplate.subject)
    const [body, setBody] = useState(currentTemplate.body)


    // saves new template to back end and sets as currentTemplate in store

    const saveEditTemplate = () => {
        const {login, state} = props
        if (!state.login.id) return

        const reqObj = {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                userId: state.login.id,
                name, 
                subject, 
                body 
            })
        }
        
        fetch(`http://localhost:3000/templates/${state.currentTemplate.id}`, reqObj)
        .then(r=>r.json())
        .then(userData=> {
            login(userData)
        });
    }

    return (
        <>
            <Input placeholder="template name" 
                value={name}
                onBlur={saveEditTemplate} 
                onChange={e => setName(e.target.value)}/>

            <Divider/>

            <Input placeholder="subject"
                onBlur={saveEditTemplate} 
                onChange={e => setSubject(e.target.value)}
                value={subject}/>
                
            <Form className="template-text" >
                <TextArea className="template-text" 
                    onBlur={saveEditTemplate} 
                    placeholder="body"
                    onChange={e => setBody(e.target.value)}
                    value={body}/>
            </Form>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      login: userData => dispatch({ type: 'LOGIN_USER', payload: userData }), 
      currentTemplate: templateData => dispatch({type:'SET_CURRENT_TEMPLATE', payload: templateData})
    };
};
  
const mapStateToProps = state => {
    return {
        state
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EditTemplate);