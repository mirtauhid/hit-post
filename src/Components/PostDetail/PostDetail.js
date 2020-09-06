import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comments from '../Comments/Comments';
import './PostDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header'

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        axios.get(url)
            .then(data => {
                setPost(data.data);
            })
    }, [])

    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        axios.get(url)
            .then(data => {
                setComments(data.data);
            })
    }, [])


    return (
        <div >
            <Header></Header>
            <div className="postSection">
                <h2>{post.title}</h2>
                <br />
                <p><FontAwesomeIcon icon={faQuoteLeft} />  {post.body}  <FontAwesomeIcon icon={faQuoteRight} /></p>
            </div>
            <h1 style={{ margin: '15px' }}>{comments.length} Comments </h1>
            <div>
                {
                    comments.map(comment => <Comments comment={comment}></Comments>)
                }
            </div>

        </div>
    );
};

export default PostDetail;