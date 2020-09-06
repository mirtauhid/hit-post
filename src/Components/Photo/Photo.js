import React from 'react';
import './Photo.css'

const Photo = (props) => {
    console.log(props.photo.picture.medium);



    return (
        <div className="photoRound">
            <img src={props.photo.picture.medium} alt="" />
        </div>
    );
};

export default Photo;