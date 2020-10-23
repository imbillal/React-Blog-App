import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Navigation, PostForm, Posts} from '../components'
import User from '../components/User'

function Dashboard() {
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.authReducer)
    return (
        <div>
            <Navigation />
            <Container>
                <Posts />
            </Container>
        </div>
    )
}

export default Dashboard
