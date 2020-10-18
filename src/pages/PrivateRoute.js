import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    const authenticated = useSelector(state => state.authReducer.authenticated)
    
    return (
        <Route {...rest} render={props => (
            authenticated ?  <Component {...props} />:<Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute
