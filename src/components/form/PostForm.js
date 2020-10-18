import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Navigation from '../Navigation'

function PostForm() {
    const [title, setTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [postSuccess, setPostSuccess] = useState(false)
    const {email} = useSelector(state => state.authReducer.userInfo)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleSubmit = e =>{
        e.preventDefault()
        title.trim() && postBody.trim() ?
        dispatch({ type: "CREATE_POST", payload: { 
            title,
            postBody,
            author: email,
            likes: [],
            date: new Date()
      
         }}) && setPostSuccess(true) : setPostSuccess(false);

    }
    useEffect( () => {
        if(postSuccess){
            setPostBody('')
            setTitle('')
            history.goBack()
        }
    },[postSuccess])
    return (
        <>
            <Navigation />
            <Wrapper className="container">
                <div className="row justify-content-center">
                    <div className='col-sm-8'>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                className='form-control'
                                value={title}
                                placeholder= 'Type your title'
                                onChange={ e => setTitle(e.target.value)}
                            />
                            
                            <textarea 
                                name=""
                                rows="2"
                                className='form-control'
                                value={postBody}
                                placeholder= 'Type your post'
                                onChange={ e => setPostBody(e.target.value)}
                            ></textarea>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.div.attrs('container')`
    input,textarea{
        margin-bottom: 10px;
    }
`
export default PostForm
