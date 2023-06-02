import Video from "./video/video";

// Stylesheet
import './videos.css';

function Videos({videosArray, updateVideo}) {
    const videoComponentsArray = videosArray.map((video) => {
        return (
            <Video videoData={video} updateVideo={updateVideo}/>
        )
    })
    return (
        <div className="videos">
            <h2>Next Videos</h2>
            {videoComponentsArray}
        </div>
    )
}

export default Videos;