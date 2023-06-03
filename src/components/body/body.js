import React from "react";
import Hero from "components/hero/hero";
import Description from "components/description/description";
import Comments from "components/comments/comments";
import CommentForm from "components/comment-form/comment-form";
import Videos from "components/videos/videos";
import { useState } from "react";
import videoInfo from 'data/video-details.json';
import videosArray from 'data/videos.json'

//Stylesheet
import './body.css';

function Body () {
    const [videoDetails, setVideoDetails] = useState(videoInfo[0]);
    const [videos, setVideos] = useState(videosArray);
    const updateVideo = (title) => {
        const index = videoInfo.findIndex(value => {
            return title === value.title;
        })
        setVideoDetails(videoInfo[index]);
    };
    const filterOutCurrentVideo = videos.filter((currentVideo) => {
        return currentVideo.title != videoDetails.title
    })
    return (
        <div className="body">
            <Hero videoDetails={videoDetails}/>
            <div className="body__container">
                <div className="body__video-data">
                    <Description videoDetails={videoDetails}/>
                    <CommentForm />
                    <Comments commentsArray={videoDetails.comments}/>
                </div>
                <Videos videosArray={filterOutCurrentVideo} updateVideo={updateVideo}/>
            </div>
        </div>
    )
}

export default Body;