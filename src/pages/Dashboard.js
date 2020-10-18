import React from 'react'
import { Container } from 'react-bootstrap'
import {Navigation, PostForm, Posts} from '../components'
import User from '../components/User'

function Dashboard() {
    return (
        <div>
            <Navigation />
            <Container>
                {/* <PostForm /> */}
                <Posts />
            </Container>
        </div>
    )
}

export default Dashboard
