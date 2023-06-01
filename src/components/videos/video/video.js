// Stylesheet
import './video';

function Video({videoData}) {
    return (
        <div>
            <img src={videoData.image}/>
            <h3>{videoData.title}</h3>
            <p>{videoData.channel}</p>
        </div>
    )
}
export default Video;