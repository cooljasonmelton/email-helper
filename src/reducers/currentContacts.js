export default function currentContacts(state = { contacts: [] }, action) {
    switch (action.type) {
        case 'SET_CURRENT_TEMPLATE':
            return action.payload
        default:
            return state
    }
}
