// Stylesheet
import './video';

function Video({videoData, updateVideo}) {
    const loadNewVideo = () => {
        updateVideo(videoData.title)
    }
    return (
        <div className='video' onClick={loadNewVideo}>
            <img className='video__thumbnail' src={videoData.image}/>
            <div className='video__info'>
                <h3>{videoData.title}</h3>
                <p>{videoData.channel}</p>
            </div>
        </div>
    )
}
export default Video;