import React from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Navbar.css';
import { Button } from 'semantic-ui-react'



const Logout = props => {
    const {login } = props.state

    // changes user in store to "" removing all user info
    const logoutUser = () => {
        props.login({ id: "" })
    }

    return (
        // toggles log out button based on login in store
        <>
            {login.id ?
                <Button onClick={logoutUser}>Logout</Button>
                : <div></div>}
        </>
    )
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Logout);
  