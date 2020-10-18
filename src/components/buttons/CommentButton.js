import { IconButton } from '@material-ui/core'
import React, { Fragment } from 'react'
import { useState } from 'react'
import CommentModal from '../modal/CommentModal'

function CommentButton({posts, children}) {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <Fragment>
            <IconButton 
                onClick={()=> handleClick(posts.id)}
            >
                {children}
            </IconButton>

            {
                showModal ? 
                    <CommentModal posts={posts} closeModal={closeModal} /> 
                    : null
            }
            
        </Fragment>
    )
}

export default CommentButton