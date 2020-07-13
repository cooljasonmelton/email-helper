import React, {useState} from 'react';

//styling
import './Email.css';
import { Segment, Button, Input } from 'semantic-ui-react'

const TemplateMenu = () => {
    const [searchItem, setSearchItem] = useState('')

    return (
        <Segment className="TemplateMenu email-item center-flex-box">
            <div className="template-menu-options">
                <Button>+</Button>
                <Input placeholder='Search...'
                    onChange={e => setSearchItem(e.target.value)}
                    value={searchItem}/>
            </div>

            {/* SAMPLE OF WHAT TEMPLATES WILL LOOK LIKE */}
            <div className="no-overflow">
                <Segment className="template-item" onClick={null}>
                    <h3> name of template</h3>
                    <p>sample text sample text sample text...</p>               
                </Segment>
            </div>
        </Segment>
    );
}

export default TemplateMenu;
