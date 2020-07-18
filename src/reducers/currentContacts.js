export default function currentContacts(state = { contacts: [] }, action) {
    switch (action.type) {
        case 'SET_CURRENT_CONTACTS':
            return action.payload
        default:
            return state
    }
}
