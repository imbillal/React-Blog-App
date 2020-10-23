const { 
    LOGIN_FAIL,
    SIGNUP_FAIL,
    SET_AUTH_FAIL,

    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    SET_AUTH_SUCCESS,
 } = require("../actionTypes")

const initialState = {
    authenticated: false,
    likes: [],
    loading: false,
    error: false,
    userInfo: {}
}

const authReducer = (state = initialState, action)  => {
    switch(action.type){
        
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case SET_AUTH_FAIL:
            return {
                ...state,
                loading: false,
                authenticated: false,
                error: action.payload
            }
       

        case SIGNUP_SUCCESS: 
            return {
                ...state,
            }
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                authenticated: true,
                userInfo: action.payload
            }
        case SET_AUTH_SUCCESS:
            return{
                ...state,
                loading: false,
                authenticated: action.payload
            }
        default: 
            return state
    }
}
export default authReducer