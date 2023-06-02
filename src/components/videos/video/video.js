// Stylesheet
import './video';

function Video({videoData, updateVideo}) {
    const loadNewVideo = () => {
        updateVideo(videoData.title)
    }
    return (
        <div className='video' onClick={loadNewVideo}>
            <img src={videoData.image}/>
            <h3>{videoData.title}</h3>
            <p>{videoData.channel}</p>
        </div>
    )
}
export default Video;