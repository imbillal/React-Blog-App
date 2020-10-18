import React from 'react'
import { useSelector } from 'react-redux'

function CountLikes({id}) {
    const likes = useSelector(state => state.postReducer.likes)
    const singlePostLikes = []
    likes.map( like => {
        return like.postId === id ? singlePostLikes.push(like) : null
    })
    return (
        <>
            {
                singlePostLikes && singlePostLikes.length > 0 ? 
                    <span className='count-likes'>{singlePostLikes.length}</span>
                    : null
            }
        </>
    )
}

export default CountLikes
