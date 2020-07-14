import React, {useState} from 'react';

//styling
import './Email.css';
import { Divider, Button, TextArea, Input, Form } from 'semantic-ui-react'

const NewTemplate = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    return (
        <>
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
        
        <Button>Save</Button>
        </>
    );
}

export default NewTemplate;
