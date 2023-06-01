import React from "react";
import Hero from "components/hero/hero";
import Description from "components/description/description";
import Comments from "components/comments/comments";
import CommentForm from "components/comment-form/comment-form";
import { useState } from "react";
import data from 'data/video-details.json';

function Body () {
    const [videoDetails, setVideoDetails] = useState(data[0]);
    return (
        <div>
            <Hero videoDetails={videoDetails}/>
            <Description videoDetails={videoDetails}/>
            <CommentForm />
            <Comments commentsArray={videoDetails.comments}/>
        </div>
    )
}

export default Body;