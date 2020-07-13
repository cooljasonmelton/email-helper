import React, { useState } from 'react';

//styling
import './Email.css';

import { Input, Segment, Button } from 'semantic-ui-react'

//components


const Contacts = () => {
  const [searchItem, setSearchItem] = useState('')


  const TEST = () => {
    const testArr = []
    for (let i=0; i<10; i++){
      testArr.push(<Segment>
        <h3>Jason Melton</h3>
        <p>jason.melton2@gmail.com</p>
      </Segment>)

    }  
    return testArr
  }

  
  return (
    <Segment className="Contacts email-item">
      <div className="contact-options">
        {/* sort options */}
        <Button>+</Button>
        {/* search input  */}
        <Input placeholder="Search..."
          onChange={e => setSearchItem(e.target.value)}
          value={searchItem}/>
      </div>
      {/* contact list */}

      <div className="no-overflow">
        <Segment>
          <h3>Jason Melton</h3>
          <p>jason.melton2@gmail.com</p>
        </Segment>

        {TEST()}
      </div>


    </Segment>
  );
}

// top: sort, search
// list of contacts, edit, delete
// bottom: add, select all

export default Contacts;
