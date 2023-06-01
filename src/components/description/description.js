import React from 'react';
// Icon File Import
import ViewsIcon from 'assets/icons/views.svg';
import LikesIcon from 'assets/icons/likes.svg';
// Stylesheet Import
import './description.css';

function Description({videoDetails}) {
    const date = new Date(videoDetails.timestamp);
    const formattedDate = date.toLocaleDateString("en-US");
    return (
        <div className='description'>
            <h1>{videoDetails.title}</h1>
            <hr />
            <div className='description__tablet-bp'>
                <div className='description__attributes'>
                    <p>By {videoDetails.channel}</p>
                    <time>{formattedDate}</time>
                </div>
                <div className='description__icons'>
                    <div className='icons__views'>
                        <img src={ViewsIcon} alt='Views Icon' />
                        <p>{videoDetails.views}</p>
                    </div>
                        <div className='icons__likes'>
                        <img src={LikesIcon} alt='Likes Icons' />
                        <p>{videoDetails.likes}</p>
                    </div>
                    </div>
            </div>
            <hr />
            <p>{videoDetails.description}</p>
            <p>3 Comments</p>
        </div>
    )
}

export default Description;