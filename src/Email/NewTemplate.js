import React, {useState} from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Email.css';
import { Divider, TextArea, Input, Form, Button } from 'semantic-ui-react'

const NewTemplate = props => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    // saves new template to back end and resets userData in store
    const saveNewTemplate = () => {
        const {login, state} = props

        // in case no user is logged in
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
        });
    }

    return (
        <>
        {/* NEW TEMPLATE FORM */}
            <Input placeholder="template name" 
                value={name}
                onChange={e => setName(e.target.value)}/>

            <Divider/>

            <Input placeholder="subject"
                onChange={e => setSubject(e.target.value)}
                value={subject}/>
                
            <Form className="template-text" >
                <TextArea className="template-text" 
                    placeholder="body"
                    onChange={e => setBody(e.target.value)}
                    value={body}/>
            </Form>
            <Button onClick={saveNewTemplate}>Save</Button>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      login: userData => dispatch({ type: 'LOGIN_USER', payload: userData }), 
    };
};
  
const mapStateToProps = state => {
    return {
        state
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NewTemplate);