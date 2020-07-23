import React, { useState } from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Navbar.css';
import { Form, Input } from 'semantic-ui-react'

const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // login returning user
  const logUserIn = () => {
    const reqObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ email, password })
    }
    fetch('http://localhost:3000/login', reqObj)
    .then(r=>r.json())
    .then(userData=> {
      console.log(userData)
      props.login(userData)
    })
  }

  // sign up new user
  const signUserUp = () => {
    const reqObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ email, password })
    }
    fetch('http://localhost:3000/users', reqObj)
    .then(r=>r.json())
    .then(userData=> {
      console.log(userData)
      props.login(userData)
    })
  }
  
  return (
    <div className="Login" 
    // hide if logged in
    style={props.state.login.id ? 
            {display: "none"} 
              : {display: "block"}}> 

        {/* LOGIN IN PUTS */}
        <Form>
          <Form.Group>
            <Form.Field
              control={Input}
              label='Email'
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <Form.Field
              control={Input}
              label='Password'
              placeholder='Password'
              type='password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />

            {/* LOGIN BUTTON */}
            <Form.Button className='login-button'
              onClick={logUserIn}>
              Login
            </Form.Button>

            {/* SIGN UP BUTTON */}
            <Form.Button className='login-button'
              onClick={signUserUp}>
              Sign Up
            </Form.Button>
          </Form.Group>
        </Form>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);



