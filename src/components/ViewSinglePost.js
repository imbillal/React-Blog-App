import React from 'react'
import { useSelector } from 'react-redux'
import { useParams} from 'react-router'
import Post from './Post'
import Navigation from './Navigation'

function ViewSinglePost() {
    const state = useSelector(state => state.postReducer.postInfo.posts)
    const { postId } = useParams()
    const {loading} = useSelector(state => state.postReducer)

    if (loading) {
        return (
            <>
                <Navigation />
                <h3 className="loading text-center">Loading......</h3>
            </>
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
