import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const {error, authenticated} = useSelector(state => state.authReducer)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'LOGIN', payload: {email,password}})
    }
    useEffect( () => {
        if(!error){
            setEmail('')
            setPassword('')
        }
    },[error])
    if(authenticated){
        history.push(('/'))
    }
    return (
        <>
        <Wrapper className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6">

                    <form onSubmit={handleSubmit}>
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
                            placeholder='Type Password'
                            onChange={ e => setPassword(e.target.value)}
                        />
                        <button type='submit' className='btn btn-primary'>Login</button>
                    </form>
                    <p>Don't have any account? Please<Link to="/signup"> Sign up</Link></p>
                    {
                        error ? <p>{error}</p> : null
                    }
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
export default Login
