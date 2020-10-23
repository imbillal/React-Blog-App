import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import LoadingComponent from './LoadingComponent';
import Post from './Post';
function Posts() {
    const posts = useSelector(state => state.postReducer.posts)
    const {loading} = useSelector(state => state.postReducer)

    if (loading) {
        return (
            <LoadingComponent />
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
