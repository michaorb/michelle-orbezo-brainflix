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
                <div className='form__input'>
                    <textarea rows='5' name='comment' className='form__comment' placeholder='Add new comment'/>
                    <button type='submit'>Comment</button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;