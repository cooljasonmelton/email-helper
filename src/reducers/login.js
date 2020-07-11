export default function login(state = { user: ""}, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return
        default:
            return state
    }

}
