import React from 'react'
import { useSelector } from 'react-redux'

function CountComment({id}) {
    const comments = useSelector(state => state.postReducer.comments)
    const singlePostComments = []
    comments.map( comment => {
        return comment.id === id ? singlePostComments.push(comment) : null
    })
    return (
        <>
            {
                singlePostComments && singlePostComments.length > 0 ? 
                    <span className='count-comments'>{singlePostComments.length}</span>
                    : null
            }
        </>
    )
}

export default CountComment
