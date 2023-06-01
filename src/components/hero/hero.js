import React from 'react';
// Stylesheet Import
import './hero.css';

function Hero({videoDetails}) {
    return (
        <video controls poster={videoDetails.image}>
        </video>
    )
};

export default Hero;