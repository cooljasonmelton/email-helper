import React, {useState} from 'react';

//styling
import './Email.css';
import { Segment, Button, Input } from 'semantic-ui-react'

const TemplateMenu = () => {
    const [searchItem, setSearchItem] = useState('')

    return (
        <Segment className="TemplateMenu email-item">
            <div className="template-menu-options">
                <Button >+</Button>
                <Input placeholder='Search...'
                    onChange={e => setSearchItem(e.target.value)}
                    value={searchItem}/>
            </div>

            {/* SAMPLE OF WHAT TEMPLATES WILL LOOK LIKE */}
            <Segment> 
                <Segment className="template-item" onClick={null}>
                    <h3>name of template</h3>
                    <p>sample text sample text sample text...</p>               
                    <Button size="mini" >x</Button>
                </Segment>
            </Segment>
        </Segment>
    );
}

export default TemplateMenu;
