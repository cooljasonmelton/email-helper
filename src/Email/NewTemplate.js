import React, {useState} from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Email.css';
import { Divider, TextArea, Input, Form } from 'semantic-ui-react'

const NewTemplate = props => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')


    // saves new template to back end and sets as currentTemplate in store

    const saveNewTemplate = () => {
        const {login, currentTemplate, state} = props
        if (!state.login.id) return

        const reqObj = {
            method: "POST",
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
        
        fetch('http://localhost:3000/templates', reqObj)
        .then(r=>r.json())
        .then(userData=> {
            // redo login to include new template in store
            login(userData)

            // grab last template in array and make current template
            currentTemplate(userData.templates[userData.templates.length-1]) 
        });
    }

    return (
        <>
            <Input placeholder="template name" 
                value={name}
                onBlur={saveNewTemplate} 
                onChange={e => setName(e.target.value)}/>

            <Divider/>

            <Input placeholder="subject"
                onBlur={saveNewTemplate} 
                onChange={e => setSubject(e.target.value)}
                value={subject}/>
                
            <Form className="template-text" >
                <TextArea className="template-text" 
                    onBlur={saveNewTemplate} 
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
  
export default connect(mapStateToProps, mapDispatchToProps)(NewTemplate);