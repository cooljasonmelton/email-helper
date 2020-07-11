import React, { useState } from 'react';

//styling
import './Navbar.css';
import { Segment } from 'semantic-ui-react';

//components
import Login from './Login';
import Title from './Title'


const Navbar = () => {
  const [loggedIn, logUserIn] = useState(false)

  
  return (
    <Segment className="Navbar">
      <Title/>

      {loggedIn ?
        null
        : <Login/>}

    </Segment>
  );
}

export default Navbar;
