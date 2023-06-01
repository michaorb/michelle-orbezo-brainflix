function Comment({commentData}) {
    const date = new Date(commentData.timestamp);
    const formattedDate = date.toLocaleDateString("en-US");
    return (
        <div>
            <h3>{commentData.name}</h3>
            <h4>{formattedDate}</h4>
            <p>{commentData.comment}</p>
        </div>
    )
}

export default Comment;