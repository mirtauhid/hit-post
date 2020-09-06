import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import axios from 'axios';
import './Comments.css'

const Comments = (props) => {
    console.log(props);
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const url = `https://randomuser.me/api/?results=1`;
        axios.get(url)
            .then(data => {
                setPhotos(data.data.results);
            })
    }, [])


    return (
        <div className="commentBox">

            <div className="flexStyle">
                <div>
                    {
                        photos.map(photo => <Photo photo={photo}></Photo>)
                    }
                </div>
                <div className="commentSection">
                    <h3>{props.comment.name}</h3>
                    <p>{props.comment.body}</p>
                </div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default Comments;