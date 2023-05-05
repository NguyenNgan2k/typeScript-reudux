
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LoginActionType, LoginState } from "../types";

const initialState: LoginState = {
    loading: false,
    error: null,
    token: null,
}

export const loginReducer = (state: LoginState = initialState, action: LoginActionType): LoginState => {

    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, loading: true }
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                token: action.payload.token
            }
        }

        case LOGIN_ERROR: {
            return {
                ...state,
                error: action.payload.error,

            }
        }

        default: return state
    }
}

export default loginReducer;