import { call, fork, put, takeLatest } from 'redux-saga/effects'
import  rsf  from '../../config'
import { 
    loginFail,
    signUpFail,
    setAuthFail,
    
    loginSuccess,
    setAuthSuccess,
} from '../actions/AuthAction'
import { GET_POSTS, SET_AUTHENTICATION } from '../actionTypes';

function* userSignupSaga({payload}){
    try{
        yield call(rsf.auth.createUserWithEmailAndPassword, payload.email, payload.password);
    } catch(error){
        yield put(signUpFail(error.message))
    }
}

function* userLoginSaga({payload}){
    try{
        const userInfo = yield call(rsf.auth.signInWithEmailAndPassword, payload.email, payload.password);
        localStorage.setItem("user", JSON.stringify( userInfo.user));
        yield put(loginSuccess(userInfo.user));
        yield put({type: SET_AUTHENTICATION})
    } catch(error){
        yield put(loginFail(error.message))
    }
}

function* userLogoutSaga(){
    try{
        yield call(rsf.auth.signOut);
        localStorage.removeItem("user");
        yield put(setAuthSuccess(false))
    }catch(error){
        yield put(setAuthFail(error))
    }
}

function* setAuthSaga(){
    try{
        let user = JSON.parse( localStorage.getItem('user') )
        if(user){
            yield put(loginSuccess(user))
            yield put({type: GET_POSTS})
        }
    }catch(error){
        yield put(setAuthFail(error))
    }
}

export default [
    takeLatest('SIGNuP', userSignupSaga),
    takeLatest('LOGIN', userLoginSaga),
    takeLatest('LOGOUT', userLogoutSaga),
    takeLatest('SET_AUTHENTICATION', setAuthSaga),
]