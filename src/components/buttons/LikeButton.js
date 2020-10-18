import React, { useEffect, useState } from 'react'
import {IconButton, Tooltip  } from '@material-ui/core';
import {AddAlarm, ThumbUp, ThumbDown } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux';

function LikeButton({postId}) {

    const likes = useSelector(state => state.postReducer.likes)
    const {email} = useSelector(state => state.authReducer.userInfo)

    let docId = ''
    let liked = false
    const singlePostLikes = []
    likes.map( item => {
        if(item.postId === postId) {
            singlePostLikes.push(item)
        }
    })
    singlePostLikes.length > 0 && singlePostLikes.map( item => {
        if(item.email === email){
            docId = item.docId
            liked = true
        }
    })
    const dispatch = useDispatch()
    const likePost = () => {
        dispatch({type:"LIKE_POST", payload: {postId, email}})
    }
    const unlikePost = () => {
        dispatch({type:"UNLIKE_POST", payload: {postId, email, docId}})
    }
    
    let setButtonMarkup = liked ? (
        <ThumbUp style={{ color: 'blue' }}/>
    ): (
        <ThumbUp style={{ color: 'gray' }}/>
    )
    return (
        <>
            <IconButton onClick={ liked ? unlikePost : likePost} >
                {setButtonMarkup}
            </IconButton>
        </>
    )
}

export default LikeButton
