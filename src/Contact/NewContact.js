import React, {useState} from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css';
import { Divider, Input, Button } from 'semantic-ui-react'

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
            {/* NEW CONTACT FORM */}
            <div style={{width:"100%"}}>
                <h3>add contact</h3>
                <Input placeholder="contact name" 
                    style={{width:"50%"}}
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                <Input placeholder="email"
                    style={{width:"50%"}}
                    onChange={e => setEmail(e.target.value)}
                    value={email}/>
                <Button style={{width:"100%"}} onClick={saveNewContact}>Save</Button>
            </div>
            <Divider/>
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