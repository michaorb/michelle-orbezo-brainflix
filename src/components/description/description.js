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
                    <h3 className='description__bolded'>By {videoDetails.channel}</h3>
                    <p className='description__date'><time>{formattedDate}</time></p>
                </div>
                <div className='description__icons'>
                    <div className='description__views'>
                        <img src={ViewsIcon} alt='Views Icon' />
                        <p>{videoDetails.views}</p>
                    </div>
                        <div className='description__likes'>
                        <img src={LikesIcon} alt='Likes Icons' />
                        <p>{videoDetails.likes}</p>
                    </div>
                    </div>
            </div>
            <hr />
            <p className='description__text'>{videoDetails.description}</p>
            <h3 className='description__bolded'>{videoDetails.comments.length} Comments</h3>
        </div>
    )
}

export default Description;