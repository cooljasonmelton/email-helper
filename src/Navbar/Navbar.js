import React from 'react';

//styling
import './Navbar.css';
import { Segment } from 'semantic-ui-react';

//components
import Login from './Login';
import Title from './Title'


const Navbar = () => {
  
  return (
    <Segment className="Navbar">
      
      <Title/>
      <Login/>
    </Segment>
  );
}

export default Navbar;
