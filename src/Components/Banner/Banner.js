import React from 'react';
import banner from '../../images/banner2.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="bannerImage">
            <img src={banner} alt="" />
            <h1 className="textCenter">HIT POST</h1>
        </div>
    );
};

export default Banner;