export default function currentTemplate(state = { id: ""}, action) {
    switch (action.type) {
        case 'SET_CURRENT_TEMPLATE':
            return action.payload
        default:
            return state
    }
}
