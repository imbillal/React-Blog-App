import React, { Fragment } from 'react'
import { useState } from 'react'
import FormModal from '../modal/FormModal'

const ModalRoot = document.getElementById('portal-root')

function EditButton({posts, children}) {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <Fragment>
            <button 
                className='btn edit-btn btn-primary'  
                onClick={()=> handleClick(posts.id)}
            >
                {children}
            </button>

            {
                showModal ? 
                    <FormModal posts={posts} closeModal={closeModal} /> 
                    : null
            }
            
        </Fragment>
    )
}

export default EditButton