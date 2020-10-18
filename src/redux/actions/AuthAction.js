import { 
    LOGIN_REQ, 
    SIGNUP_REQ,
    SET_AUTH_REQ,


    LOGIN_FAIL,
    SIGNUP_FAIL,
    SET_AUTH_FAIL,


    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    SET_AUTH_SUCCESS,
 } from "../actionTypes"

export const loginReq = () => {
    return {
        type: LOGIN_REQ
    }
}

export const signUpReq = () => {
    return {
        type: SIGNUP_REQ
    }
}

export const setAuthReq = () => {
    return {
        type: SET_AUTH_REQ
    }
}



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
