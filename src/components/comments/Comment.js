import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import FindUser from '../buttons/FindUser'

function CommentComponent({id, PostAuthor}) {
    const comments = useSelector(state => state.postReducer.comments)
    const singlePostComments = []
    const {pathname}  = useLocation();
    comments.map( comment => {
        return comment.id === id ? 
            singlePostComments.push(comment) 
            : null
    })
    const viewFullCommentSection = () => {
        return (
            <>
                {
                    singlePostComments.length ? 
                        <h4>Comments</h4> 
                        : null
                }
                {
                    singlePostComments.map((comment,index) => (
                        <SingleComment key={comment.docId} className='single-comment' >
                            <FindUser className='commentator' userName={comment.author}>{comment.author}</FindUser>
                            <p>{comment.comment}</p>
                        </SingleComment>
                    ))
                }
            </>
        )
    }

    const viewMinimizeCommentSection = () => {
        return (
            <>
                {
                    singlePostComments.length ? 
                        <strong>Comments</strong> 
                        : null
                }
                {
                    singlePostComments.map((comment,index) => (
                        index <= 1 ? 
                            <SingleComment key={comment.docId} className='single-comment' >
                                <FindUser className='commentator' userName={comment.author}>{comment.author}</FindUser>
                                <p>{comment.comment}</p>
                            </SingleComment>
                            : null
                        
                    ))
                }
            </>
        )
    }

    return pathname === '/' ? 
            null
            : pathname === '/me' || pathname === `/user/${PostAuthor}`  ?
            viewMinimizeCommentSection()
            :viewFullCommentSection()
}
const SingleComment = styled.div.attrs('single-comment')`
    border-bottom: 1px solid #ddd;
    padding: 10px 20px;

    p{
        margin: 0;
    }
    :last-child{
        border-bottom: none;
    }
`
export default CommentComponent
