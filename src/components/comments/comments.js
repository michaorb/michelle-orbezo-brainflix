import React from 'react';
import Comment from './comment/comment';

function Comments({commentsArray}) {
    return (
        <div>
            <Comment commentData={commentsArray[0]}/>
            <Comment commentData={commentsArray[1]}/>
            <Comment commentData={commentsArray[2]}/>
        </div>
    )
}

export default Comments;