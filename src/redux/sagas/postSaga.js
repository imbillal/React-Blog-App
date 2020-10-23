import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import uuid from 'react-uuid'
import {
    setLike,
    unSetLike,
    postUpdated,

    getReqFail, 
    deleteReqFail,
    createReqFail, 
    getLikesReqFail,
    getCommentReqFail,

    getPostsSuccess, 
    deletePostSuccess, 
    createPostSuccess, 
    createCommentSuccess,
    
} from '../actions/postAction'
import  rsf  from '../../config'
import { GET_COMMENTS, GET_COMMENT_SUCCESS, GET_LIKES_SUCCESS, GET_POST_LIKES, GET_POST_SUCCESS } from '../actionTypes'

function* createPostSaga ({payload}){
    try{
        let id = uuid()
        yield call( rsf.firestore.setDocument, `Posts/${id}`, {post: {...payload, id}} );
        yield put(createPostSuccess({...payload, id}))
    } catch ( error ){
        yield put(createReqFail(error))
    }
}


function* getPostSaga(){
    try{
        const snapshot = yield call(rsf.firestore.getCollection, 'Posts')
        let posts = [];
        let postsIds = []
        snapshot.forEach( post => {
            posts = [...posts, post.data().post]
            postsIds = [...postsIds, post.data().post.id]
        })
        yield put({type: GET_POST_SUCCESS, payload: posts })
        yield put({type: GET_POST_LIKES, payload: postsIds })
        yield put({type: GET_COMMENTS, payload: postsIds })
        
    }catch(error){
        yield put(getReqFail(error))
        console.log(error);
    }
}


function* deletePostSaga ({payload}){
    try{
        yield call(rsf.firestore.deleteDocument, `Posts/${payload}`)
        yield put(deletePostSuccess(payload))
        
    }catch(error) {
        yield put(deleteReqFail(error))
    }
}


function* updatePostSaga({payload}){
   try{
        yield call(rsf.firestore.updateDocument, `Posts/${payload.id}`, 'post', payload);
        yield put(postUpdated(payload))
   } catch( error ){
       console.log(error);
   }
}


function* setLikeSaga({payload}){
    try{
        let id = uuid()
        yield call( rsf.firestore.setDocument, `Posts/${payload.postId}/Likes/${id}`, {...payload, docId: id} );
        yield put (setLike({...payload, docId: id}))
        
    } catch(error){
        console.log(error);
    }
}


function* unSetLikeSaga({payload}){
    try{
        yield call( rsf.firestore.deleteDocument, `Posts/${payload.postId}/Likes/${payload.docId}` );
        yield put (unSetLike(payload.docId))
    } catch(error){
        console.log(error);
    }
}

function* setCommentSaga({payload}){
    try{
        
        let id = uuid()
        yield call( rsf.firestore.setDocument, `Posts/${payload.id}/Comments/${id}`, {...payload, docId: id} );
        yield put(createCommentSuccess(payload))
    }catch(error){
        console.log(error);
    }
}

function* getCommentSaga({payload}){
    try{
        let comments = []
        for (let index = 0; index < payload.length; index++) {
            const snapshot = yield call(rsf.firestore.getCollection, `Posts/${payload[index]}/Comments`)
            snapshot.forEach( comment => {
                comments = [...comments, comment.data()]
            })
        }
        yield put({type: GET_COMMENT_SUCCESS, payload: comments})
    }catch(error){
        yield put(getCommentReqFail(error))
    }
}


function* getPostLikesSaga({payload}){
    try{
        let likes = []
        for (let index = 0; index < payload.length; index++) {
            const snapshot = yield call(rsf.firestore.getCollection, `Posts/${payload[index]}/Likes`)
            snapshot.forEach( like => {
                likes = [...likes, like.data()]
            })
        }
        return likes ? yield put({type: GET_LIKES_SUCCESS, payload: likes}): null;
    }catch(error){
        yield put(getLikesReqFail(error))
    }
}


export default [
    takeLatest('CREATE_POST', createPostSaga),
    takeLatest('DELETE_POST', deletePostSaga),
    takeLatest('GET_POSTS', getPostSaga),
    takeLatest('UPDATE_POST', updatePostSaga),
    takeLatest('LIKE_POST', setLikeSaga),
    takeLatest('UNLIKE_POST', unSetLikeSaga),
    takeLatest('SET_COMMENT', setCommentSaga),
    takeLatest(GET_COMMENTS, getCommentSaga),
    takeLatest(GET_POST_LIKES, getPostLikesSaga),
]