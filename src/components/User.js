import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import styled from 'styled-components';
import Navigation from './Navigation'
import Post from './Post'
function User() {
    const {userName} = useParams()
    const {photoURL, displayName, email} = useSelector(state => state.authReducer.userInfo)
    const posts = useSelector(state => state.postReducer.postInfo.posts)
    return (
        <>
            <Navigation />
            <div className="container">
                <UserInfo className="user-info">
                    <h3 className="name">User Email: { userName }</h3>
                </UserInfo>
                <div className="row">
                    {
                        posts && posts.map( post => {
                            if(post.author === userName){
                                return (
                                    <div className="col-sm-6" key={post.id}>
                                        <Post posts={post} />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

const UserInfo = styled.div.attrs('user-info')`
    margin-bottom: 50px;

`
export default User
