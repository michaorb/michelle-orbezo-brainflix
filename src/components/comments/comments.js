import React from 'react';
import Comment from './comment/comment';

// Stylesheet
import '../comments/comments.css';

function Comments({commentsArray}) {
    const componentsArray = commentsArray.map((value) => {
        return <Comment commentData={value}/>;
    })
    return (
        <div className='comments'>
            <hr />
            {componentsArray}
        </div>
    )
}

export default Comments;