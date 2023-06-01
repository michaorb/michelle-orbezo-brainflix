import React from 'react';
import Comment from './comment/comment';

function Comments({commentsArray}) {
    const componentsArray = commentsArray.map((value) => {
        return <Comment commentData={value}/>;
    })
    return (
        <div>
            {componentsArray}
        </div>
    )
}

export default Comments;