import React, { useState } from 'react';

//styling
import './Navbar.css';
import { Form, Input, Button } from 'semantic-ui-react'

//components

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const logUserIn = () => {
    console.log(email, password)
    fetch()


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
          </Form.Group>
        </Form>
        <Button className='login-button'
          onClick={logUserIn}>
          Login
        </Button>
    </div>
  );
}

export default Login;

