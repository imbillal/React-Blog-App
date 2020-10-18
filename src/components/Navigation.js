import React from 'react'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function Navigation() {
    const dispatch = useDispatch()
    const {email} = useSelector(state => state.authReducer.userInfo)
    const handleClick = () => {
        dispatch({type: 'LOGOUT'})
    }
    return (
        <Wapper>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link className="navbar-brand" to="/">React Blog App</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav >
                        <Nav>
                            <Link className="nav-link" to='/'>home</Link>
                            <Link className="nav-link" to='/create-post'>create post</Link>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className='btn-success'>
                                    {email}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link to={`/user`} className='dropdown-item'>Profile</Link>
                                    <Link to='/login' className='dropdown-item text-danger' onClick={ handleClick }>logout</Link>
                                </Dropdown.Menu>
                                </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Wapper>
    )
}

const Wapper = styled.section`
    margin-bottom: 30px;

    .nav-link{
        text-transform: capitalize;
        font-size: 18px;
    }
    .dropdown{
        margin-left: 10px;
    }
`
export default Navigation
