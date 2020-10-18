import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

function SignUp() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const {authenticated} = useSelector(state => state.authReducer)
    const history = useHistory()
    if(authenticated){
        history.push(('/'))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'SIGNuP', payload: {name,username,email,password}})
        setName('')
        setUsername('')
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <Wrapper className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6">

                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                value={name}
                                className='form-control'
                                placeholder='Type your name'
                                onChange={ e => setName(e.target.value)}
                            />

                            <input 
                                type="text"
                                value={username}
                                className='form-control'
                                placeholder='Type username'
                                onChange={ e => setUsername(e.target.value)}
                            />
                            <input 
                                type="email"
                                value={email}
                                className='form-control'
                                placeholder='Type your email'
                                onChange={ e => setEmail(e.target.value)}
                            />

                            <input 
                                type="password"
                                value={password}
                                className='form-control'
                                placeholder='Type password'
                                onChange={ e => setPassword(e.target.value)}
                            />
                            <button type='submit' className='btn btn-primary'>Signup</button>
                        </form>
                        <p>Allready have an accout? <Link to="/login"> Login </Link></p>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div.attrs('container')`
    margin-top: 50px;
    input,textarea{
        margin-bottom: 10px;
    }
`

export default SignUp
