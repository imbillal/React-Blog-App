import { call, fork, put, takeLatest } from 'redux-saga/effects'
import  rsf  from '../../config'
import { 
    loginReq,
    signUpReq,
    setAuthReq,

    loginFail,
    signUpFail,
    setAuthFail,
    
    loginSuccess,
    setAuthSuccess,
} from '../actions/AuthAction'

function* userSignupSaga({payload}){
    try{
        yield put(signUpReq())
        yield call(rsf.auth.createUserWithEmailAndPassword, payload.email, payload.password);
    } catch(error){
        yield put(signUpFail(error.message))
    }
}

function* userLoginSaga({payload}){
    try{
        yield put(loginReq())
        const userInfo = yield call(rsf.auth.signInWithEmailAndPassword, payload.email, payload.password);
        localStorage.setItem("user", JSON.stringify( userInfo.user));
        yield put(loginSuccess(userInfo.user));
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
        yield put(setAuthReq())
        let user = JSON.parse( localStorage.getItem('user') )
        if(user){
            yield put(setAuthSuccess(true))
            yield put(loginSuccess(user))
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