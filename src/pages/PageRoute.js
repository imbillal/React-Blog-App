import React, { useEffect } from 'react'
import { PostForm, User, ViewSinglePost, Profile }  from '../components';
import { Dashboard, Login, SignUp, PrivateRoute } from './';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function PageRoute() {
    // const posts = useSelector(state => state.postReducer.postInfo.posts)
    // const dispatch = useDispatch()
    // dispatch({type: 'SET_AUTHENTICATION'})
    // dispatch({type: 'GET_POSTS'})
     
    // useEffect( () => {
    //     dispatch({type: 'GET_COMMENTS', payload: {posts}})
    //     dispatch({type: 'GET_POST_LIKES', payload: {posts}})
    // },[])


    const posts = useSelector(state => state.postReducer.postInfo.posts)
    const dispatch = useDispatch()
    dispatch({type: 'SET_AUTHENTICATION'})
    
    useEffect( () => {
        dispatch({type: 'GET_POSTS'})
    },[])
    useEffect( () => {
        dispatch({type: 'GET_POST_LIKES', payload: {posts}})
        dispatch({type: 'GET_COMMENTS', payload: {posts}})
    },[posts])

    return (
        <div>
           <Router>
                <Switch>
                    <Route path='/login' component={Login} exact />
                    <Route path="/signup" component={SignUp} exact/>
                    <PrivateRoute path='/' component={Dashboard} exact/>
                    <Route path="/post/:postId" component={ ViewSinglePost } exact/>
                    <Route path="/user" component={Profile} exact/>
                    <Route path="/user/:userName" component={User} exact/>
                    <Route path="/create-post" component={PostForm} exact/>
                </Switch>
           </Router> 
        </div >
    )
}

export default React.memo(PageRoute)
