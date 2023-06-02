import React, { useState } from 'react';

import '../comment-form/comment-form.css'

function CommentForm() {
    return (
        <div className='form'>
            <div className='form__profile-placeholder'>
            </div>
            <form className='form__container'>
                <label for='comment'><h2>Join the Conversation</h2></label>
                <br/>
                <textarea rows='5' name='comment' className='form__comment' placeholder='Add new comment'/>
                <br />
                <button type='submit'>Comment</button>
            </form>
        </div>
    )
}

export default CommentForm;