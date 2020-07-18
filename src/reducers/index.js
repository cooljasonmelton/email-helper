import { combineReducers } from 'redux'
import login from './login'
import currentTemplate from './currentTemplate'
import currentContacts from './currentContacts'

export default combineReducers({
    login: login, 
    currentTemplate: currentTemplate,
    currentContacts: currentContacts
})