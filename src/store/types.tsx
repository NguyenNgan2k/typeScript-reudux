
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

interface LoginRequest {
    type: typeof LOGIN_REQUEST,
    payload: {
        email: string,
        password: string,
    }
}

interface LoginSuccess {
    type: typeof LOGIN_SUCCESS,
    payload: {
        token: string,
    }
}

interface LoginError {
    type: typeof LOGIN_ERROR,
    payload: {
        error: string,
    }
}

export interface LoginState {
    loading: boolean,
    error: string | null,
    token: string | null,
}

export type LoginActionType =
    | LoginRequest
    | LoginSuccess
    | LoginError

