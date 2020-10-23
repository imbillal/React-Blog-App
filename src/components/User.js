import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import styled from 'styled-components';
import Navigation from './Navigation'
import Post from './Post'
function User() {
    const {userName} = useParams()
    const {photoURL, displayName, email} = useSelector(state => state.authReducer.userInfo)
    const posts = useSelector(state => state.postReducer.posts)
    return (
        <>
            <Navigation />
            <Wrapper className="container">
                <div className="user-information">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="user-img">
                                <img src={
                                    photoURL ? photoURL : 
                                    'https://via.placeholder.com/150/EEEEEE/808080%20?Text=Digital.com%20C/O%20https://placeholder.com'
                                } />
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td scope="col">Name:</td>
                                        <td scope="col">{ displayName ? displayName: 'null' }</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Email:</td>
                                        <td>{userName}</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Website:</td>
                                        <td>null</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        posts && posts.map( post => {
                            if(post.author === userName){
                                return (
                                    <div className="col-sm-6" key={post.id}>
                                        <Post posts={post} />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div.attrs('container')`
    .user-information{
        padding: 20px;
        border: 1px solid #dee2e6;
        border-radius: 5px;
        margin-bottom: 30px;
    }
    table{
        border: 1px solid #dee2e6;
        border-radius: 5px;
    }
    tr:first-child{
        border-top: none;
    }
    td:first-child{
        max-width: 30px;
    }

`
export default User
