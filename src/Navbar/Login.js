import React, { useState } from 'react';

//styling
import './Navbar.css';
import { Form, Input, Button } from 'semantic-ui-react'

//components

const Login = () => {
  const [email, setEmail] = useState('jason.melton2@gmail.com')
  const [password, setPassword] = useState('jason')

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
    .then(d=>console.log(d))
  }

  return (
    <div className="Login">
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
            <Form.Button className='login-button'
              onClick={logUserIn}>
              Login
            </Form.Button>
          </Form.Group>
        </Form>
    </div>
  );
}

export default Login;

