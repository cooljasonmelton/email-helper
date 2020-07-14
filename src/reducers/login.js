export default function login(state = { id: ""}, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return action.payload
        default:
            return state
    }

}
