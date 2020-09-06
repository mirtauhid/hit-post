import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import Header from '../Header/Header';
import './Home.css'
import Banner from '../Banner/Banner';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/posts`;
    useEffect(() => {
        axios.get(url)
            .then(data => {
                const postData = data.data;
                setPosts(postData)
            })
    }, [])

    return (
        < div className="homePage">
            <Header></Header>
            <Banner></Banner>
            <div className="allPosts">
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </div>
        </div >
    );
};

export default Home;