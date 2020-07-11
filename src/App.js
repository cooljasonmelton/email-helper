import React from 'react';

//styling
import './App.css';

//components
import Navbar from './Navbar/Navbar'
import EmailContainer from './Email/EmailContainer'


const App = () => {
  
  return (
    <div className="App">
      <Navbar/>
      <EmailContainer/>

    </div>
  );
}

export default App;
