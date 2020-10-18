import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const ModalRoot = document.getElementById('form-modal')

function FormModal({posts, closeModal}) {
    const { title, postBody, date, id, author, like } = posts
    const [editTitle, setEditTitle] = useState(title)
    const [editPostBody, setEditPostBody] = useState(postBody)
    const [updateSuccess, setUpdateSuccess] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        editTitle.trim() && editPostBody.trim() ?
            dispatch( {type: 'UPDATE_POST', payload: {
                title: editTitle,
                postBody: editPostBody,
                date: date,
                id,
                author,
            }}) && setUpdateSuccess(true) 
            : setUpdateSuccess(false);
       

    }
    useEffect( () => {
        if(updateSuccess){
            setEditTitle('')
            setEditPostBody('')
            closeModal()
        }
    },[updateSuccess])
    return ReactDOM.createPortal(
        <ModelWrapper className='modal-wrapper'>
            <div className='modal-content'> 
                <button className='btn closeBtn' onClick={closeModal}>X</button>
                <form onSubmit={ handleSubmit }>
                    <input 
                        type="text"
                        className='form-control'
                        value={editTitle}
                        placeholder= 'Type your title'
                        onChange={ e => setEditTitle(e.target.value)}
                    />
                    
                    <textarea 
                        name=""
                        rows="2"
                        className='form-control'
                        value={editPostBody}
                        placeholder= 'Type your post'
                        onChange={ e => setEditPostBody(e.target.value)}
                    ></textarea>

                    <button type="submit" className='btn btn-primary'>Submit</button>
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

export default FormModal
