import React, { useEffect } from 'react'
import { PostForm, User, ViewSinglePost, Profile }  from '../components';
import { Dashboard, Login, SignUp, PrivateRoute } from './';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function PageRoute() {
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch({type: 'SET_AUTHENTICATION'})
    },[])
    return (
        <div>
           <Router>
                <Switch>
                    <Route path='/login' component={Login} exact />
                    <Route path="/signup" component={SignUp} exact/>
                    <PrivateRoute path='/' component={Dashboard} exact/>
                    <Route path="/post/:postId" component={ ViewSinglePost } exact/>
                    <Route path="/me" component={Profile} exact/>
                    <Route path="/user/:userName" component={User} exact/>
                    <Route path="/create-post" component={PostForm} exact/>
                </Switch>
           </Router> 
        </div >
    )
}

export default PageRoute
