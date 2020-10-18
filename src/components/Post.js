import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import CommentComponent from './comments/Comment'
import Moment from 'react-moment'
import { 
    CommentButton,
    DeleteButton,
    LikeButton,
    EditButton,
    FindUser,

} from './buttons'

import {
    ArrowBackIos, 
    Comment, 
    Delete, 
    Edit, 
} from '@material-ui/icons'

import {
    CountComment,
    CountLikes,
} from './Count'

function Post({posts}) {
    const {  postBody, title, id, date, author } = posts
    const {email} = useSelector(state => state.authReducer.userInfo)
    const {pathname}  = useLocation();
    const history = useHistory()
    const goBackHandle = () => {
        history.goBack()
    }
    return (
        <SinglePost>
            <div className="single-post card" style={{marginBottom: '30px'}}>
                <div className='card-header'>{title}</div>
                <div className='card-body'>
                    {
                        !(email === author) ? 
                            <FindUser className='author' userName={author}>{author}</FindUser>
                            : null
                    }
                    <Moment className='date' format='D MMM YYYY - hh:mm A'>{ 
                        
                        date.hasOwnProperty('nanoseconds') ? 
                            date.toDate() 
                            : date
                    }</Moment>
                    <p>{
                            postBody && postBody.length > 80 ?
                            pathname === '/' || pathname === '/user' || pathname === `/user/${email}` ?  
                                postBody.substr(0, 80) + '...': postBody 
                                : postBody
                    }</p>

                    {
                        pathname === '/' || pathname === '/user' || pathname === `/user/${author}` ? 
                            <Link to={`/post/${id}`} className="btn btn-primary">View</Link> 
                            : <button className="btn btn-primary" onClick={goBackHandle}><ArrowBackIos /></button>
                    }
                    
                    {
                        email === author ? 
                            <div className="float-right">
                                <DeleteButton id={id}><Delete /></DeleteButton>
                                <EditButton posts={posts}><Edit /></EditButton>
                            </div> 
                            : null
                    }   
                </div>
                <div className='card-footer' >
                    <LikeButton postId={id}/>
                    <CountLikes id={id} />

                    <div className="float-right">
                        <CountComment id={id}/>
                        <CommentButton posts={posts}><Comment /></CommentButton>
                    </div> 
                    
                </div>
            </div>
            
            <CommentComponent PostAuthor={author} id={id}/>
        </SinglePost>
    )
}
const SinglePost = styled.div.attrs('single-post')`
    background: 'red';
    margin-bottom: 50px;
    .float-right .btn{
        margin-left: 10px;
    }
    .card-body{
        min-height: 50px;
    }
    .card-footer{
        background: #fff;
        padding-top: 0;
        padding-bottom: 0;
    }
    .card-header{
        font-weight: 500;
        text-transform: capitalize
    }
    .author{
        display: inline-block;
        padding-right: 10px;
        margin-bottom: 5px;
        margin-right: 10px;
        position: relative;
        /* border-right: 1px solid #ddd; */
        opacity: .8;
        color: #1e7e34;
    }
    .date{
        opacity: .8;
        margin-bottom: 5px;
        display: inline-block;
        font-size: 12px;
    }
`
export default Post