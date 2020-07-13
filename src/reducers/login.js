export default function login(state = { user: ""}, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }

}
