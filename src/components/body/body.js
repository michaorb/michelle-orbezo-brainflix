import React from "react";
import Hero from "components/hero/hero";
import Description from "components/description/description";
import Comments from "components/comments/comments";
import CommentForm from "components/comment-form/comment-form";
import Videos from "components/videos/videos";
import { useState } from "react";
import videoInfo from 'data/video-details.json';
import videos from 'data/videos.json'

// CSS Stylesheets
import './body.css';

function Body () {
    const [videoDetails, setVideoDetails] = useState(videoInfo[0]);
    return (
        <div>
            <Hero videoDetails={videoDetails}/>
            <Description videoDetails={videoDetails}/>
            <CommentForm />
            <Comments commentsArray={videoDetails.comments}/>
            <Videos videosArray={videos}/>
        </div>
    )
}

export default Body;