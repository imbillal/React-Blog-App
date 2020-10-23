import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router'
import Post from './Post'
import Navigation from './Navigation'
import LoadingComponent from './LoadingComponent'

function ViewSinglePost() {
    const state = useSelector(state => state.postReducer.posts)
    const { postId } = useParams()
    const {loading} = useSelector(state => state.postReducer)
    
    if (loading) {
        return (
            <LoadingComponent />
        )
    }
    return (
        <>
            <Navigation />
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-sm-10'>
                        {
                            state && state.map(post => {
                                return post.id === postId ? 
                                <Post key={post.id} posts={post} />
                            : null
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewSinglePost
