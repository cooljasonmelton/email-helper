import React, {useState} from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Contact.css';
import { Divider, TextArea, Input, Form, Button } from 'semantic-ui-react'

const NewContact = props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    // // saves new template to back end and resets userData in store
    // const saveNewTemplate = () => {
    //     const {login, currentTemplate, state} = props
    //     // in case no user is logged in
    //     if (!state.login.id) return

    //     const reqObj = {
    //         method: "POST",
    //         headers: {
    //           'Content-Type': 'application/json' 
    //         },
    //         body: JSON.stringify({
    //             userId: state.login.id,
    //             name, 
    //             subject, 
    //             body 
    //         })
    //     }
        
    //     fetch('http://localhost:3000/templates', reqObj)
    //     .then(r=>r.json())
    //     .then(userData=> {
    //         // redo login to include new template in store
    //         login(userData)
    //     });
    // }

    return (
        <>
            <Input placeholder="contact name" 
                value={name}
                onChange={e => setName(e.target.value)}/>
            <Input placeholder="email"
                onChange={e => setEmail(e.target.value)}
                value={email}/>
            <Button onClick={null}>Save</Button>
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