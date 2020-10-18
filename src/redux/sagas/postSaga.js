import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import uuid from 'react-uuid'
import {
    setLike,
    unSetLike,
    postUpdated,

    getPostReq, 
    getLikesReq,
    createPostReq,
    getCommentsReq,
    
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

function* createPostSaga ({payload}){
    try{
        yield put(createPostReq())
        let id = uuid()
        yield call( rsf.firestore.setDocument, `Posts/${id}`, {post: {...payload, id}} );
        yield put(createPostSuccess({...payload, id}))
        console.log(payload.date);
    } catch ( error ){
        yield put(createReqFail(error))
    }
}


function* getPostSaga(){
    try{
        yield put(getPostReq())
        const snapshot = yield call(rsf.firestore.getCollection, 'Posts')
        let posts = [];
        snapshot.forEach( post => {
            posts.push( post.data().post )
        })
        yield put(getPostsSuccess({posts}))
        
    }catch(error){
        yield put(getReqFail(error))
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
        yield put(getCommentsReq())
        let postsIds = []
        payload.posts && payload.posts.map( post => {
            postsIds.push(post.id)
        })

        let comments = []

        for (let index = 0; index < postsIds.length; index++) {
            const snapshot = yield call(rsf.firestore.getCollection, `Posts/${postsIds[index]}/Comments`)
            snapshot.forEach( comment => {
                comments = [...comments, comment.data()]
            })
        }
        return comments ? yield put({type: 'GET_COMMENT_SUCCESS', payload: comments}): null;
    }catch(error){
        yield put(getCommentReqFail(error))
    }
}


function* getPostLikesSaga({payload}){
    try{
        yield put(getLikesReq())
        let postsIds = []
        payload.posts && payload.posts.map( post => {
            postsIds.push(post.id)
        })

        let likes = []

        for (let index = 0; index < postsIds.length; index++) {
            const snapshot = yield call(rsf.firestore.getCollection, `Posts/${postsIds[index]}/Likes`)
            snapshot.forEach( like => {
                likes = [...likes, like.data()]
            })
        }
        return likes ? yield put({type: 'GET_LIKES_SUCCESS', payload: likes}): null;
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
    takeLatest('GET_COMMENTS', getCommentSaga),
    takeLatest('GET_POST_LIKES', getPostLikesSaga),
]