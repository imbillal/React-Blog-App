import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import Navigation from './Navigation'
import Post from './Post'
function Profile() {
    const {userName} = useParams()
    const {photoURL, displayName, email} = useSelector(state => state.authReducer.userInfo)
    const posts = useSelector(state => state.postReducer.postInfo.posts)
    return (
        <>
            <Navigation />
            <div className="container">
                <div className="user-img">
                    <img src={
                        photoURL ? photoURL : 
                        'https://via.placeholder.com/150/EEEEEE/808080%20?Text=Digital.com%20C/O%20https://placeholder.com'
                    } />
                </div>
                <p className="name">
                    {
                        displayName ? displayName : email
                    }
                </p>
                <div className="row">
                    {
                        posts && posts.map( post => {
                            if(post.author === email){
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

export default Profile
