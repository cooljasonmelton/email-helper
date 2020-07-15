import React, {useState} from 'react';

//redux
import { connect } from 'react-redux'

//styling
import './Email.css';
import { Segment, Button, Input } from 'semantic-ui-react'

const TemplateMenu = props => {
    const [searchItem, setSearchItem] = useState('')

    const {templates} = props.state.login

    return (
        <Segment className="TemplateMenu email-item center-flex-box">
            <div className="template-menu-options">
                <Button>+</Button>
                <Input placeholder='Search...'
                    onChange={e => setSearchItem(e.target.value)}
                    value={searchItem}/>
            </div>

            <div className="no-overflow">

                {/* Map thru store of user templates and display */}
                {templates && templates.map(template => {
                    return (
                        <Segment className="template-item" onClick={()=> props.currentTemplate(template)}>
                            <h3>{template.name}</h3>
                            <p>{template.subject}</p>
                            <p>{template.body.substring(0,50)}</p>               
                        </Segment>
                    )})
                }   

            </div>
        </Segment>
    );
}

const mapStateToProps = state => {
    return {
      state
    }
}

const mapDispatchToProps = dispatch => {
    return {
      currentTemplate: templateData => dispatch({type:'SET_CURRENT_TEMPLATE', payload: templateData})
    };
};

  
export default connect(mapStateToProps, mapDispatchToProps)(TemplateMenu);