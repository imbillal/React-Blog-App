import { 
    GET_POST_SUCCESS,
    GET_LIKES_SUCCESS,
    GET_COMMENT_SUCCESS,
    CREATE_POST_SUCCESS, 
    DELETE_POST_SUCCESS, 
    POST_UPDATED_SUCCESS, 
    CREATE_COMMENT_SUCCESS,

    GET_REQ_FAIL, 
    DELETE_REQ_FAIL, 
    CREATE_POST_FAIL, 
    GET_LIKES_REQ_FAIL,
    GET_COMMENT_REQ_FAIL,
    
    SET_POST_LIKE,
    UNSET_POST_LIKE,
 } from "../actionTypes";

const initialState = {
    posts: [],
    post: {},
    loading: true,
    error: false,
    likes: [],
    comments: []
}

const postReducer = (state = initialState, action) => {
    switch(action.type){

        case CREATE_POST_FAIL: 
        case DELETE_REQ_FAIL:
        case GET_REQ_FAIL:
        case GET_COMMENT_REQ_FAIL:
        case GET_LIKES_REQ_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: [action.payload, ...state.posts]
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                // loading: false,
                posts:  action.payload,
            }
        case DELETE_POST_SUCCESS: 
            return {
                ...state,
                loading: false,
                posts: state.posts.filter( post => post.id !== action.payload),
            }
        case POST_UPDATED_SUCCESS:
            let updatedPost = action.payload
            
            return {
                ...state,
                posts: state.posts.map( post => {
                        return post.id === action.payload.id ? post = updatedPost : post
                    })
                }
        case GET_COMMENT_SUCCESS:
            return{
                ...state,
                loading: false,
                comments:  action.payload,
            }
                
        case GET_LIKES_SUCCESS:
            return{
                ...state,
                // loading: false,
                likes:  action.payload,
            }
        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            }
        case SET_POST_LIKE:
            return {
                ...state,
                likes: [action.payload, ...state.likes]
            }
        case UNSET_POST_LIKE:
            return {
                ...state,
                likes: state.likes.filter( like => like.docId !== action.payload)
            };

        
        default:
                return state
    }
}
export default postReducer