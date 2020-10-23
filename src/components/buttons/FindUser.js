import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function FindUser({children, userName, className}) {
    const {email} = useSelector(state => state.authReducer.userInfo)
    return (
        <>
            <Link 
                to={ 
                    email === userName ? `/me` 
                    : `/user/${userName}`
                }
                className={className ? className: null}
            >
                {children}
            </Link>
        </>
    )
}

export default FindUser
