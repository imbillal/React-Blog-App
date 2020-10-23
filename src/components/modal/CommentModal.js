import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const ModalRoot = document.getElementById('comment-modal')

function CommentModal({posts, closeModal}) {
    const { author, id, like } = posts
    const {email} = useSelector(state => state.authReducer.userInfo)
    const [comment, setComment] = useState('')
    const [commentSuccess, setCommentSuccess] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        comment.trim() ?
            dispatch( {type: 'SET_COMMENT', payload: {
                comment,
                author: email,
                id
            }}) && setCommentSuccess(true) 
            : setCommentSuccess(false);
    }
    useEffect( () => {
        if(commentSuccess){
            setComment('')
            closeModal()
        }
    },[commentSuccess])

    return ReactDOM.createPortal(
        <ModelWrapper className='modal-wrapper'>
            <div className='modal-content'> 
                <button className='btn closeBtn' onClick={closeModal}>X</button>
                <form onSubmit={ handleSubmit }>
                    <textarea 
                        name=""
                        rows="4"
                        className='form-control'
                        value={comment}
                        placeholder= 'Type your comment'
                        onChange={ e => setComment(e.target.value)}
                    ></textarea>
                    <button type="submit" className='btn btn-primary'>Comment</button>
                </form>
            </div>

        </ModelWrapper>,
        ModalRoot
    )
}

const ModelWrapper = styled.div.attrs('modal-wrapper')`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    .modal-content{
        position: relative;
        max-width: 600px;
        margin: 30px auto;
        padding: 20px;
        display: inline-block;
        left: 50%;
        transform: translateX(-50%);
    }
    .closeBtn{
        float: right;
        color: red;
        font-weight: bold;
    }
    input,textarea{
        margin-bottom: 10px;
    }
`

export default CommentModal
