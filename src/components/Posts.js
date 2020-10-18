import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post';
function Posts() {
    const posts = useSelector(state => state.postReducer.postInfo.posts)
    const {loading} = useSelector(state => state.postReducer)

    if (loading) {
        return (
            <h3 className="loading text-center">Loading......</h3>
        )
    }
    return (
        <>
            <div className='row '>
                {
                    posts && posts.map( posts => {
                        return (
                            <div className="col-sm-6" key={posts.id}>
                                <Post posts={posts} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Posts
