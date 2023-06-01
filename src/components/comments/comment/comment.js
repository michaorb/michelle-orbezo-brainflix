import '../comment/comment.css';

function Comment({commentData}) {
    const date = new Date(commentData.timestamp);
    const formattedDate = date.toLocaleDateString("en-US");
    return (
        <div className="comment">
            <hr />
            <div className='comment__container'>
                <div className="comment__profile-placeholder"></div>
                <div className='comment__content'>
                    <div className="comment__attributes">
                        <h3>{commentData.name}</h3>
                        <p>{formattedDate}</p>
                    </div>
                    <p className="comment__text">{commentData.comment}</p>
                    </div>
            </div>
        </div>
    )
}

export default Comment;