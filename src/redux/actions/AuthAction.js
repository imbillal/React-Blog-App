import { 
    LOGIN_FAIL,
    SIGNUP_FAIL,
    SET_AUTH_FAIL,


    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    SET_AUTH_SUCCESS,
 } from "../actionTypes"

export const loginFail = (payload) => {
    return {
        type: LOGIN_FAIL,
        payload
    }
}
export const signUpFail = (payload) => {
    return {
        type: SIGNUP_FAIL,
        payload
    }
}

export const setAuthFail = (payload) => {
    return {
        type: SET_AUTH_FAIL,
        payload
    }
}



export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
export const signUpSuccess = () => {
    return {
        type: SIGNUP_SUCCESS
    }
}

export const setAuthSuccess = (payload) => {
    return {
        type: SET_AUTH_SUCCESS,
        payload
    }
}
