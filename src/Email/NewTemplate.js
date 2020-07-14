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

    const saveNewTemplate = () => {
        console.log(props.state)
        if (!props.state.login.id) return

        const reqObj = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                userId: props.state.login.id,
                name, 
                subject, 
                body 
            })
        }
        
        fetch('http://localhost:3000/templates', reqObj)
        .then(r=>r.json())
        .then(data=>console.log(data));
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
      login: formData => dispatch({ type: 'LOGIN_USER', payload: formData })
    };
};
  
const mapStateToProps = state => {
    return {
        state
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NewTemplate);