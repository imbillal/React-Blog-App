import React from 'react'
import { useDispatch } from 'react-redux'

function DeleteButton({id, children}) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({type: 'DELETE_POST', payload: id})
    }
    return (
        <>
            <button 
                className='btn delete-btn btn-danger'  
                onClick={()=> handleClick(id)
            }>
                {children}
            </button>
        </>
    )
}

export default DeleteButton
