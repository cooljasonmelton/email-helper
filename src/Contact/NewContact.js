import React, {useState} from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css';
import { Divider, TextArea, Input, Form, Button } from 'semantic-ui-react'

const NewContact = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // save new contact to back end and update userdata in store
    const saveNewContact = () => {
         const { login, state } = props;
        
         // toggles new contact form closed
        props.setToggleNewContact();

        // required object for fetch request
        const reqObj = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                userId: state.login.id,
                name, 
                email
            })
        };
        // save new contact to back end
        fetch('http://localhost:3000/contacts', reqObj)
        .then(r=>r.json())
        .then(userData=> {
            // redo login to include new contact in store
            login(userData)
        });
    };

    return (
        <>
            <Input placeholder="contact name" 
                value={name}
                onChange={e => setName(e.target.value)}/>
            <Input placeholder="email"
                onChange={e => setEmail(e.target.value)}
                value={email}/>
            <Button onClick={saveNewContact}>Save</Button>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(NewContact);