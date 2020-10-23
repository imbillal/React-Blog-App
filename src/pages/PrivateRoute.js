import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    const dispatch = useDispatch()
    const {authenticated} = useSelector(state => state.authReducer)
    let user = localStorage.getItem('user')
    return (
        <Route {...rest} render={props => (
            user ?  <Component {...props} />:<Redirect to="/login" />
        )} />
    );
};

export default React.memo( PrivateRoute)
