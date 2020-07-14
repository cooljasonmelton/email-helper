import { combineReducers } from 'redux'
import login from './login'
import currentTemplate from './currentTemplate'

export default combineReducers({
    login: login, 
    currentTemplate: currentTemplate
})