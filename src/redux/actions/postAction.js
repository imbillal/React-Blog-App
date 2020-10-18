import { 
    CREATE_POST_REQ,
    CREATE_POST_FAIL, 
    CREATE_POST_SUCCESS,

    DELETE_REQ_FAIL, 
    DELETE_POST_SUCCESS,

    GET_POST_REQ, 
    GET_REQ_FAIL,
    GET_POST_SUCCESS, 

    GET_COMMENT_REQ,
    GET_COMMENT_REQ_FAIL,
    GET_COMMENT_SUCCESS,

    GET_LIKES_REQ,
    GET_LIKES_REQ_FAIL,
    GET_LIKES_SUCCESS,

    POST_UPDATED_SUCCESS,
 } from "../actionTypes"

export const createPostReq = () => {
     return {
         type: CREATE_POST_REQ,
     }
 }
export const getPostReq = () => {
    return {
        type: GET_POST_REQ,
    }
}

export const getCommentsReq = () => {
    return {
        type: GET_COMMENT_REQ,
    }
}
export const getLikesReq = () => {
    return {
        type: GET_LIKES_REQ,
    }
}



export const createReqFail = () => {
    return {
        type: CREATE_POST_FAIL,
    }
}
export const getReqFail = () => {
    return {
        type: GET_REQ_FAIL,
    }
}

export const deleteReqFail = (payload) => {
    return {
        type: DELETE_REQ_FAIL,
        payload
    }
}


export const getCommentReqFail = (payload) => {
    return {
        type: GET_COMMENT_REQ_FAIL,
        payload
    }
}
export const getLikesReqFail = (payload) => {
    return {
        type: GET_LIKES_REQ_FAIL,
        payload
    }
}


export const createPostSuccess = (payload) => {
    return {
        type: CREATE_POST_SUCCESS,
        payload
    }
}
export const getPostsSuccess = (payload) => {
    return {
        type: GET_POST_SUCCESS,
        payload
    }
}
export const deletePostSuccess = (payload) => {
    return {
        type: DELETE_POST_SUCCESS,
        payload
    }
}
export const createCommentSuccess = (payload) => {
    return {
        type: 'CREATE_COMMENT_SUCCESS',
        payload
    }
}
export const getCommentSuccess = (payload) => {
    return {
        type: GET_COMMENT_SUCCESS,
        payload
    }
}
export const getLikesSuccess = (payload) => {
    return {
        type: GET_LIKES_SUCCESS,
        payload
    }
}

export const postUpdated = (payload) => {
    return {
        type: POST_UPDATED_SUCCESS,
        payload
    }
}

export const setLike = (payload) => {
    return{
        type: 'SET_POST_LIKE',
        payload
    }
}
export const unSetLike = (payload) => {
    return{
        type: 'UNSET_POST_LIKE',
        payload
    }
}
