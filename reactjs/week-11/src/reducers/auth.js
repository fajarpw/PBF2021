import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    VERIFY_REQUEST, VERIFY_SUCCESS
} from '../actions/auth'

export default (
    state = {
        isLogginIn: false,
        isLoggingOut: false,
        isVerifying: false,
        loginError: false,
        logoutError: false,
        isAuthenticated: false,
        verifyingError: false,
        user: {}
    },
    action
) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLogginIn: true,
                loginError: false
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogginIn: false,
                isAuthenticated: true,
                user: action.user
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLogginOut: true,
                logoutError: false,
                loginError: true
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLogginOut: true,
                logoutError: false
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLogginOut: false,
                isAuthenticated: false,
                user: {}
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLogginOut: false,
                logoutError: true
            }
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            }
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false,
            }
        default:
            return state
    }
}