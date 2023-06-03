import React, { useState } from 'react';
import ProfileThumbnail from '../../assets/images/Mohan-muruge.jpg';

import '../comment-form/comment-form.css'

function CommentForm() {
    return (
        <div className='form'>
            <div className='form__profile-container'>
                <img className="form__profile" src={ProfileThumbnail} alt="Profile thumbnail" />
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